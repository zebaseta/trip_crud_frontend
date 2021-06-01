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
import { FligthToCreate } from '../../../models/fligth-to-create';
import { FligthCreation } from '../../../models/fligth-creation';
import { AirlineService } from 'app/services/airline.service';
import { GlobalsService } from 'app/services/globals.service';
import { SimpleOuterSubscriber } from 'rxjs/internal/innerSubscribe';
import { environment } from '../../../../environments/environment.prod';
import { TripService } from '../../../services/trip.service';
import { TripToCreate } from '../../../models/trip-to-create';


@Component({
  selector: 'ngx-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {
  passenger: any = {};
  toast: TripsToast;  
  aiports: Array<Airport>;
  airlines: Array<Airline>;
  fligths:Array<FligthCreation>;
  originAirport:string;
  constructor(private toastrService: NbToastrService, 
              private airportService: AirportService,
              private tripServise:TripService,  
              private airlineService: AirlineService,
              private globalService:GlobalsService) {
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
        
       },
      (error: any) => {
          console.log(error);
      }
    );
    this.airlineService.getAll().subscribe(
      (airlines) => {        
        if(airlines == null || airlines.length == 0){
          this.toast.showToast(2, "Info", "There are no airports" );  
        }
        else{
          this.airlines = airlines;
        }
        
       },
      (error: any) => {
          console.log(error);
      }
    );
  }

  changeCode(event,id){    
    this.fligths[id].code = event.target.value; 
  }
  
  createFlight(){
    var fligth = new FligthCreation(this.fligths.length);       
    this.fligths.push(fligth);
  }


  onOriginAirportSelected(newAirport, id):void{            
    this.fligths[id].originAirport = newAirport; 
  }
  
  onOriginDateSelected(newDate, id):void{ 
    this.fligths[id].originDate = newDate; 
  }

  onOriginHourSelected(hour, id):void{     
    this.fligths[id].originHour = hour; 
  }

  onOriginMinuteSelected(minute, id):void{     
  
    this.fligths[id].originMinute = minute; 
  }

  
  onDestinationAirportSelected(newAirport, id):void{            
    this.fligths[id].destinationAirport = newAirport; 
  }


  onDestinationDateSelected(newDate, id):void{ 
    this.fligths[id].destinationDate = newDate; 
  }

  onDestinationHourSelected(hour, id):void{     
    this.fligths[id].destinationHour = hour; 
  }

  onDestinationMinuteSelected(minute, id):void{         
    this.fligths[id].destinationMinute = minute; 
  }

  onDestinationAirlineSelected(airline, id):void{     
    this.fligths[id].airline = airline; 
  }
  
  onSelectDateOfBirdth(birdth:Date){    
    var month = ((birdth.getUTCMonth()+1)/10) >= 1 ? birdth.getUTCMonth()+1 : "0"+(birdth.getUTCMonth()+1)
    var day = ((birdth.getUTCDate())/10) >= 1 ? birdth.getUTCDate() : "0"+birdth.getUTCDate()
    var dateWithFormat = birdth.getUTCFullYear()+"/"+month+"/"+day;
    console.log(dateWithFormat);
    this.passenger.dateOfBirth = dateWithFormat;
  }

  createTrip(){
     var passengerToFind = this.passenger as PassengerFligth;

    if(passengerToFind.email==null || passengerToFind.passport==null ||
      passengerToFind.name==null || passengerToFind.dateOfBirth==null || this.fligths.length==0){
      this.toast.showToast(3, "Error", "Missing data" );  
    }
    else{      
      var fligtsToCreate:Array<FligthToCreate> =  this.fligths.map(t => t.toEntityCreation(this.aiports,this.airlines));
      console.log(fligtsToCreate);
      var trip = new TripToCreate(passengerToFind,fligtsToCreate);
      console.log(trip);
      this.tripServise.create(trip).subscribe(
        (trip) => {        
          if(trip == null ){
            this.toast.showToast(3, "Error", "Could not create trip" );  
          }
          else{
            this.toast.showToast(2, "Info", "The trip was created with id "+trip.id );  
          }        
          
         },
        (error: any) => {
          this.toast.showToast(3, "Error", "Could not create trip" );  
          console.log(error);
        }
      );
      
    }
  }

}


