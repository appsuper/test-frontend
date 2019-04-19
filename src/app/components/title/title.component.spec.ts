import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the titles passed as @Input()', () => {
    component.ttl = 'SuperComprador';
    component.ttlname = 'João Gabriel';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.title').innerText).toEqual('SuperComprador');
    expect(fixture.nativeElement.querySelector('.name').innerText).toEqual('João Gabriel');
  });
});
