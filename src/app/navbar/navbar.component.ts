import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  dropHome=false;
  dropPages=false;
  dropInsurances=false;
  dropBlog=false;

  closeMenu(){
    this.isMenuOpen = false;
    console.log(this.isMenuOpen);
    console.log("close")
  }
  openMenu() {
    this.isMenuOpen = true;
  
    console.log(this.isMenuOpen);
    console.log("oepn")
  }
  toggleHome() {
    this.dropHome = !this.dropHome;
  }
  toggleBlog(){
    this.dropBlog = !this.dropBlog;
  }
  toggleInsurances(){
    this.dropInsurances=!this.dropInsurances
  }
  togglePages(){
    this.dropPages=!this.dropPages
  }
}
