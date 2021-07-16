import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { HeroService } from './hero.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _authService: HeroService,
              private _router: Router){} 
              canActivate(): boolean{
                 if(this._authService.loggedIn()){
                   return true
                 }
                 else{
                   this._router.navigate(['/login'])
                   return false
                 }
              }
}
