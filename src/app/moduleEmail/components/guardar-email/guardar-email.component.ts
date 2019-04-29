import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.sass']
})
export class GuardarEmailComponent implements OnInit {
  title = 'Guardar Email';
  emailContacto: string;

  constructor() { }

  ngOnInit() {
  }

  guardarEmail () {
    localStorage.setItem('emailContacto', this.emailContacto);
  }
}
