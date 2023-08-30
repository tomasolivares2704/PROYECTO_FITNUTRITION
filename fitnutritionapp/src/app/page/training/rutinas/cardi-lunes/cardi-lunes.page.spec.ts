import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardiLunesPage } from './cardi-lunes.page';

describe('CardiLunesPage', () => {
  let component: CardiLunesPage;
  let fixture: ComponentFixture<CardiLunesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardiLunesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
