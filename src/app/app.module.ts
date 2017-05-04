import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdRadioModule} from '@angular/material';
import {MdIconModule} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';


import {JsonpModule } from '@angular/http';

// D3
import { D3Service } from 'd3-ng2-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // material imports
    MdButtonModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdSidenavModule,
    MdRadioModule,
    MdIconModule,
    FormsModule,
    JsonpModule,
    HttpModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
