import { Component, OnInit } from '@angular/core';
import { STDataService } from "../../services/st-data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'st-forum-details',
  templateUrl: './st-forum-details.component.html',
  styleUrls: ['./st-forum-details.component.css']
})
export class STForumDetailsComponent implements OnInit {

  public title: string = '';
  public text: string = '';
  public image = '';

  constructor(private dataService: STDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    let id: any;

    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getById(id).subscribe((res: any) => {
      this.title = res['title'];
      this.text = res['text'];
      this.image = res['image'];
    });

  }

}
