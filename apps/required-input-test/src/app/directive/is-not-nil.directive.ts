import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { isNil } from '../typeguard/is-nil';

@Directive({
  /**
   * Csak a peldakod szepsegert!!! amugy ilyet ne csinaljon lehetoleg senki :D
   */
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[isNotNil]',
  standalone: true,
})
export class IsNotNilDirective {
  #hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set isNotNil(value: unknown) {
    if (!isNil(value) && !this.#hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.#hasView = true;
    } else if (isNil(value) && this.#hasView) {
      this.viewContainer.clear();
      this.#hasView = false;
    }
  }
}
