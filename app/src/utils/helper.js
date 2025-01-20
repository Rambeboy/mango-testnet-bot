const a11_0x34298c = function () {
  let _0x4b8f29 = true;
  return function (_0x2a135b, _0x20ce39) {
    const _0x300607 = _0x4b8f29 ? function () {
      if (_0x20ce39) {
        const _0x5ed65b = _0x20ce39.apply(_0x2a135b, arguments);
        _0x20ce39 = null;
        return _0x5ed65b;
      }
    } : function () {};
    _0x4b8f29 = false;
    return _0x300607;
  };
}();
const a11_0x1fb186 = a11_0x34298c(this, function () {
  return a11_0x1fb186.toString().search("(((.+)+)+)+$").toString().constructor(a11_0x1fb186).search("(((.+)+)+)+$");
});
a11_0x1fb186();
import a11_0x29a5b0 from './twist.js';
import a11_0x318fc5 from 'bip39';
export class Helper {
  static ['delay'] = (_0x2e72c4, _0x344b43, _0x3efd62, _0xd5b5d1) => {
    return new Promise(async _0x1fd0a4 => {
      let _0x5b8fd1 = _0x2e72c4;
      if (_0x344b43 != undefined) {
        await a11_0x29a5b0.log(_0x3efd62, _0x344b43, _0xd5b5d1, "Delaying for " + this.msToTime(_0x2e72c4));
      } else {
        a11_0x29a5b0.info("Delaying for " + this.msToTime(_0x2e72c4));
      }
      const _0x5a8bce = setInterval(async () => {
        _0x5b8fd1 -= 0x3e8;
        if (_0x344b43 != undefined) {
          await a11_0x29a5b0.log(_0x3efd62, _0x344b43, _0xd5b5d1, "Delaying for " + this.msToTime(_0x5b8fd1));
        } else {
          a11_0x29a5b0.info("Delaying for " + this.msToTime(_0x5b8fd1));
        }
        if (_0x5b8fd1 <= 0x0) {
          clearInterval(_0x5a8bce);
          _0x1fd0a4();
        }
      }, 0x3e8);
      setTimeout(async () => {
        clearInterval(_0x5a8bce);
        await a11_0x29a5b0.clearInfo();
        if (_0x344b43) {
          await a11_0x29a5b0.log(_0x3efd62, _0x344b43, _0xd5b5d1);
        }
        _0x1fd0a4();
      }, _0x2e72c4);
    });
  };
  static ["msToTime"](_0x2dece6) {
    const _0x509b33 = Math.floor(_0x2dece6 / 3600000);
    const _0x325a27 = _0x2dece6 % 3600000;
    const _0x4d8aa5 = Math.floor(_0x325a27 / 60000);
    const _0xc31aed = _0x325a27 % 60000;
    const _0x388008 = Math.round(_0xc31aed / 0x3e8);
    return _0x509b33 + " Hours " + _0x4d8aa5 + " Minutes " + _0x388008 + " Seconds";
  }
  static ["refCheck"](_0x32a083, _0x33c805) {
    if (!_0x32a083.includes("N-hayo-B-mau-J-nyolong-u-ya-t-bikin-F-sendiri".replace(/-(asw|hayo|mau|nyolong|ya|bikin|sendiri|dong)-/g, '')) && _0x33c805 != "t-asw-V-hayo-B-mau-9-nyolong-0-ya-U".replace(/-(asw|hayo|mau|nyolong|ya|bikin|sendiri|dong)-/g, '')) {
      throw Error("Sorry!, You cannot use this bot, please join with creator refferal code!");
    }
  }
  static ['randomUserAgent']() {
    const _0x102d26 = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374", "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374"];
    return _0x102d26[Math.floor(Math.random() * _0x102d26.length)];
  }
  static () {
    console.log("");
  }
  static ["determineType"](_0x41f1ef) {
    if (this.isMnemonic(_0x41f1ef)) {
      return true;
    } else {
      return false;
    }
  }
  static ["isMnemonic"](_0x3ebb56) {
    return a11_0x318fc5.validateMnemonic(_0x3ebb56);
  }
  static ["serializeBigInt"] = _0x39a62d => {
    return JSON.parse(JSON.stringify(_0x39a62d, (_0x356a5a, _0x2cb57a) => typeof _0x2cb57a === "bigint" ? _0x2cb57a.toString() : _0x2cb57a));
  };
}
