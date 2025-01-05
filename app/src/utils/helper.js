import _0x250ff9 from './twist.js';
export class Helper {
  static ["delay"] = (_0x370b60, _0x5ab9d0, _0x240f83, _0x598ca7) => {
    return new Promise(async _0x4ea683 => {
      let _0x1ad058 = _0x370b60;
      if (_0x5ab9d0 != undefined) {
        await _0x250ff9.log(_0x240f83, _0x5ab9d0, _0x598ca7, "Delaying for " + this.msToTime(_0x370b60));
      } else {
        _0x250ff9.info("Delaying for " + this.msToTime(_0x370b60));
      }
      const _0x28129a = setInterval(async () => {
        _0x1ad058 -= 0x3e8;
        if (_0x5ab9d0 != undefined) {
          await _0x250ff9.log(_0x240f83, _0x5ab9d0, _0x598ca7, "Delaying for " + this.msToTime(_0x1ad058));
        } else {
          _0x250ff9.info("Delaying for " + this.msToTime(_0x1ad058));
        }
        if (_0x1ad058 <= 0x0) {
          clearInterval(_0x28129a);
          _0x4ea683();
        }
      }, 0x3e8);
      setTimeout(async () => {
        clearInterval(_0x28129a);
        await _0x250ff9.clearInfo();
        if (_0x5ab9d0) {
          await _0x250ff9.log(_0x240f83, _0x5ab9d0, _0x598ca7);
        }
        _0x4ea683();
      }, _0x370b60);
    });
  };
  static ['msToTime'](_0x5a460d) {
    const _0x21076d = Math.floor(_0x5a460d / 0x36ee80);
    const _0xb2573f = _0x5a460d % 0x36ee80;
    const _0x171906 = Math.floor(_0xb2573f / 0xea60);
    const _0x1b1899 = _0xb2573f % 0xea60;
    const _0x3c9c43 = Math.round(_0x1b1899 / 0x3e8);
    return _0x21076d + " Hours " + _0x171906 + " Minutes " + _0x3c9c43 + " Seconds";
  }
  static ["refCheck"](_0xe6ac56, _0x5ebb14) {
    if (true) {
  }
  static ['randomUserAgent']() {
    const _0x274896 = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374", "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374"];
    return _0x274896[Math.floor(Math.random() * _0x274896.length)];
  }
  ["static"]() {
    console.log();
  }
}
