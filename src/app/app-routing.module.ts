import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { EventFormComponent } from './event-create/event-create.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { ToolComponent } from './tool/tool.component';

const routes: Routes = [
  {
    path: 'create/Events',
    pathMatch: 'full',
    component: EventFormComponent,
  },

  { path: 'members', pathMatch: 'full', component: MemberComponent },
  { path: '', pathMatch: 'full', redirectTo: 'members' },
  { path: 'create', pathMatch: 'full', component: MemberFormComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'events', pathMatch: 'full', component: EventsComponent },
  { path: 'events/create', pathMatch: 'full', component: EventFormComponent },
  { path: 'tools', pathMatch: 'full', component: ToolComponent },
  { path: ':id/edit', pathMatch: 'full', component: MemberFormComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'members' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
