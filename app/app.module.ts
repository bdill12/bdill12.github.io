import { NgModule }      									from '@angular/core';
import { BrowserModule } 									from '@angular/platform-browser';
import { FormsModule }   									from '@angular/forms';
import { HttpModule }    									from '@angular/http';

import { AppRoutingModule } 								from './app-routing.module';

import { InMemoryWebApiModule } 							from 'angular-in-memory-web-api';
import { InMemoryDataService }  							from './in-memory-data.service';

import { AppComponent }  									from './app.component';
import { JobsComponent }									from './exp/jobs.component';
import { SchoolsComponent }									from './edu/schools.component';
import { SamplesComponent }									from './writing/samples.component';
import { ProjectsComponent }								from './project/projects.component';
import { InfoService }										from './info.service';
import { TypesComponent }									from './personality-types/types.component';
import { TypeDetailComponent }								from './personality-types/type-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule],
  declarations: [ AppComponent, JobsComponent, SchoolsComponent, SamplesComponent, ProjectsComponent, TypesComponent, TypeDetailComponent],
  providers: [ InfoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
