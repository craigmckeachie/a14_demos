import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie-detail',
  template: ` <div *ngIf="movie">
    <h5>{{ movie.name }}</h5>
    <p>{{ movie.description }}</p>
  </div>`,
  styles: [],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.movieService.find(id).subscribe((m) => (this.movie = m));
    });
  }
}
