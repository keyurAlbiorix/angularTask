import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

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
    console.log("!localStorage.getItem('token')",!localStorage.getItem('token')
    )
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
    console.log("sportsData",sportsData)
    return this.httpClient.put(`http://localhost:3000/api/sports_update/${sportsData.id}`,sportsData);
  }
  getAllFAQs(){
    // console.log("sportsData",sportsData)
    return this.httpClient.get(`http://localhost:3000/api/getAllFAQs`);
  }
  updateFAQPageDetails(faqData){
    console.log("faqData._id",faqData.id)
    return this.httpClient.patch(`http://localhost:3000/api/updateFAQPageDetails/${faqData.id}`,faqData);
  }
}




