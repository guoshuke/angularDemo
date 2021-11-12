import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { OtherComponent } from './pages/other/other.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'other', component: OtherComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
