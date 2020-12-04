// ==UserScript==
// @name         维基百科网址重定向
// @namespace    https://github.com/Kennnnnnji/Moegirl-Redirect
// @version      0.12
// @description  重定向萌娘移动版的网址到桌面版
// @include      *://zh.m.wikipedia.org/*
// @author       created by Kennnnnnji
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.location.href = document.location.href.replace('zh.m.wikipedia.org', 'zh.wikipedia.org');
