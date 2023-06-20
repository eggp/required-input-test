import { Component, Input } from '@angular/core';

@Component({
  selector: 'required-input-test-attila-peldak',
  standalone: true,
  templateUrl: 'attila-peldak.component.html',
})
export class AttilaPeldakComponent {
  @Input({ required: true }) foo1!: string;
  // @Input() foo2! = 'bar';
  @Input() foo2 = 'bar';
  @Input() foo3?: string;
}
