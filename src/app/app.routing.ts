import { Routes, RouterModule } from '@angular/router';
import { VotingPageComponent } from './voting-page/voting-page.component';

const routes: Routes = [
  { path: 'vote/:id', component: VotingPageComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

export const AppRoutes = RouterModule.forRoot(routes);
