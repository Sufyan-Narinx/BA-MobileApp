import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeReportPage } from './make-report.page';

describe('MakeReportPage', () => {
  let component: MakeReportPage;
  let fixture: ComponentFixture<MakeReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MakeReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
