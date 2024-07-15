import { Chapters } from '../models/chapter.interface';

export const chapters: Chapters = {
  '/intro': {
    chapterTitle: 'Intro',
    chapterDescription: null,
    previousChapter: '/welcome',
    nextChapter: '/cafe',
    backgroundImage: 'assets/images/Park.png',
    sections: [
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Sam-Torso.png',
        characterImageCircle: 'assets/images/Sam-Head.png',
        dialogueLines: [
          { speaker: 1, message: "Hey! I'm Sam!", params: [] },
          {
            speaker: 1,
            message:
              'For your safety, note that you can close this application with the quick exit button in the top right.',
            params: [],
          }
        ],
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Sam-Torso.png',
        characterImageCircle: 'assets/images/Sam-Head.png',
        dialogueLines: [
          {
            speaker: 0,
            message: "Also, if someone is monitoring your device, consider clearing this from your browser's history.",
            params: [],
          }
        ],
        layout: 'content',
        bullets: [
          'For more information about tech safety, visit ceta.tech.cornell.edu/resources or call the National Domestic Violence Hotline at 1-800-799-7233 or TTY 1-800-787-3224.',
        ]
      },
      {
        sectionType: 'scene',
        leftCharacterImage: 'assets/images/Sam.png',
        rightCharacterImage: '',
        dialogueLines: [
          {
            speaker: 1,
            message:
              "Okay! Let's begin. Healthy relationships thrive on mutual respect, trust, and open communication.",
            params: [],
          },
          {
            speaker: 1,
            message:
              'Do any of these couples sound like your relationships?...',
            params: [],
          },
        ],
      },
      {
        sectionType: 'scene',
        leftCharacterImage: 'assets/images/Sam.png',
        rightCharacterImage: 'assets/images/Couple 1.png',
        dialogueLines: [
          {
            speaker: 2,
            message:
              'We make it easy to talk about pregnancy and birth control.',
            params: [],
          },
        ],
      },
      {
        sectionType: 'scene',
        leftCharacterImage: 'assets/images/Sam.png',
        rightCharacterImage: 'assets/images/Couple 2.png',
        dialogueLines: [
          {
            speaker: 2,
            message:
              "We're on the same page about getting pregnant and how to handle pregnancy decisions.",
            params: [],
          },
        ],
      },
      {
        sectionType: 'scene',
        leftCharacterImage: 'assets/images/Sam.png',
        rightCharacterImage: 'assets/images/Couple 3.png',
        dialogueLines: [
          {
            speaker: 2,
            message:
              'My partner supports my decisions about sex, pregnancy and birth control.',
            params: [],
          },
        ],
      },
      {
        sectionType: 'scene',
        leftCharacterImage: 'assets/images/Sam.png',
        rightCharacterImage: 'assets/images/Couple 4.png',
        dialogueLines: [
          {
            speaker: 2,
            message:
              'I feel comfortable expressing my sexual desires AND saying no to sex.',
            params: [],
          },
        ],
      },
      {
        sectionType: 'scene',
        leftCharacterImage: 'assets/images/Sam.png',
        rightCharacterImage: '',
        dialogueLines: [
          {
            speaker: 1,
            message:
              'If these couples remind you of your relationships, great!',
            params: [],
          },
          {
            speaker: 1,
            message:
              "If not, you're not the only one. Everyone needs support sometimes.",
            params: [],
          },
          {
            speaker: 1,
            message:
              "I have a friend, Jade, who could use our help right now.",
            params: [],
          },
          {
            speaker: 1,
            message:
              "In this program, we'll support her as she takes back control of her body and health.",
            params: [],
          },
          {
            speaker: 1,
            message:
              "Jade's waiting for us at a cafe down the block. Let's go meet her!",
            params: [],
          },
        ],
      },
    ],
  },
  '/cafe': {
    chapterTitle: 'The Cafe',
    chapterDescription: 'Sam and Jade Discuss Reproductive Coercion',
    previousChapter: '/intro',
    nextChapter: '/clinic',
    backgroundImage: 'assets/images/Cafe.png',
    sections: [
      {
        sectionType: 'scene',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Sam.png',
        dialogueLines: [
          {
            speaker: 2,
            message: 'Hey, Jade! You look kinda stressed...you okay?',
            params: [],
          },
          {
            speaker: 0,
            message:
              "Hi, Sam. I don't know...my partner and I are fighting again.",
            params: [],
          },
          { speaker: 2, message: 'Wanna talk about it?', params: [] },
          {
            speaker: 0,
            message: "PJ really wants kids, but I just don't think I'm ready.",
            params: [],
          },
          {
            speaker: 2,
            message: 'Oh, that sounds tough... How have your talks been going?',
            params: [],
          },
          {
            speaker: 0,
            message: 'Not great. We keep having the same argument.',
            params: [],
          },
          { speaker: 2, message: 'That sounds frustrating...', params: [] },
          {
            speaker: 0,
            message: "It is! I've been feeling nervous, so I got on the pill.",
            params: [],
          },
          {
            speaker: 0,
            message: 'But my pills haven been missing and I think PJ took them',
            params: [],
          },
          { speaker: 2, message: 'Dude, what?', params: [] },
          {
            speaker: 0,
            message: 'I think PJ poked a hole in the condom last night...',
            params: [],
          },
          {
            speaker: 2,
            message: "This isn't okay, Jade.",
            params: [],
          },
          {
            speaker: 2,
            message:
              'Your partner has no right to force you into something you’re not ready for.',
            params: [],
          },
          {
            speaker: 0,
            message:
              "Right! I'm pretty sure PJ threw away my prescription refill, too.",
            params: [],
          },
        ],
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Sam-Torso.png',
        characterImageCircle: 'assets/images/Sam-Head.png',
        dialogueLines: [
          {
            speaker: 1,
            message:
              "This is called reproductive coercion. It's a serious form of abuse where someone controls or pressures another person's decisions about birth control or pregnancy.",
            params: [],
          },
          {
            speaker: 1,
            message:
              "It's a common issue that affects people of all genders, races, sexual orientations, and socioeconomic statuses.",
            params: [],
          }
        ],
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Sam-Torso.png',
        characterImageCircle: 'assets/images/Sam-Head.png',
        dialogueLines: [
          {
            speaker: 0,
            message: 'Here are some examples:',
            params: [],
          }
        ],
        layout: 'content',
        bullets: [
          '🚩 Hiding, damaging or tampering with birth control',
          '🚩 Forcing or pressuring someone to get pregnant or have an abortion',
          '🚩 Keeping someone from getting an abortion when they want one',
          '🚩 Poking holes in or breaking condoms',
          '🚩 Not withdrawing ("pulling out") after agreeing to',
          '🚩 Attempting to cause a miscarriage',
        ]
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Sam-Torso.png',
        characterImageCircle: 'assets/images/Sam-Head.png',
        dialogueLines: [
          {
            speaker: 0,
            message: 'It is never okay for someone to...',
            params: [],
          },
        ],
        layout: 'content',
        bullets: [
          '🚩 Control your reproductive decisions',
          '🚩 Control your access to reproductive health care providers',
          '🚩 Force you to have unprotected sex',
        ]
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Sam-Torso.png',
        dialogueLines: [
          {
            speaker: 1,
            message:
                'Reproductive coercion is bad for your mental health and increases your risk of STIs/HIV, unintended pregnancies, and unsafe abortions.',
            params: [],
          },
          {
            speaker: 1,
            message:
                'Knowing these risks can help you take care of yourself and make informed decisions.',
            params: [],
          },
        ],
      },
      {
        sectionType: 'scene',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Sam.png',
        dialogueLines: [
          {
            speaker: 0,
            message: 'Whatever it is, I just know I feel anxious and trapped.',
            params: [],
          },
          { speaker: 2, message: "Jade, I'm here for you.", params: [] },
          {
            speaker: 2,
            message:
              'You deserve to feel safe and in control of your own body and decisions.',
            params: [],
          },
          {
            speaker: 0,
            message: "Yes!! But I don't know what to do...",
            params: [],
          },
          { speaker: 2, message: "I understand. I've been there.", params: [] },
          { speaker: 2, message: 'Who else knows about this?', params: [] },
          {
            speaker: 0,
            message: "I haven't really talked to anyone...",
            params: [],
          },
          { speaker: 0, message: "...I'm kinda embarassed.", params: [] },
          {
            speaker: 2,
            message: "Okay, well you don't have to go through this alone.",
            params: [],
          },
          {
            speaker: 2,
            message:
              'Have you considered getting on something you can keep private?',
            params: [],
          },
          { speaker: 0, message: 'What do you mean?', params: [] },
          {
            speaker: 2,
            message:
              'Well, you could get the birth control shot, implant, or IUD.',
            params: [],
          },
          {
            speaker: 0,
            message:
              "Oh...maybe?  I don't want to worry about getting pregnant!",
            params: [],
          },
          { speaker: 0, message: 'What would you do?', params: [] },
          {
            speaker: 2,
            message:
              "I got the implant last year...I barely feel it and no one even knows it's there!",
            params: [],
          },
          { speaker: 0, message: 'That sounds nice...', params: [] },
          {
            speaker: 2,
            message: "If you want, I'll show you the clinic that helped me?",
            params: [],
          },
          { speaker: 0, message: 'Okay!', params: [] },
          { speaker: 0, message: 'Thanks, Sam.', params: [] },
          { speaker: 2, message: 'Anytime, Jade.', params: [] },
        ],
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Sam-Torso.png',
        characterImageCircle: 'assets/images/Sam-Head.png',
        dialogueLines: [
          {
            speaker: 1,
            message:
              'Relationships are tough, especially ones that are unhealthy or unsafe. Sometimes we can feel alone.',
            params: [],
          },
          {
            speaker: 1,
            message:
              'You can make a difference. Check in with your friends and family who may be having a tough time in their relationships.',
            params: [],
          },
          {
            speaker: 1,
            message:
              "Don't know where to start? Try sharing some of the resources you learn today.",
            params: [],
          },
          {
            speaker: 1,
            message: 'Helping others is good for you, too!',
            params: [],
          },
        ],
      },
    ],
  },
  '/clinic': {
    chapterTitle: 'The Clinic',
    chapterDescription: 'Jade Visits The Clinic',
    previousChapter: '/cafe',
    nextChapter: '/ending',
    backgroundImage: 'assets/images/PatientRoom.png',
    sections: [
      {
        sectionType: 'scene',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
          {
            speaker: 2,
            message: "Hi Jade, I'm Dr. Green! What brings you in today?",
            params: [],
          },
          {
            speaker: 0,
            message:
              'My friend was telling me about reproductive coercion, and some of it sounded like my relationship.',
            params: [],
          },
          {
            speaker: 0,
            message:
              'I need emergency contraception, and I want to switch my birth control to something that I can hide.',
            params: [],
          },
          {
            speaker: 2,
            message: "Absolutely! I'm really glad you brought this up, Jade.",
            params: [],
          },
          {
            speaker: 2,
            message: 'This is something that a lot of people go through.',
            params: [],
          },
          {
            speaker: 0,
            message:
              'I heard that some people keep their birth control secret to stay in control when others are pressuring them to get pregnant...',
            params: [],
          },
          {
            speaker: 0,
            message:
              'My partner takes off condoms during sex and messes with my birth control pills...',
            params: [],
          },
          {
            speaker: 0,
            message: "I'm nervous and not ready to get pregnant",
            params: [],
          },
          {
            speaker: 2,
            message:
              "Absolutely, Jade. It's great that you're taking charge of your health. I'm here for you!",
            params: [],
          },
        ],
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        characterImageCircle: 'assets/images/Doctor-Head.png',
        layout: 'content',
        gridOptionIndexes: [2, 3, 4],
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Here are some options for emergency contraception. Select one to continue.',
            params: [],
          },
        ],
      },
      {
        sectionType: 'monologue',
        overlay: true,
        previousSectionIndex: 1,
        nextSectionIndex: 5,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        characterImageCircle: 'assets/images/Doctor-Head.png',
        dialogueLines: [
          {
            speaker: 0,
            message: "Tell the clinic it\'s for emergency contraception so you are scheduled quickly.",
            params: [],
          },
        ],
        layout: 'content',
        contraception: {
          name: 'Copper IUD',
          preview: 'assets/images/IUD.png',
          description: 'Tiny device put in your uterus.',
          price: '$0-$1300',
          use_within_short: "5 days",
          use_within_long: "Use within 5 days of unprotected sex",
          effectiveness_short: '99%',
          effectiveness_long: '99% Effective',
          periods: 'Common',
          privacy: 'Strings can be cut short so your partner cannot feel them',
        }
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        characterImageCircle: 'assets/images/Doctor-Head.png',
        dialogueLines: [
          {
            speaker: 0,
            message: 'Some patients trash the packaging and keep the pill in a plain container, like an empty pill bottle.',
            params: [],
          },
        ],
        previousSectionIndex: 1,
        nextSectionIndex: 5,
        layout: 'content',
        contraception: {
          name: 'Ella',
          preview: 'assets/images/Ella.png',
          description: 'A single pill taken as soon as possible after unprotected sex, ideally within 5 days.',
          price: '$0-$50',
          use_within_short: "5 days",
          use_within_long: "Use within 5 days of unprotected sex",
          effectiveness_short: '85-98%',
          effectiveness_long: '85-98% effective, may be less if over 195 lbs',
          periods: 'Common',
          privacy: 'You can get an extra pack and store it in a plain container for future emergencies',
        }
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        characterImageCircle: 'assets/images/Doctor-Head.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Some patients trash the packaging and keep the pill in a plain container, like an empty pill bottle.',
            params: [],
          },
        ],
        previousSectionIndex: 1,
        nextSectionIndex: 5,
        layout: 'content',
        contraception: {
          name: 'Plan B One Step (or generic)',
          preview: 'assets/images/Plan B.png',
          description: 'A single pill taken as soon as possible after unprotected sex, ideally within 3 days.',
          price: '$0-50',
          use_within_short: "3 days",
          use_within_long: "Use within 3 days of unprotected sex",
          effectiveness_short: '75–89%',
          effectiveness_long: '75–89% effective, may be less if over 165 lbs',
          periods: 'Common',
          privacy: 'You can get an extra pack and store it in a plain container for future emergencies',
        }
      },
      {
        sectionType: 'scene',
        previousSectionIndex: 1,
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Okay! The morning after pill looks good, and I want an extra pill for future emergencies.',
            params: [],
          },
          {
            speaker: 2,
            message:
              "We can do that! Now let's discuss a long term solution for your birth control",
            params: [],
          },
          {
            speaker: 0,
            message:
              'The shot, implant, and IUD can all provide reliable protection, and are very discreet.',
            params: [],
          },
          {
            speaker: 0,
            message:
              'When selecting a private method, consider how it might be discovered, such as through monitoring your period.',
            params: [],
          },
        ],
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        characterImageCircle: 'assets/images/Doctor-Head.png',
        gridOptionIndexes: [7, 8, 9, 10],
        layout: 'content',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Here are some options for private contraception. Select one to continue.',
            params: [],
          },
        ],
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        characterImageCircle: 'assets/images/Doctor-Head.png',
        previousSectionIndex: 6,
        nextSectionIndex: 11,
        dialogueLines: [
          {
            speaker: 0,
            message:
              'If your partner monitors your schedule, they may prevent you from attending appointments every three months.',
            params: [],
          },
        ],
        layout: 'content',
        contraception: {
          name: 'The Shot',
          preview: 'assets/images/Injection.png',
          description: 'Injection in your arm or buttocks every 3 months',
          price: '$0-$150',
          effectiveness_short: '96%',
          effectiveness_long: '96% Effective',
          duration_short: '3 months',
          duration_long: 'Get every 3 months',
          periods: 'Common',
          privacy: 'No at home supplies, but requires regular access to the clinic.',
        }
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        characterImageCircle: 'assets/images/Doctor-Head.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'We can trim the strings so they cannot be felt or removed by your partner.',
            params: [],
          },
        ],
        previousSectionIndex: 6,
        nextSectionIndex: 11,
        layout: 'content',
        contraception: {
          name: 'IUD',
          preview: 'assets/images/IUD.png',
          description: 'Tiny device put in your uterus, low-maintenance once inserted.',
          price: '$0-$1300',
          effectiveness_short: '99%',
          effectiveness_long: '99% Effective',
          duration_short: '3-12 years',
          duration_long: 'Lasts 3-12 years',
          periods: 'Common',
          privacy: 'Strings can be cut short so your partner cannot feel them.',
        }
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        characterImageCircle: 'assets/images/Doctor-Head.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Some people have initial bruising, but the implant is mostly invisible once your skin heals.',
            params: [],
          },
        ],
        previousSectionIndex: 6,
        nextSectionIndex: 11,
        layout: 'content',
        contraception: {
          name: 'The Implant (Nexplanon)',
          preview: 'assets/images/Implant.png',
          description: 'Small & discreet device inserted under the skin.',
          price: '$0-$2200',
          effectiveness_short: '99%',
          effectiveness_long: '99% Effective',
          duration_short: '5 years',
          duration_long: 'Lasts up to 5 years',
          periods: 'Common',
          privacy: 'Mostly invisible once your skin heals. Can sometimes be seen or felt if someone touches your arm. Consider how to manage the recovery period and signs from the procedure from a partner who might be monitoring your health or activities.',
        }
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        characterImageCircle: 'assets/images/Doctor-Head.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Sterilization is a private option after the recovery period. Recovery times vary and may require follow-up appointments.',
            params: [],
          },
        ],
        previousSectionIndex: 6,
        nextSectionIndex: 11,
        layout: 'content',
        contraception: {
          name: 'Sterilization (Tubal Ligation)',
          preview: 'assets/images/Sterilization.png',
          description: 'Permanent surgical procedure where your provider cuts or blocks your fallopian tubes.',
          price: '$0-6000',
          effectiveness_short: '99%',
          effectiveness_long: '99% Effective',
          duration_short: 'Permanent',
          duration_long: 'Permanent.',
          periods: 'No changes',
          privacy: 'Consider how to manage the recovery period and hide signs from the procedure (i.e. a small surgical scar) if someone is monitoring your health or activities',
        }
      },
      {
        sectionType: 'scene',
        previousSectionIndex: 6,
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'That all sounds good. I think the shot sounds like a good fit for me. When can I get started?',
            params: [],
          },
          {
            speaker: 2,
            message: "We can schedule an appointment whenever you're ready.",
            params: [],
          },
          {
            speaker: 0,
            message:
              "Perfect, let's do it. Thank you for listening and helping me find the right option!",
            params: [],
          },
          {
            speaker: 2,
            message:
              "You're welcome, Jade. It was brave of you to bring this up.",
            params: [],
          },
          {
            speaker: 2,
            message:
              'Also, if you ever feel pressured or controlled in your relationship, there are resources and support available.',
            params: [],
          },
          {
            speaker: 2,
            message: 'Check them out if you need additional support!',
            params: [],
          },
          { speaker: 0, message: 'Got it! Thanks!', params: [] },
        ],
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
          {
            speaker: 1,
            message:
              "We're almost done! You can be brave like Jade. Take charge of your reproductive health today.",
            params: [],
          },
          {
            speaker: 1,
            message:
              'Talk to your provider about how to stay safe and healthy now and in the future.',
            params: [],
          }
        ]
      },
      {
        sectionType: 'monologue',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle.png',
        characterImageCircle: 'assets/images/Doctor-Head.png',
        dialogueLines: [
          {
            speaker: 0,
            message: 'Here are some things you can ask about:',
            params: [],
          }
        ],
        layout: 'content',
        bullets: [
          '⚫️ Emergency contraception and birth control you can keep private.',
          '⚫️ Notifying your partner anonymously if you have an STI and are afraid of them finding out.',
          "⚫️ Your options if you're pregnant and don't want to be.",
          "⚫️ Your options if a partner won't use a condom.",
          '⚫️ How to talk to your partner about birth control',
          '⚫️ Using the clinic phone to call hotlines or other resources if your partner monitors your phone',
        ]
      },
    ],
  },
};
