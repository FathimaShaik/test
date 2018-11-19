import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { TypographyComponent } from '../typography/typography.component';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent {
  public showPosition;
    constructor() {
      this.findMe();
    }
  
    // openLink(event: MouseEvent): void {
    //   this.bottomSheetRef.dismiss();
    //   event.preventDefault();
    // }
 
    findMe() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position)
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }

  }