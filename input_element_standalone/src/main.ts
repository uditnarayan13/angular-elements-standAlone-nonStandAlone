import {
  bootstrapApplication,
  createApplication,
} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

const ELEMENT_TAG = 'app-standalone-calculator';

createApplication().then((appRef) => {
  const calculatorWebStandaloneComponent = createCustomElement(AppComponent, {
    injector: appRef.injector,
  });

  if (!customElements.get(ELEMENT_TAG)) {
    customElements.define(ELEMENT_TAG, calculatorWebStandaloneComponent);
  }
});
