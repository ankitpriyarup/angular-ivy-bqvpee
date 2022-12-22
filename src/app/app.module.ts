import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialExampleModule } from '../material.module';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialExampleModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
