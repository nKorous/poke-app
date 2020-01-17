import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) report: DxDataGridComponent
  pokeList: Array<any> = new Array()

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.dataService.getFullPokeList().subscribe(data => {
      this.pokeList = data
    })
  }

  onInitialized(e: any) {
    this.modifyToolbar()
  }

  modifyToolbar() {
    this.report.onToolbarPreparing.subscribe(toolbar => {
      toolbar.toolbarOptions.items.unshift({
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'refresh',
          onClick: () => this.resetGrid()
        }
      })
    })
  }

  resetGrid() {
    this.report.instance.state(null)
    this.onInitialized(null)
  }

}
