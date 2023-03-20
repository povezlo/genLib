import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';

import { SkillBoxComponent } from './skill-box.component';

@NgModule({
  declarations: [SkillBoxComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatListModule
  ],
  exports: [SkillBoxComponent]
})
export class SkiilBoxModule { }
