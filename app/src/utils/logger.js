const _0x423396=_0x4b92;(function(_0x577ccd,_0x3d0a2d){const _0x387043=_0x4b92,_0x3dd0f2=_0x577ccd();while(!![]){try{const _0x4dd555=parseInt(_0x387043(0x17a))/0x1*(-parseInt(_0x387043(0x172))/0x2)+parseInt(_0x387043(0x16b))/0x3*(parseInt(_0x387043(0x173))/0x4)+-parseInt(_0x387043(0x175))/0x5+parseInt(_0x387043(0x167))/0x6+parseInt(_0x387043(0x16c))/0x7*(-parseInt(_0x387043(0x168))/0x8)+-parseInt(_0x387043(0x177))/0x9*(parseInt(_0x387043(0x16f))/0xa)+parseInt(_0x387043(0x176))/0xb;if(_0x4dd555===_0x3d0a2d)break;else _0x3dd0f2['push'](_0x3dd0f2['shift']());}catch(_0x39e2e4){_0x3dd0f2['push'](_0x3dd0f2['shift']());}}}(_0x2960,0x1fd4b));function _0x2960(){const _0xd16c4c=['error','info','776712noRMIx','184504EWCqMy','clear','level','465HWUjRa','7RYLjFz','logger','debug','60DUxPRG','log/app.log','YYYY-MM-DD\x20HH:mm:ss','490582kDcTUl','1684oGBWKj','warn','1216330eRiHYu','5650502NHcNmG','99585aDSoFt','Log\x20file\x20cleared',']:\x20','1chkAeI','truncate','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','File'];_0x2960=function(){return _0xd16c4c;};return _0x2960();}function _0x4b92(_0x4b4c91,_0x9a6b0f){const _0x296099=_0x2960();return _0x4b92=function(_0x4b9226,_0x5646ad){_0x4b9226=_0x4b9226-0x163;let _0x411ce2=_0x296099[_0x4b9226];return _0x411ce2;},_0x4b92(_0x4b4c91,_0x9a6b0f);}import{createLogger,format,transports}from'winston';import _0x4414f from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x5f2d03,message:_0x4da29b,timestamp:_0x485e80})=>{const _0x25436d=_0x4b92;return _0x485e80+'\x20['+_0x5f2d03+_0x25436d(0x179)+_0x4da29b;});class Logger{constructor(){const _0x56264f=_0x4b92;this[_0x56264f(0x16d)]=createLogger({'level':'debug','format':combine(timestamp({'format':_0x56264f(0x171)}),colorize(),customFormat),'transports':[new transports[(_0x56264f(0x164))]({'filename':'log/app.log'})],'exceptionHandlers':[new transports[(_0x56264f(0x164))]({'filename':'log/app.log'})],'rejectionHandlers':[new transports[(_0x56264f(0x164))]({'filename':_0x56264f(0x170)})]});}[_0x423396(0x166)](_0x194e56){const _0x1b40cb=_0x423396;this[_0x1b40cb(0x16d)][_0x1b40cb(0x166)](_0x194e56);}['warn'](_0x59437f){const _0x37726d=_0x423396;this[_0x37726d(0x16d)][_0x37726d(0x174)](_0x59437f);}['error'](_0x1a0a50){const _0x2c7742=_0x423396;this[_0x2c7742(0x16d)]['error'](_0x1a0a50);}[_0x423396(0x16e)](_0x15ee88){const _0x155c94=_0x423396;this[_0x155c94(0x16d)][_0x155c94(0x16e)](_0x15ee88);}['setLevel'](_0x52c66f){const _0x53cb54=_0x423396;this[_0x53cb54(0x16d)][_0x53cb54(0x16a)]=_0x52c66f;}[_0x423396(0x169)](){const _0x22b723=_0x423396;_0x4414f[_0x22b723(0x17b)]('log/app.log',0x0,_0x50f989=>{const _0x4a91f5=_0x22b723;_0x50f989?this[_0x4a91f5(0x16d)][_0x4a91f5(0x165)](_0x4a91f5(0x163)+_0x50f989['message']):this['logger'][_0x4a91f5(0x166)](_0x4a91f5(0x178));});}}const logger=new Logger();export default logger;
