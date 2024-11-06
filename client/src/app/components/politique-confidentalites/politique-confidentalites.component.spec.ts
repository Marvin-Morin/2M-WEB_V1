import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueConfidentalitesComponent } from './politique-confidentalites.component';

describe('PolitiqueConfidentalitesComponent', () => {
  let component: PolitiqueConfidentalitesComponent;
  let fixture: ComponentFixture<PolitiqueConfidentalitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolitiqueConfidentalitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolitiqueConfidentalitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
