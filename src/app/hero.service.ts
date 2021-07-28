import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private userData = new BehaviorSubject<string>('keyur');
  cast = this.userData.asObservable(); 

  public bankNameMat = new BehaviorSubject<any>('');
  public personalDetail = new BehaviorSubject<any>('');
  public professionalDetail = new BehaviorSubject<any>('');
  public educationalDetail = new BehaviorSubject<any>('');
  public experianceDetail = new BehaviorSubject<any>('');
  public currentOrganizationDetail = new BehaviorSubject<any>('');

  editUser(newUser){
    this.userData.next(newUser);
  }
  constructor(private httpClient: HttpClient  ) { }

  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  user(data){
    return this.httpClient.post('http://localhost:3000/api/user',data);
  }
  logIn(data){
    return this.httpClient.post('http://localhost:3000/api/user/login',data);
  }
  findAllAtheletes(){
    return this.httpClient.get('http://localhost:3000/api/findAllAtheletes');
  }
  update_users(userData){
    return this.httpClient.patch(`http://localhost:3000/api/update_users/${userData.id}`,userData);
  }
  loggedIn(){
    !localStorage.getItem('token')
    return !!localStorage.getItem('token')
  }
  findAllSports(){
    return this.httpClient.get('http://localhost:3000/api/findAllSports');
  }
  addSport(data){
    return this.httpClient.post('http://localhost:3000/api/addSport',data);
  }
  findsport(id){
    return this.httpClient.get(`http://localhost:3000/api/findsport/${id}`);
  }
  sports_update(sportsData){
    return this.httpClient.put(`http://localhost:3000/api/sports_update/${sportsData.id}`,sportsData);
  }
  getAllFAQs(){
    return this.httpClient.get(`http://localhost:3000/api/getAllFAQs`);
  }
  updateFAQPageDetails(faqData){
    return this.httpClient.patch(`http://localhost:3000/api/updateFAQPageDetails/${faqData.id}`,faqData);
  }
}