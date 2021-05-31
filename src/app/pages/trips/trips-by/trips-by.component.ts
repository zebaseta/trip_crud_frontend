import { Component, OnInit} from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TripsToast } from '../../utils/trips-toast';
import { LocalDataSource } from 'ng2-smart-table';
import { SimpleOuterSubscriber } from 'rxjs/internal/innerSubscribe';
import { CompleteTrip } from '../../../models/complete-trip';
import { BasicTrip } from '../../../models/basic-trip';

@Component({
  selector: 'ngx-trips-by',
  templateUrl: './trips-by.component.html',
  styleUrls: ['./trips-by.component.scss']
})
export class TripsByComponent implements OnInit {
  toast: TripsToast;
  source: LocalDataSource = new LocalDataSource();
  settings = {
    pager: {
      display: true,
      perPage: 15
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
      columnTitle: 'View',
      add: false,
      edit: false,
      delete: true,      
      position: 'left',
    }, 
    columns: {      
      id: {
        title: 'id',
        filter: true,
        editable: false,        
        type: 'number',
      }, 
      passengerName: {
        title: 'Passenger name',        
        filter: true,
        type: 'string',
      },
      passengerPassport: {
        title: 'Passenger passport',        
        filter: true,
        type: 'string',
      },
      countOfOutboundFlights: {
        title: 'Count of outbounds fligths',        
        filter: false,
        type: 'string',
      },
      countOfReturnFlights: {
        title: 'Count of return fligths',        
        filter: false,
        type: 'string',
      }
    }
  };


  constructor(private route: Router,private toastrService: NbToastrService, private tripService: TripService) {     
    this.toast = new TripsToast(toastrService);   
    
    
  }

  
    ngOnInit(): void {
      this.tripService.getAll().subscribe(
        (trips) => {        
          if(trips == null || trips.length == 0){
            this.toast.showToast(2, "Info", "There are no trips" );  
          }
          else{
            var basicTrips =  this.convertCompleteTripsToBasicTrips(trips);
            this.source.load(basicTrips);
          }
          
         },
        (error: any) => {
            console.log(error);
        }
      );
   }

   convertCompleteTripsToBasicTrips(array: Array<CompleteTrip>): BasicTrip[] {
    return array.map(trip => new BasicTrip(trip));
  }
  

}

