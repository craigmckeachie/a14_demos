import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES } from './mock-movies';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  list(): Observable<Movie[]> {
    return of(MOVIES);
  }

  find(id: number): Observable<Movie> {
    const movie = MOVIES.find((m) => m.id === id);
    return of(movie);
  }
}
