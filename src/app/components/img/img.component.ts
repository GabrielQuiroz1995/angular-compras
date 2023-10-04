import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() img: String = "";
  @Output() loaded = new EventEmitter<String>();

  imgDefault = "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg";

  imgError(){

    this.img = this.imgDefault;

  }
  imgLoad(){
    console.log("Loaded hijo")
    this.loaded.emit(this.img);
  }



  constructor() {
    console.log('contructor','imgValue =>',this.img);
  }

  ngOnInit(): void {
  }

}
