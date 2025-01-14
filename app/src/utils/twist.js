import '../service/core-service.js';
import { Twisters } from 'twisters';
import a13_0x2a99e3 from './logger.js';
import { accountList } from '../../accounts/accounts.js';
class Twist {
  ["twisters"];
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0xe92071 = '', _0x37a7bf = '', _0x252331, _0x58e373) {
    const _0x40f7ff = accountList.indexOf(_0x37a7bf);
    if (_0x58e373 == undefined) {
      a13_0x2a99e3.info("Account " + (_0x40f7ff + 0x1) + " - " + _0xe92071);
      _0x58e373 = '-';
    }
    const _0x6ae767 = _0x252331.address ?? '-';
    const _0xd26ba6 = _0x252331.balance ?? [];
    const _0x411830 = _0x252331.evmBalance ?? [];
    const _0x5e6226 = _0x252331.bscBalance ?? [];
    const _0x4167d2 = _0x252331.user ?? {};
    const _0x288567 = _0x4167d2.MgoUser ?? {};
    const _0x2ef516 = _0x288567.integral ?? '-';
    const _0x41dc0e = _0x252331.evmWallet ?? undefined;
    this.twisters.put(_0x37a7bf, {
      'text': "\n================== Account " + (_0x40f7ff + 0x1) + " ==================\nAddress         : - " + _0x6ae767 + " (MANGO) " + (_0x41dc0e ? "\n               - " + _0x252331.evmAddress + " (EVM)" : '') + "\n\nBalance         : \nMANGO NETWORK   : " + _0xd26ba6.map(_0x24116e => {
        return "\n- " + _0x24116e.totalBalance + " " + _0x24116e.coinType.split('::').pop();
      }) + "\nSEPOLIA NETWORK : " + _0x411830.map(_0x1aff1f => {
        return "\n- " + _0x1aff1f.BALANCE + " " + _0x1aff1f.SYMBOL;
      }) + "\nTBNB NETWORK    : " + _0x5e6226.map(_0xbd6033 => {
        return "\n- " + _0xbd6033.BALANCE + " " + _0xbd6033.SYMBOL;
      }) + "\n\nScore        : " + _0x2ef516 + "\n               \nStatus : " + _0xe92071 + "\nDelay  : " + _0x58e373 + "\n=============================================="
    });
  }
  ["info"](_0x129e6e = '') {
    this.twisters.put('2', {
      'text': "\n==============================================\nInfo : " + _0x129e6e + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove('2');
  }
  ['clear'](_0x375ba8) {
    this.twisters.remove(_0x375ba8);
  }
}
export default new Twist();
