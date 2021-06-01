import { NgModule } from '@angular/core';
import { 
  NbCardModule, 
  NbIconModule, 
  NbSelectModule, 
  NbInputModule, 
  NbTreeGridModule,
  NbButtonModule,
  NbLayoutModule,
  NbAlertModule,
  NbDatepickerModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TripsRoutingModule, routedComponents } from './trips-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripsByComponent } from './trips-by/trips-by.component';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { OneTripComponent } from './one-trip/one-trip.component';
import { CreateTripComponent } from './create-trip/create-trip.component';

@NgModule({
  imports: [
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbTreeGridModule,
    NbDatepickerModule,
    NbAlertModule,
    NbIconModule,
    NbSelectModule,
    NbInputModule,
    ThemeModule,
    TripsRoutingModule,
    Ng2SmartTableModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    ...routedComponents,
    TripsByComponent,
    AllTripsComponent,
    OneTripComponent,
    CreateTripComponent
  ],
})
export class TripsModule { }
