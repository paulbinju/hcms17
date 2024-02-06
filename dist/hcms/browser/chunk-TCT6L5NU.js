import{C as Ut,F as b,I as Lt,s as Dt,t as Pt,w as Ft}from"./chunk-CVYJYPYN.js";import{$ as S,$d as Ot,Da as o,E as f,Fa as E,Fd as Et,G as at,Ga as h,Gb as c,Ha as X,Ja as A,Jb as pt,Jd as g,Ka as ut,La as H,Lc as bt,M as nt,Ma as w,Mc as D,N as T,Na as j,Nc as It,Pb as ft,Pc as v,Q as rt,Qc as yt,Sc as G,T as ot,V as k,Vd as At,W as N,Wa as z,Wb as vt,Xa as Q,Xd as wt,Y as lt,Yc as Tt,Yd as Mt,Z as l,_ as B,_d as Ct,a as L,aa as W,ab as _t,ae as xt,be as Vt,ca as dt,ce as Z,d as tt,da as ct,db as M,dd as kt,ea as ht,fb as C,fd as P,gb as Y,hb as $,k as et,kb as mt,lb as O,mb as x,md as St,n as it,nb as u,nc as gt,ob as _,r as st,rd as K,sd as F,t as I,ub as V,ud as Rt,ue as Nt,vb as q,w as p,x as y,xa as R}from"./chunk-5OTRJNO2.js";var te=["panel"];function ee(r,s){if(r&1){let m=_t();z(0,"div",0,1),M("@panelAnimation.done",function(e){ct(m);let i=C();return ht(i._animationDone.next(e))}),$(2),Q()}if(r&2){let m=s.id,t=C();j("id",t.id)("ngClass",t._classList)("@panelAnimation",t.isOpen?"visible":"hidden"),w("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(m))}}var ie=["*"],se=bt("panelAnimation",[yt("void, hidden",v({opacity:0,transform:"scaleY(0.8)"})),G(":enter, hidden => visible",[It([D("0.03s linear",v({opacity:1})),D("0.12s cubic-bezier(0, 0, 0.2, 1)",v({transform:"scaleY(1)"}))])]),G(":leave, visible => hidden",[D("0.075s linear",v({opacity:0}))])]),ae=0,J=class{constructor(s,m){this.source=s,this.option=m}},Xt=new N("mat-autocomplete-default-options",{providedIn:"root",factory:ne});function ne(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1}}var We=(()=>{let s=class s{get isOpen(){return this._isOpen&&this.showPanel}_setColor(t){this._color=t,this._setThemeClasses(this._classList)}set classList(t){t&&t.length?this._classList=St(t).reduce((e,i)=>(e[i]=!0,e),{}):this._classList={},this._setVisibilityClasses(this._classList),this._setThemeClasses(this._classList),this._elementRef.nativeElement.className=""}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}constructor(t,e,i,a){this._changeDetectorRef=t,this._elementRef=e,this._defaults=i,this._activeOptionChanges=L.EMPTY,this._visibleClass="mat-mdc-autocomplete-visible",this._hiddenClass="mat-mdc-autocomplete-hidden",this._animationDone=new h,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new h,this.opened=new h,this.closed=new h,this.optionActivated=new h,this._classList={},this.id=`mat-autocomplete-${ae++}`,this.inertGroups=a?.SAFARI||!1,this.autoActiveFirstOption=!!i.autoActiveFirstOption,this.autoSelectActiveOption=!!i.autoSelectActiveOption,this.requireSelection=!!i.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Rt(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe(),this._animationDone.complete()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){let e=new J(this,t);this.optionSelected.emit(e)}_getPanelAriaLabelledby(t){if(this.ariaLabel)return null;let e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_setVisibilityClasses(t){t[this._visibleClass]=this.showPanel,t[this._hiddenClass]=!this.showPanel}_setThemeClasses(t){t["mat-primary"]=this._color==="primary",t["mat-warn"]=this._color==="warn",t["mat-accent"]=this._color==="accent"}_skipPredicate(){return!1}};s.\u0275fac=function(e){return new(e||s)(o(E),o(R),o(Xt),o(Tt))},s.\u0275cmp=B({type:s,selectors:[["mat-autocomplete"]],contentQueries:function(e,i,a){if(e&1&&(O(a,Ot,5),O(a,Mt,5)),e&2){let n;u(n=_())&&(i.options=n),u(n=_())&&(i.optionGroups=n)}},viewQuery:function(e,i){if(e&1&&(x(mt,7),x(te,5)),e&2){let a;u(a=_())&&(i.template=a.first),u(a=_())&&(i.panel=a.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[l.None,"aria-label","ariaLabel"],ariaLabelledby:[l.None,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[l.HasDecoratorInputTransform,"autoActiveFirstOption","autoActiveFirstOption",c],autoSelectActiveOption:[l.HasDecoratorInputTransform,"autoSelectActiveOption","autoSelectActiveOption",c],requireSelection:[l.HasDecoratorInputTransform,"requireSelection","requireSelection",c],panelWidth:"panelWidth",disableRipple:[l.HasDecoratorInputTransform,"disableRipple","disableRipple",c],classList:[l.None,"class","classList"],hideSingleSelectionIndicator:[l.HasDecoratorInputTransform,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",c]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],standalone:!0,features:[V([{provide:wt,useExisting:s}]),A,q],ngContentSelectors:ie,decls:1,vars:0,consts:[["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id","ngClass"],["panel",""]],template:function(e,i){e&1&&(Y(),H(0,ee,3,5,"ng-template"))},dependencies:[ft],styles:["div.mat-mdc-autocomplete-panel{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-autocomplete-background-color)}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[se]},changeDetection:0});let r=s;return r})();var re={provide:gt,useExisting:ot(()=>de),multi:!0};var Ht=new N("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let r=lt(b);return()=>r.scrollStrategies.reposition()}});function oe(r){return()=>r.scrollStrategies.reposition()}var le={provide:Ht,deps:[b],useFactory:oe},de=(()=>{let s=class s{constructor(t,e,i,a,n,U,jt,zt,Qt,Yt,$t){this._element=t,this._overlay=e,this._viewContainerRef=i,this._zone=a,this._changeDetectorRef=n,this._dir=jt,this._formField=zt,this._document=Qt,this._viewportRuler=Yt,this._defaults=$t,this._componentDestroyed=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=L.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new tt,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._aboveClass="mat-mdc-autocomplete-panel-above",this._overlayAttached=!1,this.optionSelections=st(()=>{let d=this.autocomplete?this.autocomplete.options:null;return d?d.changes.pipe(nt(d),T(()=>p(...d.map(qt=>qt.onSelectionChange)))):this._zone.onStable.pipe(f(1),T(()=>this.optionSelections))}),this._handlePanelKeydown=d=>{(d.keyCode===27&&!P(d)||d.keyCode===38&&P(d,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),d.stopPropagation(),d.preventDefault())},this._trackedModal=null,this._scrollStrategy=U}ngAfterViewInit(){let t=this._getWindow();typeof t<"u"&&this._zone.runOutsideAngular(()=>t.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){let t=this._getWindow();typeof t<"u"&&t.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){if(this._attachOverlay(),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;K(this._trackedModal,"aria-owns",t)}}closePanel(){if(this._resetLabel(),!!this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._isOpen=this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal)){let t=this.autocomplete.id;F(this._trackedModal,"aria-owns",t)}}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return p(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(y(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(y(()=>this._overlayAttached)):et()).pipe(it(t=>t instanceof Ct?t:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return p(I(this._document,"click"),I(this._document,"auxclick"),I(this._document,"touchend")).pipe(y(t=>{let e=kt(t),i=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,a=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&e!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!i||!i.contains(e))&&(!a||!a.contains(e))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(e)}))}writeValue(t){Promise.resolve(null).then(()=>this._assignOptionValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){let e=t.keyCode,i=P(t);if(e===27&&!i&&t.preventDefault(),this.activeOption&&e===13&&this.panelOpen&&!i)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,n=e===38||e===40;e===9||n&&!i&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):n&&this._canOpen()&&this.openPanel(),(n||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._element.nativeElement.value),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(t){let e=t.target,i=e.value;if(e.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(n=>n.selected);if(a){let n=this.autocomplete.displayWith?.(a)??a.value;i!==n&&a.deselect(!1)}}this._canOpen()&&this._document.activeElement===t.target&&this.openPanel()}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this.openPanel()}_floatLabel(t=!1){this._formField&&this._formField.floatLabel==="auto"&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let t=this._zone.onStable.pipe(f(1)),e=this.autocomplete.options.changes.pipe(rt(()=>this._positionStrategy.reapplyLastPosition()),at(0));return p(t,e).pipe(T(()=>(this._zone.run(()=>{let i=this.panelOpen;this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit())}),this.panelClosingActions)),f(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_assignOptionValue(t){let e=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t;t==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(e??"")}_updateNativeInputValue(t){this._formField?this._formField._control.value=t:this._element.nativeElement.value=t,this._previousValue=t}_setValueAndClose(t){let e=this.autocomplete,i=t?t.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),e._emitSelectEvent(i),this._element.nativeElement.focus()):e.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),e._animationDone?e._animationDone.pipe(f(1)).subscribe(()=>this._onChange(null)):this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(t,e){this.autocomplete?.options?.forEach(i=>{i!==t&&i.selected&&i.deselect(e)})}_attachOverlay(){this.autocomplete;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Ft(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=this._element.nativeElement.value,this._closingActionsSubscription=this._subscribeToClosingActions());let e=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&e!==this.panelOpen&&this._emitOpened()}_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let t=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=t.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=t.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=null}_getOverlayConfig(){return new Ut({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){let t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){let e=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],n;this.position==="above"?n=a:this.position==="below"?n=e:n=[...e,...a],t.withPositions(n)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let t=this.autocomplete;if(t.autoActiveFirstOption){let e=-1;for(let i=0;i<t.options.length;i++)if(!t.options.get(i).disabled){e=i;break}t._keyManager.setActiveItem(e)}else t._keyManager.setActiveItem(-1)}_canOpen(){let t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this.autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(t){let e=this.autocomplete,i=xt(t,e.options,e.optionGroups);if(t===0&&i===1)e._setScrollTop(0);else if(e.panel){let a=e.options.toArray()[t];if(a){let n=a._getHostElement(),U=Vt(n.offsetTop,n.offsetHeight,e._getScrollTop(),e.panel.nativeElement.offsetHeight);e._setScrollTop(U)}}}_applyModalPanelOwnership(){let t=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;let e=this.autocomplete.id;this._trackedModal&&F(this._trackedModal,"aria-owns",e),K(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){if(this._trackedModal){let t=this.autocomplete.id;F(this._trackedModal,"aria-owns",t),this._trackedModal=null}}};s.\u0275fac=function(e){return new(e||s)(o(R),o(b),o(ut),o(X),o(E),o(Ht),o(Et,8),o(Nt,9),o(pt,8),o(Dt),o(Xt,8))},s.\u0275dir=W({type:s,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(e,i){e&1&&M("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(n){return i._handleInput(n)})("keydown",function(n){return i._handleKeydown(n)})("click",function(){return i._handleClick()}),e&2&&w("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen||i.autocomplete==null?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[l.None,"matAutocomplete","autocomplete"],position:[l.None,"matAutocompletePosition","position"],connectedTo:[l.None,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[l.None,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[l.HasDecoratorInputTransform,"matAutocompleteDisabled","autocompleteDisabled",c]},exportAs:["matAutocompleteTrigger"],standalone:!0,features:[V([re]),A,dt]});let r=s;return r})(),Xe=(()=>{let s=class s{};s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=S({type:s}),s.\u0275inj=k({providers:[le],imports:[Lt,Z,g,vt,Pt,Z,g]});let r=s;return r})();var ri=(()=>{let s=class s{};s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=S({type:s}),s.\u0275inj=k({imports:[g,At]});let r=s;return r})();export{We as a,de as b,Xe as c,ri as d};