import {Routes} from '@angular/router';
import {HomepageComponent} from './view/home/homepage/homepage.component';
import {ViewGradeOnlineComponent} from './view/grade-online/view-grade-online/view-grade-online.component';

export const routes: Routes = [
  {path: 'as', component: HomepageComponent},
  {path: '', component: ViewGradeOnlineComponent}
];
