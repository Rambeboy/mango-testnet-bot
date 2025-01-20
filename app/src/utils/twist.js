import '../service/core-service.js';
import { Twisters } from 'twisters';
import a13_0x17aea8 from './logger.js';
import { accountList } from '../../accounts/accounts.js';
class Twist {
  ["twisters"];
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0x1a6ea9 = '', _0x1dedc3 = '', _0x27b4c1, _0x50e120) {
    const _0x304df2 = accountList.indexOf(_0x1dedc3);
    if (_0x50e120 == undefined) {
      a13_0x17aea8.info("Account " + (_0x304df2 + 0x1) + " - " + _0x1a6ea9);
      _0x50e120 = '-';
    }
    const _0x1e5ed8 = _0x27b4c1.address ?? '-';
    const _0x24a5cd = _0x27b4c1.balance ?? [];
    const _0x5dfb8f = _0x27b4c1.evmBalance ?? [];
    const _0x329374 = _0x27b4c1.bscBalance ?? [];
    const _0x380fae = _0x27b4c1.user ?? {};
    const _0x1c034e = _0x380fae.MgoUser ?? {};
    const _0x3f3194 = _0x1c034e.integral ?? '-';
    const _0x597bf8 = _0x27b4c1.evmWallet ?? undefined;
    this.twisters.put(_0x1dedc3, {
      'text': "\n================== Account " + (_0x304df2 + 0x1) + " =================\nAddress         : - " + _0x1e5ed8 + " (MANGO) " + (_0x597bf8 ? "\n               - " + _0x27b4c1.evmAddress + " (EVM)" : '') + "\n\nBalance         : \nMANGO NETWORK   : " + _0x24a5cd.map(_0x69cd16 => {
        return "\n- " + _0x69cd16.totalBalance + " " + _0x69cd16.coinType.split('::').pop();
      }) + "\nSEPOLIA NETWORK : " + _0x5dfb8f.map(_0x9d80af => {
        return "\n- " + _0x9d80af.BALANCE + " " + _0x9d80af.SYMBOL;
      }) + "\nTBNB NETWORK    : " + _0x329374.map(_0x17cb0f => {
        return "\n- " + _0x17cb0f.BALANCE + " " + _0x17cb0f.SYMBOL;
      }) + "\n\nScore           : " + _0x3f3194 + "\n               \nStatus : " + _0x1a6ea9 + "\nDelay  : " + _0x50e120 + "\n=============================================="
    });
  }
  ['info'](_0x9b3e09 = '') {
    this.twisters.put('2', {
      'text': "\n==============================================\nInfo : " + _0x9b3e09 + "\n=============================================="
    });
    return;
  }
  ['clearInfo']() {
    this.twisters.remove('2');
  }
  ['clear'](_0x50f1be) {
    this.twisters.remove(_0x50f1be);
  }
}
export default new Twist();
