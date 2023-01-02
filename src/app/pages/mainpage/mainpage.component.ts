import { Component } from '@angular/core';
import { python } from "../../../docs/python";
import { js } from "../../../docs/js";
import { angular } from "../../../docs/angular";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.sass']
})
export class MainpageComponent {
  public technologiesObj: any = {
    PYTHON: python,
    JS: js,
    ANGULAR: angular,
  }
  public technologies: string[] = ['JS', 'PYTHON', 'ANGULAR'];
  public currentFile: string = '<div class="chapter">Base Page</div>';

  public changeFile(technology: any): void {
    this.currentFile = this.technologiesObj[technology];
  }
}
