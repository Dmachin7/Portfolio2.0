import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: any[] = [
    {
      "image": "../../assets/fitfolio.png",
      "name": "FitFolio",
      "description": "FitFolio is a FullStack application used for searching workouts in an extensive library"
    },
    {
      "image": "../../assets/adventure.png",
      "name": "AdventureList"
    },
    {
      "image": "../../assets/wedopavers.png",
      "name": "We Do Pavers"
    },
    {
      "image": "../../assets/Foodle.png",
      "name": "Foodle"
    }
  ]

}
