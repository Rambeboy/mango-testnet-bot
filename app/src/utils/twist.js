import '../service/core-service.js';
import { Twisters } from 'twisters';
import _0x576cd4 from './logger.js';
import { accountList } from '../../accounts/accounts.js';
class Twist {
  ['twisters'];
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0x5e5d5b = '', _0x26b008 = '', _0x44d90d, _0x3c3cea) {
    const _0x27b8bb = accountList.indexOf(_0x26b008);
    if (_0x3c3cea == undefined) {
      _0x576cd4.info("Account " + (_0x27b8bb + 0x1) + " - " + _0x5e5d5b);
      _0x3c3cea = '-';
    }
    const _0x2c9d0a = _0x44d90d.address ?? '-';
    const _0x1f826 = _0x44d90d.balance ?? [];
    const _0x39a4d8 = _0x44d90d.user ?? {};
    const _0x749281 = _0x39a4d8.MgoUser ?? {};
    const _0x5bf204 = _0x749281.integral ?? '-';
    this.twisters.put(_0x26b008, {
      'text': "\n================= Account " + (_0x27b8bb + 0x1) + " ==================\nAddress      : " + _0x2c9d0a + "\nBalance      : " + _0x1f826.map(_0x37fe97 => {
        return "\n- " + _0x37fe97.totalBalance + " " + _0x37fe97.coinType.split('::').pop();
      }) + "\nScore        : " + _0x5bf204 + "\n               \nStatus : " + _0x5e5d5b + "\nDelay  : " + _0x3c3cea + "\n=============================================="
    });
  }
  ["info"](_0x2f7162 = '') {
    this.twisters.put('2', {
      'text': "\n==============================================\nInfo : " + _0x2f7162 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove('2');
  }
  ['clear'](_0x56ed6f) {
    this.twisters.remove(_0x56ed6f);
  }
}
export default new Twist();
