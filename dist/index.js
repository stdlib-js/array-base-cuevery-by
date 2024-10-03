"use strict";var q=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var g=q(function(z,y){
var d=require('@stdlib/array-base-arraylike2object/dist');function P(a,r,i,n,o,t){var e,s,c;for(e=!0,s=n,c=0;c<=a.length-1;c++){if(!e){r[s]=e,s+=i;continue}o.call(t,a[c],c,a)||(e=!1),r[s]=e,s+=i}return r}function b(a,r,i,n,o,t){var e,s,c,f,v,l,u;for(e=a.data,s=r.data,c=a.accessors[0],f=r.accessors[1],l=n,v=!0,u=0;u<=e.length-1;u++){if(!v){f(s,l,v),l+=i;continue}o.call(t,c(e,u),u,e)||(v=!1),f(s,l,v),l+=i}return s}function j(a,r,i,n,o,t){var e,s;return e=d(a),s=d(r),e.accessorProtocol||s.accessorProtocol?(b(e,s,i,n,o,t),r):(P(a,r,i,n,o,t),r)}y.exports=j
});var p=q(function(C,h){
var k=require('@stdlib/array-base-filled/dist'),m=g();function B(a,r,i){var n=k(!1,a.length);return m(a,n,1,0,r,i)}h.exports=B
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),R=g();O(x,"assign",R);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
