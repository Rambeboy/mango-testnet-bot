import '../service/core-service.js';
import { Twisters } from 'twisters';
import a13_0x4141e1 from './logger.js';
import { accountList } from '../../accounts/accounts.js';
class Twist {
  ["twisters"];
  constructor() {
    this.twisters = new Twisters();
  }
  ['log'](_0x58ce91 = '', _0x20e604 = '', _0x15211, _0x154450) {
    const _0x4e5c9b = accountList.indexOf(_0x20e604);
    if (_0x154450 == undefined) {
      a13_0x4141e1.info("Account " + (_0x4e5c9b + 0x1) + " - " + _0x58ce91);
      _0x154450 = '-';
    }
    const _0x1bd4ea = _0x15211.address ?? '-';
    const _0x5da681 = _0x15211.balance ?? [];
    const _0x4f35cf = _0x15211.evmBalance ?? [];
    const _0x537e95 = _0x15211.bscBalance ?? [];
    const _0x272a48 = _0x15211.user ?? {};
    const _0x52d5eb = _0x272a48.MgoUser ?? {};
    const _0x2ad666 = _0x52d5eb.integral ?? '-';
    const _0xc19b2f = _0x15211.evmWallet ?? undefined;
    this.twisters.put(_0x20e604, {
      'text': "\n================== Account " + (_0x4e5c9b + 0x1) + " =================\nAddress         : - " + _0x1bd4ea + " (MANGO) " + (_0xc19b2f ? "\n                  - " + _0x15211.evmAddress + " (EVM)" : '') + "\n\nBalance         : \nMANGO NETWORK   : " + _0x5da681.map(_0x27d2bd => {
        return "\n- " + _0x27d2bd.totalBalance + " " + _0x27d2bd.coinType.split('::').pop();
      }) + "\nSEPOLIA NETWORK : " + _0x4f35cf.map(_0x161fdd => {
        return "\n- " + _0x161fdd.BALANCE + " " + _0x161fdd.SYMBOL;
      }) + "\nTBNB NETWORK    : " + _0x537e95.map(_0xf3bceb => {
        return "\n- " + _0xf3bceb.BALANCE + " " + _0xf3bceb.SYMBOL;
      }) + "\n\nScore           : " + _0x2ad666 + "\n               \nStatus : " + _0x58ce91 + "\nDelay  : " + _0x154450 + "\n=============================================="
    });
  }
  ["info"](_0x219a82 = '') {
    this.twisters.put('2', {
      'text': "\n==============================================\nInfo : " + _0x219a82 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove('2');
  }
  ["clear"](_0x16ca74) {
    this.twisters.remove(_0x16ca74);
  }
}
export default new Twist();
