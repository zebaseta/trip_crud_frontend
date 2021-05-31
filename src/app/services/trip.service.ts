import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,  HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { CompleteTrip } from '../models/complete-trip';
import { GlobalsService } from "./globals.service";

@Injectable({
    providedIn: 'root'
})

export class TripService {
    constructor(private http: HttpClient, private globals: GlobalsService) { }    

    getAll(email:string,passport:string): Observable<Array<CompleteTrip>> {  
        var queryParams = this.buildQueryParams(email,passport);             
        const url = `${environment.api}/trips`+queryParams       
        console.log(url);
        const headers = this.globals.getHeaderOptions();
        console.log(url);
        console.log(headers);
        return this.http.get<Array<CompleteTrip>>(url, headers)
            .pipe(
                map((response) => response),
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }

    buildQueryParams(email:string, passport:string){
        if(passport == null && email==null) return "";
        else{
            var result = "?";
            
            if(passport!=null) {
                result += "passengerPassport="+passport;
                if(email !=null) result +="&passengerEmail="+email; 
            }
            else{
                result +="passengerEmail="+email; 
            }
            return result;
        }

    }
    
}
