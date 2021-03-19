import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movie$: Promise<Movie> | undefined;
  constructor(
    private moviesSerivce: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie = async () => {
    let routeParamId:
      | string
      | number
      | null = this.activatedRoute.snapshot!.paramMap.get('id'); //Ese routeParamId puede ser string, number o null. ! para que no reviente cuando venga null
    if (routeParamId) {
      routeParamId = parseInt(routeParamId);
      this.movie$ = this.moviesSerivce.getMovieById(routeParamId);
    }
  };
}
