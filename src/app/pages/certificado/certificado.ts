import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { CertificadoService } from '../../_services/certificado.service';
import { ICertificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit {
  id: string | null = null;
  certificado: ICertificado | undefined;

  constructor(
    private CertificadoService: CertificadoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificado = this.CertificadoService.certificados.find(
        (item) => item.id == this.id
      );
      console.log(this.certificado);
    });
  }
}
