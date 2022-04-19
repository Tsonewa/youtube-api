import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  channels:any;

  @ViewChild('channelName')
  channelName!: ElementRef;

  constructor(private youtubeService: YoutubeService){}

  ngOnInit(){
  }
  
  onGetChannelName(){
   const channelName = this.channelName.nativeElement.value;
  
   this.youtubeService.getChannels(channelName).subscribe((data)=> {
    console.log(data);
    this.channels = data.items;
  });
  }
}
