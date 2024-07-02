import { Resource } from "../../shared/models/resource.interface";

export const resources: Resource[] = [
        {
            name: 'The National Domestic Violence Hotline',
            description: '24/7 confidential, and free',
            url: 'https://www.thehotline.org/',
            hours: "",
            contacts: [
                {
                    key: 'Phone',
                    value: '1-800-799-SAFE, 1-800-799-7233'
                },
                {
                    key: 'TTY',
                    value: '1-800-787-3224'
                },
                {
                    key: 'Chat',
                    value: 'https://www.thehotline.org/'
                },
                {
                    key: 'Text',
                    value: 'START to 88788'
                }
            ],
        },
        {
            name: 'Crisis Text Line',
            description: 'Text trained counselors about anything that’s on your mind.',
            url: 'https://www.crisistextline.org',
            hours: "",
            contacts: [
                {
                    key: 'Text',
                    value: '"START" to 741741'
                }
            ]
        },
        {
            name: 'myPlanApp',
            description: 'If you or someone you are about is experiencing abuse in their relationship, download the myPlan app to help with safety decisions',
            url: 'https://www.myplanapp.org',
            hours: "",
            contacts: []
        },
        {
            name: 'The National Sexual Assault Hotline',
            description: '24/7 confidential and free support for survivors and loved ones.',
            url: 'https://hotline.rainn.org/online',
            hours: "",
            contacts: [
                {
                    key: 'Phone',
                    value: '800-656-HOPE (4673)'
                },
                {
                    key: 'Chat',
                    value: 'https://hotline.rainn.org/online'
                },
                {
                    key: 'Mobile App',
                    value: 'https://www.rainn.org/new-rainn-mobile-app-offers-survivors-loved-ones-another-option-support'
                }
            ]
        },
        {
            name: 'LoveisRespect.org',
            description: '24/7 teen dating violence support.',
            url: 'https://www.loveisrespect.org',
            hours: "",
            contacts: [
                {
                    key: 'Phone',
                    value: '1-866-331-9474'
                },
                {
                    key: 'Chat',
                    value: 'https://www.loveisrespect.org/#'
                },
                {
                    key: 'Text',
                    value: '"LOVEIS" to 22522'
                }
            ]
        },
        {
            name: 'StrongHearts Native Helpline',
            description: 'For confidential domestic/sexual violence support, specifically for Native communities',
            url: 'https://strongheartshelpline.org/get-help',
            hours: "7am-10pm CT",
            contacts: [
                {
                    key: 'Phone',
                    value: '1−844-762-8483'
                },
                {
                    key: 'Chat',
                    value: 'https://strongheartshelpline.org/get-help'
                }
            ],
        },
        {
            name: 'Trans LifeLine',
            description: 'A peer-support hotline staffed exclusively by trans operators. The only crisis line with a policy against non-consensual active rescue.',
            url: 'https://translifeline.org/hotline/',
            hours: "Monday-Friday 12pm-8pm CT",
            contacts: [
                {
                    key: "Phone (USA)",
                    value: "877-565-8860"
                },
                {
                    key: "Phone (Canada)",
                    value: "877-330-6366"
                }
            ],
        },
        {
            name: 'Deaf Hotline',
            description: '24/7 chat for Deaf, DeafBlind, DeafDisabled',
            url: 'https://www.thedeafhotline.org/',
            hours: "",
            contacts: [
                {
                    key: "Video Phone",
                    value: "1-855-812-1001"
                },
                {
                    key: "Email",
                    value: "hotline@adwas.org"
                }
            ],
        },
        {
            name: 'National Parent Helpline',
            description: 'Emotional support and advocacy for parents.',
            url: 'https://nationalparentyouthhelpline.org/',
            hours: "Monday-Friday 12pm-9am CT",
            contacts: [
                {
                    key: "Phone",
                    value: "1-855-427-2736"
                },
            ],
        },
        {
            name: 'Futures Without Violence',
            description: '',
            url: 'https://www.futureswithoutviolence.org/',
            hours: "",
            contacts: [],
        }
    ];
