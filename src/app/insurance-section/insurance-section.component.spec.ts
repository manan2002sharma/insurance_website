import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceSectionComponent } from './insurance-section.component';

describe('InsuranceSectionComponent', () => {
  let component: InsuranceSectionComponent;
  let fixture: ComponentFixture<InsuranceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuranceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
