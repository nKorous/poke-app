import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-poke-dashboard',
  templateUrl: './poke-dashboard.component.html',
  styleUrls: ['./poke-dashboard.component.css']
})
export class PokeDashboardComponent {
  primaryTypeBreakdown: Array<{ type: string, count: number }> = new Array()
  generationBreakdown: Array<{gen: string, count: number}> = new Array()


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTypeBreakdownChartData()
    this.getGenerationBreakdownChartData()
  }

  getTypeBreakdownChartData() {
    this.dataService.getListByPrimaryType().subscribe(data => {
      this.primaryTypeBreakdown = data
    })
  }

  getGenerationBreakdownChartData(){
    this.dataService.getListByGeneration().subscribe(data => {
      this.generationBreakdown = data
    })
  }

  customizeLabel(arg: any){
    return arg.percentText
  }
}
