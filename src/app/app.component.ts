import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Car Design';
  public opened = false;
  mediaObserver$: any;

  constructor(public media: MediaObserver) {}
  ngOnInit(): void {
    this.mediaObserver$ = combineLatest([this.media.asObservable()])
      .pipe(
        tap(([mediaValue]) => {
          if (mediaValue[0].mqAlias === 'xs') {
            this.opened = false;
          } else {
            this.opened = true;
          }
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.mediaObserver$.unsubscribe();
  }
}
