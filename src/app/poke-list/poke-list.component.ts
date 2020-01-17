import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  pokeList: Array<any> = new Array()

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.dataService.getFullPokeList().subscribe(data =>  {
      this.pokeList = data
    })
  }

}
