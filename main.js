// ==UserScript==
// @name         萌娘百科网址重定向
// @namespace    https://github.com/Kennnnnnji/Moegirl-Redirect
// @version      0.12
// @description  重定向萌娘移动版的网址到桌面版
// @include      *://mzh.moegirl.org.cn/*
// @include      *://zh.moegirl.org.cn/zh-tw*
// @author       created by Kennnnnnji
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.location.href = document.location.href.replace('mzh.moegirl.org.cn.cc', 'zh.moegirl.org.cn').replace('mzh.moegirl.org.cn', 'zh.moegirl.org.cn').replace('zh-tw', 'zh-cn');
