/*
中国联通 v2.01

包含以下功能:
阅光宝盒, 签到, 立减金打卡, 阅读专区抽奖, 云盘抽奖, 联通祝福
支付日活动 (每个月26-28号)
517活动 (5.10-6.08)

定时每天两三次
需要在联通APP中选择退出登录-切换账号登录, 捉下面这个包
https://m.client.10010.com/mobileService/onLine.htm
把请求体(body)里面的token_online参数填到变量 chinaUnicomCookie 里, 多账号换行或&或@隔开:
export chinaUnicomCookie="a3e4c1ff25da2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
不会捉包的可以使用网页获取: https://service.leafxxx.win/unicom/login.html

cron: 0 0,7,20 * * *
const $ = new Env("中国联通");
*/
const _0x5ee78c = _0x2c4855("中国联通"),
  _0x26e5c0 = require("got"),
  _0x1fd4e0 = require("path"),
  {
    exec: _0x33749f
  } = require("child_process"),
  _0x356d1c = require("crypto-js"),
  _0x122d3a = require("form-data"),
  {
    CookieJar: _0x46745f
  } = require("tough-cookie"),
  _0x1769ee = "chinaUnicom",
  _0x53ad51 = ["\n", "&", "@"],
  _0x5cc2f8 = [_0x1769ee + "Cookie"],
  _0x512666 = 50000,
  _0x3cfb0d = 3;
const _0x281c41 = 2.01,
  _0x3ca0e5 = "chinaUnicom",
  _0x28235d = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x5a9ced = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x3ca0e5 + ".json",
  _0x5772da = "iphone_c@11.0503",
  _0x9ef8e8 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:" + _0x5772da + "}",
  _0x589603 = 5,
  _0x3c8f10 = 13,
  _0x6f1aa7 = 1000,
  _0x274df4 = 3600000,
  _0x2c3bdb = 100,
  _0x48e706 = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x41ccd9 = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x498869 = "10000002",
  _0x49ecfb = "7k1HcDL8RKvc",
  _0x26ea96 = "update!@#1234567",
  _0xfb30ba = "16-Bytes--String",
  _0x3e0503 = "225",
  _0x25d6ba = "225",
  _0x4e3be5 = "party",
  _0x2d3690 = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x422648 = "1",
  _0x114f49 = "wocareMBHServiceLife1",
  _0x47fc36 = "beea1c7edf7c4989b2d3621c4255132f",
  _0x2b424 = "f4cd4ffeb5554586acf65ba7110534f5",
  _0x31b69f = "0123456789",
  _0x4bd6ca = "qwertyuiopasdfghjklzxcvbnm",
  _0x12908f = process.env[_0x1769ee + "Uuid"] || _0x5ee78c.randomUuid(),
  _0x3ee7df = [9, 10, 11, 12, 13],
  _0x5a9757 = 1000,
  _0x152198 = 5000,
  _0x229686 = "1001000003",
  _0x18c9c1 = "100002",
  _0x445b59 = "";
let _0x1a9b1e = [],
  _0x3df404 = [],
  _0x137efa = [],
  _0x27f516 = null,
  _0x150f75 = [6640, 6641];
const _0x1f9872 = 7,
  _0x1665d1 = 5,
  _0x2a78a8 = {
    name: "星座配对",
    id: 2
  };
const _0x1a41f3 = {
  name: "大转盘",
  id: 3
};
const _0x3b1b44 = {
  name: "盲盒抽奖",
  id: 4
};
const _0x33fe68 = [_0x2a78a8, _0x1a41f3, _0x3b1b44];
function _0x3b6c92(_0x5a7a9f, _0x303418, _0x15f269, _0x1e33b1, _0x445a3f, _0x2d0fe0) {
  return _0x356d1c[_0x5a7a9f].encrypt(_0x356d1c.enc.Utf8.parse(_0x1e33b1), _0x356d1c.enc.Utf8.parse(_0x445a3f), {
    mode: _0x356d1c.mode[_0x303418],
    padding: _0x356d1c.pad[_0x15f269],
    iv: _0x356d1c.enc.Utf8.parse(_0x2d0fe0)
  }).ciphertext.toString(_0x356d1c.enc.Hex);
}
function _0x2b967a(_0x159e53, _0x5dd820, _0x40374f, _0x5709fc, _0x333b66, _0x57a9b4) {
  return _0x356d1c[_0x159e53].decrypt({
    ciphertext: _0x356d1c.enc.Hex.parse(_0x5709fc)
  }, _0x356d1c.enc.Utf8.parse(_0x333b66), {
    mode: _0x356d1c.mode[_0x5dd820],
    padding: _0x356d1c.pad[_0x40374f],
    iv: _0x356d1c.enc.Utf8.parse(_0x57a9b4)
  }).toString(_0x356d1c.enc.Utf8);
}
let _0x420722 = 0,
  _0x1be2b5 = 0;
