import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCreatorComponent } from './order-creator.component';

describe('MenuCreatorComponent', () => {
  let component: OrderCreatorComponent;
  let fixture: ComponentFixture<OrderCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
