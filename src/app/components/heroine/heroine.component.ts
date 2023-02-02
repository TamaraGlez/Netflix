import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroine',
  templateUrl: './heroine.component.html',
  styleUrls: ['./heroine.component.scss']
})

export class HeroineComponent implements OnInit {

  heroineFilms = [

    {

    title: "La casa de papel",
    image: "../../assets/Top10/1-papel.webp",
    position: 1,

    },

    {

    title: "La Reina del Flow",
    image: "../../assets/Top10/2-reina.webp",
    position: 2,

    },

    {

    title: "Titanes",
    image: "../../assets/Top10/3-titanes.webp",
    position: 3

    },

    {

      title: "Lost in Space",
      image: "../../assets/Top10/4-lostinspace.webp",
      position: 4

    },

    {

      title: "Donde caben dos",
      image: "../../assets/Top10/5-dondecaben.webp",
      position: 5

    },




  ]

  constructor() { }
  ngOnInit(): void {

  }

}
