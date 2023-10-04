import { Component, OnInit } from '@angular/core';

import {Product} from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products:Product[]=[
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      imagen: '../assets/descarga.png'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      imagen: '../assets/descarga.png'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      imagen: '../assets/descarga.png'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      imagen: '../assets/descarga.png'
    },
  ];

  ngOnInit(): void {
  }

}
