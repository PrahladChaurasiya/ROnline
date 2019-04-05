import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript('http://thecodeplayer.com/uploads/js/jquery-1.9.1.min.js');
    this.loadScript('http://thecodeplayer.com/uploads/js/jquery.easing.min.js');
    this.loadScript('../assets/js/form2.js');
    
    

  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}