import { Chapters } from '../../shared/models/chapter.interface';

export const chapters: Chapters = {
  '/intro': {
    chapterTitle: 'Intro',
    chapterDescription: null,
    previousChapter: null,
    nextChapter: '/cafe',
    sections: [
      {
        backgroundImage: 'assets/images/Park.png',
        overlay: true,
        leftCharacterImage: 'assets/images/Alex-Torso.png',
        dialogueLines: [
          { speaker: 0, message: "Hey! I'm Sam!", params: [] },
          {
            speaker: 0,
            message:
              'For your safety, the exit button in the top right will take you immediately to the Weather Channel homepage.',
            params: [],
          },
          {
            speaker: 0,
            message:
              'Click it if you ever need to quickly leave this site. Use the link in your email to return.',
            params: [],
          },
          {
            speaker: 0,
            message:
              'Also, if you think someone may be monitoring your device, consider clearing this site from your browser history.',
            params: [],
          },
        ],
        sectionType: 'scene',
      },
      {
        backgroundImage: 'assets/images/Park.png',
        leftCharacterImage: 'assets/images/Alex.png',
        rightCharacterImage: '',
        dialogueLines: [
          {
            speaker: 0,
            message: "Okay! Let's begin.",
            params: [],
          },
          {
            speaker: 0,
            message:
              'Healthy relationships thrive on mutual respect, trust, and open communication.',
            params: [],
          },
          {
            speaker: 0,
            message: 'Do any of these sound like your relationships?',
            params: [],
          },
        ],
        sectionType: 'scene',
      },
      {
        backgroundImage: 'assets/images/Park.png',
        leftCharacterImage: 'assets/images/Alex.png',
        rightCharacterImage: 'assets/images/Couple 1.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'We make it easy to talk about pregnancy and birth control.',
            params: [],
          },
        ],
        sectionType: 'scene',
      },
      {
        backgroundImage: 'assets/images/Park.png',
        leftCharacterImage: 'assets/images/Couple 2.png',
        rightCharacterImage: '',
        dialogueLines: [
          {
            speaker: 0,
            message:
              "We're on the same page about getting pregnant and how to handle pregnancy decisions.",
            params: [],
          },
        ],
        sectionType: 'scene',
      },
      {
        backgroundImage: 'assets/images/Park.png',
        leftCharacterImage: 'assets/images/Couple 3.png',
        rightCharacterImage: '',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'My partner supports my decisions about sex, pregnancy and birth control.',
            params: [],
          },
        ],
        sectionType: 'scene',
      },
      {
        backgroundImage: 'assets/images/Park.png',
        leftCharacterImage: 'assets/images/Couple 4.png',
        rightCharacterImage: '',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'I feel comfortable expressing my sexual desires AND saying no to sex.',
            params: [],
          },
        ],
        sectionType: 'scene',
      },
      {
        backgroundImage: 'assets/images/Park.png',
        leftCharacterImage: 'assets/images/Alex.png',
        rightCharacterImage: '',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'If these couples remind you of your relationships, great!',
            params: [],
          },
          {
            speaker: 0,
            message:
              "If not, you're not the only one. Everyone needs support sometimes.",
            params: [],
          },
          {
            speaker: 0,
            message:
              "I have a friend, Jade, who's going through a tough relationship right now.",
            params: [],
          },
          {
            speaker: 0,
            message:
              "In this program, we'll support her as she takes back control of her body and health.",
            params: [],
          },
          {
            speaker: 0,
            message:
              "Jade's waiting for us at a cafe down the block. Are you ready to meet her?",
            params: [],
          },
        ],
        sectionType: 'scene',
      },
    ],
  },
  '/cafe': {
    chapterTitle: 'The Cafe',
    chapterDescription: 'Sam and Jade Discuss Reproductive Coersion',
    previousChapter: '/intro',
    nextChapter: '/clinic',
    sections: [
      {
        backgroundImage: 'assets/images/Cafe.png',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Alex.png',
        dialogueLines: [
          {
            speaker: 1,
            message: 'Hey, Jade! You look stressed...you okay?',
            params: [],
          },
          { speaker: 0, message: 'Hi, Sam.', params: [] },
          {
            speaker: 0,
            message: "I don't know...my partner and I are fighting again.",
            params: [],
          },
          { speaker: 1, message: 'Wanna talk about it?', params: [] },
          {
            speaker: 0,
            message: "PJ really wants kids, but I just don't think I'm ready.",
            params: [],
          },
          {
            speaker: 1,
            message: 'Oh, that sounds tough... How have your talks been going?',
            params: [],
          },
          {
            speaker: 0,
            message:
              'Not great. PJ keeps bringing it up, and yells when I say no.',
            params: [],
          },
          { speaker: 1, message: 'That sounds frustrating...', params: [] },
          {
            speaker: 0,
            message:
              'Yeah! I think they were poking holes in the condoms before...',
            params: [],
          },
          {
            speaker: 0,
            message: "...and now says we shouldn't use one.",
            params: [],
          },
          { speaker: 1, message: 'Dude, what?', params: [] },
          {
            speaker: 0,
            message: 'It made me really uncomfortable, so I got on the pill.',
            params: [],
          },
          {
            speaker: 0,
            message: 'But now my pills are missing...',
            params: [],
          },
          {
            speaker: 0,
            message: "I know PJ took them..but they'll never admit it.",
            params: [],
          },
          { speaker: 1, message: "This isn't okay, Jade.", params: [] },
          {
            speaker: 0,
            message: "I really don't want to worry about getting pregnant!",
            params: [],
          },
          {
            speaker: 1,
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
        sectionType: 'scene',
      },
      {
        backgroundImage: 'assets/images/Cafe.png',
        overlay: true,
        leftCharacterImage: 'assets/images/Alex-Torso.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              "This is called reproductive coercion. It's a serious form of abuse where someone controls or pressures another person's decisions about birth control or pregnancy.",
            params: [],
          },
          {
            speaker: 0,
            message:
              "It's common, and affects people of all gender, race, sexual orientation, and socioeconomic status.",
            params: [],
          },
          {
            speaker: 0,
            message: 'Here are some examples:',
            params: [
              '🚩 Hiding, damaging or tampering with birth control',
              '🚩 Pressuring someone to become pregnant',
              '🚩 Pressuring someone to have or not have an abortion',
              '🚩 Poking holes in or breaking condoms',
              '🚩 Not withdrawing (i.e., "pulling out") after agreeing to',
              '🚩 Attempting to cause a miscarriage',
            ],
          },
          {
            speaker: 0,
            message: 'It is never okay for someone to...',
            params: [
              '🚩 Control your reproductive decisions',
              '🚩 Control your access to reproductive health care providers',
              '🚩 Force you to have unprotected sex',
            ],
          },
          {
            speaker: 0,
            message:
              'Reproductive coercion is bad for your mental health and increases your risk of STIs/HIV, unintended pregnancies, and unsafe abortions.',
            params: [],
          },
          {
            speaker: 0,
            message:
              'Knowing these risks can help you take care of yourself and make informed decisions.',
            params: [],
          },
        ],
        sectionType: 'scene',
      },
      {
        backgroundImage: 'assets/images/Cafe.png',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Alex.png',
        dialogueLines: [
          {
            speaker: 0,
            message: 'Whatever it is, I just know I feel anxious and trapped.',
            params: [],
          },
          { speaker: 1, message: "Jade, I'm here for you.", params: [] },
          {
            speaker: 1,
            message:
              'You deserve to feel safe and in control of your own body and decisions.',
            params: [],
          },
          {
            speaker: 0,
            message: "Yes!! But I don't know what to do...",
            params: [],
          },
          { speaker: 1, message: "I understand. I've been there.", params: [] },
          { speaker: 1, message: 'Who else knows about this?', params: [] },
          {
            speaker: 0,
            message: "I haven't really talked to anyone...",
            params: [],
          },
          { speaker: 0, message: "...I'm kinda embarassed.", params: [] },
          {
            speaker: 1,
            message: "Okay, well you don't have to go through this alone.",
            params: [],
          },
          {
            speaker: 1,
            message:
              "Have you considered getting on something that your partner can't mess with?",
            params: [],
          },
          { speaker: 0, message: 'What do you mean?', params: [] },
          {
            speaker: 1,
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
            speaker: 1,
            message:
              "I got the implant last year...I barely feel it and no one even knows it's there!",
            params: [],
          },
          { speaker: 0, message: 'That sounds nice...', params: [] },
          {
            speaker: 1,
            message: "If you want, I'll show you the clinic that helped me?",
            params: [],
          },
          { speaker: 0, message: 'Okay!', params: [] },
          { speaker: 0, message: 'Thanks, Sam.', params: [] },
          { speaker: 1, message: 'Anytime, Jade.', params: [] },
        ],
        sectionType: 'scene',
      },
      {
        backgroundImage: 'assets/images/Cafe.png',
        leftCharacterImage: 'assets/images/Alex-Torso.png',
        overlay: true,
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Relationships are tough, especially ones that are unhealthy or unsafe. Sometimes we can feel alone.',
            params: [],
          },
          {
            speaker: 0,
            message:
              'You can make a difference. Check in with your friends and family who may be having a tough time in their relationships.',
            params: [],
          },
          {
            speaker: 0,
            message:
              "Don't know where to start? Try sharing some of the resources you learn from C-ARCHES.",
            params: [],
          },
          {
            speaker: 0,
            message: 'Helping others is good for you, too!',
            params: [],
          },
        ],
        sectionType: 'scene',
      },
    ],
  },
  '/clinic': {
    chapterTitle: 'The Clinic',
    chapterDescription: 'Jade Visits The Clinic',
    previousChapter: '/cafe',
    nextChapter: '/ending',
    sections: [
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
          {
            speaker: 1,
            message: "Hi Jade, I'm Dr. Green! What brings you in today?",
            params: [],
          },
          {
            speaker: 0,
            message:
              'My friend recommended I come see you. We were talking about reproductive coercion...',
            params: [],
          },
          {
            speaker: 0,
            message: "...some of sounded like what I'm experiencing.",
            params: [],
          },
          {
            speaker: 0,
            message: 'I think I need emergency contraception, just in case.',
            params: [],
          },
          {
            speaker: 0,
            message:
              'And I need to switch my birth control to something that I can hide.',
            params: [],
          },
          {
            speaker: 1,
            message: "Absolutely! I'm really glad you brought this up, Jade.",
            params: [],
          },
          {
            speaker: 1,
            message: 'This is something that a lot of people go through.',
            params: [],
          },
          {
            speaker: 0,
            message:
              "Yeah...I'm noticing some things in my relationship. I want to take control of my health.",
            params: [],
          },
          { speaker: 0, message: "I'm not ready to be pregnant.", params: [] },
          {
            speaker: 1,
            message:
              "Absolutely, Jade. It's great that you're taking charge of your health. I'm here for you!",
            params: [],
          },
        ],
        sectionType: 'scene',
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        overlay: true,
        sectionType: 'monologue.grid',
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
        backgroundImage: 'assets/images/PatientRoom.png',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        name: 'IUD',
        preview: 'assets/images/IUD.png',
        description:
          'Tiny device put in your uterus, low-maintenance once inserted.',
        price: '$0-$1300',
        effectiveness: '99% Effective',
        duration_short: '3-12 years',
        duration_long: 'Lasts 3-12 years',
        periods:
          'Hormonal: Irregular bleeding for first few months, but likely to have shorter, lighter periods over time. Non-hormonal/copper: Period may be longer and heavier.',
        privacy: 'Easy to keep private, strings can be cut short.',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'We can trim the strings so they cannot be felt or removed by your partner.',
            params: [],
          },
        ],
        sectionType: 'monologue.content',
        previousSectionIndex: 1,
        nextSectionIndex: 5,
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        name: 'Ella',
        preview: 'assets/images/Ella.png',
        description:
          'A single pill taken as soon as possible after unprotected sex, ideally within 5 days.',
        price: '$0-$50',
        effectiveness: '85-98% Effective',
        duration_short: 'Take immediately',
        duration_long: 'Take immediately, works once.',
        periods: '???.',
        privacy: '???',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Some patients trash the packaging and keep the pill in a plain container, like an empty pill bottle.',
            params: [],
          },
        ],
        sectionType: 'monologue.content',
        previousSectionIndex: 1,
        nextSectionIndex: 5,
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        name: 'Plan B One Step (or generic)',
        preview: 'assets/images/Plan B.png',
        description:
          'A single pill taken as soon as possible after unprotected sex, ideally within 3 days.',
        price: '$0-50',
        effectiveness: '75–89% Effective',
        duration_short: 'Take immediately',
        duration_long: 'Take immediately, works once.',
        periods: '???',
        privacy: '???',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Some patients trash the packaging and keep the pill in a plain container, like an empty pill bottle.',
            params: [],
          },
        ],
        sectionType: 'monologue.content',
        previousSectionIndex: 1,
        nextSectionIndex: 5,
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Okay! The morning after pill looks good and I want an extra pill for future emergencies.',
            params: [],
          },
          {
            speaker: 0,
            message: "...but I don't want my partner to know about it...",
            params: [],
          },
          {
            speaker: 1,
            message:
              'Some patients trash the packaging and keep the pill in a plain container, like an empty pill bottle.',
            params: [],
          },
          { speaker: 0, message: 'Oh. I can do that!', params: [] },
          {
            speaker: 1,
            message:
              "Great! Now let's discuss a long term solution for your birth control.",
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
        sectionType: 'scene',
        previousSectionIndex: 1,
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        gridOptionIndexes: [7, 8, 9, 10],
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Here are some options for private contraception. Select one to continue.',
            params: [],
          },
        ],
        sectionType: 'monologue.grid',
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        name: 'The Shot',
        preview: 'assets/images/Injection.png',
        description: 'Injection in your arm or buttocks every 3 months',
        price: '$0-$150',
        effectiveness: '96% Effective',
        duration_short: '3 months',
        duration_long: 'Get every 3 months',
        periods:
          'Changes in your period are common, e.g. bleeding more days, spotting, or not getting period at all.',
        privacy:
          'No at home supplies, so easy to keep private but requires regular access to clinic.',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'If your partner monitors your schedule, they may prevent you from attending appointments every three months.',
            params: [],
          },
        ],
        sectionType: 'monologue.content',
        previousSectionIndex: 6,
        nextSectionIndex: 11,
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        name: 'IUD',
        preview: 'assets/images/IUD.png',
        description:
          'Tiny device put in your uterus, low-maintenance once inserted.',
        price: '$0-$1300',
        effectiveness: '99% Effective',
        duration_short: '3-12 years',
        duration_long: 'Lasts 3-12 years',
        periods:
          'Hormonal: Irregular bleeding for first few months, but likely to have shorter, lighter periods over time. Non-hormonal/copper: Period may be longer and heavier.',
        privacy: 'Easy to keep private, strings can be cut short.',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'We can trim the strings so they cannot be felt or removed by your partner.',
            params: [],
          },
        ],
        sectionType: 'monologue.content',
        previousSectionIndex: 6,
        nextSectionIndex: 11,
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        name: 'The Implant (Nexplanon)',
        preview: 'assets/images/Implant.png',
        description: 'Small & discreet device inserted under the skin.',
        price: '$0-$2200',
        effectiveness: '99% Effective',
        duration_short: '5 years',
        duration_long: 'Lasts up to 5 years',
        periods: '???',
        privacy:
          'Mostly invisible once your skin heals. Can sometimes be seen or felt if someone touches your arm. Consider how to manage the recovery period and signs from the procedure from a partner who might be monitoring your health or activities.',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Some people have initial bruising, but the implant is mostly invisible once your skin heals.',
            params: [],
          },
        ],
        sectionType: 'monologue.content',
        previousSectionIndex: 6,
        nextSectionIndex: 11,
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        overlay: true,
        characterImage: 'assets/images/Doctor-Idle-Torso.png',
        name: 'Sterilization (Tubal Ligation)',
        preview: 'assets/images/Sterilization.png',
        description:
          'Permanent surgical procedure where your provider cuts or blocks your fallopian tubes.',
        price: '???',
        effectiveness: '???',
        duration_short: 'Permanent',
        duration_long: 'Permanent.',
        periods: '???',
        privacy:
          'Private after recovery. Consider how to manage the recovery period and signs from the procedure from a partner who might be monitoring your health or activities.',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'Sterilization is a private option after the recovery period. Recovery times vary and may require follow-up appointments.',
            params: [],
          },
        ],
        sectionType: 'monologue.content',
        previousSectionIndex: 6,
        nextSectionIndex: 11,
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        leftCharacterImage: 'assets/images/Jade-Idle.png',
        rightCharacterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              'That all sounds good. I think the shot sounds like a good fit for me. When can we get started?',
            params: [],
          },
          {
            speaker: 1,
            message: "We can schedule an appointment whenever you're ready.",
            params: [],
          },
          {
            speaker: 0,
            message:
              "Perfect, let's do it. Thank you for helping me find the right option!",
            params: [],
          },
          { speaker: 1, message: "You're welcome, Jade.", params: [] },
          {
            speaker: 1,
            message:
              'Also, if you ever feel pressured or controlled in your relationship, there are resources and support available.',
            params: [],
          },
          {
            speaker: 1,
            message: 'Check them out if you need additional support!',
            params: [],
          },
          { speaker: 0, message: 'Got it! Thanks!', params: [] },
        ],
        sectionType: 'scene',
        previousSectionIndex: 6,
      },
      {
        backgroundImage: 'assets/images/PatientRoom.png',
        leftCharacterImage: 'assets/images/Doctor-Idle.png',
        dialogueLines: [
          {
            speaker: 0,
            message:
              "We're almost done! You can be brave like Jade. Take charge of your reproductive health today.",
            params: [],
          },
          {
            speaker: 0,
            message:
              'Talk to your provider about how to stay safe and healthy now and in the future.',
            params: [],
          },
          {
            speaker: 0,
            message: 'Here are some things you can ask about:',
            params: [
              '⚫️  Emergency contraception and birth control you can keep private.',
              '⚫️  Notifying your partner anonymously if you have an STI and are afraid of them finding out.',
              "⚫️ Your options if you're pregnant and don't want to be.",
              "⚫️ Your options if a partner won't use a condom.",
              '⚫️ How to talk to your partner about birth control',
              '⚫️ Using the clinic phone to call hotlines or other resources if your partner monitors your phone',
            ],
          },
        ],
        sectionType: 'scene',
      },
    ],
  },
  // '3': {
  //   chapterTitle: 'Chapter 3',
  //   chapterDescription: null,
  //   previousChapter: '2',
  //   nextChapter: null,
  //   sections: [
  //     {
  //       backgroundImage: 'assets/images/Park.png',
  //       data: [
  //         {
  //           preview: 'Tips for:',
  //           title: 'Talking to your healthcare provider',
  //           intro: '',
  //           bullets: [
  //             '✅ Be open and honest about your concerns',
  //             '✅ If your partner monitors your phone, ask your provider to use their phone to call the resource hotlines.',
  //             '✅ Discuss safety planning and emergency contraception options',
  //             '✅ If you have an STD and are afraid your partner will hurt you if they find out, request anonymous partner notification from the Health Department.',
  //           ],
  //           footer: [
  //             'Remember, you have the right to feel safe and make decisions about your body.',
  //             'Reach out for help. Your health care provider is there to support you. You can also contact resources below for confidential support.',
  //           ],
  //         },
  //         {
  //           preview: 'Thinking about:',
  //           title: 'Who calls the shots?',
  //           intro:
  //             'Think about who makes the big decisions in your relationships. Ask yourself:',
  //           bullets: [
  //             '🔹 Who decides when to have sex and what sexual activities to engage in?',
  //             "🔹 Who decides when or if I'm ready for a baby?",
  //             '🔹 Who chooses how to prevent pregnancy?',
  //             '🔹 Who has the final say on pregnancy decisions?',
  //           ],
  //           footer: [
  //             'Your voice matters in these decisions. You deserve to feel empowered and informed about your sexual and reproductive health.\n',
  //             '#YouDecide',
  //             "Talk to your healthcare provider. They're here to support you in making choices that keep you healthy and happy.\n",
  //           ],
  //         },
  //         {
  //           preview: 'Final thoughts...',
  //           title: 'Growing Together',
  //           intro:
  //             'In any relationship, mutual respect and open communication are key! Here are some important aspects that make our partnership strong and supportive:\n',
  //           bullets: [
  //             '💖 Supportive attitude: My partner supports my decisions regarding pregnancy and birth control.',
  //             '💬 Open communication: We make it easy to talk about sex and any concerns we may have about pregnancy and birth control.',
  //             "🚫 Respect for boundaries: I feel comfortable saying no to sex when I'm not ready or willing.",
  //             "✅ Mutual Agreement: When it comes to major decisions like when/if to get pregnant, and how to handle pregnancy decisions, we're on the same page.",
  //           ],
  //           footer: [
  //             "Healthy relationships thrive on respect, trust, and open dialogue. Let's continue building a supportive and loving partnership together! 💕",
  //           ],
  //         },
  //       ],
  //       sectionType: 'chapter3.0',
  //     },
  //   ],
  // },
};
