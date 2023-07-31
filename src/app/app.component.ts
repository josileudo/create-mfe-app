import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .container {
      margin: auto;
      width: 60vw;
      height: 90vh;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        background: #f8f8f8;
        padding: 9rem;
        border-radius: 12px;

        h3 {
          margin: 0;
          color: #c6c6c6;
        }

        h1 {
          margin: 0;
          font-size: 2.6rem;
          padding-bottom: 2rem;
          color: #c3002f;
        }
      }
    }
  `]
})
export class AppComponent {
  title = 'create-mfe-app';
}
