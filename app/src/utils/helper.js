const a11_0x4b639d = function () {
  let _0x3d9d61 = true;
  return function (_0x1f6226, _0x2974f3) {
    const _0x2eb662 = _0x3d9d61 ? function () {
      if (_0x2974f3) {
        const _0x5d4d51 = _0x2974f3.apply(_0x1f6226, arguments);
        _0x2974f3 = null;
        return _0x5d4d51;
      }
    } : function () {};
    _0x3d9d61 = false;
    return _0x2eb662;
  };
}();
const a11_0x1d619f = a11_0x4b639d(this, function () {
  return a11_0x1d619f.toString().search("(((.+)+)+)+$").toString().constructor(a11_0x1d619f).search("(((.+)+)+)+$");
});
a11_0x1d619f();
import _0x459a34 from './twist.js';
import _0x5cb16e from 'bip39';
export class Helper {
  static ['delay'] = (_0x1ea5f5, _0x294019, _0x31c1e5, _0x2fe0f5) => {
    return new Promise(async _0x18d9a5 => {
      let _0x43054e = _0x1ea5f5;
      if (_0x294019 != undefined) {
        await _0x459a34.log(_0x31c1e5, _0x294019, _0x2fe0f5, "Delaying for " + this.msToTime(_0x1ea5f5));
      } else {
        _0x459a34.info("Delaying for " + this.msToTime(_0x1ea5f5));
      }
      const _0x23aaba = setInterval(async () => {
        _0x43054e -= 0x3e8;
        if (_0x294019 != undefined) {
          await _0x459a34.log(_0x31c1e5, _0x294019, _0x2fe0f5, "Delaying for " + this.msToTime(_0x43054e));
        } else {
          _0x459a34.info("Delaying for " + this.msToTime(_0x43054e));
        }
        if (_0x43054e <= 0x0) {
          clearInterval(_0x23aaba);
          _0x18d9a5();
        }
      }, 0x3e8);
      setTimeout(async () => {
        clearInterval(_0x23aaba);
        await _0x459a34.clearInfo();
        if (_0x294019) {
          await _0x459a34.log(_0x31c1e5, _0x294019, _0x2fe0f5);
        }
        _0x18d9a5();
      }, _0x1ea5f5);
    });
  };
  static ["msToTime"](_0x31f130) {
    const _0x394059 = Math.floor(_0x31f130 / 0x36ee80);
    const _0x257926 = _0x31f130 % 0x36ee80;
    const _0x37c825 = Math.floor(_0x257926 / 0xea60);
    const _0x55bfe0 = _0x257926 % 0xea60;
    const _0x266d01 = Math.round(_0x55bfe0 / 0x3e8);
    return _0x394059 + " Hours " + _0x37c825 + " Minutes " + _0x266d01 + " Seconds";
  }
  static ["refCheck"](_0x5cbb1a, _0x741375) {
    if (true) {
    }
  }
  static ["randomUserAgent"]() {
    const _0x5b6046 = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374", "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374"];
    return _0x5b6046[Math.floor(Math.random() * _0x5b6046.length)];
  }
  ["static"]() {
    console.log('');
  }
  static ["determineType"](_0x57622e) {
    return !!this.isMnemonic(_0x57622e);
  }
  static ["isMnemonic"](_0x33cb7e) {
    return _0x5cb16e.validateMnemonic(_0x33cb7e);
  }
  static ["serializeBigInt"] = _0x51d3ed => {
    return JSON.parse(JSON.stringify(_0x51d3ed, (_0xdd3f7a, _0x3447e5) => typeof _0x3447e5 === "bigint" ? _0x3447e5.toString() : _0x3447e5));
  };
}
