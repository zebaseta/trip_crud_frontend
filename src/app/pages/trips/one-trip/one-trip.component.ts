import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { GlobalsService } from '../../../services/globals.service';
import { NbToastrService } from '@nebular/theme';
import { TripsToast } from '../../utils/trips-toast';
import {CompleteTrip} from './../../../models/complete-trip'
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'ngx-one-trip',
  templateUrl: './one-trip.component.html',
  styleUrls: ['./one-trip.component.scss']
})
export class OneTripComponent implements OnInit {
  toast:TripsToast;
  idTrip:number;
  namePassenger:string;
  emailPassenger:string;
  passportPassenger:string;
  dateOfBirthPassenger:Date
  outboundSource: LocalDataSource = new LocalDataSource();
  outboundSettings = {
    pager: {
      display: true,
      perPage: 5
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      //deleteButtonContent: '<i class="nb-trash"></i>',
      deleteButtonContent: '<div class="min-button"><i class="fa fa-eye"></i></div>',
      confirmDelete: true,
    },  
    actions: {
      add: false,
      edit: false,
      delete: false,      
      position: 'left',
    }, 
    columns: {      
      code: {
        title: 'Code',
        filter: false,
        editable: false,        
        type: 'string',
      }, 
      originDate: {
        title: 'Origin date',        
        filter: false,
        editable: false,  
        type: 'string',
      },
      originAirport: {
        title: 'Origin aiport',        
        filter: false,
        editable: false,  
        type: 'string',
      },
      destinationDate: {
        title: 'Destination date',        
        filter: false,
        editable: false,  
        type: 'string',
      },
      destinationAirport: {
        title: 'Destination airport',        
        filter: false,
        editable: false,  
        type: 'string',
      },
      airline: {
        title: 'Airline',        
        filter: false,
        editable: false,  
        type: 'string',
      }
    }
  };

  returnSource: LocalDataSource = new LocalDataSource();
  returnSettings = {
    pager: {
      display: true,
      perPage: 5
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      //deleteButtonContent: '<i class="nb-trash"></i>',
      deleteButtonContent: '<div class="min-button"><i class="fa fa-eye"></i></div>',
      confirmDelete: true,
    },  
    actions: {
      add: false,
      edit: false,
      delete: false,      
      position: 'left',
    }, 
    columns: {      
      code: {
        title: 'Code',
        filter: false,
        editable: false,        
        type: 'string',
      }, 
      originDate: {
        title: 'Origin date',        
        filter: false,
        editable: false,  
        type: 'string',
      },
      originAirport: {
        title: 'Origin aiport',        
        filter: false,
        editable: false,  
        type: 'string',
      },
      destinationDate: {
        title: 'Destination date',        
        filter: false,
        editable: false,  
        type: 'string',
      },
      destinationAirport: {
        title: 'Destination airport',        
        filter: false,
        editable: false,  
        type: 'string',
      },
      airline: {
        title: 'Airline',        
        filter: false,
        editable: false,  
        type: 'string',
      }
    }
  };


  constructor(private currentRoute:ActivatedRoute, private route: Router,private globalService: GlobalsService,private toastrService: NbToastrService) { 
    this.toast = new TripsToast(toastrService);
  }

  ngOnInit(): void {
    const passport = this.currentRoute.snapshot.paramMap.get('passport'); 
    var trips:Array<CompleteTrip> = this.globalService.getCurrentTrips();
    var trip:CompleteTrip = trips.find(t => t.passenger.passport===passport);
    if(trip!=null){
      this.idTrip = trip.id;
      this.namePassenger = trip.passenger.name;
      this.emailPassenger = trip.passenger.email;
      this.passportPassenger = trip.passenger.passport;
      this.dateOfBirthPassenger = trip.passenger.dateOfBirth;
      this.outboundSource.load(trip.itinerary.outboundFlights);
      this.returnSource.load(trip.itinerary.returnFlights);
    }
    else{
      this.toast.showToast(3, "Warning", "There are no trips whit this data");  
    }
    
  }

}
