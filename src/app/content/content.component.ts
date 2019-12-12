import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  apiData: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get(`http://localhost/SampleWebApi/api/values`).subscribe(data => {
      this.apiData = data;
    });
  }

}
