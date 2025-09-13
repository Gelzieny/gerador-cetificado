import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { SecondaryButton } from "../secondary-button/secondary-button";

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  id: string = '6';

  constructor(private router: Router) { }

  redirecionaCertificado() {
    this.router.navigate(['/certificados', 2]);
  }
}
