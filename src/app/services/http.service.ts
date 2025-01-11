import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Character {}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  API_URL: string = 'https://rickandmortyapi.com/api/character';

  characters: Character[] = [];

  constructor(public http: HttpClient) {}

  getAllCharacters(): any {
    return this.http.get(this.API_URL);
  }
}
