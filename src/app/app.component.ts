import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}
  navList = ["Home","About","Vehicle Models","Testimonials","Our Team","Contact",]
  navColor = ["#000000","#000000","#000000","#000000","#000000","#000000",]
  navActive:boolean = true

  title = 'green-app';
  navigate(indx:number){
    if(indx == 0){
      this.changeNavColor(indx)
      this.router.navigate(['/main'])
    }else if(indx == 1){
      this.changeNavColor(indx)
      this.router.navigate(['/about'])
    }else if(indx == 2){
      this.changeNavColor(indx)
      this.router.navigate(['/models'])
    }else if(indx == 3){
      this.changeNavColor(indx)
      this.router.navigate(['/testimonials'])
    }else if(indx == 4){
      this.changeNavColor(indx)
      this.router.navigate(['/team'])
    }else if(indx == 5){
      this.changeNavColor(indx)
      this.router.navigate(['/contact'])
    }
    this.navActive = true
  }
  changeNavColor(nmbr:number){
    for (let i = 0; i < this.navColor.length; i++) {
      if(nmbr == i){
        this.navColor[i] = "#ff4d30"
      }else if(nmbr != i){
        this.navColor[i] = "#000000"
      }
    }
  }
  isShowNav(){
    if(this.navActive == false){
       this.navActive = true
    }else{
      this.navActive = false
    }
  }
}
