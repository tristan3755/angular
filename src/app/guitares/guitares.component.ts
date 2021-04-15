import { Component, OnInit } from '@angular/core';
import { guitares} from './guitare';
/*import { mesGuitares } from '../tableau-guitares';*/  
import {GuitaresService} from '../guitares.service';

@Component({
  selector: 'app-guitares',
  templateUrl: './guitares.component.html',
  styleUrls: ['./guitares.component.css']
})
export class GuitaresComponent implements OnInit {

  guitare:guitares[]
  selectedInstru?: guitares;

  constructor(private serviceGuitares:GuitaresService) {
    this.guitare=[]
   }

  ngOnInit(): void {
    this.guitare=this.serviceGuitares.tableauGuitares()
  }

  getGuitare(){
    return this.guitare
  }
  selection(guitare:guitares){
    this.selectedInstru=guitare
  }
}
