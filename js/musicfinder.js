var productionHost = 'scott-marinoff.github.io';
var prodToken = 'scotty';
var segToken = '70c90561b718ce5116e1b437caff590a';
var phpToken = 'fd57ae8ed4617b21b3ee19238a7309d8';
var autoToken = '0e8781c1dd2aa9fd881984ef1ecbd413';

(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments, 0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" "); for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);

mixpanel.init(prodToken, {cross_subdomain_cookie : false﻿});

if (window.location.pathname.search("segment") > 0) {
	mixpanel.init(segToken, {cross_subdomain_cookie : false﻿}, "segment");
} else if (window.location.pathname.search("autotrack") > 0){
	mixpanel.init(autoToken, {cross_subdomain_cookie : false﻿}, "autotrack");
} else if (window.location.pathname.search("php") > 0){
	mixpanel.init(phpToken, {cross_subdomain_cookie : false﻿}, "php");
}

function getProjectLink() {
	return window.location.hostname;
	if (window.location.pathname.search("javascript") > 0) {
		return "https://mixpanel.com/report/1021099/segmentation/";
	} else if (window.location.pathname.search("autotrack") > 0){
		return "https://mixpanel.com/report/1042775/segmentation/";
	} else if (window.location.pathname.search("segment") > 0){
		return "https://mixpanel.com/report/1038391/segmentation/";
	// } else if (window.location.pathname.search("gtm") > 0){
	// 	return "https://mixpanel.com/report/1021099/segmentation/";
	} else if (window.location.pathname.search("php") > 0){
		return "https://mixpanel.com/report/1039803/segmentation/";
	}
}