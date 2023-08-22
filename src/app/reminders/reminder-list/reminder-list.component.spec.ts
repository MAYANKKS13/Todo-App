import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderListComponent } from './reminder-list.component';

describe('ReminderListComponent', () => {
  let component: ReminderListComponent;
  let fixture: ComponentFixture<ReminderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReminderListComponent]
    });
    fixture = TestBed.createComponent(ReminderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
