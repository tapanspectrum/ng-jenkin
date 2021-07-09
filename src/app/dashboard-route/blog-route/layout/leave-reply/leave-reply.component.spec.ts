import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveReplyComponent } from './leave-reply.component';

describe('LeaveReplyComponent', () => {
  let component: LeaveReplyComponent;
  let fixture: ComponentFixture<LeaveReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
