import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appcomponent1 } from './appcomponent1';

describe('Appcomponent1', () => {
  let component: Appcomponent1;
  let fixture: ComponentFixture<Appcomponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appcomponent1],
    }).compileComponents();

    fixture = TestBed.createComponent(Appcomponent1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
