import '../service/core-service.js';
import { Twisters } from 'twisters';
import _0x2bf55f from './logger.js';
import { accountList } from '../../accounts/accounts.js';
class Twist {
  ["twisters"];
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0x5350a9 = '', _0x228f1d = '', _0x4cab6e, _0xd27bd) {
    const _0x8eac27 = accountList.indexOf(_0x228f1d);
    if (_0xd27bd == undefined) {
      _0x2bf55f.info("Account " + (_0x8eac27 + 0x1) + " - " + _0x5350a9);
      _0xd27bd = '-';
    }
    const _0x3fbe98 = _0x4cab6e.address ?? '-';
    const _0x4b1001 = _0x4cab6e.balance ?? [];
    const _0x9135ee = _0x4cab6e.evmBalance ?? [];
    const _0x1ec5e8 = _0x4cab6e.bscBalance ?? [];
    const _0x4bbd9b = _0x4cab6e.user ?? {};
    const _0x1f307f = _0x4bbd9b.MgoUser ?? {};
    const _0x3d637f = _0x1f307f.integral ?? '-';
    const _0x591a0f = _0x4cab6e.evmWallet ?? undefined;
    this.twisters.put(_0x228f1d, {
      'text': "\n================== Account " + (_0x8eac27 + 0x1) + " ==================\nAddress         : - " + _0x3fbe98 + " (MANGO) " + (_0x591a0f ? "\n                  - " + _0x4cab6e.evmAddress + " (EVM)" : '') + "\n\nBalance         : \nMANGO NETWORK   : " + _0x4b1001.map(_0x52404a => {
        return "\n- " + _0x52404a.totalBalance + " " + _0x52404a.coinType.split('::').pop();
      }) + "\nSEPOLIA NETWORK : " + _0x9135ee.map(_0x1b708d => {
        return "\n- " + _0x1b708d.BALANCE + " " + _0x1b708d.SYMBOL;
      }) + "\nTBNB NETWORK    : " + _0x1ec5e8.map(_0x6280fd => {
        return "\n- " + _0x6280fd.BALANCE + " " + _0x6280fd.SYMBOL;
      }) + "\n\nScore           : " + _0x3d637f + "\n               \nStatus : " + _0x5350a9 + "\nDelay  : " + _0xd27bd + "\n=============================================="
    });
  }
  ['info'](_0x7efa44 = '') {
    this.twisters.put('2', {
      'text': "\n==============================================\nInfo : " + _0x7efa44 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove('2');
  }
  ["clear"](_0x12f679) {
    this.twisters.remove(_0x12f679);
  }
}
export default new Twist();
