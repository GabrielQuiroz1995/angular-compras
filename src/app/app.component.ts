import { Component } from '@angular/core';
import { Tarea } from './tarea.model';
import {Product} from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParents = '';

  onLoad(img:String){
      console.log("Log desde el Padre: "+img)
  }

}
