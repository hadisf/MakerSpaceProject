import { Component } from '@angular/core';

@Component({
  selector: 'app-operating-team',
  templateUrl: './operating-team.component.html',
  styleUrls: ['./operating-team.component.css'],
})
export class OperatingTeamComponent {
  teamMembers: any[] = [
    {
      name: 'Enis Qafëleshi',
      position: 'CEO & Managing Partner',
      photo: 'assets/img/team-member-1.png',
    },
    {
      name: 'Enis Qafëleshi',
      position: 'CEO & Managing Partner',
      photo: 'assets/img/team-member-1.png',
    },
    {
      name: 'Enis Qafëleshi',
      position: 'CEO & Managing Partner',
      photo: 'assets/img/team-member-1.png',
    },
  ];
}
