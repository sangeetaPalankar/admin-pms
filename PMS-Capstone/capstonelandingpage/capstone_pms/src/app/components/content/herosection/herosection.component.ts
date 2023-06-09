import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.scss'],
})
export class HerosectionComponent {
  profileJson: string = 'none';
  ShowRole = false;

  constructor(public auth: AuthService) {}
  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }

  getRole() {
    this.ShowRole = !this.ShowRole;
  }
}
