import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NB_AUTH_OPTIONS } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';
import { switchMap } from 'rxjs/operators';
import { NbAuthService } from '../../services/auth.service';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';


@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbRegisterComponent implements OnInit {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  organization: any = {};
  messageError: string;

  invitationId: string;
  inviteOrganizationName: string;

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router, 
              private currentRoute: ActivatedRoute, 
              private userService: UserService) {

    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.strategy = this.getConfigValue('forms.register.strategy');
  }

  ngOnInit() {
    
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    const formUser = this.user as User;
    const user = new User(formUser.email, formUser.password, formUser.name);      
   
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }

  
}