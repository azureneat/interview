import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { UserDetail } from 'src/app/shared/user-detail';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})
export class DisplayUsersComponent implements OnInit {
  term = ''

  constructor(private appService: AppService) { }
  users: UserDetail[]
  ngOnInit(): void {
    this.displayUser()
  }


  displayUser() {
    this.appService.fetchUser().subscribe((res: UserDetail[]) => {
      this.users = res

      console.log(this.users)


    })

  }
}
