import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  templateUrl: './mostrar-email.component.html',
  styleUrls: ['./mostrar-email.component.sass']
})
export class MostrarEmailComponent implements OnInit, DoCheck {
  title = 'Mostrar Email';
  emailContacto: string;

  constructor() { }

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck () {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail () {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
