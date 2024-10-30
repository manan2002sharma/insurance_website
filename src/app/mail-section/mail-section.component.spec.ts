import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSectionComponent } from './mail-section.component';

describe('MailSectionComponent', () => {
  let component: MailSectionComponent;
  let fixture: ComponentFixture<MailSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
