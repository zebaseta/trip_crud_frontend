import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlinesComponent } from './airlines.component';
import { AllAirlinesComponent } from './all-airlines/all-airlines.component';



const routes: Routes = [{
  path: '',
  component: AirlinesComponent,
  children: [
    {
      path: 'airlines',
      component: AllAirlinesComponent,      
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirlinesRoutingModule { }

export const routedComponents = [
  AirlinesComponent,  
  AllAirlinesComponent,  
];
