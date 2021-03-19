import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url = environment.urlEndPoint;
  constructor(private httpClient: HttpClient) {}

  getAllMovies = async (): Promise<Movie[]> => {
    //Lo que va regresar Promise y va llegar un arreglo de películas Movie[]
    return (await this.httpClient
      .get(`${this.url}movies`)
      .toPromise()) as Promise<Movie[]>; //Regreso una promesa, tipo de objeto que se obtiene inmediatamente cuando se hace un llamado asincrono, no hay que esperar hasta que regrese el resultado para tener el objeto de promesa
    //as Promise<Movie[]> para ayudar a saber que va llegar por parte del backend
  };

  getMovieById = async (id: number): Promise<Movie> => {
    return (await this.httpClient
      .get(`${this.url}movies/${id}`)
      .toPromise()) as Promise<Movie>;
  };

  deleteMovieById = async (id: number | undefined): Promise<Object> => {
    return (await this.httpClient
      .delete(`${this.url}movies/${id}`)
      .toPromise()) as Promise<Object>;
  };

  createMovie = async (movie: Movie): Promise<Object> => {
    return await this.httpClient.post(`${this.url}movies`, movie).toPromise();
  };

  updateMovie = async (
    id: string | number | null,
    movie: Movie
  ): Promise<Object> => {
    return await this.httpClient
      .put(`${this.url}movies/${id}`, movie)
      .toPromise();
  };
}
