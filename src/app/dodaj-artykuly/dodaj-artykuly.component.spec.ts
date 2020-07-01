import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajArtykulyComponent } from './dodaj-artykuly.component';

describe('DodajArtykulyComponent', () => {
  let component: DodajArtykulyComponent;
  let fixture: ComponentFixture<DodajArtykulyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajArtykulyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajArtykulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
