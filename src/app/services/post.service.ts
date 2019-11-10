import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = environment.url;
  paginaPost = 0;
  constructor(private http: HttpClient) { }
  getPosts(pull: boolean = false) {
    if ( pull ) {
      this.paginaPost = 0;
    }
    this.paginaPost++;
    return this.http.get<RespuestaPosts>(`${ this.url }/post?pagina=${this.paginaPost}`);
  }

}
