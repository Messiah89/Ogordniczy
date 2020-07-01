import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ONasComponent } from './o-nas/o-nas.component';
import { ArtykulyComponent } from './artykuly/artykuly.component';
import { DodajArtykulyComponent } from './dodaj-artykuly/dodaj-artykuly.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: 'onas', pathMatch: 'full'},
  {path: 'artykuly', component: ArtykulyComponent},
  {path: 'dodajartykuly', component: DodajArtykulyComponent},
  {path: 'onas', component: ONasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ONasComponent,
    ArtykulyComponent,
    DodajArtykulyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
