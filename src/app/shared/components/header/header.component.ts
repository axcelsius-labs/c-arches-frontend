import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DialogueService } from '../../services/dialogue.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'C-ARCHES';

  highlightExit: boolean = false;
  private currentLineSubscription!: Subscription;
  private routerSubscription!: Subscription;
  private isIntroRoute: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogueService: DialogueService,
  ) {}

  ngOnInit() {
    this.currentLineSubscription = this.dialogueService.currentLine$.subscribe(
      (line) => {
        if (this.isIntroRoute) {
          this.highlightExit =
            line.params && line.params.includes('highlightExit');
        } else {
          this.highlightExit = false;
        }
      },
    );

    // Subscribe to router events to detect navigation changes
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });

    // Initial check for the route
    this.checkRoute();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to prevent memory leaks
    this.currentLineSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  private checkRoute(): void {
    const urlSegments = this.route.snapshot.url;
    this.isIntroRoute =
      urlSegments.length > 0 && urlSegments[0].path === 'intro';

    // Reset showHighlightExit if not in Intro route
    if (!this.isIntroRoute) {
      this.highlightExit = false;
    }
  }

  goToHomeScreen() {
    this.router.navigate(['/']);
  }

  goToResources() {
    this.router.navigate(['/resources']);
  }

  exit() {
    localStorage.clear();
    window.location.href = 'https://weather.com/';
  }
}
