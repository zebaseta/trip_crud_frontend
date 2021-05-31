import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsComponent } from './trips.component';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { TripsByComponent } from './trips-by/trips-by.component';


const routes: Routes = [{
  path: '',
  component: TripsComponent,
  children: [
    {
      path: 'trips',
      component: AllTripsComponent,      
    },
    {
      path: 'trips/passenger',
      component: TripsByComponent,      
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
