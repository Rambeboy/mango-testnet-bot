import '../service/core-service.js';
import { Twisters } from 'twisters';
import _0x3c0843 from './logger.js';
import { accountList } from '../../accounts/accounts.js';
class Twist {
  ['twisters'];
  constructor() {
    this.twisters = new Twisters();
  }
  ['log'](_0x55a7ef = '', _0x1b0515 = '', _0x1d14b7, _0x2512c7) {
    const _0x1182a1 = accountList.indexOf(_0x1b0515);
    if (_0x2512c7 == undefined) {
      _0x3c0843.info("Account " + (_0x1182a1 + 0x1) + " - " + _0x55a7ef);
      _0x2512c7 = '-';
    }
    const _0x46406d = _0x1d14b7.address ?? '-';
    const _0x395a12 = _0x1d14b7.balance ?? [];
    const _0xab6f1f = _0x1d14b7.evmBalance ?? [];
    const _0x13074a = _0x1d14b7.bscBalance ?? [];
    const _0x120429 = _0x1d14b7.user ?? {};
    const _0x2d3f72 = _0x120429.MgoUser ?? {};
    const _0x1ee7bf = _0x2d3f72.integral ?? '-';
    const _0xb6f9b5 = _0x1d14b7.evmWallet ?? undefined;
    this.twisters.put(_0x1b0515, {
      'text': "\n================== Account " + (_0x1182a1 + 0x1) + " ==================\nAddress         : - " + _0x46406d + " (MANGO) " + (_0xb6f9b5 ? "\n               - " + _0x1d14b7.evmAddress + " (EVM)" : '') + "\n\nBalance         : \nMANGO NETWORK   : " + _0x395a12.map(_0x2cb85e => {
        return "\n- " + _0x2cb85e.totalBalance + " " + _0x2cb85e.coinType.split('::').pop();
      }) + "\nSEPOLIA NETWORK : " + _0xab6f1f.map(_0x1b95b4 => {
        return "\n- " + _0x1b95b4.BALANCE + " " + _0x1b95b4.SYMBOL;
      }) + "\nTBNB NETWORK    : " + _0x13074a.map(_0x68f773 => {
        return "\n- " + _0x68f773.BALANCE + " " + _0x68f773.SYMBOL;
      }) + "\n\nScore           : " + _0x1ee7bf + "\n               \nStatus : " + _0x55a7ef + "\nDelay  : " + _0x2512c7 + "\n=============================================="
    });
  }
  ['info'](_0x3eef40 = '') {
    this.twisters.put('2', {
      'text': "\n==============================================\nInfo : " + _0x3eef40 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove('2');
  }
  ["clear"](_0x2d4807) {
    this.twisters.remove(_0x2d4807);
  }
}
export default new Twist();
