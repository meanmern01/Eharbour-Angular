import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyReferralComponent } from './buddy-referrel.component';

describe('BuddyReferrelComponent', () => {
  let component: BuddyReferralComponent;
  let fixture: ComponentFixture<BuddyReferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuddyReferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuddyReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
