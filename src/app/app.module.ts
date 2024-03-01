import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { BodyComponent } from "./body/body.component";
import { HeaderComponent } from "./header/header.component";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductBackendService } from './product-backend.service';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        ClientFormComponent,
        ProfileComponent,
        FooterComponent,
        BodyComponent,
        HeaderComponent,
        CatalogueComponent,
        SearchComponent
    ],
    providers: [ProductBackendService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule { }
