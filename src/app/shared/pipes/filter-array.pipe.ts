import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
  standalone: true,
})
export class FilterArrayPipe implements PipeTransform {
  transform(items: any[], searchText: string, objectKey: string | null = null): any[] {
    if (!items || !searchText) {
      return items;
    }

    if (objectKey) {
      return items.filter((item) =>
        item[objectKey].toLowerCase().includes(searchText.toLocaleLowerCase())
      );
    } else {
      return items.filter((item) => item.toLowercase().includes(searchText.toLowerCase()));
    }
  }
}
