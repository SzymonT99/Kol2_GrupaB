import { Component, OnInit } from '@angular/core';
import { STDataService } from "../../services/st-data.service";

@Component({
  selector: 'app-st-forum',
  templateUrl: './st-forum.component.html',
  styleUrls: ['./st-forum.component.css']
})
export class STForumComponent implements OnInit {

  public items$: any;

  constructor(private service: STDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
