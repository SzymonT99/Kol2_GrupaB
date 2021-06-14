import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STForumComponent } from './st-forum.component';

describe('STForumComponent', () => {
  let component: STForumComponent;
  let fixture: ComponentFixture<STForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
