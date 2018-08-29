import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username = 'pradyotprksh';
  private client_id = '9f374d03b7557accd530';
  private client_secret= '5d0581500959ed1254cd7041190ec864a8be3ae3';

  constructor(private _http: Http){
    console.log('Github Service Init...');
  }

  getUser(){
    return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  updateUsername(username:string){
    this.username = username;
  }
}
