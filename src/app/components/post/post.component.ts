import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/interfaces';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post = {};
  url = environment.url;
  img1 = '/assets/perro-1.jpg';
  img2 = '/assets/perro-1.jpg';
  img3 = '/assets/perro-1.jpg';
  constructor() { }

  ngOnInit() {}

}
