import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddToCartComponent } from './user-add-to-cart.component';

describe('UserAddToCartComponent', () => {
  let component: UserAddToCartComponent;
  let fixture: ComponentFixture<UserAddToCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddToCartComponent]
    });
    fixture = TestBed.createComponent(UserAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
