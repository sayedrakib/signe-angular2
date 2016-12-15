import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HakuComponent } from "./haku/haku.component";
import { AdminComponent } from "./admin/admin.component";

import { Item, SearchService, Time, UpdateDBservice} from './shared/index';



@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        HakuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [SearchService, UpdateDBservice],
    bootstrap: [AppComponent]
})
export class AppModule {
}
