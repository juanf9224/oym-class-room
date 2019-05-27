import {Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {skip, takeUntil} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs';

@Directive({
  selector: '[appIsAuthenticated]'
})
export class IsAuthenticatedDirective implements OnInit, OnDestroy {
  unsubscribeServices$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.authService.subscribeToAuth()
      .pipe(takeUntil(this.unsubscribeServices$))
      .subscribe(res => {
          console.log('shouldRender');
          this.shouldRender();
        },
        error => console.error('Could not subscribe to authentication state: ', error));
    this.shouldRender();
  }

  shouldRender() {
    console.log('klk');
    if (this.authService.isAuthenticated()) {
      console.log('should appear directive');
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.unsubscribeServices$.next(true);
    this.unsubscribeServices$.complete();
  }
}
