const _0x2ede0d = _0x857d9a("中国联通"),
  _0x2d975f = require("got"),
  _0x237428 = require("crypto-js"),
  {
    CookieJar: _0x7d58ca
  } = require("tough-cookie"),
  _0x4ba49b = "chinaUnicom",
  _0x20cfef = ["\n", "&", "@"],
  _0x54aaff = [_0x4ba49b + "Cookie"],
  _0xb34eb3 = 50000,
  _0x42c8f3 = 3;
const _0x57084b = 1.08,
  _0x4e7e8e = "chinaUnicom",
  _0x15584e = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x321520 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x4e7e8e + ".json",
  _0x430338 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@10.0300}",
  _0x23b2fb = 5,
  _0x264cbe = 13,
  _0x390db7 = 1000,
  _0x2b96e6 = 3600000,
  _0x2b2966 = 100,
  _0x45dca3 = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x1149c1 = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x3a7e05 = "10000002",
  _0x2b1061 = "7k1HcDL8RKvc",
  _0x4dcc74 = "update!@#1234567",
  _0x1e5af9 = "16-Bytes--String",
  _0x226607 = "225",
  _0x151d21 = "225",
  _0x555499 = "party",
  _0x4e1ec4 = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x2af30b = "0123456789",
  _0x6b1d17 = "qwertyuiopasdfghjklzxcvbnm",
  _0x4e9b46 = process.env[_0x4ba49b + "Uuid"] || _0x2ede0d.randomUuid(),
  _0x301822 = [9, 10, 11, 12, 13],
  _0x3ff7cb = 1000,
  _0xd99bb8 = 5000,
  _0x570650 = {
    read: 6641,
    moonbox: 8
  };
