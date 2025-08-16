import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  standalone: true,
  selector: 'app-blog-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  total = 0;
  page = 1;
  loading = false;

  constructor(private blogSvc: BlogService) {}

  ngOnInit() { this.load(); }

  load(page: number = 1) {
    this.loading = true;
    this.blogSvc.list(page).subscribe({
      next: res => { this.blogs = res.data; this.total = res.total; this.page = page; },
      error: () => { this.loading = false; },
      complete: () => { this.loading = false; }
    });
  }
}
