import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ModuleEmailModule } from './moduleEmail/module-email.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactComponent } from './components/contact/contact.component';
import { StoreComponent } from './components/store/store.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    KeepersComponent,
    StoreComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    ModuleEmailModule,
    FormsModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
