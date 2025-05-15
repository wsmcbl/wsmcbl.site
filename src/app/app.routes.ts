import {Routes} from '@angular/router';
import {HomepageComponent} from './view/home/homepage/homepage.component';
import {ViewGradeOnlineComponent} from './view/grade-online/view-grade-online/view-grade-online.component';
import {RulersComponent} from './view/regulations/rulers/rulers.component';

export const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'online-grades', component: ViewGradeOnlineComponent},
  {path: 'regulation', component: RulersComponent}
];
