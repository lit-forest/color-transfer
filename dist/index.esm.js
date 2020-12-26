function t(t){var e,d,i,a;if(/\((.+?)\)/g.test(t)){var o=RegExp.$1,l=o.indexOf(",")>-1?",":" ",h=o.split(l);h.indexOf("/")>-1&&h.splice(3,1),e=r(h[0]),d=r(h[1]),i=r(h[2]),h[3]&&(a=Math.round(n(h[3])))}return{red:e,green:d,blue:i,alpha:a}}function r(t){return t.indexOf("%")>-1?+t.replace("%","")/100*255:+t}function n(t){return t.indexOf("%")>-1?+t.replace("%","")/100*255:255*+t}function e(t){var r,e,d,i;if(/\((.+?)\)/g.test(t)){var a=RegExp.$1,o=a.indexOf(",")>-1?",":" ",l=a.split(o);l.indexOf("/")>-1&&l.splice(3,1),r=function(t){return t.indexOf("deg")>-1?+t.replace("deg",""):t.indexOf("rad")>-1?Math.round(+t.replace("rad","")*(180/Math.PI)):t.indexOf("turn")>-1?Math.round(360*+t.replace("turn","")):+t}(l[0]),e=+l[1].replace("%","")/100,d=+l[2].replace("%","")/100,l[3]&&(i=n(l[3])/255)}return{hue:r,saturation:e,lightness:d,alpha:i}}var d=/^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i,i=/^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i,a=/^#([\da-f]{3}){1,2}$/i,o=/^#([\da-f]{4}){1,2}$/i,l=/^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i,h=/^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;function u(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=t.filter((function(t){return!isNaN(parseFloat(t.toString()))&&isFinite(t)}));return n.length===t.length}function s(r,n,e,a){var o,l,h,s;if("number"==typeof r){if(!u(r,n,e,a||1))throw new Error("Invalid input RGB[A] color");o=r.toString(16),l=n.toString(16),h=e.toString(16),a&&(s=Math.round(255*a).toString(16))}else if("string"==typeof r){if(!d.test(r)&&!i.test(r))throw new Error("Invalid input RGB[A] color");var g=t(r);o=g.red.toString(16),l=g.green.toString(16),h=g.blue.toString(16),null!=g.alpha&&(s=g.alpha.toString(16))}return 1==o.length&&(o="0"+o),1==l.length&&(l="0"+l),1==h.length&&(h="0"+h),s&&1==s.length&&(s="0"+s),s?[o,l,h,s]:[o,l,h]}function g(r,n,e,a){var o,l,h,s;if("number"==typeof r){if(!u(r,n,e,a||1))throw new Error("Invalid input RGB[A] color");o=r/255,l=n/255,h=e/255,a&&"number"==typeof a&&(s=a)}else if("string"==typeof r){if(!d.test(r)&&!i.test(r))throw new Error("Invalid input RGB[A] color");var g=t(r);o=g.red/255,l=g.green/255,h=g.blue/255,null!=g.alpha&&(s=+(g.alpha/255).toFixed(1))}var f=Math.min(o,l,h),p=Math.max(o,l,h),x=p-f,c=0,v=0,M=0;return c=0===x?0:p===o?(l-h)/x%6:p===l?(h-o)/x+2:(o-l)/x+4,(c=Math.round(60*c))<0&&(c+=360),M=(p+f)/2,v=+(100*(v=0===x?0:x/(1-Math.abs(2*M-1)))).toFixed(1),M=+(100*M).toFixed(1),s?[c,v,M,s]:[c,v,M]}function f(t){if(!a.test(t)&&!o.test(t))throw new Error("Invalid input HEX color");var r="0",n="0",e="0",d="1";return 4===t.length||5===t.length?(r="0x"+t[1]+t[1],n="0x"+t[2]+t[2],e="0x"+t[3]+t[3]):7!==t.length&&9!==t.length||(r="0x"+t[1]+t[2],n="0x"+t[3]+t[4],e="0x"+t[5]+t[6]),5===t.length?d=(+(d="0x"+t[4]+t[4])/255).toFixed(3):9===t.length&&(d=(+(d="0x"+t[7]+t[8])/255).toFixed(3)),4===t.length||7===t.length?[+r,+n,+e]:[+r,+n,+e,+d]}function p(t){if(!a.test(t)&&!o.test(t))throw new Error("Invalid input HEX color");var r="0",n="0",e="0",d="1";4==t.length||5===t.length?(r="0x"+t[1]+t[1],n="0x"+t[2]+t[2],e="0x"+t[3]+t[3]):7!=t.length&&9!==t.length||(r="0x"+t[1]+t[2],n="0x"+t[3]+t[4],e="0x"+t[5]+t[6]),5===t.length?d="0x"+t[4]+t[4]:9===t.length&&(d="0x"+t[7]+t[8]);var i=+r/255,l=+n/255,h=+e/255,u=+(+d/255).toFixed(3),s=Math.min(i,l,h),g=Math.max(i,l,h),f=g-s,p=0,x=0,c=0;return p=0==f?0:g==i?(l-h)/f%6:g==l?(h-i)/f+2:(i-l)/f+4,(p=Math.round(60*p))<0&&(p+=360),c=(g+s)/2,x=+(100*(x=0==f?0:f/(1-Math.abs(2*c-1)))).toFixed(1),c=+(100*c).toFixed(1),4===t.length||7===t.length?[p,x,c]:[p,x,c,u]}function x(t,r,n,d){var i,a,o,s;if("number"==typeof t){if(!u(t,r,n,d||1))throw new Error("Invalid input HSL[A] color");i=t,a=r/100,o=n/100,d&&"number"==typeof d&&(s=d)}else if("string"==typeof t){if(!l.test(t)&&!h.test(t))throw new Error("Invalid input HSL[A] color");var g=e(t);i=g.hue,a=g.saturation,o=g.lightness,null!=g.alpha&&(s=g.alpha)}var f=(1-Math.abs(2*o-1))*a,p=f*(1-Math.abs(i/60%2-1)),x=o-f/2,c=0,v=0,M=0;return 0<=i&&i<60?(c=f,v=p,M=0):60<=i&&i<120?(c=p,v=f,M=0):120<=i&&i<180?(c=0,v=f,M=p):180<=i&&i<240?(c=0,v=p,M=f):240<=i&&i<300?(c=p,v=0,M=f):300<=i&&i<360&&(c=f,v=0,M=p),c=Math.round(255*(c+x)),v=Math.round(255*(v+x)),M=Math.round(255*(M+x)),s?[c,v,M,s]:[c,v,M]}function c(t,r,n,d){var i,a,o,s;if("number"==typeof t){if(!u(t,r,n,d||1))throw new Error("Invalid input HSL[A] color");i=t,a=r/100,o=n/100,d&&"number"==typeof d&&(s=Math.round(255*d).toString(16))}else if("string"==typeof t){if(!l.test(t)&&!h.test(t))throw new Error("Invalid input HSL[A] color");var g=e(t);i=g.hue,a=g.saturation,o=g.lightness,null!=g.alpha&&(s=Math.round(255*g.alpha).toString(16))}var f=(1-Math.abs(2*o-1))*a,p=f*(1-Math.abs(i/60%2-1)),x=o-f/2,c=0,v=0,M=0;return 0<=i&&i<60?(c=f,v=p,M=0):60<=i&&i<120?(c=p,v=f,M=0):120<=i&&i<180?(c=0,v=f,M=p):180<=i&&i<240?(c=0,v=p,M=f):240<=i&&i<300?(c=p,v=0,M=f):300<=i&&i<360&&(c=f,v=0,M=p),c=Math.round(255*(c+x)).toString(16),v=Math.round(255*(v+x)).toString(16),M=Math.round(255*(M+x)).toString(16),1==c.length&&(c="0"+c),1==v.length&&(v="0"+v),1==M.length&&(M="0"+M),s?[c,v,M,s]:[c,v,M]}export{p as HEXToHSL,f as HEXToRGB,c as HSLToHEX,x as HSLToRGB,s as RGBToHEX,g as RGBToHSL};
//# sourceMappingURL=index.esm.js.map
