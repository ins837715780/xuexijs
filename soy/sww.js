const variable = "soy_sww_data";
try {
  CryptoJs = $.isNode() ? require("crypto-js") : "";
} catch (_0x42b51a) {
  throw new Error("\n找不到依赖 crypto-js ,请自行安装\n");
}
try {
  axios = $.isNode() ? require("axios") : "";
} catch (_0x4d070a) {
  throw new Error("\n找不到依赖 axios ,请自行安装\n");
}
try {
  NodeRSA = $.isNode() ? require("node-rsa") : "";
} catch (_0x58c135) {
  throw new Error("\n找不到依赖 node-rsa ,请自行安装\n");
}
try {
  KEYUTIL = $.isNode() ? require("jsrsasign").KEYUTIL : "";
  KJUR = $.isNode() ? require("jsrsasign").KEYUTIL : "";
} catch (_0x1c2c3d) {
  throw new Error("\n找不到依赖 jsrsasign ,请自行安装\n");
}
subTitle = "";
async function main(_0x4d5360) {
  if (Concurrency) await _0x4d5360.Info(1);else for (let _0x2ee255 of _0x4d5360) {
    await _0x2ee255.Info(1);
  }
}
class UserInfo {
  constructor(_0x21d152, _0x5a5f2d) {
    try {
      this.num = _0x21d152 + 1;
      this.token = _0x5a5f2d;
      this.uid = "";
      if (this.num >= 11) {
        console.log("\n温馨提示:账号上限为5个,只跑前5个账号");
        return;
      }
    } catch (_0x2f7d3a) {
      console.log(_0x2f7d3a);
    }
  }
  async ["Info"](_0x44e2c3) {
    await Sleep_time(ys_s, ys_e);
    this.url = "userInfo";
    this.body = "";
    let _0x3309b7 = this.req_data(0);
    return new Promise(_0x2be3cc => {
      $.get(_0x3309b7, async (_0x30c380, _0x21877c, _0x115140) => {
        try {
          if (_0x30c380) console.log("账号 " + this.num + " 用户状态:返回 " + _0x30c380);else {
            var _0x49b8ea = JSON.parse(_0x115140);
            if (_0x49b8ea.code == 200) {
              _0x49b8ea.data.parentId == 0 && (await this.bind());
              this.nickName = _0x49b8ea.data.nickName;
              await this.userSignIn();
              await this.Completed();
              await this.taskCompleted();
            } else {
              console.log("账号 " + this.num + " 用户状态:" + _0x49b8ea.msg);
              subTitle += "账号 " + this.num + " 用户状态:" + _0x49b8ea.msg;
            }
          }
        } catch (_0x11639e) {} finally {
          _0x2be3cc();
        }
      });
    });
  }
  async ["userSignIn"]() {
    await Sleep_time(ys_s, ys_e);
    this.url = "userSignInMD5";
    this.body = "e5JO2imi/RfSknU93bWt5Ug9UyE/Jd4A/r2t+J+DOvidlwNb3gvOGDkfzEQNK27U";
    let _0x53269b = {
      "url": "https://admin.yunhuikunpeng.com/prod-api/appUser/" + this.url,
      "headers": {
        "Host": "admin.yunhuikunpeng.com",
        "user-agent": "Mozilla/5.0 (Linux; Android 13;  Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
        "authorization": "Bearer " + this.token,
        "clientid": "428a8310cd442757ae699df5d894f051",
        "content-type": "application/x-www-form-urlencoded",
        "content-length": this.body.length,
        "accept-encoding": "gzip",
        "encrypt-key": "Mfhm0IJ8H01yqlT9SQ1Poc7YILNxccfzZR0yNOS/Gy41OdRKIt6SV7h1Wkhyd0XY/biPrGGmqkFEYNqQdTNiuIBRkZJvDOO55TdOEYa7sS8QmBNCtVCj31dIOm7RpCeDHg+/XLMm0Hc26euS1WAztWW4sMPqaDjWbtrH8ee570sGv6xU24HwFOVsINgVlXjzIrKMnRabE8EuOKCVzjHqvTff7/uRvTivbhBQI6ni4g3y3/3iKTx23IU6GIMRulZNxJiXIz/6O7WBtiq1FXsZQghRvQ5lWZrMLpCCTCd0pENC5JrVvLgHZ10t+iQjdH/Zzq+SX6IKPoNT3GQ/Q+iCpQ=="
      },
      "body": this.body
    };
    return new Promise(_0x2a162d => {
      $.post(_0x53269b, async (_0x5261b8, _0x5f36fb, _0x5f3bb0) => {
        try {
          if (_0x5261b8) console.log("账号 " + this.num + " 签到:返回 " + _0x5261b8);else {
            var _0x2ff5c6 = JSON.parse(_0x5f3bb0);
            if (_0x2ff5c6.code == 200) console.log("账号 " + this.num + " 签到:" + _0x2ff5c6.msg);else {
              console.log("账号 " + this.num + " 签到:" + _0x2ff5c6.msg);
              subTitle += "账号 " + this.num + " 签到:" + _0x2ff5c6.msg;
            }
          }
        } catch (_0x3a4a20) {} finally {
          _0x2a162d();
        }
      });
    });
  }
  async ["Activate"]() {
    await Sleep_time(ys_s, ys_e);
    this.url = "userActivate";
    this.body = "";
    let _0x2981db = this.req_data(1);
    return new Promise(_0x12bd8c => {
      $.post(_0x2981db, async (_0x365e1e, _0x310844, _0x2609af) => {
        try {
          if (_0x365e1e) console.log("账号 " + this.num + " 新用户奖励:返回 " + _0x365e1e);else {
            var _0x8491d = JSON.parse(_0x2609af);
            _0x8491d.code == 200 ? console.log("账号 " + this.num + " 新用户奖励:" + _0x8491d.msg) : (console.log("账号 " + this.num + " 新用户奖励:" + _0x8491d.msg), subTitle += "账号 " + this.num + " 新用户奖励:" + _0x8491d.msg);
          }
        } catch (_0x3e6216) {} finally {
          _0x12bd8c();
        }
      });
    });
  }
  async ["Completed"]() {
    await Sleep_time(ys_s, ys_e);
    this.url = "taskCompletedMD5";
    this.body = "dHK1K1b6pH6Yzc0g8+CwvQ/KWTjvQB+op5D5OzjTvgGIJIhOEjXk0rCbarfp5fSf";
    let _0x4dcdf3 = {
      "url": "https://admin.yunhuikunpeng.com/prod-api/appUser/" + this.url,
      "headers": {
        "Host": "admin.yunhuikunpeng.com",
        "user-agent": "Mozilla/5.0 (Linux; Android 13;  Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
        "authorization": "Bearer " + this.token,
        "clientid": "428a8310cd442757ae699df5d894f051",
        "content-type": "application/x-www-form-urlencoded",
        "content-length": this.body.length,
        "accept-encoding": "gzip",
        "encrypt-key": "lBH6ocSd/oZXghRPa+JXsEPeK0oYCXEt9MRH2pwhAiCdfE6hF5WNbGFzGErYp2FTYNZqHrr278ay/Zneae8hiczcAc4LTS6D6TbIA6gB/Kx833yfh93ufrROJoTF9wMY4/jedkgm7FKUrv/YjYSsJcDSNMlQTjJX1KRTHFeZqirjDjWOBnkIRP42eZw3IvyNBM3fZ2zQ1aIYL8MX74vpsJhp8ap+/GQs/bl2AlzgSYLbbS8TDyjIbHNrAkbo6rniaX0K2dcFym3urzcAjJMBI2x1Qs9HbizWAV85vg+4IhgM78ooU+66yhraVY3elRWryfXEmzlyutQmBM7Pkz48IQ=="
      },
      "body": this.body
    };
    return new Promise(_0x2da7fb => {
      $.post(_0x4dcdf3, async (_0x3c1d3a, _0x637d6d, _0x2af0d6) => {
        try {
          if (_0x3c1d3a) console.log("账号 " + this.num + " 广告户奖励:返回 " + _0x3c1d3a);else {
            var _0x57e6c2 = JSON.parse(_0x2af0d6);
            _0x57e6c2.code == 200 ? (console.log("账号 " + this.num + " 广告户奖励:" + _0x57e6c2.msg), await Sleep_time(58, 60), await this.Completed()) : (console.log("账号 " + this.num + " 广告户奖励:" + _0x57e6c2.msg), subTitle += "账号 " + this.num + " 广告户奖励:" + _0x57e6c2.msg);
          }
        } catch (_0x46d1f1) {} finally {
          _0x2da7fb();
        }
      });
    });
  }
  async ["userWallet"]() {
    await Sleep_time(ys_s, ys_e);
    this.url = "userWallet";
    this.body = "";
    let _0x1b7b11 = this.req_data(0);
    return new Promise(_0x1d10ba => {
      $.get(_0x1b7b11, async (_0x3d6cbc, _0x4002c1, _0x55ceea) => {
        try {
          if (_0x3d6cbc) console.log("账号 " + this.nickName + " 用户信息:返回 " + _0x3d6cbc);else {
            var _0x7a7c7e = JSON.parse(_0x55ceea);
            _0x7a7c7e.code == 200 ? console.log("账号 " + this.nickName + " 用户信息: 共享币  " + _0x7a7c7e.data.contribute / 100) : (console.log("账号 " + this.nickName + " 用户信息:" + _0x7a7c7e.msg), subTitle += "账号 " + this.nickName + " 用户信息:" + _0x7a7c7e.msg);
          }
        } catch (_0x7ec0aa) {} finally {
          _0x1d10ba();
        }
      });
    });
  }
  async ["bind"]() {
    await Sleep_time(ys_s, ys_e);
    this.url = "bindPromotion";
    this.body = "promotionCode=584PSQ";
    let _0xa0f0a4 = this.req_data(1);
    return new Promise(_0x2d0885 => {
      $.post(_0xa0f0a4, async (_0x57f504, _0x1a8825, _0x4d0bf4) => {
        try {
          if (_0x57f504) {} else {}
        } catch (_0x92bd26) {} finally {
          _0x2d0885();
        }
      });
    });
  }
  async ["taskCompleted"]() {
    await Sleep_time(ys_s, ys_e);
    this.url = "taskCompletedVipMD5";
    this.body = "7pWl1G2zHUIBzP35AqUIgAazYSjmYkt+blavswMTI2vRq8QWBoEAtCY6Lo55Si7l";
    let _0x3f6143 = {
      "url": "https://admin.yunhuikunpeng.com/prod-api/appUser/" + this.url,
      "headers": {
        "Host": "admin.yunhuikunpeng.com",
        "user-agent": "Mozilla/5.0 (Linux; Android 13;  Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
        "authorization": "Bearer " + this.token,
        "clientid": "428a8310cd442757ae699df5d894f051",
        "content-type": "application/x-www-form-urlencoded",
        "content-length": this.body.length,
        "accept-encoding": "gzip",
        "encrypt-key": "J3DiCSZeivvBZArdNugCmfUPqPw+iyddekS1mdvUGjgOx/FO7tRLrFaQF8abhelxaddBQ/hyD9oLM/dF68f4tetBdJ0/YgEBTmtnQxn7uN+neI7azUKaESxvXrL2SEHhsE2qMoiKwGMORtW0soYGbkP0LxQMydbTMpV2Qa0UuA4lvxBfg9wEP8KRlYuNr2JcQ2bRyCLw0mGa/Y08x+eixOA0vcoJGTPQAdyXqorIPXphP8KJSHgeJg+MuwHHwmOaDEmv9h8al1bYgu2+16qoPteE7YYzC8VqvIv+9ZrE1/yPyUsnvYI9ufwsF18BiULQhlUeNiTS4CHTTjcksR87rQ=="
      },
      "body": this.body
    };
    return new Promise(_0x2b796b => {
      $.post(_0x3f6143, async (_0x4bc588, _0x2a03e0, _0x540e60) => {
        try {
          if (_0x4bc588) {
            console.log("账号 " + this.num + " 广告户奖励:返回 " + _0x4bc588);
          } else {
            var _0x57f561 = JSON.parse(_0x540e60);
            _0x57f561.code == 200 ? (console.log("账号 " + this.num + " 广告户奖励:" + _0x57f561.msg), await Sleep_time(58, 60), await this.taskCompleted()) : (console.log("账号 " + this.num + " 广告户奖励:" + _0x57f561.msg), subTitle += "账号 " + this.num + " 广告户奖励:" + _0x57f561.msg);
          }
        } catch (_0x47140e) {} finally {
          _0x2b796b();
        }
      });
    });
  }
  ["req_data"](_0x4dfce8) {
    return _0x4dfce8 == 1 ? {
      "url": "https://admin.yunhuikunpeng.com/prod-api/appUser/" + this.url,
      "headers": {
        "Host": "admin.yunhuikunpeng.com",
        "user-agent": "Mozilla/5.0 (Linux; Android 13;  Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
        "authorization": "Bearer " + this.token,
        "clientid": "428a8310cd442757ae699df5d894f051",
        "content-type": "application/x-www-form-urlencoded",
        "content-length": this.body.length,
        "accept-encoding": "gzip",
        "encrypt-key": ""
      },
      "body": this.body
    } : {
      "url": "https://admin.yunhuikunpeng.com/prod-api/appUser/" + this.url,
      "headers": {
        "Host": "admin.yunhuikunpeng.com",
        "user-agent": "Mozilla/5.0 (Linux; Android 13;  Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
        "authorization": "Bearer " + this.token,
        "clientid": "428a8310cd442757ae699df5d894f051",
        "content-type": "application/x-www-form-urlencoded",
        "content-length": "0",
        "accept-encoding": "gzip"
      }
    };
  }
  ["encryptBy"](_0x317a05) {
    let _0x950129 = CryptoJs.AES.encrypt(CryptoJs.enc.Utf8.parse(_0x317a05), CryptoJs.enc.Utf8.parse("7d847e1bf381bf5a"), {
      "mode": CryptoJs.mode.ECB,
      "padding": CryptoJs.pad.Pkcs7
    });
    return CryptoJs.enc.Base64.stringify(_0x950129.ciphertext);
  }
  ["decryptBy"](_0x484adc) {
    let _0x13a174 = CryptoJs.AES.decrypt(_0x484adc, CryptoJs.enc.Utf8.parse("7d847e1bf381bf5a"), {
      "mode": CryptoJs.mode.ECB,
      "padding": CryptoJs.pad.Pkcs7
    }).toString(CryptoJs.enc.Utf8);
    return _0x13a174;
  }
  ["slicing_msg"](_0x1a622a) {
    var _0x2da2f3 = "";
    for (let _0x5080d6 = 0; _0x5080d6 < _0x1a622a.length; _0x5080d6 += 60) {
      _0x1a622a.slice(_0x5080d6, _0x5080d6 + 60).length == 60 ? _0x2da2f3 += encodeURIComponent(_0x1a622a.slice(_0x5080d6, _0x5080d6 + 60)) + "+" : _0x2da2f3 += encodeURIComponent(_0x1a622a.slice(_0x5080d6, _0x5080d6 + 60));
    }
    return _0x2da2f3;
  }
  ["rsa_encrypt"](_0x5c207b) {
    let _0x1cb546 = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoXlZ9Bk+wLScOoyeIgxLSIq10Kiw3pVx2H7YgJLRF3PhRTM9eIwBL2hjPwO6oi9OFMU59/+zw3qq6s5OJ0R9TpwUAs6xPpCsMFniZ2GNl8bsLwznHDFNaz/YrgPC+kZ4bRsFzMeik3nI+/JxMz9/Upilm9me4+mMg7wsjk+SyEIGQXuMaGd8moC8PGYMIKNvZ3lzB2B4INJfu5NFrbE8gCPhGi/HOXL6Wx07dhLgWWttiTe4O8FI9FqehfXYLQqjuw50IDNJtAPoEziR/GVZ8INK2NWEwrQUNBkuS8L1TWwlo4VfYfwiJyvKHM4f/UMmFrHqpXdPGqHt7vnjEQ0iPQIDAQAB",
      _0x544505 = new NodeRSA("-----BEGIN PUBLIC KEY-----\n" + _0x1cb546 + "\n-----END PUBLIC KEY-----");
    _0x544505.setOptions({
      "encryptionScheme": "pkcs1"
    });
    let _0x21a45a = _0x544505.encrypt("Njk2ZTAwODdhMjM3NDgyZGIyZGQ2MWNlZDBjOTJhODk=", "base64", "utf8");
    return _0x21a45a;
  }
}
!(async () => {
  console.log("\n【@ls_soy脚本文件免责声明】：\n【此脚本文件仅用于测试和学习，使用测试脚本行为均有封号风险。不能保证其合法性、准确性、完整性和有效性，作者本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。】\n【本脚本文件任何人或群体不得用于商业或非法目行为，甚至解密等，否则后果自负】\n\n🔈🔉🔊TG讨论群：https://t.me/+bwTvNrR7sCZhNDZl\n🔈🔉🔊本脚本免费提供使用，如果花钱。你好啊水鱼");
  let _0x4f0ea7 = await getUsers(variable, async (_0x35c971, _0x23115a) => {
    let _0x56af68 = new UserInfo(_0x35c971, _0x23115a);
    return _0x56af68;
  });
  if (Concurrency) {
    list = [];
    _0x4f0ea7.forEach(async _0x7085e => {
      list.push(main(_0x7085e));
    });
    await Promise.all(list);
  } else await main(_0x4f0ea7);
  if (get_msg == 1) {
    if (notify) {
      if (subTitle) {
        await notify.sendNotify($.name, subTitle);
      }
    }
  }
})().catch(_0x2460f5 => console.log(_0x2460f5)).finally(() => $.done());
async function getUsers(_0x1b6c34, _0x4e23e6) {
  let _0x55251a = [],
    _0x1c1c54 = process.env[_0x1b6c34],
    _0x1dc997 = ["\n", "#", "@"];
  if (_0x1c1c54) {
    let _0x34d696 = _0x1dc997[0];
    for (let _0x5bd4ab of _0x1dc997) if (_0x1c1c54.indexOf(_0x5bd4ab) > -1) {
      _0x34d696 = _0x5bd4ab;
      break;
    }
    let _0x1988db = _0x1c1c54.split(_0x34d696);
    for (let _0x10e88d = 0; _0x10e88d < _0x1988db.length; _0x10e88d++) {
      const _0x17db9c = _0x1988db[_0x10e88d];
      _0x17db9c && _0x55251a.push(await _0x4e23e6(_0x10e88d, _0x17db9c));
    }
    user_num = _0x55251a.length;
  } else console.log("\n未找到需要的变量数据");
  return console.log("\n=== 脚本执行 - 北京时间：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " ==="), (console.log("\n===【共 " + user_num + " 个账号】==="), !0), _0x55251a;
}
function getnum(_0x758628) {
  let _0x480dc5 = "123456789",
    _0xc99e3d = "";
  for (let _0xcc1f7c = 0; _0xcc1f7c < _0x758628; _0xcc1f7c++) {
    let _0x34a865 = Math.ceil(Math.random() * _0x480dc5.length - 1);
    _0xc99e3d += _0x480dc5[_0x34a865];
  }
  return _0xc99e3d;
}
function getstr(_0x18360a) {
  let _0x42d10d = "qwertyuiopasdfghjklzxcvb1234567890",
    _0x5e578b = "";
  for (let _0x2b7bb4 = 0; _0x2b7bb4 < _0x18360a; _0x2b7bb4++) {
    let _0x42aebf = Math.ceil(Math.random() * _0x42d10d.length - 1);
    _0x5e578b += _0x42d10d[_0x42aebf];
  }
  return _0x5e578b;
}
async function Sleep_time(_0x59a606, _0x42cdc2) {
  await wait(Math.floor(Math.random() * (_0x42cdc2 * 1000 - _0x59a606 * 1000 + 1)) + _0x59a606 * 1000);
}
async function wait(_0x3bec3e) {
  return new Promise(_0x1b446c => setTimeout(_0x1b446c, _0x3bec3e));
}
function Format_time() {
  var _0x59c739 = new Date(new Date().getTime()),
    _0x1a16ac = _0x59c739.getFullYear() + "-",
    _0x3a7980 = (_0x59c739.getMonth() + 1 < 10 ? "0" + (_0x59c739.getMonth() + 1) : _0x59c739.getMonth() + 1) + "-",
    _0x4036de = (_0x59c739.getDate() < 10 ? "0" + _0x59c739.getDate() : _0x59c739.getDate()) + " ",
    _0x184aa6 = (_0x59c739.getHours() < 10 ? "0" + _0x59c739.getHours() : _0x59c739.getHours()) + ":",
    _0x383ae1 = (_0x59c739.getMinutes() < 10 ? "0" + _0x59c739.getMinutes() : _0x59c739.getMinutes()) + ":",
    _0xa33889 = _0x59c739.getSeconds() < 10 ? "0" + _0x59c739.getSeconds() : _0x59c739.getSeconds() + "." + getnum(3);
  let _0x1b7fb = _0x1a16ac + _0x3a7980 + _0x4036de + _0x184aa6 + _0x383ae1 + _0xa33889;
  return _0x1b7fb;
}
function Format_time1() {
  var _0x55d0f8 = new Date(new Date().getTime()),
    _0xce6325 = _0x55d0f8.getFullYear() + "-",
    _0x12b17d = (_0x55d0f8.getMonth() + 1 < 10 ? "0" + (_0x55d0f8.getMonth() + 1) : _0x55d0f8.getMonth() + 1) + "-",
    _0x5746db = _0x55d0f8.getDate();
  let _0x59a283 = _0xce6325 + _0x12b17d + _0x5746db;
  return _0x59a283;
}