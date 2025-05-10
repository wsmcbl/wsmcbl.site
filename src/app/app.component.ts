import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { NavBarComponent } from './view/base/nav-bar/nav-bar.component';
import {HeroComponent} from './view/base/hero/hero/hero.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBarComponent, HeroComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent
{
    title = 'wsmcbl.site';
}
