import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  enableEdit: boolean = false
  
  // constructor() { }

  // ngOnInit(): void {
  // }
  // appUser: AppUser;
  // cart$: Observable<ShoppingCart>;

  constructor(public heroService: HeroService, private router: Router) { 
  }

   async ngOnInit() { 

  //   this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  //   this.cart$ = await this.shoppingCartService.getCart();
  if(this.heroService.loggedIn()){
    this. enableEdit= true
  }else{
    this. enableEdit= false
  }
  }
  logOut() {
    // this.auth.logout();
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}