import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { Token } from '../models/token';
import { UserFromToken } from '../models/user-from-token';
// @ts-ignore  
import jwt_decode from "jwt-decode";

@Injectable({
    providedIn: 'root'
})

export class LoginService {   
    userLogged:UserFromToken; 
    constructor(private http: HttpClient, private router: Router) { }
    
    
    login(login: Login): Observable<Token> {        
        const url = `${environment.api}/login`;         
        console.log(url);
        console.log(login);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
              return this.http.post(url, JSON.stringify(login), { headers })
            .pipe(
                map((response) => response),
                tap(this.setDataIntoLocalStorage),
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }

    setDataIntoLocalStorage(data: any): void {
        try{
            console.log(data);
            var tokenInfo = jwt_decode(data.authorization);
            this.userLogged = new UserFromToken(tokenInfo.user_id,
                tokenInfo.user_name,
                tokenInfo.user_email);

        }
        catch(Error){
            console.error('Has error to parse token');
        }        
        localStorage.setItem('user', JSON.stringify(this.userLogged));
        localStorage.setItem('authorization', data.authorization);
        localStorage.setItem('tokenExpiration', tokenInfo.exp);
    }

    getToken(): string {
        return localStorage.getItem('authorization');
    }

    getTokenExpiration(): string {
        return localStorage.getItem('tokenExpiration');
    }

    getLoggedUser(): UserFromToken {
        return JSON.parse(localStorage.getItem('user'));
      }

    userIsAdmin(): boolean {
        var userLogged = this.getLoggedUser();
        //return userLogged.role.toString()==='1';
        return true;
    }
        
    logout(): void {
        localStorage.removeItem('authorization');
        localStorage.removeItem('tokenExpiration');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}