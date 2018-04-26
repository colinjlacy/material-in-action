import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LyricsComponent } from './components/lyrics/lyrics.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';

console.log(LyricsComponent);

export const routes: Routes = [
  {
    path: '',
    component: LyricsComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];
