import {Component} from '@angular/core';
import {HeroComponent} from '../../base/hero/hero/hero.component';
import {GaleryComponent} from '../../base/galery/galery.component';
import {InfoComponent} from '../../base/info/info.component';
import {QuestionsComponent} from '../../base/questions/questions.component';

@Component({
    selector: 'app-homepage',
    imports: [
        HeroComponent,
        GaleryComponent,
        InfoComponent,
        QuestionsComponent,
    ],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css'
})

export class HomepageComponent
{
}
