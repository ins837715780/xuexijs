/*
电信营业厅 v5.05

签到和完成部分金豆任务, 喂宠物
7天,15天,28天连签抽奖, 宠物等级权益兑换

自己设置电信的服务密码, 把 手机号#服务密码 填到变量里:
export chinaTelecomAccount="13888888888#123456"

每天运行一两次

cron: 33 7,19 * * *
const $ = new Env("电信营业厅");
*/
const _0x216b05 = _0x1194f6("电信营业厅"),
  _0x294b69 = require("got"),
  _0x27a43f = require("path"),
  {
    exec: _0x7f8bb9
  } = require("child_process"),
  {
    CookieJar: _0x1751aa
  } = require("tough-cookie"),
  _0x1c1424 = require("fs"),
  _0x29183e = require("crypto-js"),
  _0x3cb3c6 = "chinaTelecom",
  _0x3eaad7 = /[\n\&\@]/,
  _0xb905e7 = [_0x3cb3c6 + "Account"],
  _0x341eaf = 30000,
  _0x530a8f = 3;
const _0x5b30ba = _0x3cb3c6 + "Rpc",
  _0x6f6b7c = process.env[_0x5b30ba],
  _0x54aa8e = 6.01,
  _0x1abba9 = "chinaTelecom",
  _0x2e7ab4 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x2fd22b = "JinDouMall";
let _0x1c46d2 = {};
const _0x5c056d = "./chinaTelecom_cache.json",
  _0x43075d = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
  _0x5894ee = "34d7cb0bcdf07523",
  _0xb107c0 = "1234567`90koiuyhgtfrdewsaqaqsqde",
  _0x3e3f85 = "\0\0\0\0\0\0\0\0",
  _0xbca216 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB",
  _0x980069 = "-----BEGIN PUBLIC KEY-----\n" + _0xbca216 + "\n-----END PUBLIC KEY-----",
  _0x172763 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB",
  _0x57945e = "-----BEGIN PUBLIC KEY-----\n" + _0x172763 + "\n-----END PUBLIC KEY-----",
  _0x44e855 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
  _0x4afb9f = "-----BEGIN PUBLIC KEY-----\n" + _0x44e855 + "\n-----END PUBLIC KEY-----",
  _0x4dda33 = require("node-rsa");
let _0xda55f3 = new _0x4dda33(_0x980069);
const _0x395192 = {
  encryptionScheme: "pkcs1"
};
_0xda55f3.setOptions(_0x395192);
let _0xa6e3a0 = new _0x4dda33(_0x57945e);
const _0x419cf2 = {
  encryptionScheme: "pkcs1"
};
_0xa6e3a0.setOptions(_0x419cf2);
let _0x2cacf9 = new _0x4dda33(_0x4afb9f);
const _0x5f017e = {
  encryptionScheme: "pkcs1"
};
_0x2cacf9.setOptions(_0x5f017e);
const _0x56d045 = {
  taskShort: "hg_qd_rmrwtjq",
  taskLong: "hg_qd_zrwzjd",
  signReward: "hg_qd_qdjdtc",
  recommandExchange: "hg_qd_jddhsptjq",
  vipExchange: "hg_qd_jddhhl",
  continueSign: "hg_qd_qdtqtc",
  jindouExchangeHuafei_am: "hg_qd_jdmszswjp",
  jindouExchangeHuafei_pm: "hg_qd_jdmszxwjp"
};
const _0x5c2742 = [202201, 202202, 202203],
  _0x3d7878 = 5;
function _0x5802c7(_0x5797e8, _0x15acdb, _0x1ec759, _0x232831, _0x4d8cac, _0x288fb0) {
  return _0x29183e[_0x5797e8].encrypt(_0x29183e.enc.Utf8.parse(_0x232831), _0x29183e.enc.Utf8.parse(_0x4d8cac), {
    mode: _0x29183e.mode[_0x15acdb],
    padding: _0x29183e.pad[_0x1ec759],
    iv: _0x29183e.enc.Utf8.parse(_0x288fb0)
  }).ciphertext.toString(_0x29183e.enc.Hex);
}
function _0x200d43(_0x253c46, _0x452af0, _0x274c9a, _0x1eda62, _0x3b3518, _0x22136f) {
  return _0x29183e[_0x253c46].decrypt({
    ciphertext: _0x29183e.enc.Hex.parse(_0x1eda62)
  }, _0x29183e.enc.Utf8.parse(_0x3b3518), {
    mode: _0x29183e.mode[_0x452af0],
    padding: _0x29183e.pad[_0x274c9a],
    iv: _0x29183e.enc.Utf8.parse(_0x22136f)
  }).toString(_0x29183e.enc.Utf8);
}
function _0x2a2e8e() {
  try {
    _0x1c1424.writeFileSync(_0x5c056d, JSON.stringify(_0x1c46d2, null, 4), "utf-8");
  } catch (_0x23e8df) {
    console.log("保存缓存出错");
  }
}
function _0x4335f5() {
  try {
    _0x1c46d2 = JSON.parse(_0x1c1424.readFileSync(_0x5c056d, "utf-8"));
  } catch (_0x5078d3) {
    console.log("读取缓存出错, 新建一个token缓存");
    _0x2a2e8e();
  }
}
let _0x4c4627 = 0,
  _0x26b654 = 0;
