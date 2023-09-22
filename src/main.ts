import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { BookEffects } from './app/store/book/books.effects';
import { appFeature } from './app/store/book/books.state';


bootstrapApplication(AppComponent, {
    providers: [
      provideStore(),
      provideState(appFeature),
      provideEffects(BookEffects),
    ],
})
