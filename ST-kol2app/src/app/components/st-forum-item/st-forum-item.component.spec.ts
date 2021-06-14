import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STForumItemComponent } from './st-forum-item.component';

describe('STForumItemComponent', () => {
  let component: STForumItemComponent;
  let fixture: ComponentFixture<STForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
