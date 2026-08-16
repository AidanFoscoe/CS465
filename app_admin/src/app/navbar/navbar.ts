import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../services/authentication';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private cdr: ChangeDetectorRef
  ) { 
    //console.log('NAVBAR CONSTRUCTOR RUNNING');
  }
  
  ngOnInit() {
  setTimeout(() => {
    this.cdr.detectChanges();
  });
}

  public isLoggedIn(): boolean {
    const result = this.authenticationService.isLoggedIn();
    console.log('NAVBAR RESULT:', result);
    console.log('NAVBAR TOKEN:', this.authenticationService.getToken());
    return result;
}

  public onLogout(): void {
    return this.authenticationService.logout();
  }
}
