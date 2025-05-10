import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulersComponent } from './rulers.component';

describe('RulersComponent', () => {
  let component: RulersComponent;
  let fixture: ComponentFixture<RulersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
