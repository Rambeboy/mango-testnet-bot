function _0xdcbc(_0x8d5c35,_0x269e3d){const _0x6dc146=_0x6dc1();return _0xdcbc=function(_0xdcbca3,_0x2f6ca9){_0xdcbca3=_0xdcbca3-0x17d;let _0x5e8b24=_0x6dc146[_0xdcbca3];return _0x5e8b24;},_0xdcbc(_0x8d5c35,_0x269e3d);}(function(_0x2b6589,_0x204e3a){const _0xdaea4c=_0xdcbc,_0xb6b172=_0x2b6589();while(!![]){try{const _0x1bfb35=parseInt(_0xdaea4c(0x196))/0x1*(-parseInt(_0xdaea4c(0x17e))/0x2)+parseInt(_0xdaea4c(0x1a6))/0x3+parseInt(_0xdaea4c(0x185))/0x4+parseInt(_0xdaea4c(0x1ab))/0x5+-parseInt(_0xdaea4c(0x19a))/0x6*(parseInt(_0xdaea4c(0x1a5))/0x7)+-parseInt(_0xdaea4c(0x17f))/0x8*(parseInt(_0xdaea4c(0x1aa))/0x9)+parseInt(_0xdaea4c(0x182))/0xa*(parseInt(_0xdaea4c(0x19f))/0xb);if(_0x1bfb35===_0x204e3a)break;else _0xb6b172['push'](_0xb6b172['shift']());}catch(_0x30cd54){_0xb6b172['push'](_0xb6b172['shift']());}}}(_0x6dc1,0x90bd3));import{accountList}from'./accounts/accounts.js';import{COINS}from'./src/coin/coins.js';import{CoreService}from'./src/service/core-service.js';import{Helper}from'./src/utils/helper.js';import _0x4ab370 from'./src/utils/logger.js';async function operation(_0x9eeb26){const _0x438304=_0xdcbc,_0x44a9b3=new CoreService(_0x9eeb26);try{await _0x44a9b3[_0x438304(0x19d)](),await _0x44a9b3[_0x438304(0x180)](!![]),await _0x44a9b3[_0x438304(0x18c)](),await _0x44a9b3[_0x438304(0x190)](!![]),await Helper[_0x438304(0x197)](_0x44a9b3['address'],_0x44a9b3[_0x438304(0x19e)][_0x438304(0x1a1)]),await _0x44a9b3[_0x438304(0x18d)](),await _0x44a9b3[_0x438304(0x187)]();if(_0x44a9b3[_0x438304(0x195)]['step']['find'](_0x1e5f66=>_0x1e5f66[_0x438304(0x192)]=='0')!=undefined){await _0x44a9b3[_0x438304(0x19b)](COINS[_0x438304(0x194)],COINS[_0x438304(0x191)]),await _0x44a9b3[_0x438304(0x19b)](COINS['USDT'],COINS[_0x438304(0x1a7)]),await _0x44a9b3[_0x438304(0x19b)](COINS[_0x438304(0x1a7)],COINS['USDT']);for(const _0x2c134d of _0x44a9b3[_0x438304(0x195)]['step']){_0x2c134d[_0x438304(0x192)]=='0'&&await _0x44a9b3[_0x438304(0x181)](_0x44a9b3[_0x438304(0x195)][_0x438304(0x198)]['ID'],_0x2c134d);}await Helper[_0x438304(0x189)](0x7d0,_0x9eeb26,_0x44a9b3[_0x438304(0x195)][_0x438304(0x198)]['title']+_0x438304(0x1a8),_0x44a9b3),await _0x44a9b3[_0x438304(0x190)](!![]);}await _0x44a9b3[_0x438304(0x188)]();if(_0x44a9b3[_0x438304(0x184)]['step'][_0x438304(0x183)](_0x4258f0=>_0x4258f0[_0x438304(0x192)]=='0')!=undefined){await _0x44a9b3[_0x438304(0x19b)](COINS[_0x438304(0x194)],COINS[_0x438304(0x191)]),await _0x44a9b3['exchange'](COINS[_0x438304(0x191)],COINS['AI']),await _0x44a9b3[_0x438304(0x186)](COINS['AI'],COINS['USDT']);for(const _0x160ca6 of _0x44a9b3[_0x438304(0x184)][_0x438304(0x19c)]){_0x160ca6[_0x438304(0x192)]=='0'&&await _0x44a9b3[_0x438304(0x181)](_0x44a9b3[_0x438304(0x184)][_0x438304(0x198)]['ID'],_0x160ca6);}await Helper['delay'](0x7d0,_0x9eeb26,_0x44a9b3['exchangeTask']['detail'][_0x438304(0x1ac)]+'\x20Task\x20is\x20now\x20Syncronizing',_0x44a9b3),await _0x44a9b3[_0x438304(0x190)](!![]),await _0x44a9b3[_0x438304(0x19b)](COINS['USDT'],COINS[_0x438304(0x194)]);}await Helper['delay'](0x5265c00,_0x9eeb26,_0x438304(0x1a9)+Helper['msToTime'](0x5265c00)+_0x438304(0x1a0),_0x44a9b3);}catch(_0x2a5eb6){_0x4ab370[_0x438304(0x1a2)](_0x2a5eb6[_0x438304(0x18a)]),await Helper[_0x438304(0x189)](0x1388,_0x9eeb26,_0x2a5eb6[_0x438304(0x18a)],_0x44a9b3),operation(_0x9eeb26);}}async function startBot(){const _0x1dc845=_0xdcbc;try{_0x4ab370[_0x1dc845(0x1a2)]('BOT\x20STARTED');if(accountList[_0x1dc845(0x18e)]==0x0)throw Error(_0x1dc845(0x1a3));const _0x58cbe7=[];for(const _0x49ba69 of accountList){_0x58cbe7[_0x1dc845(0x18f)](operation(_0x49ba69));}await Promise['all'](_0x58cbe7);}catch(_0x54def4){_0x4ab370[_0x1dc845(0x1a2)](_0x1dc845(0x18b)),_0x4ab370['error'](JSON['stringify'](_0x54def4));throw _0x54def4;}}((async()=>{const _0x5154ec=_0xdcbc;try{_0x4ab370['clear'](),_0x4ab370[_0x5154ec(0x1a2)](''),_0x4ab370['info'](_0x5154ec(0x193)),console[_0x5154ec(0x1a4)](''),console[_0x5154ec(0x1a4)](_0x5154ec(0x17d)),console[_0x5154ec(0x1a4)](_0x5154ec(0x199)),console[_0x5154ec(0x1a4)]('Welcome\x20&\x20Enjoy\x20Sir!'),await startBot();}catch(_0x548247){console[_0x5154ec(0x1a4)]('Error\x20During\x20Executing\x20Bot',_0x548247),await startBot();}})());function _0x6dc1(){const _0xc5807b=['7126BHjNdn','360807BFWkvt','MAI','\x20Task\x20is\x20now\x20Syncronizing','Accounts\x20Processing\x20Complete,\x20Delaying\x20For\x20','9keNpkS','3142705FHekSh','title','MANGO\x20WALLET\x20BOT','2XAPRus','3197736aaDPuQ','getBalance','addStep','60560kdUCey','find','exchangeTask','1571644cqfMwy','exchange','getSwapTask','getExchangeTask','delay','message','BOT\x20STOPPED','connectMango','checkIn','length','push','getMangoUser','USDT','status','Application\x20Started','MGO','swapTask','210361GOSWGN','refCheck','detail','Author\x20:\x20Nofan\x20Rambe','3744aXeuRu','swap','step','getAccountInfo','user','1265CqlBLJ','...','Premium','info','Please\x20input\x20your\x20account\x20first\x20on\x20accounts.ts\x20file','log'];_0x6dc1=function(){return _0xc5807b;};return _0x6dc1();}
