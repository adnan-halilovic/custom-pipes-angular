import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncate',
  standalone: true,
})
export class TextTruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 50, trail: string = '...'): string {
    return value.length> limit ? value.substring(0, limit) + trail : value;
  }
}
