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
  public currentFile: string = '<article><div>Base Page</div></article>';

  public changeFile(technology: any): void {
    this.currentFile = this.colorWords(this.technologiesObj[technology]);
  }

  public colorWords(text: string): string {
    // const wordColor = {
    //   class: 'FF8E00',
    //   def: '7109AA',
    //   return: 'FF4100',
    //   print: '0A67A3',
    //   pass: '0A67A3',
    //   import: '00B25C',
    //   from: '00B25C',
    // }
    return  text.replace(/class/g, '<font color="#FF8E00">class</font>')
      .replace(/def/g, '<font color="#7109AA">def</font>')
      .replace(/return/g, '<font color="#FF4100">return</font>')
      .replace(/print/g, '<font color="#0A67A3">print</font>')
      .replace(/pass/g, '<font color="#0A67A3">pass</font>')
      .replace(/import/g, '<font color="#00B25C">import</font>')
      .replace(/from/g, '<font color="#00B25C">from</font>');
  }
}
