import { NgModule } from '@angular/core';
import { 
  NbCardModule, 
  NbIconModule, 
  NbSelectModule, 
  NbInputModule, 
  NbTreeGridModule,
  NbButtonModule,
  NbLayoutModule,
  NbAlertModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TripsRoutingModule, routedComponents } from './trips-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbTreeGridModule,
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
    ...routedComponents
  ],
})
export class TripsModule { }
