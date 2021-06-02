import { Component, OnInit} from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TripsToast } from '../../utils/trips-toast';
import { LocalDataSource } from 'ng2-smart-table';
import { SimpleOuterSubscriber } from 'rxjs/internal/innerSubscribe';
import { CompleteTrip } from '../../../models/complete-trip';
import { BasicTrip } from '../../../models/basic-trip';
import { Passenger } from '../../../models/passenger';
import { PassengerFinder } from '../../../models/passenger-finder';
import { GlobalsService } from '../../../services/globals.service';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/overlay-directives';

@Component({
  selector: 'ngx-trips-by',
  templateUrl: './trips-by.component.html',
  styleUrls: ['./trips-by.component.scss']
})
export class TripsByComponent implements OnInit {
  toast: TripsToast;
  passenger: any = {};
  passengerName: string="";
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
      passengerEmail: {
        title: 'Passenger email',        
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


  constructor(private route: Router,private toastrService: NbToastrService, 
    private tripService: TripService,
    private globalService:GlobalsService) {     
    this.toast = new TripsToast(toastrService);   
    
    
  }
  
    ngOnInit(): void {
     
   }

   convertCompleteTripsToBasicTrips(array: Array<CompleteTrip>): BasicTrip[] {
    return array.map(trip => new BasicTrip(trip));
  }
  
  findBy(passengerPassport,passengerEmail){
    var passengerToFind = this.passenger as PassengerFinder;
    if(passengerToFind.email==null && passengerToFind.passport==null){
      this.toast.showToast(3, "Warning", "There is no data" );  
    }
    else{

      if(passengerToFind.email!=null && passengerToFind.email.length>0) this.passengerName = passengerToFind.email; 
      else if(passengerToFind.passport!=null && passengerToFind.passport.length>0) this.passengerName = passengerToFind.passport;
    
      

      this.tripService.getAll(this.passengerName, passengerToFind.passport).subscribe(
        (trips) => {        
          if(trips == null || trips.length == 0){
            this.toast.showToast(2, "Info", "There are no trips for this passenger" );  
          }
          else{
            this.globalService.saveCurrentTrips(trips);
            var basicTrips =  this.convertCompleteTripsToBasicTrips(trips);
            this.source.load(basicTrips);
            passengerPassport.reset();
            passengerEmail.reset();
          }
          
         },
        (error: any) => {
          this.toast.showToast(2, "Info", "There are no trips for this passenger" );  
            console.log(error);
        }
      );  
    }
    
  }
  

  routeToAPage(event): void {    
    var trip:BasicTrip = event.data;
    this.route.navigateByUrl('/trips/passengers/'+trip.passengerPassport);    
  }



}

