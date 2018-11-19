import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { IconsComponent } from '../icons/icons.component';

@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss']
})

export class TypographyComponent  {

    constructor(private bottomSheet: MatBottomSheet) {}

    openBottomSheet(): void {
      this.bottomSheet.open(IconsComponent);
    }
  }
