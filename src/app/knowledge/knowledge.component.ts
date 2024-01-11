import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent {

  skills: any[] = [
    {
      "image": "../../assets/HTML.png",
      "name": "HTML"
    },
    {
      "image": "../../assets/css.png",
      "name": "CSS"
    },
    {
      "image": "../../assets/JavaScript-logo.png",
      "name": "JavaScript"
    },
    {
      "image": "../../assets/typescript.png",
      "name": "TypeScript"
    }
  ]


}
