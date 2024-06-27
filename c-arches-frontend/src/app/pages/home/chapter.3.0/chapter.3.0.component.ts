import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-chapter.3.0',
  templateUrl: './chapter.3.0.component.html',
  styleUrl: './chapter.3.0.component.scss'
})
export class Chapter30Component {
    backgroundImage = 'assets/images/Park.png';
    data = [
        {
            preview: "Tips for:",
            title: "Talking to your healthcare provider",
            intro: "",
            bullets: [
                "✅ Be open and honest about your concerns",
                "✅ If your partner monitors your phone, ask your provider to use their phone to call the resource hotlines.",
                "✅ Discuss safety planning and emergency contraception options",
                "✅ If you have an STD and are afraid your partner will hurt you if they find out, request anonymous partner notification from the Health Department.",
            ],
            footer: [
                "Remember, you have the right to feel safe and make decisions about your body.",
                "Reach out for help. Your health care provider is there to support you. You can also contact resources below for confidential support.",
            ]
        },    
        {
            preview: "Thinking about:",
            title: "Who calls the shots?",
            intro: "Think about who makes the big decisions in your relationships. Ask yourself:",
            bullets: [
                "🔹 Who decides when to have sex and what sexual activities to engage in?",
                "🔹 Who decides when or if I'm ready for a baby?",
                "🔹 Who chooses how to prevent pregnancy?",
                "🔹 Who has the final say on pregnancy decisions?",
            ],
            footer: [
                "Your voice matters in these decisions. You deserve to feel empowered and informed about your sexual and reproductive health.\n",
                "#YouDecide",
                "Talk to your healthcare provider. They're here to support you in making choices that keep you healthy and happy.\n",
            ]
        },
        {
            preview: "Final thoughts...",
            title: "Growing Together",
            intro: "In any relationship, mutual respect and open communication are key! Here are some important aspects that make our partnership strong and supportive:\n",
            bullets: [
                "💖 Supportive attitude: My partner supports my decisions regarding pregnancy and birth control.",
                "💬 Open communication: We make it easy to talk about sex and any concerns we may have about pregnancy and birth control.",
                "🚫 Respect for boundaries: I feel comfortable saying no to sex when I'm not ready or willing.",
                "✅ Mutual Agreement: When it comes to major decisions like when/if to get pregnant, and how to handle pregnancy decisions, we're on the same page.",
            ],
            footer: [
                "Healthy relationships thrive on respect, trust, and open dialogue. Let's continue building a supportive and loving partnership together! 💕"
            ]
        }
    ];
  
    currentIndex = 0;
    current = this.data[this.currentIndex];

    constructor(private router: Router) { }

    next() {
        if (this.currentIndex < this.data.length - 1){
            this.currentIndex = this.currentIndex + 1;
            this.current = this.data[this.currentIndex];
        }
    }
    
    previous() {
        if (this.currentIndex > 0){
            this.currentIndex = this.currentIndex - 1;
            this.current = this.data[this.currentIndex];
        }
    }

    finish() {
        this.router.navigate(['']);
    }
}
