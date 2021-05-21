import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Page } from '@nativescript/core'

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  versionNumber = "1.2.1";
  distanceUnits = "Miles";
  timeZone = "Ottawa, ON (GMT-4)";

  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
