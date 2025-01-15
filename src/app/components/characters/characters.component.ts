import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Character,
  CharacterResponse,
  HttpService,
} from '../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters',
  imports: [NgForOf, RouterLink],
  templateUrl: './characters.component.html',
  standalone: true,
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  sub: Subscription | undefined;
  constructor(public http: HttpService) {}

  ngOnInit(): void {
    this.sub = this.http
      .getAllCharacters()
      .subscribe((response: CharacterResponse) => {
        this.characters = response.results;
      });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
