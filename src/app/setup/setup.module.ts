import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SetupComponent } from './setup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'Setup', component: SetupComponent }
    ]),
    SharedModule
  ]
})
export class SetupModule { }
