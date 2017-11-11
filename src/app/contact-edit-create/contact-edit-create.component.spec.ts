import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditCreateComponent } from './contact-edit-create.component';

describe('ContactEditCreateComponent', () => {
  let component: ContactEditCreateComponent;
  let fixture: ComponentFixture<ContactEditCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactEditCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
