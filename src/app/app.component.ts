import { IApp } from './models.interfaz/iapp';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public Terror: IApp [] = [

    {

    title: "Apostol",
    image: "../../assets/Terror/apostol.jpg"

    },

    {

    title: "Calleterror",
    image: "../../assets/Terror/calleterror.jpg"

    },

    {

    title: "Infiernoagua",
    image: "../../assets/Terror/infiernoagua.webp"

    },

    {

      title: "Insidious2",
      image: "../../assets/Terror/insidious2.webp"

    },

    {

      title: "Life",
      image: "../../assets/Terror/life.webp"

    },

    {

      title: "Malasana",
      image: "../../assets/Terror/malasana.webp"

    },

    {

      title: "Múltiple",
      image: "../../assets/Terror/multiple.webp"

    },

    {

      title: "Reflejos",
      image: "../../assets/Terror/reflejos.webp"

    },


  ]

  public Anime: IApp [] = [

    {

    title: "Ajin",
    image: "../../assets/Anime/ajin.jpg"

    },

    {

    title: "Castilloambulante",
    image: "../../assets/Anime/castilloambulante.webp"

    },

    {

    title: "chihiro",
    image: "../../assets/Anime/chihiro.webp"

    },

    {

      title: "Evangelion",
      image: "../../assets/Anime/evangelion.webp"

    },

    {

      title: "Gitsarise",
      image: "../../assets/Anime/gitsarise.webp"

    },

    {

      title: "Gundam",
      image: "../../assets/Anime/gundam.webp"

    },

    {

      title: "La Puta",
      image: "../../assets/Anime/laputa.webp"

    },

    {

      title: "Mononoke",
      image: "../../assets/Anime/mononoke.webp"

    },


  ]

  public Accion: IApp [] = [

    {

    title: "Ejercitomuertos",
    image: "../../assets/Accion/ejercitomuertos.jpg"

    },

    {

    title: "Elprotector",
    image: "../../assets/Accion/elprotector.webp"

    },

    {

    title: "Equalizer2",
    image: "../../assets/Accion/equalizer2.webp"

    },

    {

      title: "Heat",
      image: "../../assets/Accion/heat.webp"

    },

    {

      title: "Kill Bill 2",
      image: "../../assets/Accion/killbill2.webp"

    },

  ]



}


