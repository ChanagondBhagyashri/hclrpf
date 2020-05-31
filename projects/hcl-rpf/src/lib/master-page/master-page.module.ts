import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MasterPageComponent } from './master-page.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MasterPageComponent],
  exports: [MasterPageComponent]
})
export class RPFMasterPageModule {}
