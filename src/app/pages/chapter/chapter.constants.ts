import { Chapters } from "../../shared/models/chapter.interface";

export const chapters: Chapters = {
    "intro": {
        backgroundImage: 'assets/images/Park.png',
        characterImage: 'assets/images/Alex.png',
        dialogueLines: [
            { speaker: 0, message: "Hey! I'm Sam!", params: []},
            { speaker: 0, message: "Before we begin, note that this quick exit button in the bottom right will take you to the Weather Channel homepage.", params: []},
            { speaker: 0, message: "Use it if you ever need to escape, and use the link in your email to return here.", params: []},
            { speaker: 0, message: "Also, consider using a safe device and clearing your browser history if you think a partner may be monitoring you.", params: []}
        ],
        nextPage: '1.0',
        chapterType: "monologue"
    },
    "1.0": {
        backgroundImage: 'assets/images/LivingRoom.png',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Alex.png',
        dialogueLines: [
            { speaker: 1, message: "Hey, Jade! You look kinda stressed...you okay?", params: []},
            { speaker: 0, message: "Hey, Sam.", params: []},
            { speaker: 0, message: "I don't know...Charlie and I are fighting again.", params: []},
            { speaker: 1, message: "Wanna talk about it?", params: []},
            { speaker: 0, message: "He really wants kids now, but I just don't think I'm ready.", params: []},
            { speaker: 1, message: "Oh, that sounds tough... How have your talks been going?", params: []},
            { speaker: 0, message: "Not great.  He keeps bringing it up, and gets upset and yells when I say no.", params: []},
            { speaker: 1, message: "Woah! Is he violent?", params: []},
            { speaker: 0, message: "No, but he hid my birth control.", params: []},
            { speaker: 0, message: "He denied it, but I know he took it.", params: []},
            { speaker: 1, message: "Dude, what?", params: []},
            { speaker: 0, message: "It made me really uncomfortable.", params: []},
            { speaker: 0, message: "I'm pretty sure he threw away my prescription refill, too.", params: []},
            { speaker: 1, message: "This isn't okay, Jade.", params: []},
            { speaker: 1, message: "He has no right to force you into something you’re not ready for.", params: []},
            { speaker: 0, message: "I think he was poking holes in the condoms before...", params: []},
            { speaker: 0, message: "...and now he says he won't use one.", params: []},
        ],
        nextPage: '1.1',
        chapterType: 'default'
    },
    "1.1": {
        backgroundImage:'assets/images/LivingRoom.png',
        characterImage: 'assets/images/Alex.png',
        dialogueLines: [
            { speaker: 0, message: "Okay. This is called reproductive coercion, and it’s a serious, yet common form of abuse by partners (or others).", params: []},
            { speaker: 0, message: "Reproductive coercion can affect anyone, regardless of gender or sexual orientation.", params: []},
            { speaker: 0, message: "It involves behaviors that interfere with an someone's reproductive choices and autonomy, like:", params: [
                "🚩 Hiding, damaging or tampering with birth control",
                "🚩 Pressuring someone to become pregnant",
                "🚩 Pressuring someone to have or not have an abortion",
                "🚩 Poking holes in or breaking condoms",
                "🚩 Not withdrawing (i.e., \"pulling out\") after agreeing to",
                "🚩 Attempting to cause a miscarriage"]},
            { speaker: 0, message: "If you think you're experiencing reproductive coercion, here are some signs you can watch out for:", params: [
                "If someone:",
                "🚩 Uses threats or physical, emotional, or financial harm to control your reproductive decisions",
                "🚩 Controls or restricts your access to healthcare providers, especially ones who issue birth control",
                "🚩 Forces you to have unprotected sex",
                "🚩 Refuses to use condoms, or attempts to remove them during sex"]},
            { speaker: 0, message: "Reproductive coercion can really impact your health by making it hard to get the healthcare you need, causing stress, and increasing your risk of STIs/HIV, unintended pregnancies, and even unsafe abortion.", params: []},
            { speaker: 0, message: "Understanding these risks is essential for taking care of yourself and making decisions that are right for you.", params: []},
            { speaker: 0, message: "It’s important that you feel safe and in control of your own body and decisions.", params: []},
        ],
        nextPage: '1.2',
        chapterType: 'monologue'
    },
    "1.2": {
        backgroundImage: 'assets/images/LivingRoom.png',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Alex.png',
        dialogueLines: [
            { speaker: 0, message: "Whatever it is, I just know I feel anxious and trapped.", params: []},
            { speaker: 1, message: "Jade, I'm here for you.", params: []},
            { speaker: 1, message: "Who else knows about this?", params: []},
            { speaker: 0, message: "I haven't really talked to anyone...", params: []},
            { speaker: 0, message: "...I'm kinda embarassed.", params: []},
            { speaker: 1, message: "Okay, well you don't have to go through this alone.", params: []},
            { speaker: 1, message: "Have you considered getting on something that your partner can't mess with?", params: []},
            { speaker: 0, message: "What do you mean?", params: []},
            { speaker: 1, message: "Well, you could get the birth control shot, implant, or IUD.", params: []},
            { speaker: 0, message: "Oh...maybe?  I don't want to worry about getting pregnant!", params: []},
            { speaker: 0, message: "What would you do?", params: []},
            { speaker: 1, message: "I got an IUD last year...You'll barely feel it, and he won't even know it's there!", params: []},
            { speaker: 0, message: "That sounds nice...", params: []},
            { speaker: 1, message: "If you want, I'll show you the counselor who helped me?", params: []},
            { speaker: 0, message: "Okay!", params: []},
            { speaker: 0, message: "Thanks, Sam.", params: []},
            { speaker: 1, message: "Anytime, Jade.", params: []},
        ],
        nextPage: '1.3',
        chapterType: 'default'
    },
    "1.3": {
        backgroundImage: 'assets/images/LivingRoom.png',
        characterImage: 'assets/images/Alex.png',
        dialogueLines: [
            { speaker: 0, message: "Relationships are tough, and everyone goes through moments where they feel helpless.", params: []},
            { speaker: 0, message: "Experiencing these feelings isn't fun, but it's not uncommon. The most important thing to remember is that you're never truly alone.", params: []},
            { speaker: 0, message: "Connecting with friends and family can make a huge difference, and your healthcare provider always has your best interests in mind.", params: []},
            { speaker: 0, message: "Try saying something like, \"Hey, I've been there. I found some helpful resources that could make things easier. Let's figure this out together.\"", params: []},
            { speaker: 0, message: "Remember, supporting each other isn't just kind--it boosts your own well-being, too. When we lend a hand, we all grow stronger together.", params: []},
        ],
        nextPage: '2.0',
        chapterType: 'monologue'
    },
    "2.0": {
        backgroundImage: 'assets/images/PatientRoom.png',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
            { speaker: 1, message: "Hi Jade, I'm Dr. Green! What brings you in today?", params: []},
            { speaker: 0, message: "My friend recommended I come see you...We were talking about reproductive coercion...", params: []},
            { speaker: 0, message: "...some of it hit close to home.", params: []},
            { speaker: 0, message: "I want to talk about emergency contraception and getting on birth control that my partner can't mess with.", params: []},
            { speaker: 1, message: "Absolutely! I'm really glad you brought this up, Jade.", params: []},
            { speaker: 1, message: "This is something that a lot of people go through.", params: []},
            { speaker: 0, message: "Yeah...I'm noticing some things in my relationship and realized I want to take control over my reproductive health.", params: []},
            { speaker: 1, message: "Absolutely, Jade. It's great that you're being proactive about your health. I'm here for you!", params: []},
            { speaker: 1, message: "We can discuss all of your options.", params: []},
            { speaker: 1, message: "Have you heard of the morning-after pill, like Plan B?", params: []},
            { speaker: 0, message: "Yeah, but I've never used it...and I don't want my partner to know...", params: []},
            { speaker: 1, message: "Okay! Well the morning-after pill is available over-the-counter at most pharmacies.", params: []},
            { speaker: 1, message: "If you want to be discreet, you could trash the packaging and keep the pill in a plain container.", params: []},
            { speaker: 1, message: "Options like the shot, the implant, or the IUD can provide reliable protection.", params: []},
            { speaker: 1, message: "They're discreet and can help you feel more confident about your reproductive health.", params: []},
        ],
        nextPage: '2.1',
        chapterType: 'default'
    },
    "2.1": {
        backgroundImage: 'assets/images/PatientRoom.png',
        characterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
            { speaker: 0, message: "Click to learn more about each method.", params: []},
        ],
        data: [
            {
                name: "The Shot",
                description: "Injection in your arm or buttocks every 3 months",
                price: "$0-$150",
                effectiveness: "96% Effective",
                duration_short: "3 months",
                duration_long: "Get every 3 months",
                periods: "Changes in your period are common, e.g. bleeding more days, spotting, or not getting period at all.",
                privacy: "No at home supplies, so easy to keep private but requires regular access to clinic.",
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
                description: "Tiny device put in your uterus, low-maintenance once inserted.",
                price: "$0-$1300",
                effectiveness: "99% Effective",
                duration_short: "3-12 years",
                duration_long: "Lasts 3-12 years",
                periods: "Hormonal: Irregular bleeding for first few months, but likely to have shorter, lighter periods over time. Non-hormonal/copper: Period may be longer and heavier.",
                privacy: "Easy to keep private, strings can be cut short.",
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
                description: "Small & discreet device inserted under the skin.",
                price: "$0-$2200",
                effectiveness: "99% Effective",
                duration_short: "5 years",
                duration_long: "Lasts up to 5 years",
                periods: "???",
                privacy: "Mostly invisible once your skin heals. Can sometimes be seen or felt if someone touches your arm. Consider how to manage the recovery period and signs from the procedure from a partner who might be monitoring your health or activities.",
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
                description: "Permanent surgical procedure where your provider cuts or blocks your fallopian tubes.",
                price: "???",
                effectiveness: "???",
                duration_short: "Permanent",
                duration_long: "Permanent. Recovery times vary and may require follow-up appointments.",
                periods: "???",
                privacy: "Private after recovery. Consider how to manage the recovery period and signs from the procedure from a partner who might be monitoring your health or activities.",
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
        ],
        nextPage: '2.2',
        chapterType: 'chapter2.1'
    },
    "2.2": {
        backgroundImage: 'assets/images/PatientRoom.png',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
            { speaker: 0, message: "That all sounds good. I think the shot sounds like a good fit for me. When can we get started?", params: []},
            { speaker: 1, message: "We can schedule an appointment whenever you're ready.", params: []},
            { speaker: 0, message: "Perfect, let's do it. Thank you for helping me find the right option!", params: []},
            { speaker: 1, message: "You're welcome, Jade.", params: []},
            { speaker: 1, message: "Also, if you ever feel pressured or controlled in your relationship, there are resources and support available.", params: []},
            { speaker: 1, message: "Check them out if you need additional support!", params: []},
            { speaker: 0, message: "Got it! Thanks!", params: []},
        ],
        nextPage: '3.0',
        chapterType: 'default'
    },
    "3.0": {
        backgroundImage: 'assets/images/Park.png',
        data: [
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
        ],
        nextPage: '',
        chapterType: 'chapter3.0'
    },
}