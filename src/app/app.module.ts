import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { MainComponent } from './admin/components/main/main.component';
import { ListComponent } from './admin/components/list/list.component';
import { AddComponent } from './admin/components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    KeepersComponent,
    StoreComponent,
    ContactComponent,
    MainComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    ModuleEmailModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
