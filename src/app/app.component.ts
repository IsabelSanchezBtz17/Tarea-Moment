import { Component, OnInit, Pipe } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tarea-moment';
 
  public fistTime : string = '';
  public hour: string ='';
  public numero : number = 0;
  public lapso : string = '';

  constructor(){
      this.fistTime= moment().format('HH: mm : ss');
 }

 ngOnInit(): void {
   setInterval(()=>{
    this.hour = moment().format('HH: mm : ss');
   }, 1000);

   this.convertir();
 }
     convertir(){
      let boton = document.getElementById('btn');
      boton?.addEventListener("click", ()=>{
        let grado: HTMLInputElement= document.getElementById('numero') as HTMLInputElement ;
        let escalaInput: HTMLInputElement= document.getElementById('lapso') as HTMLInputElement ;
        this.numero=Number(grado.value);
        this.lapso= escalaInput.value;
      })
     } 

}
