import { NgModule }             		from '@angular/core';
import { RouterModule, Routes } 		from '@angular/router';
import { JobsComponent }				from './exp/jobs.component';
import { SchoolsComponent }				from './edu/schools.component';
import { SamplesComponent }				from './writing/samples.component';
import { ProjectsComponent }			from './project/projects.component';
import { TypesComponent }				from './personality-types/types.component';
import { TypeDetailComponent }			from './personality-types/type-detail.component';



const routes: Routes = [
	{ path: 'exp', component: JobsComponent },
	{ path: 'edu', component: SchoolsComponent},
	{ path: 'samples', component: SamplesComponent},
	{ path: 'projects', component: ProjectsComponent},
	{ path: 'types', component: TypesComponent },
	{ path: 'types/:id', component: TypeDetailComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
