import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmlSectionComponent } from './bml-section.component';

describe('BmlSectionComponent', () => {
  let component: BmlSectionComponent;
  let fixture: ComponentFixture<BmlSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmlSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmlSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
