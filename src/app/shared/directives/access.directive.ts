import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthorizationLocalStorageService } from '../services/authorization-local-storage.service';

@Directive({
  selector: '[appAccess]'
})
export class AccessDirective {
  public token: string;

  @Input()
  public set appAccess(arg: string) {
    this.authorizationLocalStorageService.getAuthorizationToken(arg) ?
      this.viewContainerRef.createEmbeddedView(this.templateRef)
      : this.viewContainerRef.clear();
  }

  public constructor(
    private authorizationLocalStorageService: AuthorizationLocalStorageService,
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef) {
  }

}
