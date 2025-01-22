import '../service/core-service.js';
import { Twisters } from 'twisters';
import a13_0x220e47 from './logger.js';
import { accountList } from '../../accounts/accounts.js';
class Twist {
  ['twisters'];
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0x27aad1 = '', _0x8dad0a = '', _0x3f02a5, _0x1d8886) {
    const _0x45c52d = accountList.indexOf(_0x8dad0a);
    if (_0x1d8886 == undefined) {
      a13_0x220e47.info("Account " + (_0x45c52d + 0x1) + " - " + _0x27aad1);
      _0x1d8886 = '-';
    }
    const _0x4caa34 = _0x3f02a5.address ?? '-';
    const _0x25a428 = _0x3f02a5.balance ?? [];
    const _0x3b67d8 = _0x3f02a5.evmBalance ?? [];
    const _0x5159b6 = _0x3f02a5.bscBalance ?? [];
    const _0x7b9a8e = _0x3f02a5.user ?? {};
    const _0x13137c = _0x7b9a8e.MgoUser ?? {};
    const _0x1504ab = _0x13137c.integral ?? '-';
    const _0x4d58d5 = _0x3f02a5.evmWallet ?? undefined;
    this.twisters.put(_0x8dad0a, {
      'text': "\n================== Account " + (_0x45c52d + 0x1) + " =================\nAddress         : - " + _0x4caa34 + " (MANGO) " + (_0x4d58d5 ? "\n               - " + _0x3f02a5.evmAddress + " (EVM)" : '') + "\n\nBalance         : \nMANGO NETWORK   : " + _0x25a428.map(_0x3b7a09 => {
        return "\n- " + _0x3b7a09.totalBalance + " " + _0x3b7a09.coinType.split('::').pop();
      }) + "\nSEPOLIA NETWORK : " + _0x3b67d8.map(_0x53cecc => {
        return "\n- " + _0x53cecc.BALANCE + " " + _0x53cecc.SYMBOL;
      }) + "\nTBNB NETWORK    : " + _0x5159b6.map(_0x41b780 => {
        return "\n- " + _0x41b780.BALANCE + " " + _0x41b780.SYMBOL;
      }) + "\n\nScore           : " + _0x1504ab + "\n               \nStatus : " + _0x27aad1 + "\nDelay  : " + _0x1d8886 + "\n=============================================="
    });
  }
  ["info"](_0x56ffc9 = '') {
    this.twisters.put('2', {
      'text': "\n==============================================\nInfo : " + _0x56ffc9 + "\n=============================================="
    });
    return;
  }
  ['clearInfo']() {
    this.twisters.remove('2');
  }
  ["clear"](_0x5ecbe3) {
    this.twisters.remove(_0x5ecbe3);
  }
}
export default new Twist();
