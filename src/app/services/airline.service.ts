import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,  HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Airline } from '../models/airline';
import { GlobalsService } from "./globals.service";

@Injectable({
    providedIn: 'root'
})

export class AirlineService {
    constructor(private http: HttpClient, private globals: GlobalsService) { }    

    getAll(): Observable<Array<Airline>> {                
        const url = `${environment.api}/airlines`        
        const headers = this.globals.getHeaderOptions();
        console.log(url);
        console.log(headers);
        return this.http.get<Array<Airline>>(url, headers)
            .pipe(
                map((response) => response),
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }

    create(airline:Airline): Observable<Airline> {          
        const url = `${environment.api}/airlines`;              
        const headers = this.globals.getHeaderOptions();        
        return this.http.post<Airline>(url,JSON.stringify(airline) ,headers)
            .pipe(
                map((response) => response),                
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }

    update(airline:Airline): Observable<Airline> {          
        const url = `${environment.api}/airlines/${airline.code}`                

        const headers = this.globals.getHeaderOptions();        
        return this.http.put<Airline>(url,JSON.stringify(airline) ,headers)
            .pipe(
                map((response) => response),                
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }

    delete(airline:Airline): Observable<any> {          
        const url = `${environment.api}/airlines/${airline.code}`                
        const headers = this.globals.getHeaderOptions();        
        return this.http.delete(url ,headers)
            .pipe(
                map((response) => response),                
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }
    
}