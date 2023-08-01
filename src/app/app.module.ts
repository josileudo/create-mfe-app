import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule implements DoBootstrap {
  readonly MFE_SELECTOR = 'create-mfe-app';
  injector = inject(Injector);

  ngDoBootstrap(): void {
    if (!customElements.get(this.MFE_SELECTOR)) {
      const custom = createCustomElement(AppComponent, {
        injector: this.injector
      });
      customElements.define(this.MFE_SELECTOR, custom);
    }
  }
}
