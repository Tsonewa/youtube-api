import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { Observable } from 'rxjs';
 '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

getChannels(channelName: string):Observable<any>{

  const API_KEY = "AIzaSyDh8aeGAt_D_0UT9dCi2QY-hJi1EDbski0";

  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + channelName + "&type=channel&key=" + API_KEY + "&maxResult=5";

  return this.http.get<any>(url);
}
}