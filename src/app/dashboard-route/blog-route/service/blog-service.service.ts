import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  baseURL: string = 'http://localhost:4001/api/v1/';
  userBaseURL: string = 'http://localhost:3000/api/v1/'
  constructor(private http: HttpClient) {}

  getBlog(): Observable<any> {
    return this.http.get(this.baseURL + 'blogs');
  }

  getSingleBlog(id: any): Observable<any> {
    return this.http.get(this.baseURL + 'blogs/' + id);
  }

  updateBlog(id: any, data: any): Observable<any> {
    return this.http.put(this.baseURL + 'blogs/' + id, data);
  }

  getComments(id: any): Observable<any> {
    return this.http.get(this.baseURL + 'comments/' + id);
  }

  // http://localhost:4001/api/v1/blogs/tags
  getTags(): Observable<any> {
    return this.http.get(this.baseURL + 'blogs/tags');
  }

  // http://localhost:4001/api/v1/blogs/blogcats
  getCategories(): Observable<any> {
    return this.http.get(this.baseURL + 'blogs/blogcats');
  }

  // http://localhost:4001/api/v1/blogs/blogcats
  getAllRecentPosts(): Observable<any> {
    return this.http.get(this.baseURL + 'blogs/recentposts');
  }

  // http://localhost:4001/api/v1/blogs/blogcats
  LeaveReplyComponent(id: any, data: any): Observable<any> {
    return this.http.put(this.baseURL + 'comments/' + id, data);
  }

  PostComment(reqparams: any) {
    return this.http.post(this.baseURL + 'comments', reqparams);
  }
  // http://localhost:4001/api/v1/
  searchQuery(reqparams: any) {
    return this.http.post(this.baseURL + 'blogs/query', reqparams);
  }

  searchQueryCat(reqparams: any) {
    return this.http.post(this.baseURL + 'blogs/bycat', reqparams);
  }

  searchQueryTag(reqparams: any) {
    return this.http.post(this.baseURL + 'blogs/bytag', reqparams);
  }

  bloguserdata(reqparams: any){
      return this.http.get(`${this.userBaseURL}user/${reqparams}`);
  }

  getalluserdata(){
    return this.http.get(this.userBaseURL + 'user');
}
}
