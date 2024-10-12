import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CustomDateFormatPipe } from './shared/pipes/custom-date-format.pipe';
import { FilterArrayPipe } from './shared/pipes/filter-array.pipe';
import { TextTruncatePipe } from './shared/pipes/text-truncate.pipe';
import { SinglePostComponent } from './single-post/single-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    SinglePostComponent,
    TextTruncatePipe,
    CustomDateFormatPipe,
    FilterArrayPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CustomPipes';
  testDate = new Date('2024-05-03T15:33:00');
  currentDate = new Date();
  postsNr = 0;
  selectedPosts: number[]=[];


  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  
  selectUnselectPost(id:number){
    const existingPost = this.selectedPosts.indexOf(id);
    if(existingPost>-1){
      this.selectedPosts.splice(existingPost, 1);
    }else{
      this.selectedPosts.push(id);
    }
  }

  posts = [
    {
      id: 1,
      date: new Date('2024-05-01T12:00:00'),
      title: 'My Top 5 Extensions in Visual Studio Code!',
      imageUrl:
        'https://blog.adnanhalilovic.com/wp-content/uploads/2024/01/Top-5-Uncommon-VS-Code-Extensions-750x536.webp',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis dignissimos. Blanditiis libero vitae officiis! Modi suscipit consequuntur nisi voluptatem sint ipsa, quis voluptatum ipsum qui, aliquam provident voluptas ex.',
    },
    {
      id: 2,
      date: new Date('2024-05-01T12:00:00'),
      title: 'Mastering DevTools: Supercharge Your Workflow with Code Snippets!',
      imageUrl:
        'https://blog.adnanhalilovic.com/wp-content/uploads/2023/09/Code-Snippets-for-DevTools2-750x536.png',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis dignissimos. Blanditiis libero vitae officiis! Modi suscipit consequuntur nisi voluptatem sint ipsa, quis voluptatum ipsum qui, aliquam provident voluptas ex.',
    },
    {
      id: 3,
      date: new Date('2024-05-15T12:40:00'),
      title: 'Lazyloading Standalone Components in Angular',
      imageUrl:
        'https://blog.adnanhalilovic.com/wp-content/uploads/2022/09/Standalone-Components-Lazyload-750x536.jpg',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis dignissimos. Blanditiis libero vitae officiis! Modi suscipit consequuntur nisi voluptatem sint ipsa, quis voluptatum ipsum qui, aliquam provident voluptas ex.',
    },
    {
      id: 4,
      date: new Date('2024-07-15T12:40:00'),
      title: 'Quokka.js and Wallaby.js Giveaway',
      imageUrl:
        'https://blog.adnanhalilovic.com/wp-content/uploads/2023/07/Giveaway-Wallaby-Quokka-750x536.webp',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis dignissimos. Blanditiis libero vitae officiis! Modi suscipit consequuntur nisi voluptatem sint ipsa, quis voluptatum ipsum qui, aliquam provident voluptas ex.',
    },
    {
      id: 5,
      date: new Date('2024-07-15T12:40:00'),
      title: 'How to Work on Different Git Branches at the Same Time?',
      imageUrl:
      'https://blog.adnanhalilovic.com/wp-content/uploads/2022/09/Standalone-Components-Lazyload-750x536.jpg',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis dignissimos. Blanditiis libero vitae officiis! Modi suscipit consequuntur nisi voluptatem sint ipsa, quis voluptatum ipsum qui, aliquam provident voluptas ex.',
    },
    {
      id: 6,
      date: new Date('2024-07-15T12:40:00'),
      title: 'How to Work on Different Git Branches at the Same Time?',
      imageUrl:
      'https://blog.adnanhalilovic.com/wp-content/uploads/2024/01/Top-5-Uncommon-VS-Code-Extensions-750x536.webp',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis dignissimos. Blanditiis libero vitae officiis! Modi suscipit consequuntur nisi voluptatem sint ipsa, quis voluptatum ipsum qui, aliquam provident voluptas ex.',
    },
    {
      id: 7,
      date: new Date('2024-07-15T12:40:00'),
      title: 'How to Work on Different Git Branches at the Same Time?',
      imageUrl:
        'https://blog.adnanhalilovic.com/wp-content/uploads/2022/12/Work-on-Multiple-Git-Branches-at-the-Same-Time-750x536.jpg',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis dignissimos. Blanditiis libero vitae officiis! Modi suscipit consequuntur nisi voluptatem sint ipsa, quis voluptatum ipsum qui, aliquam provident voluptas ex.',
    },
    {
      id: 8,
      date: new Date('2024-07-15T12:40:00'),
      title: 'How to Work on Different Git Branches at the Same Time?',
      imageUrl:
      'https://blog.adnanhalilovic.com/wp-content/uploads/2023/09/Code-Snippets-for-DevTools2-750x536.png',
      summary:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis dignissimos. Blanditiis libero vitae officiis! Modi suscipit consequuntur nisi voluptatem sint ipsa, quis voluptatum ipsum qui, aliquam provident voluptas ex.',
    },
  ];

  searchTerm = '';
}
