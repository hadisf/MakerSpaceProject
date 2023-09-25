import { Component } from '@angular/core';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css'],
})
export class AboutTeamComponent {
  selectedCategory: string = 'executive';

  // teamCategories: string[] = [
  //   'Executive Board',
  //   'Operating Team',
  //   'Instructors',
  // ];

  teamMembers: any[] = [
    {
      name: 'Enis Qafëleshi',
      position: 'CEO & Managing Partner',
      photo: 'assets/img/team-member-1.png',
    },
    {
      name: 'Enis Qafëleshi',
      position: 'CEO & Managing Partner',
      photo: 'assets/img/team-member-2.png',
    },
    {
      name: 'Enis Qafëleshi',
      position: 'CEO & Managing Partner',
      photo: 'assets/img/team-member-3.png',
    },
  ];
}
