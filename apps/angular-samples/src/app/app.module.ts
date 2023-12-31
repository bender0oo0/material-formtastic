import { NgModule } from '@angular/core';
import { SampleBasicComponent } from './sample-basic/sample-basic.component';
import { SampleBasicHttpLoaderComponent } from './sample-basic-http-loader/sample-basic-http-loader.component';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SampleBasicEmptyFormComponent } from './sample-basic-empty-form/sample-basic-empty-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DebugComponent } from './debug/debug.component';
import { SampleDocsComponent } from './sample-docs/sample-docs.component';
import { SampleMatCardComponent } from './sample-mat-card/sample-mat-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SampleAspNetComponent } from './sample-asp-net/sample-asp-net.component';
import { MaterialFormtasticModule } from 'material-formtastic';

@NgModule({
  declarations: [SampleBasicComponent, SampleBasicHttpLoaderComponent, SampleAspNetComponent, SampleBasicEmptyFormComponent, SampleDocsComponent, SampleMatCardComponent, DebugComponent, AppComponent],
  imports: [BrowserModule, RouterModule, HttpClientModule, MaterialFormtasticModule, MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule],
  exports: [],
  providers: [
    provideRouter(routes),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
