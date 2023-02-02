import { IApp } from './../../models.interfaz/iapp';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})



export class FilmsComponent {

//como importar iApp en vez de un solo elementos del mismo
@Input () public films!: IApp []

}
