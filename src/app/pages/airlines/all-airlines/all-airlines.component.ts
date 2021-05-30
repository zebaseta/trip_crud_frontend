import { Component, OnInit} from '@angular/core';
import { AirlineService } from '../../../services/airline.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TripsToast } from '../../utils/trips-toast';
import { LocalDataSource } from 'ng2-smart-table';
import { SimpleOuterSubscriber } from 'rxjs/internal/innerSubscribe';
import { Airline } from '../../../models/airline';

@Component({
  selector: 'ngx-all-aiports',
  templateUrl: './all-airlines.component.html',
  styleUrls: ['./all-airlines.component.scss']
})
export class AllAirlinesComponent implements OnInit {
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
        editable: false,        
        type: 'string',
      }, 
      name: {
        title: 'Name',        
        type: 'string',
      }
    }
  };


  constructor(private route: Router,private toastrService: NbToastrService, private airlineService: AirlineService) {     
    this.toast = new TripsToast(toastrService);   
    
    
  }

  addRecord(event): void {
    var  airline:Airline = event.newData    
    this.airlineService.create(airline).subscribe(
      (airline) => {        
        if(!(airline == null)){
          this.toast.showToast(2, "Info", "The airline was created" );  
          event.confirm.resolve();
        }
        else{
          this.toast.showToast(4, "Error", "The airline could not be created" );  
          event.confirm.reject();
        }
       },
      (error: any) => {
          console.log(error);
          this.toast.showToast(4, "Error", "The airline could not be created "+error );  
          event.confirm.reject();
      }
    );
  }
  

  updateRecord(event): void {    
    var  airline:Airline = event.data
    this.airlineService.update(airline).subscribe(
      (airline) => {        
        if(!airline == null){
          this.toast.showToast(2, "Info", "The airline was updated" );  
          event.confirm.resolve();
        }
        else{
          this.toast.showToast(4, "Error", "The airline could not be updated" );  
          event.confirm.reject();
        }
       },
      (error: any) => {
          console.log(error);
          this.toast.showToast(4, "Error", "The airline could not be updated "+error );  
          event.confirm.reject();
      }
    );
    
    
  }
  
  onDeleteConfirm(event): void {        
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
    ngOnInit(): void {
      this.airlineService.getAll().subscribe(
        (airlines) => {        
          if(airlines == null || airlines.length == 0){
            this.toast.showToast(2, "Info", "There are no airlines" );  
          }
          else{
            this.source.load(airlines);
          }
          console.log(airlines);
          
         },
        (error: any) => {
            console.log(error);
        }
      );
   }

}
