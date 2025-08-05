import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor( private router: Router) {}
  navigatetohome() {
    this.router.navigate(['/home']);
  }
  navigatetocontact() {
    this.router.navigate(['/contact']);
  }
  navigatetoservices() {
    this.router.navigate(['/services']);
  }
  navigatetoproduct() {
    this.router.navigate(['/product']);
  }
}
