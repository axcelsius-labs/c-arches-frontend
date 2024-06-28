import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

constructor() { }

animateText(text: string, delay: number): Observable<string> {
  return new Observable<string>((observer) => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        observer.next(text.slice(0, index + 1));
        index++;
      } else {
        observer.complete();
        clearInterval(intervalId);
      }
    }, delay);
  });
}
}
