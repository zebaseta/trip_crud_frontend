import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,  HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { TripToCreate } from '../models/trip-to-create';
import { CompleteTrip } from '../models/complete-trip';
import { GlobalsService } from "./globals.service";

@Injectable({
    providedIn: 'root'
})

export class TripService {
    constructor(private http: HttpClient, private globals: GlobalsService) { }    

 
    create(trip:TripToCreate): Observable<CompleteTrip> {          
        const url = `${environment.api}/trips`;              
        const headers = this.globals.getHeaderOptions();        
        return this.http.post<CompleteTrip>(url,JSON.stringify(trip) ,headers)
            .pipe(
                map((response) => response),                
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }


    getAll(email:string,passport:string): Observable<Array<CompleteTrip>> {  
        var queryParams = this.buildQueryParams(email,passport);             
        const url = `${environment.api}/trips`+queryParams
        const headers = this.globals.getHeaderOptions();       
        return this.http.get<Array<CompleteTrip>>(url, headers)
            .pipe(
                map((response) => response),
                catchError((error: HttpErrorResponse) => throwError(error.error || 'Server Error')));
    }

    buildQueryParams(email:string, passport:string){
        if(passport == null && email==null) return "";
        else{
            var result = "?";            
            if(passport!=null &&  passport.length>0) {
                result += "passengerPassport="+passport;
                if(email !=null && email.length>0) result +="&passengerEmail="+email; 
            }
            else{
                result +="passengerEmail="+email; 
            }
            return result;
        }

    }
    
}
