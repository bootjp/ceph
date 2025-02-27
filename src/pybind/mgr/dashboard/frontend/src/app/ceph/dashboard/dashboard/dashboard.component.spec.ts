import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { configureTestBed } from '~/testing/unit-test-helper';
import { DeprecatedDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DeprecatedDashboardComponent;
  let fixture: ComponentFixture<DeprecatedDashboardComponent>;

  configureTestBed({
    imports: [NgbNavModule],
    declarations: [DeprecatedDashboardComponent],
    schemas: [NO_ERRORS_SCHEMA]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeprecatedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
