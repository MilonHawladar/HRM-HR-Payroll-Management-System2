import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-sidenav',
  templateUrl: './user-sidenav.component.html',
  styleUrls: ['./user-sidenav.component.css']
})
export class UserSidenavComponent implements OnInit {

  userList:any;
  public badge: number = 15;
  id=localStorage.getItem("id");
  statusVal: any = 'Inactive';
  constructor(private route: Router, private api:ApiService) { }

  ngOnInit(): void {
    this.showUserValue();
  }
  badgeRemove(){
    this.badge = 0
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  logout(){
    this.api.putTypeRequest(`user/activity-update/${this.id}/${this.statusVal}`, "").subscribe((res) => {
      
    })
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

  showUserValue(){
    this.api.getTypeRequest(`user/list/${this.id}`).subscribe((res: any) => {
      this.userList = res;
      console.log(this.userList);

      // this.userList.image=this.convertToBase64(this.userList.image);
    })
  }
}
