import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date | string): string {
    if(!value) return '';

    const now = new Date();
    const inputDate = new Date(value);

    const seconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000)

    if(seconds<30){
      return 'Just now';
    }

    const intervals: {[key: string] : number} = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    }

    for (const interval in intervals){
      const counter = Math.floor(seconds/ intervals[interval]);

      if(counter> 0){
        return `${counter} ${interval}${counter>1 ? 's' :''} ago`
      }

    }
    return value.toString();
  }

}
