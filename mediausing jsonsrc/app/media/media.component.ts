import { Component, OnInit } from '@angular/core';
import { media } from '../model/media';
@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
            // media: media[];
             mediainfrom:Array<media>;

  constructor() { 
    this.mediainfrom=[
      new media("google","search engine","goog","google"),
      new media("microsoft","search engine","micro","microsoft"),
      new media("yahoo","search engine","yaho","yahoo")
    ];
  }
   saveMedia(txttitle:HTMLInputElement,txtdescription:HTMLInputElement,txttags:HTMLInputElement,txtfilename:HTMLInputElement):void{
  let medias=new media(txttitle.value,txtdescription.value,txttags.value,txtfilename.value);
      this.mediainfrom.push(medias);
     // reset the form
     txttitle.value = "";
     txtdescription.value = "";
     txttags.value = "";
     txtfilename.value = "";
  }
  
  ngOnInit() {
  }

}
