import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should display current year', () => {
    component.currentData = new Date().getFullYear();
    const copyright = fixture.nativeElement.querySelector('.app-page__footer-copyright');
    expect(copyright.textContent).toContain(component.currentData);
  });
});
