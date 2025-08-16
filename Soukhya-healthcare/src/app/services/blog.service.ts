import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private http: HttpClient) {}

  list(page = 1): Observable<{ data: Blog[]; total: number; }> {
    return this.http.get<{ data: Blog[]; total: number; }>(`/api/blogs?page=${page}`);
  }

  getBySlug(slug: string): Observable<Blog> {
    return this.http.get<Blog>(`/api/blogs/${slug}`);
  }
}
