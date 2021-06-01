import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})

export class PagesComponent {
  constructor(private loginService: LoginService) {}

  canShow: boolean = this.loginService.userIsAdmin();

  menu: NbMenuItem[] = [
    {
      title: 'Airports',    
      icon: 'home-outline',
      link: '/airports',
    },
    {
      title: 'Airlines',    
      icon: 'grid-outline',
      link: '/airlines',

    },
    {
      title: 'Trips',    
      icon: 'activity-outline',      
      children: [
        {
          title: 'Create trip',
          link: '/trips/create',
        },
        {
          title: 'View all trips',
          link: '/trips',
          home: true,
        },
        {
          title: 'Find trips by passenger',
          link: '/trips/passengers',
        }
       
      ]
    }];
}
