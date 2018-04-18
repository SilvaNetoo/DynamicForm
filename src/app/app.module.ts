import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [BrowserModule, DynamicFormModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
