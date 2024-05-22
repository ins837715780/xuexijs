const _0x11343b = _0x2e0218("电信营业厅"),
  _0x37751e = require("got"),
  _0x307fcc = require("fs"),
  _0x3e8ae4 = require("crypto-js"),
  {
    CookieJar: _0x3a2e6b
  } = require("tough-cookie"),
  _0x590a51 = "chinaTelecom",
  _0x3f5ffa = /[\n\&\@]/,
  _0x3b7aef = [_0x590a51 + "Account"],
  _0x126ded = 30000,
  _0x57d563 = 3;
const _0x2a3f96 = _0x590a51 + "Rpc",
  _0x2b8df3 = process.env[_0x2a3f96],
  _0x72b75b = 5.05,
  _0x4cb5e8 = "chinaTelecom",
  _0x10309d = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
let _0xfa4da8 = {};
const _0x409dba = "./chinaTelecom_cache.json",
  _0x1d8614 = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
  _0x211587 = "34d7cb0bcdf07523",
  _0x7d316 = "1234567`90koiuyhgtfrdewsaqaqsqde",
  _0x160e8c = "\0\0\0\0\0\0\0\0",
  _0x3a5e61 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB",
  _0x19ce23 = "-----BEGIN PUBLIC KEY-----\n" + _0x3a5e61 + "\n-----END PUBLIC KEY-----",
  _0x42b41b = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB",
  _0x49c34c = "-----BEGIN PUBLIC KEY-----\n" + _0x42b41b + "\n-----END PUBLIC KEY-----",
  _0x2ddc70 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
  _0x33035b = "-----BEGIN PUBLIC KEY-----\n" + _0x2ddc70 + "\n-----END PUBLIC KEY-----",
  _0x4eaedb = require("node-rsa");
let _0x5af62f = new _0x4eaedb(_0x19ce23);
const _0x4805b9 = {
  encryptionScheme: "pkcs1"
};
_0x5af62f.setOptions(_0x4805b9);
let _0x3ca3bb = new _0x4eaedb(_0x49c34c);
const _0x15f87b = {
  encryptionScheme: "pkcs1"
};
_0x3ca3bb.setOptions(_0x15f87b);
let _0x45bda2 = new _0x4eaedb(_0x33035b);
const _0x508b49 = {
  encryptionScheme: "pkcs1"
};
_0x45bda2.setOptions(_0x508b49);
const _0x3bc8ad = {
  taskShort: "hg_qd_rmrwtjq",
  taskLong: "hg_qd_zrwzjd",
  signReward: "hg_qd_qdjdtc",
  recommandExchange: "hg_qd_jddhsptjq",
  vipExchange: "hg_qd_jddhhl",
  continueSign: "hg_qd_qdtqtc",
  jindouExchangeHuafei_am: "hg_qd_jdmszswjp",
  jindouExchangeHuafei_pm: "hg_qd_jdmszxwjp"
};
const _0x3e7ea5 = [202201, 202202, 202203],
  _0x38af47 = 5;
