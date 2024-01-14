import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: any[] = [
    {
      "image": "../../assets/fitfolio.jpg",
      "name": "FitFolio",
      "description": "FitFolio is a FullStack application used for searching workouts in an extensive library",
      "icon": `../../assets/fitfolio.png`,
      "livesite": "https://fit-folio.netlify.app/",
      "github": "https://github.com/Dmachin7/Fitfolio-Frontend"
    },
    {
      "image": "../../assets/adventurelist.jpg",
      "name": "AdventureList",
      "description": "AdventureList is a FullStack application used for keeping track of Adventures",
      "icon": `../../assets/hikerman.png`,
      "livesite": "https://adventurelist-01b3f64537ec.herokuapp.com/",
      "github": "https://github.com/Dmachin7/AdventureList"
    },
    {
      "image": "../../assets/pavers.jpg",
      "name": "We Do Pavers",
      "description": "We Do Pavers is a Frontend application used for a local business to market their services",
      "icon": `../../assets/paver-icon.png`,
      "livesite": "https://wedopavers.today/",
      "github": "https://github.com/Dmachin7/We_Do_Pavers"
    },
    {
      "image": "../../assets/foodle.jpg",
      "name": "Foodle",
      "description": "Foodle is a application used for searching a database of recipes",
      "icon": `../../assets/restaurant.png`,
      "livesite": "https://fooodle.netlify.app/",
      "github": "https://github.com/Dmachin7/Foodle"
    }
  ]

}
