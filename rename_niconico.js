// ==UserScript==
// @name         Niconico网址重定向
// @namespace    https://github.com/Kennnnnnji/Moegirl-Redirect
// @version      0.10
// @description  重定向Niconico
// @include      *://acg.tv/*
// @author       created by Kennnnnnji
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.location.href = document.location.href.replace('acg.tv/sm', 'www.nicovideo.jp/watch/sm');