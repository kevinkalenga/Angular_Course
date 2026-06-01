import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appcomponent2 } from './appcomponent2';

describe('Appcomponent2', () => {
  let component: Appcomponent2;
  let fixture: ComponentFixture<Appcomponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appcomponent2],
    }).compileComponents();

    fixture = TestBed.createComponent(Appcomponent2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
