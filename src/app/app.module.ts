import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './ligths/image.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    ImageComponent,
    InputComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
