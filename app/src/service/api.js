const _0x590370=_0x12e9;(function(_0x2ee3bb,_0x550abb){const _0xe67662=_0x12e9,_0x1b5018=_0x2ee3bb();while(!![]){try{const _0x50c869=parseInt(_0xe67662(0x1cd))/0x1*(parseInt(_0xe67662(0x1e6))/0x2)+-parseInt(_0xe67662(0x1dc))/0x3+-parseInt(_0xe67662(0x1de))/0x4+parseInt(_0xe67662(0x1ea))/0x5*(-parseInt(_0xe67662(0x1d6))/0x6)+parseInt(_0xe67662(0x1e1))/0x7*(parseInt(_0xe67662(0x1ee))/0x8)+-parseInt(_0xe67662(0x1dd))/0x9*(-parseInt(_0xe67662(0x1ec))/0xa)+parseInt(_0xe67662(0x1ef))/0xb*(parseInt(_0xe67662(0x1f6))/0xc);if(_0x50c869===_0x550abb)break;else _0x1b5018['push'](_0x1b5018['shift']());}catch(_0x2122ae){_0x1b5018['push'](_0x1b5018['shift']());}}}(_0xef1a,0x2f07e));function _0xef1a(){const _0x5e795c=['Response\x20Data\x20:\x20','\x20-\x20','4xCMMUK','exit','application/json','status','35NqYpXq','message','734020qYrXOh','Unexpected\x20error:\x20','85832gpiowo','4664xTOQjI','get','Request\x20Header\x20:\x20','headers','...','application/json,\x20text/plain,\x20*/*','statusText','9528vseXad','fetch','73571zNcUCb','DETECT\x20API\x20CHANGE..\x20EXIT','info','mgo-token','error','proxy','Content-Type','\x20:\x20','assign','19062icIaHM','text','Request\x20Body\x20:\x20','GET','body','json','760320ADljuB','9CAcfjM','870524FoexUE','same-site','includes','84UClnyR','stringify','Response\x20:\x20'];_0xef1a=function(){return _0x5e795c;};return _0xef1a();}function _0x12e9(_0x527925,_0x2f5597){const _0xef1a74=_0xef1a();return _0x12e9=function(_0x12e907,_0x4f6c8e){_0x12e907=_0x12e907-0x1cc;let _0x2197aa=_0xef1a74[_0x12e907];return _0x2197aa;},_0x12e9(_0x527925,_0x2f5597);}import _0x3eec3c,{Response}from'node-fetch';import{Helper}from'../utils/helper.js';import _0x58355c from'../utils/logger.js';import{HttpsProxyAgent}from'https-proxy-agent';export class API{constructor(_0x3d1cd6){const _0x3b5b07=_0x12e9;this[_0x3b5b07(0x1d2)]=_0x3d1cd6,this['ua']=Helper['randomUserAgent']();}['generateHeaders'](_0x5e540e,_0x2af4a7){const _0x2aaa10=_0x12e9,_0x478781={'Accept':_0x2aaa10(0x1f4),'Accept-Language':'en-US,en;q=0.9,id;q=0.8','Content-Type':'application/json','Sec-Fetch-Dest':'empty','Sec-Fetch-Site':_0x2aaa10(0x1df),'Sec-Fetch-Mode':'cors','User-Agent':this['ua']};return _0x5e540e&&(_0x478781[_0x2aaa10(0x1d0)]=''+_0x5e540e),_0x2af4a7&&Object[_0x2aaa10(0x1d5)](_0x478781,_0x2af4a7),_0x478781;}async[_0x590370(0x1cc)](_0x4ca6a8,_0x523fd7=_0x590370(0x1d9),_0x3fbe2d,_0x7d4f1a,_0x269e6c){const _0x2eee0a=_0x590370,_0x4ac4a8={'method':_0x523fd7,'headers':this['generateHeaders'](_0x7d4f1a,_0x269e6c),'body':_0x3fbe2d?JSON['stringify'](_0x3fbe2d):undefined,'agent':this[_0x2eee0a(0x1d2)]?new HttpsProxyAgent(this[_0x2eee0a(0x1d2)]):undefined};try{_0x58355c[_0x2eee0a(0x1cf)](_0x523fd7+_0x2eee0a(0x1d4)+_0x4ca6a8+'\x20'+(this[_0x2eee0a(0x1d2)]?this[_0x2eee0a(0x1d2)]:'')),_0x58355c['info'](_0x2eee0a(0x1f1)+JSON['stringify'](_0x4ac4a8[_0x2eee0a(0x1f2)])),_0x58355c[_0x2eee0a(0x1cf)](_0x2eee0a(0x1d8)+JSON['stringify'](_0x4ac4a8[_0x2eee0a(0x1da)]));const _0x5c53b2=await _0x3eec3c(_0x4ca6a8,_0x4ac4a8);if(!_0x5c53b2['ok'])throw _0x5c53b2;const _0x3a6295=_0x5c53b2[_0x2eee0a(0x1e9)],_0x1eed19=_0x5c53b2[_0x2eee0a(0x1f2)][_0x2eee0a(0x1f0)](_0x2eee0a(0x1d3));let _0x2b5cd8;return _0x1eed19&&_0x1eed19[_0x2eee0a(0x1e0)](_0x2eee0a(0x1e8))?_0x2b5cd8=await _0x5c53b2[_0x2eee0a(0x1db)]():_0x2b5cd8={'message':await _0x5c53b2[_0x2eee0a(0x1d7)]()},_0x58355c['info']('Response\x20:\x20'+_0x5c53b2[_0x2eee0a(0x1e9)]+'\x20'+_0x5c53b2['statusText']),_0x58355c['info'](_0x2eee0a(0x1e4)+JSON[_0x2eee0a(0x1e2)](_0x2b5cd8)+_0x2eee0a(0x1f3)),{'status':_0x3a6295,'data':_0x2b5cd8};}catch(_0x7e19e8){if(_0x7e19e8 instanceof Response){const _0x5923ee=_0x7e19e8[_0x2eee0a(0x1e9)],_0x542e77=_0x7e19e8[_0x2eee0a(0x1f2)]['get']('Content-Type');let _0x45e17b;_0x542e77&&_0x542e77[_0x2eee0a(0x1e0)](_0x2eee0a(0x1e8))?_0x45e17b=await _0x7e19e8[_0x2eee0a(0x1db)]():_0x45e17b={'message':await _0x7e19e8[_0x2eee0a(0x1d7)]()};_0x58355c[_0x2eee0a(0x1cf)](_0x2eee0a(0x1e3)+_0x7e19e8['status']+'\x20'+_0x7e19e8[_0x2eee0a(0x1f5)]),_0x58355c['info'](_0x2eee0a(0x1e4)+JSON[_0x2eee0a(0x1e2)](_0x45e17b)+_0x2eee0a(0x1f3));if(_0x5923ee===0x193)return{'status':_0x5923ee,'data':_0x45e17b};else{if(_0x5923ee===0x1f8||_0x5923ee===0x194)console[_0x2eee0a(0x1d1)](_0x2eee0a(0x1ce)),process[_0x2eee0a(0x1e7)](0x1);else throw new Error(_0x5923ee+_0x2eee0a(0x1e5)+_0x7e19e8[_0x2eee0a(0x1f5)]);}}else throw new Error(_0x2eee0a(0x1ed)+(_0x7e19e8[_0x2eee0a(0x1eb)]||_0x7e19e8));}}}
