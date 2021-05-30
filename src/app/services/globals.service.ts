import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalsService {
    constructor(private loginService: LoginService) {}

    getHeaderOptions() {        
        const token = this.loginService.getToken();        
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization', token);
        headers = headers.append('Content-Type', 'application/json');
        return { headers };
    }
}

