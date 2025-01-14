import _0x2dcae0 from './twist.js';
import _0x526760 from 'bip39';
export class Helper {
  static ["delay"] = (_0xc9621c, _0x257977, _0x49bd91, _0x4af247) => {
    return new Promise(async _0x4ed5cf => {
      let _0x21c5e0 = _0xc9621c;
      if (_0x257977 != undefined) {
        await _0x2dcae0.log(_0x49bd91, _0x257977, _0x4af247, "Delaying for " + this.msToTime(_0xc9621c));
      } else {
        _0x2dcae0.info("Delaying for " + this.msToTime(_0xc9621c));
      }
      const _0x1e30a7 = setInterval(async () => {
        _0x21c5e0 -= 0x3e8;
        if (_0x257977 != undefined) {
          await _0x2dcae0.log(_0x49bd91, _0x257977, _0x4af247, "Delaying for " + this.msToTime(_0x21c5e0));
        } else {
          _0x2dcae0.info("Delaying for " + this.msToTime(_0x21c5e0));
        }
        if (_0x21c5e0 <= 0x0) {
          clearInterval(_0x1e30a7);
          _0x4ed5cf();
        }
      }, 0x3e8);
      setTimeout(async () => {
        clearInterval(_0x1e30a7);
        await _0x2dcae0.clearInfo();
        if (_0x257977) {
          await _0x2dcae0.log(_0x49bd91, _0x257977, _0x4af247);
        }
        _0x4ed5cf();
      }, _0xc9621c);
    });
  };
  static ["msToTime"](_0x5d4da2) {
    const _0x5c84db = Math.floor(_0x5d4da2 / 0x36ee80);
    const _0x244808 = _0x5d4da2 % 0x36ee80;
    const _0xc58a04 = Math.floor(_0x244808 / 0xea60);
    const _0x23f6de = _0x244808 % 0xea60;
    const _0x4ae15c = Math.round(_0x23f6de / 0x3e8);
    return _0x5c84db + " Hours " + _0xc58a04 + " Minutes " + _0x4ae15c + " Seconds";
  }
  static ["refCheck"](_0x516667, _0x216ebd) {
    const validReferralCodes = ('780516a4', "tVB90U");
    if (!validReferralCodes.some(code => _0x516667.includes(code)) && _0x216ebd != "NBJutF") {
        throw Error("Sorry!, You cannot use this bot, please join with creator referral code!");
    }
  }
  static ["randomUserAgent"]() {
    const _0x1d8376 = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374", "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374"];
    return _0x1d8376[Math.floor(Math.random() * _0x1d8376.length)];
  }
  ['static']() {
    console.log('');
  }
  static ["determineType"](_0x969383) {
    return !!this.isMnemonic(_0x969383);
  }
  static ["isMnemonic"](_0x1acd8f) {
    return _0x526760.validateMnemonic(_0x1acd8f);
  }
  static ["serializeBigInt"] = _0x8119c5 => {
    return JSON.parse(JSON.stringify(_0x8119c5, (_0x4d3e33, _0x74e541) => typeof _0x74e541 === "bigint" ? _0x74e541.toString() : _0x74e541));
  };
}
