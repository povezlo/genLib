import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBoxComponent } from './skill-box.component';

describe('SkillBoxComponent', () => {
  let component: SkillBoxComponent;
  let fixture: ComponentFixture<SkillBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillBoxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(SkillBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
