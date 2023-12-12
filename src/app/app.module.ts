// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MemberComponent } from './member/member.component';
// import { MatTableModule } from '@angular/material/table';
// import { MatIconModule } from '@angular/material/icon';
// import { MemberFormComponent } from './member-form/member-form.component';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { EventsComponent } from './events/events.component';
// import { LayoutComponent } from './layout/layout.component';
// import { LoginComponent } from './login/login.component';
// import { FirebaseModule } from './Firebase.module';
import { AngularFireModule } from '@angular/fire/compat';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

//import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ToolsComponent } from './tools/tools.component';
import { EventsComponent } from './events/events.component';
import { FirebaseModule } from './Firebase.module';
import { LoginComponent } from './login/login.component';
import { EventFormComponent } from './event-create/event-create.component';

import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ToolscreateComponent } from './toolscreate/toolscreate.component';
import { ToolComponent } from './tool/tool.component';
@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    DashboardComponent,
    EventsComponent,
    LayoutComponent,
    LoginComponent,
    EventFormComponent,
    ToolscreateComponent,
    ToolComponent,
    // ArticlesComponent,
    // ToolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    FirebaseModule,
    AngularFireModule,
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule,
    JsonPipe,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
