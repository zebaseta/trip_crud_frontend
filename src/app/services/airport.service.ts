import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,  HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Airport } from '../models/airport';
import { GlobalsService } from "./globals.service";

@Injectable({
    providedIn: 'root'
})

export class AirportService {
    constructor(private http: HttpClient, private globals: GlobalsService) { }    

    getAll(): Observable<Array<Airport>> {                
        const url = `${environment.api}/airports`        
        const headers = this.globals.getHeaderOptions();
        console.log(url);
        console.log(headers);
        return this.http.get<Array<Airport>>(url, headers)
            .pipe(
                map((response) => response),
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }

    create(airport:Airport): Observable<Airport> {          
        const url = `${environment.api}/airports`;              
        const headers = this.globals.getHeaderOptions();        
        return this.http.post<Airport>(url,JSON.stringify(airport) ,headers)
            .pipe(
                map((response) => response),                
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }

    update(airport:Airport): Observable<Airport> {          
        const url = `${environment.api}/airports/${airport.code}`                

        const headers = this.globals.getHeaderOptions();        
        return this.http.put<Airport>(url,JSON.stringify(airport) ,headers)
            .pipe(
                map((response) => response),                
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }

    delete(airport:Airport): Observable<Airport> {          
        const url = `${environment.api}/airports/${airport.code}`                
        const headers = this.globals.getHeaderOptions();        
        return this.http.delete<Airport>(url ,headers)
            .pipe(
                map((response) => response),                
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }
    
}