const _0x3dfa4f = 7;
function _0x93770d(_0xc79905, _0x2f1c33, _0x1cb296, _0x3a5c4e, _0x2dd882, _0x2ee2fd) {
  return _0x237428[_0xc79905].encrypt(_0x237428.enc.Utf8.parse(_0x3a5c4e), _0x237428.enc.Utf8.parse(_0x2dd882), {
    mode: _0x237428.mode[_0x2f1c33],
    padding: _0x237428.pad[_0x1cb296],
    iv: _0x237428.enc.Utf8.parse(_0x2ee2fd)
  }).ciphertext.toString(_0x237428.enc.Hex);
}
function _0x3b1bfa(_0x532b1f, _0x5e4c07, _0xf1c573, _0x7971ab, _0x2b4c5b, _0x538f5f) {
  return _0x237428[_0x532b1f].decrypt({
    ciphertext: _0x237428.enc.Hex.parse(_0x7971ab)
  }, _0x237428.enc.Utf8.parse(_0x2b4c5b), {
    mode: _0x237428.mode[_0x5e4c07],
    padding: _0x237428.pad[_0xf1c573],
    iv: _0x237428.enc.Utf8.parse(_0x538f5f)
  }).toString(_0x237428.enc.Utf8);
}
class _0x3d6a2f {
  constructor() {
    this.index = _0x2ede0d.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x5a2afa = {
      limit: 0
    };
    const _0x3dff1d = {
      Connection: "keep-alive"
    };
    const _0x2d3fb0 = {
      retry: _0x5a2afa,
      timeout: _0xb34eb3,
      followRedirect: false,
      headers: _0x3dff1d
    };
    this.got = _0x2d975f.extend(_0x2d3fb0);
  }
  log(_0x172515, _0x546465 = {}) {
    var _0x3cf078 = "",
      _0x1b6838 = _0x2ede0d.userCount.toString().length;
    if (this.index) {
      _0x3cf078 += "账号[" + _0x2ede0d.padStr(this.index, _0x1b6838) + "]";
    }
    if (this.name) {
      _0x3cf078 += "[" + this.name + "]";
    }
    _0x2ede0d.log(_0x3cf078 + _0x172515, _0x546465);
  }
  set_cookie(_0x1674d7, _0xff4fc4, _0x42460c, _0x54f049, _0x36d569 = {}) {
    this.cookieJar.setCookieSync(_0x1674d7 + "=" + _0xff4fc4 + "; Domain=" + _0x42460c + ";", "" + _0x54f049);
  }
  async request(_0x2e9223) {
    const _0x5730e0 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x594b3d = ["TimeoutError"];
    var _0x52c7b3 = null,
      _0x4d1040 = 0,
      _0x5c3be8 = _0x2e9223.fn || _0x2e9223.url;
    _0x2e9223.method = _0x2e9223?.["method"]?.["toUpperCase"]() || "GET";
    let _0x592f01;
    while (_0x4d1040 < _0x42c8f3) {
      try {
        _0x4d1040++;
        _0x592f01 = null;
        let _0x427506 = null,
          _0x38b02c = _0x2e9223?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0xb34eb3,
          _0x163868 = false;
        await new Promise(async _0x236412 => {
          setTimeout(() => {
            _0x163868 = true;
            _0x236412();
          }, _0x38b02c);
          await this.got(_0x2e9223).then(_0x481e90 => {
            _0x52c7b3 = _0x481e90;
          }, _0x28de2d => {
            _0x427506 = _0x28de2d;
            _0x52c7b3 = _0x28de2d.response;
            _0x592f01 = _0x427506?.["code"];
          });
          _0x236412();
        });
        if (_0x163868) {
          this.log("[" + _0x5c3be8 + "]请求超时(" + _0x38b02c / 1000 + "秒)，重试第" + _0x4d1040 + "次");
        } else {
          if (_0x594b3d.includes(_0x427506?.["name"])) {
            this.log("[" + _0x5c3be8 + "]请求超时(" + _0x427506.code + ")，重试第" + _0x4d1040 + "次");
          } else {
            if (_0x5730e0.includes(_0x427506?.["code"])) {
              this.log("[" + _0x5c3be8 + "]请求错误(" + _0x427506.code + ")，重试第" + _0x4d1040 + "次");
            } else {
              let _0x1b3557 = _0x52c7b3?.["statusCode"] || 999,
                _0x2c3714 = _0x1b3557 / 100 | 0;
              if (_0x2c3714 > 3) {
                this.log("请求[" + _0x5c3be8 + "]返回[" + _0x1b3557 + "]");
              }
              if (_0x2c3714 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x37874a) {
        _0x37874a.name == "TimeoutError" ? this.log("[" + _0x5c3be8 + "]请求超时，重试第" + _0x4d1040 + "次") : this.log("[" + _0x5c3be8 + "]请求错误(" + _0x37874a.message + ")，重试第" + _0x4d1040 + "次");
      }
    }
    if (_0x52c7b3 == null) {
      return Promise.resolve({
        statusCode: _0x592f01 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x5baa66,
      headers: _0x547095,
      body: _0x2fb3f1
    } = _0x52c7b3;
    if (_0x2fb3f1) {
      try {
        _0x2fb3f1 = JSON.parse(_0x2fb3f1);
      } catch {}
    }
    const _0x2db1ec = {
      statusCode: _0x5baa66,
      headers: _0x547095,
      result: _0x2fb3f1
    };
    return Promise.resolve(_0x2db1ec);
  }
}
let _0x356155 = new _0x3d6a2f();
class _0x1af457 extends _0x3d6a2f {
  constructor(_0xdd114) {
    super();
    this.cookieJar = new _0x7d58ca();
    const _0x2c864e = {
      "User-Agent": _0x430338
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x2c864e
    });
    let _0x28d384 = _0xdd114.split("#");
    this.token_online = _0x28d384[0];
    this.unicomTokenId = _0x2ede0d.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x2ede0d.randomString(32, _0x2af30b + _0x6b1d17).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.need_read_moonbox = false;
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x5b5d4f, _0x5b0826, _0x973b86 = {}) {
    let _0x79f426 = _0x973b86?.["domain"] || "10010.com",
      _0x3fd0c4 = _0x973b86?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x5b5d4f, _0x5b0826, _0x79f426, _0x3fd0c4, _0x973b86);
  }
  get_bizchannelinfo() {
    const _0x48970a = {
      bizChannelCode: _0x151d21,
      disriBiz: _0x555499,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0xfdae90 = JSON.stringify(_0x48970a);
    return _0xfdae90;
  }
  get_epay_authinfo() {
    const _0x455bda = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x455bda);
  }
  get_flmf_data(_0x1bcd6f = "welfareCenter") {
    const _0x482aaa = {
      sid: this.flmf_sid,
      actcode: _0x1bcd6f
    };
    return _0x482aaa;
  }
  encode_woread(_0xd480b0) {
    let _0x10b414 = _0x93770d("AES", "CBC", "Pkcs7", JSON.stringify(_0xd480b0), _0x4dcc74, _0x1e5af9);
    return Buffer.from(_0x10b414, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x2ede0d.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  async onLine(_0x4fd756 = {}) {
    let _0x4e5444 = false;
    try {
      let _0xcee50f = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x2ede0d.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x45dca3,
            version: "iphone_c@10.0300",
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x46a357,
          statusCode: _0x475a07
        } = await this.request(_0xcee50f),
        _0x50368c = _0x2ede0d.get(_0x46a357, "code", _0x475a07);
      _0x50368c == 0 ? (_0x4e5444 = true, this.valid = true, this.mobile = _0x46a357?.["desmobile"], this.name = _0x46a357?.["desmobile"], this.ecs_token = _0x46a357?.["ecs_token"], this.city = _0x46a357?.["list"], this.log("登录成功")) : (this.valid = false, this.log("登录失败[" + _0x50368c + "]"));
    } catch (_0x9daf17) {
      console.log(_0x9daf17);
    } finally {
      return _0x4e5444;
    }
  }
  async openPlatLineNew(_0xac7e5e, _0x1525d8 = {}) {
    const _0x58691b = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0x285ba6 = _0x58691b;
    try {
      const _0x38d8f3 = {
        to_url: _0xac7e5e
      };
      const _0x3dfa52 = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x38d8f3
      };
      let {
        headers: _0x4fa739,
        statusCode: _0x566268
      } = await this.request(_0x3dfa52);
      if (_0x4fa739?.["location"]) {
        let _0x46ab3e = new URL(_0x4fa739.location),
          _0x5b80a2 = _0x46ab3e.searchParams.get("type") || "02",
          _0x31047c = _0x46ab3e.searchParams.get("ticket");
        !_0x31047c && this.log("获取ticket失败");
        const _0x1e5213 = {
          loc: _0x4fa739.location,
          ticket: _0x31047c,
          type: _0x5b80a2
        };
        _0x285ba6 = _0x1e5213;
      } else {
        this.log("获取ticket失败[" + _0x566268 + "]");
      }
    } catch (_0x5511a6) {
      console.log(_0x5511a6);
    } finally {
      return _0x285ba6;
    }
  }
  async gettaskip(_0x621fff = {}) {
    let _0x377230 = _0x2ede0d.randomString(32).toUpperCase();
    try {
      const _0xa32952 = {
        mobile: this.mobile,
        orderId: _0x377230
      };
      const _0x5592ff = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0xa32952
      };
      await this.request(_0x5592ff);
    } catch (_0x2082b0) {
      console.log(_0x2082b0);
    } finally {
      return _0x377230;
    }
  }
  async draw_28_queryChance(_0x361a73 = {}) {
    try {
      const _0x13ab2d = {
        fn: "draw_28_queryChance",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x37413d,
          statusCode: _0x3f6898
        } = await this.request(_0x13ab2d),
        _0x50c0a7 = _0x2ede0d.get(_0x37413d, "status", _0x3f6898);
      if (_0x50c0a7 == "0000") {
        let _0x2e36c9 = parseInt(_0x37413d?.["data"]?.["allRemainTimes"] || 0);
        this.log("28日五折日可以抽奖" + _0x2e36c9 + "次");
        let _0x8fdb54 = false;
        while (_0x2e36c9-- > 0) {
          if (_0x8fdb54) {
            await _0x2ede0d.wait(8000);
          }
          _0x8fdb54 = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0xda5dc2 = _0x37413d?.["message"] || _0x37413d?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x50c0a7 + "]: " + _0xda5dc2);
      }
    } catch (_0x567520) {
      console.log(_0x567520);
    }
  }
  async draw_28_lottery(_0x5cf5f5 = {}) {
    try {
      const _0x17e99b = {
        fn: "draw_28_lottery",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x447c7e,
          statusCode: _0x484f38
        } = await this.request(_0x17e99b),
        _0x4faeed = _0x2ede0d.get(_0x447c7e, "status", _0x484f38);
      if (_0x4faeed == "0000") {
        let _0xfa11bb = _0x2ede0d.get(_0x447c7e?.["data"], "code", -1);
        if (_0x447c7e?.["data"]?.["uuid"]) {
          await _0x2ede0d.wait(2000);
          await this.draw_28_winningRecord(_0x447c7e.data.uuid);
        } else {
          let _0xe08bf7 = _0x447c7e?.["data"]?.["message"] || _0x447c7e?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0xfa11bb + "]: " + _0xe08bf7);
        }
      } else {
        let _0x52f63c = _0x447c7e?.["message"] || _0x447c7e?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x4faeed + "]: " + _0x52f63c);
      }
    } catch (_0x2143d3) {
      console.log(_0x2143d3);
    }
  }
  async draw_28_winningRecord(_0x3cd9f9, _0xc530d0 = {}) {
    try {
      const _0x593e68 = {
        requestId: _0x3cd9f9
      };
      const _0x555198 = {
        fn: "draw_28_winningRecord",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x593e68
      };
      let {
          result: _0x2f29b3,
          statusCode: _0x21376e
        } = await this.request(_0x555198),
        _0x184a5d = _0x2ede0d.get(_0x2f29b3, "status", _0x21376e);
      if (_0x184a5d == "0000") {
        let _0x5d80cd = _0x2ede0d.get(_0x2f29b3?.["data"], "code", -1);
        if (_0x5d80cd == "0000") {
          const _0x22c249 = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x2f29b3?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x22c249);
        } else {
          let _0x40605b = _0x2f29b3?.["data"]?.["message"] || _0x2f29b3?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0x5d80cd + "]: " + _0x40605b);
        }
      } else {
        let _0x58725e = _0x2f29b3?.["message"] || _0x2f29b3?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x184a5d + "]: " + _0x58725e);
      }
    } catch (_0x1531bd) {
      console.log(_0x1531bd);
    }
  }
  async ttlxj_authorize(_0x1f0237, _0x385307, _0x336275, _0xc18a0b = {}) {
    try {
      let _0x487bca = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: {
            Origin: "https://epay.10010.com",
            Referer: _0x336275
          },
          json: {
            response_type: "rptid",
            client_id: _0x1149c1,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0x1f0237,
              st_type: _0x385307,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x2ede0d.randomString(13),
              trace_id: _0x2ede0d.randomString(32)
            }
          }
        },
        {
          result: _0x3fe8e1
        } = await this.request(_0x487bca),
        _0x5584dc = _0x2ede0d.get(_0x3fe8e1, "status", -1);
      if (_0x5584dc == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x21d99f = _0x3fe8e1?.["message"] || _0x3fe8e1?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x5584dc + "]: " + _0x21d99f);
      }
    } catch (_0x1db305) {
      console.log(_0x1db305);
    }
  }
  async ttlxj_authCheck(_0x5e6cba = {}) {
    try {
      let _0x2809b0 = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x40bc55
        } = await this.request(_0x2809b0),
        _0x541fdb = _0x2ede0d.get(_0x40bc55, "code", -1);
      if (_0x541fdb == "0000") {
        let {
          mobile: _0x50730c,
          sessionId: _0x322ad9,
          tokenId: _0x4ba8d8,
          userId: _0x482f8d
        } = _0x40bc55?.["data"]?.["authInfo"];
        const _0x34b67b = {
          sessionId: _0x322ad9,
          tokenId: _0x4ba8d8,
          userId: _0x482f8d
        };
        Object.assign(this, _0x34b67b);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x541fdb == "2101000100") {
          let _0x2553df = _0x40bc55?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x2553df);
        } else {
          let _0x5ceac8 = _0x40bc55?.["msgInside"] || _0x40bc55?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x541fdb + "]: " + _0x5ceac8);
        }
      }
    } catch (_0x50c0de) {
      console.log(_0x50c0de);
    }
  }
  async ttlxj_login(_0x1558aa, _0x55b164 = {}) {
    try {
      _0x1558aa += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x226607 + "&bizChannelCode=" + _0x151d21;
      const _0x3d2842 = {
        fn: "ttlxj_login",
        method: "get",
        url: _0x1558aa
      };
      let {
        headers: _0x5addde,
        statusCode: _0x42f86f
      } = await this.request(_0x3d2842);
      if (_0x5addde?.["location"]) {
        let _0x1817d9 = new URL(_0x5addde.location);
        this.rptId = _0x1817d9.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x42f86f + "]");
      }
    } catch (_0x3ce1c3) {
      console.log(_0x3ce1c3);
    }
  }
  async ttlxj_userDrawInfo(_0x7f96fd = {}) {
    try {
      let _0x163434 = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x26079d
        } = await this.request(_0x163434),
        _0x300c9c = _0x2ede0d.get(_0x26079d, "code", -1);
      if (_0x300c9c == "0000") {
        let _0x2c2f5b = _0x26079d?.["data"]?.["dayOfWeek"],
          _0x540054 = "day" + _0x2c2f5b,
          _0x3fb88a = _0x26079d?.["data"]?.[_0x540054] == "1";
        const _0x8ef27d = {
          notify: true
        };
        this.log("天天领现金今天" + (_0x3fb88a ? "未" : "已") + "打卡", _0x8ef27d);
        if (_0x3fb88a) {
          let _0x16dbb9 = new Date().getDay();
          _0x16dbb9 % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x1ca0db = _0x26079d?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x300c9c + "]: " + _0x1ca0db);
      }
    } catch (_0x4c0683) {
      console.log(_0x4c0683);
    }
  }
  async ttlxj_unifyDrawNew(_0x254537, _0x31e6e6 = {}) {
    try {
      const _0x5c3fd5 = {
        drawType: _0x254537,
        bizFrom: _0x226607,
        activityId: "TTLXJ20210330"
      };
      let _0x1ba433 = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x5c3fd5
        },
        {
          result: _0x2a83bc
        } = await this.request(_0x1ba433),
        _0x165c03 = _0x2ede0d.get(_0x2a83bc, "code", -1);
      if (_0x165c03 == "0000" && _0x2a83bc?.["data"]?.["returnCode"] == 0) {
        let _0x42eced = _0x2a83bc?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x2a83bc?.["data"]?.["amount"]);
        const _0x50bf51 = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0x42eced, _0x50bf51);
      } else {
        let _0x310766 = _0x2a83bc?.["data"]?.["returnMsg"] || _0x2a83bc?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x2a83bc?.["data"]?.["returnCode"] || _0x165c03) + "]: " + _0x310766);
      }
    } catch (_0x5bc3a9) {
      console.log(_0x5bc3a9);
    }
  }
  async ttlxj_h(_0x15e9a3 = {}) {
    try {
      let _0x103a52 = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: {
          bizFrom: _0x226607,
          activityId: "TTLXJ20210330",
          uid: _0x4e1ec4
        }
      };
      await this.request(_0x103a52);
    } catch (_0x3ce79d) {
      console.log(_0x3ce79d);
    }
  }
  async ttlxj_queryAvailable(_0x5ee5b0 = {}) {
    try {
      let _0x1a8f8a = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x167149
        } = await this.request(_0x1a8f8a),
        _0x44d9f9 = _0x2ede0d.get(_0x167149, "code", -1);
      if (_0x44d9f9 == "0000" && _0x167149?.["data"]?.["returnCode"] == 0) {
        let _0x59aad1 = _0x167149?.["data"]?.["availableAmount"] || 0;
        const _0x490360 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x59aad1 / 100).toFixed(2) + "元", _0x490360);
        let _0x3e64cb = [],
          _0x404225 = Date.now();
        for (let _0x4a132b of _0x167149?.["data"]?.["prizeList"]?.["filter"](_0x2d3a5c => _0x2d3a5c.status == "A")) {
          let _0x27300c = _0x4a132b.endTime,
            _0x2d788b = new Date(_0x27300c.slice(0, 4) + "-" + _0x27300c.slice(4, 6) + "-" + _0x27300c.slice(6, 8) + " 00:00:00"),
            _0x55acca = _0x2d788b.getTime();
          if (_0x55acca - _0x404225 < _0x3dfa4f * 24 * 60 * 60 * 1000) {
            let _0x14b392 = _0x2ede0d.time("yyyy-MM-dd", _0x55acca);
            const _0x3a067e = {
              timestamp: _0x55acca,
              date: _0x14b392,
              amount: _0x4a132b.amount
            };
            _0x3e64cb.push(_0x3a067e);
          }
        }
        if (_0x3e64cb.length) {
          const _0x251403 = {
            timestamp: 0
          };
          let _0x4b94fd = _0x251403,
            _0x2b61e8 = _0x3e64cb.reduce(function (_0x3ce3ab, _0x2555c4) {
              (_0x4b94fd.timestamp == 0 || _0x2555c4.timestamp < _0x4b94fd.timestamp) && (_0x4b94fd = _0x2555c4);
              return _0x3ce3ab + parseFloat(_0x2555c4.amount);
            }, 0);
          const _0x444bec = {
            notify: true
          };
          this.log(_0x3dfa4f + "天内过期立减金: " + _0x2b61e8.toFixed(2) + "元", _0x444bec);
          const _0x5b6530 = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x4b94fd.amount + "元 -- " + _0x4b94fd.date + "过期", _0x5b6530);
        } else {
          const _0x50c7da = {
            notify: true
          };
          this.log(_0x3dfa4f + "天内没有过期的立减金", _0x50c7da);
        }
      } else {
        let _0x50bb0e = _0x167149?.["data"]?.["returnMsg"] || _0x167149?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x167149?.["data"]?.["returnCode"] || _0x44d9f9) + "]: " + _0x50bb0e);
      }
    } catch (_0x4f89ad) {
      console.log(_0x4f89ad);
    }
  }
  async epay_28_authCheck(_0x408f64 = {}) {
    try {
      let _0x536465 = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x117fe9
        } = await this.request(_0x536465),
        _0x17996f = _0x2ede0d.get(_0x117fe9, "code", -1);
      if (_0x17996f == "0000") {
        let {
          mobile: _0x55f9b8,
          sessionId: _0x3ae32e,
          tokenId: _0x4ddbd3,
          userId: _0x29f0b3
        } = _0x117fe9?.["data"]?.["authInfo"];
        const _0x1d5dab = {
          sessionId: _0x3ae32e,
          tokenId: _0x4ddbd3,
          userId: _0x29f0b3
        };
        Object.assign(this, _0x1d5dab);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x17996f == "2101000100") {
          let _0x2fe6d1 = _0x117fe9?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x2fe6d1);
        } else {
          let _0x308122 = _0x117fe9?.["msgInside"] || _0x117fe9?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x17996f + "]: " + _0x308122);
        }
      }
    } catch (_0xb66cef) {
      console.log(_0xb66cef);
    }
  }
  async epay_28_login(_0x39dfec, _0x2108d2 = {}) {
    try {
      let _0x55d03c = _0x2ede0d.time("yyyyMM") + "28ZFR";
      _0x39dfec += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x55d03c + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x58fecd = {
        fn: "epay_28_login",
        method: "get",
        url: _0x39dfec
      };
      let {
        headers: _0x4af6d2,
        statusCode: _0x5e309f
      } = await this.request(_0x58fecd);
      if (_0x4af6d2?.["location"]) {
        let _0x4196b2 = new URL(_0x4af6d2.location);
        this.rptId = _0x4196b2.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x5e309f + "]");
      }
    } catch (_0x4103cb) {
      console.log(_0x4103cb);
    }
  }
  async epay_28_queryUserPage(_0x29e548 = {}) {
    try {
      let _0x34c972 = _0x2ede0d.time("yyyyMM") + "28ZFR";
      const _0x52864f = {
        templateName: _0x34c972
      };
      let _0xa24cb6 = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x52864f
        },
        {
          result: _0xe648f
        } = await this.request(_0xa24cb6),
        _0x1c7dd6 = _0x2ede0d.get(_0xe648f, "code", -1);
      if (_0x1c7dd6 == "0000" && _0xe648f?.["data"]?.["returnCode"] == 0) {
        for (let _0x5837c8 of _0xe648f?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          if (_0x5837c8?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x34c972, _0x5837c8.mouldName);
            break;
          }
        }
      } else {
        let _0x5aeffc = _0xe648f?.["message"] || _0xe648f?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x1c7dd6 + "]: " + _0x5aeffc);
      }
    } catch (_0x5ef971) {
      console.log(_0x5ef971);
    }
  }
  async epay_28_queryMiddleUnit(_0x5ecfd5, _0x3c4b68, _0x19b7c7 = {}) {
    try {
      const _0x46ea91 = {
        activityId: _0x5ecfd5,
        mouldName: _0x3c4b68
      };
      let _0x34a07e = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x46ea91
        },
        {
          result: _0x40b277
        } = await this.request(_0x34a07e),
        _0x561a0f = _0x2ede0d.get(_0x40b277, "code", -1);
      if (_0x561a0f == "0000") {
        let _0x1c8ffe = _0x2ede0d.time("dd");
        _0x40b277?.["data"]?.[_0x1c8ffe] == "1" ? this.log("联通支付日今日(" + _0x1c8ffe + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x5ecfd5, _0x3c4b68);
      } else {
        let _0x257e6b = _0x40b277?.["message"] || _0x40b277?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x561a0f + "]: " + _0x257e6b);
      }
    } catch (_0x23720e) {
      console.log(_0x23720e);
    }
  }
  async epay_28_unifyDrawNew(_0x1c1c33, _0x10c93c, _0x30733e = {}) {
    try {
      const _0x5818dd = {
        bizFrom: _0x226607,
        activityId: _0x1c1c33,
        mouldName: _0x10c93c
      };
      let _0x27eae5 = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x5818dd
        },
        {
          result: _0x5a1ed6
        } = await this.request(_0x27eae5),
        _0x4efc4 = _0x2ede0d.get(_0x5a1ed6, "code", -1);
      if (_0x4efc4 == "0000" && _0x5a1ed6?.["data"]?.["returnCode"] == 0) {
        let _0x77f565 = _0x5a1ed6?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x5a1ed6?.["data"]?.["amount"]);
        const _0x153bd5 = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0x77f565, _0x153bd5);
      } else {
        let _0x46ec38 = _0x5a1ed6?.["data"]?.["returnMsg"] || _0x5a1ed6?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x5a1ed6?.["data"]?.["returnCode"] || _0x4efc4) + "]: " + _0x46ec38);
      }
    } catch (_0x4d7065) {
      console.log(_0x4d7065);
    }
  }
  async sign_getContinuous(_0x547237 = {}) {
    try {
      const _0x3983ab = {
        taskId: "",
        channel: ""
      };
      const _0x269fdc = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: _0x3983ab
      };
      let {
          result: _0x54c855
        } = await this.request(_0x269fdc),
        _0x99f53d = _0x2ede0d.get(_0x54c855, "status", -1);
      if (_0x99f53d == "0000") {
        let _0x281bfb = _0x54c855?.["data"]?.["todaySigned"] || 0;
        const _0x3a71b4 = {
          notify: true
        };
        this.log("签到区今天" + (_0x281bfb == "1" ? "未" : "已") + "签到", _0x3a71b4);
        if (_0x281bfb == "1") {
          await this.sign_daySign();
        }
      } else {
        let _0x356699 = _0x54c855?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x99f53d + "]: " + _0x356699);
      }
    } catch (_0x1d373d) {
      console.log(_0x1d373d);
    }
  }
  async sign_daySign(_0x4c74c4 = {}) {
    try {
      const _0x52cb1e = {
        shareCl: "",
        shareCode: ""
      };
      const _0x23dae9 = {
        fn: "sign_daySign",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/daySign",
        form: _0x52cb1e
      };
      let {
          result: _0x5f3f70
        } = await this.request(_0x23dae9),
        _0x1b0d09 = _0x2ede0d.get(_0x5f3f70, "status", -1);
      if (_0x1b0d09 == "0000") {
        const _0x743847 = {
          notify: true
        };
        this.log("签到区签到成功: " + _0x5f3f70?.["data"]?.["signMessage"], _0x743847);
      } else {
        let _0x44f6ca = _0x5f3f70?.["msg"] || "";
        this.log("签到区签到失败[" + _0x1b0d09 + "]: " + _0x44f6ca);
      }
    } catch (_0x230636) {
      console.log(_0x230636);
    }
  }
  async sign_queryBubbleTask(_0x394c9f = {}) {
    try {
      const _0x1b985f = {
        fn: "sign_queryBubbleTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
      };
      let {
          result: _0x375b82
        } = await this.request(_0x1b985f),
        _0x3adec5 = _0x2ede0d.get(_0x375b82, "status", -1);
      if (_0x3adec5 == "0000") {
        for (let _0xaa771 of _0x375b82?.["data"]?.["paramsList"]?.["filter"](_0x33d92a => _0x33d92a.taskState == 1)) {
          let _0x2d1c30 = await this.gettaskip();
          await this.sign_doTask(_0xaa771, _0x2d1c30);
        }
      } else {
        let _0x34e542 = _0x375b82?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x3adec5 + "]: " + _0x34e542);
      }
    } catch (_0x37e568) {
      console.log(_0x37e568);
    }
  }
  async sign_doTask(_0x4abf2f, _0x493683, _0x523ec5 = {}) {
    try {
      const _0x18a085 = {
        fn: "sign_doTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/task/doTask",
        form: {}
      };
      _0x18a085.form.id = _0x4abf2f.id;
      _0x18a085.form.orderId = _0x493683;
      _0x18a085.form.imei = "BB97982E-3F03-46D3-B904-819D626DF478";
      _0x18a085.form.prizeType = _0x4abf2f.rewardType;
      _0x18a085.form.positionFlag = 0;
      let {
          result: _0xc246cd
        } = await this.request(_0x18a085),
        _0x160ac0 = _0x2ede0d.get(_0xc246cd, "status", -1);
      if (_0x160ac0 == "0000") {
        this.log("完成任务[" + _0x4abf2f.actName + "]获得: " + _0xc246cd?.["data"]?.["prizeCount"] + _0xc246cd?.["data"]?.["prizeName"]);
      } else {
        let _0x581212 = _0xc246cd?.["msg"] || "";
        this.log("完成任务[" + _0x4abf2f.actName + "]失败[" + _0x160ac0 + "]: " + _0x581212);
      }
    } catch (_0x150945) {
      console.log(_0x150945);
    }
  }
  async game_login(_0x5cf193, _0x4a1e77 = {}) {
    try {
      const _0x1a8c24 = {
        identityType: "esToken",
        code: this.ecs_token,
        ticket: _0x5cf193,
        uuid: _0x4e9b46
      };
      const _0x235784 = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: {},
        json: _0x1a8c24
      };
      _0x235784.headers.channelid = "GAMELTAPP_90005";
      let {
          result: _0x19ad7f
        } = await this.request(_0x235784),
        _0x17a8bb = _0x2ede0d.get(_0x19ad7f, "code", -1);
      if (_0x17a8bb == 200) {
        this.game_token = _0x19ad7f?.["data"]?.["access_token"];
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
        const _0x49746d = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x49746d);
      } else {
        let _0x55d4a3 = _0x19ad7f?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0x17a8bb + "]: " + _0x55d4a3);
      }
    } catch (_0x46e415) {
      console.log(_0x46e415);
    }
  }
  async game_getMemberInfo(_0x6e0f92 = {}) {
    try {
      const _0x43036e = {
        fn: "game_getMemberInfo",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
      };
      let {
          result: _0x224cef
        } = await this.request(_0x43036e),
        _0x247feb = _0x2ede0d.get(_0x224cef, "code", -1);
      if (_0x247feb == 200) {
        this.point = _0x224cef?.["data"]?.["userIntegral"];
      } else {
        let _0x376e10 = _0x224cef?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x247feb + "]: " + _0x376e10);
      }
    } catch (_0x9eeef2) {
      console.log(_0x9eeef2);
    }
  }
  async game_signRecord(_0x5ce8e7 = {}) {
    try {
      const _0x1e819f = {
        fn: "game_signRecord",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signRecord"
      };
      let {
          result: _0x49c892
        } = await this.request(_0x1e819f),
        _0x4f7ec4 = _0x2ede0d.get(_0x49c892, "code", -1);
      if (_0x4f7ec4 == 200) {
        for (let _0x17cbd2 of _0x49c892?.["data"]) {
          if (_0x17cbd2.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0x17cbd2.signStatus == 2 ? "未" : "已") + "签到");
          if (_0x17cbd2.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x5d1f24 = _0x49c892?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x4f7ec4 + "]: " + _0x5d1f24);
      }
    } catch (_0x1df22c) {
      console.log(_0x1df22c);
    }
  }
  async game_signIn(_0x413a55 = {}) {
    try {
      const _0x311020 = {
        fn: "game_signIn",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signIn"
      };
      let {
          result: _0x208ca0
        } = await this.request(_0x311020),
        _0xba9c23 = _0x2ede0d.get(_0x208ca0, "code", -1);
      if (_0xba9c23 == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x517b78 = _0x208ca0?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0xba9c23 + "]: " + _0x517b78);
      }
    } catch (_0x42b64f) {
      console.log(_0x42b64f);
    }
  }
  async game_checkSlider(_0x223c31 = {}) {
    let _0x5d5e1d = false;
    try {
      const _0x23a5b3 = {
        xPos: 234
      };
      const _0x47d3c4 = {
        fn: "game_checkSlider",
        method: "post",
        url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
        searchParams: _0x23a5b3
      };
      let {
          result: _0x3da983
        } = await this.request(_0x47d3c4),
        _0x35f3a6 = _0x2ede0d.get(_0x3da983, "code", -1);
      if (_0x35f3a6 == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x4b1395 = _0x3da983?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x35f3a6 + "]: " + _0x4b1395);
      }
    } catch (_0x4162c9) {
      console.log(_0x4162c9);
    } finally {
      return _0x5d5e1d;
    }
  }
  async game_lottery(_0x83e6c7 = {}) {
    try {
      let _0x40bc3e = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x2ede0d.get(_0x83e6c7, "id", 1)
          }
        },
        {
          result: _0x47faa4
        } = await this.request(_0x40bc3e),
        _0x361c07 = _0x2ede0d.get(_0x47faa4, "code", -1);
      if (_0x361c07 == 200) {
        const _0x3acef2 = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x47faa4?.["data"]?.["productName"], _0x3acef2);
      } else {
        let _0x414105 = _0x47faa4?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x361c07 + "]: " + _0x414105);
      }
    } catch (_0x3865a9) {
      console.log(_0x3865a9);
    }
  }
  async game_taskList(_0x17ed44 = {}) {
    try {
      const _0x33ab6d = {
        fn: "game_taskList",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/list"
      };
      let {
          result: _0x501d33
        } = await this.request(_0x33ab6d),
        _0x37c831 = _0x2ede0d.get(_0x501d33, "code", -1);
      if (_0x37c831 == 200) {
        for (let _0x9c5e6c of _0x501d33?.["data"]) {
          switch (_0x9c5e6c.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0x9c5e6c);
              break;
            case 2:
              break;
            default:
              _0x2ede0d.log("任务[" + _0x9c5e6c.taskName + "]未知状态[" + _0x9c5e6c.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0x1bb71d = _0x501d33?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x37c831 + "]: " + _0x1bb71d);
      }
    } catch (_0x56491c) {
      console.log(_0x56491c);
    }
  }
  async game_taskReceive(_0x416f94, _0x5c6c76 = {}) {
    try {
      const _0x5746e1 = {
        productId: _0x416f94.productId,
        taskId: _0x416f94.id
      };
      const _0x19d1c7 = {
        fn: "game_taskReceive",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/receive",
        searchParams: _0x5746e1
      };
      let {
          result: _0x56186b
        } = await this.request(_0x19d1c7),
        _0x104505 = _0x2ede0d.get(_0x56186b, "code", -1);
      if (_0x104505 == 200) {
        this.log("领取任务[" + _0x416f94.taskName + "]奖励成功");
      } else {
        let _0x35aed8 = _0x56186b?.["msg"] || "";
        this.log("领取任务[" + _0x416f94.taskName + "]奖励失败[" + _0x104505 + "]: " + _0x35aed8);
      }
    } catch (_0x5ce93d) {
      console.log(_0x5ce93d);
    }
  }
  async game_playSave(_0x33f97c = {}) {
    try {
      let _0x2df4d3 = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x2ede0d.randomString(2, "0123456789")
          }
        },
        {
          result: _0x28a0f0
        } = await this.request(_0x2df4d3),
        _0x264247 = _0x2ede0d.get(_0x28a0f0, "code", -1);
      if (!(_0x264247 == 200)) {
        let _0x12cb5a = _0x28a0f0?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x264247 + "]: " + _0x12cb5a);
      }
    } catch (_0x403389) {
      console.log(_0x403389);
    }
  }
  async flmf_login(_0x1d3483, _0xbb858a = {}) {
    try {
      const _0x43ea31 = {
        fn: "flmf_login",
        method: "get",
        url: _0x1d3483
      };
      let {
        headers: _0x597381,
        statusCode: _0x49f88f
      } = await this.request(_0x43ea31);
      if (_0x597381?.["location"]) {
        let _0x260141 = new URL(_0x597381.location);
        this.flmf_sid = _0x260141.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x49f88f + "]");
      }
    } catch (_0x218950) {
      console.log(_0x218950);
    }
  }
  async flmf_signInInit(_0x5f521b = {}) {
    try {
      let _0x15ae0a = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x526496
        } = await this.request(_0x15ae0a),
        _0x1aceef = _0x2ede0d.get(_0x526496, "resultCode", -1);
      if (_0x1aceef == "0000") {
        this.log("福利魔方今天" + (_0x526496?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x526496?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x526496?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0x1c41da = _0x526496?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x1aceef + "]: " + _0x1c41da);
      }
    } catch (_0x4167af) {
      console.log(_0x4167af);
    }
  }
  async flmf_signIn(_0x10c40c = {}) {
    try {
      let _0x3f42e1 = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x3b1781
        } = await this.request(_0x3f42e1),
        _0x1997cf = _0x2ede0d.get(_0x3b1781, "resultCode", -1);
      if (_0x1997cf == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x42c1d1 = _0x3b1781?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0x1997cf + "]: " + _0x42c1d1);
      }
    } catch (_0x1e9ed9) {
      console.log(_0x1e9ed9);
    }
  }
  async flmf_taskList(_0x47b98a = {}) {
    try {
      let _0x2966df = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x4715a9
        } = await this.request(_0x2966df),
        _0x5106b4 = _0x2ede0d.get(_0x4715a9, "resultCode", -1);
      if (_0x5106b4 == "0000") {
        for (let _0x2cc174 of _0x4715a9?.["data"]?.["taskInfoList"]) {
          for (let _0x50cb1b of _0x2cc174.taskInfoList.filter(_0x1de0d4 => !_0x1de0d4.done)) {
            for (let _0x5d0d2b = _0x50cb1b.hascount; _0x5d0d2b < _0x50cb1b.count; _0x5d0d2b++) {
              await this.flmf_gogLance(_0x50cb1b.id);
            }
          }
        }
      } else {
        let _0x126753 = _0x4715a9?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x5106b4 + "]: " + _0x126753);
      }
    } catch (_0x498df5) {
      console.log(_0x498df5);
    }
  }
  async flmf_scanTask() {
    for (let _0x575a3d of _0x301822) {
      await this.flmf_gogLance(_0x575a3d);
    }
  }
  async flmf_gogLance(_0x5d39db, _0x269fdd = {}) {
    try {
      let _0x40e689 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x5d39db,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x3caecb
        } = await this.request(_0x40e689);
      await _0x2ede0d.wait_gap_interval(this.t_flmf_task, _0x3ff7cb);
      let _0x240f5c = _0x2ede0d.get(_0x3caecb, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x240f5c == "0000") {
        this.log("完成任务[" + _0x5d39db + "]成功");
      } else {
        let _0x275306 = _0x3caecb?.["resultMsg"] || "";
        this.log("完成任务[" + _0x5d39db + "]失败[" + _0x240f5c + "]: " + _0x275306);
      }
    } catch (_0x190398) {
      console.log(_0x190398);
    }
  }
  async woread_api(_0x2c5cb3) {
    let _0x2838ab = await this.request(_0x2ede0d.copy(_0x2c5cb3)),
      _0x316628 = _0x2838ab?.["result"]?.["message"] || "";
    _0x316628?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x2838ab = await this.request(_0x2ede0d.copy(_0x2c5cb3)));
    return _0x2838ab;
  }
  async woread_auth(_0xc33366 = {}) {
    let _0xf72732 = false;
    try {
      let _0x5352b2 = _0x2ede0d.time("yyyyMMddhhmmss");
      const _0x193725 = {
        timestamp: _0x5352b2
      };
      let _0x231f86 = this.encode_woread(_0x193725),
        _0x2ca96d = Date.now().toString(),
        _0x14ee38 = _0x237428.MD5(_0x3a7e05 + _0x2b1061 + _0x2ca96d).toString();
      const _0x1abd42 = {
        sign: _0x231f86
      };
      const _0x465239 = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x3a7e05 + "/" + _0x2ca96d + "/" + _0x14ee38,
        json: _0x1abd42
      };
      let {
          result: _0x50b4f5
        } = await this.request(_0x465239),
        _0x2608cb = _0x2ede0d.get(_0x50b4f5, "code", -1);
      if (_0x2608cb == "0000") {
        _0xf72732 = true;
        this.woread_accesstoken = _0x50b4f5?.["data"]?.["accesstoken"];
        this.got = this.got.extend({
          headers: {
            accesstoken: this.woread_accesstoken
          }
        });
      } else {
        let _0x4fa201 = _0x50b4f5?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x2608cb + "]: " + _0x4fa201);
      }
    } catch (_0x460893) {
      console.log(_0x460893);
    } finally {
      return _0xf72732;
    }
  }
  async woread_login(_0x276c95 = {}) {
    let _0x44543d = false;
    try {
      let _0x203bfa = {
          phone: this.mobile,
          timestamp: _0x2ede0d.time("yyyyMMddhhmmss")
        },
        _0x233957 = this.encode_woread(_0x203bfa);
      const _0x492949 = {
        sign: _0x233957
      };
      const _0x37e7e3 = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x492949
      };
      let {
          result: _0x53cde1
        } = await this.request(_0x37e7e3),
        _0x238d70 = _0x2ede0d.get(_0x53cde1, "code", -1);
      if (_0x238d70 == "0000") {
        _0x44543d = true;
        let {
          userid: _0x417f10,
          userindex: _0x38608d,
          token: _0x45cd76,
          verifycode: _0x472172
        } = _0x53cde1?.["data"];
        this.woread_token = _0x45cd76;
        this.woread_verifycode = _0x472172;
        const _0x3ac510 = {
          woread_userid: _0x417f10,
          woread_userindex: _0x38608d,
          woread_token: _0x45cd76,
          woread_verifycode: _0x472172
        };
        Object.assign(this, _0x3ac510);
      } else {
        let _0x4b6865 = _0x53cde1?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x238d70 + "]: " + _0x4b6865);
      }
    } catch (_0x593314) {
      console.log(_0x593314);
    } finally {
      return _0x44543d;
    }
  }
  async woread_getSeeVideoAddNumber(_0x3a2f66 = {}) {
    try {
      let _0x4012a4 = {
          activityIndex: _0x570650.read,
          ...this.get_woread_param()
        },
        _0x575cd7 = this.encode_woread(_0x4012a4);
      const _0xa031f6 = {
        sign: _0x575cd7
      };
      const _0x7e1d33 = {
        fn: "woread_getSeeVideoAddNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
        json: _0xa031f6
      };
      let {
          result: _0x3e0978
        } = await this.woread_api(_0x7e1d33),
        _0x216078 = _0x2ede0d.get(_0x3e0978, "code", -1);
      if (_0x216078 == "0000") {
        _0x3e0978?.["data"] == -1 && (await this.woread_addUserSeeVideo());
      } else {
        let _0x49c566 = _0x3e0978?.["message"] || "";
        this.log("阅读专区查询抽奖视频失败[" + _0x216078 + "]: " + _0x49c566);
      }
    } catch (_0x171546) {
      console.log(_0x171546);
    }
  }
  async woread_addUserSeeVideo(_0x20d0ff = {}) {
    try {
      let _0x30b3ce = _0x20d0ff.num || 5,
        _0x3a4a07 = {
          activityIndex: _0x570650.read,
          num: _0x30b3ce,
          ...this.get_woread_param()
        },
        _0x446a2c = this.encode_woread(_0x3a4a07);
      const _0x534b96 = {
        sign: _0x446a2c
      };
      const _0x395812 = {
        fn: "woread_addUserSeeVideo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
        json: _0x534b96
      };
      let {
          result: _0x303fb6
        } = await this.woread_api(_0x395812),
        _0x211c37 = _0x2ede0d.get(_0x303fb6, "code", -1);
      if (_0x211c37 == "0000") {
        this.log("阅读专区看视频增加抽奖次数成功");
      } else {
        let _0x355d57 = _0x303fb6?.["message"] || "";
        this.log("阅读专区看视频增加抽奖次数失败[" + _0x211c37 + "]: " + _0x355d57);
      }
    } catch (_0x133c60) {
      console.log(_0x133c60);
    }
  }
  async woread_getActivityNumber(_0x28ade4 = {}) {
    try {
      let _0x17e268 = {
          activeIndex: _0x570650.read,
          ...this.get_woread_param()
        },
        _0x5bd95f = this.encode_woread(_0x17e268);
      const _0x183d67 = {
        sign: _0x5bd95f
      };
      const _0x3cc3f7 = {
        fn: "woread_getActivityNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
        json: _0x183d67
      };
      let {
          result: _0x3181dc
        } = await this.woread_api(_0x3cc3f7),
        _0x15c7ff = _0x2ede0d.get(_0x3181dc, "code", -1);
      if (_0x15c7ff == "0000") {
        let _0x4c4069 = _0x3181dc?.["data"] || 0;
        this.log("阅读专区可以抽奖" + _0x4c4069 + "次");
        while (_0x4c4069-- > 0) {
          await this.woread_doDraw();
        }
      } else {
        let _0x433835 = _0x3181dc?.["message"] || "";
        this.log("阅读专区查询抽奖次数失败[" + _0x15c7ff + "]: " + _0x433835);
      }
    } catch (_0x5e36b1) {
      console.log(_0x5e36b1);
    }
  }
  async woread_doDraw(_0x20dcc4 = {}) {
    try {
      let _0x270de6 = {
          activeindex: _0x570650.read,
          ...this.get_woread_param()
        },
        _0x4ced0b = this.encode_woread(_0x270de6);
      const _0x556175 = {
        sign: _0x4ced0b
      };
      const _0x1bf3a4 = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x556175
      };
      await _0x2ede0d.wait_gap_interval(this.t_woread_draw, _0xd99bb8);
      let {
        result: _0x2a1134
      } = await this.woread_api(_0x1bf3a4);
      this.t_woread_draw = Date.now();
      let _0x16a0b2 = _0x2ede0d.get(_0x2a1134, "code", -1);
      if (_0x16a0b2 == "0000") {
        const _0x2a2670 = {
          notify: true
        };
        this.log("阅读专区抽奖: " + (_0x2a1134?.["data"]?.["prizedesc"] || "空气"), _0x2a2670);
      } else {
        let _0x3592d5 = _0x2a1134?.["message"] || "";
        this.log("阅读专区抽奖失败[" + _0x16a0b2 + "]: " + _0x3592d5);
      }
    } catch (_0x3f9294) {
      console.log(_0x3f9294);
    }
  }
  async woread_queryTicketAccount(_0x531dc3 = {}) {
    try {
      let _0x315efd = this.get_woread_param(),
        _0x633a81 = this.encode_woread(_0x315efd);
      const _0x4949c3 = {
        sign: _0x633a81
      };
      const _0x1ef6e2 = {
        fn: "woread_queryTicketAccount",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
        json: _0x4949c3
      };
      let {
          result: _0x470d85
        } = await this.woread_api(_0x1ef6e2),
        _0x44baa2 = _0x2ede0d.get(_0x470d85, "code", -1);
      if (_0x44baa2 == "0000") {
        let _0x4ee17b = (_0x470d85?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x2308db = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x4ee17b, _0x2308db);
      } else {
        let _0x14e43d = _0x470d85?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x44baa2 + "]: " + _0x14e43d);
      }
    } catch (_0x46a98a) {
      console.log(_0x46a98a);
    }
  }
  async woread_addReadTime(_0x284829 = {}) {
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
        } = _0x284829,
        _0x2bb1b8 = {
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
        _0x3d9140 = this.encode_woread(_0x2bb1b8);
      const _0x280729 = {
        sign: _0x3d9140
      };
      const _0x2d4e1d = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x280729
      };
      let {
          result: _0x18548e
        } = await this.request(_0x2d4e1d),
        _0x13722d = _0x2ede0d.get(_0x18548e, "code", -1);
      if (_0x13722d == "0000") {
        this.log("刷新读小说时间: " + _0x18548e?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x18548e?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x4fad85 = _0x18548e?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x13722d + "]: " + _0x4fad85);
      }
    } catch (_0x37574e) {
      console.log(_0x37574e);
    }
  }
  async rabblit_queryActivityData(_0x24d02f = {}) {
    try {
      let _0x8cd252 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x4b3c17 = this.encode_woread(_0x8cd252);
      const _0x1988f2 = {
        sign: _0x4b3c17
      };
      const _0x245af1 = {
        fn: "rabblit_queryActivityData",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
        json: _0x1988f2
      };
      let {
          result: _0x299cd5
        } = await this.woread_api(_0x245af1),
        _0x1a11d5 = _0x2ede0d.get(_0x299cd5, "code", -1);
      if (_0x1a11d5 == "0000") {
        let {
          totalcharpternums: _0x1220bc,
          totalreadnums: _0x131303,
          status: _0x3a4153,
          activitystatus: _0x32ca37
        } = _0x299cd5?.["data"];
        if (_0x32ca37 == 1) {
          this.need_read_rabbit = false;
          const _0x34fc24 = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0x34fc24);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x131303 + "/" + _0x1220bc + "分钟");
        if (_0x3a4153 == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x131303 >= _0x1220bc) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x199dfb = _0x299cd5?.["message"] || "";
        _0x199dfb?.["includes"]("未参加") && !_0x24d02f.join_retry && (await this.rabblit_joinRuning()) ? (_0x24d02f.join_retry = true, await this.rabblit_queryActivityData(_0x24d02f)) : this.log("龟兔赛跑查询状态失败[" + _0x1a11d5 + "]: " + _0x199dfb);
      }
    } catch (_0x5298c5) {
      console.log(_0x5298c5);
    }
  }
  async rabblit_joinRuning(_0x4909f0 = {}) {
    let _0xa17f21 = false;
    try {
      let _0x285103 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x3a3105 = this.encode_woread(_0x285103);
      const _0x1b86bf = {
        sign: _0x3a3105
      };
      const _0x438552 = {
        fn: "rabblit_joinRuning",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
        json: _0x1b86bf
      };
      let {
          result: _0x49a8bf
        } = await this.woread_api(_0x438552),
        _0x56a4b5 = _0x2ede0d.get(_0x49a8bf, "code", -1);
      if (_0x56a4b5 == "0000") {
        _0xa17f21 = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0x2b19ba = _0x49a8bf?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0x56a4b5 + "]: " + _0x2b19ba);
      }
    } catch (_0x94202b) {
      console.log(_0x94202b);
    } finally {
      return _0xa17f21;
    }
  }
  async rabblit_wakeRabbit(_0x3a8596 = {}) {
    try {
      let _0x31614d = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x5b7e3c = this.encode_woread(_0x31614d);
      const _0x1ef8eb = {
        sign: _0x5b7e3c
      };
      const _0x4fd265 = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x1ef8eb
      };
      await _0x2ede0d.wait_gap_interval(this.t_woread_draw, _0xd99bb8);
      let {
        result: _0x1cb452
      } = await this.woread_api(_0x4fd265);
      this.t_woread_draw = Date.now();
      let _0x1b3cd1 = _0x2ede0d.get(_0x1cb452, "code", -1);
      if (_0x1b3cd1 == "0000") {
        const _0x5c0eca = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x1cb452?.["data"]?.["prizedesc"] || "空气"), _0x5c0eca);
      } else {
        let _0x1000de = _0x1cb452?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x1b3cd1 + "]: " + _0x1000de);
      }
    } catch (_0x4f40ec) {
      console.log(_0x4f40ec);
    }
  }
  async rabblit_finishActivity(_0x574a56 = {}) {
    try {
      let _0xe911a5 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0xcfc91f = this.encode_woread(_0xe911a5);
      const _0x5f003a = {
        sign: _0xcfc91f
      };
      const _0x3c7bb6 = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x5f003a
      };
      await _0x2ede0d.wait_gap_interval(this.t_woread_draw, _0xd99bb8);
      let {
        result: _0x471e25
      } = await this.woread_api(_0x3c7bb6);
      this.t_woread_draw = Date.now();
      let _0x2ce0bb = _0x2ede0d.get(_0x471e25, "code", -1);
      if (_0x2ce0bb == "0000") {
        this.need_read_rabbit = false;
        const _0x279192 = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x471e25?.["data"]?.["prizedesc"] || "空气"), _0x279192);
      } else {
        let _0x3e8a80 = _0x471e25?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x2ce0bb + "]: " + _0x3e8a80);
      }
    } catch (_0x44203d) {
      console.log(_0x44203d);
    }
  }
  async moonbox_queryCurTaskStatus(_0x473c55 = {}) {
    try {
      let _0x4ab060 = {
          activeIndex: _0x570650.moonbox,
          ...this.get_woread_param()
        },
        _0x58eea2 = this.encode_woread(_0x4ab060);
      const _0x34e908 = {
        sign: _0x58eea2
      };
      const _0x31e8d6 = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0x34e908
      };
      let {
          result: _0xe87ba0
        } = await this.woread_api(_0x31e8d6),
        _0x2f550a = _0x2ede0d.get(_0xe87ba0, "code", -1);
      if (_0x2f550a == "0000") {
        for (let _0x269a67 of _0xe87ba0?.["data"] || []) {
          let {
            taskName: _0x18e1b2,
            currentValue: _0x4f9069,
            taskValue: _0x3bfbf4
          } = _0x269a67?.["taskDetail"];
          switch (_0x269a67.taskStatus) {
            case 0:
              this.need_read_moonbox = true;
              this.log("阅光宝盒[" + _0x18e1b2 + "]进度: " + parseInt(_0x4f9069) + "/" + _0x3bfbf4 + "分钟");
              break;
            case 2:
              await this.moonbox_completeActiveTask(_0x269a67);
            case 1:
              this.need_read_moonbox = false;
              const _0x2eb147 = {
                notify: true
              };
              this.log("阅光宝盒任务[" + _0x18e1b2 + "]已完成", _0x2eb147);
              break;
          }
        }
      } else {
        let _0x5230bd = _0xe87ba0?.["message"] || "";
        _0x5230bd?.["includes"]("未领取") && !_0x473c55.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x473c55.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x473c55)) : this.log("阅光宝盒查询任务状态失败[" + _0x2f550a + "]: " + _0x5230bd);
      }
    } catch (_0x305f21) {
      console.log(_0x305f21);
    }
  }
  async moonbox_completeActiveTask(_0x32bb63, _0x100a4e = {}) {
    try {
      let _0x4bc5fb = {
          taskId: _0x32bb63.id,
          ...this.get_woread_param()
        },
        _0xd3da5b = this.encode_woread(_0x4bc5fb);
      const _0x686226 = {
        sign: _0xd3da5b
      };
      const _0x11d94a = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x686226
      };
      let {
          result: _0x33121a
        } = await this.woread_api(_0x11d94a),
        _0x5b465e = _0x2ede0d.get(_0x33121a, "code", -1);
      if (_0x5b465e == "0000") {
        const _0x3e47a0 = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x33121a?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x33121a?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x3e47a0);
      } else {
        let _0x219bcd = _0x33121a?.["message"] || "";
        this.log("阅光宝盒[" + _0x32bb63?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x5b465e + "]: " + _0x219bcd);
      }
    } catch (_0xb01c9e) {
      console.log(_0xb01c9e);
    }
  }
  async moonbox_queryActiveTaskList(_0x2cacbe = {}) {
    try {
      let _0x183063 = {
          activeIndex: _0x570650.moonbox,
          ...this.get_woread_param()
        },
        _0x7739ae = this.encode_woread(_0x183063);
      const _0x5532a5 = {
        sign: _0x7739ae
      };
      const _0x52f434 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
        json: _0x5532a5
      };
      let {
          result: _0x5aa8f9
        } = await this.woread_api(_0x52f434),
        _0x334522 = _0x2ede0d.get(_0x5aa8f9, "code", -1);
      if (_0x334522 == "0000") {
        let _0x65bb67 = _0x5aa8f9?.["data"]?.["sort"](function (_0x4d6374, _0x34d624) {
            let _0x20270c = parseInt(_0x34d624.taskDetail.taskValue),
              _0x11f993 = parseInt(_0x4d6374.taskDetail.taskValue);
            return _0x20270c - _0x11f993;
          }),
          _0x354ff1 = _0x65bb67.filter(_0x54e8e3 => _0x54e8e3.maxNum - _0x54e8e3.receiveNum > 0 && _0x54e8e3.taskDetail.materialGroup.groupName.includes("红包"));
        _0x354ff1?.["length"] ? await this.moonbox_receiveActiveTask(_0x354ff1) : (this.log("没有可领取的阅光宝盒红包任务了"), this.need_read_moonbox = false);
      } else {
        let _0x110af9 = _0x5aa8f9?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x334522 + "]: " + _0x110af9);
      }
    } catch (_0x4986fd) {
      console.log(_0x4986fd);
    }
  }
  async moonbox_receiveActiveTask(_0x28d733, _0x3a5e9d = 0, _0x284d10 = {}) {
    try {
      let _0x5920c7 = {
          activeId: _0x570650.moonbox,
          taskId: _0x28d733[_0x3a5e9d].secondTaskId,
          ...this.get_woread_param()
        },
        _0x2ba4a1 = this.encode_woread(_0x5920c7);
      const _0x154523 = {
        sign: _0x2ba4a1
      };
      const _0x10edb5 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0x154523
      };
      let {
          result: _0x34e178
        } = await this.woread_api(_0x10edb5),
        _0x525c00 = _0x2ede0d.get(_0x34e178, "code", -1);
      if (_0x525c00 == "0000") {
        this.need_read_moonbox = true;
        this.log("领取阅光宝盒任务[" + _0x28d733?.[_0x3a5e9d]?.["taskDetail"]?.["taskName"] + "]成功");
      } else {
        let _0x412bbd = _0x34e178?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x28d733?.[_0x3a5e9d]?.["taskDetail"]?.["taskName"] + "]失败[" + _0x525c00 + "]: " + _0x412bbd);
        _0x412bbd?.["includes"]("今天无法完成") && _0x28d733?.["length"] > _0x3a5e9d + 1 && (await this.moonbox_receiveActiveTask(_0x28d733, _0x3a5e9d + 1, _0x284d10));
      }
    } catch (_0x16d453) {
      console.log(_0x16d453);
    }
  }
  async moonbox_queryReadStatus(_0x45ba6e = {}) {
    try {
      let _0x396491 = {
          activeIndex: _0x570650.moonbox,
          ...this.get_woread_param()
        },
        _0x1fe57d = this.encode_woread(_0x396491);
      const _0x57daa8 = {
        sign: _0x1fe57d
      };
      const _0x29b3fc = {
        fn: "moonbox_queryReadStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
        json: _0x57daa8
      };
      let {
          result: _0x1e6395
        } = await this.woread_api(_0x29b3fc),
        _0x508bcd = _0x2ede0d.get(_0x1e6395, "code", -1);
      if (_0x508bcd == "0000") {
        switch (_0x1e6395?.["data"]) {
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
              this.log("阅光宝盒抽奖状态[" + _0x1e6395?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x5a3c7f = _0x1e6395?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x508bcd + "]: " + _0x5a3c7f);
      }
    } catch (_0x825d0f) {
      console.log(_0x825d0f);
    }
  }
  async moonbox_drawReadActivePrize(_0x13ea59 = {}) {
    try {
      let _0x4061db = {
          activeIndex: _0x570650.moonbox,
          ...this.get_woread_param()
        },
        _0x8284f = this.encode_woread(_0x4061db);
      const _0x432571 = {
        sign: _0x8284f
      };
      const _0x302c53 = {
        fn: "moonbox_drawReadActivePrize",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
        json: _0x432571
      };
      let {
          result: _0x42e68b
        } = await this.woread_api(_0x302c53),
        _0x13d03b = _0x2ede0d.get(_0x42e68b, "code", -1);
      if (_0x13d03b == "0000") {
        const _0x357043 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x42e68b?.["data"]?.["prizedesc"] || JSON.stringify(_0x42e68b)), _0x357043);
      } else {
        let _0xabf118 = _0x42e68b?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x13d03b + "]: " + _0xabf118);
      }
    } catch (_0x2eb8a4) {
      console.log(_0x2eb8a4);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0x1d01a1 = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x51c517
      } = await this.openPlatLineNew(_0x1d01a1);
    if (!_0x51c517) {
      return;
    }
    await this.game_login(_0x51c517);
  }
  async ttlxj_task() {
    let _0x231fbf = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0x3924d8,
        type: _0x540b6c,
        loc: _0x54dbf9
      } = await this.openPlatLineNew(_0x231fbf);
    if (!_0x3924d8) {
      return;
    }
    await this.ttlxj_authorize(_0x3924d8, _0x540b6c, _0x54dbf9);
  }
  async epay_28_task() {
    let _0x4ad536 = new Date().getDate();
    _0x4ad536 >= 26 && _0x4ad536 <= 28 && (await this.epay_28_authCheck());
  }
  async draw_28_task() {
    let _0x3ba930 = new Date().getDate();
    _0x3ba930 == 28 && (await this.draw_28_queryChance());
  }
  async flmf_task() {
    if (this.city.filter(_0x49f54f => _0x49f54f.proCode == "091").length == 0) {
      return;
    }
    let _0x1f71ea = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x4de32c
      } = await this.openPlatLineNew(_0x1f71ea);
    if (!_0x4de32c) {
      return;
    }
    await this.flmf_login(_0x4de32c);
  }
  async woread_task() {
    await this.woread_getSeeVideoAddNumber();
    await this.woread_getActivityNumber();
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    while (this.need_read_rabbit || this.need_read_moonbox) {
      let _0x4c308c = 2;
      const _0x2cb100 = {
        readTime: _0x4c308c
      };
      await this.woread_addReadTime(_0x2cb100);
      if (this.need_read_moonbox) {
        await this.moonbox_queryCurTaskStatus();
      }
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      (this.need_read_rabbit || this.need_read_moonbox) && (this.log("等待2分钟..."), await _0x2ede0d.wait(125000));
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
    await this.moonbox_queryCurTaskStatus();
    await this.rabblit_queryActivityData();
  }
  async userTask() {
    _0x2ede0d.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.draw_28_task();
    await this.epay_28_task();
    await this.flmf_task();
    await this.woread_task();
  }
}
!(async () => {
  if (!(await _0x508d5c())) {
    return;
  }
  await _0x59fcd8();
  _0x2ede0d.read_env(_0x1af457);
  for (let _0x7f3ed5 of _0x2ede0d.userList) {
    await _0x7f3ed5.userLoginTask();
  }
  for (let _0x278244 of _0x2ede0d.userList.filter(_0x57e174 => _0x57e174.valid)) {
    await _0x278244.userTask();
  }
  let _0x50cdf8 = _0x2ede0d.userList.filter(_0x29f661 => _0x29f661.valid && _0x29f661.woread_verifycode && (_0x29f661.need_read_rabbit || _0x29f661.need_read_moonbox));
  if (_0x50cdf8.length) {
    let _0x46af35 = [];
    _0x2ede0d.log("\n============ 开始刷阅读时长 ============");
    for (let _0x48fff3 of _0x50cdf8) {
      _0x46af35.push(_0x48fff3.woread_reading_task());
    }
    await Promise.all(_0x46af35);
  }
})().catch(_0x1991fd => _0x2ede0d.log(_0x1991fd)).finally(() => _0x2ede0d.exitNow());
async function _0x508d5c(_0x49f7ca = 0) {
  let _0x21dcf6 = false;
  try {
    const _0x3aa75e = {
      fn: "auth",
      method: "get",
      url: _0x15584e,
      timeout: 20000
    };
    let {
      statusCode: _0x174eb8,
      result: _0x5efd7f
    } = await _0x356155.request(_0x3aa75e);
    if (_0x174eb8 != 200) {
      _0x49f7ca++ < _0x23b2fb && (_0x21dcf6 = await _0x508d5c(_0x49f7ca));
      return _0x21dcf6;
    }
    if (_0x5efd7f?.["code"] == 0) {
      _0x5efd7f = JSON.parse(_0x5efd7f.data.file.data);
      if (_0x5efd7f?.["commonNotify"] && _0x5efd7f.commonNotify.length > 0) {
        const _0x2ae03b = {
          notify: true
        };
        _0x2ede0d.log(_0x5efd7f.commonNotify.join("\n") + "\n", _0x2ae03b);
      }
      _0x5efd7f?.["commonMsg"] && _0x5efd7f.commonMsg.length > 0 && _0x2ede0d.log(_0x5efd7f.commonMsg.join("\n") + "\n");
      if (_0x5efd7f[_0x4e7e8e]) {
        let _0x5f1778 = _0x5efd7f[_0x4e7e8e];
        _0x5f1778.status == 0 ? _0x57084b >= _0x5f1778.version ? (_0x21dcf6 = true, _0x2ede0d.log(_0x5f1778.msg[_0x5f1778.status]), _0x2ede0d.log(_0x5f1778.updateMsg), _0x2ede0d.log("现在运行的脚本版本是：" + _0x57084b + "，最新脚本版本：" + _0x5f1778.latestVersion)) : _0x2ede0d.log(_0x5f1778.versionMsg) : _0x2ede0d.log(_0x5f1778.msg[_0x5f1778.status]);
      } else {
        _0x2ede0d.log(_0x5efd7f.errorMsg);
      }
    } else {
      _0x49f7ca++ < _0x23b2fb && (_0x21dcf6 = await _0x508d5c(_0x49f7ca));
    }
  } catch (_0x1ee11e) {
    _0x2ede0d.log(_0x1ee11e);
  } finally {
    return _0x21dcf6;
  }
}
async function _0x59fcd8() {
  let _0x237594 = false;
  try {
    const _0x10d9f3 = {
      fn: "getTaskUrl",
      method: "get",
      url: _0x321520
    };
    let {
      statusCode: _0x201ec9,
      result: _0x48c0f2
    } = await _0x356155.request(_0x10d9f3);
    if (_0x201ec9 != 200) {
      return Promise.resolve();
    }
    if (_0x48c0f2?.["code"] == 0) {
      _0x48c0f2 = JSON.parse(_0x48c0f2.data.file.data);
      if (_0x48c0f2?.["moonbox"]) {
        _0x570650.moonbox = _0x48c0f2?.["moonbox"];
      }
    }
  } catch (_0x49366d) {
    _0x2ede0d.log(_0x49366d);
  } finally {
    return _0x237594;
  }
}
function _0x857d9a(_0x1e9549) {
  return new class {
    constructor(_0x112ef2) {
      this.name = _0x112ef2;
      this.startTime = Date.now();
      const _0x3a7aaa = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x3a7aaa);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x247ae9, _0x5366d5 = {}) {
      const _0x3a9457 = {
        console: true
      };
      Object.assign(_0x3a9457, _0x5366d5);
      if (_0x3a9457.time) {
        let _0x242f9d = _0x3a9457.fmt || "hh:mm:ss";
        _0x247ae9 = "[" + this.time(_0x242f9d) + "]" + _0x247ae9;
      }
      if (_0x3a9457.notify) {
        this.notifyStr.push(_0x247ae9);
      }
      if (_0x3a9457.console) {
        console.log(_0x247ae9);
      }
    }
    get(_0x54d8d4, _0x128bec, _0x493ea7 = "") {
      let _0xfcd893 = _0x493ea7;
      _0x54d8d4?.["hasOwnProperty"](_0x128bec) && (_0xfcd893 = _0x54d8d4[_0x128bec]);
      return _0xfcd893;
    }
    pop(_0x538d5b, _0x17c3c3, _0x3b0e0e = "") {
      let _0x2b99fe = _0x3b0e0e;
      _0x538d5b?.["hasOwnProperty"](_0x17c3c3) && (_0x2b99fe = _0x538d5b[_0x17c3c3], delete _0x538d5b[_0x17c3c3]);
      return _0x2b99fe;
    }
    copy(_0x49f21c) {
      return Object.assign({}, _0x49f21c);
    }
    read_env(_0x55f432) {
      let _0x33d141 = _0x54aaff.map(_0x3a18a5 => process.env[_0x3a18a5]);
      for (let _0x2de82c of _0x33d141.filter(_0x286f3b => !!_0x286f3b)) {
        let _0x25cf24 = _0x20cfef.filter(_0x58c2f1 => _0x2de82c.includes(_0x58c2f1)),
          _0x2933d2 = _0x25cf24.length > 0 ? _0x25cf24[0] : _0x20cfef[0];
        for (let _0x1cf3ef of _0x2de82c.split(_0x2933d2).filter(_0x386c64 => !!_0x386c64)) {
          this.userList.push(new _0x55f432(_0x1cf3ef));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x55ab97 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x54aaff.map(_0x49526e => "[" + _0x49526e + "]").join("或"), _0x55ab97);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x5f1ef7, _0x2951cd, _0x3b8374 = {}) {
      while (_0x2951cd.idx < _0x2ede0d.userList.length) {
        let _0x4e8483 = _0x2ede0d.userList[_0x2951cd.idx++];
        if (!_0x4e8483.valid) {
          continue;
        }
        await _0x4e8483[_0x5f1ef7](_0x3b8374);
      }
    }
    async threadTask(_0x1be88d, _0x2592a0) {
      let _0x253c91 = [];
      const _0x391fde = {
        idx: 0
      };
      while (_0x2592a0--) {
        _0x253c91.push(this.threads(_0x1be88d, _0x391fde));
      }
      await Promise.all(_0x253c91);
    }
    time(_0x3e4889, _0x1bc129 = null) {
      let _0x3e9624 = _0x1bc129 ? new Date(_0x1bc129) : new Date(),
        _0x2c9bdf = {
          "M+": _0x3e9624.getMonth() + 1,
          "d+": _0x3e9624.getDate(),
          "h+": _0x3e9624.getHours(),
          "m+": _0x3e9624.getMinutes(),
          "s+": _0x3e9624.getSeconds(),
          "q+": Math.floor((_0x3e9624.getMonth() + 3) / 3),
          S: this.padStr(_0x3e9624.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x3e4889) && (_0x3e4889 = _0x3e4889.replace(RegExp.$1, (_0x3e9624.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0xbd2d2e in _0x2c9bdf) new RegExp("(" + _0xbd2d2e + ")").test(_0x3e4889) && (_0x3e4889 = _0x3e4889.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2c9bdf[_0xbd2d2e] : ("00" + _0x2c9bdf[_0xbd2d2e]).substr(("" + _0x2c9bdf[_0xbd2d2e]).length)));
      return _0x3e4889;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x286c43 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x286c43.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x3a73bb, _0x1b297a, _0x1aaac4 = {}) {
      let _0x320611 = _0x1aaac4.padding || "0",
        _0x2bf110 = _0x1aaac4.mode || "l",
        _0x5b9df7 = String(_0x3a73bb),
        _0x61ca0 = _0x1b297a > _0x5b9df7.length ? _0x1b297a - _0x5b9df7.length : 0,
        _0x317e82 = "";
      for (let _0xd73826 = 0; _0xd73826 < _0x61ca0; _0xd73826++) {
        _0x317e82 += _0x320611;
      }
      _0x2bf110 == "r" ? _0x5b9df7 = _0x5b9df7 + _0x317e82 : _0x5b9df7 = _0x317e82 + _0x5b9df7;
      return _0x5b9df7;
    }
    json2str(_0x457a3e, _0x722b8d, _0x4c9bcf = false) {
      let _0x19abd3 = [];
      for (let _0xcdd030 of Object.keys(_0x457a3e).sort()) {
        let _0x140263 = _0x457a3e[_0xcdd030];
        if (_0x140263 && _0x4c9bcf) {
          _0x140263 = encodeURIComponent(_0x140263);
        }
        _0x19abd3.push(_0xcdd030 + "=" + _0x140263);
      }
      return _0x19abd3.join(_0x722b8d);
    }
    str2json(_0xd2c130, _0x523f7c = false) {
      let _0xe87fac = {};
      for (let _0xa48a60 of _0xd2c130.split("&")) {
        if (!_0xa48a60) {
          continue;
        }
        let _0x3ff45a = _0xa48a60.indexOf("=");
        if (_0x3ff45a == -1) {
          continue;
        }
        let _0xf05de8 = _0xa48a60.substr(0, _0x3ff45a),
          _0x26d612 = _0xa48a60.substr(_0x3ff45a + 1);
        if (_0x523f7c) {
          _0x26d612 = decodeURIComponent(_0x26d612);
        }
        _0xe87fac[_0xf05de8] = _0x26d612;
      }
      return _0xe87fac;
    }
    randomPattern(_0x1cb6ef, _0x41eafd = "abcdef0123456789") {
      let _0x226c70 = "";
      for (let _0x36a4dc of _0x1cb6ef) {
        if (_0x36a4dc == "x") {
          _0x226c70 += _0x41eafd.charAt(Math.floor(Math.random() * _0x41eafd.length));
        } else {
          _0x36a4dc == "X" ? _0x226c70 += _0x41eafd.charAt(Math.floor(Math.random() * _0x41eafd.length)).toUpperCase() : _0x226c70 += _0x36a4dc;
        }
      }
      return _0x226c70;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x3ad621, _0x5a15d8 = "abcdef0123456789") {
      let _0x456afe = "";
      for (let _0x3f0f0c = 0; _0x3f0f0c < _0x3ad621; _0x3f0f0c++) {
        _0x456afe += _0x5a15d8.charAt(Math.floor(Math.random() * _0x5a15d8.length));
      }
      return _0x456afe;
    }
    randomList(_0x2cafb9) {
      let _0x5c670a = Math.floor(Math.random() * _0x2cafb9.length);
      return _0x2cafb9[_0x5c670a];
    }
    wait(_0x545c8e) {
      return new Promise(_0x150673 => setTimeout(_0x150673, _0x545c8e));
    }
    async exitNow() {
      await this.showmsg();
      let _0x22c842 = Date.now(),
        _0x412ba8 = (_0x22c842 - this.startTime) / 1000;
      this.log("");
      const _0x1bb0ec = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x412ba8 + "秒", _0x1bb0ec);
      process.exit(0);
    }
    normalize_time(_0x35e717, _0x24702e = {}) {
      let _0x4d174c = _0x24702e.len || _0x264cbe;
      _0x35e717 = _0x35e717.toString();
      let _0x5a8586 = _0x35e717.length;
      while (_0x5a8586 < _0x4d174c) {
        _0x35e717 += "0";
      }
      _0x5a8586 > _0x4d174c && (_0x35e717 = _0x35e717.slice(0, 13));
      return parseInt(_0x35e717);
    }
    async wait_until(_0x3f33af, _0x1a5ecb = {}) {
      let _0x4d98d1 = _0x1a5ecb.logger || this,
        _0x22fb38 = _0x1a5ecb.interval || _0x390db7,
        _0x404951 = _0x1a5ecb.limit || _0x2b96e6,
        _0x482b50 = _0x1a5ecb.ahead || _0x2b2966;
      if (typeof _0x3f33af == "string" && _0x3f33af.includes(":")) {
        if (_0x3f33af.includes("-")) {
          _0x3f33af = new Date(_0x3f33af).getTime();
        } else {
          let _0x3da8d4 = this.time("yyyy-MM-dd ");
          _0x3f33af = new Date(_0x3da8d4 + _0x3f33af).getTime();
        }
      }
      let _0x196647 = this.normalize_time(_0x3f33af) - _0x482b50,
        _0x24260d = this.time("hh:mm:ss.S", _0x196647),
        _0x4bdb55 = Date.now();
      _0x4bdb55 > _0x196647 && (_0x196647 += 86400000);
      let _0x35fd2b = _0x196647 - _0x4bdb55;
      if (_0x35fd2b > _0x404951) {
        const _0x2ce023 = {
          time: true
        };
        _0x4d98d1.log("离目标时间[" + _0x24260d + "]大于" + _0x404951 / 1000 + "秒,不等待", _0x2ce023);
      } else {
        const _0x3da838 = {
          time: true
        };
        _0x4d98d1.log("离目标时间[" + _0x24260d + "]还有" + _0x35fd2b / 1000 + "秒,开始等待", _0x3da838);
        while (_0x35fd2b > 0) {
          let _0x4f56b7 = Math.min(_0x35fd2b, _0x22fb38);
          await this.wait(_0x4f56b7);
          _0x4bdb55 = Date.now();
          _0x35fd2b = _0x196647 - _0x4bdb55;
        }
        const _0xf74848 = {
          time: true
        };
        _0x4d98d1.log("已完成等待", _0xf74848);
      }
    }
    async wait_gap_interval(_0x257343, _0xb2ce55) {
      let _0x56830e = Date.now() - _0x257343;
      _0x56830e < _0xb2ce55 && (await this.wait(_0xb2ce55 - _0x56830e));
    }
  }(_0x1e9549);
}