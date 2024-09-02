import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeedetailsComponent } from './coffeedetails.component';

describe('CoffeedetailsComponent', () => {
  let component: CoffeedetailsComponent;
  let fixture: ComponentFixture<CoffeedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeedetailsComponent]
    });
    fixture = TestBed.createComponent(CoffeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
