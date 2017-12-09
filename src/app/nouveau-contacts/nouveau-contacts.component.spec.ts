import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauContactsComponent } from './nouveau-contacts.component';

describe('NouveauContactsComponent', () => {
  let component: NouveauContactsComponent;
  let fixture: ComponentFixture<NouveauContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
