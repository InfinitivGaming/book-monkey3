(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5tAl":function(l,n,u){"use strict";u.d(n,"a",function(){return i});var e=u("mrSG"),t=u("FFOo");function i(l){return void 0===l&&(l=-1),function(n){return n.lift(new o(l,n))}}var o=function(){function l(l,n){this.count=l,this.source=n}return l.prototype.call=function(l,n){return n.subscribe(new r(l,this.count,this.source))},l}(),r=function(l){function n(n,u,e){var t=l.call(this,n)||this;return t.count=u,t.source=e,t}return e.c(n,l),n.prototype.error=function(n){if(!this.isStopped){var u=this.source,e=this.count;if(0===e)return l.prototype.error.call(this,n);e>-1&&(this.count=e-1),u.subscribe(this._unsubscribeAndRecycle())}},n}(t.a)},XXst:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=function(){return function(){}}(),o=u("pMnS"),r=u("ZYCi"),c=u("Ip0R"),d=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function a(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"div",[["class","ui menu"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,5,"a",[["class","item"],["routerLink","home"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](2,671744,[[2,4]],0,r.o,[r.l,r.a,c.h],{routerLink:[0,"routerLink"]},null),e["\u0275did"](3,1720320,null,2,r.n,[r.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](7,0,null,null,5,"a",[["class","item"],["routerLink","books"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](8,671744,[[4,4]],0,r.o,[r.l,r.a,c.h],{routerLink:[0,"routerLink"]},null),e["\u0275did"](9,1720320,null,2,r.n,[r.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,3,{links:1}),e["\u0275qud"](603979776,4,{linksWithHrefs:1}),(l()(),e["\u0275ted"](-1,null,["B\xfccher"])),(l()(),e["\u0275eld"](13,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](14,212992,null,0,r.q,[r.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null)],function(l,n){l(n,2,0,"home"),l(n,3,0,"active"),l(n,8,0,"books"),l(n,9,0,"active"),l(n,14,0)},function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href),l(n,7,0,e["\u0275nov"](n,8).target,e["\u0275nov"](n,8).href)})}function s(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-root",[],null,null,null,a,d)),e["\u0275did"](1,49152,null,0,i,[],null,null)],null,null)}var f=e["\u0275ccf"]("bm-root",i,s,{},{},[]),p=u("K9Ia"),b=u("Gi3i"),h=u("ad02"),m=u("xMyE"),v=u("15JJ"),k=u("XlPw"),g=u("5tAl"),y=u("67Y/"),R=u("9Z1F"),w=function(){return(w=Object.assign||function(l){for(var n,u=1,e=arguments.length;u<e;u++)for(var t in n=arguments[u])Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t]);return l}).apply(this,arguments)},O=function(){function l(){}return l.fromRaw=function(l){return w({},l,{published:new Date(l.published)})},l}(),I=u("t/Na"),j=function(){function l(l){this.http=l,this.api="https://book-monkey2-api.angular-buch.com"}return l.prototype.getAll=function(){return this.http.get(this.api+"/books").pipe(Object(g.a)(3),Object(y.a)(function(l){return l.map(function(l){return O.fromRaw(l)})}),Object(R.a)(this.errorHandler))},l.prototype.getSingle=function(l){return this.http.get(this.api+"/book/"+l).pipe(Object(g.a)(3),Object(y.a)(function(l){return O.fromRaw(l)}),Object(R.a)(this.errorHandler))},l.prototype.remove=function(l){return this.http.delete(this.api+"/book/"+l,{responseType:"text"}).pipe(Object(R.a)(this.errorHandler))},l.prototype.getAllSearch=function(l){return this.http.get(this.api+"/books/search/"+l).pipe(Object(g.a)(3),Object(y.a)(function(l){return l.map(function(l){return O.fromRaw(l)})}),Object(R.a)(this.errorHandler))},l.prototype.errorHandler=function(l){return Object(k.a)(l)},l.ngInjectableDef=e.defineInjectable({factory:function(){return new l(e.inject(I.c))},token:l,providedIn:"root"}),l}(),C=function(){function l(l){this.bs=l,this.keyup$=new p.a,this.isLoading=!1,this.foundBooks=[]}return l.prototype.ngOnInit=function(){var l=this;this.keyup$.pipe(Object(b.a)(500),Object(h.a)(),Object(m.a)(function(){return l.isLoading=!0}),Object(v.a)(function(n){return l.bs.getAllSearch(n)}),Object(m.a)(function(){return l.isLoading=!1})).subscribe(function(n){return l.foundBooks=n})},l}(),L=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"a",[["class","result"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](1,671744,null,0,r.o,[r.l,r.a,c.h],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,3),(l()(),e["\u0275ted"](3,null,[" "," "]))],function(l,n){var u=l(n,2,0,"..","books",n.context.$implicit.isbn);l(n,1,0,u)},function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href),l(n,3,0,n.context.$implicit.title)})}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"div",[["class","ui search"]],[[2,"loading",null]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","ui icon input"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,[["searchTerm",1]],null,0,"input",[["class","prompt"],["type","text"]],null,[[null,"keyup"]],function(l,n,u){var t=!0;return"keyup"===n&&(t=!1!==l.component.keyup$.next(e["\u0275nov"](l,2).value)&&t),t},null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"i",[["class","search icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,2,"div",[["class","results transition"]],[[2,"visible",null]],null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](6,278528,null,0,c.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,6,0,n.component.foundBooks)},function(l,n){var u=n.component;l(n,0,0,u.isLoading),l(n,4,0,u.foundBooks.length)})}var T=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),B=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Das ist der BookMonkey."])),(l()(),e["\u0275eld"](4,0,null,null,3,"a",[["class","ui red button"],["routerLink","../books"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,5).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](5,671744,null,0,r.o,[r.l,r.a,c.h],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,[" Buchliste ansehen "])),(l()(),e["\u0275eld"](7,0,null,null,0,"i",[["class","right arrow icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Suche"])),(l()(),e["\u0275eld"](10,0,null,null,1,"bm-search",[],null,null,null,A,L)),e["\u0275did"](11,114688,null,0,C,[j],null,null)],function(l,n){l(n,5,0,"../books"),l(n,11,0)},function(l,n){l(n,4,0,e["\u0275nov"](n,5).target,e["\u0275nov"](n,5).href)})}function K(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-home",[],null,null,null,D,B)),e["\u0275did"](1,114688,null,0,T,[],null,null)],function(l,n){l(n,1,0)},null)}var x=e["\u0275ccf"]("bm-home",T,K,{},{},[]),S=function(){return function(){}}(),V=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[["class","ui tiny image"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.book.thumbnails[0].url)})}function $(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[", "]))],null,null)}function H(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" ",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,$)),e["\u0275did"](3,16384,null,0,c.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,!n.context.last)},function(l,n){l(n,1,0,n.context.$implicit)})}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](1,16384,null,0,c.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](2,0,null,null,9,"div",[["class","content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),(l()(),e["\u0275eld"](5,0,null,null,1,"div",[["class","description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","metadata"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,H)),e["\u0275did"](9,278528,null,0,c.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](11,null,[" ISBN "," "]))],function(l,n){var u=n.component;l(n,1,0,u.book.thumbnails&&u.book.thumbnails[0]&&u.book.thumbnails[0].url),l(n,9,0,u.book.authors)},function(l,n){var u=n.component;l(n,4,0,u.book.title),l(n,6,0,u.book.subtitle),l(n,11,0,u.book.isbn)})}var N=function(){function l(l){this.bs=l}return l.prototype.ngOnInit=function(){var l=this;this.bs.getAll().subscribe(function(n){return l.books=n})},l}(),X=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"bm-book-list-item",[["class","item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick()&&t),t},M,V)),e["\u0275did"](1,16384,null,0,r.m,[r.l,r.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275did"](2,49152,null,0,S,[],{book:[0,"book"]},null)],function(l,n){l(n,1,0,n.context.$implicit.isbn),l(n,2,0,n.context.$implicit)},null)}function J(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","ui active dimmer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","ui large text loader"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Daten werden geladen..."]))],null,null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Es wurden noch keine B\xfccher eingetragen."]))],null,null)}function G(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"div",[["class","ui middle aligned selection divided list"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,q)),e["\u0275did"](2,278528,null,0,c.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,J)),e["\u0275did"](4,16384,null,0,c.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](6,16384,null,0,c.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.books),l(n,4,0,!u.books),l(n,6,0,u.books&&!u.books.length)},null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-book-list",[],null,null,null,G,X)),e["\u0275did"](1,114688,null,0,N,[j],null,null)],function(l,n){l(n,1,0)},null)}var W=e["\u0275ccf"]("bm-book-list",N,_,{},{},[]),Y=function(){function l(l,n,u){this.bs=l,this.router=n,this.route=u}return l.prototype.ngOnInit=function(){var l=this;this.bs.getSingle(this.route.snapshot.params.isbn).subscribe(function(n){return l.book=n})},l.prototype.getRating=function(l){return new Array(l)},l.prototype.removeBook=function(){var l=this;confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe(function(n){return l.router.navigate(["../"],{relativeTo:l.route})})},l}(),Z=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" ",""])),(l()(),e["\u0275eld"](2,0,null,null,0,"br",[],null,null,null,null,null))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function Q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"i",[["class","yellow star icon"]],null,null,null,null,null))],null,null)}function U(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.context.$implicit.url)})}function ll(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,34,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275eld"](3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),(l()(),e["\u0275eld"](5,0,null,null,0,"div",[["class","ui divider"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,18,"div",[["class","ui grid"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Autoren"])),(l()(),e["\u0275and"](16777216,null,null,1,null,z)),e["\u0275did"](11,278528,null,0,c.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](12,0,null,null,3,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ISBN"])),(l()(),e["\u0275ted"](15,null,[" "," "])),(l()(),e["\u0275eld"](16,0,null,null,3,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Erschienen"])),(l()(),e["\u0275ted"](19,null,[" "," "])),(l()(),e["\u0275eld"](20,0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Rating"])),(l()(),e["\u0275and"](16777216,null,null,1,null,Q)),e["\u0275did"](24,278528,null,0,c.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](25,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Beschreibung"])),(l()(),e["\u0275eld"](27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](28,null,["",""])),(l()(),e["\u0275eld"](29,0,null,null,2,"div",[["class","ui small images"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,U)),e["\u0275did"](31,278528,null,0,c.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](32,0,null,null,2,"button",[["class","ui tiny red labeled icon button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.removeBook()&&e),e},null,null)),(l()(),e["\u0275eld"](33,0,null,null,0,"i",[["class","remove icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Buch l\xf6schen "]))],function(l,n){var u=n.component;l(n,11,0,u.book.authors),l(n,24,0,u.getRating(u.book.rating)),l(n,31,0,u.book.thumbnails)},function(l,n){var u=n.component;l(n,2,0,u.book.title),l(n,4,0,u.book.subtitle),l(n,15,0,u.book.isbn),l(n,19,0,u.book.published),l(n,28,0,u.book.description)})}function nl(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"div",[["class","ui active centered inline loader"]],null,null,null,null,null))],null,null)}function ul(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,ll)),e["\u0275did"](1,16384,null,0,c.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e["\u0275and"](0,[["errorMessage",2]],null,0,null,nl))],function(l,n){l(n,1,0,n.component.book,e["\u0275nov"](n,2))},null)}function el(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"bm-book-details",[],null,null,null,ul,Z)),e["\u0275did"](1,114688,null,0,Y,[j,r.l,r.a],null,null)],function(l,n){l(n,1,0)},null)}var tl=e["\u0275ccf"]("bm-book-details",Y,el,{},{},[]),il=function(){return function(){}}();u.d(n,"AppModuleNgFactory",function(){return ol});var ol=e["\u0275cmf"](t,[i],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,f,x,W,tl]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,c.l,c.k,[e.LOCALE_ID,[2,c.s]]),e["\u0275mpd"](4608,I.h,I.n,[c.c,e.PLATFORM_ID,I.l]),e["\u0275mpd"](4608,I.o,I.o,[I.h,I.m]),e["\u0275mpd"](5120,I.a,function(l){return[l]},[I.o]),e["\u0275mpd"](4608,I.k,I.k,[]),e["\u0275mpd"](6144,I.i,null,[I.k]),e["\u0275mpd"](4608,I.g,I.g,[I.i]),e["\u0275mpd"](6144,I.b,null,[I.g]),e["\u0275mpd"](4608,I.f,I.j,[I.b,e.Injector]),e["\u0275mpd"](4608,I.c,I.c,[I.f]),e["\u0275mpd"](1073742336,c.b,c.b,[]),e["\u0275mpd"](1073742336,I.e,I.e,[]),e["\u0275mpd"](1073742336,I.d,I.d,[]),e["\u0275mpd"](1073742336,r.p,r.p,[[2,r.v],[2,r.l]]),e["\u0275mpd"](1073742336,il,il,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](256,I.l,"XSRF-TOKEN",[]),e["\u0275mpd"](256,I.m,"X-XSRF-TOKEN",[]),e["\u0275mpd"](1024,r.j,function(){return[[{path:"",component:i,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:T},{path:"books",component:N},{path:"books/:isbn",component:Y}]}]]},[])])})},XlPw:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var e=u("6blF");function t(l,n){return new e.a(n?function(u){return n.schedule(i,0,{error:l,subscriber:u})}:function(n){return n.error(l)})}function i(l){l.subscriber.error(l.error)}}}]);