import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorGraphComponent } from './sensor-graph.component';

describe('SensorGraphComponent', () => {
  let component: SensorGraphComponent;
  let fixture: ComponentFixture<SensorGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
