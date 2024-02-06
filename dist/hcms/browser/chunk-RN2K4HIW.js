import{C as Ye,F as E,I as Ve,t as Be,w as pe,y as He}from"./chunk-CVYJYPYN.js";import{$ as ve,Ad as Oe,Ca as J,Cd as de,Da as r,E as S,Fa as d,Fb as Pe,Fd as je,G,Ga as j,Gb as P,Ha as ee,Ja as te,Jb as ce,Jd as he,Ka as ie,La as ne,Lc as me,M as A,Ma as w,Mc as V,N as K,Na as se,O as F,Pa as Ce,Pb as Ee,Pc as p,Qc as ue,Sa as we,Sc as z,Ud as Le,V as be,Vd as Ne,W as y,Wa as k,Wb as Te,Xa as L,Y as Z,Ya as oe,Z as l,Zc as xe,_ as q,a as T,aa as $,ab as ke,d as v,da as I,db as N,ea as C,f as X,fa as Me,fb as h,fd as Se,gb as ae,hb as B,jb as Re,k as W,kb as H,lb as Y,ma as ye,mb as De,nb as R,ob as D,ub as re,vb as le,vd as Ae,w as x,wa as Ie,x as M,xa as O,zd as Fe}from"./chunk-5OTRJNO2.js";var Je=["mat-menu-item",""];function et(a,s){a&1&&(Me(),k(0,"svg",3),oe(1,"polygon",4),L())}var tt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],it=["mat-icon, [matMenuItemIcon]","*"];function nt(a,s){if(a&1){let c=ke();k(0,"div",0),N("keydown",function(t){I(c);let i=h();return C(i._handleKeydown(t))})("click",function(){I(c);let t=h();return C(t.closed.emit("click"))})("@transformMenu.start",function(t){I(c);let i=h();return C(i._onAnimationStart(t))})("@transformMenu.done",function(t){I(c);let i=h();return C(i._onAnimationDone(t))}),k(1,"div",1),B(2),L()()}if(a&2){let c=h();se("id",c.panelId)("ngClass",c._classList)("@transformMenu",c._panelAnimationState),w("aria-label",c.ariaLabel||null)("aria-labelledby",c.ariaLabelledby||null)("aria-describedby",c.ariaDescribedby||null)}}var st=["*"],fe=new y("MAT_MENU_PANEL"),_e=(()=>{let s=class s{constructor(e,t,i,n,o){this._elementRef=e,this._document=t,this._focusMonitor=i,this._parentMenu=n,this._changeDetectorRef=o,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new v,this._focused=new v,this._highlighted=!1,this._triggersSubmenu=!1,n?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}};s.\u0275fac=function(t){return new(t||s)(r(O),r(ce),r(de),r(fe,8),r(d))},s.\u0275cmp=q({type:s,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&N("click",function(o){return i._checkDisabled(o)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(w("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),Ce("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[l.HasDecoratorInputTransform,"disabled","disabled",P],disableRipple:[l.HasDecoratorInputTransform,"disableRipple","disableRipple",P]},exportAs:["matMenuItem"],standalone:!0,features:[te,le],attrs:Je,ngContentSelectors:it,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false","aria-hidden","true"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(ae(tt),B(0),k(1,"span",0),B(2,1),L(),oe(3,"div",1),ne(4,et,2,0,":svg:svg",2)),t&2&&(J(3),se("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),J(),we(4,i._triggersSubmenu?4:-1))},dependencies:[Le],encapsulation:2,changeDetection:0});let a=s;return a})();var Xe=new y("MatMenuContent"),Bt=(()=>{let s=class s{constructor(e,t,i,n,o,m,u){this._template=e,this._componentFactoryResolver=t,this._appRef=i,this._injector=n,this._viewContainerRef=o,this._document=m,this._changeDetectorRef=u,this._attached=new v}attach(e={}){this._portal||(this._portal=new pe(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new He(this._document.createElement("div"),this._componentFactoryResolver,this._appRef,this._injector));let t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef?.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){this._portal.isAttached&&this._portal.detach()}ngOnDestroy(){this._outlet&&this._outlet.dispose()}};s.\u0275fac=function(t){return new(t||s)(r(H),r(Ie),r(Pe),r(ye),r(ie),r(ce),r(d))},s.\u0275dir=$({type:s,selectors:[["ng-template","matMenuContent",""]],standalone:!0,features:[re([{provide:Xe,useExisting:s}])]});let a=s;return a})(),Q={transformMenu:me("transformMenu",[ue("void",p({opacity:0,transform:"scale(0.8)"})),z("void => enter",V("120ms cubic-bezier(0, 0, 0.2, 1)",p({opacity:1,transform:"scale(1)"}))),z("* => void",V("100ms 25ms linear",p({opacity:0})))]),fadeInItems:me("fadeInItems",[ue("showing",p({opacity:1})),z("void => *",[p({opacity:0}),V("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},Ht=Q.fadeInItems,Yt=Q.transformMenu,ot=0,at=new y("mat-menu-default-options",{providedIn:"root",factory:rt});function rt(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var U=(()=>{let s=class s{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){let t=this._previousPanelClass;t&&t.length&&t.split(" ").forEach(i=>{this._classList[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{this._classList[i]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,t,i,n){this._elementRef=e,this._ngZone=t,this._changeDetectorRef=n,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new Re,this._classList={},this._panelAnimationState="void",this._animationDone=new v,this.closed=new j,this.close=this.closed,this.panelId=`mat-menu-panel-${ot++}`,this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this.overlapTrigger=i.overlapTrigger,this.hasBackdrop=i.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ae(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(A(this._directDescendantItems),K(e=>x(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),n=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[n]&&!i[n].disabled?t.setActiveItem(n):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe(A(this._directDescendantItems),K(t=>x(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:Se(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe(S(1)).subscribe(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){let t=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${t}`,n=Object.keys(this._classList).find(o=>o.startsWith(this._elevationPrefix));(!n||n===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[i]=!0,this._previousElevation=i)}setPositionClasses(e=this.xPosition,t=this.yPosition){let i=this._classList;i["mat-menu-before"]=e==="before",i["mat-menu-after"]=e==="after",i["mat-menu-above"]=t==="above",i["mat-menu-below"]=t==="below",this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(A(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}};s.\u0275fac=function(t){return new(t||s)(r(O),r(ee),r(at),r(d))},s.\u0275cmp=q({type:s,selectors:[["mat-menu"]],contentQueries:function(t,i,n){if(t&1&&(Y(n,Xe,5),Y(n,_e,5),Y(n,_e,4)),t&2){let o;R(o=D())&&(i.lazyContent=o.first),R(o=D())&&(i._allItems=o),R(o=D())&&(i.items=o)}},viewQuery:function(t,i){if(t&1&&De(H,5),t&2){let n;R(n=D())&&(i.templateRef=n.first)}},hostVars:3,hostBindings:function(t,i){t&2&&w("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[l.None,"aria-label","ariaLabel"],ariaLabelledby:[l.None,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[l.None,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[l.HasDecoratorInputTransform,"overlapTrigger","overlapTrigger",P],hasBackdrop:[l.HasDecoratorInputTransform,"hasBackdrop","hasBackdrop",e=>e==null?null:P(e)],panelClass:[l.None,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[re([{provide:fe,useExisting:s}]),te,le],ngContentSelectors:st,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(ae(),ne(0,nt,3,6,"ng-template"))},dependencies:[Ee],styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[Q.transformMenu,Q.fadeInItems]},changeDetection:0});let a=s;return a})(),We=new y("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let a=Z(E);return()=>a.scrollStrategies.reposition()}});function lt(a){return()=>a.scrollStrategies.reposition()}var ct={provide:We,deps:[E],useFactory:lt},ze=xe({passive:!0});var Vt=(()=>{let s=class s{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,t,i,n,o,m,u,_,f){this._overlay=e,this._element=t,this._viewContainerRef=i,this._menuItemInstance=m,this._dir=u,this._focusMonitor=_,this._ngZone=f,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=T.EMPTY,this._hoverSubscription=T.EMPTY,this._menuCloseSubscription=T.EMPTY,this._changeDetectorRef=Z(d),this._handleTouchStart=g=>{Oe(g)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new j,this.onMenuOpen=this.menuOpened,this.menuClosed=new j,this.onMenuClose=this.menuClosed,this._scrollStrategy=n,this._parentMaterialMenu=o instanceof U?o:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,ze)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,ze),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;let t=this._createOverlay(e),i=t.getConfig(),n=i.positionStrategy;this._setPosition(e,n),i.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,t.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof U&&(e._startAnimation(),e._directDescendantItems.changes.pipe(F(e.close)).subscribe(()=>{n.withLockedPosition(!1).reapplyLastPosition(),n.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;let t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof U?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(M(i=>i.toState==="void"),S(1),F(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let t=0,i=e.parentMenu;for(;i;)t++,i=i.parentMenu;e.setElevation(t)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new Ye({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{let n=i.connectionPair.overlayX==="start"?"after":"before",o=i.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(n,o)):e.setPositionClasses(n,o)})}_setPosition(e,t){let[i,n]=e.xPosition==="before"?["end","start"]:["start","end"],[o,m]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[u,_]=[o,m],[f,g]=[i,n],b=0;if(this.triggersSubmenu()){if(g=i=e.xPosition==="before"?"start":"end",n=f=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let ge=this._parentMaterialMenu.items.first;this._parentInnerPadding=ge?ge._getHostElement().offsetTop:0}b=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(u=o==="top"?"bottom":"top",_=m==="top"?"bottom":"top");t.withPositions([{originX:i,originY:u,overlayX:f,overlayY:o,offsetY:b},{originX:n,originY:u,overlayX:g,overlayY:o,offsetY:b},{originX:i,originY:_,overlayX:f,overlayY:m,offsetY:-b},{originX:n,originY:_,overlayX:g,overlayY:m,offsetY:-b}])}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:W(),n=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(M(o=>o!==this._menuItemInstance),M(()=>this._menuOpen)):W();return x(e,i,n,t)}_handleMousedown(e){Fe(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(M(e=>e===this._menuItemInstance&&!e.disabled),G(0,X)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof U&&this.menu._isAnimating?this.menu._animationDone.pipe(S(1),G(0,X),F(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new pe(e.templateRef,this._viewContainerRef)),this._portal}};s.\u0275fac=function(t){return new(t||s)(r(E),r(O),r(ie),r(We),r(fe,8),r(_e,10),r(je,8),r(de),r(ee))},s.\u0275dir=$({type:s,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&N("click",function(o){return i._handleClick(o)})("mousedown",function(o){return i._handleMousedown(o)})("keydown",function(o){return i._handleKeydown(o)}),t&2&&w("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[l.None,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[l.None,"matMenuTriggerFor","menu"],menuData:[l.None,"matMenuTriggerData","menuData"],restoreFocus:[l.None,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0});let a=s;return a})(),zt=(()=>{let s=class s{};s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=ve({type:s}),s.\u0275inj=be({providers:[ct],imports:[Te,Ne,he,Ve,Be,he]});let a=s;return a})();export{_e as a,Bt as b,U as c,Vt as d,zt as e};
