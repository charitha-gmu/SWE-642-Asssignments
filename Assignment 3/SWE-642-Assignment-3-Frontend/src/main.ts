import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

// Explicitly specify the type for window['ngRef']
interface NgRef {
  destroy: () => void;
}

// Check if window['ngRef'] is defined and has the expected structure
if (window['ngRef'] && (window['ngRef'] as NgRef).destroy) {
  // Support hot module replacement
  window['ngRef'].destroy();
  window['ngRef'] = bootstrap();
} else {
  enableProdMode();
  // Bootstrap the AppModule
  window['ngRef'] = bootstrap();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
