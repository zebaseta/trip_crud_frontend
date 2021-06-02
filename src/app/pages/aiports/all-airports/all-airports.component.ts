import { Component, OnInit} from '@angular/core';
import { AirportService } from '../../../services/airport.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TripsToast } from '../../utils/trips-toast';
import { LocalDataSource } from 'ng2-smart-table';
import { SimpleOuterSubscriber } from 'rxjs/internal/innerSubscribe';
import { Airport } from '../../../models/airport';

@Component({
  selector: 'ngx-all-aiports',
  templateUrl: './all-airports.component.html',
  styleUrls: ['./all-airports.component.scss']
})
export class AllAirportsComponent implements OnInit {
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
      confirmCreate:true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {      
      add: true,
      edit: true,
      delete: true,      
      position: 'left',
    },  
    columns: {      
      code: {
        title: 'Code',
        filter: true,
        editable: false,        
        type: 'string',
      }, 
      name: {
        title: 'Name',        
        filter: true,
        type: 'string',
      }
    }
  };


  constructor(private route: Router,private toastrService: NbToastrService, private airportService: AirportService) {     
    this.toast = new TripsToast(toastrService);   
    
    
  }

  addRecord(event): void {
    var  airport:Airport = event.newData    
    this.airportService.create(airport).subscribe(
      (airport) => {        
        if(!(airport == null)){
          this.toast.showToast(2, "Info", "The airport was created" );  
          event.confirm.resolve();
        }
        else{
          this.toast.showToast(4, "Error", "The airport could not be created" );  
          event.confirm.reject();
        }
       },
      (error: any) => {
          console.log(error);
          this.toast.showToast(4, "Error", "The airport could not be created "+error );  
          event.confirm.reject();
      }
    );
  }
  

  updateRecord(event): void {    
    var  airport:Airport = event.data
    this.airportService.update(airport).subscribe(
      (airport) => {        
        if(!(airport == null)){
          this.toast.showToast(2, "Info", "The airport was updated" );  
          event.confirm.resolve();
        }
        else{
          this.toast.showToast(4, "Error", "The airport could not be updated" );  
          event.confirm.reject();
        }
       },
      (error: any) => {
          console.log(error);
          this.toast.showToast(4, "Error", "The airport could not be updated "+error );  
          event.confirm.reject();
      }
    );
  }
  
  onDeleteConfirm(event): void { 

    if (window.confirm('Are you sure you want to delete?')) {
      var  airport:Airport = event.data
      this.airportService.delete(airport).subscribe(
        () => {        
            this.toast.showToast(2, "Info", "The airport was delete" );  
            event.confirm.resolve();
         
         },
        (error: any) => {
            console.log(error);
            this.toast.showToast(4, "Error", "The airport could not be delete: "+error );  
            event.confirm.reject();
        }
      );
    }
    else {
      event.confirm.reject();
    }
  }
  
  ngOnInit(): void {
    this.airportService.getAll().subscribe(
      (airports) => {        
        if(airports == null || airports.length == 0){
          this.toast.showToast(2, "Info", "There are no airports" );  
        }
        else{
          this.source.load(airports);
        }
        console.log(airports);
        
        },
      (error: any) => {
          console.log(error);
      }
    );
  }

}
