import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environment/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  AngularFireAnalyticsModule,
  APP_NAME,
  APP_VERSION,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/compat/analytics';
import { EventFormComponent } from './event-create/event-create.component';

@NgModule({
  imports: [
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
  ],
  exports: [AngularFireAuthModule, AngularFireAnalyticsModule],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    { provide: APP_NAME, useValue: '' },
    { provide: APP_VERSION, useValue: '0.1.0' },
  ],
  //   declarations: [EventFormComponent],
})
export class FirebaseModule {}
