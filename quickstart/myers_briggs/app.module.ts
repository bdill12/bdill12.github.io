import { NgModule }      									from '@angular/core';
import { BrowserModule } 									from '@angular/platform-browser';
import { FormsModule }   									from '@angular/forms';
import { HttpModule }    									from '@angular/http';

import { AppRoutingModule } 								from './app-routing.module';

import { InMemoryWebApiModule } 							from 'angular-in-memory-web-api';
import { InMemoryDataService }  							from './in-memory-data.service';

import { AppComponent }  									from './app.component';
import { TypesComponent }									from './types.component';
import { TypeDetailComponent }								from './type-detail.component';
import { InfoService }										from './info.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule],
  declarations: [ AppComponent, TypesComponent, TypeDetailComponent],
  providers: [ InfoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
