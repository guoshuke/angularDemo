import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { IndexComponent } from './pages/index/index.component';
import { OtherComponent } from './pages/other/other.component';
import { TestComponent } from './pages/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    IndexComponent,
    OtherComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
