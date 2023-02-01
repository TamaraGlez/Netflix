import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.component.html',
  styleUrls: ['./comedia.component.scss']
})
export class ComediaComponent implements OnInit {

  comedyFilms = [

    {

    title: "Casi300",
    image: "../../assets/Comedia/casi300.webp"

    },

    {

    title: "Cazafantasmas",
    image: "../../assets/Comedia/cazafantasmas.webp"

    },

    {

    title: "Dictador",
    image: "../../assets/Comedia/dictador.webp"

    },

    {

      title: "Erasehollywood",
      image: "../../assets/Comedia/erasehollywood.webp"

    },

    {

      title: "Family Guy",
      image: "../../assets/Comedia/familyguy.webp"

    },

    {

      title: "La Terminal",
      image: "../../assets/Comedia/laterminal.webp"

    },

    {

      title: "Padresella",
      image: "../../assets/Comedia/padresella.webp"

    },

    {

      title: "Regreso Futuro",
      image: "../../assets/Comedia/regresofuturo.webp"

    },

    {

      title: "Rick and Morty",
      image: "../../assets/Comedia/rickandmorty.webp"

    },

    {

      title: "Scary Movie 3",
      image: "../../assets/Comedia/scarymovie3.webp"

    },

    {

      title: "Ted 2",
      image: "../../assets/Comedia/ted2.webp"

    },





  ]

  constructor() { }
  ngOnInit(): void {

  }

}
