import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { NavBarComponent } from './view/base/nav-bar/nav-bar.component';
import { FooterComponent } from './view/base/footer/footer.component';
import {QuestionsComponent} from './view/base/questions/questions.component';
import {InfoComponent} from './view/base/info/info.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBarComponent, FooterComponent, QuestionsComponent, InfoComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent
{
    title = 'wsmcbl.site';
}
