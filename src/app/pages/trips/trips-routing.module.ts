import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsComponent } from './trips.component';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { TripsByComponent } from './trips-by/trips-by.component';
import {OneTripComponent} from './one-trip/one-trip.component';
import {CreateTripComponent} from './create-trip/create-trip.component';

const routes: Routes = [{
  path: '',
  component: TripsComponent,
  children: [
    {
      path: 'trips',
      component: AllTripsComponent,      
    },
    {
      path: 'trips/passengers',
      component: TripsByComponent,      
    }
    ,
    {
      path: 'trips/passengers/:passport',
      component: OneTripComponent,      
    }
    ,
    {
      path: 'trips/create',
      component: CreateTripComponent,      
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsRoutingModule { }

export const routedComponents = [
  TripsComponent,  
  AllTripsComponent,  
];

