import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STForumDetailsComponent } from './st-forum-details.component';

describe('STForumDetailsComponent', () => {
  let component: STForumDetailsComponent;
  let fixture: ComponentFixture<STForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
