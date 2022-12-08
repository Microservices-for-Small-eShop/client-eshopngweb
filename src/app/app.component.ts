import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eShop Application';

  // Robbie, Why do we need this? Also, why it is always empty?
  // Thanks Robbie, This is expected. And it is the a safety feature.
  processEnv = globalThis.process?.env;
  // processEnv = "Robbie, Why do we need this? Also, why it is always empty?";
  angularEnv = environment;

  constructor() {
    console.log(JSON.stringify(this.processEnv), JSON.stringify(globalThis.process));

    console.log(JSON.stringify(Object.getOwnPropertyNames(this)));
  }


}
