import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  standalone: true,
  selector: 'app-blog-detail',
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent implements OnInit {
  blog?: Blog;
  loading = false;

  constructor(private route: ActivatedRoute, private blogSvc: BlogService) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.loading = true;
    this.blogSvc.getBySlug(slug).subscribe({
      next: b => this.blog = b,
      error: () => this.loading = false,
      complete: () => this.loading = false
    });
  }
}
