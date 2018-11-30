import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerAppelOffreComponent } from './creer-appel-offre.component';

describe('CreerAppelOffreComponent', () => {
  let component: CreerAppelOffreComponent;
  let fixture: ComponentFixture<CreerAppelOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerAppelOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
