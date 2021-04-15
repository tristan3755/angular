import { Component, OnInit, Input } from '@angular/core';
import { guitares } from '../guitares/guitare';


@Component({
  selector: 'app-guitare-details',
  templateUrl: './guitare-details.component.html',
  styleUrls: ['./guitare-details.component.css']
})
export class GuitareDetailsComponent implements OnInit {
  @Input() guitare?: guitares;

  constructor() { }

  ngOnInit(): void {
  }

}
