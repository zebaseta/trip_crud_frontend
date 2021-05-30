import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportsComponent } from './airports.component';
import { AllAirportsComponent } from './all-airports/all-airports.component';



const routes: Routes = [{
  path: '',
  component: AirportsComponent,
  children: [
    {
      path: 'airports',
      component: AllAirportsComponent,      
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirportsRoutingModule { }

export const routedComponents = [
  AirportsComponent,  
  AllAirportsComponent,  
];
