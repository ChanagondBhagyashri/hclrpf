import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRoutes, Route } from '@angular/router';
import { LazyPageComponent } from './lazy-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Since Angular 8, the routes can be exported directly:
export const lazyLoadedPageRoute = {
  loadChildren: () => import('./lazy-page.module').then(m => m.LazyLoadedPageModule)
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyPageComponent
      }
    ])
  ],
  declarations: [LazyPageComponent]
})
export class LazyLoadedPageModule {}
