import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DialogueLine} from "../../../shared/components/dialogue/dialogue-line.inferface";

@Component({
  selector: 'app-chapter.2.1',
  templateUrl: './chapter.2.1.component.html',
  styleUrl: './chapter.2.1.component.scss'
})
export class Chapter21Component {

    backgroundImage = 'assets/images/PatientRoom.png';
    characterImage = 'assets/images/Doctor-Idle.png';
    
    defaultLines : DialogueLine[] = [
        { speaker: 0, message: "Click to learn more about each method.", params: []},
    ];
    
    data = [
        {
            name: "The Shot",
            price: "$0-$150",
            effectiveness: "96% Effective",
            lines: [
                {
                    speaker: 0,
                    message: "The shot may change your period, so your partner could notice.",
                    params: []
                },
                {
                    speaker: 0,
                    message: "It requires an injection at the clinic every few months.",
                    params: []
                },
                {
                    speaker: 0,
                    message: "If your partner monitors your movements or controls your schedule, they interfere with your ability to attend these appointments.",
                    params: []
                },
            ],
        },
        {
            name: "IUD",
            price: "$0-$1300",
            effectiveness: "99% Effective",
            lines: [
                {
                    speaker: 0,
                    message: "Your partner might be able to feel the strings, but we can trim them to ensure they are undetectable and cannot be removed by your partner.",
                    params: []
                },
            ],
        },
        {
            name: "The Implant",
            price: "$0-$2200",
            effectiveness: "99% Effective",
            lines: [
                {
                    speaker: 0,
                    message: "Some people may have initial bruising with the implant.",
                    params: []
                },
            ],
        },
        {
            name: "Sterilization",
            price: "???",
            effectiveness: "???",
            lines: [
                {
                    speaker: 0,
                    message: "Sterilization is a permanent form of birth control.",
                    params: []
                },
                {
                    speaker: 0,
                    message: "While it is high effective, it's meant to be a permanent decision.",
                    params: []
                },
                {
                    speaker: 0,
                    message: "It's important to make an informed decision that aligns with your future plans and goals.",
                    params: []
                },
            ],
        }
    ];
    
    currentIndex = -1;
    dialogueLines = this.defaultLines;
  
    constructor(private router: Router) { }

    ngOnInit() { }
    
    select(index:number) {
        this.currentIndex = index;
        this.dialogueLines = this.data[this.currentIndex].lines;
    }
    
    back(){
        this.currentIndex = -1;
        this.dialogueLines = this.defaultLines;
    }
    
    continue(){
        this.router.navigate(['/chapters/2/2']);
    }
}
