import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { RoleGuard } from 'app/guard/role.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./aiports/airports.module')
        .then(m => m.AirportsModule),
    },
    {
      path: '',
      loadChildren: () => import('./airlines/airlines.module')
        .then(m => m.AirlinesModule),
    },
    {
      path: '',
      loadChildren: () => import('./trips/trips.module')
        .then(m => m.TripsModule),
    },
    {
      path: '',
      loadChildren: () => import('./bugs/bugs.module')
        .then(m => m.BugsModule),
    },    
    {
      path: '',
      canActivateChild: [RoleGuard],
      loadChildren: () => import('./systems/systems.module')
        .then(m => m.SystemsModule),
    },
    {
      path: '',      
      loadChildren: () => import('./preferences/preferences.module')
        .then(m => m.PreferencesModule),
    },
    {
      path: '',
      canActivateChild: [RoleGuard],
      loadChildren: () => import('./invitations/invitations.module')
        .then(m => m.InvitationsModule),
    },
    {
      path: '',
      canActivateChild: [RoleGuard],
      loadChildren: () => import('./reports/statistics.module')
        .then(m => m.StatisticsModule),
    },
    {
      path: '',
      canActivateChild: [RoleGuard],
      loadChildren: () => import('./costs/costs-module.module')
        .then(m => m.CostsModule),
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
