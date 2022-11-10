import { NgModule } from '@angular/core';
import { ConsumerListComponent } from './consumer-list.component';
import { ConsumerDetailComponent } from './consumer-detail.component';
import { RouterModule } from '@angular/router';
import { ConsumerDetailGuard } from './consumer-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ConsumerListComponent,
    ConsumerDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'Consumers', component: ConsumerListComponent },
      { 
        path: 'Consumers/New',
        canActivate: [ConsumerDetailGuard],
        component: ConsumerDetailComponent 
      },
      { 
        path: 'Consumers/:id',
        canActivate: [ConsumerDetailGuard],
        component: ConsumerDetailComponent 
      }
    ]),
    SharedModule
  ]
})
export class ConsumerModule { }
