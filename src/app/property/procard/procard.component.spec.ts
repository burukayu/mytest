import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcardComponent } from './procard.component';

describe('ProcardComponent', () => {
  let component: ProcardComponent;
  let fixture: ComponentFixture<ProcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
