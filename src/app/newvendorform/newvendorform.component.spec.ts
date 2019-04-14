import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvendorformComponent } from './newvendorform.component';

describe('NewvendorformComponent', () => {
  let component: NewvendorformComponent;
  let fixture: ComponentFixture<NewvendorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewvendorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvendorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
