import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/shared/service/live.service';
import { Live } from 'src/app/shared/model/live.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import * as moment from 'moment';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesNext: Live[] = [];
  livesPrevious: Live[] = [];
  livesNextReady: boolean = false;
  livesPreviousReady: boolean = false;
  url: string = '';
  urlSafe!: SafeResourceUrl;
  data: any;
  next: boolean = false
  previous: boolean = false


  // data: any[] = []


  constructor(
    public liveService: LiveService,
    private rest: LiveService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
   this.getLives();
  }

  getLives(){
    // this.rest.getLivesWithFlag('next').subscribe(data => {
    //   this.livesNext = data.content;
    //   this.livesNext.forEach(live => {
    //     live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
    //   });
    //   this.livesNextReady = true;
    // });

    // this.rest.getLivesWithFlag('previous').subscribe(data => {
    //   this.livesPrevious = data.content;
    //   this.livesPrevious.forEach(live => {
    //     live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
    //   });
    //   this.livesPreviousReady = true;
    // });
    this.liveService.getLivesWithFlag('lives').subscribe((data:any) => {
      this.livesPrevious = data
       console.log(this.livesPrevious)   
       this.livesPrevious.forEach(live=>{
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
       })
       this.previous = true
    })


     this.liveService.getLivesWithFlag('lives').subscribe((data:any) => {
      this.livesNext = data
       console.log(this.livesNext)   
       this.livesNext.forEach(live=>{
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
       })
       this.next = true
    })

    }

      // this.livesPrevious.forEach(live => {
      //   live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      // });
      // this.livesPreviousReady = true;

    //  })
  }


