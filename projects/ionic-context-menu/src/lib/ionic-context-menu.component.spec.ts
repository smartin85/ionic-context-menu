import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicContextMenuComponent } from './ionic-context-menu.component';

describe('IonicContextMenuComponent', () => {
  let component: IonicContextMenuComponent;
  let fixture: ComponentFixture<IonicContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
