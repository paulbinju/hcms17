import{j as Ze,k as oe,l as qe,m as $,n as re,s as Ke,u as Ye}from"./chunk-CVYJYPYN.js";import{$ as X,$a as y,Aa as P,Ca as L,Da as l,E as ge,Fa as Be,Fd as $e,Ga as Ve,Gb as ne,Ha as W,Ia as f,Ja as ye,Jb as ze,Jd as we,Ka as H,La as ee,O as j,Pa as te,Sa as B,U as Pe,V as Y,W as G,Wa as I,X as Le,Xa as E,Y as U,Yc as Qe,Z as m,_ as x,aa as h,ca as J,d as Q,e as N,gb as ie,gd as Ue,ha as D,hb as T,ia as He,id as We,j as Ae,k as A,kb as C,lb as R,m as je,n as q,nb as b,o as K,ob as S,ub as _,vb as M,w as pe,xa as F}from"./chunk-5OTRJNO2.js";function ft(o,e){o&1&&T(0,2)}function mt(o,e){o&1&&(I(0,"thead",0),y(1,1),E(),I(2,"tbody",0),y(3,2)(4,3),E(),I(5,"tfoot",0),y(6,4),E())}function pt(o,e){o&1&&y(0,1)(1,2)(2,3)(3,4)}var gt=[[["caption"]],[["colgroup"],["col"]],"*"],yt=["caption","colgroup, col","*"];function Re(o){return class extends o{get sticky(){return this._sticky}set sticky(e){let a=this._sticky;this._sticky=Ue(e),this._hasStickyChanged=a!==this._sticky}hasStickyChanged(){let e=this._hasStickyChanged;return this._hasStickyChanged=!1,e}resetStickyChanged(){this._hasStickyChanged=!1}constructor(...e){super(...e),this._sticky=!1,this._hasStickyChanged=!1}}}var v=new G("CDK_TABLE");var ue=(()=>{let e=class e{constructor(t){this.template=t}};e.\u0275fac=function(i){return new(i||e)(l(C))},e.\u0275dir=h({type:e,selectors:[["","cdkCellDef",""]],standalone:!0});let o=e;return o})(),he=(()=>{let e=class e{constructor(t){this.template=t}};e.\u0275fac=function(i){return new(i||e)(l(C))},e.\u0275dir=h({type:e,selectors:[["","cdkHeaderCellDef",""]],standalone:!0});let o=e;return o})(),Je=(()=>{let e=class e{constructor(t){this.template=t}};e.\u0275fac=function(i){return new(i||e)(l(C))},e.\u0275dir=h({type:e,selectors:[["","cdkFooterCellDef",""]],standalone:!0});let o=e;return o})(),_e=class{},wt=Re(_e),V=(()=>{let e=class e extends wt{get name(){return this._name}set name(t){this._setNameInput(t)}get stickyEnd(){return this._stickyEnd}set stickyEnd(t){t!==this._stickyEnd&&(this._stickyEnd=t,this._hasStickyChanged=!0)}constructor(t){super(),this._table=t,this._stickyEnd=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}};e.\u0275fac=function(i){return new(i||e)(l(v,8))},e.\u0275dir=h({type:e,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,n,s){if(i&1&&(R(s,ue,5),R(s,he,5),R(s,Je,5)),i&2){let r;b(r=S())&&(n.cell=r.first),b(r=S())&&(n.headerCell=r.first),b(r=S())&&(n.footerCell=r.first)}},inputs:{sticky:"sticky",name:[m.None,"cdkColumnDef","name"],stickyEnd:[m.HasDecoratorInputTransform,"stickyEnd","stickyEnd",ne]},standalone:!0,features:[_([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:e}]),ye,f]});let o=e;return o})(),ae=class{constructor(e,a){a.nativeElement.classList.add(...e._columnCssClassName)}},et=(()=>{let e=class e extends ae{constructor(t,i){super(t,i)}};e.\u0275fac=function(i){return new(i||e)(l(V),l(F))},e.\u0275dir=h({type:e,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],standalone:!0,features:[f]});let o=e;return o})();var tt=(()=>{let e=class e extends ae{constructor(t,i){super(t,i);let n=t._table?._getCellRole();n&&i.nativeElement.setAttribute("role",n)}};e.\u0275fac=function(i){return new(i||e)(l(V),l(F))},e.\u0275dir=h({type:e,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],standalone:!0,features:[f]});let o=e;return o})(),le=class{constructor(){this.tasks=[],this.endTasks=[]}},ce=new G("_COALESCED_STYLE_SCHEDULER"),be=(()=>{let e=class e{constructor(t){this._ngZone=t,this._currentSchedule=null,this._destroyed=new Q}schedule(t){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(t)}scheduleEnd(t){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(t)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new le,this._getScheduleObservable().pipe(j(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){let t=this._currentSchedule;this._currentSchedule=new le;for(let i of t.tasks)i();for(let i of t.endTasks)i()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?Ae(Promise.resolve(void 0)):this._ngZone.onStable.pipe(ge(1))}};e.\u0275fac=function(i){return new(i||e)(Le(W))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac});let o=e;return o})();var Se=(()=>{let e=class e{constructor(t,i){this.template=t,this._differs=i}ngOnChanges(t){if(!this._columnsDiffer){let i=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof Z?t.headerCell.template:this instanceof ke?t.footerCell.template:t.cell.template}};e.\u0275fac=function(i){return new(i||e)(l(C),l(P))},e.\u0275dir=h({type:e,features:[J]});let o=e;return o})(),De=class extends Se{},_t=Re(De),Z=(()=>{let e=class e extends _t{constructor(t,i,n){super(t,i),this._table=n}ngOnChanges(t){super.ngOnChanges(t)}};e.\u0275fac=function(i){return new(i||e)(l(C),l(P),l(v,8))},e.\u0275dir=h({type:e,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[m.None,"cdkHeaderRowDef","columns"],sticky:[m.None,"cdkHeaderRowDefSticky","sticky"]},standalone:!0,features:[f,J]});let o=e;return o})(),ve=class extends Se{},Dt=Re(ve),ke=(()=>{let e=class e extends Dt{constructor(t,i,n){super(t,i),this._table=n}ngOnChanges(t){super.ngOnChanges(t)}};e.\u0275fac=function(i){return new(i||e)(l(C),l(P),l(v,8))},e.\u0275dir=h({type:e,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[m.None,"cdkFooterRowDef","columns"],sticky:[m.None,"cdkFooterRowDefSticky","sticky"]},standalone:!0,features:[f,J]});let o=e;return o})(),fe=(()=>{let e=class e extends Se{constructor(t,i,n){super(t,i),this._table=n}};e.\u0275fac=function(i){return new(i||e)(l(C),l(P),l(v,8))},e.\u0275dir=h({type:e,selectors:[["","cdkRowDef",""]],inputs:{columns:[m.None,"cdkRowDefColumns","columns"],when:[m.None,"cdkRowDefWhen","when"]},standalone:!0,features:[f]});let o=e;return o})(),O=(()=>{let e=class e{constructor(t){this._viewContainer=t,e.mostRecentCellOutlet=this}ngOnDestroy(){e.mostRecentCellOutlet===this&&(e.mostRecentCellOutlet=null)}};e.mostRecentCellOutlet=null,e.\u0275fac=function(i){return new(i||e)(l(H))},e.\u0275dir=h({type:e,selectors:[["","cdkCellOutlet",""]],standalone:!0});let o=e;return o})(),xe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=x({type:e,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],standalone:!0,features:[M],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,n){i&1&&y(0,0)},dependencies:[O],encapsulation:2});let o=e;return o})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=x({type:e,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],standalone:!0,features:[M],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,n){i&1&&y(0,0)},dependencies:[O],encapsulation:2});let o=e;return o})(),it=(()=>{let e=class e{constructor(t){this.templateRef=t,this._contentClassName="cdk-no-data-row"}};e.\u0275fac=function(i){return new(i||e)(l(C))},e.\u0275dir=h({type:e,selectors:[["ng-template","cdkNoDataRow",""]],standalone:!0});let o=e;return o})(),Ge=["top","bottom","left","right"],Ce=class{constructor(e,a,t,i,n=!0,s=!0,r){this._isNativeHtmlTable=e,this._stickCellCss=a,this.direction=t,this._coalescedStyleScheduler=i,this._isBrowser=n,this._needsPositionStickyOnElement=s,this._positionListener=r,this._cachedCellWidths=[],this._borderCellCss={top:`${a}-border-elem-top`,bottom:`${a}-border-elem-bottom`,left:`${a}-border-elem-left`,right:`${a}-border-elem-right`}}clearStickyPositioning(e,a){let t=[];for(let i of e)if(i.nodeType===i.ELEMENT_NODE){t.push(i);for(let n=0;n<i.children.length;n++)t.push(i.children[n])}this._coalescedStyleScheduler.schedule(()=>{for(let i of t)this._removeStickyStyle(i,a)})}updateStickyColumns(e,a,t,i=!0){if(!e.length||!this._isBrowser||!(a.some(n=>n)||t.some(n=>n))){this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]}));return}this._coalescedStyleScheduler.schedule(()=>{let n=e[0],s=n.children.length,r=this._getCellWidths(n,i),c=this._getStickyStartColumnPositions(r,a),d=this._getStickyEndColumnPositions(r,t),u=a.lastIndexOf(!0),g=t.indexOf(!0),p=this.direction==="rtl",k=p?"right":"left",me=p?"left":"right";for(let z of e)for(let w=0;w<s;w++){let Ne=z.children[w];a[w]&&this._addStickyStyle(Ne,k,c[w],w===u),t[w]&&this._addStickyStyle(Ne,me,d[w],w===g)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:u===-1?[]:r.slice(0,u+1).map((z,w)=>a[w]?z:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:g===-1?[]:r.slice(g).map((z,w)=>t[w+g]?z:null).reverse()}))})}stickRows(e,a,t){this._isBrowser&&this._coalescedStyleScheduler.schedule(()=>{let i=t==="bottom"?e.slice().reverse():e,n=t==="bottom"?a.slice().reverse():a,s=[],r=[],c=[];for(let u=0,g=0;u<i.length;u++){if(!n[u])continue;s[u]=g;let p=i[u];c[u]=this._isNativeHtmlTable?Array.from(p.children):[p];let k=p.getBoundingClientRect().height;g+=k,r[u]=k}let d=n.lastIndexOf(!0);for(let u=0;u<i.length;u++){if(!n[u])continue;let g=s[u],p=u===d;for(let k of c[u])this._addStickyStyle(k,t,g,p)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:r,offsets:s,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:r,offsets:s,elements:c})})}updateStickyFooterContainer(e,a){this._isNativeHtmlTable&&this._coalescedStyleScheduler.schedule(()=>{let t=e.querySelector("tfoot");a.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1)})}_removeStickyStyle(e,a){for(let i of a)e.style[i]="",e.classList.remove(this._borderCellCss[i]);Ge.some(i=>a.indexOf(i)===-1&&e.style[i])?e.style.zIndex=this._getCalculatedZIndex(e):(e.style.zIndex="",this._needsPositionStickyOnElement&&(e.style.position=""),e.classList.remove(this._stickCellCss))}_addStickyStyle(e,a,t,i){e.classList.add(this._stickCellCss),i&&e.classList.add(this._borderCellCss[a]),e.style[a]=`${t}px`,e.style.zIndex=this._getCalculatedZIndex(e),this._needsPositionStickyOnElement&&(e.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(e){let a={top:100,bottom:10,left:1,right:1},t=0;for(let i of Ge)e.style[i]&&(t+=a[i]);return t?`${t}`:""}_getCellWidths(e,a=!0){if(!a&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=e.children;for(let n=0;n<i.length;n++){let s=i[n];t.push(s.getBoundingClientRect().width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(e,a){let t=[],i=0;for(let n=0;n<e.length;n++)a[n]&&(t[n]=i,i+=e[n]);return t}_getStickyEndColumnPositions(e,a){let t=[],i=0;for(let n=e.length;n>0;n--)a[n]&&(t[n]=i,i+=e[n]);return t}};var de=new G("CDK_SPL");var Ie=(()=>{let e=class e{constructor(t,i){this.viewContainer=t,this.elementRef=i;let n=U(v);n._rowOutlet=this,n._outletAssigned()}};e.\u0275fac=function(i){return new(i||e)(l(H),l(F))},e.\u0275dir=h({type:e,selectors:[["","rowOutlet",""]],standalone:!0});let o=e;return o})(),Ee=(()=>{let e=class e{constructor(t,i){this.viewContainer=t,this.elementRef=i;let n=U(v);n._headerRowOutlet=this,n._outletAssigned()}};e.\u0275fac=function(i){return new(i||e)(l(H),l(F))},e.\u0275dir=h({type:e,selectors:[["","headerRowOutlet",""]],standalone:!0});let o=e;return o})(),Te=(()=>{let e=class e{constructor(t,i){this.viewContainer=t,this.elementRef=i;let n=U(v);n._footerRowOutlet=this,n._outletAssigned()}};e.\u0275fac=function(i){return new(i||e)(l(H),l(F))},e.\u0275dir=h({type:e,selectors:[["","footerRowOutlet",""]],standalone:!0});let o=e;return o})(),Me=(()=>{let e=class e{constructor(t,i){this.viewContainer=t,this.elementRef=i;let n=U(v);n._noDataRowOutlet=this,n._outletAssigned()}};e.\u0275fac=function(i){return new(i||e)(l(H),l(F))},e.\u0275dir=h({type:e,selectors:[["","noDataRowOutlet",""]],standalone:!0});let o=e;return o})();var Oe=(()=>{let e=class e{_getCellRole(){if(this._cellRoleInternal===void 0){let t=this._elementRef.nativeElement.getAttribute("role"),i=t==="grid"||t==="treegrid"?"gridcell":"cell";this._cellRoleInternal=this._isNativeHtmlTable&&i==="cell"?null:i}return this._cellRoleInternal}get trackBy(){return this._trackByFn}set trackBy(t){this._trackByFn=t}get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&this._switchDataSource(t)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=t,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(t){this._fixedLayout=t,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}constructor(t,i,n,s,r,c,d,u,g,p,k,me){this._differs=t,this._changeDetectorRef=i,this._elementRef=n,this._dir=r,this._platform=d,this._viewRepeater=u,this._coalescedStyleScheduler=g,this._viewportRuler=p,this._stickyPositioningListener=k,this._ngZone=me,this._onDestroy=new Q,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._hasRendered=!1,this._cellRoleInternal=void 0,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new Ve,this.viewChange=new N({start:0,end:Number.MAX_VALUE}),s||n.nativeElement.setAttribute("role","table"),this._document=c,this._isServer=!d.isBrowser,this._isNativeHtmlTable=n.nativeElement.nodeName==="TABLE"}ngOnInit(){this._setupStickyStyler(),this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i),this._viewportRuler.change().pipe(j(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._hasRendered&&this._render()}ngOnDestroy(){[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(t=>{t?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),oe(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let t=this._dataDiffer.diff(this._renderRows);if(!t){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(t,i,(n,s,r)=>this._getEmbeddedViewArgs(n.item,r),n=>n.item.data,n=>{n.operation===qe.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),t.forEachIdentityChange(n=>{let s=i.get(n.currentIndex);s.context.$implicit=n.item.data}),this._updateNoDataRow(),this._ngZone&&W.isInAngularZone()?this._ngZone.onStable.pipe(ge(1),j(this._onDestroy)).subscribe(()=>{this.updateStickyColumnStyles()}):this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}setNoDataRow(t){this._customNoDataRow=t}updateStickyHeaderRowStyles(){let t=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=Xe(this._headerRowOutlet,"thead");n&&(n.style.display=t.length?"":"none")}let i=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,i,"top"),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let t=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=Xe(this._footerRowOutlet,"tfoot");n&&(n.style.display=t.length?"":"none")}let i=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let t=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...t,...i,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),t.forEach((s,r)=>{this._addStickyColumnStyles([s],this._headerRowDefs[r])}),this._rowDefs.forEach(s=>{let r=[];for(let c=0;c<i.length;c++)this._renderRows[c].rowDef===s&&r.push(i[c]);this._addStickyColumnStyles(r,s)}),n.forEach((s,r)=>{this._addStickyColumnStyles([s],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(s=>s.resetStickyChanged())}_outletAssigned(){!this._hasRendered&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasRendered=!0,this._render())}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){let t=[],i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let n=0;n<this._data.length;n++){let s=this._data[n],r=this._getRenderRowsForData(s,n,i.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let c=0;c<r.length;c++){let d=r[c],u=this._cachedRenderRowsMap.get(d.data);u.has(d.rowDef)?u.get(d.rowDef).push(d):u.set(d.rowDef,[d]),t.push(d)}}return t}_getRenderRowsForData(t,i,n){return this._getRowDefs(t,i).map(r=>{let c=n&&n.has(r)?n.get(r):[];if(c.length){let d=c.shift();return d.dataIndex=i,d}else return{data:t,rowDef:r,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),se(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=se(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=se(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=se(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let t=this._rowDefs.filter(i=>!i.when);!this.multiTemplateDataRows&&t.length>1,this._defaultRowDef=t[0]}_renderUpdatedColumns(){let t=(r,c)=>r||!!c.getColumnsDiff(),i=this._rowDefs.reduce(t,!1);i&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(t,!1);n&&this._forceRenderHeaderRows();let s=this._footerRowDefs.reduce(t,!1);return s&&this._forceRenderFooterRows(),i||n||s}_switchDataSource(t){this._data=[],oe(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;oe(this.dataSource)?t=this.dataSource.connect(this):je(this.dataSource)?t=this.dataSource:Array.isArray(this.dataSource)&&(t=A(this.dataSource)),this._renderChangeSubscription=t.pipe(j(this._onDestroy)).subscribe(i=>{this._data=i||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,i)=>this._renderRow(this._headerRowOutlet,t,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,i)=>this._renderRow(this._footerRowOutlet,t,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(t,i){let n=Array.from(i.columns||[]).map(c=>{let d=this._columnDefsByName.get(c);return d}),s=n.map(c=>c.sticky),r=n.map(c=>c.stickyEnd);this._stickyStyler.updateStickyColumns(t,s,r,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(t){let i=[];for(let n=0;n<t.viewContainer.length;n++){let s=t.viewContainer.get(n);i.push(s.rootNodes[0])}return i}_getRowDefs(t,i){if(this._rowDefs.length==1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(s=>!s.when||s.when(i,t));else{let s=this._rowDefs.find(r=>r.when&&r.when(i,t))||this._defaultRowDef;s&&n.push(s)}return n.length,n}_getEmbeddedViewArgs(t,i){let n=t.rowDef,s={$implicit:t.data};return{templateRef:n.template,context:s,index:i}}_renderRow(t,i,n,s={}){let r=t.viewContainer.createEmbeddedView(i.template,s,n);return this._renderCellTemplateForItem(i,s),r}_renderCellTemplateForItem(t,i){for(let n of this._getCellTemplates(t))O.mostRecentCellOutlet&&O.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let t=this._rowOutlet.viewContainer;for(let i=0,n=t.length;i<n;i++){let r=t.get(i).context;r.count=n,r.first=i===0,r.last=i===n-1,r.even=i%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[i].dataIndex,r.renderIndex=i):r.index=this._renderRows[i].dataIndex}}_getCellTemplates(t){return!t||!t.columns?[]:Array.from(t.columns,i=>{let n=this._columnDefsByName.get(i);return t.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let t=(i,n)=>i||n.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let t=this._dir?this._dir.value:"ltr";this._stickyStyler=new Ce(this._isNativeHtmlTable,this.stickyCssClass,t,this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:A()).pipe(j(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_getOwnDefs(t){return t.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let t=this._customNoDataRow||this._noDataRow;if(!t)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(i){let s=n.createEmbeddedView(t.templateRef),r=s.rootNodes[0];s.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE&&(r.setAttribute("role","row"),r.classList.add(t._contentClassName))}else n.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}};e.\u0275fac=function(i){return new(i||e)(l(P),l(Be),l(F),He("role"),l($e,8),l(ze),l(Qe),l($),l(ce),l(Ke),l(de,12),l(W,8))},e.\u0275cmp=x({type:e,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,n,s){if(i&1&&(R(s,it,5),R(s,V,5),R(s,fe,5),R(s,Z,5),R(s,ke,5)),i&2){let r;b(r=S())&&(n._noDataRow=r.first),b(r=S())&&(n._contentColumnDefs=r),b(r=S())&&(n._contentRowDefs=r),b(r=S())&&(n._contentHeaderRowDefs=r),b(r=S())&&(n._contentFooterRowDefs=r)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,n){i&2&&te("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[m.HasDecoratorInputTransform,"multiTemplateDataRows","multiTemplateDataRows",ne],fixedLayout:[m.HasDecoratorInputTransform,"fixedLayout","fixedLayout",ne]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],standalone:!0,features:[_([{provide:v,useExisting:e},{provide:$,useClass:re},{provide:ce,useClass:be},{provide:de,useValue:null}]),ye,M],ngContentSelectors:yt,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,n){i&1&&(ie(gt),T(0),T(1,1),ee(2,ft,1,0)(3,mt,7,0)(4,pt,4,0)),i&2&&(L(2),B(2,n._isServer?2:-1),L(),B(3,n._isNativeHtmlTable?3:4))},dependencies:[Ee,Ie,Me,Te],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2});let o=e;return o})();function se(o,e){return o.concat(Array.from(e))}function Xe(o,e){let a=e.toUpperCase(),t=o.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===a)return t;if(i==="TABLE")break;t=t.parentNode}return null}var nt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=X({type:e}),e.\u0275inj=Y({imports:[Ye]});let o=e;return o})();function vt(o,e){o&1&&T(0,2)}function Ct(o,e){o&1&&(I(0,"thead",0),y(1,1),E(),I(2,"tbody",2),y(3,3)(4,4),E(),I(5,"tfoot",0),y(6,5),E())}function Rt(o,e){o&1&&y(0,1)(1,3)(2,4)(3,5)}var bt=[[["caption"]],[["colgroup"],["col"]],"*"],St=["caption","colgroup, col","*"];var ui=(()=>{let e=class e extends Oe{constructor(){super(...arguments),this.stickyCssClass="mat-mdc-table-sticky",this.needsPositionStickyOnElement=!1}};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})(),e.\u0275cmp=x({type:e,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,n){i&2&&te("mdc-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],standalone:!0,features:[_([{provide:Oe,useExisting:e},{provide:v,useExisting:e},{provide:ce,useClass:be},{provide:$,useClass:re},{provide:de,useValue:null}]),f,M],ngContentSelectors:St,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,n){i&1&&(ie(bt),T(0),T(1,1),ee(2,vt,1,0)(3,Ct,7,0)(4,Rt,4,0)),i&2&&(L(2),B(2,n._isServer?2:-1),L(),B(3,n._isNativeHtmlTable?3:4))},dependencies:[Ee,Ie,Me,Te],styles:[".mat-mdc-table-sticky{position:sticky !important}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking)}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],encapsulation:2});let o=e;return o})(),hi=(()=>{let e=class e extends ue{};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})(),e.\u0275dir=h({type:e,selectors:[["","matCellDef",""]],standalone:!0,features:[_([{provide:ue,useExisting:e}]),f]});let o=e;return o})(),fi=(()=>{let e=class e extends he{};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})(),e.\u0275dir=h({type:e,selectors:[["","matHeaderCellDef",""]],standalone:!0,features:[_([{provide:he,useExisting:e}]),f]});let o=e;return o})();var mi=(()=>{let e=class e extends V{get name(){return this._name}set name(t){this._setNameInput(t)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})(),e.\u0275dir=h({type:e,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:[m.None,"matColumnDef","name"]},standalone:!0,features:[_([{provide:V,useExisting:e},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:e}]),f]});let o=e;return o})(),pi=(()=>{let e=class e extends et{};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})(),e.\u0275dir=h({type:e,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],standalone:!0,features:[f]});let o=e;return o})();var gi=(()=>{let e=class e extends tt{};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})(),e.\u0275dir=h({type:e,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],standalone:!0,features:[f]});let o=e;return o})();var yi=(()=>{let e=class e extends Z{};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})(),e.\u0275dir=h({type:e,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[m.None,"matHeaderRowDef","columns"],sticky:[m.None,"matHeaderRowDefSticky","sticky"]},standalone:!0,features:[_([{provide:Z,useExisting:e}]),f]});let o=e;return o})();var wi=(()=>{let e=class e extends fe{};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})(),e.\u0275dir=h({type:e,selectors:[["","matRowDef",""]],inputs:{columns:[m.None,"matRowDefColumns","columns"],when:[m.None,"matRowDefWhen","when"]},standalone:!0,features:[_([{provide:fe,useExisting:e}]),f]});let o=e;return o})(),_i=(()=>{let e=class e extends xe{};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})(),e.\u0275cmp=x({type:e,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],standalone:!0,features:[_([{provide:xe,useExisting:e}]),f,M],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,n){i&1&&y(0,0)},dependencies:[O],encapsulation:2});let o=e;return o})();var Di=(()=>{let e=class e extends Fe{};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})(),e.\u0275cmp=x({type:e,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],standalone:!0,features:[_([{provide:Fe,useExisting:e}]),f,M],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,n){i&1&&y(0,0)},dependencies:[O],encapsulation:2});let o=e;return o})();var vi=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=X({type:e}),e.\u0275inj=Y({imports:[we,nt,we]});let o=e;return o})(),kt=9007199254740991,ot=class extends Ze{get data(){return this._data.value}set data(e){e=Array.isArray(e)?e:[],this._data.next(e),this._renderChangesSubscription||this._filterData(e)}get filter(){return this._filter.value}set filter(e){this._filter.next(e),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(e){this._sort=e,this._updateChangeSubscription()}get paginator(){return this._paginator}set paginator(e){this._paginator=e,this._updateChangeSubscription()}constructor(e=[]){super(),this._renderData=new N([]),this._filter=new N(""),this._internalPageChanges=new Q,this._renderChangesSubscription=null,this.sortingDataAccessor=(a,t)=>{let i=a[t];if(We(i)){let n=Number(i);return n<kt?n:i}return i},this.sortData=(a,t)=>{let i=t.active,n=t.direction;return!i||n==""?a:a.sort((s,r)=>{let c=this.sortingDataAccessor(s,i),d=this.sortingDataAccessor(r,i),u=typeof c,g=typeof d;u!==g&&(u==="number"&&(c+=""),g==="number"&&(d+=""));let p=0;return c!=null&&d!=null?c>d?p=1:c<d&&(p=-1):c!=null?p=1:d!=null&&(p=-1),p*(n=="asc"?1:-1)})},this.filterPredicate=(a,t)=>{let i=Object.keys(a).reduce((s,r)=>s+a[r]+"\u25EC","").toLowerCase(),n=t.trim().toLowerCase();return i.indexOf(n)!=-1},this._data=new N(e),this._updateChangeSubscription()}_updateChangeSubscription(){let e=this._sort?pe(this._sort.sortChange,this._sort.initialized):A(null),a=this._paginator?pe(this._paginator.page,this._internalPageChanges,this._paginator.initialized):A(null),t=this._data,i=K([t,this._filter]).pipe(q(([r])=>this._filterData(r))),n=K([i,e]).pipe(q(([r])=>this._orderData(r))),s=K([n,a]).pipe(q(([r])=>this._pageData(r)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=s.subscribe(r=>this._renderData.next(r))}_filterData(e){return this.filteredData=this.filter==null||this.filter===""?e:e.filter(a=>this.filterPredicate(a,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(e){return this.sort?this.sortData(e.slice(),this.sort):e}_pageData(e){if(!this.paginator)return e;let a=this.paginator.pageIndex*this.paginator.pageSize;return e.slice(a,a+this.paginator.pageSize)}_updatePaginator(e){Promise.resolve().then(()=>{let a=this.paginator;if(a&&(a.length=e,a.pageIndex>0)){let t=Math.ceil(a.length/a.pageSize)-1||0,i=Math.min(a.pageIndex,t);i!==a.pageIndex&&(a.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};export{nt as a,ui as b,hi as c,fi as d,mi as e,pi as f,gi as g,yi as h,wi as i,_i as j,Di as k,vi as l,ot as m};