"use strict";var q=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var g=q(function(z,y){
var d=require('@stdlib/array-base-arraylike2object/dist');function P(a,r,i,n,c,o){var e,s,t;for(e=!0,s=n,t=0;t<=a.length-1;t++){if(!e){r[s]=e,s+=i;continue}c.call(o,a[t],t,a)||(e=!1),r[s]=e,s+=i}return r}function b(a,r,i,n,c,o){var e,s,t,f,v,u,l;for(e=a.data,s=r.data,t=a.accessors[0],f=r.accessors[1],u=n,v=!0,l=0;l<=e.length-1;l++){if(!v){f(s,u,v),u+=i;continue}c.call(o,t(e,l),l,e)||(v=!1),f(s,u,v),u+=i}return s}function j(a,r,i,n,c,o){var e,s;return e=d(a),s=d(r),e.accessorProtocol||s.accessorProtocol?(b(e,s,i,n,c,o),r):(P(a,r,i,n,c,o),r)}y.exports=j
});var p=q(function(C,h){
var k=require('@stdlib/array-base-filled/dist'),m=g();function B(a,r,i){var n=k(!0,a.length);return m(a,n,1,0,r,i)}h.exports=B
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),R=g();O(x,"assign",R);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
