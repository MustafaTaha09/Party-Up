import { Component, OnInit } from '@angular/core';
import { PlayersDataService } from '../players-data.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private logIn: PlayersDataService) { }

  ngOnInit(): void {
  }

  navBarDisplay(){
    if (this.logIn.navBarFlag[0] && this.logIn.navBarFlag[1])
      return true;
    return false;
  }
}
