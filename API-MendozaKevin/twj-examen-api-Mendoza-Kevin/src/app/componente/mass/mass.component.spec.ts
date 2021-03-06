import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassComponent } from './mass.component';

describe('MassComponent', () => {
  let component: MassComponent;
  let fixture: ComponentFixture<MassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
