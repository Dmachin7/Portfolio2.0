import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

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
    },
    {
      "image": "../../assets/python.png",
      "name": "Python"
    },
    {
      "image": "../../assets/angular.png",
      "name": "Angular"
    },
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
    },
    {
      "image": "../../assets/python.png",
      "name": "Python"
    },
    {
      "image": "../../assets/angular.png",
      "name": "Angular"
    }
    // {
    //   "image": "../../assets/react.png",
    //   "name": "React"
    // }
  ]

  tools: any[] = [
    {
      "image": "../../assets/AWS.png",
      "name": "AWS"
    },
    {
      "image": "../../assets/TailwindCSS.png",
      "name": "TailwindCSS"
    },
    {
      "image": "../../assets/VSCODE.svg",
      "name": "VS Code"
    },
    {
      "image": "../../assets/Postman.svg",
      "name": "Postman"
    },
    {
      "image": "../../assets/AWS.png",
      "name": "AWS"
    },
    {
      "image": "../../assets/TailwindCSS.png",
      "name": "TailwindCSS"
    },
    {
      "image": "../../assets/VSCODE.svg",
      "name": "VS Code"
    },
    {
      "image": "../../assets/Postman.svg",
      "name": "Postman"
    }
  ]

  backend: any[] = [
      {
        "image": "../../assets/Django.png",
        "name": "Django"
      },
      {
        "image": "../../assets/PostgreSQL.png",
        "name": "PostgreSQL"
      },
      {
        "image": "../../assets/NodeJS.png",
        "name": "NodeJS"
      },
      {
        "image": "../../assets/NPM.png",
        "name": "NPM"
      },
      {
        "image": "../../assets/MongoDB.svg",
        "name": "MongoDB"
      },
      {
        "image": "../../assets/Django.png",
        "name": "Django"
      },
      {
        "image": "../../assets/PostgreSQL.png",
        "name": "PostgreSQL"
      },
      {
        "image": "../../assets/NodeJS.png",
        "name": "NodeJS"
      },
      {
        "image": "../../assets/NPM.png",
        "name": "NPM"
      },
      {
        "image": "../../assets/MongoDB.svg",
        "name": "MongoDB"
      }

    
  ]

  status = "play"
  status2 = "play"
  status3 = "play"

  constructor () {}

  clicked() {
    switch (this.status) {
      case "play":
        this.status = "paused"
        break
      case "paused":
        this.status = "play"
        break
    }
  

  }

  clicked2() {
    switch (this.status2) {
      case "play":
        this.status2 = "paused"
        break
      case "paused":
        this.status2 = "play"
        break
    }
  }

  clicked3() {
    switch (this.status3) {
      case "play":
        this.status3 = "paused"
        break
      case "paused":
        this.status3 = "play"
        break
    }
  }


  ngOnInit(): void {
      
  }
  


}
