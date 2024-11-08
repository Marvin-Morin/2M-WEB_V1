import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiensComponent } from './liens.component';

describe('LiensComponent', () => {
  let component: LiensComponent;
  let fixture: ComponentFixture<LiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
