import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroefiltradoComponent } from './heroefiltrado.component';

describe('HeroefiltradoComponent', () => {
  let component: HeroefiltradoComponent;
  let fixture: ComponentFixture<HeroefiltradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroefiltradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroefiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
