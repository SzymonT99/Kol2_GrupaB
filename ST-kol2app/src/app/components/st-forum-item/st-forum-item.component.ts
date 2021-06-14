import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'st-forum-item',
  templateUrl: './st-forum-item.component.html',
  styleUrls: ['./st-forum-item.component.css']
})
export class STForumItemComponent implements OnInit {

  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() image: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
