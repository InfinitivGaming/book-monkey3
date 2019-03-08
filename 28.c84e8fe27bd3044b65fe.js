(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{ykok:function(n,l,o){"use strict";o.r(l);var u=o("CcnG"),t=function(){return function(){}}(),e=o("pMnS"),r=o("gIcY"),i=o("Ip0R"),a=function(){function n(){this.allMessages={title:{required:"Ein Buchtitel muss angegeben werden."},isbn:{required:"Es muss eine ISBN angegeben werden.",isbnFormat:"Die ISBN muss aus 10 oder 13 Zeichen bestehen.",isbnExists:"Die ISBN existiert bereits."},published:{required:"Es muss ein Erscheinungsdatum angegeben werden."},authors:{atLeastOneAuthor:"Es muss ein Autor angegeben werden."}}}return n.prototype.ngOnInit=function(){},n.prototype.errorsForControl=function(){var n=this.allMessages[this.controlName];return this.control&&this.control.errors&&n&&this.control.dirty?Object.keys(this.control.errors).map(function(l){return n[l]}):null},n}(),s=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function d(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","ui negative message"]],null,null,null,null,null)),(n()(),u["\u0275ted"](1,null,[" ","\n"]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function c(n){return u["\u0275vid"](0,[(n()(),u["\u0275and"](16777216,null,null,1,null,d)),u["\u0275did"](1,278528,null,0,i.j,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,1,0,l.component.errorsForControl())},null)}var g=o("7wRM"),m=o("mrSG"),p=function(){function n(){}return n.isbnFormat=function(n){if(!n.value)return null;var l=n.value.replace(/-/g,"");return/(^\d{10}$)|(^\d{13}$)/.test(l)?null:{isbnFormat:{valid:!1}}},n.atLeastOneAuthor=function(n){return n.controls.some(function(n){return n.value})?null:{atLeastOneAuthor:{valid:!1}}},n}(),v=o("F/XL"),C=o("67Y/"),f=o("9Z1F"),b=o("a3UO"),h=function(){function n(n){this.bs=n}return n.prototype.validate=function(n){return this.bs.check(n.value).pipe(Object(C.a)(function(n){return!1===n?null:{isbnExists:{valid:!1}}}),Object(f.a)(function(){return Object(v.a)(null)}))},n.ngInjectableDef=u.defineInjectable({factory:function(){return new n(u.inject(b.a))},token:n,providedIn:"root"}),n}(),_=function(){function n(n,l){this.fb=n,this.bookExistsValidator=l,this.editing=!1,this.submitBook=new u.EventEmitter}return n.prototype.ngOnInit=function(){this.initForm()},n.prototype.ngOnChanges=function(){this.initForm(),this.setFormValues(this.book)},n.prototype.setFormValues=function(n){this.bookForm.patchValue(n),this.bookForm.setControl("authors",this.buildAuthorsArray(n.authors)),this.bookForm.setControl("thumbnails",this.buildThumbnailsArray(n.thumbnails))},n.prototype.initForm=function(){this.bookForm||(this.bookForm=this.fb.group({title:["",r.Validators.required],subtitle:[""],isbn:[{value:"",disabled:this.editing},[r.Validators.required,p.isbnFormat],this.editing?null:[this.bookExistsValidator]],description:[""],authors:this.buildAuthorsArray([""]),thumbnails:this.buildThumbnailsArray([{title:"",url:""}]),published:[]}))},n.prototype.buildAuthorsArray=function(n){return this.fb.array(n,p.atLeastOneAuthor)},n.prototype.buildThumbnailsArray=function(n){var l=this;return this.fb.array(n.map(function(n){return l.fb.group(n)}))},Object.defineProperty(n.prototype,"authors",{get:function(){return this.bookForm.get("authors")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"thumbnails",{get:function(){return this.bookForm.get("thumbnails")},enumerable:!0,configurable:!0}),n.prototype.addAuthorControl=function(){this.authors.push(this.fb.control(""))},n.prototype.addThumbnailControl=function(){this.thumbnails.push(this.fb.group({url:"",title:""}))},n.prototype.submitForm=function(){var n=this.bookForm.value,l=n.authors.filter(function(n){return n}),o=n.thumbnails.filter(function(n){return n.url}),u=m.a({},n,{isbn:this.editing?this.book.isbn:n.isbn,authors:l,thumbnails:o});this.submitBook.emit(u),this.bookForm.reset()},n}(),N=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function F(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,6,"div",[["class","sixteen wide field"]],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,5,"input",[["placeholder","Autor"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,2)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,2).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,2)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,2)._compositionEnd(o.target.value)&&t),t},null,null)),u["\u0275did"](2,16384,null,0,r.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),u["\u0275did"](4,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),u["\u0275did"](6,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null)],function(n,l){n(l,4,0,l.context.index)},function(n,l){n(l,1,0,u["\u0275nov"](l,6).ngClassUntouched,u["\u0275nov"](l,6).ngClassTouched,u["\u0275nov"](l,6).ngClassPristine,u["\u0275nov"](l,6).ngClassDirty,u["\u0275nov"](l,6).ngClassValid,u["\u0275nov"](l,6).ngClassInvalid,u["\u0275nov"](l,6).ngClassPending)})}function A(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,17,"div",[["class","fields"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u["\u0275did"](1,212992,null,0,r.FormGroupName,[[3,r.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.ControlContainer,null,[r.FormGroupName]),u["\u0275did"](3,16384,null,0,r.NgControlStatusGroup,[[4,r.ControlContainer]],null,null),(n()(),u["\u0275eld"](4,0,null,null,6,"div",[["class","nine wide field"]],null,null,null,null,null)),(n()(),u["\u0275eld"](5,0,null,null,5,"input",[["formControlName","url"],["placeholder","URL"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,6)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,6).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,6)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,6)._compositionEnd(o.target.value)&&t),t},null,null)),u["\u0275did"](6,16384,null,0,r.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),u["\u0275did"](8,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),u["\u0275did"](10,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(n()(),u["\u0275eld"](11,0,null,null,6,"div",[["class","seven wide field"]],null,null,null,null,null)),(n()(),u["\u0275eld"](12,0,null,null,5,"input",[["formControlName","title"],["placeholder","Titel"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,13)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,13).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,13)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,13)._compositionEnd(o.target.value)&&t),t},null,null)),u["\u0275did"](13,16384,null,0,r.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),u["\u0275did"](15,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),u["\u0275did"](17,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null)],function(n,l){n(l,1,0,l.context.index),n(l,8,0,"url"),n(l,15,0,"title")},function(n,l){n(l,0,0,u["\u0275nov"](l,3).ngClassUntouched,u["\u0275nov"](l,3).ngClassTouched,u["\u0275nov"](l,3).ngClassPristine,u["\u0275nov"](l,3).ngClassDirty,u["\u0275nov"](l,3).ngClassValid,u["\u0275nov"](l,3).ngClassInvalid,u["\u0275nov"](l,3).ngClassPending),n(l,5,0,u["\u0275nov"](l,10).ngClassUntouched,u["\u0275nov"](l,10).ngClassTouched,u["\u0275nov"](l,10).ngClassPristine,u["\u0275nov"](l,10).ngClassDirty,u["\u0275nov"](l,10).ngClassValid,u["\u0275nov"](l,10).ngClassInvalid,u["\u0275nov"](l,10).ngClassPending),n(l,12,0,u["\u0275nov"](l,17).ngClassUntouched,u["\u0275nov"](l,17).ngClassTouched,u["\u0275nov"](l,17).ngClassPristine,u["\u0275nov"](l,17).ngClassDirty,u["\u0275nov"](l,17).ngClassValid,u["\u0275nov"](l,17).ngClassInvalid,u["\u0275nov"](l,17).ngClassPending)})}function k(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,75,"form",[["class","ui form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,o){var t=!0,e=n.component;return"submit"===l&&(t=!1!==u["\u0275nov"](n,2).onSubmit(o)&&t),"reset"===l&&(t=!1!==u["\u0275nov"](n,2).onReset()&&t),"ngSubmit"===l&&(t=!1!==e.submitForm()&&t),t},null,null)),u["\u0275did"](1,16384,null,0,r["\u0275angular_packages_forms_forms_bh"],[],null,null),u["\u0275did"](2,540672,null,0,r.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,r.ControlContainer,null,[r.FormGroupDirective]),u["\u0275did"](4,16384,null,0,r.NgControlStatusGroup,[[4,r.ControlContainer]],null,null),(n()(),u["\u0275eld"](5,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Buchtitel"])),(n()(),u["\u0275eld"](7,0,null,null,5,"input",[["formControlName","title"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,8)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,8).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,8)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,8)._compositionEnd(o.target.value)&&t),t},null,null)),u["\u0275did"](8,16384,null,0,r.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),u["\u0275did"](10,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),u["\u0275did"](12,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(n()(),u["\u0275eld"](13,0,null,null,1,"bm-form-messages",[["controlName","title"]],null,null,null,c,s)),u["\u0275did"](14,114688,null,0,a,[],{control:[0,"control"],controlName:[1,"controlName"]},null),(n()(),u["\u0275eld"](15,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Untertitel"])),(n()(),u["\u0275eld"](17,0,null,null,5,"input",[["formControlName","subtitle"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,18)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,18).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,18)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,18)._compositionEnd(o.target.value)&&t),t},null,null)),u["\u0275did"](18,16384,null,0,r.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),u["\u0275did"](20,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),u["\u0275did"](22,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(n()(),u["\u0275eld"](23,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["ISBN"])),(n()(),u["\u0275eld"](25,0,null,null,5,"input",[["formControlName","isbn"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,26)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,26).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,26)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,26)._compositionEnd(o.target.value)&&t),t},null,null)),u["\u0275did"](26,16384,null,0,r.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),u["\u0275did"](28,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),u["\u0275did"](30,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(n()(),u["\u0275eld"](31,0,null,null,1,"bm-form-messages",[["controlName","isbn"]],null,null,null,c,s)),u["\u0275did"](32,114688,null,0,a,[],{control:[0,"control"],controlName:[1,"controlName"]},null),(n()(),u["\u0275eld"](33,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Erscheinungsdatum"])),(n()(),u["\u0275eld"](35,0,null,null,6,"input",[["formControlName","published"],["type","date"],["useValueAsDate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,36)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,36).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,36)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,36)._compositionEnd(o.target.value)&&t),"input"===l&&(t=!1!==u["\u0275nov"](n,37).onChange(o.target.valueAsDate)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,37).onTouched()&&t),t},null,null)),u["\u0275did"](36,16384,null,0,r.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275did"](37,16384,null,0,g.DateValueAccessor,[u.Renderer,u.ElementRef],null,null),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n,l){return[n,l]},[r.DefaultValueAccessor,g.DateValueAccessor]),u["\u0275did"](39,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),u["\u0275did"](41,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(n()(),u["\u0275eld"](42,0,null,null,1,"bm-form-messages",[["controlName","published"]],null,null,null,c,s)),u["\u0275did"](43,114688,null,0,a,[],{control:[0,"control"],controlName:[1,"controlName"]},null),(n()(),u["\u0275eld"](44,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Autoren"])),(n()(),u["\u0275eld"](46,0,null,null,1,"button",[["class","ui mini button"],["type","button"]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.addAuthorControl()&&u),u},null,null)),(n()(),u["\u0275ted"](-1,null,[" + Autor "])),(n()(),u["\u0275eld"](48,0,null,null,5,"div",[["class","fields"],["formArrayName","authors"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u["\u0275did"](49,212992,null,0,r.FormArrayName,[[3,r.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.ControlContainer,null,[r.FormArrayName]),u["\u0275did"](51,16384,null,0,r.NgControlStatusGroup,[[4,r.ControlContainer]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,F)),u["\u0275did"](53,278528,null,0,i.j,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),u["\u0275eld"](54,0,null,null,1,"bm-form-messages",[["controlName","authors"]],null,null,null,c,s)),u["\u0275did"](55,114688,null,0,a,[],{control:[0,"control"],controlName:[1,"controlName"]},null),(n()(),u["\u0275eld"](56,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Beschreibung"])),(n()(),u["\u0275eld"](58,0,null,null,5,"textarea",[["formControlName","description"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0;return"input"===l&&(t=!1!==u["\u0275nov"](n,59)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,59).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,59)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,59)._compositionEnd(o.target.value)&&t),t},null,null)),u["\u0275did"](59,16384,null,0,r.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),u["\u0275did"](61,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),u["\u0275did"](63,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(n()(),u["\u0275eld"](64,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Bilder"])),(n()(),u["\u0275eld"](66,0,null,null,1,"button",[["class","ui mini button"],["type","button"]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.addThumbnailControl()&&u),u},null,null)),(n()(),u["\u0275ted"](-1,null,[" + Bild "])),(n()(),u["\u0275eld"](68,0,null,null,5,"div",[["formArrayName","thumbnails"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u["\u0275did"](69,212992,null,0,r.FormArrayName,[[3,r.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.ControlContainer,null,[r.FormArrayName]),u["\u0275did"](71,16384,null,0,r.NgControlStatusGroup,[[4,r.ControlContainer]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,A)),u["\u0275did"](73,278528,null,0,i.j,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),u["\u0275eld"](74,0,null,null,1,"button",[["class","ui button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Speichern "]))],function(n,l){var o=l.component;n(l,2,0,o.bookForm),n(l,10,0,"title"),n(l,14,0,o.bookForm.get("title"),"title"),n(l,20,0,"subtitle"),n(l,28,0,"isbn"),n(l,32,0,o.bookForm.get("isbn"),"isbn"),n(l,39,0,"published"),n(l,43,0,o.bookForm.get("published"),"published"),n(l,49,0,"authors"),n(l,53,0,o.authors.controls),n(l,55,0,o.bookForm.get("authors"),"authors"),n(l,61,0,"description"),n(l,69,0,"thumbnails"),n(l,73,0,o.thumbnails.controls)},function(n,l){var o=l.component;n(l,0,0,u["\u0275nov"](l,4).ngClassUntouched,u["\u0275nov"](l,4).ngClassTouched,u["\u0275nov"](l,4).ngClassPristine,u["\u0275nov"](l,4).ngClassDirty,u["\u0275nov"](l,4).ngClassValid,u["\u0275nov"](l,4).ngClassInvalid,u["\u0275nov"](l,4).ngClassPending),n(l,7,0,u["\u0275nov"](l,12).ngClassUntouched,u["\u0275nov"](l,12).ngClassTouched,u["\u0275nov"](l,12).ngClassPristine,u["\u0275nov"](l,12).ngClassDirty,u["\u0275nov"](l,12).ngClassValid,u["\u0275nov"](l,12).ngClassInvalid,u["\u0275nov"](l,12).ngClassPending),n(l,17,0,u["\u0275nov"](l,22).ngClassUntouched,u["\u0275nov"](l,22).ngClassTouched,u["\u0275nov"](l,22).ngClassPristine,u["\u0275nov"](l,22).ngClassDirty,u["\u0275nov"](l,22).ngClassValid,u["\u0275nov"](l,22).ngClassInvalid,u["\u0275nov"](l,22).ngClassPending),n(l,25,0,u["\u0275nov"](l,30).ngClassUntouched,u["\u0275nov"](l,30).ngClassTouched,u["\u0275nov"](l,30).ngClassPristine,u["\u0275nov"](l,30).ngClassDirty,u["\u0275nov"](l,30).ngClassValid,u["\u0275nov"](l,30).ngClassInvalid,u["\u0275nov"](l,30).ngClassPending),n(l,35,0,u["\u0275nov"](l,41).ngClassUntouched,u["\u0275nov"](l,41).ngClassTouched,u["\u0275nov"](l,41).ngClassPristine,u["\u0275nov"](l,41).ngClassDirty,u["\u0275nov"](l,41).ngClassValid,u["\u0275nov"](l,41).ngClassInvalid,u["\u0275nov"](l,41).ngClassPending),n(l,48,0,u["\u0275nov"](l,51).ngClassUntouched,u["\u0275nov"](l,51).ngClassTouched,u["\u0275nov"](l,51).ngClassPristine,u["\u0275nov"](l,51).ngClassDirty,u["\u0275nov"](l,51).ngClassValid,u["\u0275nov"](l,51).ngClassInvalid,u["\u0275nov"](l,51).ngClassPending),n(l,58,0,u["\u0275nov"](l,63).ngClassUntouched,u["\u0275nov"](l,63).ngClassTouched,u["\u0275nov"](l,63).ngClassPristine,u["\u0275nov"](l,63).ngClassDirty,u["\u0275nov"](l,63).ngClassValid,u["\u0275nov"](l,63).ngClassInvalid,u["\u0275nov"](l,63).ngClassPending),n(l,68,0,u["\u0275nov"](l,71).ngClassUntouched,u["\u0275nov"](l,71).ngClassTouched,u["\u0275nov"](l,71).ngClassPristine,u["\u0275nov"](l,71).ngClassDirty,u["\u0275nov"](l,71).ngClassValid,u["\u0275nov"](l,71).ngClassInvalid,u["\u0275nov"](l,71).ngClassPending),n(l,74,0,o.bookForm.invalid)})}var E=function(){function n(n,l,o){this.bs=n,this.route=l,this.router=o}return n.prototype.ngOnInit=function(){},n.prototype.createBook=function(n){var l=this;this.bs.create(n).subscribe(function(){l.router.navigate(["../..","books"],{relativeTo:l.route})})},n}(),y=o("ZYCi"),O=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function S(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Buch hinzuf\xfcgen"])),(n()(),u["\u0275eld"](2,0,null,null,1,"bm-book-form",[],null,[[null,"submitBook"]],function(n,l,o){var u=!0;return"submitBook"===l&&(u=!1!==n.component.createBook(o)&&u),u},k,N)),u["\u0275did"](3,638976,null,0,_,[r.FormBuilder,h],null,{submitBook:"submitBook"})],function(n,l){n(l,3,0)},null)}function R(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"bm-create-book",[],null,null,null,S,O)),u["\u0275did"](1,114688,null,0,E,[b.a,y.a,y.l],null,null)],function(n,l){n(l,1,0)},null)}var V=u["\u0275ccf"]("bm-create-book",E,R,{},{},[]),I=o("15JJ"),D=function(){function n(n,l,o){this.bs=n,this.route=l,this.router=o}return n.prototype.ngOnInit=function(){var n=this;this.route.paramMap.pipe(Object(C.a)(function(n){return n.get("isbn")}),Object(I.a)(function(l){return n.bs.getSingle(l)})).subscribe(function(l){return n.book=l})},n.prototype.updateBook=function(n){var l=this;this.bs.update(n).subscribe(function(){l.router.navigate(["../../..","books",n.isbn],{relativeTo:l.route})})},n}(),T=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function U(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"bm-book-form",[],null,[[null,"submitBook"]],function(n,l,o){var u=!0;return"submitBook"===l&&(u=!1!==n.component.updateBook(o)&&u),u},k,N)),u["\u0275did"](1,638976,null,0,_,[r.FormBuilder,h],{book:[0,"book"],editing:[1,"editing"]},{submitBook:"submitBook"})],function(n,l){n(l,1,0,l.component.book,!0)},null)}function B(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Buch bearbeiten"])),(n()(),u["\u0275and"](16777216,null,null,1,null,U)),u["\u0275did"](3,16384,null,0,i.k,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.book)},null)}function P(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"bm-edit-book",[],null,null,null,B,T)),u["\u0275did"](1,114688,null,0,D,[b.a,y.a,y.l],null,null)],function(n,l){n(l,1,0)},null)}var M=u["\u0275ccf"]("bm-edit-book",D,P,{},{},[]),G=function(){return function(){}}(),L=o("+bzm");o.d(l,"AdminModuleNgFactory",function(){return w});var w=u["\u0275cmf"](t,[],function(n){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[e.a,V,M]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,i.m,i.l,[u.LOCALE_ID,[2,i.t]]),u["\u0275mpd"](4608,r.FormBuilder,r.FormBuilder,[]),u["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_j"],r["\u0275angular_packages_forms_forms_j"],[]),u["\u0275mpd"](1073742336,i.c,i.c,[]),u["\u0275mpd"](1073742336,y.p,y.p,[[2,y.v],[2,y.l]]),u["\u0275mpd"](1073742336,G,G,[]),u["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_bc"],r["\u0275angular_packages_forms_forms_bc"],[]),u["\u0275mpd"](1073742336,r.ReactiveFormsModule,r.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,L.DateValueAccessorModule,L.DateValueAccessorModule,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](256,u.LOCALE_ID,"de",[]),u["\u0275mpd"](1024,y.j,function(){return[[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:E},{path:"edit/:isbn",component:D}]]},[])])})}}]);