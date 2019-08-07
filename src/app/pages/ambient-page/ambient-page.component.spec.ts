import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientPageComponent } from './ambient-page.component';

describe('AmbientPageComponent', () => {
  let component: AmbientPageComponent;
  let fixture: ComponentFixture<AmbientPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbientPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