function _0x18771b() {
  _0x26b654 = 1;
  const _0x201147 = _0x27a43f.basename(process.argv[1]),
    _0x3f40df = ["bash", "timeout", "grep"];
  let _0x50307a = ["ps afx"];
  _0x50307a.push("grep " + _0x201147);
  _0x50307a = _0x50307a.concat(_0x3f40df.map(_0x163d97 => "grep -v \"" + _0x163d97 + " \""));
  _0x50307a.push("wc -l");
  const _0x33f9f0 = _0x50307a.join("|"),
    _0x333d00 = () => {
      _0x7f8bb9(_0x33f9f0, (_0x4dbbae, _0x226e40, _0x474c05) => {
        if (_0x4dbbae || _0x474c05) {
          return;
        }
        _0x4c4627 = parseInt(_0x226e40.trim(), 10);
      });
      setTimeout(_0x333d00, 1000);
    };
  _0x333d00();
}
class _0x4655a4 {
  constructor() {
    this.index = _0x216b05.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x158efc = {
      limit: 0
    };
    const _0x1b0e61 = {
      Connection: "keep-alive"
    };
    const _0x3d210a = {
      retry: _0x158efc,
      timeout: _0x341eaf,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x1b0e61
    };
    this.got = _0x294b69.extend(_0x3d210a);
    if (!_0x26b654) {
      _0x18771b();
    }
  }
  log(_0x4478d9, _0x72d8c4 = {}) {
    var _0x91bfbf = "",
      _0x2dcbcf = _0x216b05.userCount.toString().length;
    if (this.index) {
      _0x91bfbf += "账号[" + _0x216b05.padStr(this.index, _0x2dcbcf) + "]";
    }
    if (this.name) {
      _0x91bfbf += "[" + this.name + "]";
    }
    _0x216b05.log(_0x91bfbf + _0x4478d9, _0x72d8c4);
  }
  set_cookie(_0x4568db, _0x571130, _0x5d0192, _0x1ddee6, _0x4b4699 = {}) {
    this.cookieJar.setCookieSync(_0x4568db + "=" + _0x571130 + "; Domain=" + _0x5d0192 + ";", "" + _0x1ddee6);
  }
  async request(_0x2cfd61) {
    const _0x3f019d = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x505259 = ["TimeoutError"],
      _0x558ae3 = [];
    var _0x477def = null,
      _0x5698f6 = 0,
      _0x2d7c8e = _0x2cfd61.fn || _0x2cfd61.url;
    let _0xda37b7 = _0x216b05.get(_0x2cfd61, "valid_code", _0x558ae3);
    _0x2cfd61.method = _0x2cfd61?.["method"]?.["toUpperCase"]() || "GET";
    let _0x4f0c81;
    while (_0x5698f6 < _0x530a8f) {
      try {
        _0x5698f6++;
        _0x4f0c81 = null;
        let _0x2484ab = null,
          _0x50b829 = _0x2cfd61?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x341eaf,
          _0x43a13f = false,
          _0x560ee3 = Math.max(this.index - 2, 0),
          _0x325380 = Math.max(this.index - 3, 1),
          _0x35144d = _0x560ee3 * _0x325380 * 1000,
          _0x43305a = (_0x4c4627 - 1) * (_0x4c4627 - 1) * 1000,
          _0x5e9026 = (_0x216b05.userCount - 1) * 200;
        await _0x216b05.wait(_0x35144d + _0x43305a + _0x5e9026);
        await new Promise(async _0x495b9d => {
          setTimeout(() => {
            _0x43a13f = true;
            _0x495b9d();
          }, _0x50b829);
          await this.got(_0x2cfd61).then(_0x30372f => {
            _0x477def = _0x30372f;
          }, _0x58e4c => {
            _0x2484ab = _0x58e4c;
            _0x477def = _0x58e4c.response;
            _0x4f0c81 = _0x2484ab?.["code"];
          });
          _0x495b9d();
        });
        if (_0x43a13f) {
          this.log("[" + _0x2d7c8e + "]请求超时(" + _0x50b829 / 1000 + "秒)，重试第" + _0x5698f6 + "次");
        } else {
          if (_0x505259.includes(_0x2484ab?.["name"])) {
            this.log("[" + _0x2d7c8e + "]请求超时(" + _0x2484ab.code + ")，重试第" + _0x5698f6 + "次");
          } else {
            if (_0x3f019d.includes(_0x2484ab?.["code"])) {
              this.log("[" + _0x2d7c8e + "]请求错误(" + _0x2484ab.code + ")，重试第" + _0x5698f6 + "次");
            } else {
              let _0x293778 = _0x477def?.["statusCode"] || 999,
                _0x11e517 = _0x293778 / 100 | 0;
              _0x11e517 > 3 && !_0xda37b7.includes(_0x293778) && this.log("请求[" + _0x2d7c8e + "]返回[" + _0x293778 + "]");
              if (_0x11e517 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x2b86da) {
        _0x2b86da.name == "TimeoutError" ? this.log("[" + _0x2d7c8e + "]请求超时，重试第" + _0x5698f6 + "次") : this.log("[" + _0x2d7c8e + "]请求错误(" + _0x2b86da.message + ")，重试第" + _0x5698f6 + "次");
      }
    }
    const _0x4f8332 = {
      statusCode: _0x4f0c81 || -1,
      headers: null,
      result: null
    };
    if (_0x477def == null) {
      return Promise.resolve(_0x4f8332);
    }
    let {
      statusCode: _0x157201,
      headers: _0x2c2f64,
      body: _0x2fae94
    } = _0x477def;
    if (_0x2fae94) {
      try {
        _0x2fae94 = JSON.parse(_0x2fae94);
      } catch {}
    }
    const _0x49c3c0 = {
      statusCode: _0x157201,
      headers: _0x2c2f64,
      result: _0x2fae94
    };
    return Promise.resolve(_0x49c3c0);
  }
}
let _0x4a74c1 = _0x4655a4;
try {
  let _0x18281c = require("./LocalBasic");
  _0x4a74c1 = _0x18281c;
} catch {}
let _0x25d788 = new _0x4a74c1(_0x216b05);
class _0x4e2898 extends _0x4a74c1 {
  constructor(_0x57c08a) {
    super(_0x216b05);
    let _0x1a5e29 = _0x57c08a.split("#");
    this.name = _0x1a5e29[0];
    this.passwd = _0x1a5e29?.[1] || "";
    this.uuid = [_0x216b05.randomPattern("xxxxxxxx"), _0x216b05.randomPattern("xxxx"), _0x216b05.randomPattern("4xxx"), _0x216b05.randomPattern("xxxx"), _0x216b05.randomPattern("xxxxxxxxxxxx")];
    this.cookieJar = new _0x1751aa();
    this.can_feed = true;
    this.jml_tokenFlag = "";
    this.mall_token = "";
    const _0x5d8270 = {
      Connection: "keep-alive",
      "User-Agent": _0x43075d
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x5d8270
    });
  }
  load_token() {
    let _0x335266 = false;
    _0x1c46d2[this.name] && (this.userId = _0x1c46d2[this.name].userId, this.token = _0x1c46d2[this.name].token, this.log("读取到缓存token"), _0x335266 = true);
    return _0x335266;
  }
  encode_phone() {
    let _0x2029e6 = this.name.split("");
    for (let _0x218373 in _0x2029e6) {
      _0x2029e6[_0x218373] = String.fromCharCode(_0x2029e6[_0x218373].charCodeAt(0) + 2);
    }
    return _0x2029e6.join("");
  }
  encode_aes(_0x16191e) {
    return _0x5802c7("AES", "ECB", "Pkcs7", _0x16191e, _0x5894ee, 0);
  }
  get_mall_headers() {
    return {
      "Content-Type": "application/json;charset=utf-8",
      Accept: "application/json, text/javascript, */*; q=0.01",
      Authorization: this.mall_token ? "Bearer " + this.mall_token : "",
      "X-Requested-With": "XMLHttpRequest"
    };
  }
  async login(_0xf1219 = {}) {
    let _0x256a4a = false;
    try {
      let _0x5305ce = _0x216b05.time("yyyyMMddhhmmss"),
        _0x3e9bc6 = "iPhone 14 15.4." + this.uuid.slice(0, 2).join("") + this.name + _0x5305ce + this.passwd + "0$$$0.",
        _0x4267ee = {
          fn: "login",
          method: "post",
          url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
          json: {
            headerInfos: {
              code: "userLoginNormal",
              timestamp: _0x5305ce,
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
                loginAuthCipherAsymmertric: _0xda55f3.encrypt(_0x3e9bc6, "base64"),
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
          result: _0x1fe63f,
          statusCode: _0x473cb9
        } = await this.request(_0x4267ee),
        _0x599466 = _0x216b05.get(_0x1fe63f?.["responseData"], "resultCode", -1);
      if (_0x599466 == "0000") {
        let {
          userId = "",
          token = ""
        } = _0x1fe63f?.["responseData"]?.["data"]?.["loginSuccessResult"] || {};
        this.userId = userId;
        this.token = token;
        this.log("使用服务密码登录成功");
        _0x1c46d2[this.name] = {
          token: token,
          userId: userId,
          t: Date.now()
        };
        _0x2a2e8e();
        _0x256a4a = true;
      } else {
        let _0x53ec06 = _0x1fe63f?.["msg"] || _0x1fe63f?.["responseData"]?.["resultDesc"] || _0x1fe63f?.["headerInfos"]?.["reason"] || "";
        this.log("服务密码登录失败[" + _0x599466 + "]: " + _0x53ec06);
      }
    } catch (_0x153eef) {
      console.log(_0x153eef);
    } finally {
      return _0x256a4a;
    }
  }
  async get_ticket(_0x561fca = {}) {
    let _0x570803 = "";
    try {
      let _0x43063e = "\n            <Request>\n                <HeaderInfos>\n                    <Code>getSingle</Code>\n                    <Timestamp>" + _0x216b05.time("yyyyMMddhhmmss") + "</Timestamp>\n                    <BroadAccount></BroadAccount>\n                    <BroadToken></BroadToken>\n                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                    <ShopId>20002</ShopId>\n                    <Source>110003</Source>\n                    <SourcePassword>Sid98s</SourcePassword>\n                    <Token>" + this.token + "</Token>\n                    <UserLoginName>" + this.name + "</UserLoginName>\n                </HeaderInfos>\n                <Content>\n                    <Attach>test</Attach>\n                    <FieldData>\n                        <TargetId>" + _0x5802c7("TripleDES", "CBC", "Pkcs7", this.userId, _0xb107c0, _0x3e3f85) + "</TargetId>\n                        <Url>4a6862274835b451</Url>\n                    </FieldData>\n                </Content>\n            </Request>";
      const _0x2972e2 = {
        fn: "get_ticket",
        method: "post",
        url: "https://appgologin.189.cn:9031/map/clientXML",
        body: _0x43063e
      };
      let {
        result: _0x5198d7,
        statusCode: _0x53b854
      } = await this.request(_0x2972e2);
      if (_0x5198d7) {
        let _0x3393e3 = _0x5198d7.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
        if (_0x3393e3) {
          let _0x30d210 = _0x3393e3[1];
          _0x570803 = _0x200d43("TripleDES", "CBC", "Pkcs7", _0x30d210, _0xb107c0, _0x3e3f85);
          this.ticket = _0x570803;
        }
      }
      !_0x570803 && (!_0x561fca.retry && (await this.login()) ? (_0x561fca.retry = true, _0x570803 = await this.get_ticket(_0x561fca)) : (this.log("没有获取到ticket[" + _0x53b854 + "]: "), _0x5198d7 && this.log(": " + JSON.stringify(_0x5198d7))));
    } catch (_0x39a55c) {
      console.log(_0x39a55c);
    } finally {
      return _0x570803;
    }
  }
  async get_sign(_0x392e4e = {}) {
    let _0x5c4b21 = false;
    try {
      const _0x15588a = {
        ticket: this.ticket
      };
      const _0x4e54ea = {
        fn: "login",
        method: "get",
        url: "https://wapside.189.cn:9001/jt-sign/ssoHomLogin",
        searchParams: _0x15588a
      };
      let {
          result: _0xe2701e,
          statusCode: _0x1caea5
        } = await this.request(_0x4e54ea),
        _0x48939d = _0x216b05.get(_0xe2701e, "resoultCode", _0x1caea5);
      _0x48939d == 0 ? (_0x5c4b21 = _0xe2701e?.["sign"], this.sign = _0x5c4b21, this.got = this.got.extend({
        headers: {
          sign: this.sign
        }
      })) : this.log("获取sign失败[" + _0x48939d + "]: " + JSON.stringify(_0xe2701e || ""));
    } catch (_0x479fa9) {
      console.log(_0x479fa9);
    } finally {
      return _0x5c4b21;
    }
  }
  encrypt_para(_0x32c289) {
    let _0x2c5bda = typeof _0x32c289 == "string" ? _0x32c289 : JSON.stringify(_0x32c289);
    return _0xa6e3a0.encrypt(_0x2c5bda, "hex");
  }
  async userCoinInfo(_0x47dddf = false, _0x1abd43 = {}) {
    try {
      const _0x43f303 = {
        phone: this.name
      };
      let _0x2d8723 = {
          fn: "userCoinInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/userCoinInfo",
          json: {
            para: this.encrypt_para(_0x43f303)
          }
        },
        {
          result: _0x642e06,
          statusCode: _0x5abe2e
        } = await this.request(_0x2d8723),
        _0x38df8d = _0x216b05.get(_0x642e06, "resoultCode", _0x5abe2e);
      if (_0x38df8d == 0) {
        this.coin = _0x642e06?.["totalCoin"] || 0;
        if (_0x47dddf) {
          const _0x470142 = {
            notify: true
          };
          this.log("金豆余额: " + this.coin, _0x470142);
          if (_0x642e06.amountEx) {
            let _0x5f06e1 = _0x216b05.time("yyyy-MM-dd", _0x642e06.expireDate);
            const _0x499336 = {
              notify: true
            };
            _0x216b05.log("-- [" + _0x5f06e1 + "]将过期" + _0x642e06.amountEx + "金豆", _0x499336);
          }
        }
      } else {
        let _0x96bf30 = _0x642e06?.["msg"] || _0x642e06?.["resoultMsg"] || _0x642e06?.["error"] || "";
        this.log("查询账户金豆余额错误[" + _0x38df8d + "]: " + _0x96bf30);
      }
    } catch (_0x45802b) {
      console.log(_0x45802b);
    }
  }
  async userStatusInfo(_0x4a933d = {}) {
    try {
      const _0x48768d = {
        phone: this.name
      };
      let _0xf4cbbb = {
        fn: "userStatusInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/api/home/userStatusInfo",
        json: {
          para: this.encrypt_para(_0x48768d)
        }
      };
      {
        let {
            result: _0x4920d3,
            statusCode: _0x4564c2
          } = await this.request(_0x216b05.copy(_0xf4cbbb)),
          _0x1c6012 = _0x216b05.get(_0x4920d3, "resoultCode", _0x4564c2);
        if (_0x1c6012 == 0) {
          let {
            isSign: _0x5d2bc3
          } = _0x4920d3?.["data"];
          _0x5d2bc3 ? this.log("今天已签到") : await this.doSign();
        } else {
          let _0x1d37ca = _0x4920d3?.["msg"] || _0x4920d3?.["resoultMsg"] || _0x4920d3?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0x1c6012 + "]: " + _0x1d37ca);
        }
      }
      {
        let {
            result: _0x115275,
            statusCode: _0x495c94
          } = await this.request(_0x216b05.copy(_0xf4cbbb)),
          _0x4f0f7a = _0x216b05.get(_0x115275, "resoultCode", _0x495c94);
        if (_0x4f0f7a == 0) {
          let {
            continuousDay: _0x1e0ea8,
            signDay: _0x5810b3,
            isSeven: _0x21743c
          } = _0x115275?.["data"];
          this.log("已签到" + _0x5810b3 + "天, 连签" + _0x1e0ea8 + "天");
          _0x21743c && (await this.exchangePrize());
        } else {
          let _0x128ce6 = _0x115275?.["msg"] || _0x115275?.["resoultMsg"] || _0x115275?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0x4f0f7a + "]: " + _0x128ce6);
        }
      }
    } catch (_0x201eed) {
      console.log(_0x201eed);
    }
  }
  async continueSignDays(_0x377acf = {}) {
    try {
      const _0xa8156c = {
        phone: this.name
      };
      let _0x142a0d = {
          fn: "continueSignDays",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/continueSignDays",
          json: {
            para: this.encrypt_para(_0xa8156c)
          }
        },
        {
          result: _0x47451e,
          statusCode: _0x31f32f
        } = await this.request(_0x142a0d),
        _0x226c3c = _0x216b05.get(_0x47451e, "resoultCode", _0x31f32f);
      if (_0x226c3c == 0) {
        this.log("抽奖连签天数: " + (_0x47451e?.["continueSignDays"] || 0) + "天");
        if (_0x47451e?.["continueSignDays"] == 15) {
          const _0x46eaa8 = {
            type: "15"
          };
          await this.exchangePrize(_0x46eaa8);
        } else {
          if (_0x47451e?.["continueSignDays"] == 28) {
            const _0x4b36b7 = {
              type: "28"
            };
            await this.exchangePrize(_0x4b36b7);
          }
        }
      } else {
        let _0x306f69 = _0x47451e?.["msg"] || _0x47451e?.["resoultMsg"] || _0x47451e?.["error"] || "";
        this.log("查询抽奖连签天数错误[" + _0x226c3c + "]: " + _0x306f69);
      }
    } catch (_0x5c8ca3) {
      console.log(_0x5c8ca3);
    }
  }
  async continueSignRecords(_0xe6c93 = {}) {
    try {
      const _0x416803 = {
        phone: this.name
      };
      let _0x22ac7d = {
          fn: "continueSignRecords",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/continueSignRecords",
          json: {
            para: this.encrypt_para(_0x416803)
          }
        },
        {
          result: _0x4787d0,
          statusCode: _0x3acfd6
        } = await this.request(_0x22ac7d),
        _0x4a814f = _0x216b05.get(_0x4787d0, "resoultCode", _0x3acfd6);
      if (_0x4a814f == 0) {
        if (_0x4787d0?.["continue15List"]?.["length"]) {
          const _0x22cfac = {
            type: "15"
          };
          await this.exchangePrize(_0x22cfac);
        }
        if (_0x4787d0?.["continue28List"]?.["length"]) {
          const _0x4c899d = {
            type: "28"
          };
          await this.exchangePrize(_0x4c899d);
        }
      } else {
        let _0x10579c = _0x4787d0?.["msg"] || _0x4787d0?.["resoultMsg"] || _0x4787d0?.["error"] || "";
        this.log("查询连签抽奖状态错误[" + _0x4a814f + "]: " + _0x10579c);
      }
    } catch (_0x460d11) {
      console.log(_0x460d11);
    }
  }
  async doSign(_0x10a545 = {}) {
    try {
      let _0x5ad45e = {
          phone: this.name,
          date: Date.now(),
          sysType: "20002"
        },
        _0xe9087f = {
          fn: "doSign",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/sign",
          json: {
            encode: this.encode_aes(JSON.stringify(_0x5ad45e))
          }
        },
        {
          result: _0x5a7b98,
          statusCode: _0x868303
        } = await this.request(_0xe9087f),
        _0x5bd832 = _0x216b05.get(_0x5a7b98, "resoultCode", _0x868303);
      if (_0x5bd832 == 0) {
        let _0x4e5a10 = _0x216b05.get(_0x5a7b98?.["data"], "code", -1);
        if (_0x4e5a10 == 1) {
          const _0x3e59a0 = {
            notify: true
          };
          this.log("签到成功，获得" + (_0x5a7b98?.["data"]?.["coin"] || 0) + "金豆", _0x3e59a0);
          await this.userStatusInfo();
        } else {
          const _0x3636bf = {
            notify: true
          };
          this.log("签到失败[" + _0x4e5a10 + "]: " + _0x5a7b98.data.msg, _0x3636bf);
        }
      } else {
        let _0x2fc6ef = _0x5a7b98?.["msg"] || _0x5a7b98?.["resoultMsg"] || _0x5a7b98?.["error"] || "";
        this.log("签到错误[" + _0x5bd832 + "]: " + _0x2fc6ef);
      }
    } catch (_0x168a2c) {
      console.log(_0x168a2c);
    }
  }
  async exchangePrize(_0x5243fb = {}) {
    try {
      let _0x351a77 = _0x216b05.pop(_0x5243fb, "type", "7");
      const _0x5d105b = {
        phone: this.name,
        type: _0x351a77
      };
      let _0x5a8677 = {
          fn: "exchangePrize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/exchangePrize",
          json: {
            para: this.encrypt_para(_0x5d105b)
          }
        },
        {
          result: _0x84a186,
          statusCode: _0x4549f4
        } = await this.request(_0x5a8677),
        _0x3619dd = _0x216b05.get(_0x84a186, "resoultCode", _0x4549f4);
      if (_0x3619dd == 0) {
        let _0x3bb986 = _0x216b05.get(_0x84a186?.["prizeDetail"], "code", -1);
        if (_0x3bb986 == 0) {
          const _0x4a3bb7 = {
            notify: true
          };
          this.log("连签" + _0x351a77 + "天抽奖: " + _0x84a186?.["prizeDetail"]?.["biz"]?.["winTitle"], _0x4a3bb7);
        } else {
          let _0x5c635c = _0x84a186?.["prizeDetail"]?.["err"] || "";
          const _0x481325 = {
            notify: true
          };
          this.log("连签" + _0x351a77 + "天抽奖失败[" + _0x3bb986 + "]: " + _0x5c635c, _0x481325);
        }
      } else {
        let _0x12ab51 = _0x84a186?.["msg"] || _0x84a186?.["resoultMsg"] || _0x84a186?.["error"] || "";
        this.log("连签" + _0x351a77 + "天抽奖错误[" + _0x3619dd + "]: " + _0x12ab51);
      }
    } catch (_0x44bb40) {
      console.log(_0x44bb40);
    }
  }
  async homepage(_0x9f961, _0xcf6893 = {}) {
    try {
      const _0x526c37 = {
        phone: this.name,
        shopId: "20001",
        type: _0x9f961
      };
      let _0x358b4f = {
          fn: "homepage",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/homepage",
          json: {
            para: this.encrypt_para(_0x526c37)
          }
        },
        {
          result: _0x8e63,
          statusCode: _0x52e0dc
        } = await this.request(_0x358b4f),
        _0x4aa167 = _0x216b05.get(_0x8e63, "resoultCode", _0x52e0dc);
      if (_0x4aa167 == 0) {
        let _0x1ab227 = _0x216b05.get(_0x8e63?.["data"]?.["head"], "code", -1);
        if (_0x1ab227 == 0) {
          for (let _0x22de63 of _0x8e63?.["data"]?.["biz"]?.["adItems"] || []) {
            if (["0", "1"].includes(_0x22de63?.["taskState"])) {
              switch (_0x22de63.contentOne) {
                case "3":
                  {
                    if (_0x22de63?.["rewardId"]) {
                      await this.receiveReward(_0x22de63);
                    }
                    break;
                  }
                case "5":
                  {
                    await this.openMsg(_0x22de63);
                    break;
                  }
                case "6":
                  {
                    await this.sharingGetGold();
                    break;
                  }
                case "10":
                case "13":
                  {
                    if (!this.xtoken) {
                      await this.get_usercode();
                    }
                    this.xtoken && (await this.watchLiveInit());
                    break;
                  }
                case "18":
                  {
                    await this.polymerize(_0x22de63);
                    break;
                  }
                default:
                  {
                    break;
                  }
              }
            }
          }
        } else {
          let _0x4b5fdb = _0x8e63?.["data"]?.["head"]?.["err"] || "";
          this.log("获取任务列表失败[" + _0x1ab227 + "]: " + _0x4b5fdb);
        }
      } else {
        this.log("获取任务列表错误[" + _0x4aa167 + "]");
      }
    } catch (_0x31a373) {
      console.log(_0x31a373);
    }
  }
  async receiveReward(_0x10de06, _0x2a7609 = {}) {
    try {
      let _0x598f7f = _0x10de06?.["title"]?.["split"](" ")?.[0];
      const _0x282247 = {
        phone: this.name,
        rewardId: _0x10de06?.["rewardId"] || ""
      };
      let _0x2bb247 = {
          fn: "receiveReward",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/receiveReward",
          json: {
            para: this.encrypt_para(_0x282247)
          }
        },
        {
          result: _0x33430c,
          statusCode: _0x22456b
        } = await this.request(_0x2bb247),
        _0x53bcc4 = _0x216b05.get(_0x33430c, "resoultCode", _0x22456b);
      if (_0x53bcc4 == 0) {
        this.log("领取任务[" + _0x598f7f + "]奖励成功: " + _0x33430c?.["resoultMsg"]);
      } else {
        let _0x23444c = _0x33430c?.["msg"] || _0x33430c?.["resoultMsg"] || _0x33430c?.["error"] || "";
        this.log("领取任务[" + _0x598f7f + "]奖励错误[" + _0x53bcc4 + "]: " + _0x23444c);
      }
    } catch (_0x5d3550) {
      console.log(_0x5d3550);
    }
  }
  async openMsg(_0x57125c, _0x130730 = {}) {
    try {
      let _0x535303 = _0x57125c?.["title"]?.["split"](" ")?.[0];
      const _0x338576 = {
        phone: this.name
      };
      let _0xda0f22 = {
          fn: "openMsg",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/openMsg",
          json: {
            para: this.encrypt_para(_0x338576)
          }
        },
        {
          result: _0x42c672,
          statusCode: _0x37a504
        } = await this.request(_0xda0f22),
        _0x52cd51 = _0x216b05.get(_0x42c672, "resoultCode", _0x37a504);
      if (_0x52cd51 == 0) {
        this.log("完成任务[" + _0x535303 + "]成功: " + _0x42c672?.["resoultMsg"]);
      } else {
        let _0x417fd3 = _0x42c672?.["msg"] || _0x42c672?.["resoultMsg"] || _0x42c672?.["error"] || "";
        this.log("完成任务[" + _0x535303 + "]错误[" + _0x52cd51 + "]: " + _0x417fd3);
      }
    } catch (_0x4cbd63) {
      console.log(_0x4cbd63);
    }
  }
  async polymerize(_0x1468db, _0x42164d = {}) {
    try {
      let _0x444bdd = _0x1468db?.["title"]?.["split"](" ")?.[0];
      const _0x3d6963 = {
        phone: this.name,
        jobId: _0x1468db.taskId
      };
      let _0x229c64 = {
          fn: "polymerize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/polymerize",
          json: {
            para: this.encrypt_para(_0x3d6963)
          }
        },
        {
          result: _0x119c03,
          statusCode: _0xeb645
        } = await this.request(_0x229c64),
        _0x565fe8 = _0x216b05.get(_0x119c03, "resoultCode", _0xeb645);
      if (_0x565fe8 == 0) {
        this.log("完成任务[" + _0x444bdd + "]成功: " + _0x119c03?.["resoultMsg"]);
      } else {
        let _0x45be26 = _0x119c03?.["msg"] || _0x119c03?.["resoultMsg"] || _0x119c03?.["error"] || "";
        this.log("完成任务[" + _0x444bdd + "]错误[" + _0x565fe8 + "]: " + _0x45be26);
      }
    } catch (_0x11395c) {
      console.log(_0x11395c);
    }
  }
  async food(_0x1d206e, _0x3892c1 = {}) {
    try {
      const _0x4184fb = {
        phone: this.name
      };
      let _0x4c99c7 = {
          fn: "food",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/food",
          json: {
            para: this.encrypt_para(_0x4184fb)
          }
        },
        {
          result: _0x4baae9,
          statusCode: _0x54f613
        } = await this.request(_0x4c99c7),
        _0x257131 = _0x216b05.get(_0x4baae9, "resoultCode", _0x54f613);
      if (_0x257131 == 0) {
        this.log("第" + _0x1d206e + "次喂食: " + (_0x4baae9?.["resoultMsg"] || "成功"));
        if (_0x4baae9?.["levelUp"]) {
          let _0x119a46 = _0x4baae9?.["currLevelRightList"][0]?.["level"];
          const _0x2f8998 = {
            notify: true
          };
          this.log("宠物已升级到[LV." + _0x119a46 + "], 获得: " + _0x4baae9?.["currLevelRightList"][0]?.["righstName"], _0x2f8998);
        }
      } else {
        let _0x2e1ff4 = _0x4baae9?.["msg"] || _0x4baae9?.["resoultMsg"] || _0x4baae9?.["error"] || "";
        this.log("第" + _0x1d206e + "次喂食失败[" + _0x257131 + "]: " + _0x2e1ff4);
        _0x2e1ff4?.["includes"]("最大喂食次数") && (this.can_feed = false);
      }
    } catch (_0x885393) {
      console.log(_0x885393);
    }
  }
  async getParadiseInfo(_0x1a98e4 = {}) {
    try {
      const _0x2ddb2a = {
        phone: this.name
      };
      let _0x1add9a = {
        fn: "getParadiseInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
        json: {
          para: this.encrypt_para(_0x2ddb2a)
        }
      };
      {
        let {
            result: _0x4947f0,
            statusCode: _0x12823b
          } = await this.request(_0x1add9a),
          _0x344e7d = _0x216b05.get(_0x4947f0, "resoultCode", _0x12823b);
        if (_0x344e7d == 0) {
          let _0x11b604 = _0x4947f0?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x11b604?.["level"];
          for (let _0x3e4125 = 1; _0x3e4125 <= 10 && this.can_feed; _0x3e4125++) {
            await this.food(_0x3e4125);
          }
        } else {
          let _0x1ea032 = _0x4947f0?.["msg"] || _0x4947f0?.["resoultMsg"] || _0x4947f0?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x344e7d + "]: " + _0x1ea032);
          return;
        }
      }
      {
        let {
            result: _0x1eb88b,
            statusCode: _0x141547
          } = await this.request(_0x1add9a),
          _0x36a61c = _0x216b05.get(_0x1eb88b, "resoultCode", _0x141547);
        if (_0x36a61c == 0) {
          let _0x887f07 = _0x1eb88b?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x887f07?.["level"];
          const _0x2da33a = {
            notify: true
          };
          this.log("宠物等级[Lv." + _0x887f07?.["level"] + "], 升级进度: " + _0x887f07?.["growthValue"] + "/" + _0x887f07?.["fullGrowthCoinValue"], _0x2da33a);
        } else {
          let _0x251000 = _0x1eb88b?.["msg"] || _0x1eb88b?.["resoultMsg"] || _0x1eb88b?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x36a61c + "]: " + _0x251000);
          return;
        }
      }
    } catch (_0x1e0735) {
      console.log(_0x1e0735);
    }
  }
  async getLevelRightsList(_0x11997c = {}) {
    try {
      const _0x4fe4cf = {
        phone: this.name
      };
      let _0x3a2ab7 = {
          fn: "getLevelRightsList",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList",
          json: {
            para: this.encrypt_para(_0x4fe4cf)
          }
        },
        {
          result: _0x3b34bf,
          statusCode: _0x184a2b
        } = await this.request(_0x3a2ab7);
      if (_0x3b34bf?.["currentLevel"]) {
        let _0x29c506 = _0x3b34bf?.["currentLevel"] || 6,
          _0x11a233 = false,
          _0x4b18df = "V" + _0x29c506;
        for (let _0x134efb of _0x3b34bf[_0x4b18df] || []) {
          let _0x5d184e = _0x134efb?.["righstName"] || "";
          if (this.coin < _0x134efb.costCoin) {
            continue;
          }
          (_0x5d184e?.["match"](/\d+元话费/) || _0x5d184e?.["match"](/专享\d+金豆/)) && (await this.getConversionRights(_0x134efb, _0x11a233)) && (_0x11a233 = true);
        }
      } else {
        let _0x4ae64b = _0x3b34bf?.["msg"] || _0x3b34bf?.["resoultMsg"] || _0x3b34bf?.["error"] || "";
        this.log("查询宠物兑换权益失败: " + _0x4ae64b);
      }
    } catch (_0x442112) {
      console.log(_0x442112);
    }
  }
  async getConversionRights(_0x2d38d9, _0x1df2cb, _0x2d0d3f = {}) {
    let _0x205ff7 = false;
    try {
      let _0x3dcdb7 = _0x2d38d9?.["righstName"] || "";
      const _0x4bbe21 = {
        phone: this.name,
        rightsId: _0x2d38d9.id,
        receiveCount: _0x2d38d9.receiveType
      };
      let _0x2f5392 = {
          fn: "getConversionRights",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getConversionRights",
          json: {
            para: this.encrypt_para(_0x4bbe21)
          }
        },
        {
          result: _0x4007ea,
          statusCode: _0x44c6bd
        } = await this.request(_0x2f5392),
        _0x479307 = _0x216b05.get(_0x4007ea, "code", _0x216b05.get(_0x4007ea, "resoultCode", _0x44c6bd));
      if (_0x479307 == 200) {
        if (!(_0x4007ea?.["rightsStatus"]?.["includes"]("已兑换") || _0x4007ea?.["rightsStatus"]?.["includes"]("已领取"))) {
          _0x205ff7 = true;
          if (_0x1df2cb) {
            await _0x216b05.wait(3000);
          }
          await this.conversionRights(_0x2d38d9);
        }
      } else {
        let _0x24510d = _0x4007ea?.["msg"] || _0x4007ea?.["resoultMsg"] || _0x4007ea?.["error"] || "";
        this.log("查询权益[" + _0x3dcdb7 + "]失败[" + _0x479307 + "]: " + _0x24510d);
      }
    } catch (_0x3da273) {
      console.log(_0x3da273);
    } finally {
      return _0x205ff7;
    }
  }
  async conversionRights(_0x14d849, _0x412fbc = {}) {
    try {
      let _0x285992 = _0x14d849?.["righstName"] || "";
      const _0x3d9253 = {
        phone: this.name,
        rightsId: _0x14d849.id
      };
      let _0x15ef33 = {
          fn: "conversionRights",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights",
          json: {
            para: this.encrypt_para(_0x3d9253)
          }
        },
        {
          result: _0x560721,
          statusCode: _0x1331b0
        } = await this.request(_0x15ef33),
        _0x3f7a4c = _0x216b05.get(_0x560721, "resoultCode", _0x1331b0);
      if (_0x3f7a4c == 0) {
        this.log("兑换权益[" + _0x285992 + "]成功");
      } else {
        let _0x29e066 = _0x560721?.["msg"] || _0x560721?.["resoultMsg"] || _0x560721?.["error"] || "";
        this.log("兑换权益[" + _0x285992 + "]失败[" + _0x3f7a4c + "]: " + _0x29e066);
      }
    } catch (_0x5d4b24) {
      console.log(_0x5d4b24);
    }
  }
  async get_usercode(_0x586466 = {}) {
    try {
      const _0x3a6900 = {
        fn: "get_usercode",
        method: "get",
        url: "https://xbk.189.cn/xbkapi/api/auth/jump",
        searchParams: {}
      };
      _0x3a6900.searchParams.userID = this.ticket;
      _0x3a6900.searchParams.version = "9.3.3";
      _0x3a6900.searchParams.type = "room";
      _0x3a6900.searchParams.l = "renwu";
      let {
          statusCode: _0x3da8f8,
          headers: _0x4e2543
        } = await this.request(_0x3a6900),
        _0x3b11a6 = _0x4e2543?.["location"]?.["match"](/usercode=(\w+)/);
      _0x3b11a6 ? await this.codeToken(_0x3b11a6[1]) : this.log("获取code失败[" + _0x3da8f8 + "]");
    } catch (_0x2cd175) {
      console.log(_0x2cd175);
    }
  }
  async codeToken(_0x5cb349, _0x3813b5 = {}) {
    try {
      const _0x3eb299 = {
        usercode: _0x5cb349
      };
      const _0x32536b = {
        fn: "codeToken",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
        json: _0x3eb299
      };
      let {
          result: _0x2da59d,
          statusCode: _0x52dfa3
        } = await this.request(_0x32536b),
        _0xe01b88 = _0x216b05.get(_0x2da59d, "code", -1);
      if (_0xe01b88 == 0) {
        this.xtoken = _0x2da59d?.["data"]?.["token"];
        this.got = this.got.extend({
          headers: {
            Authorization: "Bearer " + _0x2cacf9.encrypt(this.xtoken, "base64")
          }
        });
      } else {
        let _0xc16dba = _0x2da59d?.["msg"] || _0x2da59d?.["resoultMsg"] || _0x2da59d?.["error"] || _0x2da59d?.["msg"] || "";
        this.log("获取token失败[" + _0xe01b88 + "]: " + _0xc16dba);
      }
    } catch (_0x816fbf) {
      console.log(_0x816fbf);
    }
  }
  async watchLiveInit(_0x3f1656 = {}) {
    try {
      let _0x293e74 = Math.floor(Math.random() * 1000) + 1000;
      const _0xe65d3e = {
        period: 1,
        liveId: _0x293e74
      };
      const _0x532139 = {
        fn: "watchLiveInit",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLiveInit",
        json: _0xe65d3e
      };
      let {
          result: _0x12a3e8,
          statusCode: _0x45cf9e
        } = await this.request(_0x532139),
        _0xeddb23 = _0x216b05.get(_0x12a3e8, "code", -1);
      if (_0xeddb23 == 0) {
        await _0x216b05.wait(15000);
        await this.watchLive(_0x293e74, _0x12a3e8?.["data"]);
      } else {
        let _0x407c48 = _0x12a3e8?.["msg"] || _0x12a3e8?.["resoultMsg"] || _0x12a3e8?.["error"] || _0x12a3e8?.["msg"] || "";
        this.log("开始观看直播[" + _0x293e74 + "]失败[" + _0xeddb23 + "]: " + _0x407c48);
      }
    } catch (_0x2a909b) {
      console.log(_0x2a909b);
    }
  }
  async watchLive(_0x1840b8, _0x3a3ceb, _0x2258f8 = {}) {
    try {
      const _0x2ff3aa = {
        period: 1,
        liveId: _0x1840b8,
        key: _0x3a3ceb
      };
      const _0x19476c = {
        fn: "watchLive",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLive",
        json: _0x2ff3aa
      };
      let {
          result: _0x110ebb,
          statusCode: _0x496c79
        } = await this.request(_0x19476c),
        _0x53f4d1 = _0x216b05.get(_0x110ebb, "code", -1);
      if (_0x53f4d1 == 0) {
        this.log("观看直播[" + _0x1840b8 + "]成功");
        await this.watchLiveInit();
      } else {
        let _0x1e91c4 = _0x110ebb?.["msg"] || _0x110ebb?.["resoultMsg"] || _0x110ebb?.["error"] || _0x110ebb?.["msg"] || "";
        this.log("观看直播[" + _0x1840b8 + "]失败[" + _0x53f4d1 + "]: " + _0x1e91c4);
      }
    } catch (_0x3ca122) {
      console.log(_0x3ca122);
    }
  }
  async watchVideo(_0x8c8f20, _0x1c4d98 = {}) {
    try {
      const _0x3d378d = {
        articleId: _0x8c8f20
      };
      const _0x122a26 = {
        fn: "watchVideo",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchVideo",
        json: _0x3d378d
      };
      let {
          result: _0xa2ae0c,
          statusCode: _0x59e985
        } = await this.request(_0x122a26),
        _0x3d20fb = _0x216b05.get(_0xa2ae0c, "code", -1);
      if (_0x3d20fb == 0) {
        this.log("观看短视频[" + _0x8c8f20 + "]成功");
      } else {
        let _0x223a1c = _0xa2ae0c?.["msg"] || _0xa2ae0c?.["resoultMsg"] || _0xa2ae0c?.["error"] || _0xa2ae0c?.["msg"] || "";
        this.log("观看短视频[" + _0x8c8f20 + "]失败[" + _0x3d20fb + "]: " + _0x223a1c);
      }
    } catch (_0x261c8b) {
      console.log(_0x261c8b);
    }
  }
  async like(_0x9f3f94, _0x28023b = {}) {
    try {
      const _0x2a9472 = {
        account: this.name,
        liveId: _0x9f3f94
      };
      const _0x471319 = {
        fn: "like",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/room/like",
        json: _0x2a9472
      };
      let {
          result: _0x29a43b,
          statusCode: _0x2b71d9
        } = await this.request(_0x471319),
        _0x1bd7e7 = _0x216b05.get(_0x29a43b, "code", -1);
      if (_0x1bd7e7 == 0) {
        this.log("点赞直播间[" + _0x9f3f94 + "]成功");
      } else {
        let _0x422c4a = _0x29a43b?.["msg"] || _0x29a43b?.["resoultMsg"] || _0x29a43b?.["error"] || _0x29a43b?.["msg"] || "";
        this.log("点赞直播间[" + _0x9f3f94 + "]失败[" + _0x1bd7e7 + "]: " + _0x422c4a);
      }
    } catch (_0x92f09) {
      console.log(_0x92f09);
    }
  }
  async sharingGetGold(_0x3c4a55 = {}) {
    try {
      let _0x1f4703 = {
          fn: "sharingGetGold",
          method: "post",
          url: "https://appfuwu.189.cn:9021/query/sharingGetGold",
          json: {
            headerInfos: {
              code: "sharingGetGold",
              timestamp: _0x216b05.time("yyyyMMddhhmmss"),
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
          result: _0x3414da,
          statusCode: _0x3e123c
        } = await this.request(_0x1f4703),
        _0x1118e8 = _0x216b05.get(_0x3414da?.["responseData"], "resultCode", -1);
      if (_0x1118e8 == "0000") {
        this.log("分享成功");
      } else {
        let _0x2063bf = _0x3414da?.["msg"] || _0x3414da?.["responseData"]?.["resultDesc"] || _0x3414da?.["error"] || _0x3414da?.["msg"] || "";
        this.log("分享失败[" + _0x1118e8 + "]: " + _0x2063bf);
      }
    } catch (_0x3d8fb1) {
      console.log(_0x3d8fb1);
    }
  }
  async month_jml_preCost(_0x45a804 = {}) {
    try {
      let _0x4c2286 = {
          fn: "month_jml_preCost",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/short/message/preCost",
          json: {
            phone: this.encode_aes(this.name),
            activityCode: "shortMesssge"
          }
        },
        {
          result: _0x20de83,
          statusCode: _0x5d9e91
        } = await this.request(_0x4c2286),
        _0x1435fc = _0x216b05.get(_0x20de83, "resoultCode", _0x5d9e91);
      if (_0x1435fc == 0) {
        let _0x11d0d6 = _0x20de83?.["data"]?.["resoultMsg"] || "领取成功";
        this.jml_tokenFlag = _0x20de83?.["resoultMsg"];
        await this.month_jml_userCost(_0x11d0d6);
        await this.month_jml_receive();
        await this.month_jml_getCount();
        await this.month_jml_refresh();
      } else {
        let _0x3499f0 = _0x20de83?.["msg"] || _0x20de83?.["resoultMsg"] || _0x20de83?.["error"] || "";
        this.log("每月见面礼登录失败[" + _0x1435fc + "]: " + _0x3499f0);
      }
    } catch (_0x5ad3fb) {
      console.log(_0x5ad3fb);
    }
  }
  async month_jml_userCost(_0x1c2c92, _0x26d9d3 = {}) {
    try {
      let _0xb062a0 = {
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
          result: _0x3efa1e,
          statusCode: _0xd9e1ea
        } = await this.request(_0xb062a0),
        _0x571a80 = _0x216b05.get(_0x3efa1e, "resoultCode", _0xd9e1ea);
      if (_0x571a80 == 0) {
        let _0x33544e = _0x3efa1e?.["data"]?.["map"](_0x49d1f3 => "[" + _0x49d1f3.pizeName + "]") || [];
        this.log("见面礼" + _0x1c2c92 + ": " + _0x33544e.join(", "));
      } else {
        let _0x5ce73e = _0x3efa1e?.["msg"] || _0x3efa1e?.["resoultMsg"] || _0x3efa1e?.["error"] || "";
        this.log("领取每月见面礼失败[" + _0x571a80 + "]: " + _0x5ce73e);
      }
    } catch (_0x5965ec) {
      console.log(_0x5965ec);
    }
  }
  async month_jml_receive(_0x362143 = {}) {
    try {
      const _0x55c088 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x21ab77 = {
          fn: "month_jml_receive",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/receive",
          json: {
            para: this.encrypt_para(_0x55c088)
          }
        },
        {
          result: _0x5dfbd6,
          statusCode: _0x42ab59
        } = await this.request(_0x21ab77),
        _0x363ea9 = _0x216b05.get(_0x5dfbd6, "code", -1);
      if (_0x363ea9 == 0) {
        this.log("领取APP抽奖次数成功");
      } else {
        let _0x4962e3 = _0x5dfbd6?.["msg"] || _0x5dfbd6?.["resoultMsg"] || _0x5dfbd6?.["error"] || "";
        this.log("领取APP抽奖次数失败[" + _0x363ea9 + "]: " + _0x4962e3);
      }
    } catch (_0x53c802) {
      console.log(_0x53c802);
    }
  }
  async month_jml_getCount(_0x4a8ebd = {}) {
    try {
      const _0x260fa6 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x101d98 = {
          fn: "month_jml_getCount",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/getCount",
          json: {
            para: this.encrypt_para(_0x260fa6)
          }
        },
        {
          result: _0x42a5a1,
          statusCode: _0x5ecfcf
        } = await this.request(_0x101d98),
        _0x4191d7 = _0x216b05.get(_0x42a5a1, "code", -1);
      if (_0x4191d7 == 0) {
        let _0x2f3f3d = _0x42a5a1?.["video"]?.["map"](_0x1539f2 => _0x1539f2.videoType) || [],
          _0x246041 = _0x5c2742.filter(_0x57d9f0 => !_0x2f3f3d.includes(_0x57d9f0)),
          _0x24f4c9 = false;
        for (let _0x34637b of _0x246041) {
          if (_0x24f4c9) {
            let _0x59978a = Math.floor(Math.random() * 5000) + 3000;
            await _0x216b05.wait(_0x59978a);
          }
          await this.month_jml_addVideoCount(_0x34637b);
          _0x24f4c9 = true;
        }
      } else {
        let _0x46c8d1 = _0x42a5a1?.["msg"] || _0x42a5a1?.["resoultMsg"] || _0x42a5a1?.["error"] || "";
        this.log("查询看视频得抽奖机会次数失败[" + _0x4191d7 + "]: " + _0x46c8d1);
      }
    } catch (_0x248025) {
      console.log(_0x248025);
    }
  }
  async month_jml_addVideoCount(_0xa85752, _0x322b78 = {}) {
    try {
      const _0x1f7331 = {
        phone: this.name,
        videoType: _0xa85752,
        flag: this.jml_tokenFlag
      };
      let _0x589379 = {
          fn: "month_jml_addVideoCount",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/addVideoCount",
          json: {
            para: this.encrypt_para(_0x1f7331)
          }
        },
        {
          result: _0x59aadb,
          statusCode: _0x1850cd
        } = await this.request(_0x589379),
        _0x596e50 = _0x216b05.get(_0x59aadb, "code", -1);
      if (_0x596e50 == 0) {
        this.log("看视频[" + _0xa85752 + "]得抽奖机会成功");
      } else {
        let _0x496370 = _0x59aadb?.["msg"] || _0x59aadb?.["resoultMsg"] || _0x59aadb?.["error"] || "";
        this.log("看视频[" + _0xa85752 + "]得抽奖机会失败[" + _0x596e50 + "]: " + _0x496370);
      }
    } catch (_0x39bba8) {
      console.log(_0x39bba8);
    }
  }
  async month_jml_refresh(_0xd4f00d = {}) {
    try {
      const _0x1ee74b = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x33a85f = {
          fn: "month_jml_refresh",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/refresh",
          json: {
            para: this.encrypt_para(_0x1ee74b)
          }
        },
        {
          result: _0x455259,
          statusCode: _0x263fdb
        } = await this.request(_0x33a85f),
        _0x519ca4 = _0x216b05.get(_0x455259, "code", -1);
      if (_0x519ca4 == -1) {
        let _0x27a95d = _0x455259?.["rNumber"] || 0;
        this.log("可以抽奖" + _0x27a95d + "次");
        let _0x58ecd4 = false;
        while (_0x27a95d-- > 0) {
          if (_0x58ecd4) {
            let _0xa1d574 = Math.floor(Math.random() * 5000) + 3000;
            await _0x216b05.wait(_0xa1d574);
          }
          await this.month_jml_lotteryRevice();
          _0x58ecd4 = true;
        }
      } else {
        let _0x3533e1 = _0x455259?.["msg"] || _0x455259?.["resoultMsg"] || _0x455259?.["error"] || "";
        this.log("查询抽奖次数失败[" + _0x519ca4 + "]: " + _0x3533e1);
      }
    } catch (_0x22e9e3) {
      console.log(_0x22e9e3);
    }
  }
  async month_jml_lotteryRevice(_0x5f1405 = {}) {
    try {
      const _0x29418b = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x43df4d = {
          fn: "month_jml_lotteryRevice",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/lotteryRevice",
          json: {
            para: this.encrypt_para(_0x29418b)
          }
        },
        {
          result: _0x4a5058,
          statusCode: _0x2c9cf1
        } = await this.request(_0x43df4d),
        _0x1886ac = _0x216b05.get(_0x4a5058, "code", -1);
      if (_0x1886ac == 0) {
        let {
          rname: _0x5c4fda,
          id: _0x14a3d8
        } = _0x4a5058;
        const _0x380226 = {
          notify: true
        };
        this.log("每月见面礼抽奖: " + _0x5c4fda, _0x380226);
      } else {
        let _0x147940 = _0x4a5058?.["msg"] || _0x4a5058?.["resoultMsg"] || _0x4a5058?.["error"] || "";
        this.log("每月见面礼抽奖失败[" + _0x1886ac + "]: " + _0x147940);
      }
    } catch (_0x341417) {
      console.log(_0x341417);
    }
  }
  async rpc_request(_0x23e985, _0x1f459a = "get", _0x2834f5 = null) {
    const _0x1066b9 = new Error(),
      _0x83835a = _0x1066b9.stack,
      _0x1a1fa6 = _0x83835a.split("\n"),
      _0x1d46c3 = _0x1a1fa6?.[2]?.["match"](/UserClass\.(\w+)/)?.[1] || "rpc";
    let _0x7c433d = {
      fn: _0x1d46c3,
      method: "post",
      url: _0x6f6b7c,
      json: {
        key: _0x2fd22b,
        method: _0x1f459a,
        url: _0x23e985.toString(),
        headers: this.get_mall_headers(),
        data: JSON.stringify(_0x2834f5)
      }
    };
    return await this.request(_0x7c433d);
  }
  async auth_login(_0x3ec9f2 = {}) {
    let _0x430c31 = false;
    try {
      let _0x4bc1cd = this.ticket,
        _0x2fbe89 = new URL("https://wapact.189.cn:9001/unified/user/login"),
        _0x99331d = {
          ticket: _0x4bc1cd,
          backUrl: encodeURIComponent("https://wapact.189.cn:9001/JinDouMall/JinDouMall_luckDraw.html?ticket=" + _0x4bc1cd),
          platformCode: "P201010301",
          loginType: 2
        },
        {
          result: _0x3d8dba,
          statusCode: _0x12f4e0
        } = await this.rpc_request(_0x2fbe89, "POST", _0x99331d),
        _0x183a65 = _0x216b05.get(_0x3d8dba, "code", _0x12f4e0);
      if (_0x183a65 == 0) {
        let {
          token: _0x10bc69,
          sessionId: _0x3526bc
        } = _0x3d8dba?.["biz"];
        this.mall_token = _0x10bc69;
        _0x430c31 = true;
      } else {
        let _0x3302b4 = _0x216b05.get(_0x3d8dba, "message", "");
        this.log("商城登录失败[" + _0x183a65 + "]: " + _0x3302b4);
      }
    } catch (_0x43dcfb) {
      console.log(_0x43dcfb);
    } finally {
      return _0x430c31;
    }
  }
  async queryInfo(_0x1fa9b0 = {}) {
    try {
      let _0x160861 = new URL("https://wapact.189.cn:9001/gateway/golden/api/queryInfo");
      _0x160861.searchParams.append("_", Date.now().toString());
      let {
          result: _0x809421,
          statusCode: _0x5068d6
        } = await this.rpc_request(_0x160861),
        _0x99e5b6 = _0x216b05.get(_0x809421, "code", _0x5068d6);
      if (_0x99e5b6 == 0) {
        this.coin = _0x809421?.["biz"]?.["amountTotal"] || this.coin;
        await this.queryTurnTable();
      } else {
        let _0x2cf897 = _0x216b05.get(_0x809421, "message", "");
        this.log("查询商城状态失败[" + _0x99e5b6 + "]: " + _0x2cf897);
      }
    } catch (_0x43ee2d) {
      console.log(_0x43ee2d);
    }
  }
  async queryTurnTable(_0x3ba8c4 = {}) {
    try {
      let _0x40c915 = new URL("https://wapact.189.cn:9001/gateway/golden/api/queryTurnTable");
      _0x40c915.searchParams.append("userType", "1");
      _0x40c915.searchParams.append("_", Date.now().toString());
      let {
          result: _0x146a97,
          statusCode: _0x45b396
        } = await this.rpc_request(_0x40c915),
        _0x485b59 = _0x216b05.get(_0x146a97, "code", _0x45b396);
      if (_0x485b59 == 0) {
        let _0x578a5d = _0x146a97?.["biz"]?.["xiaoHaoCount"] || 20,
          _0x403abf = _0x146a97?.["biz"]?.["wzTurntable"]?.["code"] || "";
        _0x403abf ? await this.lottery_check(_0x403abf, _0x578a5d) : this.log("没有获取到转盘抽奖ID");
      } else {
        let _0x47a5e7 = _0x216b05.get(_0x146a97, "message", "");
        this.log("获取转盘抽奖活动失败[" + _0x485b59 + "]: " + _0x47a5e7);
      }
    } catch (_0x3f12c7) {
      console.log(_0x3f12c7);
    }
  }
  async lottery_check(_0x54df09, _0x97ea01, _0x21735a = {}) {
    try {
      let _0x5831cf = new URL("https://wapact.189.cn:9001/gateway/stand/detail/check");
      _0x5831cf.searchParams.append("activityId", _0x54df09);
      _0x5831cf.searchParams.append("_", Date.now().toString());
      let {
          result: _0x48c1a7,
          statusCode: _0x949898
        } = await this.rpc_request(_0x5831cf),
        _0x2f9525 = _0x216b05.get(_0x48c1a7, "code", _0x949898);
      if (_0x2f9525 == 0) {
        let _0x50367b = _0x48c1a7?.["biz"]?.["resultInfo"]?.["chanceCount"] || 0;
        this.log("转盘可以抽奖" + _0x50367b + "次, 消耗金豆" + _0x97ea01 + "/" + this.coin);
        let _0x36a113 = false;
        while (_0x50367b-- > 0 && this.coin >= _0x97ea01) {
          if (_0x36a113) {
            await _0x216b05.wait(3000);
          }
          _0x36a113 = true;
          await this.lottery_do(_0x54df09, _0x97ea01);
        }
      } else {
        let _0x409416 = _0x216b05.get(_0x48c1a7, "message", "");
        this.log("查询转盘抽奖次数失败[" + _0x2f9525 + "]: " + _0x409416);
      }
    } catch (_0x52f839) {
      console.log(_0x52f839);
    }
  }
  async lottery_do(_0x4ed98e, _0x1af56b = {}) {
    try {
      let _0x386865 = new URL("https://wapact.189.cn:9001/gateway/golden/api/lottery");
      const _0x2caae2 = {
        activityId: _0x4ed98e
      };
      let {
          result: _0x21285a,
          statusCode: _0x2c7a06
        } = await this.rpc_request(_0x386865, "POST", _0x2caae2),
        _0x16d067 = _0x216b05.get(_0x21285a, "code", _0x2c7a06);
      if (_0x16d067 == 0) {
        this.coin = _0x21285a?.["biz"]?.["amountTotal"] || this.coin - xiaoHaoCount;
        let _0x16413a = _0x21285a?.["biz"]?.["resultCode"],
          _0x1a7676 = "";
        switch (_0x16413a) {
          case "0":
            {
              let _0x9946d6 = _0x21285a?.["biz"]?.["resultInfo"]?.["winTitle"] || "空气";
              const _0x2418ba = {
                notify: true
              };
              this.log("转盘抽奖: " + _0x9946d6, _0x2418ba);
              return;
            }
          case "412":
            {
              _0x1a7676 = "抽奖次数已达上限";
              break;
            }
          case "413":
          case "420":
            {
              _0x1a7676 = "金豆不足";
              break;
            }
          default:
            {
              this.log(": " + JSON.stringify(_0x21285a));
              _0x1a7676 = "未知原因";
              break;
            }
        }
        this.log("转盘抽奖失败[" + _0x16413a + "]: " + _0x1a7676);
      } else {
        let _0xb50df6 = _0x216b05.get(_0x21285a, "message", "");
        this.log("转盘抽奖错误[" + _0x16d067 + "]: " + _0xb50df6);
      }
    } catch (_0x57f200) {
      console.log(_0x57f200);
    }
  }
  async userTask() {
    const _0xabac06 = {
      notify: true
    };
    _0x216b05.log("\n======= 账号[" + this.index + "][" + this.name + "] =======", _0xabac06);
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
    await this.continueSignRecords();
    await this.homepage(_0x56d045.taskLong);
    await this.getParadiseInfo();
    if (_0x6f6b7c) {
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
  if (!(await _0x10375b())) {
    return;
  }
  _0x216b05.read_env(_0x4e2898);
  _0x4335f5();
  for (let _0x52cc6f of _0x216b05.userList) {
    await _0x52cc6f.userTask();
  }
})().catch(_0x6a4745 => _0x216b05.log(_0x6a4745)).finally(() => _0x216b05.exitNow());
async function _0x10375b(_0x44c914 = 0) {
  let _0x41eb06 = false;
  try {
    const _0x47c338 = {
      fn: "auth",
      method: "get",
      url: _0x2e7ab4,
      timeout: 20000
    };
    let {
      statusCode: _0x51d8d8,
      result: _0x1a1014
    } = await _0x25d788.request(_0x47c338);
    if (_0x51d8d8 != 200) {
      _0x44c914++ < _0x3d7878 && (_0x41eb06 = await _0x10375b(_0x44c914));
      return _0x41eb06;
    }
    if (_0x1a1014?.["code"] == 0) {
      _0x1a1014 = JSON.parse(_0x1a1014.data.file.data);
      if (_0x1a1014?.["commonNotify"] && _0x1a1014.commonNotify.length > 0) {
        const _0x1d5a8c = {
          notify: true
        };
        _0x216b05.log(_0x1a1014.commonNotify.join("\n") + "\n", _0x1d5a8c);
      }
      _0x1a1014?.["commonMsg"] && _0x1a1014.commonMsg.length > 0 && _0x216b05.log(_0x1a1014.commonMsg.join("\n") + "\n");
      if (_0x1a1014[_0x1abba9]) {
        let _0x29d79f = _0x1a1014[_0x1abba9];
        _0x29d79f.status == 0 ? _0x54aa8e >= _0x29d79f.version ? (_0x41eb06 = true, _0x216b05.log(_0x29d79f.msg[_0x29d79f.status]), _0x216b05.log(_0x29d79f.updateMsg), _0x216b05.log("现在运行的脚本版本是：" + _0x54aa8e + "，最新脚本版本：" + _0x29d79f.latestVersion)) : _0x216b05.log(_0x29d79f.versionMsg) : _0x216b05.log(_0x29d79f.msg[_0x29d79f.status]);
      } else {
        _0x216b05.log(_0x1a1014.errorMsg);
      }
    } else {
      _0x44c914++ < _0x3d7878 && (_0x41eb06 = await _0x10375b(_0x44c914));
    }
  } catch (_0x5cde4b) {
    _0x216b05.log(_0x5cde4b);
  } finally {
    return _0x41eb06;
  }
}
function _0x1194f6(_0x457cc8) {
  return new class {
    constructor(_0x11562f) {
      this.name = _0x11562f;
      this.startTime = Date.now();
      const _0x1fc995 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x1fc995);
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
    log(_0x371e0e, _0x3559e5 = {}) {
      const _0x47d926 = {
        console: true
      };
      Object.assign(_0x47d926, _0x3559e5);
      if (_0x47d926.time) {
        let _0x4ca76b = _0x47d926.fmt || "hh:mm:ss";
        _0x371e0e = "[" + this.time(_0x4ca76b) + "]" + _0x371e0e;
      }
      if (_0x47d926.notify) {
        this.notifyStr.push(_0x371e0e);
      }
      if (_0x47d926.console) {
        console.log(_0x371e0e);
      }
    }
    get(_0x9e2245, _0x15c776, _0x13da63 = "") {
      let _0x177645 = _0x13da63;
      _0x9e2245?.["hasOwnProperty"](_0x15c776) && (_0x177645 = _0x9e2245[_0x15c776]);
      return _0x177645;
    }
    pop(_0x2bf620, _0x4fc2c1, _0x51465f = "") {
      let _0x188103 = _0x51465f;
      _0x2bf620?.["hasOwnProperty"](_0x4fc2c1) && (_0x188103 = _0x2bf620[_0x4fc2c1], delete _0x2bf620[_0x4fc2c1]);
      return _0x188103;
    }
    copy(_0x3ff018) {
      return Object.assign({}, _0x3ff018);
    }
    read_env(_0x161ecb) {
      let _0x18956 = _0xb905e7.map(_0x463f84 => process.env[_0x463f84]);
      for (let _0x16bb33 of _0x18956.filter(_0x29e248 => !!_0x29e248)) {
        for (let _0x3bae8e of _0x16bb33.split(_0x3eaad7).filter(_0x2336d5 => !!_0x2336d5)) {
          if (this.userList.includes(_0x3bae8e)) {
            continue;
          }
          this.userList.push(new _0x161ecb(_0x3bae8e));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x6d2ac = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0xb905e7.map(_0x72db4 => "[" + _0x72db4 + "]").join("或"), _0x6d2ac);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x247c2b, _0xd19296 = null) {
      let _0xbd1909 = _0xd19296 ? new Date(_0xd19296) : new Date(),
        _0x1a5eab = {
          "M+": _0xbd1909.getMonth() + 1,
          "d+": _0xbd1909.getDate(),
          "h+": _0xbd1909.getHours(),
          "m+": _0xbd1909.getMinutes(),
          "s+": _0xbd1909.getSeconds(),
          "q+": Math.floor((_0xbd1909.getMonth() + 3) / 3),
          S: this.padStr(_0xbd1909.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x247c2b) && (_0x247c2b = _0x247c2b.replace(RegExp.$1, (_0xbd1909.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0xcaf68a in _0x1a5eab) new RegExp("(" + _0xcaf68a + ")").test(_0x247c2b) && (_0x247c2b = _0x247c2b.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1a5eab[_0xcaf68a] : ("00" + _0x1a5eab[_0xcaf68a]).substr(("" + _0x1a5eab[_0xcaf68a]).length)));
      return _0x247c2b;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x3744bc = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x3744bc.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x45fc4a, _0x5337d9, _0x1bc910 = {}) {
      let _0x14b896 = _0x1bc910.padding || "0",
        _0xa54348 = _0x1bc910.mode || "l",
        _0x4b2172 = String(_0x45fc4a),
        _0x183620 = _0x5337d9 > _0x4b2172.length ? _0x5337d9 - _0x4b2172.length : 0,
        _0x51a86e = "";
      for (let _0x2bf865 = 0; _0x2bf865 < _0x183620; _0x2bf865++) {
        _0x51a86e += _0x14b896;
      }
      _0xa54348 == "r" ? _0x4b2172 = _0x4b2172 + _0x51a86e : _0x4b2172 = _0x51a86e + _0x4b2172;
      return _0x4b2172;
    }
    json2str(_0x3e198c, _0xbcbac6, _0x10678f = false) {
      let _0x531cd4 = [];
      for (let _0x16013c of Object.keys(_0x3e198c).sort()) {
        let _0x7ed5f4 = _0x3e198c[_0x16013c];
        if (_0x7ed5f4 && _0x10678f) {
          _0x7ed5f4 = encodeURIComponent(_0x7ed5f4);
        }
        _0x531cd4.push(_0x16013c + "=" + _0x7ed5f4);
      }
      return _0x531cd4.join(_0xbcbac6);
    }
    str2json(_0x5227ba, _0x36df18 = false) {
      let _0x3a6f9f = {};
      for (let _0x5508fa of _0x5227ba.split("&")) {
        if (!_0x5508fa) {
          continue;
        }
        let _0x2ceaec = _0x5508fa.indexOf("=");
        if (_0x2ceaec == -1) {
          continue;
        }
        let _0x5c180a = _0x5508fa.substr(0, _0x2ceaec),
          _0x5d3e72 = _0x5508fa.substr(_0x2ceaec + 1);
        if (_0x36df18) {
          _0x5d3e72 = decodeURIComponent(_0x5d3e72);
        }
        _0x3a6f9f[_0x5c180a] = _0x5d3e72;
      }
      return _0x3a6f9f;
    }
    randomPattern(_0x1d180f, _0x4ef093 = "abcdef0123456789") {
      let _0xa98e2c = "";
      for (let _0x232aa7 of _0x1d180f) {
        if (_0x232aa7 == "x") {
          _0xa98e2c += _0x4ef093.charAt(Math.floor(Math.random() * _0x4ef093.length));
        } else {
          _0x232aa7 == "X" ? _0xa98e2c += _0x4ef093.charAt(Math.floor(Math.random() * _0x4ef093.length)).toUpperCase() : _0xa98e2c += _0x232aa7;
        }
      }
      return _0xa98e2c;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x2d7ecd, _0x3750f9 = "abcdef0123456789") {
      let _0x5f3fef = "";
      for (let _0x49ee1d = 0; _0x49ee1d < _0x2d7ecd; _0x49ee1d++) {
        _0x5f3fef += _0x3750f9.charAt(Math.floor(Math.random() * _0x3750f9.length));
      }
      return _0x5f3fef;
    }
    randomList(_0x36d9f6) {
      let _0x5f3fd5 = Math.floor(Math.random() * _0x36d9f6.length);
      return _0x36d9f6[_0x5f3fd5];
    }
    wait(_0x2067af) {
      return new Promise(_0x481783 => setTimeout(_0x481783, _0x2067af));
    }
    async exitNow() {
      await this.showmsg();
      let _0x53c948 = Date.now(),
        _0xf9aa3b = (_0x53c948 - this.startTime) / 1000;
      this.log("");
      const _0x1156f7 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0xf9aa3b + "秒", _0x1156f7);
      process.exit(0);
    }
    normalize_time(_0x2e774f, _0x5126cd = {}) {
      let _0x3c515a = _0x5126cd.len || this.default_timestamp_len;
      _0x2e774f = _0x2e774f.toString();
      let _0x105df4 = _0x2e774f.length;
      while (_0x105df4 < _0x3c515a) {
        _0x2e774f += "0";
      }
      _0x105df4 > _0x3c515a && (_0x2e774f = _0x2e774f.slice(0, 13));
      return parseInt(_0x2e774f);
    }
    async wait_until(_0x217e7b, _0x1f7b7c = {}) {
      let _0x82a5ab = _0x1f7b7c.logger || this,
        _0x3e1c5b = _0x1f7b7c.interval || this.default_wait_interval,
        _0x43702f = _0x1f7b7c.limit || this.default_wait_limit,
        _0x159277 = _0x1f7b7c.ahead || this.default_wait_ahead;
      if (typeof _0x217e7b == "string" && _0x217e7b.includes(":")) {
        if (_0x217e7b.includes("-")) {
          _0x217e7b = new Date(_0x217e7b).getTime();
        } else {
          let _0x24536b = this.time("yyyy-MM-dd ");
          _0x217e7b = new Date(_0x24536b + _0x217e7b).getTime();
        }
      }
      let _0x15ab1c = this.normalize_time(_0x217e7b) - _0x159277,
        _0xf47257 = this.time("hh:mm:ss.S", _0x15ab1c),
        _0x294aea = Date.now();
      _0x294aea > _0x15ab1c && (_0x15ab1c += 86400000);
      let _0x283a72 = _0x15ab1c - _0x294aea;
      if (_0x283a72 > _0x43702f) {
        const _0x3ec52b = {
          time: true
        };
        _0x82a5ab.log("离目标时间[" + _0xf47257 + "]大于" + _0x43702f / 1000 + "秒,不等待", _0x3ec52b);
      } else {
        const _0x33fd55 = {
          time: true
        };
        _0x82a5ab.log("离目标时间[" + _0xf47257 + "]还有" + _0x283a72 / 1000 + "秒,开始等待", _0x33fd55);
        while (_0x283a72 > 0) {
          let _0x111cce = Math.min(_0x283a72, _0x3e1c5b);
          await this.wait(_0x111cce);
          _0x294aea = Date.now();
          _0x283a72 = _0x15ab1c - _0x294aea;
        }
        const _0x39bc7b = {
          time: true
        };
        _0x82a5ab.log("已完成等待", _0x39bc7b);
      }
    }
    async wait_gap_interval(_0x370cf5, _0x4c501d) {
      let _0x2884b7 = Date.now() - _0x370cf5;
      _0x2884b7 < _0x4c501d && (await this.wait(_0x4c501d - _0x2884b7));
    }
  }(_0x457cc8);
}