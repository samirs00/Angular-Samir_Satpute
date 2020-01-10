import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPizzaComponent } from './my-pizza.component';

describe('MyPizzaComponent', () => {
  let component: MyPizzaComponent;
  let fixture: ComponentFixture<MyPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