function _0xe0dd4e(_0x58e90b, _0x4f261b, _0x32027a, _0xfd8c86, _0x5480cd, _0xa6fe3d) {
  return _0x3e8ae4[_0x58e90b].encrypt(_0x3e8ae4.enc.Utf8.parse(_0xfd8c86), _0x3e8ae4.enc.Utf8.parse(_0x5480cd), {
    mode: _0x3e8ae4.mode[_0x4f261b],
    padding: _0x3e8ae4.pad[_0x32027a],
    iv: _0x3e8ae4.enc.Utf8.parse(_0xa6fe3d)
  }).ciphertext.toString(_0x3e8ae4.enc.Hex);
}
function _0x1764c9(_0x34c52b, _0xec0126, _0x329dfa, _0x3400d2, _0x77e037, _0xcd767d) {
  return _0x3e8ae4[_0x34c52b].decrypt({
    ciphertext: _0x3e8ae4.enc.Hex.parse(_0x3400d2)
  }, _0x3e8ae4.enc.Utf8.parse(_0x77e037), {
    mode: _0x3e8ae4.mode[_0xec0126],
    padding: _0x3e8ae4.pad[_0x329dfa],
    iv: _0x3e8ae4.enc.Utf8.parse(_0xcd767d)
  }).toString(_0x3e8ae4.enc.Utf8);
}
function _0x36a5b1() {
  try {
    _0x307fcc.writeFileSync(_0x409dba, JSON.stringify(_0xfa4da8, null, 4), "utf-8");
  } catch (_0x2fb2b5) {
    console.log("保存缓存出错");
  }
}
function _0x413c66() {
  try {
    _0xfa4da8 = JSON.parse(_0x307fcc.readFileSync(_0x409dba, "utf-8"));
  } catch (_0xdb842e) {
    console.log("读取缓存出错, 新建一个token缓存");
    _0x36a5b1();
  }
}
class _0x1bfb37 {
  constructor() {
    this.index = _0x11343b.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x86ef86 = {
      limit: 0
    };
    const _0x10ffe8 = {
      Connection: "keep-alive"
    };
    const _0x3bea98 = {
      retry: _0x86ef86,
      timeout: _0x126ded,
      followRedirect: false,
      headers: _0x10ffe8
    };
    this.got = _0x37751e.extend(_0x3bea98);
  }
  log(_0x2d54c6, _0x10a352 = {}) {
    var _0x1bd6e5 = "",
      _0x10a928 = _0x11343b.userCount.toString().length;
    if (this.index) {
      _0x1bd6e5 += "账号[" + _0x11343b.padStr(this.index, _0x10a928) + "]";
    }
    if (this.name) {
      _0x1bd6e5 += "[" + this.name + "]";
    }
    _0x11343b.log(_0x1bd6e5 + _0x2d54c6, _0x10a352);
  }
  async request(_0x145fa5) {
    const _0x8963b9 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x1a0137 = ["TimeoutError"];
    var _0x4b5ccb = null,
      _0x1befc8 = 0,
      _0x268d17 = _0x145fa5.fn || _0x145fa5.url;
    _0x145fa5.method = _0x145fa5?.["method"]?.["toUpperCase"]() || "GET";
    let _0xd810cb;
    while (_0x1befc8 < _0x57d563) {
      try {
        _0x1befc8++;
        _0xd810cb = null;
        let _0x4a0a38 = null,
          _0xf61014 = _0x145fa5?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x126ded,
          _0x3732fd = false;
        await new Promise(async _0x3346ce => {
          setTimeout(() => {
            _0x3732fd = true;
            _0x3346ce();
          }, _0xf61014);
          await this.got(_0x145fa5).then(_0x11d77f => {
            _0x4b5ccb = _0x11d77f;
          }, _0x2f98cd => {
            _0x4a0a38 = _0x2f98cd;
            _0x4b5ccb = _0x2f98cd.response;
            _0xd810cb = _0x4a0a38?.["code"];
          });
          _0x3346ce();
        });
        if (_0x3732fd) {
          this.log("[" + _0x268d17 + "]请求超时(" + _0xf61014 / 1000 + "秒)，重试第" + _0x1befc8 + "次");
        } else {
          if (_0x1a0137.includes(_0x4a0a38?.["name"])) {
            this.log("[" + _0x268d17 + "]请求超时(" + _0x4a0a38.code + ")，重试第" + _0x1befc8 + "次");
          } else {
            if (_0x8963b9.includes(_0x4a0a38?.["code"])) {
              this.log("[" + _0x268d17 + "]请求错误(" + _0x4a0a38.code + ")，重试第" + _0x1befc8 + "次");
            } else {
              let _0x5b308e = _0x4b5ccb?.["statusCode"] || 999,
                _0x1d4602 = _0x5b308e / 100 | 0;
              if (_0x1d4602 > 3) {
                this.log("请求[" + _0x268d17 + "]返回[" + _0x5b308e + "]");
              }
              if (_0x1d4602 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x83cb63) {
        _0x83cb63.name == "TimeoutError" ? this.log("[" + _0x268d17 + "]请求超时，重试第" + _0x1befc8 + "次") : this.log("[" + _0x268d17 + "]请求错误(" + _0x83cb63.message + ")，重试第" + _0x1befc8 + "次");
      }
    }
    const _0x5ba2ff = {
      statusCode: _0xd810cb || -1,
      headers: null,
      result: null
    };
    if (_0x4b5ccb == null) {
      return Promise.resolve(_0x5ba2ff);
    }
    let {
      statusCode: _0xd5437a,
      headers: _0x3c00c1,
      body: _0x67f74c
    } = _0x4b5ccb;
    if (_0x67f74c) {
      try {
        _0x67f74c = JSON.parse(_0x67f74c);
      } catch {}
    }
    const _0x55fe53 = {
      statusCode: _0xd5437a,
      headers: _0x3c00c1,
      result: _0x67f74c
    };
    return Promise.resolve(_0x55fe53);
  }
}
let _0x51fb90 = new _0x1bfb37();
class _0x37e6c7 extends _0x1bfb37 {
  constructor(_0x5206fd) {
    super();
    let _0x5cdef7 = _0x5206fd.split("#");
    this.name = _0x5cdef7[0];
    this.passwd = _0x5cdef7?.[1] || "";
    this.uuid = [_0x11343b.randomPattern("xxxxxxxx"), _0x11343b.randomPattern("xxxx"), _0x11343b.randomPattern("4xxx"), _0x11343b.randomPattern("xxxx"), _0x11343b.randomPattern("xxxxxxxxxxxx")];
    this.cookieJar = new _0x3a2e6b();
    this.can_feed = true;
    this.jml_tokenFlag = "";
    this.mall_token = "";
    const _0x54a623 = {
      Connection: "keep-alive",
      "User-Agent": _0x1d8614
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x54a623
    });
  }
  load_token() {
    let _0x5d3827 = false;
    _0xfa4da8[this.name] && (this.userId = _0xfa4da8[this.name].userId, this.token = _0xfa4da8[this.name].token, this.log("读取到缓存token"), _0x5d3827 = true);
    return _0x5d3827;
  }
  encode_phone() {
    let _0xbbc5e3 = this.name.split("");
    for (let _0x1a9d6a in _0xbbc5e3) {
      _0xbbc5e3[_0x1a9d6a] = String.fromCharCode(_0xbbc5e3[_0x1a9d6a].charCodeAt(0) + 2);
    }
    return _0xbbc5e3.join("");
  }
  encode_aes(_0x5c78bc) {
    return _0xe0dd4e("AES", "ECB", "Pkcs7", _0x5c78bc, _0x211587, 0);
  }
  get_mall_headers() {
    return {
      "Content-Type": "application/json;charset=utf-8",
      Accept: "application/json, text/javascript, */*; q=0.01",
      Authorization: this.mall_token ? "Bearer " + this.mall_token : "",
      "X-Requested-With": "XMLHttpRequest"
    };
  }
  async login(_0x16429c = {}) {
    let _0x3e403b = false;
    try {
      let _0x15f56b = _0x11343b.time("yyyyMMddhhmmss"),
        _0x21f224 = "iPhone 14 15.4." + this.uuid.slice(0, 2).join("") + this.name + _0x15f56b + this.passwd + "0$$$0.",
        _0x5bc47a = {
          fn: "login",
          method: "post",
          url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
          json: {
            headerInfos: {
              code: "userLoginNormal",
              timestamp: _0x15f56b,
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: "",
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                loginType: "4",
                accountType: "",
                loginAuthCipherAsymmertric: _0x5af62f.encrypt(_0x21f224, "base64"),
                deviceUid: this.uuid.slice(0, 3).join(""),
                phoneNum: this.encode_phone(),
                isChinatelecom: "0",
                systemVersion: "15.4.0",
                authentication: this.passwd
              }
            }
          }
        },
        {
          result: _0x4b8afc,
          statusCode: _0x8df433
        } = await this.request(_0x5bc47a),
        _0x56d0ea = _0x11343b.get(_0x4b8afc?.["responseData"], "resultCode", -1);
      if (_0x56d0ea == "0000") {
        let {
          userId = "",
          token = ""
        } = _0x4b8afc?.["responseData"]?.["data"]?.["loginSuccessResult"] || {};
        this.userId = userId;
        this.token = token;
        this.log("使用服务密码登录成功");
        _0xfa4da8[this.name] = {
          token: token,
          userId: userId,
          t: Date.now()
        };
        _0x36a5b1();
        _0x3e403b = true;
      } else {
        let _0x4fa567 = _0x4b8afc?.["msg"] || _0x4b8afc?.["responseData"]?.["resultDesc"] || _0x4b8afc?.["headerInfos"]?.["reason"] || "";
        this.log("服务密码登录失败[" + _0x56d0ea + "]: " + _0x4fa567);
      }
    } catch (_0x4f9f87) {
      console.log(_0x4f9f87);
    } finally {
      return _0x3e403b;
    }
  }
  async get_ticket(_0x58fefd = {}) {
    let _0xaa3c01 = "";
    try {
      let _0x123d5c = "\n            <Request>\n                <HeaderInfos>\n                    <Code>getSingle</Code>\n                    <Timestamp>" + _0x11343b.time("yyyyMMddhhmmss") + "</Timestamp>\n                    <BroadAccount></BroadAccount>\n                    <BroadToken></BroadToken>\n                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                    <ShopId>20002</ShopId>\n                    <Source>110003</Source>\n                    <SourcePassword>Sid98s</SourcePassword>\n                    <Token>" + this.token + "</Token>\n                    <UserLoginName>" + this.name + "</UserLoginName>\n                </HeaderInfos>\n                <Content>\n                    <Attach>test</Attach>\n                    <FieldData>\n                        <TargetId>" + _0xe0dd4e("TripleDES", "CBC", "Pkcs7", this.userId, _0x7d316, _0x160e8c) + "</TargetId>\n                        <Url>4a6862274835b451</Url>\n                    </FieldData>\n                </Content>\n            </Request>";
      const _0x11a371 = {
        fn: "get_ticket",
        method: "post",
        url: "https://appgologin.189.cn:9031/map/clientXML",
        body: _0x123d5c
      };
      let {
        result: _0x42531b,
        statusCode: _0x1cd594
      } = await this.request(_0x11a371);
      if (_0x42531b) {
        let _0x3eb30e = _0x42531b.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
        if (_0x3eb30e) {
          let _0x5d45ae = _0x3eb30e[1];
          _0xaa3c01 = _0x1764c9("TripleDES", "CBC", "Pkcs7", _0x5d45ae, _0x7d316, _0x160e8c);
          this.ticket = _0xaa3c01;
        }
      }
      !_0xaa3c01 && (!_0x58fefd.retry && (await this.login()) ? (_0x58fefd.retry = true, _0xaa3c01 = await this.get_ticket(_0x58fefd)) : (this.log("没有获取到ticket[" + _0x1cd594 + "]: "), _0x42531b && this.log(": " + JSON.stringify(_0x42531b))));
    } catch (_0x3e615d) {
      console.log(_0x3e615d);
    } finally {
      return _0xaa3c01;
    }
  }
  async get_sign(_0x5368c6 = {}) {
    let _0x8e585f = false;
    try {
      const _0x585e64 = {
        ticket: this.ticket
      };
      const _0x465497 = {
        fn: "login",
        method: "get",
        url: "https://wapside.189.cn:9001/jt-sign/ssoHomLogin",
        searchParams: _0x585e64
      };
      let {
          result: _0x78c403,
          statusCode: _0x194260
        } = await this.request(_0x465497),
        _0x239a96 = _0x11343b.get(_0x78c403, "resoultCode", _0x194260);
      _0x239a96 == 0 ? (_0x8e585f = _0x78c403?.["sign"], this.sign = _0x8e585f, this.got = this.got.extend({
        headers: {
          sign: this.sign
        }
      })) : this.log("获取sign失败[" + _0x239a96 + "]: " + JSON.stringify(_0x78c403 || ""));
    } catch (_0x52717a) {
      console.log(_0x52717a);
    } finally {
      return _0x8e585f;
    }
  }
  encrypt_para(_0x1dc72b) {
    let _0x56c0f6 = typeof _0x1dc72b == "string" ? _0x1dc72b : JSON.stringify(_0x1dc72b);
    return _0x3ca3bb.encrypt(_0x56c0f6, "hex");
  }
  async userCoinInfo(_0xadf91b = false, _0x2e429d = {}) {
    try {
      const _0x8bf084 = {
        phone: this.name
      };
      let _0x1214b5 = {
          fn: "userCoinInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/userCoinInfo",
          json: {
            para: this.encrypt_para(_0x8bf084)
          }
        },
        {
          result: _0x14e62e,
          statusCode: _0x42e721
        } = await this.request(_0x1214b5),
        _0x4c6830 = _0x11343b.get(_0x14e62e, "resoultCode", _0x42e721);
      if (_0x4c6830 == 0) {
        this.coin = _0x14e62e?.["totalCoin"] || 0;
        if (_0xadf91b) {
          const _0x2d6c43 = {
            notify: true
          };
          this.log("金豆余额: " + this.coin, _0x2d6c43);
          if (_0x14e62e.amountEx) {
            let _0x17c7a0 = _0x11343b.time("yyyy-MM-dd", _0x14e62e.expireDate);
            const _0xc7a724 = {
              notify: true
            };
            _0x11343b.log("-- [" + _0x17c7a0 + "]将过期" + _0x14e62e.amountEx + "金豆", _0xc7a724);
          }
        }
      } else {
        let _0x2c1e1c = _0x14e62e?.["msg"] || _0x14e62e?.["resoultMsg"] || _0x14e62e?.["error"] || "";
        this.log("查询账户金豆余额错误[" + _0x4c6830 + "]: " + _0x2c1e1c);
      }
    } catch (_0x414049) {
      console.log(_0x414049);
    }
  }
  async userStatusInfo(_0x1a21af = {}) {
    try {
      const _0xd830b0 = {
        phone: this.name
      };
      let _0x58759e = {
        fn: "userStatusInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/api/home/userStatusInfo",
        json: {
          para: this.encrypt_para(_0xd830b0)
        }
      };
      {
        let {
            result: _0x462fe1,
            statusCode: _0x1dde02
          } = await this.request(_0x11343b.copy(_0x58759e)),
          _0x47ec25 = _0x11343b.get(_0x462fe1, "resoultCode", _0x1dde02);
        if (_0x47ec25 == 0) {
          let {
            isSign: _0x125b03
          } = _0x462fe1?.["data"];
          _0x125b03 ? this.log("今天已签到") : await this.doSign();
        } else {
          let _0x1d1a6a = _0x462fe1?.["msg"] || _0x462fe1?.["resoultMsg"] || _0x462fe1?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0x47ec25 + "]: " + _0x1d1a6a);
        }
      }
      {
        let {
            result: _0x5901ed,
            statusCode: _0x305355
          } = await this.request(_0x11343b.copy(_0x58759e)),
          _0x2e363d = _0x11343b.get(_0x5901ed, "resoultCode", _0x305355);
        if (_0x2e363d == 0) {
          let {
            continuousDay: _0x17265c,
            signDay: _0x4e4bb5,
            isSeven: _0x6c5a51
          } = _0x5901ed?.["data"];
          this.log("已签到" + _0x4e4bb5 + "天, 连签" + _0x17265c + "天");
          _0x6c5a51 && (await this.exchangePrize());
        } else {
          let _0x418296 = _0x5901ed?.["msg"] || _0x5901ed?.["resoultMsg"] || _0x5901ed?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0x2e363d + "]: " + _0x418296);
        }
      }
    } catch (_0x13e9dc) {
      console.log(_0x13e9dc);
    }
  }
  async continueSignDays(_0x21991d = {}) {
    try {
      const _0x115f0d = {
        phone: this.name
      };
      let _0x593ca6 = {
          fn: "continueSignDays",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/continueSignDays",
          json: {
            para: this.encrypt_para(_0x115f0d)
          }
        },
        {
          result: _0x172ff1,
          statusCode: _0x5d0bce
        } = await this.request(_0x593ca6),
        _0x34ab36 = _0x11343b.get(_0x172ff1, "resoultCode", _0x5d0bce);
      if (_0x34ab36 == 0) {
        this.log("抽奖连签天数: " + (_0x172ff1?.["continueSignDays"] || 0) + "天");
        if (_0x172ff1?.["continueSignDays"] == 15) {
          const _0x41c9b4 = {
            type: "15"
          };
          await this.exchangePrize(_0x41c9b4);
        } else {
          if (_0x172ff1?.["continueSignDays"] == 28) {
            const _0x5cfff9 = {
              type: "28"
            };
            await this.exchangePrize(_0x5cfff9);
          }
        }
      } else {
        let _0x551b49 = _0x172ff1?.["msg"] || _0x172ff1?.["resoultMsg"] || _0x172ff1?.["error"] || "";
        this.log("查询抽奖连签天数错误[" + _0x34ab36 + "]: " + _0x551b49);
      }
    } catch (_0x133988) {
      console.log(_0x133988);
    }
  }
  async doSign(_0x15730b = {}) {
    try {
      let _0x19b0e8 = {
          phone: this.name,
          date: Date.now(),
          sysType: "20002"
        },
        _0x5381ac = {
          fn: "doSign",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/sign",
          json: {
            encode: this.encode_aes(JSON.stringify(_0x19b0e8))
          }
        },
        {
          result: _0x209738,
          statusCode: _0x18c4e9
        } = await this.request(_0x5381ac),
        _0x3b9b32 = _0x11343b.get(_0x209738, "resoultCode", _0x18c4e9);
      if (_0x3b9b32 == 0) {
        let _0x3d4a8f = _0x11343b.get(_0x209738?.["data"], "code", -1);
        if (_0x3d4a8f == 1) {
          const _0x5e3cd9 = {
            notify: true
          };
          this.log("签到成功，获得" + (_0x209738?.["data"]?.["coin"] || 0) + "金豆", _0x5e3cd9);
          await this.userStatusInfo();
        } else {
          const _0x571428 = {
            notify: true
          };
          this.log("签到失败[" + _0x3d4a8f + "]: " + _0x209738.data.msg, _0x571428);
        }
      } else {
        let _0xc390b9 = _0x209738?.["msg"] || _0x209738?.["resoultMsg"] || _0x209738?.["error"] || "";
        this.log("签到错误[" + _0x3b9b32 + "]: " + _0xc390b9);
      }
    } catch (_0x438c4b) {
      console.log(_0x438c4b);
    }
  }
  async exchangePrize(_0x6f27b4 = {}) {
    try {
      let _0xd79c09 = _0x11343b.pop(_0x6f27b4, "type", "7");
      const _0x52d448 = {
        phone: this.name,
        type: _0xd79c09
      };
      let _0x3f54d5 = {
          fn: "exchangePrize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/exchangePrize",
          json: {
            para: this.encrypt_para(_0x52d448)
          }
        },
        {
          result: _0x10aeeb,
          statusCode: _0xd32fc3
        } = await this.request(_0x3f54d5),
        _0x46ff2b = _0x11343b.get(_0x10aeeb, "resoultCode", _0xd32fc3);
      if (_0x46ff2b == 0) {
        let _0x49d517 = _0x11343b.get(_0x10aeeb?.["prizeDetail"], "code", -1);
        if (_0x49d517 == 0) {
          const _0x2a8c88 = {
            notify: true
          };
          this.log("连签" + _0xd79c09 + "天抽奖: " + _0x10aeeb?.["prizeDetail"]?.["biz"]?.["winTitle"], _0x2a8c88);
        } else {
          let _0xc2c01 = _0x10aeeb?.["prizeDetail"]?.["err"] || "";
          const _0x4b3c29 = {
            notify: true
          };
          this.log("连签" + _0xd79c09 + "天抽奖失败[" + _0x49d517 + "]: " + _0xc2c01, _0x4b3c29);
        }
      } else {
        let _0x226aa2 = _0x10aeeb?.["msg"] || _0x10aeeb?.["resoultMsg"] || _0x10aeeb?.["error"] || "";
        this.log("连签" + _0xd79c09 + "天抽奖错误[" + _0x46ff2b + "]: " + _0x226aa2);
      }
    } catch (_0x1b2e62) {
      console.log(_0x1b2e62);
    }
  }
  async homepage(_0x4237c9, _0x2c2590 = {}) {
    try {
      const _0x49215b = {
        phone: this.name,
        shopId: "20001",
        type: _0x4237c9
      };
      let _0xc9ccf5 = {
          fn: "homepage",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/homepage",
          json: {
            para: this.encrypt_para(_0x49215b)
          }
        },
        {
          result: _0x436fbc,
          statusCode: _0x5d5bb9
        } = await this.request(_0xc9ccf5),
        _0x522677 = _0x11343b.get(_0x436fbc, "resoultCode", _0x5d5bb9);
      if (_0x522677 == 0) {
        let _0x74080c = _0x11343b.get(_0x436fbc?.["data"]?.["head"], "code", -1);
        if (_0x74080c == 0) {
          for (let _0x4722b2 of _0x436fbc?.["data"]?.["biz"]?.["adItems"] || []) {
            let _0x488347 = _0x4722b2.title;
            switch (_0x4722b2?.["taskState"]) {
              case "1":
                console.log("[" + _0x488347 + "] -- 可领取奖励");
                break;
              case "2":
                console.log("[" + _0x488347 + "] -- 已完成");
                break;
              case "0":
              default:
                console.log("[" + _0x488347 + "] -- 未完成");
                break;
            }
            if (["0", "1"].includes(_0x4722b2?.["taskState"])) {
              switch (_0x4722b2.contentOne) {
                case "3":
                  if (_0x4722b2?.["rewardId"]) {
                    await this.receiveReward(_0x4722b2);
                  }
                  break;
                case "5":
                  await this.openMsg(_0x4722b2);
                  break;
                case "6":
                  await this.sharingGetGold();
                  break;
                case "10":
                case "13":
                  if (!this.xtoken) {
                    await this.get_usercode();
                  }
                  this.xtoken && (await this.watchLiveInit());
                  break;
                case "18":
                  await this.polymerize(_0x4722b2);
                  break;
                default:
                  break;
              }
            }
          }
        } else {
          let _0x557aa0 = _0x436fbc?.["data"]?.["head"]?.["err"] || "";
          this.log("获取任务列表失败[" + _0x74080c + "]: " + _0x557aa0);
        }
      } else {
        this.log("获取任务列表错误[" + _0x522677 + "]");
      }
    } catch (_0x3e1baf) {
      console.log(_0x3e1baf);
    }
  }
  async receiveReward(_0x351193, _0x5836f9 = {}) {
    try {
      let _0x142334 = _0x351193?.["title"]?.["split"](" ")?.[0];
      const _0x2a3a6b = {
        phone: this.name,
        rewardId: _0x351193?.["rewardId"] || ""
      };
      let _0x929b56 = {
          fn: "receiveReward",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/receiveReward",
          json: {
            para: this.encrypt_para(_0x2a3a6b)
          }
        },
        {
          result: _0x1ecdf2,
          statusCode: _0xa10107
        } = await this.request(_0x929b56),
        _0x431a3d = _0x11343b.get(_0x1ecdf2, "resoultCode", _0xa10107);
      if (_0x431a3d == 0) {
        this.log("领取任务[" + _0x142334 + "]奖励成功: " + _0x1ecdf2?.["resoultMsg"]);
      } else {
        let _0x3e5c97 = _0x1ecdf2?.["msg"] || _0x1ecdf2?.["resoultMsg"] || _0x1ecdf2?.["error"] || "";
        this.log("领取任务[" + _0x142334 + "]奖励错误[" + _0x431a3d + "]: " + _0x3e5c97);
      }
    } catch (_0x443225) {
      console.log(_0x443225);
    }
  }
  async openMsg(_0x4e7b96, _0x4fe8a0 = {}) {
    try {
      let _0x341ff6 = _0x4e7b96?.["title"]?.["split"](" ")?.[0];
      const _0x56d365 = {
        phone: this.name
      };
      let _0x10fb37 = {
          fn: "openMsg",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/openMsg",
          json: {
            para: this.encrypt_para(_0x56d365)
          }
        },
        {
          result: _0x36901c,
          statusCode: _0x20a8f6
        } = await this.request(_0x10fb37),
        _0x2e5e00 = _0x11343b.get(_0x36901c, "resoultCode", _0x20a8f6);
      if (_0x2e5e00 == 0) {
        this.log("完成任务[" + _0x341ff6 + "]成功: " + _0x36901c?.["resoultMsg"]);
      } else {
        let _0x118b99 = _0x36901c?.["msg"] || _0x36901c?.["resoultMsg"] || _0x36901c?.["error"] || "";
        this.log("完成任务[" + _0x341ff6 + "]错误[" + _0x2e5e00 + "]: " + _0x118b99);
      }
    } catch (_0x3917aa) {
      console.log(_0x3917aa);
    }
  }
  async polymerize(_0x38fea0, _0x48ff5c = {}) {
    try {
      let _0x545746 = _0x38fea0?.["title"]?.["split"](" ")?.[0];
      const _0x272402 = {
        phone: this.name,
        jobId: _0x38fea0.taskId
      };
      let _0x251708 = {
          fn: "polymerize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/polymerize",
          json: {
            para: this.encrypt_para(_0x272402)
          }
        },
        {
          result: _0x7c4165,
          statusCode: _0x1ae603
        } = await this.request(_0x251708),
        _0x44cbdb = _0x11343b.get(_0x7c4165, "resoultCode", _0x1ae603);
      if (_0x44cbdb == 0) {
        this.log("完成任务[" + _0x545746 + "]成功: " + _0x7c4165?.["resoultMsg"]);
      } else {
        let _0x5b0c50 = _0x7c4165?.["msg"] || _0x7c4165?.["resoultMsg"] || _0x7c4165?.["error"] || "";
        this.log("完成任务[" + _0x545746 + "]错误[" + _0x44cbdb + "]: " + _0x5b0c50);
      }
    } catch (_0x3551da) {
      console.log(_0x3551da);
    }
  }
  async food(_0x85a4a5, _0x4f7aa7 = {}) {
    try {
      const _0x5db6c4 = {
        phone: this.name
      };
      let _0x10acf5 = {
          fn: "food",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/food",
          json: {
            para: this.encrypt_para(_0x5db6c4)
          }
        },
        {
          result: _0x1c41f1,
          statusCode: _0x1488af
        } = await this.request(_0x10acf5),
        _0x4ff214 = _0x11343b.get(_0x1c41f1, "resoultCode", _0x1488af);
      if (_0x4ff214 == 0) {
        this.log("第" + _0x85a4a5 + "次喂食: " + (_0x1c41f1?.["resoultMsg"] || "成功"));
        if (_0x1c41f1?.["levelUp"]) {
          let _0x443795 = _0x1c41f1?.["currLevelRightList"][0]?.["level"];
          const _0xad06b7 = {
            notify: true
          };
          this.log("宠物已升级到[LV." + _0x443795 + "], 获得: " + _0x1c41f1?.["currLevelRightList"][0]?.["righstName"], _0xad06b7);
        }
      } else {
        let _0x1e49b9 = _0x1c41f1?.["msg"] || _0x1c41f1?.["resoultMsg"] || _0x1c41f1?.["error"] || "";
        this.log("第" + _0x85a4a5 + "次喂食失败[" + _0x4ff214 + "]: " + _0x1e49b9);
        _0x1e49b9?.["includes"]("最大喂食次数") && (this.can_feed = false);
      }
    } catch (_0x5d91e7) {
      console.log(_0x5d91e7);
    }
  }
  async getParadiseInfo(_0x179719 = {}) {
    try {
      const _0x17880a = {
        phone: this.name
      };
      let _0x1c3b12 = {
        fn: "getParadiseInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
        json: {
          para: this.encrypt_para(_0x17880a)
        }
      };
      {
        let {
            result: _0x32fd0b,
            statusCode: _0x403e10
          } = await this.request(_0x1c3b12),
          _0x3df234 = _0x11343b.get(_0x32fd0b, "resoultCode", _0x403e10);
        if (_0x3df234 == 0) {
          let _0x4684fc = _0x32fd0b?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x4684fc?.["level"];
          for (let _0x4043c7 = 1; _0x4043c7 <= 10 && this.can_feed; _0x4043c7++) {
            await this.food(_0x4043c7);
          }
        } else {
          let _0x2efdcf = _0x32fd0b?.["msg"] || _0x32fd0b?.["resoultMsg"] || _0x32fd0b?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x3df234 + "]: " + _0x2efdcf);
          return;
        }
      }
      {
        let {
            result: _0x180037,
            statusCode: _0x3dc651
          } = await this.request(_0x1c3b12),
          _0xd44463 = _0x11343b.get(_0x180037, "resoultCode", _0x3dc651);
        if (_0xd44463 == 0) {
          let _0x1c565a = _0x180037?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x1c565a?.["level"];
          const _0x4e7668 = {
            notify: true
          };
          this.log("宠物等级[Lv." + _0x1c565a?.["level"] + "], 升级进度: " + _0x1c565a?.["growthValue"] + "/" + _0x1c565a?.["fullGrowthCoinValue"], _0x4e7668);
        } else {
          let _0x55f610 = _0x180037?.["msg"] || _0x180037?.["resoultMsg"] || _0x180037?.["error"] || "";
          this.log("查询宠物等级失败[" + _0xd44463 + "]: " + _0x55f610);
          return;
        }
      }
    } catch (_0x3083b2) {
      console.log(_0x3083b2);
    }
  }
  async getLevelRightsList(_0x4b25b9 = {}) {
    try {
      const _0x5c5a32 = {
        phone: this.name
      };
      let _0x2000e4 = {
          fn: "getLevelRightsList",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList",
          json: {
            para: this.encrypt_para(_0x5c5a32)
          }
        },
        {
          result: _0x50b176,
          statusCode: _0x518dd4
        } = await this.request(_0x2000e4);
      if (_0x50b176?.["currentLevel"]) {
        let _0x3312c3 = _0x50b176?.["currentLevel"] || 6,
          _0xb97cd7 = "V" + _0x3312c3;
        for (let _0x1f5830 of _0x50b176[_0xb97cd7] || []) {
          let _0x461152 = _0x1f5830?.["righstName"] || "";
          if (this.coin < _0x1f5830.costCoin) {
            continue;
          }
          (_0x461152?.["includes"]("话费") || _0x461152?.["includes"]("专享") && _0x461152?.["includes"]("金豆")) && (await this.conversionRights(_0x1f5830));
        }
      } else {
        let _0x28002e = _0x50b176?.["msg"] || _0x50b176?.["resoultMsg"] || _0x50b176?.["error"] || "";
        this.log("查询宠物兑换权益失败: " + _0x28002e);
      }
    } catch (_0x1544b9) {
      console.log(_0x1544b9);
    }
  }
  async conversionRights(_0x12973e, _0x504572 = {}) {
    try {
      let _0x20c9d3 = _0x12973e?.["righstName"] || "";
      const _0x1802a0 = {
        phone: this.name,
        rightsId: _0x12973e.id
      };
      let _0x187b9f = {
          fn: "conversionRights",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights",
          json: {
            para: this.encrypt_para(_0x1802a0)
          }
        },
        {
          result: _0x525ad4,
          statusCode: _0x4fcf83
        } = await this.request(_0x187b9f),
        _0x3898ac = _0x11343b.get(_0x525ad4, "resoultCode", _0x4fcf83);
      if (_0x3898ac == 0) {
        this.log("兑换权益[" + _0x20c9d3 + "]成功");
      } else {
        let _0x403fdb = _0x525ad4?.["msg"] || _0x525ad4?.["resoultMsg"] || _0x525ad4?.["error"] || "";
        this.log("兑换权益[" + _0x20c9d3 + "]失败[" + _0x3898ac + "]: " + _0x403fdb);
      }
    } catch (_0x2fe2ec) {
      console.log(_0x2fe2ec);
    }
  }
  async get_usercode(_0x56c889 = {}) {
    try {
      const _0x253a90 = {
        fn: "get_usercode",
        method: "get",
        url: "https://xbk.189.cn/xbkapi/api/auth/jump",
        searchParams: {}
      };
      _0x253a90.searchParams.userID = this.ticket;
      _0x253a90.searchParams.version = "9.3.3";
      _0x253a90.searchParams.type = "room";
      _0x253a90.searchParams.l = "renwu";
      let {
          statusCode: _0xc9eae7,
          headers: _0x19819b
        } = await this.request(_0x253a90),
        _0x42a538 = _0x19819b?.["location"]?.["match"](/usercode=(\w+)/);
      _0x42a538 ? await this.codeToken(_0x42a538[1]) : this.log("获取code失败[" + _0xc9eae7 + "]");
    } catch (_0x35234f) {
      console.log(_0x35234f);
    }
  }
  async codeToken(_0x2ebeba, _0x5d2252 = {}) {
    try {
      const _0x49575c = {
        usercode: _0x2ebeba
      };
      const _0x2fe4c8 = {
        fn: "codeToken",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
        json: _0x49575c
      };
      let {
          result: _0xd787b5,
          statusCode: _0x12337c
        } = await this.request(_0x2fe4c8),
        _0x478cd5 = _0x11343b.get(_0xd787b5, "code", -1);
      if (_0x478cd5 == 0) {
        this.xtoken = _0xd787b5?.["data"]?.["token"];
        this.got = this.got.extend({
          headers: {
            Authorization: "Bearer " + _0x45bda2.encrypt(this.xtoken, "base64")
          }
        });
      } else {
        let _0x116ecc = _0xd787b5?.["msg"] || _0xd787b5?.["resoultMsg"] || _0xd787b5?.["error"] || _0xd787b5?.["msg"] || "";
        this.log("获取token失败[" + _0x478cd5 + "]: " + _0x116ecc);
      }
    } catch (_0x56e21f) {
      console.log(_0x56e21f);
    }
  }
  async watchLiveInit(_0xdafc9c = {}) {
    try {
      let _0x2ef2ff = Math.floor(Math.random() * 1000) + 1000;
      const _0x1bbafe = {
        period: 1,
        liveId: _0x2ef2ff
      };
      const _0x50961b = {
        fn: "watchLiveInit",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLiveInit",
        json: _0x1bbafe
      };
      let {
          result: _0x110d32,
          statusCode: _0x2e4c5d
        } = await this.request(_0x50961b),
        _0xa18941 = _0x11343b.get(_0x110d32, "code", -1);
      if (_0xa18941 == 0) {
        await _0x11343b.wait(15000);
        await this.watchLive(_0x2ef2ff, _0x110d32?.["data"]);
      } else {
        let _0x28c5f8 = _0x110d32?.["msg"] || _0x110d32?.["resoultMsg"] || _0x110d32?.["error"] || _0x110d32?.["msg"] || "";
        this.log("开始观看直播[" + _0x2ef2ff + "]失败[" + _0xa18941 + "]: " + _0x28c5f8);
      }
    } catch (_0x40da92) {
      console.log(_0x40da92);
    }
  }
  async watchLive(_0x11abef, _0x4a15b7, _0x45d47d = {}) {
    try {
      const _0x30df08 = {
        period: 1,
        liveId: _0x11abef,
        key: _0x4a15b7
      };
      const _0x28b274 = {
        fn: "watchLive",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLive",
        json: _0x30df08
      };
      let {
          result: _0x530a6d,
          statusCode: _0x155b8a
        } = await this.request(_0x28b274),
        _0x4dcd8a = _0x11343b.get(_0x530a6d, "code", -1);
      if (_0x4dcd8a == 0) {
        this.log("观看直播[" + _0x11abef + "]成功");
        await this.watchLiveInit();
      } else {
        let _0x28da42 = _0x530a6d?.["msg"] || _0x530a6d?.["resoultMsg"] || _0x530a6d?.["error"] || _0x530a6d?.["msg"] || "";
        this.log("观看直播[" + _0x11abef + "]失败[" + _0x4dcd8a + "]: " + _0x28da42);
      }
    } catch (_0x48f3bb) {
      console.log(_0x48f3bb);
    }
  }
  async watchVideo(_0x5b7fa5, _0x39ada6 = {}) {
    try {
      const _0x34d8c1 = {
        articleId: _0x5b7fa5
      };
      const _0x26db9f = {
        fn: "watchVideo",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchVideo",
        json: _0x34d8c1
      };
      let {
          result: _0x476a73,
          statusCode: _0x5d1b8c
        } = await this.request(_0x26db9f),
        _0x49f0f5 = _0x11343b.get(_0x476a73, "code", -1);
      if (_0x49f0f5 == 0) {
        this.log("观看短视频[" + _0x5b7fa5 + "]成功");
      } else {
        let _0x57c43e = _0x476a73?.["msg"] || _0x476a73?.["resoultMsg"] || _0x476a73?.["error"] || _0x476a73?.["msg"] || "";
        this.log("观看短视频[" + _0x5b7fa5 + "]失败[" + _0x49f0f5 + "]: " + _0x57c43e);
      }
    } catch (_0x49af29) {
      console.log(_0x49af29);
    }
  }
  async like(_0x54abe9, _0x54a760 = {}) {
    try {
      const _0x877128 = {
        account: this.name,
        liveId: _0x54abe9
      };
      const _0x3f5233 = {
        fn: "like",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/room/like",
        json: _0x877128
      };
      let {
          result: _0x51c371,
          statusCode: _0x383004
        } = await this.request(_0x3f5233),
        _0xaeca7e = _0x11343b.get(_0x51c371, "code", -1);
      if (_0xaeca7e == 0) {
        this.log("点赞直播间[" + _0x54abe9 + "]成功");
      } else {
        let _0x3b2016 = _0x51c371?.["msg"] || _0x51c371?.["resoultMsg"] || _0x51c371?.["error"] || _0x51c371?.["msg"] || "";
        this.log("点赞直播间[" + _0x54abe9 + "]失败[" + _0xaeca7e + "]: " + _0x3b2016);
      }
    } catch (_0x34613b) {
      console.log(_0x34613b);
    }
  }
  async sharingGetGold(_0x11938b = {}) {
    try {
      let _0x5b9041 = {
          fn: "sharingGetGold",
          method: "post",
          url: "https://appfuwu.189.cn:9021/query/sharingGetGold",
          json: {
            headerInfos: {
              code: "sharingGetGold",
              timestamp: _0x11343b.time("yyyyMMddhhmmss"),
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: this.token,
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                shareSource: "3",
                userId: this.userId,
                account: this.encode_phone()
              }
            }
          }
        },
        {
          result: _0x5b92d7,
          statusCode: _0x2acfa7
        } = await this.request(_0x5b9041),
        _0x471c56 = _0x11343b.get(_0x5b92d7?.["responseData"], "resultCode", -1);
      if (_0x471c56 == "0000") {
        this.log("分享成功");
      } else {
        let _0x225702 = _0x5b92d7?.["msg"] || _0x5b92d7?.["responseData"]?.["resultDesc"] || _0x5b92d7?.["error"] || _0x5b92d7?.["msg"] || "";
        this.log("分享失败[" + _0x471c56 + "]: " + _0x225702);
      }
    } catch (_0xc57fb7) {
      console.log(_0xc57fb7);
    }
  }
  async month_jml_preCost(_0xd9c1b7 = {}) {
    try {
      let _0xc338ab = {
          fn: "month_jml_preCost",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/short/message/preCost",
          json: {
            phone: this.encode_aes(this.name),
            activityCode: "shortMesssge"
          }
        },
        {
          result: _0x16bf42,
          statusCode: _0x1bfdf6
        } = await this.request(_0xc338ab),
        _0x481d94 = _0x11343b.get(_0x16bf42, "resoultCode", _0x1bfdf6);
      if (_0x481d94 == 0) {
        let _0x57ed3f = _0x16bf42?.["data"]?.["resoultMsg"] || "领取成功";
        this.jml_tokenFlag = _0x16bf42?.["resoultMsg"];
        await this.month_jml_userCost(_0x57ed3f);
        await this.month_jml_receive();
        await this.month_jml_getCount();
        await this.month_jml_refresh();
      } else {
        let _0x51429f = _0x16bf42?.["msg"] || _0x16bf42?.["resoultMsg"] || _0x16bf42?.["error"] || "";
        this.log("每月见面礼登录失败[" + _0x481d94 + "]: " + _0x51429f);
      }
    } catch (_0x332098) {
      console.log(_0x332098);
    }
  }
  async month_jml_userCost(_0x59505c, _0x30ed9b = {}) {
    try {
      let _0x1bed5f = {
          fn: "month_jml_userCost",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/short/message/userCost",
          json: {
            phone: this.encode_aes(this.name),
            activityCode: "shortMesssge",
            flag: this.jml_tokenFlag
          }
        },
        {
          result: _0x503054,
          statusCode: _0x4045ad
        } = await this.request(_0x1bed5f),
        _0x207f9e = _0x11343b.get(_0x503054, "resoultCode", _0x4045ad);
      if (_0x207f9e == 0) {
        let _0x17f24b = _0x503054?.["data"]?.["map"](_0xe53300 => "[" + _0xe53300.pizeName + "]") || [];
        this.log("见面礼" + _0x59505c + ": " + _0x17f24b.join(", "));
      } else {
        let _0x32c08e = _0x503054?.["msg"] || _0x503054?.["resoultMsg"] || _0x503054?.["error"] || "";
        this.log("领取每月见面礼失败[" + _0x207f9e + "]: " + _0x32c08e);
      }
    } catch (_0xec28d3) {
      console.log(_0xec28d3);
    }
  }
  async month_jml_receive(_0x8afd19 = {}) {
    try {
      const _0x48e022 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x4bd3b8 = {
          fn: "month_jml_receive",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/receive",
          json: {
            para: this.encrypt_para(_0x48e022)
          }
        },
        {
          result: _0x245d77,
          statusCode: _0x21a78d
        } = await this.request(_0x4bd3b8),
        _0x34a14c = _0x11343b.get(_0x245d77, "code", -1);
      if (_0x34a14c == 0) {
        this.log("领取APP抽奖次数成功");
      } else {
        let _0x135396 = _0x245d77?.["msg"] || _0x245d77?.["resoultMsg"] || _0x245d77?.["error"] || "";
        this.log("领取APP抽奖次数失败[" + _0x34a14c + "]: " + _0x135396);
      }
    } catch (_0x511527) {
      console.log(_0x511527);
    }
  }
  async month_jml_getCount(_0x226a6d = {}) {
    try {
      const _0x573d87 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x3a33ca = {
          fn: "month_jml_getCount",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/getCount",
          json: {
            para: this.encrypt_para(_0x573d87)
          }
        },
        {
          result: _0x3d266c,
          statusCode: _0x27f43e
        } = await this.request(_0x3a33ca),
        _0x445e66 = _0x11343b.get(_0x3d266c, "code", -1);
      if (_0x445e66 == 0) {
        let _0x3f149d = _0x3d266c?.["video"]?.["map"](_0x2f6389 => _0x2f6389.videoType) || [],
          _0x5ac466 = _0x3e7ea5.filter(_0x110389 => !_0x3f149d.includes(_0x110389)),
          _0x3dbb8a = false;
        for (let _0x22cb53 of _0x5ac466) {
          if (_0x3dbb8a) {
            let _0x3b9d27 = Math.floor(Math.random() * 5000) + 3000;
            await _0x11343b.wait(_0x3b9d27);
          }
          await this.month_jml_addVideoCount(_0x22cb53);
          _0x3dbb8a = true;
        }
      } else {
        let _0xea75a4 = _0x3d266c?.["msg"] || _0x3d266c?.["resoultMsg"] || _0x3d266c?.["error"] || "";
        this.log("查询看视频得抽奖机会次数失败[" + _0x445e66 + "]: " + _0xea75a4);
      }
    } catch (_0x5051f7) {
      console.log(_0x5051f7);
    }
  }
  async month_jml_addVideoCount(_0x4b84a7, _0x5e9ec8 = {}) {
    try {
      const _0x1776b5 = {
        phone: this.name,
        videoType: _0x4b84a7,
        flag: this.jml_tokenFlag
      };
      let _0x44a487 = {
          fn: "month_jml_addVideoCount",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/addVideoCount",
          json: {
            para: this.encrypt_para(_0x1776b5)
          }
        },
        {
          result: _0x250967,
          statusCode: _0x4c9ed8
        } = await this.request(_0x44a487),
        _0x1d76f7 = _0x11343b.get(_0x250967, "code", -1);
      if (_0x1d76f7 == 0) {
        this.log("看视频[" + _0x4b84a7 + "]得抽奖机会成功");
      } else {
        let _0x1e7099 = _0x250967?.["msg"] || _0x250967?.["resoultMsg"] || _0x250967?.["error"] || "";
        this.log("看视频[" + _0x4b84a7 + "]得抽奖机会失败[" + _0x1d76f7 + "]: " + _0x1e7099);
      }
    } catch (_0xcfac7d) {
      console.log(_0xcfac7d);
    }
  }
  async month_jml_refresh(_0x893e63 = {}) {
    try {
      const _0x3f6535 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x272200 = {
          fn: "month_jml_refresh",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/refresh",
          json: {
            para: this.encrypt_para(_0x3f6535)
          }
        },
        {
          result: _0x2af815,
          statusCode: _0xa0082d
        } = await this.request(_0x272200),
        _0x349dfb = _0x11343b.get(_0x2af815, "code", -1);
      if (_0x349dfb == -1) {
        let _0x4dfc30 = _0x2af815?.["rNumber"] || 0;
        this.log("可以抽奖" + _0x4dfc30 + "次");
        let _0x2e04da = false;
        while (_0x4dfc30-- > 0) {
          if (_0x2e04da) {
            let _0x345037 = Math.floor(Math.random() * 5000) + 3000;
            await _0x11343b.wait(_0x345037);
          }
          await this.month_jml_lotteryRevice();
          _0x2e04da = true;
        }
      } else {
        let _0xff5ee3 = _0x2af815?.["msg"] || _0x2af815?.["resoultMsg"] || _0x2af815?.["error"] || "";
        this.log("查询抽奖次数失败[" + _0x349dfb + "]: " + _0xff5ee3);
      }
    } catch (_0x59491c) {
      console.log(_0x59491c);
    }
  }
  async month_jml_lotteryRevice(_0x5d2f32 = {}) {
    try {
      const _0x3a16bb = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x51bd69 = {
          fn: "month_jml_lotteryRevice",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/lotteryRevice",
          json: {
            para: this.encrypt_para(_0x3a16bb)
          }
        },
        {
          result: _0x3cfbba,
          statusCode: _0x5c0b71
        } = await this.request(_0x51bd69),
        _0x1eb821 = _0x11343b.get(_0x3cfbba, "code", -1);
      if (_0x1eb821 == 0) {
        let {
          rname: _0x28758e,
          id: _0x44a133
        } = _0x3cfbba;
        const _0x4ee030 = {
          notify: true
        };
        this.log("每月见面礼抽奖: " + _0x28758e, _0x4ee030);
      } else {
        let _0x19e0ad = _0x3cfbba?.["msg"] || _0x3cfbba?.["resoultMsg"] || _0x3cfbba?.["error"] || "";
        this.log("每月见面礼抽奖失败[" + _0x1eb821 + "]: " + _0x19e0ad);
      }
    } catch (_0x13c883) {
      console.log(_0x13c883);
    }
  }
  async auth_login(_0x116c8f = {}) {
    let _0x48cac8 = false;
    try {
      let _0x5e95a9 = this.ticket,
        _0x11b474 = new URL("https://wapact.189.cn:9001/unified/user/login"),
        _0x6b908b = {
          ticket: _0x5e95a9,
          backUrl: encodeURIComponent("https://wapact.189.cn:9001/JinDouMall/JinDouMall_luckDraw.html?ticket=" + _0x5e95a9),
          platformCode: "P201010301",
          loginType: 2
        },
        _0x2b5551 = {
          fn: "login",
          method: "post",
          url: _0x2b8df3,
          json: {
            method: "POST",
            url: _0x11b474.toString(),
            headers: this.get_mall_headers(),
            data: JSON.stringify(_0x6b908b)
          }
        },
        {
          result: _0x56dbc4,
          statusCode: _0x4589b9
        } = await this.request(_0x2b5551),
        _0x3160ca = _0x11343b.get(_0x56dbc4, "code", _0x4589b9);
      if (_0x3160ca == 0) {
        let {
          token: _0x4aa5a1,
          sessionId: _0x56af6e
        } = _0x56dbc4?.["biz"];
        this.mall_token = _0x4aa5a1;
        _0x48cac8 = true;
      } else {
        let _0x11f072 = _0x11343b.get(_0x56dbc4, "message", "");
        this.log("商城登录失败[" + _0x3160ca + "]: " + _0x11f072);
      }
    } catch (_0x824a72) {
      console.log(_0x824a72);
    } finally {
      return _0x48cac8;
    }
  }
  async queryInfo(_0x3b4024 = {}) {
    try {
      let _0x34d904 = new URL("https://wapact.189.cn:9001/gateway/golden/api/queryInfo");
      _0x34d904.searchParams.append("_", Date.now().toString());
      let _0x2de7ab = {
          fn: "queryInfo",
          method: "post",
          url: _0x2b8df3,
          json: {
            method: "GET",
            url: _0x34d904.toString(),
            headers: this.get_mall_headers()
          }
        },
        {
          result: _0x1fa5a1,
          statusCode: _0x37fd40
        } = await this.request(_0x2de7ab),
        _0x19b200 = _0x11343b.get(_0x1fa5a1, "code", _0x37fd40);
      if (_0x19b200 == 0) {
        this.coin = _0x1fa5a1?.["biz"]?.["amountTotal"] || this.coin;
        await this.queryTurnTable();
      } else {
        let _0x249381 = _0x11343b.get(_0x1fa5a1, "message", "");
        this.log("查询商城状态失败[" + _0x19b200 + "]: " + _0x249381);
      }
    } catch (_0x524536) {
      console.log(_0x524536);
    }
  }
  async queryTurnTable(_0x2630cb = {}) {
    try {
      let _0x4f82df = new URL("https://wapact.189.cn:9001/gateway/golden/api/queryTurnTable");
      _0x4f82df.searchParams.append("userType", "1");
      _0x4f82df.searchParams.append("_", Date.now().toString());
      let _0x545a7a = {
          fn: "queryTurnTable",
          method: "post",
          url: _0x2b8df3,
          json: {
            method: "GET",
            url: _0x4f82df.toString(),
            headers: this.get_mall_headers()
          }
        },
        {
          result: _0x36d6f3,
          statusCode: _0x4ad36d
        } = await this.request(_0x545a7a),
        _0xe90c5 = _0x11343b.get(_0x36d6f3, "code", _0x4ad36d);
      if (_0xe90c5 == 0) {
        let _0x23eb34 = _0x36d6f3?.["biz"]?.["xiaoHaoCount"] || 20,
          _0x1fab28 = _0x36d6f3?.["biz"]?.["wzTurntable"]?.["code"] || "";
        _0x1fab28 ? await this.lottery_check(_0x1fab28, _0x23eb34) : this.log("没有获取到转盘抽奖ID");
      } else {
        let _0x8a36de = _0x11343b.get(_0x36d6f3, "message", "");
        this.log("获取转盘抽奖活动失败[" + _0xe90c5 + "]: " + _0x8a36de);
      }
    } catch (_0x568d61) {
      console.log(_0x568d61);
    }
  }
  async lottery_check(_0x202014, _0xdacb3c, _0x507a39 = {}) {
    try {
      let _0x186726 = new URL("https://wapact.189.cn:9001/gateway/stand/detail/check");
      _0x186726.searchParams.append("activityId", _0x202014);
      _0x186726.searchParams.append("_", Date.now().toString());
      let _0x57a1cc = {
          fn: "lottery_check",
          method: "post",
          url: _0x2b8df3,
          json: {
            method: "GET",
            url: _0x186726.toString(),
            headers: this.get_mall_headers()
          }
        },
        {
          result: _0x4d3f19,
          statusCode: _0x61096f
        } = await this.request(_0x57a1cc),
        _0xedb127 = _0x11343b.get(_0x4d3f19, "code", _0x61096f);
      if (_0xedb127 == 0) {
        let _0x33a4ab = _0x4d3f19?.["biz"]?.["resultInfo"]?.["chanceCount"] || 0;
        this.log("转盘可以抽奖" + _0x33a4ab + "次, 消耗金豆" + _0xdacb3c + "/" + this.coin);
        let _0x2646b4 = false;
        while (_0x33a4ab-- > 0 && this.coin >= _0xdacb3c) {
          if (_0x2646b4) {
            await _0x11343b.wait(3000);
          }
          _0x2646b4 = true;
          await this.lottery_do(_0x202014, _0xdacb3c);
        }
      } else {
        let _0x4087dd = _0x11343b.get(_0x4d3f19, "message", "");
        this.log("查询转盘抽奖次数失败[" + _0xedb127 + "]: " + _0x4087dd);
      }
    } catch (_0x1e7dc1) {
      console.log(_0x1e7dc1);
    }
  }
  async lottery_do(_0x598365, _0x5170da = {}) {
    try {
      let _0x2047d7 = new URL("https://wapact.189.cn:9001/gateway/golden/api/lottery");
      const _0x59311e = {
        activityId: _0x598365
      };
      let _0x43f1e1 = {
          fn: "lottery_do",
          method: "post",
          url: _0x2b8df3,
          json: {
            method: "POST",
            url: _0x2047d7.toString(),
            headers: this.get_mall_headers(),
            data: JSON.stringify(_0x59311e)
          }
        },
        {
          result: _0x21f2e5,
          statusCode: _0x23183f
        } = await this.request(_0x43f1e1),
        _0x2b7166 = _0x11343b.get(_0x21f2e5, "code", _0x23183f);
      if (_0x2b7166 == 0) {
        this.coin = _0x21f2e5?.["biz"]?.["amountTotal"] || this.coin - xiaoHaoCount;
        let _0x3a4d29 = _0x21f2e5?.["biz"]?.["resultCode"],
          _0xa6f933 = "";
        switch (_0x3a4d29) {
          case "0":
            {
              let _0x16abac = _0x21f2e5?.["biz"]?.["resultInfo"]?.["winTitle"] || "空气";
              const _0x1aae16 = {
                notify: true
              };
              this.log("转盘抽奖: " + _0x16abac, _0x1aae16);
              return;
            }
          case "412":
            {
              _0xa6f933 = "抽奖次数已达上限";
              break;
            }
          case "413":
          case "420":
            {
              _0xa6f933 = "金豆不足";
              break;
            }
          default:
            {
              this.log(": " + JSON.stringify(_0x21f2e5));
              _0xa6f933 = "未知原因";
              break;
            }
        }
        this.log("转盘抽奖失败[" + _0x3a4d29 + "]: " + _0xa6f933);
      } else {
        let _0x470e5f = _0x11343b.get(_0x21f2e5, "message", "");
        this.log("转盘抽奖错误[" + _0x2b7166 + "]: " + _0x470e5f);
      }
    } catch (_0x52c5cf) {
      console.log(_0x52c5cf);
    }
  }
  async userTask() {
    const _0x2a0ceb = {
      notify: true
    };
    _0x11343b.log("\n======= 账号[" + this.index + "][" + this.name + "] =======", _0x2a0ceb);
    if (!this.load_token() && !(await this.login())) {
      return;
    }
    if (!(await this.get_ticket())) {
      return;
    }
    if (!(await this.get_sign())) {
      return;
    }
    await this.userCoinInfo();
    await this.getLevelRightsList();
    await this.month_jml_preCost();
    await this.userStatusInfo();
    await this.continueSignDays();
    await this.homepage(_0x3bc8ad.taskLong);
    await this.getParadiseInfo();
    if (_0x2b8df3) {
      await this.userLotteryTask();
    }
    await this.userCoinInfo(true);
  }
  async userLotteryTask() {
    if (!(await this.auth_login())) {
      return;
    }
    await this.queryInfo();
  }
}
!(async () => {
  if (!(await _0x2413aa())) {
    return;
  }
  _0x11343b.read_env(_0x37e6c7);
  _0x413c66();
  for (let _0x5b8db4 of _0x11343b.userList) {
    await _0x5b8db4.userTask();
  }
})().catch(_0x3fde4f => _0x11343b.log(_0x3fde4f)).finally(() => _0x11343b.exitNow());
async function _0x2413aa(_0xbfb047 = 0) {
  let _0x5b9e57 = false;
  try {
    const _0x33b89e = {
      fn: "auth",
      method: "get",
      url: _0x10309d,
      timeout: 20000
    };
    let {
      statusCode: _0x1dd74c,
      result: _0x2a4d80
    } = await _0x51fb90.request(_0x33b89e);
    if (_0x1dd74c != 200) {
      _0xbfb047++ < _0x38af47 && (_0x5b9e57 = await _0x2413aa(_0xbfb047));
      return _0x5b9e57;
    }
    if (_0x2a4d80?.["code"] == 0) {
      _0x2a4d80 = JSON.parse(_0x2a4d80.data.file.data);
      if (_0x2a4d80?.["commonNotify"] && _0x2a4d80.commonNotify.length > 0) {
        const _0x5b7cab = {
          notify: true
        };
        _0x11343b.log(_0x2a4d80.commonNotify.join("\n") + "\n", _0x5b7cab);
      }
      _0x2a4d80?.["commonMsg"] && _0x2a4d80.commonMsg.length > 0 && _0x11343b.log(_0x2a4d80.commonMsg.join("\n") + "\n");
      if (_0x2a4d80[_0x4cb5e8]) {
        let _0x307460 = _0x2a4d80[_0x4cb5e8];
        _0x307460.status == 0 ? _0x72b75b >= _0x307460.version ? (_0x5b9e57 = true, _0x11343b.log(_0x307460.msg[_0x307460.status]), _0x11343b.log(_0x307460.updateMsg), _0x11343b.log("现在运行的脚本版本是：" + _0x72b75b + "，最新脚本版本：" + _0x307460.latestVersion)) : _0x11343b.log(_0x307460.versionMsg) : _0x11343b.log(_0x307460.msg[_0x307460.status]);
      } else {
        _0x11343b.log(_0x2a4d80.errorMsg);
      }
    } else {
      _0xbfb047++ < _0x38af47 && (_0x5b9e57 = await _0x2413aa(_0xbfb047));
    }
  } catch (_0xfcd31a) {
    _0x11343b.log(_0xfcd31a);
  } finally {
    return _0x5b9e57;
  }
}
function _0x2e0218(_0xc392a2) {
  return new class {
    constructor(_0x29c676) {
      this.name = _0x29c676;
      this.startTime = Date.now();
      const _0xdb8363 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0xdb8363);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x5b15dc, _0xe7cba5 = {}) {
      const _0x2fb244 = {
        console: true
      };
      Object.assign(_0x2fb244, _0xe7cba5);
      if (_0x2fb244.time) {
        let _0x4b6261 = _0x2fb244.fmt || "hh:mm:ss";
        _0x5b15dc = "[" + this.time(_0x4b6261) + "]" + _0x5b15dc;
      }
      if (_0x2fb244.notify) {
        this.notifyStr.push(_0x5b15dc);
      }
      if (_0x2fb244.console) {
        console.log(_0x5b15dc);
      }
    }
    get(_0x185b37, _0x3f8fe9, _0x45625c = "") {
      let _0x14cf25 = _0x45625c;
      _0x185b37?.["hasOwnProperty"](_0x3f8fe9) && (_0x14cf25 = _0x185b37[_0x3f8fe9]);
      return _0x14cf25;
    }
    pop(_0x1286f4, _0x1167ec, _0xaf46e1 = "") {
      let _0x46eaa3 = _0xaf46e1;
      _0x1286f4?.["hasOwnProperty"](_0x1167ec) && (_0x46eaa3 = _0x1286f4[_0x1167ec], delete _0x1286f4[_0x1167ec]);
      return _0x46eaa3;
    }
    copy(_0x155161) {
      return Object.assign({}, _0x155161);
    }
    read_env(_0x95bed1) {
      let _0x58b284 = _0x3b7aef.map(_0x219e76 => process.env[_0x219e76]);
      for (let _0x41db67 of _0x58b284.filter(_0x24c845 => !!_0x24c845)) {
        for (let _0x3da693 of _0x41db67.split(_0x3f5ffa).filter(_0xfc0571 => !!_0xfc0571)) {
          if (this.userList.includes(_0x3da693)) {
            continue;
          }
          this.userList.push(new _0x95bed1(_0x3da693));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0xee1ee2 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x3b7aef.map(_0x8a1879 => "[" + _0x8a1879 + "]").join("或"), _0xee1ee2);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x1f19f2, _0x374da9 = null) {
      let _0x2e78f0 = _0x374da9 ? new Date(_0x374da9) : new Date(),
        _0x19d9b8 = {
          "M+": _0x2e78f0.getMonth() + 1,
          "d+": _0x2e78f0.getDate(),
          "h+": _0x2e78f0.getHours(),
          "m+": _0x2e78f0.getMinutes(),
          "s+": _0x2e78f0.getSeconds(),
          "q+": Math.floor((_0x2e78f0.getMonth() + 3) / 3),
          S: this.padStr(_0x2e78f0.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x1f19f2) && (_0x1f19f2 = _0x1f19f2.replace(RegExp.$1, (_0x2e78f0.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4a38dc in _0x19d9b8) new RegExp("(" + _0x4a38dc + ")").test(_0x1f19f2) && (_0x1f19f2 = _0x1f19f2.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x19d9b8[_0x4a38dc] : ("00" + _0x19d9b8[_0x4a38dc]).substr(("" + _0x19d9b8[_0x4a38dc]).length)));
      return _0x1f19f2;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x40f859 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x40f859.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x330ddc, _0x2fff5c, _0x1347c9 = {}) {
      let _0xe4b189 = _0x1347c9.padding || "0",
        _0x5cad24 = _0x1347c9.mode || "l",
        _0xab69b3 = String(_0x330ddc),
        _0x2d6ee4 = _0x2fff5c > _0xab69b3.length ? _0x2fff5c - _0xab69b3.length : 0,
        _0x3a7166 = "";
      for (let _0x976b6b = 0; _0x976b6b < _0x2d6ee4; _0x976b6b++) {
        _0x3a7166 += _0xe4b189;
      }
      _0x5cad24 == "r" ? _0xab69b3 = _0xab69b3 + _0x3a7166 : _0xab69b3 = _0x3a7166 + _0xab69b3;
      return _0xab69b3;
    }
    json2str(_0xc2f358, _0xbefd4f, _0xec7610 = false) {
      let _0x43f055 = [];
      for (let _0x576d37 of Object.keys(_0xc2f358).sort()) {
        let _0x48d880 = _0xc2f358[_0x576d37];
        if (_0x48d880 && _0xec7610) {
          _0x48d880 = encodeURIComponent(_0x48d880);
        }
        _0x43f055.push(_0x576d37 + "=" + _0x48d880);
      }
      return _0x43f055.join(_0xbefd4f);
    }
    str2json(_0x40c237, _0x138274 = false) {
      let _0x1fc03a = {};
      for (let _0x54e5ce of _0x40c237.split("&")) {
        if (!_0x54e5ce) {
          continue;
        }
        let _0x416a9f = _0x54e5ce.indexOf("=");
        if (_0x416a9f == -1) {
          continue;
        }
        let _0x3db1ca = _0x54e5ce.substr(0, _0x416a9f),
          _0xf03636 = _0x54e5ce.substr(_0x416a9f + 1);
        if (_0x138274) {
          _0xf03636 = decodeURIComponent(_0xf03636);
        }
        _0x1fc03a[_0x3db1ca] = _0xf03636;
      }
      return _0x1fc03a;
    }
    randomPattern(_0x928698, _0x5be64d = "abcdef0123456789") {
      let _0x4797bf = "";
      for (let _0x2179ab of _0x928698) {
        if (_0x2179ab == "x") {
          _0x4797bf += _0x5be64d.charAt(Math.floor(Math.random() * _0x5be64d.length));
        } else {
          _0x2179ab == "X" ? _0x4797bf += _0x5be64d.charAt(Math.floor(Math.random() * _0x5be64d.length)).toUpperCase() : _0x4797bf += _0x2179ab;
        }
      }
      return _0x4797bf;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x249585, _0x398cd8 = "abcdef0123456789") {
      let _0x5ac08e = "";
      for (let _0x50f6a8 = 0; _0x50f6a8 < _0x249585; _0x50f6a8++) {
        _0x5ac08e += _0x398cd8.charAt(Math.floor(Math.random() * _0x398cd8.length));
      }
      return _0x5ac08e;
    }
    randomList(_0x1f510d) {
      let _0xbc6033 = Math.floor(Math.random() * _0x1f510d.length);
      return _0x1f510d[_0xbc6033];
    }
    wait(_0x4b842b) {
      return new Promise(_0x5daa3f => setTimeout(_0x5daa3f, _0x4b842b));
    }
    async exitNow() {
      await this.showmsg();
      let _0x1dba3e = Date.now(),
        _0x4a4841 = (_0x1dba3e - this.startTime) / 1000;
      this.log("");
      const _0xcf4cef = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x4a4841 + "秒", _0xcf4cef);
      process.exit(0);
    }
    normalize_time(_0x5746d9, _0x27e35f = {}) {
      let _0x3469a8 = _0x27e35f.len || this.default_timestamp_len;
      _0x5746d9 = _0x5746d9.toString();
      let _0x30bda5 = _0x5746d9.length;
      while (_0x30bda5 < _0x3469a8) {
        _0x5746d9 += "0";
      }
      _0x30bda5 > _0x3469a8 && (_0x5746d9 = _0x5746d9.slice(0, 13));
      return parseInt(_0x5746d9);
    }
    async wait_until(_0x52f009, _0x48bc3d = {}) {
      let _0x55fe0e = _0x48bc3d.logger || this,
        _0x5d1be8 = _0x48bc3d.interval || this.default_wait_interval,
        _0xcd1ed0 = _0x48bc3d.limit || this.default_wait_limit,
        _0x35c44a = _0x48bc3d.ahead || this.default_wait_ahead;
      if (typeof _0x52f009 == "string" && _0x52f009.includes(":")) {
        if (_0x52f009.includes("-")) {
          _0x52f009 = new Date(_0x52f009).getTime();
        } else {
          let _0x6ff9d2 = this.time("yyyy-MM-dd ");
          _0x52f009 = new Date(_0x6ff9d2 + _0x52f009).getTime();
        }
      }
      let _0x3ff0a8 = this.normalize_time(_0x52f009) - _0x35c44a,
        _0x571b98 = this.time("hh:mm:ss.S", _0x3ff0a8),
        _0x48eae7 = Date.now();
      _0x48eae7 > _0x3ff0a8 && (_0x3ff0a8 += 86400000);
      let _0x1e36f9 = _0x3ff0a8 - _0x48eae7;
      if (_0x1e36f9 > _0xcd1ed0) {
        const _0x418b84 = {
          time: true
        };
        _0x55fe0e.log("离目标时间[" + _0x571b98 + "]大于" + _0xcd1ed0 / 1000 + "秒,不等待", _0x418b84);
      } else {
        const _0x5b5b3d = {
          time: true
        };
        _0x55fe0e.log("离目标时间[" + _0x571b98 + "]还有" + _0x1e36f9 / 1000 + "秒,开始等待", _0x5b5b3d);
        while (_0x1e36f9 > 0) {
          let _0x39afdd = Math.min(_0x1e36f9, _0x5d1be8);
          await this.wait(_0x39afdd);
          _0x48eae7 = Date.now();
          _0x1e36f9 = _0x3ff0a8 - _0x48eae7;
        }
        const _0x2174f4 = {
          time: true
        };
        _0x55fe0e.log("已完成等待", _0x2174f4);
      }
    }
    async wait_gap_interval(_0x5f3494, _0x18f705) {
      let _0x53527c = Date.now() - _0x5f3494;
      _0x53527c < _0x18f705 && (await this.wait(_0x18f705 - _0x53527c));
    }
  }(_0xc392a2);
}