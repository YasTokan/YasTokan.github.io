import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { map, delay, withLatestFrom } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

marker('META.HOME.TITLE');
marker('META.HOME.DESCRIPTION');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // For Progressbar
  loaders = this.loader.progress$.pipe(
    delay(1000),
    withLatestFrom(this.loader.progress$),
    map((v) => v[1])
  );

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private loader: LoadingBarService,
    private translate: TranslateService,
    private metaService: Meta
  ) {
    if (isPlatformBrowser(this.platformId)) {
      translate.setDefaultLang('en');
      translate.addLangs(['en', 'fr', 'ar']);
      this.syncTR();
    }
  }
  syncTR() {
    this.translate.onLangChange.subscribe((lang) => {
      this.metaService.addTags([
        { name: 'title', content: this.translate.instant('META.HOME.TITLE') },
        { property: 'og:title', content: this.translate.instant('META.HOME.TITLE') },

        { name: 'description', content: this.translate.instant('META.HOME.DESCRIPTION') },
        { property: 'og:description', content: this.translate.instant('META.HOME.DESCRIPTION') },

        { name: 'author', content: 'IKAR Co' },
        { property: 'og:author', content: 'IKAR Co' },

        { name: 'keywords', content: 'Real Estates , UAE, عقارات الإمارات, عقار' },

        { property: 'ogTitle', content: this.translate.instant('META.HOME.TITLE') },
        { property: 'og:image', content: 'https://ikar.lahloob.org/assets/images/slider/123/3.webp' },
        { property: 'og: site_name', content: this.translate.instant('META.HOME.TITLE') },
        { property: 'og: description', content: this.translate.instant('META.HOME.DESCRIPTION') },

        { property: 'twitter:title', content: this.translate.instant('META.HOME.TITLE') },
        { property: 'twitter:description', content: this.translate.instant('META.HOME.DESCRIPTION') },
        { property: 'twitter:image', content: this.translate.instant('META.HOME.DESCRIPTION') },

        { property: 'fb:title', content: this.translate.instant('META.HOME.TITLE') },
        { property: 'fb:description', content: this.translate.instant('META.HOME.DESCRIPTION') },
        { property: 'fb:image', content: 'https://ikar.lahloob.org/assets/images/slider/123/3.webp' },
      ]);
    });
  }
}
