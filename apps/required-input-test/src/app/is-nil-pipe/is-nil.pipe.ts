import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from '../typeguard/is-nil';

@Pipe({
  name: 'isNil',
  standalone: true,
})
export class IsNilPipe implements PipeTransform {
  /**
   * Bar typeguard -kent irtam meg, valojaban megsem az :(
   * regota tervezem hogy irni kene issue-t angulareknak :D
   */
  transform(value: unknown): value is null | undefined {
    return isNil(value);
  }
}
