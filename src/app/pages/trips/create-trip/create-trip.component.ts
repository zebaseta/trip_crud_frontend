import { Component, OnInit } from '@angular/core';
import { Passenger } from 'app/models/passenger';
import { PassengerFligth } from 'app/models/passenger-fligth';
import { NbToastrService } from '@nebular/theme';
import { TripsToast } from '../../utils/trips-toast';
import { Airport } from 'app/models/airport';
import { AirportService } from '../../../services/airport.service';
import { AfterContentInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { FormControl } from '@angular/forms';
import { NbDateService } from '@nebular/theme';
import { DatePipe } from '@angular/common';
import { Airline } from '../../../models/airline';
import { Fligth } from '../../../models/fligth';
import { FligthCreation } from '../../../models/fligth-creation';
@Component({
  selector: 'ngx-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {
  passenger: any = {};
  toast: TripsToast;  
  aiports: Array<Airport>;
  fligths:Array<FligthCreation>;
  originAirport:string;
  constructor(private toastrService: NbToastrService, private airportService: AirportService) {
    this.toast = new TripsToast(toastrService);
    this.fligths = new Array();
    
   }

  ngOnInit(): void {
    this.airportService.getAll().subscribe(
      (airports) => {        
        if(airports == null || airports.length == 0){
          this.toast.showToast(2, "Info", "There are no airports" );  
        }
        else{
          this.aiports = airports;
        }
        console.log(airports);
        
       },
      (error: any) => {
          console.log(error);
      }
    );
  }
  
  createFlight(){
    var fligth = new FligthCreation(this.fligths.length);       
    this.fligths.push(fligth);
  }

  onOriginDateSelected(newDate, id):void{        
    console.log("asdfuj oij sadf "+id+" "+newDate);
    this.fligths[id].originDate = newDate; 
  }

  onAirportSelected(newAirport, id):void{        
    console.log("asdfuj oij sadf "+id);
    this.fligths[id].originAirport = newAirport; 
  }

  create(passengerName,passengerPassport,passengerEmail,passengerDateOfBirth){
    var passengerToFind = this.passenger as PassengerFligth;
    //console.log(this.fligth);
 
    //console.log(this.airline);
 
      console.log(passengerToFind);
      console.log(this.originAirport);
    if(passengerToFind.email==null || passengerToFind.passport==null ||
      passengerToFind.name==null || passengerToFind.dateOfBirth==null ){
      this.toast.showToast(3, "Error", "Missing data" );  
    }
    else{
      // console.log(this.outboundAirport);
      // console.log(this.outboundHour);
      // console.log(this.calendarDateOubound);
      // console.log(passengerToFind);
    }
  }

}

