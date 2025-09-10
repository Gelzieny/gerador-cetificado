import { booleanAttribute, Component, signal } from '@angular/core';


import { Navbar } from './_components/navbar/navbar';
import { BaseUi } from "./_components/base-ui/base-ui";
import { Certificados } from "./pages/certificados/certificados";
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { ItemCertificado } from "./_components/item-certificado/item-certificado";

@Component({
  selector: 'app-root',
  imports: [Navbar, BaseUi, Certificados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-cetificado');
  exibirNavbar: boolean = true
}
