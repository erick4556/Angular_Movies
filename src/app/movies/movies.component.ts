import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies$: Promise<Movie[]> | undefined; //$ para variables que guardan algo asincrono para saber el tipo de valor que guardan
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  deleteMovie = (id: number | undefined) => {
    if (confirm('Está seguro de querer eliminar esta película?')) {
      this.moviesService
        .deleteMovieById(id)
        .then((resp) => {
          alert('Eliminado correctamente');
        })
        .catch((err) => {
          console.log(err);
          alert('Ocurrió un error');
        })
        .finally(() => this.getMovies());
    }
  };

  getMovies = () => {
    this.movies$ = this.moviesService.getAllMovies();
    console.log(this.movies$);
  };
}
