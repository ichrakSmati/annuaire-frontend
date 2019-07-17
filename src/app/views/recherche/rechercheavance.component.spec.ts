import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheavanceComponent } from './rechercheavance.component';

describe('RechercheavanceComponent', () => {
  let component: RechercheavanceComponent;
  let fixture: ComponentFixture<RechercheavanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheavanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheavanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
