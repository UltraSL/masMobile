import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.page.html',
  styleUrls: ['./view-request.page.scss'],
})
export class ViewRequestPage implements OnInit {

  
  userData : any = {}
  searchedRequests : any = {}
  clickedRequestId : any = {}

  constructor(private request : RequestService) { }

  ngOnInit() {

    //this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    
    this.request.getRequestByBySupervisor("dammika").subscribe((res: any)=> {
      this.searchedRequests=res,
      console.log(res)
    })
  }

  getId(id : any){
    this.clickedRequestId = id;
    localStorage.setItem('clickedRequestId', this.clickedRequestId);
    console.log(this.clickedRequestId+" id of Request");
  }

}
