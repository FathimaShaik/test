import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
@NgModule({
    imports: [ 
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatDividerModule,
        MatTabsModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatBottomSheetModule,
       
       
  
    ],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatDividerModule,
        MatTabsModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatBottomSheetModule
   
       
    ],
 
})
  export class MaterialModule { }