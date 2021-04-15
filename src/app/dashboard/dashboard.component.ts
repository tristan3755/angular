import { Component, OnInit } from '@angular/core';
import {GuitaresService} from '../guitares.service';
import {guitares} from '../guitares/guitare';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  guitares:guitares[]=[]

  constructor(private guitareServices:GuitaresService) { }

  ngOnInit(): void {
    this.getGuitare()
  }

  getGuitare():void{
    this.guitareServices.tableauGuitares().subscribe( mesGuitares=> this.guitares = mesGuitares.slice(1,3));
    
  }

}
