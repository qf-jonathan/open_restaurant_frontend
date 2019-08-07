import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionPageComponent } from './attention-page.component';

describe('AttentionPageComponent', () => {
  let component: AttentionPageComponent;
  let fixture: ComponentFixture<AttentionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
