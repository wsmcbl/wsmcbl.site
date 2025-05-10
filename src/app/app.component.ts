import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { NavBarComponent } from './view/base/nav-bar/nav-bar.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent
{
    title = 'wsmcbl.site';
}
