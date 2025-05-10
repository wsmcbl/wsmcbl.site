import {Component} from '@angular/core';
import {HeroComponent} from '../../base/hero/hero/hero.component';

@Component({
    selector: 'app-homepage',
    imports: [
        HeroComponent,
    ],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css'
})

export class HomepageComponent
{
}
