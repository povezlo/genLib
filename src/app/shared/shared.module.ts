import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingModule } from '../shared/components';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { MatPaginatorModule } from '@angular/material/paginator';
 import { MatChipsModule } from '@angular/material/chips'; 
 import { MatDividerModule } from '@angular/material/divider'; 
 import { MatListModule } from '@angular/material/list'; 

const MATERIAL_MODULES = [
    MatCardModule,
    MatButtonModule,
    RatingModule,
    MatPaginatorModule,
    MatChipsModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    CommonModule,
    ...MATERIAL_MODULES
  ]
})
export class SharedModule { }
