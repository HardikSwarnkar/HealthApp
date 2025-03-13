import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGeminiDataComponent } from './get-gemini-data.component';

describe('GetGeminiDataComponent', () => {
  let component: GetGeminiDataComponent;
  let fixture: ComponentFixture<GetGeminiDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetGeminiDataComponent]
    });
    fixture = TestBed.createComponent(GetGeminiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
