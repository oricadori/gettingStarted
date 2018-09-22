import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListCompnent } from './products/product-list.component';
import { ConverToSpacesPipe } from './shared/convert-to-spaces';
import { StarComponent} from './shared/star.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListCompnent,
    ConverToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
