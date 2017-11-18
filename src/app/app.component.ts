import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Контакти';
  visible = false;

  ngOnInit() {
    console.log('init');
  }

  openNav() {
    document.getElementById('mySidenav').style.marginLeft = '0';
    document.getElementById('main').style.marginLeft = '200px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    document.getElementById('toggler').classList.toggle('change');
  }

  closeNav() {
    document.getElementById('mySidenav').style.marginLeft = '-200px';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
    document.getElementById('toggler').classList.toggle('change');
  }

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.openNav();
    } else {
      this.closeNav();
    }
  }

}
