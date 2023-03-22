import{j as S,S as de,k as Pe,l as te,m as ne,n as Fe,p as Oe,o as De,q as Te,O as ue,r as fe,s as Q,t as ke,u as he,v as je,w as Se,x as Ae,ɵ as b,a as I,b as m,e as f,d as p,y as v,c as x,g as s,z as g,A as d,N as Ee,B as F,_ as C,i as N,C as Be,D as O,E as w,F as P,G as A,H as E,U as ge,I as G,J as D,K as T,L as ye,M as V,P as W,Q as He,R as U,f as q,T as K,V as X,W as ve,h as Re,X as Ve,Y as z,Z as We,$ as ze,a0 as B,a1 as L,a2 as ae,a3 as be,a4 as Le,a5 as oe,a6 as k,a7 as $e,a8 as Qe,a9 as Ge,aa as Ue,ab as qe,ac as Ke,ad as Xe,ae as Ze,af as Ie,ag as Je,ah as Ye,ai as et}from"./index-1c8d7944.js";var Z={now:function(){return(Z.delegate||Date).now()},delegate:void 0},tt=function(e){S(n,e);function n(t,o,r){t===void 0&&(t=1/0),o===void 0&&(o=1/0),r===void 0&&(r=Z);var l=e.call(this)||this;return l._bufferSize=t,l._windowTime=o,l._timestampProvider=r,l._buffer=[],l._infiniteTimeWindow=!0,l._infiniteTimeWindow=o===1/0,l._bufferSize=Math.max(1,t),l._windowTime=Math.max(1,o),l}return n.prototype.next=function(t){var o=this,r=o.isStopped,l=o._buffer,c=o._infiniteTimeWindow,u=o._timestampProvider,h=o._windowTime;r||(l.push(t),!c&&l.push(u.now()+h)),this._trimBuffer(),e.prototype.next.call(this,t)},n.prototype._subscribe=function(t){this._throwIfClosed(),this._trimBuffer();for(var o=this._innerSubscribe(t),r=this,l=r._infiniteTimeWindow,c=r._buffer,u=c.slice(),h=0;h<u.length&&!t.closed;h+=l?1:2)t.next(u[h]);return this._checkFinalizedStatuses(t),o},n.prototype._trimBuffer=function(){var t=this,o=t._bufferSize,r=t._timestampProvider,l=t._buffer,c=t._infiniteTimeWindow,u=(c?1:2)*o;if(o<1/0&&u<l.length&&l.splice(0,l.length-u),!c){for(var h=r.now(),y=0,_=1;_<l.length&&l[_]<=h;_+=2)y=_;y&&l.splice(0,y+1)}},n}(de),nt=function(e){S(n,e);function n(t,o){return e.call(this)||this}return n.prototype.schedule=function(t,o){return this},n}(Pe),j={setInterval:function(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var r=j.delegate;return r?.setInterval?r.setInterval.apply(r,te([e,n],ne(t))):setInterval.apply(void 0,te([e,n],ne(t)))},clearInterval:function(e){var n=j.delegate;return(n?.clearInterval||clearInterval)(e)},delegate:void 0},at=function(e){S(n,e);function n(t,o){var r=e.call(this,t,o)||this;return r.scheduler=t,r.work=o,r.pending=!1,r}return n.prototype.schedule=function(t,o){var r;if(o===void 0&&(o=0),this.closed)return this;this.state=t;var l=this.id,c=this.scheduler;return l!=null&&(this.id=this.recycleAsyncId(c,l,o)),this.pending=!0,this.delay=o,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(c,this.id,o),this},n.prototype.requestAsyncId=function(t,o,r){return r===void 0&&(r=0),j.setInterval(t.flush.bind(t,this),r)},n.prototype.recycleAsyncId=function(t,o,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return o;o!=null&&j.clearInterval(o)},n.prototype.execute=function(t,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,o);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,o){var r=!1,l;try{this.work(t)}catch(c){r=!0,l=c||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),l},n.prototype.unsubscribe=function(){if(!this.closed){var t=this,o=t.id,r=t.scheduler,l=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Fe(l,this),o!=null&&(this.id=this.recycleAsyncId(r,o,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},n}(nt),re=function(){function e(n,t){t===void 0&&(t=e.now),this.schedulerActionCtor=n,this.now=t}return e.prototype.schedule=function(n,t,o){return t===void 0&&(t=0),new this.schedulerActionCtor(this,n).schedule(o,t)},e.now=Z.now,e}(),ot=function(e){S(n,e);function n(t,o){o===void 0&&(o=re.now);var r=e.call(this,t,o)||this;return r.actions=[],r._active=!1,r}return n.prototype.flush=function(t){var o=this.actions;if(this._active){o.push(t);return}var r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=o.shift());if(this._active=!1,r){for(;t=o.shift();)t.unsubscribe();throw r}},n}(re),rt=new ot(at);function it(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Oe(e),o=De(e),r=o.args,l=o.keys,c=new ue(function(u){var h=r.length;if(!h){u.complete();return}for(var y=new Array(h),_=h,Y=h,we=function(ee){var R=!1;fe(r[ee]).subscribe(Q(u,function(Me){R||(R=!0,Y--),y[ee]=Me},function(){return _--},void 0,function(){(!_||!R)&&(Y||u.next(l?ke(l,y):y),u.complete())}))},H=0;H<h;H++)we(H)});return t?c.pipe(Te(t)):c}function lt(e,n){return n===void 0&&(n=rt),he(function(t,o){var r=null,l=null,c=null,u=function(){if(r){r.unsubscribe(),r=null;var y=l;l=null,o.next(y)}};function h(){var y=c+e,_=n.now();if(_<y){r=this.schedule(void 0,y-_),o.add(r);return}u()}t.subscribe(Q(o,function(y){l=y,c=n.now(),r||(r=n.schedule(h,e),o.add(r))},function(){u(),o.complete()},void 0,function(){l=r=null}))})}function ie(e,n,t){var o,r,l,c,u=!1;return e&&typeof e=="object"?(o=e.bufferSize,c=o===void 0?1/0:o,r=e.windowTime,n=r===void 0?1/0:r,l=e.refCount,u=l===void 0?!1:l,t=e.scheduler):c=e??1/0,je({connector:function(){return new tt(c,n,t)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:u})}function st(e){return Se(function(n,t){return e<=t})}function mt(e){return he(function(n,t){fe(e).subscribe(Q(t,function(){return t.complete()},Ae)),!t.closed&&n.subscribe(t)})}function pt(e,n){if(e&1&&(m(0,"p"),f(1),p()),e&2){var t=n.$implicit;s(1),g(t)}}function ct(e,n){if(e&1&&(m(0,"li"),f(1),p()),e&2){var t=n.$implicit;s(1),g(t)}}function dt(e,n){if(e&1&&(m(0,"li"),f(1),p()),e&2){var t=n.$implicit;s(1),g(t)}}var ut=function(){var e=C(function n(){N(this,n)});return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["pr-about"]],inputs:{data:"data"},standalone:!0,features:[I],decls:13,vars:7,consts:[[1,"col"],[4,"ngFor","ngForOf"],[1,"lists"],["data-scroll","","data-scroll-speed","2",1,"col","img"],["ngSrc","assets/images/profile.png","alt","Profile picture",3,"height","width"]],template:function(t,o){t&1&&(m(0,"div",0)(1,"h4"),f(2),p(),v(3,pt,2,1,"p",1),m(4,"p"),f(5),p(),m(6,"div",2)(7,"ul"),v(8,ct,2,1,"li",1),p(),m(9,"ul"),v(10,dt,2,1,"li",1),p()()(),m(11,"div",3),x(12,"img",4),p()),t&2&&(s(2),g(o.data.title),s(1),d("ngForOf",o.data.text),s(2),g(o.data.techs.title),s(3),d("ngForOf",o.data.techs.list.slice(0,3)),s(2),d("ngForOf",o.data.techs.list.slice(3,6)),s(2),d("height",400)("width",400))},dependencies:[Ee,F],styles:[`@use 'mixins';

      [_nghost-%COMP%] {
        align-items: center;
        display: grid;
        gap: 3rem;
        grid-template-columns: 2fr 1fr;
        padding: 4rem 0;

        @media (max-width: 800px) {
          grid-template-columns: 1fr;

          .img {
            margin: auto;
            max-width: 500px;
          }
        }

        .img {
          background: linear-gradient(var(--accent), var(--primary));
          border-radius: var(--radius-lg);
          display: flex;
          overflow: hidden;
        }
      }

      img[_ngcontent-%COMP%] {
        aspect-ratio: 12 / 16;
        height: 100%;
        margin-top: auto;
        mix-blend-mode: multiply;
        object-fit: cover;
        object-position: center;
        width: 100%;
      }

      p[_ngcontent-%COMP%] {
        padding: 1rem 0;
      }

      .lists[_ngcontent-%COMP%] {
        @include mixins.flex(flex-start);
        gap: 4rem;
        padding-left: 1rem;
      }

      li[_ngcontent-%COMP%]::marker {
        color: var(--primary);
        content: '\f0da'' ';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
      }`]}),e}();function ft(e,n){if(e&1&&(m(0,"a",2)(1,"button"),f(2),p()()),e&2){var t=w();d("href",t.href,P),s(2),g(t.text)}}function ht(e,n){if(e&1&&(m(0,"button"),f(1),p()),e&2){var t=w();s(1),g(t.text)}}var _e=function(){var e=function(){function n(){N(this,n),this.type="primary",this.text=""}return C(n,[{key:"className",get:function(){return this.type}}]),n}();return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["pr-button"]],hostVars:2,hostBindings:function(t,o){t&2&&Be(o.className)},inputs:{type:"type",href:"href",text:"text"},standalone:!0,features:[I],decls:2,vars:2,consts:[[3,"href",4,"ngIf"],[4,"ngIf"],[3,"href"]],template:function(t,o){t&1&&(v(0,ft,3,2,"a",0),v(1,ht,2,1,"button",1)),t&2&&(d("ngIf",o.href),s(1),d("ngIf",!o.href))},dependencies:[O],encapsulation:2}),e}();function gt(e,n){if(e&1&&(m(0,"p"),f(1),p()),e&2){var t=n.$implicit;s(1),g(t)}}var yt=function(){var e=C(function n(){N(this,n)});return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["pr-contact"]],inputs:{data:"data"},standalone:!0,features:[I],decls:7,vars:6,consts:[[4,"ngFor","ngForOf"],["href","mailto:abelfubu@gmail.com",3,"text"],[1,"foot"]],template:function(t,o){t&1&&(m(0,"h4"),f(1),p(),v(2,gt,2,1,"p",0),x(3,"pr-button",1),A(4,"uppercase"),m(5,"p",2),f(6),p()),t&2&&(s(1),g(o.data.title),s(1),d("ngForOf",o.data.text),s(1),d("text",E(4,4,o.data.cta)),s(3),g(o.data.footer))},dependencies:[_e,F,ge],styles:[`[_nghost-%COMP%] {
        display: block;
        padding: 4rem 0 0;
        text-align: center;
      }
      p[_ngcontent-%COMP%] {
        padding: 1rem 0;
      }
      .foot[_ngcontent-%COMP%] {
        font-size: 0.8rem;
        font-weight: 300;
        margin-top: 4rem;
        opacity: 0.7;
      }`]}),e}();const a="@angular/core";let i=(()=>{class e{}return e.NEW_METHOD="factory",e.TRANSFORM_METHOD="transform",e.PATCH_DEPS="patchedDeps",e.core={name:null,moduleName:a},e.namespaceHTML={name:"ɵɵnamespaceHTML",moduleName:a},e.namespaceMathML={name:"ɵɵnamespaceMathML",moduleName:a},e.namespaceSVG={name:"ɵɵnamespaceSVG",moduleName:a},e.element={name:"ɵɵelement",moduleName:a},e.elementStart={name:"ɵɵelementStart",moduleName:a},e.elementEnd={name:"ɵɵelementEnd",moduleName:a},e.advance={name:"ɵɵadvance",moduleName:a},e.syntheticHostProperty={name:"ɵɵsyntheticHostProperty",moduleName:a},e.syntheticHostListener={name:"ɵɵsyntheticHostListener",moduleName:a},e.attribute={name:"ɵɵattribute",moduleName:a},e.attributeInterpolate1={name:"ɵɵattributeInterpolate1",moduleName:a},e.attributeInterpolate2={name:"ɵɵattributeInterpolate2",moduleName:a},e.attributeInterpolate3={name:"ɵɵattributeInterpolate3",moduleName:a},e.attributeInterpolate4={name:"ɵɵattributeInterpolate4",moduleName:a},e.attributeInterpolate5={name:"ɵɵattributeInterpolate5",moduleName:a},e.attributeInterpolate6={name:"ɵɵattributeInterpolate6",moduleName:a},e.attributeInterpolate7={name:"ɵɵattributeInterpolate7",moduleName:a},e.attributeInterpolate8={name:"ɵɵattributeInterpolate8",moduleName:a},e.attributeInterpolateV={name:"ɵɵattributeInterpolateV",moduleName:a},e.classProp={name:"ɵɵclassProp",moduleName:a},e.elementContainerStart={name:"ɵɵelementContainerStart",moduleName:a},e.elementContainerEnd={name:"ɵɵelementContainerEnd",moduleName:a},e.elementContainer={name:"ɵɵelementContainer",moduleName:a},e.styleMap={name:"ɵɵstyleMap",moduleName:a},e.styleMapInterpolate1={name:"ɵɵstyleMapInterpolate1",moduleName:a},e.styleMapInterpolate2={name:"ɵɵstyleMapInterpolate2",moduleName:a},e.styleMapInterpolate3={name:"ɵɵstyleMapInterpolate3",moduleName:a},e.styleMapInterpolate4={name:"ɵɵstyleMapInterpolate4",moduleName:a},e.styleMapInterpolate5={name:"ɵɵstyleMapInterpolate5",moduleName:a},e.styleMapInterpolate6={name:"ɵɵstyleMapInterpolate6",moduleName:a},e.styleMapInterpolate7={name:"ɵɵstyleMapInterpolate7",moduleName:a},e.styleMapInterpolate8={name:"ɵɵstyleMapInterpolate8",moduleName:a},e.styleMapInterpolateV={name:"ɵɵstyleMapInterpolateV",moduleName:a},e.classMap={name:"ɵɵclassMap",moduleName:a},e.classMapInterpolate1={name:"ɵɵclassMapInterpolate1",moduleName:a},e.classMapInterpolate2={name:"ɵɵclassMapInterpolate2",moduleName:a},e.classMapInterpolate3={name:"ɵɵclassMapInterpolate3",moduleName:a},e.classMapInterpolate4={name:"ɵɵclassMapInterpolate4",moduleName:a},e.classMapInterpolate5={name:"ɵɵclassMapInterpolate5",moduleName:a},e.classMapInterpolate6={name:"ɵɵclassMapInterpolate6",moduleName:a},e.classMapInterpolate7={name:"ɵɵclassMapInterpolate7",moduleName:a},e.classMapInterpolate8={name:"ɵɵclassMapInterpolate8",moduleName:a},e.classMapInterpolateV={name:"ɵɵclassMapInterpolateV",moduleName:a},e.styleProp={name:"ɵɵstyleProp",moduleName:a},e.stylePropInterpolate1={name:"ɵɵstylePropInterpolate1",moduleName:a},e.stylePropInterpolate2={name:"ɵɵstylePropInterpolate2",moduleName:a},e.stylePropInterpolate3={name:"ɵɵstylePropInterpolate3",moduleName:a},e.stylePropInterpolate4={name:"ɵɵstylePropInterpolate4",moduleName:a},e.stylePropInterpolate5={name:"ɵɵstylePropInterpolate5",moduleName:a},e.stylePropInterpolate6={name:"ɵɵstylePropInterpolate6",moduleName:a},e.stylePropInterpolate7={name:"ɵɵstylePropInterpolate7",moduleName:a},e.stylePropInterpolate8={name:"ɵɵstylePropInterpolate8",moduleName:a},e.stylePropInterpolateV={name:"ɵɵstylePropInterpolateV",moduleName:a},e.nextContext={name:"ɵɵnextContext",moduleName:a},e.resetView={name:"ɵɵresetView",moduleName:a},e.templateCreate={name:"ɵɵtemplate",moduleName:a},e.text={name:"ɵɵtext",moduleName:a},e.enableBindings={name:"ɵɵenableBindings",moduleName:a},e.disableBindings={name:"ɵɵdisableBindings",moduleName:a},e.getCurrentView={name:"ɵɵgetCurrentView",moduleName:a},e.textInterpolate={name:"ɵɵtextInterpolate",moduleName:a},e.textInterpolate1={name:"ɵɵtextInterpolate1",moduleName:a},e.textInterpolate2={name:"ɵɵtextInterpolate2",moduleName:a},e.textInterpolate3={name:"ɵɵtextInterpolate3",moduleName:a},e.textInterpolate4={name:"ɵɵtextInterpolate4",moduleName:a},e.textInterpolate5={name:"ɵɵtextInterpolate5",moduleName:a},e.textInterpolate6={name:"ɵɵtextInterpolate6",moduleName:a},e.textInterpolate7={name:"ɵɵtextInterpolate7",moduleName:a},e.textInterpolate8={name:"ɵɵtextInterpolate8",moduleName:a},e.textInterpolateV={name:"ɵɵtextInterpolateV",moduleName:a},e.restoreView={name:"ɵɵrestoreView",moduleName:a},e.pureFunction0={name:"ɵɵpureFunction0",moduleName:a},e.pureFunction1={name:"ɵɵpureFunction1",moduleName:a},e.pureFunction2={name:"ɵɵpureFunction2",moduleName:a},e.pureFunction3={name:"ɵɵpureFunction3",moduleName:a},e.pureFunction4={name:"ɵɵpureFunction4",moduleName:a},e.pureFunction5={name:"ɵɵpureFunction5",moduleName:a},e.pureFunction6={name:"ɵɵpureFunction6",moduleName:a},e.pureFunction7={name:"ɵɵpureFunction7",moduleName:a},e.pureFunction8={name:"ɵɵpureFunction8",moduleName:a},e.pureFunctionV={name:"ɵɵpureFunctionV",moduleName:a},e.pipeBind1={name:"ɵɵpipeBind1",moduleName:a},e.pipeBind2={name:"ɵɵpipeBind2",moduleName:a},e.pipeBind3={name:"ɵɵpipeBind3",moduleName:a},e.pipeBind4={name:"ɵɵpipeBind4",moduleName:a},e.pipeBindV={name:"ɵɵpipeBindV",moduleName:a},e.hostProperty={name:"ɵɵhostProperty",moduleName:a},e.property={name:"ɵɵproperty",moduleName:a},e.propertyInterpolate={name:"ɵɵpropertyInterpolate",moduleName:a},e.propertyInterpolate1={name:"ɵɵpropertyInterpolate1",moduleName:a},e.propertyInterpolate2={name:"ɵɵpropertyInterpolate2",moduleName:a},e.propertyInterpolate3={name:"ɵɵpropertyInterpolate3",moduleName:a},e.propertyInterpolate4={name:"ɵɵpropertyInterpolate4",moduleName:a},e.propertyInterpolate5={name:"ɵɵpropertyInterpolate5",moduleName:a},e.propertyInterpolate6={name:"ɵɵpropertyInterpolate6",moduleName:a},e.propertyInterpolate7={name:"ɵɵpropertyInterpolate7",moduleName:a},e.propertyInterpolate8={name:"ɵɵpropertyInterpolate8",moduleName:a},e.propertyInterpolateV={name:"ɵɵpropertyInterpolateV",moduleName:a},e.i18n={name:"ɵɵi18n",moduleName:a},e.i18nAttributes={name:"ɵɵi18nAttributes",moduleName:a},e.i18nExp={name:"ɵɵi18nExp",moduleName:a},e.i18nStart={name:"ɵɵi18nStart",moduleName:a},e.i18nEnd={name:"ɵɵi18nEnd",moduleName:a},e.i18nApply={name:"ɵɵi18nApply",moduleName:a},e.i18nPostprocess={name:"ɵɵi18nPostprocess",moduleName:a},e.pipe={name:"ɵɵpipe",moduleName:a},e.projection={name:"ɵɵprojection",moduleName:a},e.projectionDef={name:"ɵɵprojectionDef",moduleName:a},e.reference={name:"ɵɵreference",moduleName:a},e.inject={name:"ɵɵinject",moduleName:a},e.injectAttribute={name:"ɵɵinjectAttribute",moduleName:a},e.directiveInject={name:"ɵɵdirectiveInject",moduleName:a},e.invalidFactory={name:"ɵɵinvalidFactory",moduleName:a},e.invalidFactoryDep={name:"ɵɵinvalidFactoryDep",moduleName:a},e.templateRefExtractor={name:"ɵɵtemplateRefExtractor",moduleName:a},e.forwardRef={name:"forwardRef",moduleName:a},e.resolveForwardRef={name:"resolveForwardRef",moduleName:a},e.ɵɵdefineInjectable={name:"ɵɵdefineInjectable",moduleName:a},e.declareInjectable={name:"ɵɵngDeclareInjectable",moduleName:a},e.InjectableDeclaration={name:"ɵɵInjectableDeclaration",moduleName:a},e.resolveWindow={name:"ɵɵresolveWindow",moduleName:a},e.resolveDocument={name:"ɵɵresolveDocument",moduleName:a},e.resolveBody={name:"ɵɵresolveBody",moduleName:a},e.defineComponent={name:"ɵɵdefineComponent",moduleName:a},e.declareComponent={name:"ɵɵngDeclareComponent",moduleName:a},e.setComponentScope={name:"ɵɵsetComponentScope",moduleName:a},e.ChangeDetectionStrategy={name:"ChangeDetectionStrategy",moduleName:a},e.ViewEncapsulation={name:"ViewEncapsulation",moduleName:a},e.ComponentDeclaration={name:"ɵɵComponentDeclaration",moduleName:a},e.FactoryDeclaration={name:"ɵɵFactoryDeclaration",moduleName:a},e.declareFactory={name:"ɵɵngDeclareFactory",moduleName:a},e.FactoryTarget={name:"ɵɵFactoryTarget",moduleName:a},e.defineDirective={name:"ɵɵdefineDirective",moduleName:a},e.declareDirective={name:"ɵɵngDeclareDirective",moduleName:a},e.DirectiveDeclaration={name:"ɵɵDirectiveDeclaration",moduleName:a},e.InjectorDef={name:"ɵɵInjectorDef",moduleName:a},e.InjectorDeclaration={name:"ɵɵInjectorDeclaration",moduleName:a},e.defineInjector={name:"ɵɵdefineInjector",moduleName:a},e.declareInjector={name:"ɵɵngDeclareInjector",moduleName:a},e.NgModuleDeclaration={name:"ɵɵNgModuleDeclaration",moduleName:a},e.ModuleWithProviders={name:"ModuleWithProviders",moduleName:a},e.defineNgModule={name:"ɵɵdefineNgModule",moduleName:a},e.declareNgModule={name:"ɵɵngDeclareNgModule",moduleName:a},e.setNgModuleScope={name:"ɵɵsetNgModuleScope",moduleName:a},e.registerNgModuleType={name:"ɵɵregisterNgModuleType",moduleName:a},e.PipeDeclaration={name:"ɵɵPipeDeclaration",moduleName:a},e.definePipe={name:"ɵɵdefinePipe",moduleName:a},e.declarePipe={name:"ɵɵngDeclarePipe",moduleName:a},e.declareClassMetadata={name:"ɵɵngDeclareClassMetadata",moduleName:a},e.setClassMetadata={name:"ɵsetClassMetadata",moduleName:a},e.queryRefresh={name:"ɵɵqueryRefresh",moduleName:a},e.viewQuery={name:"ɵɵviewQuery",moduleName:a},e.loadQuery={name:"ɵɵloadQuery",moduleName:a},e.contentQuery={name:"ɵɵcontentQuery",moduleName:a},e.NgOnChangesFeature={name:"ɵɵNgOnChangesFeature",moduleName:a},e.InheritDefinitionFeature={name:"ɵɵInheritDefinitionFeature",moduleName:a},e.CopyDefinitionFeature={name:"ɵɵCopyDefinitionFeature",moduleName:a},e.StandaloneFeature={name:"ɵɵStandaloneFeature",moduleName:a},e.ProvidersFeature={name:"ɵɵProvidersFeature",moduleName:a},e.HostDirectivesFeature={name:"ɵɵHostDirectivesFeature",moduleName:a},e.listener={name:"ɵɵlistener",moduleName:a},e.getInheritedFactory={name:"ɵɵgetInheritedFactory",moduleName:a},e.sanitizeHtml={name:"ɵɵsanitizeHtml",moduleName:a},e.sanitizeStyle={name:"ɵɵsanitizeStyle",moduleName:a},e.sanitizeResourceUrl={name:"ɵɵsanitizeResourceUrl",moduleName:a},e.sanitizeScript={name:"ɵɵsanitizeScript",moduleName:a},e.sanitizeUrl={name:"ɵɵsanitizeUrl",moduleName:a},e.sanitizeUrlOrResourceUrl={name:"ɵɵsanitizeUrlOrResourceUrl",moduleName:a},e.trustConstantHtml={name:"ɵɵtrustConstantHtml",moduleName:a},e.trustConstantResourceUrl={name:"ɵɵtrustConstantResourceUrl",moduleName:a},e.validateIframeAttribute={name:"ɵɵvalidateIframeAttribute",moduleName:a},e})();i.element,i.elementStart,i.elementEnd,i.elementContainer,i.elementContainerStart,i.elementContainerEnd,i.i18nExp,i.listener,i.classProp,i.syntheticHostListener,i.hostProperty,i.syntheticHostProperty,i.property,i.propertyInterpolate1,i.propertyInterpolate2,i.propertyInterpolate3,i.propertyInterpolate4,i.propertyInterpolate5,i.propertyInterpolate6,i.propertyInterpolate7,i.propertyInterpolate8,i.propertyInterpolateV,i.attribute,i.attributeInterpolate1,i.attributeInterpolate2,i.attributeInterpolate3,i.attributeInterpolate4,i.attributeInterpolate5,i.attributeInterpolate6,i.attributeInterpolate7,i.attributeInterpolate8,i.attributeInterpolateV,i.styleProp,i.stylePropInterpolate1,i.stylePropInterpolate2,i.stylePropInterpolate3,i.stylePropInterpolate4,i.stylePropInterpolate5,i.stylePropInterpolate6,i.stylePropInterpolate7,i.stylePropInterpolate8,i.stylePropInterpolateV,i.textInterpolate,i.textInterpolate1,i.textInterpolate2,i.textInterpolate3,i.textInterpolate4,i.textInterpolate5,i.textInterpolate6,i.textInterpolate7,i.textInterpolate8,i.textInterpolateV;i.resolveWindow,i.resolveDocument,i.resolveBody;i.pipeBind1,i.pipeBind2,i.pipeBind3,i.pipeBind4;i.pureFunction0,i.pureFunction1,i.pureFunction2,i.pureFunction3,i.pureFunction4,i.pureFunction5,i.pureFunction6,i.pureFunction7,i.pureFunction8;const J=["*"];function vt(e,n){e&1&&(m(0,"section"),T(1),p())}const bt=["hover"];function It(e,n){if(e&1){const t=U();m(0,"li",2),q("click",function(){const l=K(t).$implicit,c=w(2);return X(c.selectTab(l))}),f(1),p()}if(e&2){const t=n.$implicit;ve("selected",t.selected),s(1),Re(" ",t.title," ")}}function _t(e,n){if(e&1&&(m(0,"nav")(1,"ul"),v(2,It,2,3,"li",1),p()()),e&2){const t=w();s(2),d("ngForOf",t.tabs)}}let Ce=(()=>{class e{constructor(){this.bgImage=""}get image(){return`url(${this.bgImage})`}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["afb-card"]],hostVars:2,hostBindings:function(t,o){t&2&&G("background-image",o.image)},inputs:{bgImage:"bgImage"},standalone:!0,features:[I],ngContentSelectors:J,decls:1,vars:0,template:function(t,o){t&1&&(D(),T(0))},styles:["[_nghost-%COMP%]{background-color:var(--primary-dark);background-position:center;background-size:cover;border-radius:var(--radius-sm);box-shadow:0 0 11px #0005;display:block;background-blend-mode:overlay;padding:1.5rem}"]}),e})(),Ne=(()=>{class e{constructor(){this.selected=!1}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["afb-tab"]],inputs:{title:"title",selected:"selected"},standalone:!0,features:[I],ngContentSelectors:J,decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,o){t&1&&(D(),v(0,vt,2,0,"section",0)),t&2&&d("ngIf",o.selected)},dependencies:[O],styles:['@use "mixins";[_nghost-%COMP%]  li::marker{color:var(--primary);font-family:"Font Awesome 5 Free";font-weight:900}section[_ngcontent-%COMP%]{padding:.5rem 1rem;@include mixins.breakpoint-down(medium){padding: 1rem 0;}}']}),e})(),Ct=(()=>{class e{ngAfterContentInit(){!this.tabs.find(o=>o.selected)&&this.tabs.first&&(this.tabs.first.selected=!0)}selectTab(t){this.tabs.forEach(o=>o.selected=!1),t.selected=!0}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["afb-tab-group"]],contentQueries:function(t,o,r){if(t&1&&ye(r,Ne,4),t&2){let l;V(l=W())&&(o.tabs=l)}},viewQuery:function(t,o){if(t&1&&He(bt,5),t&2){let r;V(r=W())&&(o.hoverEls=r)}},standalone:!0,features:[I],ngContentSelectors:J,decls:2,vars:1,consts:[[4,"ngIf"],[3,"selected","click",4,"ngFor","ngForOf"],[3,"click"]],template:function(t,o){t&1&&(D(),v(0,_t,3,1,"nav",0),T(1)),t&2&&d("ngIf",o.tabs)},dependencies:[O,F],styles:['@use "mixins";[_nghost-%COMP%]{display:flex;padding:1rem 0;@include mixins.breakpoint-down(medium){display: block;}}ul[_ngcontent-%COMP%]{overflow-x:auto;@include mixins.breakpoint-down(medium){display: flex;}}li[_ngcontent-%COMP%]{border-left:.2rem solid var(--primary-alpha);cursor:pointer;flex-basis:9rem;font-weight:300;line-height:1rem;list-style:none;padding:.8rem 1.5rem;transition:background-color .2s ease-in-out;@include mixins.breakpoint-down(medium){border-bottom: .2rem solid var(--primary-alpha); border-left: unset;}&.selected{border-color:var(--primary);color:var(--primary)}&:hover{background-color:var(--primary-alpha)}}']}),e})();function Nt(e,n){if(e&1&&(m(0,"li"),f(1),p()),e&2){var t=n.$implicit;s(1),g(t)}}function xt(e,n){if(e&1&&(m(0,"afb-tab",1)(1,"h3"),f(2),p(),m(3,"h5"),f(4),p(),m(5,"ul"),v(6,Nt,2,1,"li",2),p()()),e&2){var t=n.$implicit;d("title",t.company),s(2),g(t.title),s(2),g(t.date),s(2),d("ngForOf",t.description)}}var wt=function(){var e=C(function n(){N(this,n)});return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["pr-experience"]],inputs:{data:"data"},standalone:!0,features:[I],decls:4,vars:2,consts:[[3,"title",4,"ngFor","ngForOf"],[3,"title"],[4,"ngFor","ngForOf"]],template:function(t,o){t&1&&(m(0,"h4"),f(1),p(),m(2,"afb-tab-group"),v(3,xt,7,4,"afb-tab",0),p()),t&2&&(s(1),g(o.data.title),s(2),d("ngForOf",o.data.jobs))},dependencies:[Ct,Ne,F],styles:[`[_nghost-%COMP%] {
        display: block;
        padding: 4rem 0;
      }
      h3[_ngcontent-%COMP%] {
        font-weight: 300;
        font-size: 1.8rem;
      }
      h5[_ngcontent-%COMP%] {
        font-size: 1rem;
      }
      li[_ngcontent-%COMP%] {
        padding: 0.5rem 0;
      }`],changeDetection:0}),e}(),Mt=function(){var e=C(function n(){N(this,n)});return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["pr-hero"]],inputs:{data:"data"},standalone:!0,features:[I],decls:9,vars:7,consts:[[1,"hero"],["href","mailto:abelfubu@gmail.com",3,"text"]],template:function(t,o){t&1&&(m(0,"section",0)(1,"h1"),f(2),p(),m(3,"h2"),f(4),p(),m(5,"p"),f(6),p(),x(7,"pr-button",1),A(8,"uppercase"),p()),t&2&&(s(2),g(o.data.title),s(2),g(o.data.subtitle),s(2),Ve("",o.data.text," ",o.data.currentWork,"."),s(1),d("text",E(8,5,o.data.cta)))},dependencies:[_e,ge],styles:[`@use 'mixins';
      .hero[_ngcontent-%COMP%] {
        @include mixins.flex(center, flex-start);
        flex-direction: column;
        padding: 4rem 0;
        p {
          max-width: 500px;
          padding: 2rem 0;
        }
      }`]}),e}();function Pt(e,n){if(e&1&&(m(0,"p"),f(1),p()),e&2){var t=n.$implicit;s(1),g(t)}}function Ft(e,n){if(e&1&&(m(0,"div",1)(1,"div",2),x(2,"a",3),p(),m(3,"div",4)(4,"h5"),f(5,"Featured Project"),p(),m(6,"h3"),f(7),p(),m(8,"afb-card")(9,"p"),f(10),p()(),m(11,"div",5),v(12,Pt,2,1,"p",6),p(),m(13,"div",7)(14,"a",8,9),x(16,"i",10),p(),m(17,"a",11,9),x(19,"i",12),p()()()()),e&2){var t=n.$implicit;s(1),G("background-image","url("+t.img+")"),s(1),d("href",t.link,P),z("aria-label",t.title),s(5),g(t.title),s(3),g(t.description),s(2),d("ngForOf",t.techs),s(2),d("href",t.githubLink,P),s(3),d("href",t.link,P)}}var Ot=function(){var e=C(function n(){N(this,n),this.projects=[]});return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["pr-projects"]],inputs:{projects:"projects"},standalone:!0,features:[I],decls:3,vars:1,consts:[["class","grid",4,"ngFor","ngForOf"],[1,"grid"],[1,"project-image"],["target","_blank","rel","noreferrer",3,"href"],[1,"project-description"],[1,"techs"],[4,"ngFor","ngForOf"],[1,"links"],["target","_blank","aria-label","Github","rel","noreferrer",3,"href"],["hover",""],[1,"fab","fa-github-square"],["target","_blank","aria-label","See more","rel","noreferrer",3,"href"],[1,"fas","fa-link"]],template:function(t,o){t&1&&(m(0,"h4"),f(1,"Some things I've Built"),p(),v(2,Ft,20,9,"div",0)),t&2&&(s(2),d("ngForOf",o.projects))},dependencies:[F,Ce],styles:[`@use 'mixins';

      [_nghost-%COMP%] {
        display: block;
        padding: 4rem 0;
      }

      h5[_ngcontent-%COMP%] {
        color: var(--primary);
        font-size: 0.8rem;
        padding: 0;
      }

      h3[_ngcontent-%COMP%] {
        font-size: 1.6rem;
      }

      .grid[_ngcontent-%COMP%] {
        display: grid;
        grid-auto-rows: 25rem;
        grid-template-columns: 1.2fr 1.2fr;
        padding: 3rem 0;
        @include mixins.breakpoint-down(small) {
          grid-auto-rows: auto;
          grid-template-columns: 100%;
        }

        &:nth-child(even) {
          .project-image {
            margin-left: -2rem;
            margin-right: 0;
            order: 2;
          }

          .project-description {
            margin-left: 0;
            margin-right: -2rem;
            order: 1;
            text-align: start;
          }

          .techs {
            justify-content: flex-start;
          }

          .links a {
            margin-left: 0;
            margin-right: 1rem;
          }
        }
      }

      .project-image[_ngcontent-%COMP%] {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: var(--radius-sm);
        margin-right: -2rem;
        overflow: hidden;
        position: relative;

        @include mixins.breakpoint-down(small) {
          height: 25rem;
          margin: 0 !important;
          order: 2;
        }

        &::before {
          background-color: var(--primary-alpha);
          content: '';
          inset: 0;
          mix-blend-mode: screen;
          position: absolute;
          transition: background-color 0.52s ease-in-out;
        }

        &:hover::before {
          background-color: transparent;
        }

        a {
          inset: 0;
          position: absolute;
        }
      }

      .project-description[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: -2rem;
        text-align: end;
        z-index: 2;

        @include mixins.breakpoint-down(small) {
          margin: 0 !important;
          order: 1;
          text-align: start;
        }
      }

      .techs[_ngcontent-%COMP%] {
        column-gap: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;

        @include mixins.breakpoint-down(small) {
          justify-content: flex-start;
        }
      }

      md-card[_ngcontent-%COMP%] {
        margin: 1rem 0;
      }

      .links[_ngcontent-%COMP%] {
        cursor: pointer;
        font-size: 1.3rem;
        padding: 1rem 0;

        a {
          color: var(--primary-alpha);
          font-size: 1.5rem;
          margin-left: 1rem;

          &:hover {
            color: var(--primary);
          }
        }
      }`]}),e}();function Dt(e,n){if(e&1&&(m(0,"a",2)(1,"afb-card",3)(2,"div",4),x(3,"i",5),m(4,"a",6),x(5,"i",7),p()(),m(6,"p"),f(7),p(),m(8,"span",8),f(9),p()()()),e&2){var t=n.$implicit,o=n.index,r=w();d("href",t.html_url,P),z("aria-label",t.name),s(1),d("bgImage","https://picsum.photos/300/200?"+r.letters[o]),s(3),d("href",t.html_url,P)("title",t.name),z("aria-label",t.name),s(3),g(t.name),s(2),g(t.language)}}var Tt=function(){var e=C(function n(){N(this,n),this.repos=[],this.letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]});return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["pr-repositories"]],inputs:{repos:"repos"},standalone:!0,features:[I],decls:4,vars:1,consts:[[1,"grid"],["class","card-link","target","_blank","rel","noreferrer",3,"href",4,"ngFor","ngForOf"],["target","_blank","rel","noreferrer",1,"card-link",3,"href"],[3,"bgImage"],[1,"card-header"],[1,"fa","fa-folder"],["target","_blank","rel","noreferrer",3,"href","title"],[1,"fab","fa-github-square"],[1,"language"]],template:function(t,o){t&1&&(m(0,"h4"),f(1,"Github Repositories"),p(),m(2,"div",0),v(3,Dt,10,8,"a",1),p()),t&2&&(s(3),d("ngForOf",o.repos))},dependencies:[F,Ce],styles:[`@use 'mixins';

      [_nghost-%COMP%] {
        display: block;
        padding: 4rem 0;
      }

      .grid[_ngcontent-%COMP%] {
        @include mixins.auto-grid(15rem, 0.5rem);
        display: grid;
        padding: 2rem 0;
      }

      md-card[_ngcontent-%COMP%] {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .card-header[_ngcontent-%COMP%] {
        align-items: center;
        display: flex;
        justify-content: space-between;

        a,
        .fa-folder {
          color: var(--primary-alpha);
          font-size: 1.5rem;
        }

        a:hover {
          color: var(--primary);
        }
      }

      p[_ngcontent-%COMP%] {
        font-weight: 700;
      }

      .card-link[_ngcontent-%COMP%] {
        color: inherit;
        text-decoration: none;
      }

      .description[_ngcontent-%COMP%] {
        align-items: bottom;
        display: flex;
        flex: 1;
        font-size: 0.8rem;
        font-weight: 300;
        line-height: 1rem;
        padding: 0.5rem 0;
      }

      .language[_ngcontent-%COMP%] {
        font-size: 0.75rem;
        font-weight: 700;
        opacity: 0.8;
        padding-top: 0.5rem;
      }`]}),e}();function kt(e,n,t){return n=We(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function se(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?le(Object(t),!0).forEach(function(o){kt(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function jt(e){if(Array.isArray(e))return e}function St(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,r,l,c,u=[],h=!0,y=!1;try{if(l=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;h=!1}else for(;!(h=(o=l.call(t)).done)&&(u.push(o.value),u.length!==n);h=!0);}catch(_){y=!0,r=_}finally{try{if(!h&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(y)throw r}}return u}}function At(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Et(e,n){return jt(e)||St(e,n)||ze(e,n)||At()}var Bt=function(){var e=function(){function n(){N(this,n),this.http=be(Le),this.staticData$=this.http.get("/data.json").pipe(ie(),ae(function(){return oe})),this.githubRepos$=this.http.get("https://api.github.com/users/abelfubu/repos").pipe(ie())}return C(n,[{key:"getData",value:function(){return it([this.staticData$,this.githubRepos$]).pipe(L(function(o){var r=Et(o,2),l=r[0],c=r[1];return se(se({},l),{},{repos:c})}),ae(function(o){return console.log(o),oe}))}}]),n}();return e.ɵfac=function(t){return new(t||e)},e.ɵprov=B({token:e,factory:e.ɵfac,providedIn:"root"}),e}(),Ht=["*"],xe=function(){var e=C(function n(){N(this,n),this.maxWidth=1100,this.width=this.maxWidth+"px"});return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["pr-container"]],hostVars:2,hostBindings:function(t,o){t&2&&G("max-width",o.width)},inputs:{maxWidth:"maxWidth"},standalone:!0,features:[I],ngContentSelectors:Ht,decls:1,vars:0,template:function(t,o){t&1&&(D(),T(0))},styles:[`@use 'mixins';

      [_nghost-%COMP%] {
        display: block;
        margin: auto;
        padding: 2rem 4rem;

        @include mixins.breakpoint-down(medium) {
          padding: 2rem;
        }

        @include mixins.breakpoint-down(small) {
          padding: 1rem;
        }
      }`]}),e}();function me(e){return Array.isArray(e)?e:[e]}let $;try{$=typeof Intl<"u"&&Intl.v8BreakIterator}catch{$=!1}let Rt=(()=>{class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Qe(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||$)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return e.ɵfac=function(t){return new(t||e)(k($e))},e.ɵprov=B({token:e,factory:e.ɵfac,providedIn:"root"}),e})();const pe=new Set;let M,Vt=(()=>{class e{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):zt}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Wt(t),this._matchMedia(t)}}return e.ɵfac=function(t){return new(t||e)(k(Rt))},e.ɵprov=B({token:e,factory:e.ɵfac,providedIn:"root"}),e})();function Wt(e){if(!pe.has(e))try{M||(M=document.createElement("style"),M.setAttribute("type","text/css"),document.head.appendChild(M)),M.sheet&&(M.sheet.insertRule(`@media ${e} {body{ }}`,0),pe.add(e))}catch(n){console.error(n)}}function zt(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}let Lt=(()=>{class e{constructor(t,o){this._mediaMatcher=t,this._zone=o,this._queries=new Map,this._destroySubject=new de}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return ce(me(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){const r=ce(me(t)).map(c=>this._registerQuery(c).observable);let l=Ue(r);return l=qe(l.pipe(Ke(1)),l.pipe(st(1),lt(0))),l.pipe(L(c=>{const u={matches:!1,breakpoints:{}};return c.forEach(({matches:h,query:y})=>{u.matches=u.matches||h,u.breakpoints[y]=h}),u}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const o=this._mediaMatcher.matchMedia(t),l={observable:new ue(c=>{const u=h=>this._zone.run(()=>c.next(h));return o.addListener(u),()=>{o.removeListener(u)}}).pipe(Xe(o),L(({matches:c})=>({query:t,matches:c})),mt(this._destroySubject)),mql:o};return this._queries.set(t,l),l}}return e.ɵfac=function(t){return new(t||e)(k(Vt),k(Ge))},e.ɵprov=B({token:e,factory:e.ɵfac,providedIn:"root"}),e})();function ce(e){return e.map(n=>n.split(",")).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}const $t={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Qt=["hover"];function Gt(e,n){if(e&1){var t=U();m(0,"i",3),q("click",function(){K(t);var r=w(2);return X(r.toggleHidden())}),p()}}function Ut(e,n){if(e&1){var t=U();m(0,"pr-container"),f(1," LOGO "),m(2,"nav",1),q("click",function(){K(t);var c=w();return X(c.toggleHidden())}),m(3,"ul"),T(4),p()(),v(5,Gt,1,0,"i",2),p()}if(e&2){var o=n.ngIf,r=w();s(2),ve("mobile",o.matches)("hidden",o.matches&&r.hidden),s(3),d("ngIf",o.matches)}}var qt=["*"],Kt=function(){var e=function(){function n(t){N(this,n),this.observer=t,this.isMatched$=this.observer.observe($t.XSmall),this.hidden=!0}return C(n,[{key:"toggleHidden",value:function(){this.hidden=!this.hidden}}]),n}();return e.ɵfac=function(t){return new(t||e)(Ze(Lt))},e.ɵcmp=b({type:e,selectors:[["pr-header"]],contentQueries:function(t,o,r){if(t&1&&ye(r,Qt,4),t&2){var l;V(l=W())&&(o.lis=l)}},standalone:!0,features:[I],ngContentSelectors:qt,decls:2,vars:3,consts:[[4,"ngIf"],[3,"click"],["class","fas fa-bars",3,"click",4,"ngIf"],[1,"fas","fa-bars",3,"click"]],template:function(t,o){t&1&&(D(),v(0,Ut,6,5,"pr-container",0),A(1,"async")),t&2&&d("ngIf",E(1,1,o.isMatched$))},dependencies:[O,Ie,xe],styles:[`@use 'mixins';
      @use 'fonts';

      [_nghost-%COMP%] {
        background-color: var(--dark);
        box-shadow: 0 1px 6px 1px #23232350;
        font-family: fonts.$title;
        height: 4.5rem;
      }

      md-container[_ngcontent-%COMP%] {
        @include mixins.flex;
      }

      nav.mobile[_ngcontent-%COMP%] {
        background-color: var(--dark);
        display: grid;
        font-size: 3rem;
        inset: 0;
        justify-content: center;
        opacity: 1;
        padding-top: 40vh;
        position: fixed;
        transform: translateX(0);
        transition: transform 0.5s ease, opacity 0.5s ease;
        z-index: 1;

        ul {
          flex-direction: column;
        }

        &::ng-deep li,
        &::ng-deep span {
          padding: 2rem 0;
        }

        &::before {
          content: '\f00d';
          cursor: pointer;
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          inset: 6.25rem 0 0 0;
          margin: auto;
          position: absolute;
          width: 1rem;
        }
      }

      ul[_ngcontent-%COMP%] {
        align-items: center;
        counter-reset: css-counter 0;
        display: flex;
        list-style: none;
      }

      ul[_ngcontent-%COMP%]  li {
        counter-increment: css-counter 1;
        cursor: pointer;
        margin-left: 0.5rem;
        padding: 0.5rem 1rem;

        &::before {
          color: var(--primary);
          content: '0' counter(css-counter) '.';
        }
      }

      nav.mobile.hidden[_ngcontent-%COMP%] {
        opacity: 0;
        transform: translateX(100%);
      }

      .fa-bars[_ngcontent-%COMP%] {
        cursor: pointer;
      }`]}),e}();function Xt(e,n){if(e&1&&(Ye(0),x(1,"pr-header"),m(2,"pr-container"),x(3,"pr-hero",1)(4,"pr-about",1)(5,"pr-experience",1)(6,"pr-projects",2)(7,"pr-repositories",3)(8,"pr-contact",1),p(),et()),e&2){var t=n.ngIf;s(3),d("data",t.hero),s(1),d("data",t.about),s(1),d("data",t.experience),s(1),d("projects",t.projects),s(1),d("repos",t.repos),s(1),d("data",t.contact)}}var Jt=function(){var e=C(function n(){N(this,n),this.data$=be(Bt).getData().pipe(Je(console.log))});return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=b({type:e,selectors:[["app-home"]],standalone:!0,features:[I],decls:2,vars:3,consts:[[4,"ngIf"],[3,"data"],[3,"projects"],[3,"repos"]],template:function(t,o){t&1&&(v(0,Xt,9,6,"ng-container",0),A(1,"async")),t&2&&d("ngIf",E(1,1,o.data$))},dependencies:[O,Ie,Kt,xe,Mt,ut,wt,Ot,Tt,yt],encapsulation:2}),e}();export{Jt as default};
