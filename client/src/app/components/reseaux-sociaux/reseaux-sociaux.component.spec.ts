import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauxSociauxComponent } from './reseaux-sociaux.component';

describe('ReseauxSociauxComponent', () => {
  let component: ReseauxSociauxComponent;
  let fixture: ComponentFixture<ReseauxSociauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReseauxSociauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReseauxSociauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
