import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { threadId } from 'worker_threads';

@Component({
  selector: 'appdashboard-widget-home',
  templateUrl: './widget-home.component.html',
  styleUrls: ['./widget-home.component.scss']
})
export class WidgetHomeComponent implements OnInit, OnChanges {
  colorBck: string;
  g: any
  public userProfileImageurl: string;
  @Input() primaryColorGradiend: string;
  @Input() LOGO_IS_ON: boolean;
  @Input() hasOwnLogo: boolean;
  @Input() logoUrl: string;
  @Input() secondaryColor: string;
  @Input() welcomeTitle: string;
  @Input() welcomeMsg: string;
  @Input() primaryColorBorder: string;
  @Input() company_name: string;
  @Input() primaryColor: string;
  @Input() selected_translation: any;
  @Input() company_site_url: any;
  @Input() newInnerWidth: any;
  @Input() hasSelectedLeftAlignment: boolean;
  @Input() hasSelectedRightAlignment: boolean;
  @Input() C21_BODY_HOME: boolean;
  @Input() waitingTimeNotFoundMsg: string;
  @Input() waitingTimeFoundMsg: string;
  @Input() currentUserId: string;
  @Input() UPLOAD_ENGINE_IS_FIREBASE: boolean;
  @Input() imageUrl: string;
  @Input() newConversation: string;
  @Input() noConversation: string;
  @Input() HAS_SELECT_DYMANIC_REPLY_TIME_MSG: boolean;
  @Input() HAS_SELECT_STATIC_REPLY_TIME_MSG: boolean;
  @Input() DISPLAY_LAUNCER_BUTTON: boolean;
  @Input() footerBrand: string;

  @Input() prjct_profile_type: string
  @Input() subscription_is_active: boolean;
	@Input() prjct_trial_expired: boolean;

  public footerImageUrl: string
  public footerImageHref: string
  public footerImageWidth: string
  public footerPoweredByString: string

  public defaultFooter = '<a tabindex="-1" target="_blank" href="http://www.tiledesk.com/"><span>POWERED BY</span> <img src="https://support-pre.tiledesk.com/dashboard/assets/img/logos/tiledesk-logo.svg"/></a>'

  constructor() { }

  ngOnInit() {
    this.colorBck = '#000000';
    // card-header-left
    // console.log('WIDGET HOME COMPONENT primaryColorGradiend', this.primaryColorGradiend)

    if (this.UPLOAD_ENGINE_IS_FIREBASE === true) {
      this.userProfileImageurl = 'https://firebasestorage.googleapis.com/v0/b/' + this.imageUrl + '/o/profiles%2F' + this.currentUserId + '%2Fphoto.jpg?alt=media';
    } else {
      this.userProfileImageurl = this.imageUrl + 'images?path=uploads%2Fusers%2F' + this.currentUserId + '%2Fimages%2Fthumbnails_200_200-photo.jpg';
    }
  }

  ngOnChanges() {
    // console.log('footerBrand  ', this.footerBrand)
    // console.log('prjct_profile_type  ', this.prjct_profile_type)
    // console.log('subscription_is_active  ', this.subscription_is_active)
    // console.log('prjct_trial_expired  ', this.prjct_trial_expired)
    
    // if (this.footerBrand) {

      // ------------------------------------------------------
      // No more uses replaced wiyj innerHTML in the tempalte
      // ------------------------------------------------------
    //   var elem = document.createElement("div");
    //   elem.innerHTML = this.footerBrand;
    //   let images = null
    //   if (elem.getElementsByTagName("img")) {
    //     images = elem.getElementsByTagName("img");
    //     // console.log('img', images)
    //     if (images) {
    //       let imageWidth = images[0]['width'];
    //       // console.log('img imageWidth', imageWidth)
    //       this.footerImageWidth = imageWidth


    //     }
    //   } else if (elem.getElementsByTagName("image")) {
    //     images = elem.getElementsByTagName("image");
    //     if (images) {
    //       // console.log('image', images)
    //       let imageWidth = images[0]['width'];
    //       this.footerImageWidth = imageWidth
    //       // console.log('image imageWidth', imageWidth)

    //     }
    //   }
    //   for (var i = 0; i < images.length; i++) {
    //     // console.log(images[i].src);
    //     this.footerImageUrl = images[i].src
    //   }

    //   let regexHref = /href="([^\'\"]+)/g
    //   var href = regexHref.exec(this.footerBrand);
    //   // console.log('href ', href[1])
    //   this.footerImageHref = href[1]


    //   this.footerPoweredByString = this.footerBrand.split('<span>').pop().split('</span>')[0];
    //   console.log('footerPoweredByString ', this.footerPoweredByString)

    //   let regexSpan = /<\s*span[^>]*>(.*?)<\s*\/\s*span>/g
    //   let spanValue = regexSpan.exec(this.footerBrand);
    //   console.log('spanValue ', spanValue)
    // }


  }

}
