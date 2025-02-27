import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageMainComponent } from './language-main.component';

describe('LanguageMainComponent', () => {
  let component: LanguageMainComponent;
  let fixture: ComponentFixture<LanguageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
