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
