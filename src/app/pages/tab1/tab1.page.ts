import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { eventMethod } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts  = [];
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.carga();
  }
  siguientes(event) {
    this.carga();
  }
  carga(event?) {
    this.postService.getPosts().subscribe(
      resp => {
        console.log(resp);
        this.posts.push(...resp.post);
        if (event) {
            event.target.complete();
        }
        if(resp.post.length === 0) {
          event.target.disabled = true;
        }
      }
    );
  }
}
