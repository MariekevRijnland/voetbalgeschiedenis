import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarenComponent } from './jaren.component';

describe('JarenComponent', () => {
  let component: JarenComponent;
  let fixture: ComponentFixture<JarenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JarenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
