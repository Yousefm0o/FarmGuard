import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduArticlesComponent } from './edu-articles.component';

describe('EduArticlesComponent', () => {
  let component: EduArticlesComponent;
  let fixture: ComponentFixture<EduArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EduArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
