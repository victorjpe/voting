import { Routes, RouterModule } from '@angular/router';
import { VotingListComponent } from "./voting-list/voting-list.component";

const routes: Routes = [
  { path: '', component: VotingListComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
