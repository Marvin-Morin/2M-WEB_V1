import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueDeRemboursementComponent } from './politique-de-remboursement.component';

describe('PolitiqueDeRemboursementComponent', () => {
  let component: PolitiqueDeRemboursementComponent;
  let fixture: ComponentFixture<PolitiqueDeRemboursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolitiqueDeRemboursementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolitiqueDeRemboursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