function _0x1dbafd() {
  _0x1be2b5 = 1;
  const _0x44f025 = _0x1fd4e0.basename(process.argv[1]),
    _0x4b32c9 = ["bash", "timeout", "grep"];
  let _0x12d16f = ["ps afx"];
  _0x12d16f.push("grep " + _0x44f025);
  _0x12d16f = _0x12d16f.concat(_0x4b32c9.map(_0x4cec0e => "grep -v \"" + _0x4cec0e + " \""));
  _0x12d16f.push("wc -l");
  const _0x29ab4f = _0x12d16f.join("|"),
    _0x29ab64 = () => {
      _0x33749f(_0x29ab4f, (_0x2c667d, _0x19ad99, _0x44310d) => {
        if (_0x2c667d || _0x44310d) {
          return;
        }
        _0x420722 = parseInt(_0x19ad99.trim(), 10);
      });
      setTimeout(_0x29ab64, 1000);
    };
  _0x29ab64();
}
class _0x50f941 {
  constructor() {
    this.index = _0x5ee78c.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x918e70 = {
      limit: 0
    };
    const _0x3e681f = {
      Connection: "keep-alive"
    };
    const _0x4846ce = {
      retry: _0x918e70,
      timeout: _0x512666,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x3e681f
    };
    this.got = _0x26e5c0.extend(_0x4846ce);
    if (!_0x1be2b5) {
      _0x1dbafd();
    }
  }
  log(_0x22c407, _0x250077 = {}) {
    var _0x41c30a = "",
      _0x4d84c4 = _0x5ee78c.userCount.toString().length;
    if (this.index) {
      _0x41c30a += "账号[" + _0x5ee78c.padStr(this.index, _0x4d84c4) + "]";
    }
    if (this.name) {
      _0x41c30a += "[" + this.name + "]";
    }
    _0x5ee78c.log(_0x41c30a + _0x22c407, _0x250077);
  }
  set_cookie(_0x5c2fcc, _0x32523c, _0x9ef6ce, _0x1688e1, _0x2c4e1d = {}) {
    this.cookieJar.setCookieSync(_0x5c2fcc + "=" + _0x32523c + "; Domain=" + _0x9ef6ce + ";", "" + _0x1688e1);
  }
  async request(_0x196fc3) {
    const _0x11bdfa = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x177a38 = ["TimeoutError"],
      _0x1fe70a = [];
    var _0x5378d9 = null,
      _0x1a3bed = 0,
      _0x1bee7e = _0x196fc3.fn || _0x196fc3.url;
    let _0x277ad5 = _0x5ee78c.get(_0x196fc3, "valid_code", _0x1fe70a);
    _0x196fc3.method = _0x196fc3?.["method"]?.["toUpperCase"]() || "GET";
    let _0x303db6;
    while (_0x1a3bed < _0x3cfb0d) {
      try {
        _0x1a3bed++;
        _0x303db6 = null;
        let _0x2b066e = null,
          _0x4858b5 = _0x196fc3?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x512666,
          _0xccd91d = false,
          _0x1a8fe0 = Math.max(this.index - 2, 0),
          _0x22d5a0 = Math.max(this.index - 3, 1),
          _0x4de93d = _0x1a8fe0 * _0x22d5a0 * 1000,
          _0x2d3acc = (_0x420722 - 1) * (_0x420722 - 1) * 1000,
          _0x457d0c = (_0x5ee78c.userCount - 1) * 200;
        await _0x5ee78c.wait(_0x4de93d + _0x2d3acc + _0x457d0c);
        await new Promise(async _0x158f71 => {
          setTimeout(() => {
            _0xccd91d = true;
            _0x158f71();
          }, _0x4858b5);
          await this.got(_0x196fc3).then(_0x1a7d96 => {
            _0x5378d9 = _0x1a7d96;
          }, _0x1c384b => {
            _0x2b066e = _0x1c384b;
            _0x5378d9 = _0x1c384b.response;
            _0x303db6 = _0x2b066e?.["code"];
          });
          _0x158f71();
        });
        if (_0xccd91d) {
          this.log("[" + _0x1bee7e + "]请求超时(" + _0x4858b5 / 1000 + "秒)，重试第" + _0x1a3bed + "次");
        } else {
          if (_0x177a38.includes(_0x2b066e?.["name"])) {
            this.log("[" + _0x1bee7e + "]请求超时(" + _0x2b066e.code + ")，重试第" + _0x1a3bed + "次");
          } else {
            if (_0x11bdfa.includes(_0x2b066e?.["code"])) {
              this.log("[" + _0x1bee7e + "]请求错误(" + _0x2b066e.code + ")，重试第" + _0x1a3bed + "次");
            } else {
              let _0x49fb1b = _0x5378d9?.["statusCode"] || 999,
                _0x1664b8 = _0x49fb1b / 100 | 0;
              _0x1664b8 > 3 && !_0x277ad5.includes(_0x49fb1b) && this.log("请求[" + _0x1bee7e + "]返回[" + _0x49fb1b + "]");
              if (_0x1664b8 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x19b102) {
        _0x19b102.name == "TimeoutError" ? this.log("[" + _0x1bee7e + "]请求超时，重试第" + _0x1a3bed + "次") : this.log("[" + _0x1bee7e + "]请求错误(" + _0x19b102.message + ")，重试第" + _0x1a3bed + "次");
      }
    }
    if (_0x5378d9 == null) {
      return Promise.resolve({
        statusCode: _0x303db6 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x2bc79d,
      headers: _0x1d3bf5,
      body: _0x304813
    } = _0x5378d9;
    if (_0x304813) {
      try {
        _0x304813 = JSON.parse(_0x304813);
      } catch {}
    }
    const _0x5b0507 = {
      statusCode: _0x2bc79d,
      headers: _0x1d3bf5,
      result: _0x304813
    };
    return Promise.resolve(_0x5b0507);
  }
}
let _0xb01a1f = _0x50f941;
try {
  let _0x167c44 = require("./LocalBasic");
  _0xb01a1f = _0x167c44;
} catch {}
let _0x40d9de = new _0xb01a1f(_0x5ee78c);
class _0x467ce8 extends _0xb01a1f {
  constructor(_0x1e30f0) {
    super(_0x5ee78c);
    this.cookieJar = new _0x46745f();
    const _0x2f961b = {
      "User-Agent": _0x9ef8e8
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x2f961b
    });
    let _0x49503c = _0x1e30f0.split("#");
    this.token_online = _0x49503c[0];
    this.unicomTokenId = _0x5ee78c.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x5ee78c.randomString(32, _0x31b69f + _0x4bd6ca).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.moonbox_task_record = {};
    this.moonbox_notified = [];
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x47324b, _0x20f9d7, _0x21e52e = {}) {
    let _0x5b0eee = _0x21e52e?.["domain"] || "10010.com",
      _0x28e4cb = _0x21e52e?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x47324b, _0x20f9d7, _0x5b0eee, _0x28e4cb, _0x21e52e);
  }
  get_bizchannelinfo() {
    const _0x1614dd = {
      bizChannelCode: _0x25d6ba,
      disriBiz: _0x4e3be5,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x284740 = JSON.stringify(_0x1614dd);
    return _0x284740;
  }
  get_epay_authinfo() {
    const _0x5f438f = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x5f438f);
  }
  get_flmf_data(_0x2aa446 = "welfareCenter") {
    const _0x34e5c7 = {
      sid: this.flmf_sid,
      actcode: _0x2aa446
    };
    return _0x34e5c7;
  }
  encode_woread(_0x101eb8) {
    let _0x2d5930 = _0x3b6c92("AES", "CBC", "Pkcs7", JSON.stringify(_0x101eb8), _0x26ea96, _0xfb30ba);
    return Buffer.from(_0x2d5930, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x5ee78c.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_ltyp_sign_header(_0x45fe8e) {
    let _0x328a05 = Date.now(),
      _0x22f7b7 = Math.floor(89999 * Math.random()) + 100000,
      _0x4516ba = _0x18c9c1,
      _0xa4f57f = _0x445b59,
      _0x14c2db = _0x356d1c.MD5(_0x45fe8e + _0x328a05 + _0x22f7b7 + _0x4516ba + _0xa4f57f).toString();
    const _0x224d2d = {
      key: _0x45fe8e,
      resTime: _0x328a05,
      reqSeq: _0x22f7b7,
      channel: _0x4516ba,
      version: _0xa4f57f,
      sign: _0x14c2db
    };
    return _0x224d2d;
  }
  async onLine(_0x41bfa1 = {}) {
    let _0x5573c1 = false;
    try {
      let _0x71b9f1 = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x5ee78c.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x48e706,
            version: _0x5772da,
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x5e6640,
          statusCode: _0x54bad7
        } = await this.request(_0x71b9f1),
        _0x5cf2b9 = _0x5ee78c.get(_0x5e6640, "code", _0x54bad7);
      if (_0x5cf2b9 == 0) {
        _0x5573c1 = true;
        this.valid = true;
        this.mobile = _0x5e6640?.["desmobile"];
        this.name = _0x5e6640?.["desmobile"];
        this.ecs_token = _0x5e6640?.["ecs_token"];
        this.city = _0x5e6640?.["list"];
        this.log("登录成功");
      } else {
        this.valid = false;
        this.log("登录失败[" + _0x5cf2b9 + "]");
      }
    } catch (_0x152fbe) {
      console.log(_0x152fbe);
    } finally {
      return _0x5573c1;
    }
  }
  async openPlatLineNew(_0x4f0ead, _0x11cf12 = {}) {
    const _0x6261bf = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0x28d7c9 = _0x6261bf;
    try {
      const _0x48400f = {
        to_url: _0x4f0ead
      };
      const _0x1ee866 = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x48400f
      };
      let {
        headers: _0x5e41a0,
        statusCode: _0x13b629
      } = await this.request(_0x1ee866);
      if (_0x5e41a0?.["location"]) {
        let _0x179e56 = new URL(_0x5e41a0.location),
          _0x16a6fe = _0x179e56.searchParams.get("type") || "02",
          _0x5f07a2 = _0x179e56.searchParams.get("ticket");
        !_0x5f07a2 && this.log("获取ticket失败");
        const _0x166cd0 = {
          loc: _0x5e41a0.location,
          ticket: _0x5f07a2,
          type: _0x16a6fe
        };
        _0x28d7c9 = _0x166cd0;
      } else {
        this.log("获取ticket失败[" + _0x13b629 + "]");
      }
    } catch (_0x5d7532) {
      console.log(_0x5d7532);
    } finally {
      return _0x28d7c9;
    }
  }
  async gettaskip(_0x496873 = {}) {
    let _0xad16fb = _0x5ee78c.randomString(32).toUpperCase();
    try {
      const _0x10e186 = {
        mobile: this.mobile,
        orderId: _0xad16fb
      };
      const _0x2b75f8 = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x10e186
      };
      await this.request(_0x2b75f8);
    } catch (_0x2b9a87) {
      console.log(_0x2b9a87);
    } finally {
      return _0xad16fb;
    }
  }
  async draw_28_queryChance(_0x2abfd1 = {}) {
    try {
      const _0xb43ca9 = {
        fn: "draw_28_queryChance",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x527882,
          statusCode: _0x379b1e
        } = await this.request(_0xb43ca9),
        _0x2c95dd = _0x5ee78c.get(_0x527882, "status", _0x379b1e);
      if (_0x2c95dd == "0000") {
        let _0x2de491 = parseInt(_0x527882?.["data"]?.["allRemainTimes"] || 0);
        this.log("28日五折日可以抽奖" + _0x2de491 + "次");
        let _0x27929e = false;
        while (_0x2de491-- > 0) {
          if (_0x27929e) {
            await _0x5ee78c.wait(8000);
          }
          _0x27929e = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x4448bd = _0x527882?.["message"] || _0x527882?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x2c95dd + "]: " + _0x4448bd);
      }
    } catch (_0x326c52) {
      console.log(_0x326c52);
    }
  }
  async draw_28_lottery(_0x1ec717 = {}) {
    try {
      const _0xcf7086 = {
        fn: "draw_28_lottery",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x4590f8,
          statusCode: _0x4e6235
        } = await this.request(_0xcf7086),
        _0x47b049 = _0x5ee78c.get(_0x4590f8, "status", _0x4e6235);
      if (_0x47b049 == "0000") {
        let _0x146b90 = _0x5ee78c.get(_0x4590f8?.["data"], "code", -1);
        if (_0x4590f8?.["data"]?.["uuid"]) {
          await _0x5ee78c.wait(2000);
          await this.draw_28_winningRecord(_0x4590f8.data.uuid);
        } else {
          let _0x2949e8 = _0x4590f8?.["data"]?.["message"] || _0x4590f8?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x146b90 + "]: " + _0x2949e8);
        }
      } else {
        let _0x1e89c4 = _0x4590f8?.["message"] || _0x4590f8?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x47b049 + "]: " + _0x1e89c4);
      }
    } catch (_0x303841) {
      console.log(_0x303841);
    }
  }
  async draw_28_winningRecord(_0x50f9df, _0x140caa = {}) {
    try {
      const _0xf66ec7 = {
        requestId: _0x50f9df
      };
      const _0x3c293e = {
        fn: "draw_28_winningRecord",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0xf66ec7
      };
      let {
          result: _0x5bf463,
          statusCode: _0x4125f6
        } = await this.request(_0x3c293e),
        _0x5c536e = _0x5ee78c.get(_0x5bf463, "status", _0x4125f6);
      if (_0x5c536e == "0000") {
        let _0x197cb9 = _0x5ee78c.get(_0x5bf463?.["data"], "code", -1);
        if (_0x197cb9 == "0000") {
          const _0x29e036 = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x5bf463?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x29e036);
        } else {
          let _0x2de0ae = _0x5bf463?.["data"]?.["message"] || _0x5bf463?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0x197cb9 + "]: " + _0x2de0ae);
        }
      } else {
        let _0x46d00a = _0x5bf463?.["message"] || _0x5bf463?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x5c536e + "]: " + _0x46d00a);
      }
    } catch (_0x4ed299) {
      console.log(_0x4ed299);
    }
  }
  async ttlxj_authorize(_0x45cdfd, _0x495734, _0x2db1d2, _0xa5f7d = {}) {
    try {
      const _0x24732b = {
        Origin: "https://epay.10010.com",
        Referer: _0x2db1d2
      };
      let _0x419d45 = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: _0x24732b,
          json: {
            response_type: "rptid",
            client_id: _0x41ccd9,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0x45cdfd,
              st_type: _0x495734,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x5ee78c.randomString(13),
              trace_id: _0x5ee78c.randomString(32)
            }
          }
        },
        {
          result: _0x1b8889
        } = await this.request(_0x419d45),
        _0xd90002 = _0x5ee78c.get(_0x1b8889, "status", -1);
      if (_0xd90002 == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x54c7a8 = _0x1b8889?.["message"] || _0x1b8889?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0xd90002 + "]: " + _0x54c7a8);
      }
    } catch (_0x5e2634) {
      console.log(_0x5e2634);
    }
  }
  async ttlxj_authCheck(_0x30614b = {}) {
    try {
      let _0x588e87 = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x19a07e
        } = await this.request(_0x588e87),
        _0x588755 = _0x5ee78c.get(_0x19a07e, "code", -1);
      if (_0x588755 == "0000") {
        let {
          mobile: _0x87d268,
          sessionId: _0x305c98,
          tokenId: _0xcaca0b,
          userId: _0x53904e
        } = _0x19a07e?.["data"]?.["authInfo"];
        const _0xe81c3c = {
          sessionId: _0x305c98,
          tokenId: _0xcaca0b,
          userId: _0x53904e
        };
        Object.assign(this, _0xe81c3c);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x588755 == "2101000100") {
          let _0x2bfcf1 = _0x19a07e?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x2bfcf1);
        } else {
          let _0x550f59 = _0x19a07e?.["msgInside"] || _0x19a07e?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x588755 + "]: " + _0x550f59);
        }
      }
    } catch (_0x3b2fbf) {
      console.log(_0x3b2fbf);
    }
  }
  async ttlxj_login(_0x4b8c90, _0x31519a = {}) {
    try {
      _0x4b8c90 += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x3e0503 + "&bizChannelCode=" + _0x25d6ba;
      const _0x155a9c = {
        fn: "ttlxj_login",
        method: "get",
        url: _0x4b8c90
      };
      let {
        headers: _0x33444e,
        statusCode: _0x2f13b8
      } = await this.request(_0x155a9c);
      if (_0x33444e?.["location"]) {
        let _0x5635df = new URL(_0x33444e.location);
        this.rptId = _0x5635df.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x2f13b8 + "]");
      }
    } catch (_0xe6de1) {
      console.log(_0xe6de1);
    }
  }
  async ttlxj_userDrawInfo(_0x3d6cfb = {}) {
    try {
      let _0x3e494a = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x4465e0
        } = await this.request(_0x3e494a),
        _0x43a1d0 = _0x5ee78c.get(_0x4465e0, "code", -1);
      if (_0x43a1d0 == "0000") {
        let _0xaa4cb5 = _0x4465e0?.["data"]?.["dayOfWeek"],
          _0x431f57 = "day" + _0xaa4cb5,
          _0xeb63dc = _0x4465e0?.["data"]?.[_0x431f57] == "1";
        const _0x34048a = {
          notify: true
        };
        this.log("天天领现金今天" + (_0xeb63dc ? "未" : "已") + "打卡", _0x34048a);
        if (_0xeb63dc) {
          let _0x165462 = new Date().getDay();
          _0x165462 % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x4e3078 = _0x4465e0?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x43a1d0 + "]: " + _0x4e3078);
      }
    } catch (_0x1ea5cd) {
      console.log(_0x1ea5cd);
    }
  }
  async ttlxj_unifyDrawNew(_0x229fa8, _0x5ae1b9 = {}) {
    try {
      let _0x1df333 = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            drawType: _0x229fa8,
            bizFrom: _0x3e0503,
            activityId: "TTLXJ20210330"
          }
        },
        {
          result: _0x415c07
        } = await this.request(_0x1df333),
        _0x70f254 = _0x5ee78c.get(_0x415c07, "code", -1);
      if (_0x70f254 == "0000" && _0x415c07?.["data"]?.["returnCode"] == 0) {
        let _0xb6a4b7 = _0x415c07?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x415c07?.["data"]?.["amount"]);
        const _0x4efa6f = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0xb6a4b7, _0x4efa6f);
      } else {
        let _0x1e8a9b = _0x415c07?.["data"]?.["returnMsg"] || _0x415c07?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x415c07?.["data"]?.["returnCode"] || _0x70f254) + "]: " + _0x1e8a9b);
      }
    } catch (_0xe97b22) {
      console.log(_0xe97b22);
    }
  }
  async ttlxj_h(_0x198013 = {}) {
    try {
      let _0xb3d4dd = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: {
          bizFrom: _0x3e0503,
          activityId: "TTLXJ20210330",
          uid: _0x2d3690
        }
      };
      await this.request(_0xb3d4dd);
    } catch (_0x3b25dc) {
      console.log(_0x3b25dc);
    }
  }
  async ttlxj_queryAvailable(_0xf4260b = {}) {
    try {
      let _0x133ef7 = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x230998
        } = await this.request(_0x133ef7),
        _0x5c33f4 = _0x5ee78c.get(_0x230998, "code", -1);
      if (_0x5c33f4 == "0000" && _0x230998?.["data"]?.["returnCode"] == 0) {
        let _0x4cb881 = _0x230998?.["data"]?.["availableAmount"] || 0;
        const _0x315071 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x4cb881 / 100).toFixed(2) + "元", _0x315071);
        let _0x3d1c3f = [],
          _0x3ae0b9 = Date.now();
        for (let _0x15def4 of _0x230998?.["data"]?.["prizeList"]?.["filter"](_0x314541 => _0x314541.status == "A")) {
          let _0x51709a = _0x15def4.endTime,
            _0x3fe8c7 = new Date(_0x51709a.slice(0, 4) + "-" + _0x51709a.slice(4, 6) + "-" + _0x51709a.slice(6, 8) + " 00:00:00"),
            _0x8ec3fc = _0x3fe8c7.getTime();
          if (_0x8ec3fc - _0x3ae0b9 < _0x1f9872 * 24 * 60 * 60 * 1000) {
            let _0x11ea29 = _0x5ee78c.time("yyyy-MM-dd", _0x8ec3fc);
            const _0x3e97ff = {
              timestamp: _0x8ec3fc,
              date: _0x11ea29,
              amount: _0x15def4.amount
            };
            _0x3d1c3f.push(_0x3e97ff);
          }
        }
        if (_0x3d1c3f.length) {
          const _0xc94318 = {
            timestamp: 0
          };
          let _0x217375 = _0xc94318,
            _0x3b84f3 = _0x3d1c3f.reduce(function (_0x442c15, _0xa33390) {
              (_0x217375.timestamp == 0 || _0xa33390.timestamp < _0x217375.timestamp) && (_0x217375 = _0xa33390);
              return _0x442c15 + parseFloat(_0xa33390.amount);
            }, 0);
          const _0x14e302 = {
            notify: true
          };
          this.log(_0x1f9872 + "天内过期立减金: " + _0x3b84f3.toFixed(2) + "元", _0x14e302);
          const _0xbc3e1d = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x217375.amount + "元 -- " + _0x217375.date + "过期", _0xbc3e1d);
        } else {
          const _0x2768aa = {
            notify: true
          };
          this.log(_0x1f9872 + "天内没有过期的立减金", _0x2768aa);
        }
      } else {
        let _0x34a409 = _0x230998?.["data"]?.["returnMsg"] || _0x230998?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x230998?.["data"]?.["returnCode"] || _0x5c33f4) + "]: " + _0x34a409);
      }
    } catch (_0x165acc) {
      console.log(_0x165acc);
    }
  }
  async epay_28_authCheck(_0x5adf26 = {}) {
    try {
      let _0x430461 = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x39dbb9
        } = await this.request(_0x430461),
        _0x4b4d99 = _0x5ee78c.get(_0x39dbb9, "code", -1);
      if (_0x4b4d99 == "0000") {
        let {
          mobile: _0x81b9ad,
          sessionId: _0x16aa1b,
          tokenId: _0x463c9b,
          userId: _0x2e31be
        } = _0x39dbb9?.["data"]?.["authInfo"];
        const _0x13e66c = {
          sessionId: _0x16aa1b,
          tokenId: _0x463c9b,
          userId: _0x2e31be
        };
        Object.assign(this, _0x13e66c);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x4b4d99 == "2101000100") {
          let _0x4fd22e = _0x39dbb9?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x4fd22e);
        } else {
          let _0x8b4d4 = _0x39dbb9?.["msgInside"] || _0x39dbb9?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x4b4d99 + "]: " + _0x8b4d4);
        }
      }
    } catch (_0x4aadb4) {
      console.log(_0x4aadb4);
    }
  }
  async epay_28_login(_0x3929fa, _0x293bc8 = {}) {
    try {
      let _0x22d2ae = _0x5ee78c.time("yyyyMM") + "28ZFR";
      _0x3929fa += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x22d2ae + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x14b2b9 = {
        fn: "epay_28_login",
        method: "get",
        url: _0x3929fa
      };
      let {
        headers: _0x1a6dd0,
        statusCode: _0x4f31e2
      } = await this.request(_0x14b2b9);
      if (_0x1a6dd0?.["location"]) {
        let _0x5de249 = new URL(_0x1a6dd0.location);
        this.rptId = _0x5de249.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x4f31e2 + "]");
      }
    } catch (_0x475f3e) {
      console.log(_0x475f3e);
    }
  }
  async epay_28_queryUserPage(_0x3c41ed = {}) {
    try {
      let _0x4f681c = _0x5ee78c.time("yyyyMM") + "28ZFR";
      const _0x3beff5 = {
        templateName: _0x4f681c
      };
      let _0x175ca8 = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x3beff5
        },
        {
          result: _0x1c6a88
        } = await this.request(_0x175ca8),
        _0x4efdcd = _0x5ee78c.get(_0x1c6a88, "code", -1);
      if (_0x4efdcd == "0000" && _0x1c6a88?.["data"]?.["returnCode"] == 0) {
        for (let _0x5cf53a of _0x1c6a88?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          _0x5cf53a?.["rainbowUnitInfos"]?.[0]?.["unitActivityId"] && (await this.epay_28_unifyDraw(_0x5cf53a.rainbowUnitInfos[0]));
          if (_0x5cf53a?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x4f681c, _0x5cf53a.mouldName);
            break;
          }
        }
      } else {
        let _0x1b8e45 = _0x1c6a88?.["message"] || _0x1c6a88?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x4efdcd + "]: " + _0x1b8e45);
      }
    } catch (_0x29bbe4) {
      console.log(_0x29bbe4);
    }
  }
  async epay_28_queryMiddleUnit(_0x39e50f, _0x140343, _0x50cd79 = {}) {
    try {
      const _0x1dc683 = {
        activityId: _0x39e50f,
        mouldName: _0x140343
      };
      let _0x47bdeb = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x1dc683
        },
        {
          result: _0x418660
        } = await this.request(_0x47bdeb),
        _0x16f190 = _0x5ee78c.get(_0x418660, "code", -1);
      if (_0x16f190 == "0000") {
        let _0x2b3abb = _0x5ee78c.time("dd");
        _0x418660?.["data"]?.[_0x2b3abb] == "1" ? this.log("联通支付日今日(" + _0x2b3abb + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x39e50f, _0x140343);
      } else {
        let _0x484e88 = _0x418660?.["message"] || _0x418660?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x16f190 + "]: " + _0x484e88);
      }
    } catch (_0x5c3090) {
      console.log(_0x5c3090);
    }
  }
  async epay_28_unifyDrawNew(_0x2bf868, _0x5864e0, _0x3644d4 = {}) {
    try {
      const _0x1c83ac = {
        bizFrom: _0x3e0503,
        activityId: _0x2bf868,
        mouldName: _0x5864e0
      };
      let _0x362d1e = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x1c83ac
        },
        {
          result: _0x2cfc62
        } = await this.request(_0x362d1e),
        _0x4ec382 = _0x5ee78c.get(_0x2cfc62, "code", -1);
      if (_0x4ec382 == "0000" && _0x2cfc62?.["data"]?.["returnCode"] == 0) {
        let _0x13665b = _0x2cfc62?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x2cfc62?.["data"]?.["amount"]);
        const _0x55f21c = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0x13665b, _0x55f21c);
      } else {
        let _0x495a77 = _0x2cfc62?.["data"]?.["returnMsg"] || _0x2cfc62?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x2cfc62?.["data"]?.["returnCode"] || _0x4ec382) + "]: " + _0x495a77);
      }
    } catch (_0x5081f0) {
      console.log(_0x5081f0);
    }
  }
  async epay_28_unifyDraw(_0x5d8a27, _0x4ef65d = {}) {
    try {
      const _0x1f1b78 = {
        activityId: _0x5d8a27.unitActivityId,
        isBigActivity: _0x5d8a27.isBigActivity,
        bigActivityId: _0x5d8a27.bigActivityId,
        bizFrom: _0x3e0503
      };
      let _0x4f0750 = {
          fn: "epay_28_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x1f1b78
        },
        {
          result: _0x1d7b4a
        } = await this.request(_0x4f0750),
        _0x4724b9 = _0x5ee78c.get(_0x1d7b4a, "code", -1);
      if (_0x4724b9 == "0000" && _0x1d7b4a?.["data"]?.["returnCode"] == 0) {
        const _0x732200 = {
          notify: true
        };
        this.log("联通支付日抽奖: " + (_0x1d7b4a?.["data"]?.["prizeName"] || ""), _0x732200);
      } else {
        let _0x24d3c4 = _0x1d7b4a?.["data"]?.["returnMsg"] || _0x1d7b4a?.["msg"] || "";
        this.log("联通支付日抽奖失败[" + (_0x1d7b4a?.["data"]?.["returnCode"] || _0x4724b9) + "]: " + _0x24d3c4);
      }
    } catch (_0x38bb4b) {
      console.log(_0x38bb4b);
    }
  }
  async appMonth_28_bind(_0x4fbbcf, _0x2fd196 = {}) {
    try {
      const _0x3a0c2c = {
        fn: "appMonth_28_bind",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/bind",
        form: {},
        valid_code: [401]
      };
      _0x3a0c2c.form.shareCode = _0x4fbbcf;
      _0x3a0c2c.form.cl = "WeChat";
      let {
        result: _0x3de6e3
      } = await this.request(_0x3a0c2c);
    } catch (_0x5d194d) {
      console.log(_0x5d194d);
    }
  }
  async appMonth_28_queryChance(_0x1d5bfc = {}) {
    try {
      const _0x48f83d = {
        fn: "appMonth_28_queryChance",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x229c83
        } = await this.request(_0x48f83d),
        _0x273163 = _0x5ee78c.get(_0x229c83, "status", -1);
      if (_0x273163 == "0000") {
        let {
          allRemainTimes: _0x4c941f,
          isUnicom: _0x3a4ef8
        } = _0x229c83?.["data"];
        if (_0x3a4ef8) {
          let _0x28315a = Math.min(_0x1665d1, _0x4c941f);
          this.log("联通支付日可以开宝箱" + _0x4c941f + "次, 去抽" + _0x28315a + "次");
          while (_0x28315a-- > 0) {
            await this.appMonth_28_lottery();
          }
        }
      } else {
        let _0x13a9a2 = _0x229c83?.["msg"] || "";
        this.log("联通支付日查询开宝箱次数失败[" + _0x273163 + "]: " + _0x13a9a2);
      }
    } catch (_0x5d319a) {
      console.log(_0x5d319a);
    }
  }
  async appMonth_28_lottery(_0x4f95a3 = {}) {
    try {
      const _0x577ad3 = {
        fn: "appMonth_28_lottery",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x256bb6
        } = await this.request(_0x577ad3),
        _0x21dd35 = _0x5ee78c.get(_0x256bb6, "status", -1);
      if (_0x21dd35 == "0000") {
        let {
          code: _0x50d824,
          uuid: _0xc7c432
        } = _0x256bb6?.["data"];
        _0xc7c432 ? await this.appMonth_28_winningRecord(_0xc7c432) : this.log("联通支付日开宝箱失败[" + _0x50d824 + "]");
      } else {
        let _0x524cfb = _0x256bb6?.["msg"] || "";
        this.log("联通支付日开宝箱失败[" + _0x21dd35 + "]: " + _0x524cfb);
      }
    } catch (_0x2532c4) {
      console.log(_0x2532c4);
    }
  }
  async appMonth_28_winningRecord(_0x33badb, _0x428a25 = {}) {
    try {
      const _0x26802e = {
        requestId: _0x33badb
      };
      const _0x501041 = {
        fn: "appMonth_28_winningRecord",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x26802e
      };
      let {
          result: _0x34c9c6
        } = await this.request(_0x501041),
        _0x5aab6f = _0x5ee78c.get(_0x34c9c6, "status", -1);
      if (_0x5aab6f == "0000") {
        let {
          code: _0x5a6944,
          prizeName: _0x558e05
        } = _0x34c9c6?.["data"];
        if (_0x5a6944 == "0000") {
          const _0x11b399 = {
            notify: true
          };
          this.log("联通支付日开宝箱: " + _0x558e05, _0x11b399);
        } else {
          let _0x476c52 = _0x34c9c6?.["data"]?.["message"] || "";
          this.log("联通支付日开宝箱[" + _0x5a6944 + "]: " + _0x476c52);
        }
      } else {
        let _0x38002b = _0x34c9c6?.["msg"] || "";
        this.log("联通支付日查询中奖奖品错误[" + _0x5aab6f + "]: " + _0x38002b);
      }
    } catch (_0x3d8e57) {
      console.log(_0x3d8e57);
    }
  }
  async sign_getContinuous(_0x4eba65 = {}) {
    try {
      const _0x538c93 = {
        taskId: "",
        channel: "shouye",
        imei: ""
      };
      const _0x4fa909 = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: _0x538c93
      };
      let {
          result: _0x3843a1
        } = await this.request(_0x4fa909),
        _0x2fae18 = _0x5ee78c.get(_0x3843a1, "status", -1);
      if (_0x2fae18 == "0000") {
        let _0x485d3f = _0x3843a1?.["data"]?.["todaySigned"] || 0;
        const _0x540234 = {
          notify: true
        };
        this.log("签到区今天" + (_0x485d3f == "1" ? "未" : "已") + "签到", _0x540234);
        _0x485d3f == "1" && (await _0x5ee78c.wait(1000), await this.sign_daySign());
      } else {
        let _0x1990d1 = _0x3843a1?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x2fae18 + "]: " + _0x1990d1);
      }
    } catch (_0x5d8d5d) {
      console.log(_0x5d8d5d);
    }
  }
  async sign_daySign(_0x41c7a3 = {}) {
    try {
      const _0x3e1f0d = {
        shareCl: "",
        shareCode: ""
      };
      const _0x2d24c5 = {
        fn: "sign_daySign",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/daySign",
        form: _0x3e1f0d
      };
      let {
          result: _0x35af45
        } = await this.request(_0x2d24c5),
        _0x464513 = _0x5ee78c.get(_0x35af45, "status", -1);
      if (_0x464513 == "0000") {
        let {
          prizeName: _0x3b0601,
          redSignMessage: _0x24e1d7
        } = _0x35af45?.["data"];
        const _0x1ee920 = {
          notify: true
        };
        this.log("签到区签到成功: [" + _0x3b0601 + "]" + _0x24e1d7, _0x1ee920);
      } else {
        let _0x1d5d96 = _0x35af45?.["msg"] || "";
        this.log("签到区签到失败[" + _0x464513 + "]: " + _0x1d5d96);
      }
    } catch (_0x38007b) {
      console.log(_0x38007b);
    }
  }
  async sign_queryBubbleTask(_0x137742 = {}) {
    try {
      const _0x19f583 = {
        fn: "sign_queryBubbleTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
      };
      let {
          result: _0x163934
        } = await this.request(_0x19f583),
        _0x3cbc12 = _0x5ee78c.get(_0x163934, "status", -1);
      if (_0x3cbc12 == "0000") {
        for (let _0x15df90 of _0x163934?.["data"]?.["paramsList"]?.["filter"](_0x683d8d => _0x683d8d.taskState == 1)) {
          let _0x51b526 = await this.gettaskip();
          await this.sign_doTask(_0x15df90, _0x51b526);
        }
      } else {
        let _0x306778 = _0x163934?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x3cbc12 + "]: " + _0x306778);
      }
    } catch (_0x3e3d1f) {
      console.log(_0x3e3d1f);
    }
  }
  async sign_doTask(_0x587c48, _0xbccddc, _0x3865de = {}) {
    try {
      const _0x39232f = {
        fn: "sign_doTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/task/doTask",
        form: {}
      };
      _0x39232f.form.id = _0x587c48.id;
      _0x39232f.form.orderId = _0xbccddc;
      _0x39232f.form.imei = "BB97982E-3F03-46D3-B904-819D626DF478";
      _0x39232f.form.prizeType = _0x587c48.rewardType;
      _0x39232f.form.positionFlag = 0;
      let {
          result: _0x1a4190
        } = await this.request(_0x39232f),
        _0x1ea11f = _0x5ee78c.get(_0x1a4190, "status", -1);
      if (_0x1ea11f == "0000") {
        this.log("完成任务[" + _0x587c48.actName + "]获得: " + _0x1a4190?.["data"]?.["prizeCount"] + _0x1a4190?.["data"]?.["prizeName"]);
      } else {
        let _0x2de4d0 = _0x1a4190?.["msg"] || "";
        this.log("完成任务[" + _0x587c48.actName + "]失败[" + _0x1ea11f + "]: " + _0x2de4d0);
      }
    } catch (_0xaf717e) {
      console.log(_0xaf717e);
    }
  }
  async game_login(_0x685b98, _0x21f0f0 = {}) {
    try {
      const _0x2596a5 = {
        channelid: "GAMELTAPP_90005"
      };
      const _0x316aef = {
        identityType: "esToken",
        code: this.ecs_token,
        ticket: _0x685b98,
        uuid: _0x12908f
      };
      const _0xf79ba2 = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: _0x2596a5,
        json: _0x316aef
      };
      let {
          result: _0x1b6619
        } = await this.request(_0xf79ba2),
        _0x15736a = _0x5ee78c.get(_0x1b6619, "code", -1);
      if (_0x15736a == 200) {
        this.game_token = _0x1b6619?.["data"]?.["access_token"];
        this.got = this.got.extend({
          headers: {
            Authorization: this.game_token
          }
        });
        await this.game_getMemberInfo();
        await this.game_signRecord();
        await this.game_lottery();
        await this.game_playSave();
        await this.game_taskList();
        await this.game_getMemberInfo();
        const _0x364256 = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x364256);
      } else {
        let _0x1611c9 = _0x1b6619?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0x15736a + "]: " + _0x1611c9);
      }
    } catch (_0x635547) {
      console.log(_0x635547);
    }
  }
  async game_getMemberInfo(_0x574bcc = {}) {
    try {
      const _0xcc9353 = {
        fn: "game_getMemberInfo",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
      };
      let {
          result: _0x2ebb7b
        } = await this.request(_0xcc9353),
        _0x5d223d = _0x5ee78c.get(_0x2ebb7b, "code", -1);
      if (_0x5d223d == 200) {
        this.point = _0x2ebb7b?.["data"]?.["userIntegral"];
      } else {
        let _0x322e2e = _0x2ebb7b?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x5d223d + "]: " + _0x322e2e);
      }
    } catch (_0x324e91) {
      console.log(_0x324e91);
    }
  }
  async game_signRecord(_0x2ea48d = {}) {
    try {
      const _0x5ae98a = {
        fn: "game_signRecord",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signRecord"
      };
      let {
          result: _0x4e7e2f
        } = await this.request(_0x5ae98a),
        _0x329de8 = _0x5ee78c.get(_0x4e7e2f, "code", -1);
      if (_0x329de8 == 200) {
        for (let _0x1e2966 of _0x4e7e2f?.["data"]) {
          if (_0x1e2966.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0x1e2966.signStatus == 2 ? "未" : "已") + "签到");
          if (_0x1e2966.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x43d70b = _0x4e7e2f?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x329de8 + "]: " + _0x43d70b);
      }
    } catch (_0x21f509) {
      console.log(_0x21f509);
    }
  }
  async game_signIn(_0x16dbe6 = {}) {
    try {
      const _0x62ec35 = {
        fn: "game_signIn",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signIn"
      };
      let {
          result: _0x2a5de7
        } = await this.request(_0x62ec35),
        _0x4b6ed4 = _0x5ee78c.get(_0x2a5de7, "code", -1);
      if (_0x4b6ed4 == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x22ef18 = _0x2a5de7?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0x4b6ed4 + "]: " + _0x22ef18);
      }
    } catch (_0x31b4e9) {
      console.log(_0x31b4e9);
    }
  }
  async game_checkSlider(_0x1ffc2e = {}) {
    let _0x2edd1a = false;
    try {
      const _0x419664 = {
        xPos: 234
      };
      const _0x4dc6d5 = {
        fn: "game_checkSlider",
        method: "post",
        url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
        searchParams: _0x419664
      };
      let {
          result: _0x4f0e38
        } = await this.request(_0x4dc6d5),
        _0x900ace = _0x5ee78c.get(_0x4f0e38, "code", -1);
      if (_0x900ace == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0xde3df3 = _0x4f0e38?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x900ace + "]: " + _0xde3df3);
      }
    } catch (_0x2af13f) {
      console.log(_0x2af13f);
    } finally {
      return _0x2edd1a;
    }
  }
  async game_lottery(_0xb8736c = {}) {
    try {
      let _0xf3a7cf = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x5ee78c.get(_0xb8736c, "id", 1)
          }
        },
        {
          result: _0x44925b
        } = await this.request(_0xf3a7cf),
        _0x4e583b = _0x5ee78c.get(_0x44925b, "code", -1);
      if (_0x4e583b == 200) {
        const _0x58c843 = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x44925b?.["data"]?.["productName"], _0x58c843);
      } else {
        let _0x59d7b2 = _0x44925b?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x4e583b + "]: " + _0x59d7b2);
      }
    } catch (_0x24a35b) {
      console.log(_0x24a35b);
    }
  }
  async game_taskList(_0x391ff4 = {}) {
    try {
      const _0x343991 = {
        fn: "game_taskList",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/list"
      };
      let {
          result: _0x4a4114
        } = await this.request(_0x343991),
        _0x3d50a9 = _0x5ee78c.get(_0x4a4114, "code", -1);
      if (_0x3d50a9 == 200) {
        for (let _0xa46e4f of _0x4a4114?.["data"]) {
          switch (_0xa46e4f.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0xa46e4f);
              break;
            case 2:
              break;
            default:
              _0x5ee78c.log("任务[" + _0xa46e4f.taskName + "]未知状态[" + _0xa46e4f.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0x43e92a = _0x4a4114?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x3d50a9 + "]: " + _0x43e92a);
      }
    } catch (_0x51ed86) {
      console.log(_0x51ed86);
    }
  }
  async game_taskReceive(_0x4bf759, _0x4f2741 = {}) {
    try {
      const _0x58f3d4 = {
        productId: _0x4bf759.productId,
        taskId: _0x4bf759.id
      };
      const _0x82c2d1 = {
        fn: "game_taskReceive",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/receive",
        searchParams: _0x58f3d4
      };
      let {
          result: _0x555f9a
        } = await this.request(_0x82c2d1),
        _0x480c2d = _0x5ee78c.get(_0x555f9a, "code", -1);
      if (_0x480c2d == 200) {
        this.log("领取任务[" + _0x4bf759.taskName + "]奖励成功");
      } else {
        let _0x3f50e7 = _0x555f9a?.["msg"] || "";
        this.log("领取任务[" + _0x4bf759.taskName + "]奖励失败[" + _0x480c2d + "]: " + _0x3f50e7);
      }
    } catch (_0x39a71d) {
      console.log(_0x39a71d);
    }
  }
  async game_playSave(_0x9a8e59 = {}) {
    try {
      let _0x5bb0f2 = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x5ee78c.randomString(2, "0123456789")
          }
        },
        {
          result: _0x1ad2b9
        } = await this.request(_0x5bb0f2),
        _0x268684 = _0x5ee78c.get(_0x1ad2b9, "code", -1);
      if (!(_0x268684 == 200)) {
        let _0x37378d = _0x1ad2b9?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x268684 + "]: " + _0x37378d);
      }
    } catch (_0x1d3d83) {
      console.log(_0x1d3d83);
    }
  }
  async flmf_login(_0x2b8e99, _0x2ffead = {}) {
    try {
      const _0x4ce539 = {
        fn: "flmf_login",
        method: "get",
        url: _0x2b8e99
      };
      let {
        headers: _0x53a517,
        statusCode: _0x474f75
      } = await this.request(_0x4ce539);
      if (_0x53a517?.["location"]) {
        let _0x7e28f0 = new URL(_0x53a517.location);
        this.flmf_sid = _0x7e28f0.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x474f75 + "]");
      }
    } catch (_0x4bd521) {
      console.log(_0x4bd521);
    }
  }
  async flmf_signInInit(_0x5a1d90 = {}) {
    try {
      let _0x30df7f = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x48c837
        } = await this.request(_0x30df7f),
        _0x5ce38e = _0x5ee78c.get(_0x48c837, "resultCode", -1);
      if (_0x5ce38e == "0000") {
        this.log("福利魔方今天" + (_0x48c837?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x48c837?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x48c837?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0x2bbc12 = _0x48c837?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x5ce38e + "]: " + _0x2bbc12);
      }
    } catch (_0x435b86) {
      console.log(_0x435b86);
    }
  }
  async flmf_signIn(_0x125dab = {}) {
    try {
      let _0x311869 = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x2d471e
        } = await this.request(_0x311869),
        _0x7afa50 = _0x5ee78c.get(_0x2d471e, "resultCode", -1);
      if (_0x7afa50 == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x3281b5 = _0x2d471e?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0x7afa50 + "]: " + _0x3281b5);
      }
    } catch (_0x547822) {
      console.log(_0x547822);
    }
  }
  async flmf_taskList(_0x21a841 = {}) {
    try {
      let _0x41ad08 = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x1ba263
        } = await this.request(_0x41ad08),
        _0x4da8b3 = _0x5ee78c.get(_0x1ba263, "resultCode", -1);
      if (_0x4da8b3 == "0000") {
        for (let _0x263200 of _0x1ba263?.["data"]?.["taskInfoList"]) {
          for (let _0x131d90 of _0x263200.taskInfoList.filter(_0x5cb6f6 => !_0x5cb6f6.done)) {
            for (let _0x25c29e = _0x131d90.hascount; _0x25c29e < _0x131d90.count; _0x25c29e++) {
              await this.flmf_gogLance(_0x131d90.id);
            }
          }
        }
      } else {
        let _0x120bb3 = _0x1ba263?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x4da8b3 + "]: " + _0x120bb3);
      }
    } catch (_0x81a634) {
      console.log(_0x81a634);
    }
  }
  async flmf_scanTask() {
    for (let _0x27d1f8 of _0x3ee7df) {
      await this.flmf_gogLance(_0x27d1f8);
    }
  }
  async flmf_gogLance(_0x147b18, _0xa54fc1 = {}) {
    try {
      let _0x23f341 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x147b18,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x3e1130
        } = await this.request(_0x23f341);
      await _0x5ee78c.wait_gap_interval(this.t_flmf_task, _0x5a9757);
      let _0x19dcf3 = _0x5ee78c.get(_0x3e1130, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x19dcf3 == "0000") {
        this.log("完成任务[" + _0x147b18 + "]成功");
      } else {
        let _0x13d5ae = _0x3e1130?.["resultMsg"] || "";
        this.log("完成任务[" + _0x147b18 + "]失败[" + _0x19dcf3 + "]: " + _0x13d5ae);
      }
    } catch (_0x38e42a) {
      console.log(_0x38e42a);
    }
  }
  async woread_api(_0x287ffc) {
    let _0x543840 = await this.request(_0x5ee78c.copy(_0x287ffc)),
      _0x43648d = _0x543840?.["result"]?.["message"] || "";
    _0x43648d?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x543840 = await this.request(_0x5ee78c.copy(_0x287ffc)));
    return _0x543840;
  }
  async woread_auth(_0x143ccd = {}) {
    let _0x22077b = false;
    try {
      let _0x586330 = _0x5ee78c.time("yyyyMMddhhmmss");
      const _0x10346f = {
        timestamp: _0x586330
      };
      let _0x2ade0d = this.encode_woread(_0x10346f),
        _0x43307a = Date.now().toString(),
        _0x34552f = _0x356d1c.MD5(_0x498869 + _0x49ecfb + _0x43307a).toString();
      const _0x1f9cf0 = {
        sign: _0x2ade0d
      };
      const _0x4093e8 = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x498869 + "/" + _0x43307a + "/" + _0x34552f,
        json: _0x1f9cf0
      };
      let {
          result: _0x5131d2
        } = await this.request(_0x4093e8),
        _0x3d5548 = _0x5ee78c.get(_0x5131d2, "code", -1);
      if (_0x3d5548 == "0000") {
        _0x22077b = true;
        this.woread_accesstoken = _0x5131d2?.["data"]?.["accesstoken"];
        this.got = this.got.extend({
          headers: {
            accesstoken: this.woread_accesstoken
          }
        });
      } else {
        let _0x421bfa = _0x5131d2?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x3d5548 + "]: " + _0x421bfa);
      }
    } catch (_0xfb5089) {
      console.log(_0xfb5089);
    } finally {
      return _0x22077b;
    }
  }
  async woread_login(_0x57a1d3 = {}) {
    let _0x1dec0e = false;
    try {
      let _0x5c883a = {
          phone: this.mobile,
          timestamp: _0x5ee78c.time("yyyyMMddhhmmss")
        },
        _0x5a1bd6 = this.encode_woread(_0x5c883a);
      const _0x133982 = {
        sign: _0x5a1bd6
      };
      const _0x435a5d = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x133982
      };
      let {
          result: _0x5a6dc8
        } = await this.request(_0x435a5d),
        _0xe9f6df = _0x5ee78c.get(_0x5a6dc8, "code", -1);
      if (_0xe9f6df == "0000") {
        _0x1dec0e = true;
        let {
          userid: _0x219fb2,
          userindex: _0x236502,
          token: _0xa3b474,
          verifycode: _0x29b460
        } = _0x5a6dc8?.["data"];
        this.woread_token = _0xa3b474;
        this.woread_verifycode = _0x29b460;
        const _0x19ee6f = {
          woread_userid: _0x219fb2,
          woread_userindex: _0x236502,
          woread_token: _0xa3b474,
          woread_verifycode: _0x29b460
        };
        Object.assign(this, _0x19ee6f);
      } else {
        let _0x538818 = _0x5a6dc8?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0xe9f6df + "]: " + _0x538818);
      }
    } catch (_0x50c055) {
      console.log(_0x50c055);
    } finally {
      return _0x1dec0e;
    }
  }
  async woread_getSeeVideoAddNumber(_0x74b6a2, _0xdc7185 = {}) {
    try {
      let _0x4da880 = {
          activityIndex: _0x74b6a2,
          ...this.get_woread_param()
        },
        _0x36646f = this.encode_woread(_0x4da880);
      const _0x4668f6 = {
        sign: _0x36646f
      };
      const _0x53cf8b = {
        fn: "woread_getSeeVideoAddNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
        json: _0x4668f6
      };
      let {
          result: _0x195569
        } = await this.woread_api(_0x53cf8b),
        _0xf2116c = _0x5ee78c.get(_0x195569, "code", -1);
      if (_0xf2116c == "0000") {
        _0x195569?.["data"] == -1 && (await this.woread_addUserSeeVideo(_0x74b6a2));
      } else {
        let _0x570fa7 = _0x195569?.["message"] || "";
        this.log("阅读活动[" + _0x74b6a2 + "]查询抽奖视频失败[" + _0xf2116c + "]: " + _0x570fa7);
      }
    } catch (_0x41100e) {
      console.log(_0x41100e);
    }
  }
  async woread_addUserSeeVideo(_0x43e619, _0x191a9a = {}) {
    try {
      let _0x9f0ed2 = _0x191a9a.num || 5,
        _0x5eae6e = {
          activityIndex: _0x43e619,
          num: _0x9f0ed2,
          ...this.get_woread_param()
        },
        _0x3548df = this.encode_woread(_0x5eae6e);
      const _0x1c8624 = {
        sign: _0x3548df
      };
      const _0x28e601 = {
        fn: "woread_addUserSeeVideo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
        json: _0x1c8624
      };
      let {
          result: _0x1fd36d
        } = await this.woread_api(_0x28e601),
        _0x34a8ae = _0x5ee78c.get(_0x1fd36d, "code", -1);
      if (_0x34a8ae == "0000") {
        this.log("阅读活动[" + _0x43e619 + "]看视频增加抽奖次数成功");
      } else {
        let _0x440cb5 = _0x1fd36d?.["message"] || "";
        this.log("阅读活动[" + _0x43e619 + "]看视频增加抽奖次数失败[" + _0x34a8ae + "]: " + _0x440cb5);
      }
    } catch (_0x48e51e) {
      console.log(_0x48e51e);
    }
  }
  async woread_getActivityNumber(_0x5d559f, _0x50ba38 = {}) {
    try {
      let _0x4f030a = {
          activeIndex: _0x5d559f,
          ...this.get_woread_param()
        },
        _0xd3a74e = this.encode_woread(_0x4f030a);
      const _0x179683 = {
        sign: _0xd3a74e
      };
      const _0x957c5e = {
        fn: "woread_getActivityNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
        json: _0x179683
      };
      let {
          result: _0x5abb47
        } = await this.woread_api(_0x957c5e),
        _0x579991 = _0x5ee78c.get(_0x5abb47, "code", -1);
      if (_0x579991 == "0000") {
        let _0x11e93a = _0x5abb47?.["data"] || 0;
        this.log("阅读活动[" + _0x5d559f + "]可以抽奖" + _0x11e93a + "次");
        while (_0x11e93a-- > 0) {
          await _0x5ee78c.wait(5000);
          await this.woread_doDraw(_0x5d559f);
        }
      } else {
        let _0x21c7bd = _0x5abb47?.["message"] || "";
        this.log("阅读活动[" + _0x5d559f + "]查询抽奖次数失败[" + _0x579991 + "]: " + _0x21c7bd);
      }
    } catch (_0x4db93d) {
      console.log(_0x4db93d);
    }
  }
  async woread_addDrawTimes(_0xa3ba0f, _0x1d805e = {}) {
    try {
      let _0x3c84f7 = {
          activetyindex: _0xa3ba0f,
          ...this.get_woread_param()
        },
        _0x91d5be = this.encode_woread(_0x3c84f7);
      const _0xc8541d = {
        sign: _0x91d5be
      };
      const _0x368713 = {
        fn: "woread_addDrawTimes",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes",
        json: _0xc8541d
      };
      await _0x5ee78c.wait_gap_interval(this.t_woread_draw, _0x152198);
      let {
        result: _0x27465e
      } = await this.woread_api(_0x368713);
      this.t_woread_draw = Date.now();
      let _0x5762f4 = _0x5ee78c.get(_0x27465e, "code", -1);
      if (_0x5762f4 == "0000") {
        this.log("阅读活动[" + _0xa3ba0f + "]打卡增加抽奖次数成功");
      } else {
        if (_0x5762f4 != "9999") {
          let _0x228e12 = _0x27465e?.["message"] || "";
          this.log("阅读活动[" + _0xa3ba0f + "]打卡增加抽奖次数失败[" + _0x5762f4 + "]: " + _0x228e12);
        }
      }
    } catch (_0xe3d75) {
      console.log(_0xe3d75);
    }
  }
  async woread_doDraw(_0x5869e1, _0x357a8e = {}) {
    try {
      let _0x3b5af5 = {
          activeindex: _0x5869e1,
          ...this.get_woread_param()
        },
        _0x2e15b2 = this.encode_woread(_0x3b5af5);
      const _0x4629b8 = {
        sign: _0x2e15b2
      };
      const _0x495704 = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x4629b8
      };
      await _0x5ee78c.wait_gap_interval(this.t_woread_draw, _0x152198);
      let {
        result: _0x3b679f
      } = await this.woread_api(_0x495704);
      this.t_woread_draw = Date.now();
      let _0x395341 = _0x5ee78c.get(_0x3b679f, "code", -1);
      if (_0x395341 == "0000") {
        const _0x457cb3 = {
          notify: true
        };
        this.log("阅读活动[" + _0x5869e1 + "]抽奖: " + (_0x3b679f?.["data"]?.["prizedesc"] || "空气"), _0x457cb3);
      } else {
        let _0x43614a = _0x3b679f?.["message"] || "";
        this.log("阅读活动[" + _0x5869e1 + "]抽奖失败[" + _0x395341 + "]: " + _0x43614a);
      }
    } catch (_0x587b86) {
      console.log(_0x587b86);
    }
  }
  async woread_queryTicketAccount(_0x1893e0 = {}) {
    try {
      let _0x29d91f = this.get_woread_param(),
        _0x2a48ad = this.encode_woread(_0x29d91f);
      const _0x53994c = {
        sign: _0x2a48ad
      };
      const _0x3416e = {
        fn: "woread_queryTicketAccount",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
        json: _0x53994c
      };
      let {
          result: _0xd44c4f
        } = await this.woread_api(_0x3416e),
        _0x461f05 = _0x5ee78c.get(_0xd44c4f, "code", -1);
      if (_0x461f05 == "0000") {
        let _0x390afc = (_0xd44c4f?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0xdc7f99 = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x390afc, _0xdc7f99);
      } else {
        let _0xc9711c = _0xd44c4f?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x461f05 + "]: " + _0xc9711c);
      }
    } catch (_0x5695af) {
      console.log(_0x5695af);
    }
  }
  async woread_addReadTime(_0x43af27 = {}) {
    try {
      let {
          readTime = 2,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = 1,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 1,
          channelid = "",
          chapterid = "-1",
          readtype = 1,
          isend = "0"
        } = _0x43af27,
        _0x17c48f = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_param()
        },
        _0x3851bb = this.encode_woread(_0x17c48f);
      const _0x1726fd = {
        sign: _0x3851bb
      };
      const _0x383186 = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x1726fd
      };
      let {
          result: _0x4dfb2e
        } = await this.request(_0x383186),
        _0x4926d3 = _0x5ee78c.get(_0x4dfb2e, "code", -1);
      if (_0x4926d3 == "0000") {
        this.log("刷新读小说时间: " + _0x4dfb2e?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x4dfb2e?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x15364d = _0x4dfb2e?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x4926d3 + "]: " + _0x15364d);
      }
    } catch (_0x51fbb1) {
      console.log(_0x51fbb1);
    }
  }
  async rabblit_queryActivityData(_0x4bcae1 = {}) {
    try {
      let _0x4951a4 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x4cae3c = this.encode_woread(_0x4951a4);
      const _0x559f3b = {
        sign: _0x4cae3c
      };
      const _0x45c65b = {
        fn: "rabblit_queryActivityData",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
        json: _0x559f3b
      };
      let {
          result: _0x5f2a10
        } = await this.woread_api(_0x45c65b),
        _0x21d7a5 = _0x5ee78c.get(_0x5f2a10, "code", -1);
      if (_0x21d7a5 == "0000") {
        let {
          totalcharpternums: _0x21cd0a,
          totalreadnums: _0x47ec70,
          status: _0x4099ba,
          activitystatus: _0x3bfe4c
        } = _0x5f2a10?.["data"];
        if (_0x3bfe4c == 1) {
          this.need_read_rabbit = false;
          const _0x38fd2b = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0x38fd2b);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x47ec70 + "/" + _0x21cd0a + "分钟");
        if (_0x4099ba == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x47ec70 >= _0x21cd0a) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x5677d7 = _0x5f2a10?.["message"] || "";
        _0x5677d7?.["includes"]("未参加") && !_0x4bcae1.join_retry && (await this.rabblit_joinRuning()) ? (_0x4bcae1.join_retry = true, await this.rabblit_queryActivityData(_0x4bcae1)) : this.log("龟兔赛跑查询状态失败[" + _0x21d7a5 + "]: " + _0x5677d7);
      }
    } catch (_0x17831a) {
      console.log(_0x17831a);
    }
  }
  async rabblit_joinRuning(_0xbae2c9 = {}) {
    let _0x32ff18 = false;
    try {
      let _0x39f27f = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x38fbf4 = this.encode_woread(_0x39f27f);
      const _0x1dc2dd = {
        sign: _0x38fbf4
      };
      const _0x19e2f4 = {
        fn: "rabblit_joinRuning",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
        json: _0x1dc2dd
      };
      let {
          result: _0x3a571c
        } = await this.woread_api(_0x19e2f4),
        _0x5b3167 = _0x5ee78c.get(_0x3a571c, "code", -1);
      if (_0x5b3167 == "0000") {
        _0x32ff18 = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0xa3a315 = _0x3a571c?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0x5b3167 + "]: " + _0xa3a315);
      }
    } catch (_0x197b9b) {
      console.log(_0x197b9b);
    } finally {
      return _0x32ff18;
    }
  }
  async rabblit_wakeRabbit(_0x31f162 = {}) {
    try {
      let _0x481986 = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x442636 = this.encode_woread(_0x481986);
      const _0x45917f = {
        sign: _0x442636
      };
      const _0xc9d0d5 = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x45917f
      };
      await _0x5ee78c.wait_gap_interval(this.t_woread_draw, _0x152198);
      let {
        result: _0x27fe41
      } = await this.woread_api(_0xc9d0d5);
      this.t_woread_draw = Date.now();
      let _0x1b406c = _0x5ee78c.get(_0x27fe41, "code", -1);
      if (_0x1b406c == "0000") {
        const _0xce661b = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x27fe41?.["data"]?.["prizedesc"] || "空气"), _0xce661b);
      } else {
        let _0x5d980b = _0x27fe41?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x1b406c + "]: " + _0x5d980b);
      }
    } catch (_0x55c8af) {
      console.log(_0x55c8af);
    }
  }
  async rabblit_finishActivity(_0x3b859e = {}) {
    try {
      let _0x36db08 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x4e66ce = this.encode_woread(_0x36db08);
      const _0x47228f = {
        sign: _0x4e66ce
      };
      const _0x1039a3 = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x47228f
      };
      await _0x5ee78c.wait_gap_interval(this.t_woread_draw, _0x152198);
      let {
        result: _0xd002f9
      } = await this.woread_api(_0x1039a3);
      this.t_woread_draw = Date.now();
      let _0x22111e = _0x5ee78c.get(_0xd002f9, "code", -1);
      if (_0x22111e == "0000") {
        this.need_read_rabbit = false;
        const _0x22d212 = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0xd002f9?.["data"]?.["prizedesc"] || "空气"), _0x22d212);
      } else {
        let _0x488e09 = _0xd002f9?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x22111e + "]: " + _0x488e09);
      }
    } catch (_0x15ae19) {
      console.log(_0x15ae19);
    }
  }
  async moonbox_queryActiveInfo(_0x44b3aa = {}) {
    try {
      let _0x450797 = this.get_woread_param(),
        _0x578d00 = this.encode_woread(_0x450797);
      const _0xcbc910 = {
        sign: _0x578d00
      };
      const _0x4da55f = {
        fn: "moonbox_queryActiveInfo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo",
        json: _0xcbc910
      };
      let {
          result: _0x41259f
        } = await this.woread_api(_0x4da55f),
        _0x3593ac = _0x5ee78c.get(_0x41259f, "code", -1);
      if (_0x3593ac == "0000") {
        let {
          activeId: _0x15c2cc,
          activeName: _0x3a1821
        } = _0x41259f?.["data"];
        _0x27f516 = _0x15c2cc;
      } else {
        let _0x341a6a = _0x41259f?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x3593ac + "]: " + _0x341a6a);
      }
    } catch (_0x59707c) {
      console.log(_0x59707c);
    }
  }
  async moonbox_queryCurTaskStatus(_0x3a4374 = {}) {
    try {
      let _0x2cdfd9 = {
          activeIndex: _0x27f516,
          ...this.get_woread_param()
        },
        _0x493587 = this.encode_woread(_0x2cdfd9);
      const _0x2e72a7 = {
        sign: _0x493587
      };
      const _0x3a90b8 = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0x2e72a7
      };
      let {
          result: _0x4515b3
        } = await this.woread_api(_0x3a90b8),
        _0x30dd52 = _0x5ee78c.get(_0x4515b3, "code", -1);
      if (_0x30dd52 == "0000") {
        for (let _0x50c67c of _0x4515b3?.["data"] || []) {
          let {
            taskName: _0x171f8a,
            currentValue: _0x158f5e,
            taskValue: _0x1204c4
          } = _0x50c67c?.["taskDetail"];
          switch (_0x50c67c.taskStatus) {
            case 0:
              {
                this.moonbox_task_record[_0x171f8a] = true;
                this.log("阅光宝盒[" + _0x171f8a + "]进度: " + parseInt(_0x158f5e) + "/" + _0x1204c4 + "分钟");
                break;
              }
            case 2:
              {
                await this.moonbox_completeActiveTask(_0x50c67c);
              }
            case 1:
              {
                this.moonbox_task_record[_0x171f8a] = false;
                if (!this.moonbox_notified.includes(_0x171f8a)) {
                  this.moonbox_notified.push(_0x171f8a);
                  const _0x1922bb = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x171f8a + "]已完成", _0x1922bb);
                }
                break;
              }
          }
        }
      } else {
        let _0x45a9c2 = _0x4515b3?.["message"] || "";
        _0x45a9c2?.["includes"]("未领取") && !_0x3a4374.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x3a4374.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x3a4374)) : this.log("阅光宝盒查询任务状态失败[" + _0x30dd52 + "]: " + _0x45a9c2);
      }
    } catch (_0x46a33a) {
      console.log(_0x46a33a);
    }
  }
  async moonbox_completeActiveTask(_0x3c8b18, _0x5708d8 = {}) {
    try {
      let _0x1020b9 = {
          taskId: _0x3c8b18.id,
          ...this.get_woread_param()
        },
        _0x1b12d4 = this.encode_woread(_0x1020b9);
      const _0x4dacdc = {
        sign: _0x1b12d4
      };
      const _0x212476 = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x4dacdc
      };
      let {
          result: _0x2deec3
        } = await this.woread_api(_0x212476),
        _0x932129 = _0x5ee78c.get(_0x2deec3, "code", -1);
      if (_0x932129 == "0000") {
        const _0x206ece = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x2deec3?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x2deec3?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x206ece);
      } else {
        let _0x521029 = _0x2deec3?.["message"] || "";
        this.log("阅光宝盒[" + _0x3c8b18?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x932129 + "]: " + _0x521029);
      }
    } catch (_0x3b8657) {
      console.log(_0x3b8657);
    }
  }
  async moonbox_queryActiveTaskList(_0x1a930d = {}) {
    try {
      let _0x32af7c = {
          activeIndex: _0x27f516,
          ...this.get_woread_param()
        },
        _0x2a1184 = this.encode_woread(_0x32af7c);
      const _0x20832b = {
        sign: _0x2a1184
      };
      const _0x716a3a = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
        json: _0x20832b
      };
      let {
          result: _0x5274ed
        } = await this.woread_api(_0x716a3a),
        _0x5b95c8 = _0x5ee78c.get(_0x5274ed, "code", -1);
      if (_0x5b95c8 == "0000") {
        let _0x5f0a25 = _0x5274ed?.["data"]?.["sort"](function (_0x34c187, _0x2c2c44) {
            let _0x309ef = parseInt(_0x2c2c44.taskDetail.taskValue),
              _0x45d573 = parseInt(_0x34c187.taskDetail.taskValue);
            return _0x309ef - _0x45d573;
          }),
          _0x3e8089 = _0x5f0a25.filter(_0x30eea1 => _0x30eea1.maxNum - _0x30eea1.receiveNum > 0 && _0x30eea1.taskDetail.materialGroup.groupName.includes("红包"));
        _0x3e8089?.["length"] ? (await _0x5ee78c.wait((user.index - 1) * 1000), await this.moonbox_receiveActiveTask(_0x3e8089)) : this.log("没有可领取的阅光宝盒红包任务了");
      } else {
        let _0x22e891 = _0x5274ed?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x5b95c8 + "]: " + _0x22e891);
      }
    } catch (_0xe7cb88) {
      console.log(_0xe7cb88);
    }
  }
  async moonbox_receiveActiveTask(_0x4c097c, _0x102067 = {}) {
    try {
      if (!_0x4c097c.length) {
        return;
      }
      let _0x379bae = _0x4c097c.shift(),
        _0x357faa = _0x379bae?.["taskDetail"]?.["taskName"] || "",
        _0x55b12a = {
          activeId: _0x27f516,
          taskId: _0x379bae.secondTaskId,
          ...this.get_woread_param()
        },
        _0x454faa = this.encode_woread(_0x55b12a);
      const _0x240125 = {
        sign: _0x454faa
      };
      const _0x1fe78e = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0x240125
      };
      let {
          result: _0x7b879
        } = await this.woread_api(_0x1fe78e),
        _0x2eeaf1 = _0x5ee78c.get(_0x7b879, "code", -1);
      if (_0x2eeaf1 == "0000") {
        this.moonbox_task_record[_0x357faa] = true;
        this.log("领取阅光宝盒任务[" + _0x357faa + "]成功");
      } else {
        let _0x6f0aff = _0x7b879?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x357faa + "]失败[" + _0x2eeaf1 + "]: " + _0x6f0aff);
        (_0x6f0aff?.["includes"]("今天无法完成") || _0x6f0aff?.["includes"]("领光了")) && _0x4c097c.length > 0 && (await _0x5ee78c.wait(500), await this.moonbox_receiveActiveTask(_0x4c097c, _0x102067));
      }
    } catch (_0x41358e) {
      console.log(_0x41358e);
    }
  }
  async moonbox_queryReadStatus(_0x5b669e = {}) {
    try {
      let _0x4ada48 = {
          activeIndex: _0x27f516,
          ...this.get_woread_param()
        },
        _0xf273b2 = this.encode_woread(_0x4ada48);
      const _0x24ae55 = {
        sign: _0xf273b2
      };
      const _0x27546f = {
        fn: "moonbox_queryReadStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
        json: _0x24ae55
      };
      let {
          result: _0xe1af89
        } = await this.woread_api(_0x27546f),
        _0x1442e5 = _0x5ee78c.get(_0xe1af89, "code", -1);
      if (_0x1442e5 == "0000") {
        switch (_0xe1af89?.["data"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0x5ab7f8 = {
                readTime: 2
              };
              await this.woread_addReadTime(_0x5ab7f8);
              await this.moonbox_drawReadActivePrize();
              break;
            }
          case "3":
            {
              this.log("阅光宝盒今天已抽奖");
              break;
            }
          case "4":
            {
              this.log("阅光宝盒今天可以抽奖");
              await this.moonbox_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0xe1af89?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x1c0693 = _0xe1af89?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x1442e5 + "]: " + _0x1c0693);
      }
    } catch (_0x3eefbf) {
      console.log(_0x3eefbf);
    }
  }
  async moonbox_drawReadActivePrize(_0x3978e5 = {}) {
    try {
      let _0x3b5645 = {
          activeIndex: _0x27f516,
          ...this.get_woread_param()
        },
        _0x2bdbef = this.encode_woread(_0x3b5645);
      const _0x570598 = {
        sign: _0x2bdbef
      };
      const _0x1880f1 = {
        fn: "moonbox_drawReadActivePrize",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
        json: _0x570598
      };
      let {
          result: _0x19ebce
        } = await this.woread_api(_0x1880f1),
        _0x20e99f = _0x5ee78c.get(_0x19ebce, "code", -1);
      if (_0x20e99f == "0000") {
        const _0x4a7812 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x19ebce?.["data"]?.["prizedesc"] || JSON.stringify(_0x19ebce)), _0x4a7812);
      } else {
        let _0x8726c5 = _0x19ebce?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x20e99f + "]: " + _0x8726c5);
      }
    } catch (_0x1fb96f) {
      console.log(_0x1fb96f);
    }
  }
  async ltyp_login(_0x13a888, _0x5a2ccf = {}) {
    try {
      const _0x2fab2c = {
        "client-Id": _0x229686,
        accessToken: ""
      };
      const _0x984376 = {
        clientId: _0x229686,
        ticket: _0x13a888
      };
      let _0x167d1d = {
          fn: "ltyp_login",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/dispatcher",
          headers: _0x2fab2c,
          json: {
            header: this.get_ltyp_sign_header("HandheldHallAutoLogin"),
            body: _0x984376
          }
        },
        {
          result: _0x42fb1c
        } = await this.request(_0x167d1d),
        _0x29e14 = _0x5ee78c.get(_0x42fb1c, "STATUS", -1);
      if (_0x29e14 == 200) {
        this.ltyp_token = _0x42fb1c?.["RSP"]?.["DATA"]?.["token"];
        for (let _0xedbc2d of _0x1a9b1e) {
          await this.ltyp_incentiveTimes(_0xedbc2d);
          await this.ltyp_lottery(_0xedbc2d);
        }
      } else {
        let _0x498545 = _0x42fb1c?.["msg"] || "";
        this.log("联通云盘登录失败[" + _0x29e14 + "]: " + _0x498545);
      }
    } catch (_0x214916) {
      console.log(_0x214916);
    }
  }
  async ltyp_incentiveTimes(_0x55adab, _0x5e7fbe = {}) {
    try {
      const _0x2bbe85 = {
        "client-Id": _0x229686,
        "Access-Token": this.ltyp_token
      };
      const _0x5a4062 = {
        bizKey: "incentiveTimesPipeline",
        activityId: _0x55adab
      };
      const _0x286853 = {
        fn: "ltyp_incentiveTimes",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTimes",
        headers: _0x2bbe85,
        searchParams: _0x5a4062
      };
      let {
          result: _0x4306a6
        } = await this.request(_0x286853),
        _0x5c478a = _0x5ee78c.get(_0x4306a6?.["meta"], "code", -1);
      if (_0x5c478a == 0) {
        let {
          isIncentiveTask = 0,
          taskType = 0,
          incentiveTimeTotal = 0,
          incentiveTimeDone = 0
        } = _0x4306a6?.["result"];
        if (isIncentiveTask) {
          for (let _0x5258a1 = incentiveTimeDone; _0x5258a1 < incentiveTimeTotal; _0x5258a1++) {
            await this.ltyp_incentiveTask(_0x55adab);
          }
        }
      } else {
        let _0x3878e2 = _0x4306a6?.["meta"]?.["message"] || "";
        this.log("联通云盘查询任务失败[" + _0x5c478a + "]: " + _0x3878e2);
      }
    } catch (_0x11b965) {
      console.log(_0x11b965);
    }
  }
  async ltyp_incentiveTask(_0x2aeda5, _0x210c36 = {}) {
    try {
      const _0x19d5e7 = {
        "client-Id": _0x229686,
        "Access-Token": this.ltyp_token
      };
      const _0xa24929 = {
        activityId: _0x2aeda5
      };
      const _0x5b5b46 = {
        fn: "ltyp_incentiveTask",
        method: "post",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTask",
        headers: _0x19d5e7,
        json: {}
      };
      _0x5b5b46.json.bizKey = "incentiveTaskPipeline";
      _0x5b5b46.json.bizObject = _0xa24929;
      let {
          result: _0x464988
        } = await this.request(_0x5b5b46),
        _0x473dba = _0x5ee78c.get(_0x464988?.["meta"], "code", -1);
      if (_0x473dba == 0) {
        let {
          incentiveStatus = 0,
          incentiveMessage = ""
        } = _0x464988?.["result"];
        incentiveStatus == 1 ? this.log("联通云盘完成任务成功") : this.log("联通云盘完成任务失败[" + incentiveStatus + "]: " + incentiveMessage);
      } else {
        let _0x2d3576 = _0x464988?.["meta"]?.["message"] || "";
        this.log("联通云盘完成任务错误[" + _0x473dba + "]: " + _0x2d3576);
      }
    } catch (_0x11b1c2) {
      console.log(_0x11b1c2);
    }
  }
  async ltyp_lottery_times(_0x24a5e5, _0x5de0b1 = {}) {
    try {
      const _0x48b2b4 = {
        "client-Id": _0x229686,
        token: this.ltyp_token
      };
      const _0x26863f = {
        activityId: _0x24a5e5
      };
      const _0x4d8685 = {
        fn: "ltyp_lottery_times",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/times",
        headers: _0x48b2b4,
        searchParams: _0x26863f
      };
      let {
          result: _0x4b07c8
        } = await this.request(_0x4d8685),
        _0x5d53e9 = _0x5ee78c.get(_0x4b07c8, "RSP_CODE", -1);
      if (_0x5d53e9 == 0) {
        let {
          times = 0
        } = _0x4b07c8?.["DATA"];
        this.log("联通云盘可以抽奖" + times + "次");
        while (times-- > 0) {
          await _0x5ee78c.wait(1000);
          await this.ltyp_lottery(_0x24a5e5);
        }
      } else {
        let _0x57f246 = _0x4b07c8?.["RSP_DESC"] || "";
        this.log("联通云盘查询抽奖次数失败[" + _0x5d53e9 + "]: " + _0x57f246);
      }
    } catch (_0x337bbb) {
      console.log(_0x337bbb);
    }
  }
  async ltyp_lottery(_0x10844a, _0x3db883 = {}) {
    try {
      const _0x21c078 = {
        "client-Id": _0x229686,
        "Access-Token": this.ltyp_token
      };
      const _0x2b3680 = {
        activityId: _0x10844a,
        type: 3
      };
      const _0x527bdd = {
        lottery: _0x2b3680
      };
      const _0x5d099e = {
        bizKey: "newLottery",
        bizObject: _0x527bdd
      };
      const _0x2e6494 = {
        fn: "ltyp_lottery",
        method: "post",
        url: "https://panservice.mail.wo.cn/wohome/v1/lottery",
        headers: _0x21c078,
        json: _0x5d099e
      };
      let {
          result: _0x47335c
        } = await this.request(_0x2e6494),
        _0x2b8aef = _0x5ee78c.get(_0x47335c?.["meta"], "code", -1);
      if (_0x2b8aef == 0) {
        let {
          prizeName = ""
        } = _0x47335c?.["result"];
        if (prizeName) {
          const _0x4b0e59 = {
            notify: true
          };
          this.log("联通云盘抽奖: " + prizeName, _0x4b0e59);
          await this.ltyp_lottery(_0x10844a, _0x3db883);
        }
      } else {
        let _0x365b6a = _0x47335c?.["meta"]?.["message"] || "";
        this.log("联通云盘抽奖错误[" + _0x2b8aef + "]: " + _0x365b6a);
      }
    } catch (_0x3b8023) {
      console.log(_0x3b8023);
    }
  }
  async act_517_userAccount(_0x298944 = {}) {
    try {
      const _0x4f48dc = {
        fn: "act_517_userAccount",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/userAccount"
      };
      {
        let {
            result: _0x4277b9,
            statusCode: _0x47cb29
          } = await this.request(_0x5ee78c.copy(_0x4f48dc)),
          _0x576654 = _0x5ee78c.get(_0x4277b9, "code", _0x47cb29);
        if (_0x576654 == "0000") {
          await this.act_517_taskList();
        } else {
          let _0x4291d7 = _0x4277b9?.["message"] || _0x4277b9?.["msg"] || "";
          this.log("517活动进入主页失败[" + _0x576654 + "]: " + _0x4291d7);
          return;
        }
      }
      {
        let {
            result: _0xed91ed,
            statusCode: _0x35e2a4
          } = await this.request(_0x5ee78c.copy(_0x4f48dc)),
          _0x45b906 = _0x5ee78c.get(_0xed91ed, "code", _0x35e2a4);
        if (_0x45b906 == "0000") {
          let {
            chances: _0x536bd7
          } = _0xed91ed?.["data"];
          this.log("517活动可以抽奖" + _0x536bd7 + "次");
          let _0x28e5dc = false;
          while (_0x536bd7-- > 0) {
            if (_0x28e5dc) {
              await _0x5ee78c.wait(3000);
            }
            _0x28e5dc = true;
            await this.act_517_lottery();
          }
        } else {
          let _0x2f0682 = _0xed91ed?.["message"] || _0xed91ed?.["msg"] || "";
          this.log("517活动查询抽奖次数失败[" + _0x45b906 + "]: " + _0x2f0682);
        }
      }
      {
        let {
            result: _0x2486bd,
            statusCode: _0x2a5bc5
          } = await this.request(_0x5ee78c.copy(_0x4f48dc)),
          _0x56ea1c = _0x5ee78c.get(_0x2486bd, "code", _0x2a5bc5);
        if (_0x56ea1c == "0000") {
          let {
            amount: _0x50af1f,
            targetAmount: _0x1551bf
          } = _0x2486bd?.["data"];
          const _0x22f0a8 = {
            notify: true
          };
          this.log("517活动现金进度: " + _0x50af1f + "/" + _0x1551bf, _0x22f0a8);
        } else {
          let _0x215f4f = _0x2486bd?.["message"] || _0x2486bd?.["msg"] || "";
          this.log("517活动查询进度失败[" + _0x56ea1c + "]: " + _0x215f4f);
        }
      }
    } catch (_0x3fb382) {
      console.log(_0x3fb382);
    }
  }
  async act_517_bind(_0x51ad98, _0x548e55 = {}) {
    try {
      const _0x17ceda = {
        fn: "act_517_bind",
        method: "post",
        url: "https://activity.10010.com/2024517charges/openWindows/bind",
        json: {},
        valid_code: [401]
      };
      _0x17ceda.json.shareCode = _0x51ad98;
      _0x17ceda.json.channel = "countersign";
      let {
        result: _0x170cd7
      } = await this.request(_0x17ceda);
    } catch (_0x24bf4d) {
      console.log(_0x24bf4d);
    }
  }
  async act_517_lottery(_0xd91092 = {}) {
    try {
      const _0x21aac4 = {
        fn: "act_517_lottery",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/lottery"
      };
      let {
          result: _0x41977c,
          statusCode: _0x4a0426
        } = await this.request(_0x21aac4),
        _0x1c6ad2 = _0x5ee78c.get(_0x41977c, "code", _0x4a0426);
      if (_0x1c6ad2 == "0000") {
        _0x41977c?.["data"]?.["uuid"] ? (await _0x5ee78c.wait(2000), await this.act_517_winningRecord(_0x41977c.data.uuid)) : this.log("517活动抽奖失败, 没有返回uuid");
      } else {
        let _0x4300f4 = _0x41977c?.["message"] || _0x41977c?.["msg"] || "";
        this.log("517活动抽奖失败[" + _0x1c6ad2 + "]: " + _0x4300f4);
      }
    } catch (_0x4c885d) {
      console.log(_0x4c885d);
    }
  }
  async act_517_winningRecord(_0x4d7598, _0x5829c3 = {}) {
    try {
      const _0x2888d4 = {
        requestId: _0x4d7598
      };
      const _0x150c26 = {
        fn: "act_517_winningRecord",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/winningRecord",
        searchParams: _0x2888d4
      };
      let {
          result: _0x36e6e4,
          statusCode: _0x2661e4
        } = await this.request(_0x150c26),
        _0x4b3602 = _0x5ee78c.get(_0x36e6e4, "code", _0x2661e4);
      if (_0x4b3602 == "0000") {
        if (_0x36e6e4?.["data"]?.["isWin"] === "1") {
          let {
              prizeAmount: _0x3773e0,
              prizeList: _0x50744e,
              afterAmount: _0x2c7858,
              targetAmount: _0x580de8,
              showAmount = "0"
            } = _0x36e6e4?.["data"],
            _0x2692fe = (_0x50744e || []).filter(_0x437b82 => _0x437b82.prizeName).map(_0x1945a1 => _0x1945a1.prizeName).join(", ") || "";
          const _0x1ce467 = {
            notify: true
          };
          if (_0x2692fe) {
            this.log("517活动抽奖: " + _0x2692fe, _0x1ce467);
          }
          if (showAmount === "1") {
            this.log("517活动抽奖现金进度: +" + _0x3773e0 + " (" + _0x2c7858 + "/" + _0x580de8 + ")");
          }
        } else {
          this.log("517活动抽奖: 空气");
        }
      } else {
        let _0x5e0791 = _0x36e6e4?.["message"] || _0x36e6e4?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x4b3602 + "]: " + _0x5e0791);
      }
    } catch (_0x48b294) {
      console.log(_0x48b294);
    }
  }
  async act_517_taskList(_0x1e7795 = {}) {
    try {
      const _0x556946 = {
        fn: "act_517_taskList",
        method: "get",
        url: "https://activity.10010.com/2024517charges/dotask/taskList"
      };
      let {
          result: _0x2c4bb8,
          statusCode: _0x9beb58
        } = await this.request(_0x556946),
        _0x22f522 = _0x5ee78c.get(_0x2c4bb8, "code", _0x9beb58);
      if (_0x22f522 == "0000") {
        let _0x555bdf = _0x2c4bb8?.["data"]?.["taskList"] || [];
        for (let _0x33fdf6 of _0x555bdf) {
          let {
            completeNum = 0,
            maxNum: _0x45c05e,
            isComplete: _0x16e2e7,
            taskType: _0x2ed670
          } = _0x33fdf6;
          if (_0x16e2e7) {
            continue;
          }
          if (_0x2ed670 == "5") {
            continue;
          }
          completeNum = parseInt(completeNum);
          _0x45c05e = parseInt(_0x45c05e);
          for (let _0x23f582 = completeNum; _0x23f582 < _0x45c05e; _0x23f582++) {
            await this.act_517_completeTask(_0x33fdf6);
          }
        }
      } else {
        let _0x4c609b = _0x2c4bb8?.["message"] || _0x2c4bb8?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x22f522 + "]: " + _0x4c609b);
      }
    } catch (_0x4a9d38) {
      console.log(_0x4a9d38);
    }
  }
  async act_517_completeTask(_0x4fe7c1, _0x526efc = {}) {
    try {
      let _0x4f4a4f = _0x4fe7c1.title;
      const _0x34de8f = {
        taskId: _0x4fe7c1.taskId
      };
      const _0x3a2e3e = {
        fn: "act_517_completeTask",
        method: "get",
        url: "https://activity.10010.com/2024517charges/dotask/completeTask",
        searchParams: _0x34de8f
      };
      let {
          result: _0x622b49,
          statusCode: _0x4ad6ed
        } = await this.request(_0x3a2e3e),
        _0x478391 = _0x5ee78c.get(_0x622b49, "code", _0x4ad6ed);
      if (_0x478391 == "0000") {
        if (_0x622b49?.["data"]) {
          let {
            num: _0x2c11ac,
            title: _0x5b0400
          } = _0x622b49.data;
          this.log("完成任务[" + _0x5b0400 + "]成功: " + _0x2c11ac + "次抽奖机会");
        } else {
          this.log("完成任务[" + _0x4f4a4f + "]失败没有获得抽奖机会");
        }
      } else {
        let _0xacfc58 = _0x622b49?.["message"] || _0x622b49?.["msg"] || "";
        this.log("完成任务[" + _0x4f4a4f + "]失败[" + _0x478391 + "]: " + _0xacfc58);
      }
    } catch (_0x1e57f7) {
      console.log(_0x1e57f7);
    }
  }
  get_wocare_body(_0x294d12, _0x3279dc = {}) {
    const _0x1954a8 = _0x5ee78c.time("yyyyMMddhhmmssS"),
      _0x3fda42 = Buffer.from(JSON.stringify(_0x3279dc)).toString("base64");
    let _0x40de7e = {
        version: _0x422648,
        apiCode: _0x294d12,
        channelId: _0x47fc36,
        transactionId: _0x1954a8 + _0x5ee78c.randomString(6, _0x31b69f),
        timeStamp: _0x1954a8,
        messageContent: _0x3fda42
      },
      _0xbecea7 = [];
    Object.keys(_0x40de7e).sort().forEach(_0x1e9496 => {
      _0xbecea7.push(_0x1e9496 + "=" + _0x40de7e[_0x1e9496]);
    });
    _0xbecea7.push("sign=" + _0x2b424);
    _0x40de7e.sign = _0x356d1c.MD5(_0xbecea7.join("&")).toString();
    return _0x40de7e;
  }
  async wocare_api(_0x423912, _0x319ddf = {}) {
    let _0x1e2d08 = this.get_wocare_body(_0x423912, _0x319ddf),
      _0x45d646 = new _0x122d3a();
    for (let _0x4d43c2 in _0x1e2d08) {
      _0x45d646.append(_0x4d43c2, _0x1e2d08[_0x4d43c2]);
    }
    const _0x418a44 = {
      fn: "wocare_" + _0x423912,
      method: "post",
      url: "https://wocare.unisk.cn/api/v1/" + _0x423912,
      body: _0x45d646
    };
    let _0x31bca2 = await this.request(_0x418a44);
    if (_0x31bca2?.["result"]?.["messageContent"]) {
      try {
        let _0x546fc9 = JSON.parse(Buffer.from(_0x31bca2.result.messageContent, "base64").toString());
        _0x31bca2.result.data = _0x546fc9?.["data"] || _0x546fc9;
        if (_0x546fc9?.["resultMsg"]) {
          _0x31bca2.result.resultMsg = _0x546fc9.resultMsg;
        }
      } catch (_0x434a64) {
        this.log("解析联通祝福返回失败:");
        console.log(_0x434a64);
      }
    }
    return _0x31bca2;
  }
  async wocare_getToken(_0x28105e, _0x582407 = {}) {
    let _0x44429d = false;
    try {
      let _0x5e90c1 = {
          fn: "wocare_getToken",
          method: "get",
          url: "https://wocare.unisk.cn/mbh/getToken",
          searchParams: {
            channelType: _0x114f49,
            type: "02",
            ticket: _0x28105e,
            version: _0x5772da,
            timestamp: _0x5ee78c.time("yyyyMMddhhmmssS"),
            desmobile: this.mobile,
            num: 0,
            postage: _0x5ee78c.randomString(32),
            homePage: "home",
            duanlianjieabc: "qAz2m",
            userNumber: this.mobile
          }
        },
        {
          headers: _0x2f1fe7,
          statusCode: _0x585844
        } = await this.request(_0x5e90c1);
      if (_0x585844 == 302) {
        if (_0x2f1fe7?.["location"]) {
          let _0x12dac5 = new URL(_0x2f1fe7.location),
            _0x2b8ff1 = _0x12dac5.searchParams.get("sid");
          _0x2b8ff1 ? (this.wocare_sid = _0x2b8ff1, _0x44429d = await this.wocare_loginmbh()) : this.log("联通祝福没有获取到sid");
        } else {
          this.log("联通祝福没有获取到location");
        }
      } else {
        this.log("联通祝福获取sid失败[" + resultCode + "]");
      }
    } catch (_0x7c8eb2) {
      console.log(_0x7c8eb2);
    } finally {
      return _0x44429d;
    }
  }
  async wocare_loginmbh(_0x473088 = {}) {
    let _0x3c9b13 = false;
    try {
      let _0x2c2b04 = "loginmbh";
      const _0x38d8ca = {
        sid: this.wocare_sid,
        channelType: _0x114f49,
        apiCode: _0x2c2b04
      };
      let {
          result: _0x5da7c7,
          statusCode: _0x104466
        } = await this.wocare_api(_0x2c2b04, _0x38d8ca),
        _0x5a3bc0 = _0x5ee78c.get(_0x5da7c7, "resultCode", _0x104466);
      if (_0x5a3bc0 == "0000") {
        _0x3c9b13 = true;
        let {
          token: _0x5b47b0
        } = _0x5da7c7?.["data"];
        this.wocare_token = _0x5b47b0;
      } else {
        let _0x7cc649 = _0x5da7c7?.["resultMsg"] || _0x5da7c7?.["resultDesc"] || "";
        this.log("联通祝福登录失败[" + _0x5a3bc0 + "]: " + _0x7cc649);
      }
    } catch (_0x54d2a3) {
      console.log(_0x54d2a3);
    } finally {
      return _0x3c9b13;
    }
  }
  async wocare_getSpecificityBanner(_0x36a1a9 = {}) {
    try {
      let _0x35f707 = "getSpecificityBanner";
      const _0x154875 = {
        token: this.wocare_token,
        apiCode: _0x35f707
      };
      let {
          result: _0x3f00f0,
          statusCode: _0x156500
        } = await this.wocare_api(_0x35f707, _0x154875),
        _0x4acb7b = _0x5ee78c.get(_0x3f00f0, "resultCode", _0x156500);
      if (_0x4acb7b == "0000") {
        let _0x5e16db = _0x3f00f0?.["data"] || [];
        for (let _0xf7993 of _0x5e16db.filter(_0x33070c => _0x33070c.activityStatus === "0" && _0x33070c.isDeleted === "0")) {
          await this.wocare_getDrawTask(_0xf7993);
          await this.wocare_loadInit(_0xf7993);
        }
      } else {
        let _0x2084c2 = _0x3f00f0?.["resultMsg"] || _0x3f00f0?.["resultDesc"] || "";
        this.log("联通祝福进入活动失败[" + _0x4acb7b + "]: " + _0x2084c2);
      }
    } catch (_0x183b69) {
      console.log(_0x183b69);
    }
  }
  async wocare_loadInit(_0x112107, _0x28de33 = {}) {
    try {
      let _0x30fc17 = "loadInit";
      const _0x253312 = {
        token: this.wocare_token,
        channelType: _0x114f49,
        type: _0x112107.id,
        apiCode: _0x30fc17
      };
      let {
          result: _0x3e26d9,
          statusCode: _0x20088a
        } = await this.wocare_api(_0x30fc17, _0x253312),
        _0xab6304 = _0x5ee78c.get(_0x3e26d9, "resultCode", _0x20088a);
      if (_0xab6304 == "0000") {
        let _0x563027 = _0x3e26d9?.["data"],
          _0x1fcd97 = _0x563027?.["zActiveModuleGroupId"],
          _0x3fbfdb = 0;
        switch (_0x112107.id) {
          case 2:
            {
              let _0x10de04 = _0x563027?.["data"]?.["isPartake"] || 0;
              !_0x10de04 && (_0x3fbfdb = 1);
              break;
            }
          case 3:
            {
              _0x3fbfdb = parseInt(_0x563027?.["raffleCountValue"] || 0);
              break;
            }
          case 4:
            {
              _0x3fbfdb = parseInt(_0x563027?.["mhRaffleCountValue"] || 0);
              break;
            }
        }
        while (_0x3fbfdb-- > 0) {
          await _0x5ee78c.wait(5000);
          await this.wocare_luckDraw(_0x112107, _0x1fcd97);
        }
      } else {
        let _0x555f0a = _0x3e26d9?.["resultMsg"] || _0x3e26d9?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x112107.name + "]查询活动失败[" + _0xab6304 + "]: " + _0x555f0a);
      }
    } catch (_0x5e73fa) {
      console.log(_0x5e73fa);
    }
  }
  async wocare_getDrawTask(_0x165c4e, _0x45cc45 = {}) {
    try {
      let _0x3ad97d = "getDrawTask";
      const _0x4b7781 = {
        token: this.wocare_token,
        channelType: _0x114f49,
        type: _0x165c4e.id,
        apiCode: _0x3ad97d
      };
      let {
          result: _0x72aec,
          statusCode: _0x3d416a
        } = await this.wocare_api(_0x3ad97d, _0x4b7781),
        _0xe9656a = _0x5ee78c.get(_0x72aec, "resultCode", _0x3d416a);
      if (_0xe9656a == "0000") {
        let _0x232a5c = _0x72aec?.["data"]?.["taskList"] || [];
        for (let _0xec692c of _0x232a5c.filter(_0x394c5d => _0x394c5d.taskStatus == 0)) {
          await this.wocare_completeTask(_0x165c4e, _0xec692c);
        }
      } else {
        let _0x394a3f = _0x72aec?.["resultMsg"] || _0x72aec?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x165c4e.name + "]查询任务失败[" + _0xe9656a + "]: " + _0x394a3f);
      }
    } catch (_0xcdb7fb) {
      console.log(_0xcdb7fb);
    }
  }
  async wocare_completeTask(_0x27540f, _0x44eae0, _0x120e4f = "1", _0x5c4141 = {}) {
    try {
      let _0x1ebcc8 = _0x44eae0.title,
        _0x523845 = _0x120e4f == "1" ? "领取任务" : "完成任务",
        _0xe68cec = "completeTask";
      const _0x7421b6 = {
        token: this.wocare_token,
        channelType: _0x114f49,
        task: _0x44eae0.id,
        taskStep: _0x120e4f,
        type: _0x27540f.id,
        apiCode: _0xe68cec
      };
      let {
          result: _0x23d361,
          statusCode: _0x1f25ad
        } = await this.wocare_api(_0xe68cec, _0x7421b6),
        _0x5a143d = _0x5ee78c.get(_0x23d361, "resultCode", _0x1f25ad);
      if (_0x5a143d == "0000") {
        this.log(_0x523845 + "[" + _0x1ebcc8 + "]成功");
        _0x120e4f == "1" && (await this.wocare_completeTask(_0x27540f, _0x44eae0, "4"));
      } else {
        let _0x4d1e7b = _0x23d361?.["resultMsg"] || _0x23d361?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x27540f.name + "]" + _0x523845 + "[" + _0x1ebcc8 + "]失败[" + _0x5a143d + "]: " + _0x4d1e7b);
      }
    } catch (_0x2d2c60) {
      console.log(_0x2d2c60);
    }
  }
  async wocare_luckDraw(_0x4babba, _0x136e59, _0x38d340 = {}) {
    try {
      let _0xff5741 = "luckDraw";
      const _0x4b3ea3 = {
        token: this.wocare_token,
        channelType: _0x114f49,
        zActiveModuleGroupId: _0x136e59,
        type: _0x4babba.id,
        apiCode: _0xff5741
      };
      let {
          result: _0x1e7e31,
          statusCode: _0x40203
        } = await this.wocare_api(_0xff5741, _0x4b3ea3),
        _0x38ece8 = _0x5ee78c.get(_0x1e7e31, "resultCode", _0x40203);
      if (_0x38ece8 == "0000") {
        let _0x4a2305 = _0x5ee78c.get(_0x1e7e31?.["data"], "resultCode", -1);
        if (_0x4a2305 == "0000") {
          let {
            prizeName: _0x18cb24,
            prizeDesc: _0x3435e1
          } = _0x1e7e31?.["data"]?.["data"]?.["prize"];
          this.log("联通祝福[" + _0x4babba.name + "]抽奖: " + _0x18cb24 + "[" + _0x3435e1 + "]");
        } else {
          let _0x418588 = _0x1e7e31?.["resultMsg"] || _0x1e7e31?.["resultDesc"] || "";
          this.log("联通祝福[" + _0x4babba.name + "]抽奖失败[" + _0x4a2305 + "]: " + _0x418588);
        }
      } else {
        let _0x3b7e94 = _0x1e7e31?.["resultMsg"] || _0x1e7e31?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x4babba.name + "]抽奖错误[" + _0x38ece8 + "]: " + _0x3b7e94);
      }
    } catch (_0x4ad5cd) {
      console.log(_0x4ad5cd);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0xa0bbb8 = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x3c4dcd
      } = await this.openPlatLineNew(_0xa0bbb8);
    if (!_0x3c4dcd) {
      return;
    }
    await this.game_login(_0x3c4dcd);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0x4bace5 = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0x310584,
        type: _0xb5866f,
        loc: _0x544342
      } = await this.openPlatLineNew(_0x4bace5);
    if (!_0x310584) {
      return;
    }
    await this.ttlxj_authorize(_0x310584, _0xb5866f, _0x544342);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x508fc7 = new Date().getDate();
    if (_0x508fc7 >= 26 && _0x508fc7 <= 28) {
      await this.epay_28_authCheck();
      if (_0x3df404.length) {
        let _0x3f32e6 = _0x5ee78c.randomList(_0x3df404);
        await this.appMonth_28_bind(_0x3f32e6);
      }
      await this.appMonth_28_queryChance();
    }
  }
  async draw_28_task() {
    let _0x218344 = new Date().getDate();
    _0x218344 == 28 && (await this.draw_28_queryChance());
  }
  async act_517_task() {
    let _0x2e0284 = new Date("2024-05-10 00:00:00"),
      _0x39febf = new Date("2024-06-09 00:00:00"),
      _0x1fe2be = Date.now();
    if (_0x1fe2be > _0x2e0284.getTime() && _0x1fe2be < _0x39febf.getTime()) {
      if (_0x137efa.length) {
        let _0x569d9a = _0x5ee78c.randomList(_0x137efa);
        await this.act_517_bind(_0x569d9a);
      }
      await this.act_517_userAccount();
    }
  }
  async flmf_task() {
    if (this.city.filter(_0x3efafb => _0x3efafb.proCode == "091").length == 0) {
      return;
    }
    let _0x4ba38c = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x3c972e
      } = await this.openPlatLineNew(_0x4ba38c);
    if (!_0x3c972e) {
      return;
    }
    await this.flmf_login(_0x3c972e);
  }
  async ltyp_task() {
    let _0xacb528 = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x41dd7f
      } = await this.openPlatLineNew(_0xacb528);
    if (!_0x41dd7f) {
      return;
    }
    await this.ltyp_login(_0x41dd7f);
  }
  async ltzf_task() {
    let _0x12334f = new URL("https://wocare.unisk.cn/mbh/getToken");
    _0x12334f.searchParams.append("channelType", _0x114f49);
    _0x12334f.searchParams.append("homePage", "home");
    _0x12334f.searchParams.append("duanlianjieabc", "qAz2m");
    let _0x3a2afc = _0x12334f.toString(),
      {
        ticket: _0x126433
      } = await this.openPlatLineNew(_0x3a2afc);
    if (!_0x126433) {
      return;
    }
    if (!(await this.wocare_getToken(_0x126433))) {
      return;
    }
    for (let _0x4b5823 of _0x33fe68) {
      await this.wocare_getDrawTask(_0x4b5823);
      await this.wocare_loadInit(_0x4b5823);
    }
  }
  async woread_draw_task(_0x46497a) {
    await this.woread_getSeeVideoAddNumber(_0x46497a);
    await this.woread_addDrawTimes(_0x46497a);
    await this.woread_getActivityNumber(_0x46497a);
  }
  async woread_task() {
    for (let _0x2a2072 of _0x150f75) {
      await this.woread_draw_task(_0x2a2072);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    let _0x200e2f = Object.values(this.moonbox_task_record).filter(_0xd916cf => _0xd916cf === true).length;
    while (this.need_read_rabbit || _0x200e2f) {
      let _0x149435 = 2;
      const _0x14041d = {
        readTime: _0x149435
      };
      await this.woread_addReadTime(_0x14041d);
      let _0x117fe9 = Date.now();
      if (_0x200e2f) {
        await this.moonbox_queryCurTaskStatus();
      }
      _0x200e2f = Object.values(this.moonbox_task_record).filter(_0xa02961 => _0xa02961 === true).length;
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      let _0x55e468 = Date.now(),
        _0x4a0235 = 125000 + _0x117fe9 - _0x55e468;
      (this.need_read_rabbit || _0x200e2f) && _0x4a0235 > 0 && (this.log("等待2分钟..."), await _0x5ee78c.wait(_0x4a0235));
    }
  }
  async userLoginTask() {
    if (!(await this.onLine())) {
      return;
    }
    if (!(await this.woread_auth())) {
      return;
    }
    if (!(await this.woread_login())) {
      return;
    }
    if (!_0x27f516) {
      await this.moonbox_queryActiveInfo();
    }
    await this.moonbox_queryCurTaskStatus();
  }
  async userTask() {
    _0x5ee78c.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.sign_task();
    await this.ttlxj_task();
    await this.ltyp_task();
    await this.epay_28_task();
    await this.draw_28_task();
    await this.act_517_task();
    await this.ltzf_task();
    await this.flmf_task();
    await this.woread_task();
  }
  async userTestTask() {
    _0x5ee78c.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ltyp_task();
  }
}
!(async () => {
  if (!(await _0x4c17d9())) {
    return;
  }
  await _0x43a624();
  _0x5ee78c.read_env(_0x467ce8);
  for (let _0x2d6670 of _0x5ee78c.userList) {
    await _0x2d6670.userLoginTask();
  }
  for (let _0x2f292f of _0x5ee78c.userList.filter(_0x5ed964 => _0x5ed964.valid)) {
    await _0x2f292f.userTask();
  }
  let _0x100253 = _0x5ee78c.userList.filter(_0x5b3ed3 => _0x5b3ed3.valid && _0x5b3ed3.woread_verifycode && (_0x5b3ed3.need_read_rabbit || Object.values(_0x5b3ed3.moonbox_task_record).filter(_0x1f10e3 => _0x1f10e3 === true).length));
  if (_0x100253.length) {
    let _0x52a098 = [];
    _0x5ee78c.log("\n============ 开始刷阅读时长 ============");
    for (let _0x4a9c4c of _0x100253) {
      _0x52a098.push(_0x4a9c4c.woread_reading_task());
    }
    await Promise.all(_0x52a098);
  }
})().catch(_0x1cf2c6 => _0x5ee78c.log(_0x1cf2c6)).finally(() => _0x5ee78c.exitNow());
async function _0x4c17d9(_0x48a4da = 0) {
  let _0x5b457f = false;
  try {
    const _0x46dc64 = {
      fn: "auth",
      method: "get",
      url: _0x28235d,
      timeout: 20000
    };
    let {
      statusCode: _0x2b4a7f,
      result: _0x4c945e
    } = await _0x40d9de.request(_0x46dc64);
    if (_0x2b4a7f != 200) {
      _0x48a4da++ < _0x589603 && (_0x5b457f = await _0x4c17d9(_0x48a4da));
      return _0x5b457f;
    }
    if (_0x4c945e?.["code"] == 0) {
      _0x4c945e = JSON.parse(_0x4c945e.data.file.data);
      if (_0x4c945e?.["commonNotify"] && _0x4c945e.commonNotify.length > 0) {
        const _0xb7b1d3 = {
          notify: true
        };
        _0x5ee78c.log(_0x4c945e.commonNotify.join("\n") + "\n", _0xb7b1d3);
      }
      _0x4c945e?.["commonMsg"] && _0x4c945e.commonMsg.length > 0 && _0x5ee78c.log(_0x4c945e.commonMsg.join("\n") + "\n");
      if (_0x4c945e[_0x3ca0e5]) {
        let _0x3e38e4 = _0x4c945e[_0x3ca0e5];
        _0x3e38e4.status == 0 ? _0x281c41 >= _0x3e38e4.version ? (_0x5b457f = true, _0x5ee78c.log(_0x3e38e4.msg[_0x3e38e4.status]), _0x5ee78c.log(_0x3e38e4.updateMsg), _0x5ee78c.log("现在运行的脚本版本是：" + _0x281c41 + "，最新脚本版本：" + _0x3e38e4.latestVersion)) : _0x5ee78c.log(_0x3e38e4.versionMsg) : _0x5ee78c.log(_0x3e38e4.msg[_0x3e38e4.status]);
      } else {
        _0x5ee78c.log(_0x4c945e.errorMsg);
      }
    } else {
      _0x48a4da++ < _0x589603 && (_0x5b457f = await _0x4c17d9(_0x48a4da));
    }
  } catch (_0x565412) {
    _0x5ee78c.log(_0x565412);
  } finally {
    return _0x5b457f;
  }
}
async function _0x43a624() {
  let _0x5c1a44 = false;
  try {
    const _0x15a6ec = {
      fn: "getTaskUrl",
      method: "get",
      url: _0x5a9ced
    };
    let {
      statusCode: _0x352b3f,
      result: _0x1a38ad
    } = await _0x40d9de.request(_0x15a6ec);
    if (_0x352b3f != 200) {
      return Promise.resolve();
    }
    _0x1a38ad?.["code"] == 0 && (_0x1a38ad = JSON.parse(_0x1a38ad.data.file.data), _0x1a9b1e = _0x1a38ad?.["ltyp_lottery"] || _0x1a9b1e, _0x150f75 = _0x1a38ad?.["woread_draw_id"] || _0x150f75, _0x3df404 = _0x1a38ad?.["appMonth_28_share"] || _0x3df404, _0x137efa = _0x1a38ad?.["act_517_share"] || _0x137efa);
  } catch (_0x44922b) {
    _0x5ee78c.log(_0x44922b);
  } finally {
    return _0x5c1a44;
  }
}
function _0x2c4855(_0x3b255a) {
  return new class {
    constructor(_0xd9cb9a) {
      this.name = _0xd9cb9a;
      this.startTime = Date.now();
      const _0x59f42b = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x59f42b);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0xd56f5b, _0x35e3cb = {}) {
      const _0x1f32c4 = {
        console: true
      };
      Object.assign(_0x1f32c4, _0x35e3cb);
      if (_0x1f32c4.time) {
        let _0x156747 = _0x1f32c4.fmt || "hh:mm:ss";
        _0xd56f5b = "[" + this.time(_0x156747) + "]" + _0xd56f5b;
      }
      if (_0x1f32c4.notify) {
        this.notifyStr.push(_0xd56f5b);
      }
      if (_0x1f32c4.console) {
        console.log(_0xd56f5b);
      }
    }
    get(_0xe3dfb, _0x175470, _0x3d6062 = "") {
      let _0x2d2003 = _0x3d6062;
      _0xe3dfb?.["hasOwnProperty"](_0x175470) && (_0x2d2003 = _0xe3dfb[_0x175470]);
      return _0x2d2003;
    }
    pop(_0x3e8771, _0xed4f71, _0x460043 = "") {
      let _0x3d4ffa = _0x460043;
      _0x3e8771?.["hasOwnProperty"](_0xed4f71) && (_0x3d4ffa = _0x3e8771[_0xed4f71], delete _0x3e8771[_0xed4f71]);
      return _0x3d4ffa;
    }
    copy(_0x576e2e) {
      return Object.assign({}, _0x576e2e);
    }
    read_env(_0x576594) {
      let _0x3c7872 = _0x5cc2f8.map(_0x5651ec => process.env[_0x5651ec]);
      for (let _0x1d00c0 of _0x3c7872.filter(_0x526d25 => !!_0x526d25)) {
        let _0x560690 = _0x53ad51.filter(_0x1647f6 => _0x1d00c0.includes(_0x1647f6)),
          _0x4297d0 = _0x560690.length > 0 ? _0x560690[0] : _0x53ad51[0];
        for (let _0x45cde0 of _0x1d00c0.split(_0x4297d0).filter(_0x48efe2 => !!_0x48efe2)) {
          this.userList.push(new _0x576594(_0x45cde0));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x5da73f = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x5cc2f8.map(_0x47862b => "[" + _0x47862b + "]").join("或"), _0x5da73f);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x3d6e4f, _0x131484, _0x559f52 = {}) {
      while (_0x131484.idx < _0x5ee78c.userList.length) {
        let _0xa6085d = _0x5ee78c.userList[_0x131484.idx++];
        if (!_0xa6085d.valid) {
          continue;
        }
        await _0xa6085d[_0x3d6e4f](_0x559f52);
      }
    }
    async threadTask(_0x40568e, _0x151a0f) {
      let _0x54ff2b = [];
      const _0x91de66 = {
        idx: 0
      };
      while (_0x151a0f--) {
        _0x54ff2b.push(this.threads(_0x40568e, _0x91de66));
      }
      await Promise.all(_0x54ff2b);
    }
    time(_0x3add18, _0x339bfb = null) {
      let _0x3125fb = _0x339bfb ? new Date(_0x339bfb) : new Date(),
        _0x5728ca = {
          "M+": _0x3125fb.getMonth() + 1,
          "d+": _0x3125fb.getDate(),
          "h+": _0x3125fb.getHours(),
          "m+": _0x3125fb.getMinutes(),
          "s+": _0x3125fb.getSeconds(),
          "q+": Math.floor((_0x3125fb.getMonth() + 3) / 3),
          S: this.padStr(_0x3125fb.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x3add18) && (_0x3add18 = _0x3add18.replace(RegExp.$1, (_0x3125fb.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3e6457 in _0x5728ca) new RegExp("(" + _0x3e6457 + ")").test(_0x3add18) && (_0x3add18 = _0x3add18.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5728ca[_0x3e6457] : ("00" + _0x5728ca[_0x3e6457]).substr(("" + _0x5728ca[_0x3e6457]).length)));
      return _0x3add18;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x48510c = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x48510c.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x5b6880, _0x33604b, _0x1b97a2 = {}) {
      let _0x12aede = _0x1b97a2.padding || "0",
        _0x163c1b = _0x1b97a2.mode || "l",
        _0x5e9d01 = String(_0x5b6880),
        _0x5e0c94 = _0x33604b > _0x5e9d01.length ? _0x33604b - _0x5e9d01.length : 0,
        _0x455440 = "";
      for (let _0x1cea69 = 0; _0x1cea69 < _0x5e0c94; _0x1cea69++) {
        _0x455440 += _0x12aede;
      }
      _0x163c1b == "r" ? _0x5e9d01 = _0x5e9d01 + _0x455440 : _0x5e9d01 = _0x455440 + _0x5e9d01;
      return _0x5e9d01;
    }
    json2str(_0x2b8399, _0x4b6161, _0x5e9fca = false) {
      let _0x1cf548 = [];
      for (let _0x2d8b37 of Object.keys(_0x2b8399).sort()) {
        let _0x1a8984 = _0x2b8399[_0x2d8b37];
        if (_0x1a8984 && _0x5e9fca) {
          _0x1a8984 = encodeURIComponent(_0x1a8984);
        }
        _0x1cf548.push(_0x2d8b37 + "=" + _0x1a8984);
      }
      return _0x1cf548.join(_0x4b6161);
    }
    str2json(_0x538249, _0x59ca56 = false) {
      let _0x402ba4 = {};
      for (let _0xb7dd39 of _0x538249.split("&")) {
        if (!_0xb7dd39) {
          continue;
        }
        let _0x1bae36 = _0xb7dd39.indexOf("=");
        if (_0x1bae36 == -1) {
          continue;
        }
        let _0x997a95 = _0xb7dd39.substr(0, _0x1bae36),
          _0x24d097 = _0xb7dd39.substr(_0x1bae36 + 1);
        if (_0x59ca56) {
          _0x24d097 = decodeURIComponent(_0x24d097);
        }
        _0x402ba4[_0x997a95] = _0x24d097;
      }
      return _0x402ba4;
    }
    randomPattern(_0x349565, _0xe99cce = "abcdef0123456789") {
      let _0x44cb24 = "";
      for (let _0x2f354d of _0x349565) {
        if (_0x2f354d == "x") {
          _0x44cb24 += _0xe99cce.charAt(Math.floor(Math.random() * _0xe99cce.length));
        } else {
          _0x2f354d == "X" ? _0x44cb24 += _0xe99cce.charAt(Math.floor(Math.random() * _0xe99cce.length)).toUpperCase() : _0x44cb24 += _0x2f354d;
        }
      }
      return _0x44cb24;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x3c5d81, _0x554a8d = "abcdef0123456789") {
      let _0x431371 = "";
      for (let _0x2b32b5 = 0; _0x2b32b5 < _0x3c5d81; _0x2b32b5++) {
        _0x431371 += _0x554a8d.charAt(Math.floor(Math.random() * _0x554a8d.length));
      }
      return _0x431371;
    }
    randomList(_0x1e0063) {
      let _0x17dcf6 = Math.floor(Math.random() * _0x1e0063.length);
      return _0x1e0063[_0x17dcf6];
    }
    wait(_0xf8658f) {
      return new Promise(_0x2a1a70 => setTimeout(_0x2a1a70, _0xf8658f));
    }
    async exitNow() {
      await this.showmsg();
      let _0x4bb29f = Date.now(),
        _0x108131 = (_0x4bb29f - this.startTime) / 1000;
      this.log("");
      const _0x408638 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x108131 + "秒", _0x408638);
      process.exit(0);
    }
    normalize_time(_0x3c8e0a, _0x34f457 = {}) {
      let _0x14deca = _0x34f457.len || _0x3c8f10;
      _0x3c8e0a = _0x3c8e0a.toString();
      let _0x573d1f = _0x3c8e0a.length;
      while (_0x573d1f < _0x14deca) {
        _0x3c8e0a += "0";
      }
      _0x573d1f > _0x14deca && (_0x3c8e0a = _0x3c8e0a.slice(0, 13));
      return parseInt(_0x3c8e0a);
    }
    async wait_until(_0x266f21, _0x39ac1b = {}) {
      let _0x1536af = _0x39ac1b.logger || this,
        _0x4a4c6f = _0x39ac1b.interval || _0x6f1aa7,
        _0x375582 = _0x39ac1b.limit || _0x274df4,
        _0x53c473 = _0x39ac1b.ahead || _0x2c3bdb;
      if (typeof _0x266f21 == "string" && _0x266f21.includes(":")) {
        if (_0x266f21.includes("-")) {
          _0x266f21 = new Date(_0x266f21).getTime();
        } else {
          let _0x1f5aec = this.time("yyyy-MM-dd ");
          _0x266f21 = new Date(_0x1f5aec + _0x266f21).getTime();
        }
      }
      let _0x193a8c = this.normalize_time(_0x266f21) - _0x53c473,
        _0xde44f9 = this.time("hh:mm:ss.S", _0x193a8c),
        _0x153ac3 = Date.now();
      _0x153ac3 > _0x193a8c && (_0x193a8c += 86400000);
      let _0x261a1a = _0x193a8c - _0x153ac3;
      if (_0x261a1a > _0x375582) {
        const _0x154844 = {
          time: true
        };
        _0x1536af.log("离目标时间[" + _0xde44f9 + "]大于" + _0x375582 / 1000 + "秒,不等待", _0x154844);
      } else {
        const _0x469c73 = {
          time: true
        };
        _0x1536af.log("离目标时间[" + _0xde44f9 + "]还有" + _0x261a1a / 1000 + "秒,开始等待", _0x469c73);
        while (_0x261a1a > 0) {
          let _0x4e9318 = Math.min(_0x261a1a, _0x4a4c6f);
          await this.wait(_0x4e9318);
          _0x153ac3 = Date.now();
          _0x261a1a = _0x193a8c - _0x153ac3;
        }
        const _0x211078 = {
          time: true
        };
        _0x1536af.log("已完成等待", _0x211078);
      }
    }
    async wait_gap_interval(_0x30be4a, _0xa585b9) {
      let _0x257ca0 = Date.now() - _0x30be4a;
      _0x257ca0 < _0xa585b9 && (await this.wait(_0xa585b9 - _0x257ca0));
    }
  }(_0x3b255a);
}