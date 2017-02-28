import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private moviename:string;
    
    constructor(private _http:Http){
        console.log('Github Service Ready...');
        this.moviename = 'Deadpool';
    }
    
    getUser(){
        return this._http.get('http://www.omdbapi.com/?t='+this.moviename)
            .map(res => res.json())
    }

    updateUser(moviename:string){
    		this.moviename = moviename;
    }
}