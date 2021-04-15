import { Injectable } from '@angular/core';
import {mesGuitares} from './tableau-guitares';
import {guitares} from './guitares/guitare';

@Injectable({
  providedIn: 'root'
})
export class GuitaresService {

  constructor() { }

  tableauGuitares():<guitares[]>{
    return of(this.mesGuitares)
  }

}
