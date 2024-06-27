import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  
  leftColumn = [
    {
      name: 'The National Domestic Violence Hotline',
      subtitle: '24/7 confidential, and free',
      description: ''
    },
    {
      name: 'Crisis Text Line',
      subtitle: 'Text trained counselors about anything that’s on your mind.',
      description: ''
    },
    {
      name: 'myPlanApp',
      subtitle: 'If you or someone you are about is experiencing abuse in their relationship, download the myPlan app to help with safety decisions',
      description: ''
    },
    {
      name: 'The National Sexual Assault Hotline',
      subtitle: '24/7 confidential and free support for survivors and loved ones.',
      description: ''
    },
    {
      name: 'LoveisRespect.org',
      subtitle: '24/7 teen dating violence support.',
      description: ''
    }
  ];

  rightColumn = [
    {
      name: 'StrongHearts Native Helpline',
      subtitle: 'For confidential domestic/sexual violence support, specifically for Native communities',
      description: ''
    },
    {
      name: 'Trans LifeLine',
      subtitle: 'A peer-support hotline staffed exclusively by trans operators. The only crisis line with a policy against non-consensual active rescue.',
      description: ''
    },
    {
      name: 'Deaf Hotline',
      subtitle: '24/7 chat for Deaf, DeafBlind, DeafDisabled',
      description: ''
    },
    {
      name: 'National Parent Helpline',
      subtitle: 'Emotional support and advocacy for parents.',
      description: ''
    },
    {
      name: 'Futures Without Violence',
      subtitle: '',
      description: ''
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
