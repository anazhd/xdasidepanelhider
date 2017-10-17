// ==UserScript==
// @name          XDA Forum Sidepanel Hider, useful for screen smaller than 1366x768
// @namespace     http://userstyles.org
// @description	  Hide Sidepanel like XDA 2013
// @author        anazhd ( copied from GermainZ css mod )
// @homepage      http://anazhd.com
// @run-at        document-start
// @match         *://forum.xda-developers.com/*
// ==/UserScript==
(function() {
var css = "";
css += "@namespace url(\"http://www.w3.org/1999/xhtml\");";
if (false || (document.domain == "xda-developers.com" || document.domain.substring(document.domain.indexOf(".xda-developers.com") + 1) == "xda-developers.com"))
    css += ".page{margin:0 20px 18px 20px !important;display:block}#sidepanel{float:right;width:305px;margin:10px 10px 0 0;display:none}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
