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
  habilitado = false;

  constructor(private postService: PostService) {}
  ngOnInit() {
    this.siguientes();
  }
  siguientes( event? , pull: boolean = false ) {
    this.postService.getPosts( pull ).subscribe(
      resp => {
        console.log(resp);
        const temp = this.posts;
        temp.push(...resp.post);
        this.posts = temp;
        if (event) {
            event.target.complete();
            if ( resp.post.length === 0) {
              event.target.disabled = true;
              this.habilitado = true;
              console.log('refresh habilitado');
            }
        }
      }
    );
  }
  doRefresh( event ) {
    this.siguientes(event, true);
  }
}
