import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from '../typeguard/is-nil';

@Pipe({
  name: 'isNotNil',
  standalone: true,
})
export class IsNotNilPipe implements PipeTransform {
  transform(value: unknown): boolean {
    return !isNil(value);
  }
}
