import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolscreateComponent } from './toolscreate.component';

describe('ToolscreateComponent', () => {
  let component: ToolscreateComponent;
  let fixture: ComponentFixture<ToolscreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolscreateComponent]
    });
    fixture = TestBed.createComponent(ToolscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
