import { Component } from '@angular/core';
import { AttilaPeldakComponent } from './attila-peldak/attila-peldak.component';
import { TojasPeldakComponent } from './tojas-peldak/tojas-peldak.component';

@Component({
  standalone: true,
  imports: [AttilaPeldakComponent, TojasPeldakComponent],
  selector: 'required-input-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'required-input-test';
}
