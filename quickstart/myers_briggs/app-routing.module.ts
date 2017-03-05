import { NgModule }             		from '@angular/core';
import { RouterModule, Routes } 		from '@angular/router';
import { TypesComponent }				from './types.component';
import { TypeDetailComponent }			from './type-detail.component';



const routes: Routes = [
	{ path: 'types', component: TypesComponent },
	{ path: 'type/:name', component: TypeDetailComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
