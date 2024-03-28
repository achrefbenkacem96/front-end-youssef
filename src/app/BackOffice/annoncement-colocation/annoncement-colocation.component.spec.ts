import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncementColocationComponent } from './annoncement-colocation.component';

describe('AnnoncementColocationComponent', () => {
  let component: AnnoncementColocationComponent;
  let fixture: ComponentFixture<AnnoncementColocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncementColocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoncementColocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
