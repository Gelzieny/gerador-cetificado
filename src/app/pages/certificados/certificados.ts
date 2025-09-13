import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ICertificado } from '../../interfaces/certificado';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { CertificadoService } from '../../_services/certificado.service';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit{
  certificados: ICertificado[] = [];

  constructor(private CertificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.CertificadoService.certificados;
    console.log(this.certificados);
  }
}
