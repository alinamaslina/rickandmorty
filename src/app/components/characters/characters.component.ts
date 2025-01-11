import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.component.html',
  standalone: true,
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit, OnDestroy { 
  constructor(public http: HttpService) {} 

  ngOnInit(): void {
    this.http.getAllCharacters().subscribe(
      Response: Object => {
        
      }
    )
  }
  ngOnDestroy(): void {
    
  }

}