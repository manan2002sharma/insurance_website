import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAndNewsSectionComponent } from './blog-and-news-section.component';

describe('BlogAndNewsSectionComponent', () => {
  let component: BlogAndNewsSectionComponent;
  let fixture: ComponentFixture<BlogAndNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAndNewsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogAndNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
