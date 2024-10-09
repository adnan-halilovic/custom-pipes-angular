import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
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
