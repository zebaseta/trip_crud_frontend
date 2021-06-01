import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import{CompleteTrip} from './../models/complete-trip'

@Injectable({
    providedIn: 'root'
})
export class GlobalsService {
    private currentTrips:Array<CompleteTrip>;    
    constructor(private loginService: LoginService) {}
    
    getHeaderOptions() {        
        const token = this.loginService.getToken();        
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization', token);
        headers = headers.append('Content-Type', 'application/json');
        return { headers };
    }

    saveCurrentTrips(trips:Array<CompleteTrip>){
        this.currentTrips = trips;
    }

    getCurrentTrips():Array<CompleteTrip>{
        return this.currentTrips;
    }
}

