(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9O1O":function(t,e,r){"use strict";var n=r("XlPw"),o=r("5tAl"),i=r("67Y/"),p=r("9Z1F"),a=function(){return(a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},c=function(){function t(){}return t.fromRaw=function(t){return a({},t,{published:new Date(t.published)})},t}(),u=r("CcnG"),s=r("t/Na");r.d(e,"a",function(){return h});var h=function(){function t(t){this.http=t,this.api="https://book-monkey2-api.angular-buch.com"}return t.prototype.getAll=function(){return this.http.get(this.api+"/books").pipe(Object(o.a)(3),Object(i.a)(function(t){return t.map(function(t){return c.fromRaw(t)})}),Object(p.a)(this.errorHandler))},t.prototype.getSingle=function(t){return this.http.get(this.api+"/book/"+t).pipe(Object(o.a)(3),Object(i.a)(function(t){return c.fromRaw(t)}),Object(p.a)(this.errorHandler))},t.prototype.create=function(t){return this.http.post(this.api+"/book",t,{responseType:"text"}).pipe(Object(p.a)(this.errorHandler))},t.prototype.update=function(t){return this.http.put(this.api+"/book/"+t.isbn,t,{responseType:"text"}).pipe(Object(p.a)(this.errorHandler))},t.prototype.remove=function(t){return this.http.delete(this.api+"/book/"+t,{responseType:"text"}).pipe(Object(p.a)(this.errorHandler))},t.prototype.getAllSearch=function(t){return this.http.get(this.api+"/books/search/"+t).pipe(Object(o.a)(3),Object(i.a)(function(t){return t.map(function(t){return c.fromRaw(t)})}),Object(p.a)(this.errorHandler))},t.prototype.check=function(t){return this.http.get(this.api+"/book/"+t+"/check").pipe(Object(p.a)(this.errorHandler))},t.prototype.errorHandler=function(t){return Object(n.a)(t)},t.ngInjectableDef=u.defineInjectable({factory:function(){return new t(u.inject(s.c))},token:t,providedIn:"root"}),t}()},a3UO:function(t,e,r){"use strict";var n=r("XlPw"),o=r("5tAl"),i=r("67Y/"),p=r("9Z1F"),a=function(){return(a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},c=function(){function t(){}return t.fromRaw=function(t){return a({},t,{published:new Date(t.published)})},t}(),u=r("CcnG"),s=r("t/Na");r.d(e,"a",function(){return h});var h=function(){function t(t){this.http=t,this.api="https://book-monkey2-api.angular-buch.com"}return t.prototype.getAll=function(){return this.http.get(this.api+"/books").pipe(Object(o.a)(3),Object(i.a)(function(t){return t.map(function(t){return c.fromRaw(t)})}),Object(p.a)(this.errorHandler))},t.prototype.getSingle=function(t){return this.http.get(this.api+"/book/"+t).pipe(Object(o.a)(3),Object(i.a)(function(t){return c.fromRaw(t)}),Object(p.a)(this.errorHandler))},t.prototype.create=function(t){return this.http.post(this.api+"/book",t,{responseType:"text"}).pipe(Object(p.a)(this.errorHandler))},t.prototype.update=function(t){return this.http.put(this.api+"/book/"+t.isbn,t,{responseType:"text"}).pipe(Object(p.a)(this.errorHandler))},t.prototype.remove=function(t){return this.http.delete(this.api+"/book/"+t,{responseType:"text"}).pipe(Object(p.a)(this.errorHandler))},t.prototype.getAllSearch=function(t){return this.http.get(this.api+"/books/search/"+t).pipe(Object(o.a)(3),Object(i.a)(function(t){return t.map(function(t){return c.fromRaw(t)})}),Object(p.a)(this.errorHandler))},t.prototype.check=function(t){return this.http.get(this.api+"/book/"+t+"/check").pipe(Object(p.a)(this.errorHandler))},t.prototype.errorHandler=function(t){return Object(n.a)(t)},t.ngInjectableDef=u.defineInjectable({factory:function(){return new t(u.inject(s.c))},token:t,providedIn:"root"}),t}()},ad02:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r("mrSG"),o=r("FFOo"),i=r("Ehmk"),p=r("eihs");function a(t,e){return function(r){return r.lift(new c(t,e))}}var c=function(){function t(t,e){this.compare=t,this.keySelector=e}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.compare,this.keySelector))},t}(),u=function(t){function e(e,r,n){var o=t.call(this,e)||this;return o.keySelector=n,o.hasKey=!1,"function"==typeof r&&(o.compare=r),o}return n.c(e,t),e.prototype.compare=function(t,e){return t===e},e.prototype._next=function(t){var e=t;if(this.keySelector&&(e=Object(i.a)(this.keySelector)(t))===p.a)return this.destination.error(p.a.e);var r=!1;if(this.hasKey){if((r=Object(i.a)(this.compare)(this.key,e))===p.a)return this.destination.error(p.a.e)}else this.hasKey=!0;!1===Boolean(r)&&(this.key=e,this.destination.next(t))},e}(o.a)},iA8X:function(t,e,r){"use strict";var n=r("XlPw"),o=r("5tAl"),i=r("67Y/"),p=r("9Z1F"),a=function(){return(a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},c=function(){function t(){}return t.fromRaw=function(t){return a({},t,{published:new Date(t.published)})},t}(),u=r("CcnG"),s=r("t/Na");r.d(e,"a",function(){return h});var h=function(){function t(t){this.http=t,this.api="https://book-monkey2-api.angular-buch.com"}return t.prototype.getAll=function(){return this.http.get(this.api+"/books").pipe(Object(o.a)(3),Object(i.a)(function(t){return t.map(function(t){return c.fromRaw(t)})}),Object(p.a)(this.errorHandler))},t.prototype.getSingle=function(t){return this.http.get(this.api+"/book/"+t).pipe(Object(o.a)(3),Object(i.a)(function(t){return c.fromRaw(t)}),Object(p.a)(this.errorHandler))},t.prototype.create=function(t){return this.http.post(this.api+"/book",t,{responseType:"text"}).pipe(Object(p.a)(this.errorHandler))},t.prototype.update=function(t){return this.http.put(this.api+"/book/"+t.isbn,t,{responseType:"text"}).pipe(Object(p.a)(this.errorHandler))},t.prototype.remove=function(t){return this.http.delete(this.api+"/book/"+t,{responseType:"text"}).pipe(Object(p.a)(this.errorHandler))},t.prototype.getAllSearch=function(t){return this.http.get(this.api+"/books/search/"+t).pipe(Object(o.a)(3),Object(i.a)(function(t){return t.map(function(t){return c.fromRaw(t)})}),Object(p.a)(this.errorHandler))},t.prototype.check=function(t){return this.http.get(this.api+"/book/"+t+"/check").pipe(Object(p.a)(this.errorHandler))},t.prototype.errorHandler=function(t){return Object(n.a)(t)},t.ngInjectableDef=u.defineInjectable({factory:function(){return new t(u.inject(s.c))},token:t,providedIn:"root"}),t}()}}]);