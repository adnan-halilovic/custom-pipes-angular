import { Component, Input } from '@angular/core';
import { CustomDateFormatPipe } from '../shared/pipes/custom-date-format.pipe';
import { TimeAgoPipe } from '../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [TimeAgoPipe, CustomDateFormatPipe],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() title = '';
  @Input() summary = '';
  @Input() imageUrl = '';
  @Input() date: Date | string = '';
  @Input() updated: Date | string = '';
  @Input() isSelected = false;
}
