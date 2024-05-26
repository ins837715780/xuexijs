/*
顺丰速运 v2.19

包含积分任务, 采蜜游戏, 顺丰会员日

采蜜游戏入口: 我的-积分抽奖-拉到最下面收件兑奖
积分可以换快递优惠券,爱奇艺周卡,肯德基代金券和各种实物
采蜜的蜂蜜可以换快递券和实物
默认不运行采蜜游戏, 需要运行的设置变量 sfsyBee 为true (字符串true)
export sfsyBee="true"

打开小程序或APP-我的-积分, 捉以下几种url之一,把整个url放到变量 sfsyUrl 里,多账号换行分割
https://mcs-mimp-web.sf-express.com/mcs-mimp/share/weChat/shareGiftReceiveRedirect
https://mcs-mimp-web.sf-express.com/mcs-mimp/share/app/shareRedirect
每天跑一到两次就行

cron: 11 12,18 * * *
const $ = new Env("顺丰速运");
*/
const _0x48fae2 = _0x43ee01("顺丰速运"),
  _0x12390c = require("got"),
  _0x2fc3df = require("crypto-js"),
  {
    CookieJar: _0x4dddc9
  } = require("tough-cookie"),
  _0x2bcd51 = "sfsy",
  _0x3606f0 = /[\n]/,
  _0x2e2a03 = [_0x2bcd51 + "Url"],
  _0x4a4977 = process.env[_0x2bcd51 + "Bee"] || "false",
  _0x129508 = 8000,
  _0x6e9601 = 3;
const _0xbb27d8 = 2.21,
  _0x375e27 = "sfsy",
  _0x10a462 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x416ed4 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x375e27 + ".json",
  _0x4e068d = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  _0x5ca23f = "wwesldfs29aniversaryvdld29",
  _0x155333 = "MCS-MIMP-CORE",
  _0x3407f7 = "czflqdlhbxcx",
  _0x54e565 = "wxwd26mem1",
  _0x427bdd = {
    BAOZHU_CARD: "[爆竹卡]",
    CHUNLIAN_CARD: "[春联卡]",
    DENGLONG_CARD: "[灯笼卡]",
    HONGBAO_CARD: "[红包卡]",
    YUANXIAO_CARD: "[元宵卡]",
    CHUANGHUA_CARD: "[窗花卡]",
    COMMON_CARD: "[万能卡]"
  };
const _0x1d64b9 = {
  PUSH_TIMES: "推金币次数",
  COIN: "金币",
  WELFARE_CARD: "财富卡",
  RICH_CARD_GAME: "发财卡"
};
const _0xf6b138 = "YEAR_END_2023",
  _0x51d69b = "ANNIVERSARY_2024",
  _0x4b9d76 = "MEMBER_DAY",
  _0x148a2e = "DRAGONBOAT_2024",
  _0x57cac7 = 8,
  _0x24fae8 = 1 << _0x57cac7 - 1,
  _0x1be432 = ["完成连签7天", "参与积分活动", "每月累计寄件", "完成每月任务", "与好友微信分享会员福利", "DAILY_VIP_TASK_TYPE", "去新增一个收件偏好", "用行业模板寄件下单"];
let _0x567431 = [],
  _0x2193de = {};
class _0x1373e1 {
  constructor() {
    this.index = _0x48fae2.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x51f355 = {
      limit: 0
    };
    const _0x3156ea = {
      Connection: "keep-alive"
    };
    const _0x3a68cf = {
      retry: _0x51f355,
      timeout: _0x129508,
      followRedirect: false,
      headers: _0x3156ea
    };
    this.got = _0x12390c.extend(_0x3a68cf);
  }
  log(_0x2ae315, _0x3fbfa5 = {}) {
    var _0xe21cf0 = "",
      _0x52cae0 = _0x48fae2.userCount.toString().length;
    if (this.index) {
      _0xe21cf0 += "账号[" + _0x48fae2.padStr(this.index, _0x52cae0) + "]";
    }
    if (this.name) {
      _0xe21cf0 += "[" + this.name + "]";
    }
    _0x48fae2.log(_0xe21cf0 + _0x2ae315, _0x3fbfa5);
  }
  async request(_0x5e2905) {
    const _0x2fea2e = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x27e2a3 = ["TimeoutError"];
    var _0x4a3c9d = null,
      _0xd3d5e2 = 0,
      _0x52fc58 = _0x5e2905.fn || _0x5e2905.url;
    _0x5e2905.method = _0x5e2905?.["method"]?.["toUpperCase"]() || "GET";
    let _0x156c7f;
    while (_0xd3d5e2 < _0x6e9601) {
      try {
        _0xd3d5e2++;
        _0x156c7f = null;
        let _0x1ce3e4 = null,
          _0x24e6ad = _0x5e2905?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x129508,
          _0x21ac48 = false;
        await new Promise(async _0x34d43f => {
          setTimeout(() => {
            _0x21ac48 = true;
            _0x34d43f();
          }, _0x24e6ad);
          await this.got(_0x5e2905).then(_0x1aff10 => {
            _0x4a3c9d = _0x1aff10;
          }, _0x58616d => {
            _0x1ce3e4 = _0x58616d;
            _0x4a3c9d = _0x58616d.response;
            _0x156c7f = _0x1ce3e4?.["code"];
          });
          _0x34d43f();
        });
        if (_0x21ac48) {
          this.log("[" + _0x52fc58 + "]请求超时(" + _0x24e6ad / 1000 + "秒)，重试第" + _0xd3d5e2 + "次");
        } else {
          if (_0x27e2a3.includes(_0x1ce3e4?.["name"])) {
            this.log("[" + _0x52fc58 + "]请求超时(" + _0x1ce3e4.code + ")，重试第" + _0xd3d5e2 + "次");
          } else {
            if (_0x2fea2e.includes(_0x1ce3e4?.["code"])) {
              this.log("[" + _0x52fc58 + "]请求错误(" + _0x1ce3e4.code + ")，重试第" + _0xd3d5e2 + "次");
            } else {
              let _0x113d8e = _0x4a3c9d?.["statusCode"] || 999,
                _0x16c62c = _0x113d8e / 100 | 0;
              if (_0x16c62c > 3) {
                this.log("请求[" + _0x52fc58 + "]返回[" + _0x113d8e + "]");
              }
              if (_0x16c62c <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x1b3e69) {
        _0x1b3e69.name == "TimeoutError" ? this.log("[" + _0x52fc58 + "]请求超时，重试第" + _0xd3d5e2 + "次") : this.log("[" + _0x52fc58 + "]请求错误(" + _0x1b3e69.message + ")，重试第" + _0xd3d5e2 + "次");
      }
    }
    if (_0x4a3c9d == null) {
      return Promise.resolve({
        statusCode: _0x156c7f || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x1c86b1,
      headers: _0x5b93fa,
      body: _0x138b65
    } = _0x4a3c9d;
    if (_0x138b65) {
      try {
        _0x138b65 = JSON.parse(_0x138b65);
      } catch {}
    }
    const _0x3fb312 = {
      statusCode: _0x1c86b1,
      headers: _0x5b93fa,
      result: _0x138b65
    };
    return Promise.resolve(_0x3fb312);
  }
}
let _0x41e2cc = new _0x1373e1();
class _0x1799fa extends _0x1373e1 {
  constructor(_0x438e15) {
    super();
    this.refreshUrl = _0x438e15;
    this.cookieJar = new _0x4dddc9();
    this.deviceId = _0x48fae2.randomPattern("xxxxxxxx-xxxx-xxxx");
    this.jika_black = false;
    this.anniversary_black = false;
    this.dragonBoat_black = false;
    this.memberDay_black = false;
    this.memberDay_redPacket_drewToday = false;
    this.memberDay_redPacket_map = {};
    const _0x230bbb = {
      "User-Agent": _0x4e068d
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x230bbb
    });
  }
  getSign(_0x76acdc = {}) {
    let _0x4b899c = Date.now(),
      _0xd0097e = "token=" + _0x5ca23f + "&timestamp=" + _0x4b899c + "&sysCode=" + _0x155333,
      _0x3a7a87 = _0x2fc3df.MD5(_0xd0097e).toString();
    const _0x593eb6 = {
      platform: "MINI_PROGRAM",
      channel: _0x54e565,
      sysCode: _0x155333,
      timestamp: _0x4b899c,
      signature: _0x3a7a87
    };
    return _0x593eb6;
  }
  async refresh_cookie(_0x5ab687 = {}) {
    let _0x2b0e92 = false;
    try {
      const _0x5bdc1c = {
        fn: "refresh_cookie",
        method: "get",
        url: this.refreshUrl
      };
      let {
        statusCode: _0x4a1019,
        headers: _0x37d378
      } = await this.request(_0x5bdc1c);
      if (_0x4a1019 == 302) {
        for (let _0x4f1c0b of _0x37d378["set-cookie"]) {
          if (_0x4f1c0b.includes("_login_mobile_")) {
            let _0x315ace = _0x4f1c0b.match(/_login_mobile_=(\d+);/);
            _0x315ace && (this.name = _0x315ace[1]);
            break;
          }
        }
        _0x2b0e92 = true;
        this.log("登录成功");
      } else {
        this.log("登录失败[" + _0x4a1019 + "]");
      }
    } catch (_0x27fc0c) {
      console.log(_0x27fc0c);
    } finally {
      return _0x2b0e92;
    }
  }
  async personalInfo(_0x1e17d3 = {}) {
    try {
      let _0x52fccf = {
          fn: "personalInfo",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/member/personalInfo",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x2ae208
        } = await this.request(_0x52fccf);
      if (_0x2ae208?.["success"]) {
        const _0x2f383f = {
          notify: true
        };
        this.log("积分: " + _0x2ae208.obj.availablePoints, _0x2f383f);
      } else {
        this.log("查询账号信息失败: " + (_0x2ae208?.["errorMessage"] || (_0x2ae208 ? JSON.stringify(_0x2ae208) : "无返回")));
      }
    } catch (_0x14dc2d) {
      console.log(_0x14dc2d);
    }
  }
  async queryUserInfo(_0x454f9a = {}) {
    try {
      let _0x41d12a = {
          fn: "queryUserInfo",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~queryUserInfo",
          headers: {
            ...this.getSign()
          },
          json: {
            sysCode: "ESG-CEMP-CORE",
            optionalColumns: ["usablePoint", "cycleSub", "leavePoint"],
            token: "zeTLTYeG0bLetfRk"
          }
        },
        {
          result: _0x381c6a
        } = await this.request(_0x41d12a);
      if (_0x381c6a?.["success"]) {
        let {
            usablePoint: _0x31a856,
            cycleAdd: _0x3dc4a8,
            cycleSub: _0x213310,
            leavePoint: _0x4eb1d5,
            pointClearCycle: _0x4f875b
          } = _0x381c6a.obj,
          _0x12b90f = "积分: " + _0x31a856,
          _0x2a10cb = _0x4eb1d5 - _0x213310,
          _0x29a1ee = new Date(_0x4f875b + " 00:00:00");
        _0x29a1ee.setFullYear(_0x29a1ee.getFullYear() + 1);
        let _0x1b11b8 = _0x29a1ee.getTime();
        if (_0x2a10cb > 0 && _0x1b11b8 > Date.now()) {
          let _0x48908a = _0x48fae2.time("yyyy-MM-dd", _0x1b11b8);
          _0x12b90f += ", 有" + _0x2a10cb + "积分将在" + _0x48908a + "过期";
        }
        const _0x2d0a82 = {
          notify: true
        };
        this.log(_0x12b90f, _0x2d0a82);
      } else {
        this.log("查询账号信息失败: " + (_0x381c6a?.["errorMessage"] || (_0x381c6a ? JSON.stringify(_0x381c6a) : "无返回")));
      }
    } catch (_0x49e8d1) {
      console.log(_0x49e8d1);
    }
  }
  async automaticSignFetchPackage(_0x3749c1 = {}) {
    try {
      let _0x10b0ba = {
          fn: "automaticSignFetchPackage",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage",
          headers: {
            ...this.getSign()
          },
          json: {
            comeFrom: _0x48fae2.get(_0x3749c1, "comeFrom", "vioin"),
            channelFrom: _0x48fae2.get(_0x3749c1, "channelFrom", "SFAPP")
          }
        },
        {
          result: _0x51ede6
        } = await this.request(_0x10b0ba);
      if (_0x51ede6?.["success"]) {
        _0x51ede6?.["obj"]?.["hasFinishSign"] ? this.log("今天已签到") : _0x51ede6?.["obj"]?.["integralTaskSignPackageVOList"]?.["length"] && this.log("签到获得: " + _0x51ede6?.["obj"]?.["integralTaskSignPackageVOList"]?.["map"](_0x22382f => _0x22382f.packetName)?.["join"](", "));
        await this.queryPointTaskAndSignFromES();
        const _0x5bfbf3 = {
          channelType: 3
        };
        await this.queryPointTaskAndSignFromES(_0x5bfbf3);
        await this.queryUserInfo();
      } else {
        this.log("查询签到失败: " + (_0x51ede6?.["errorMessage"] || (_0x51ede6 ? JSON.stringify(_0x51ede6) : "无返回")));
      }
    } catch (_0x3d4cd1) {
      console.log(_0x3d4cd1);
    }
  }
  async queryPointTaskAndSignFromES(_0x367216 = {}) {
    try {
      let _0x405511 = {
          fn: "queryPointTaskAndSignFromES",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES",
          headers: {
            ...this.getSign()
          },
          json: {
            deviceId: this.deviceId,
            channelType: String(_0x48fae2.get(_0x367216, "channelType", 1))
          }
        },
        {
          result: _0x4d166c
        } = await this.request(_0x405511);
      if (_0x4d166c?.["success"]) {
        for (let _0x5e25aa of _0x4d166c.obj.taskTitleLevels) {
          switch (_0x5e25aa.status) {
            case 2:
              if (_0x1be432.includes(_0x5e25aa.title)) {
                break;
              }
              await this.finishTask(_0x5e25aa);
            case 1:
              await this.fetchIntegral(_0x5e25aa);
              break;
            case 3:
              break;
            default:
              this.log("任务[" + _0x5e25aa.title + "] -- 未知状态[" + _0x5e25aa.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x4d166c?.["errorMessage"] || (_0x4d166c ? JSON.stringify(_0x4d166c) : "无返回")));
      }
    } catch (_0x2c0bbe) {
      console.log(_0x2c0bbe);
    }
  }
  async finishTask(_0x3b031, _0xbb770e = {}) {
    try {
      const _0x5bb0c9 = {
        taskCode: _0x3b031.taskCode
      };
      let _0x157ecd = {
          fn: "finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x5bb0c9
        },
        {
          result: _0x1e5949
        } = await this.request(_0x157ecd);
      _0x1e5949?.["success"] ? this.log("完成任务[" + _0x3b031.title + "]成功") : this.log("完成任务[" + _0x3b031.title + "]失败: " + (_0x1e5949?.["errorMessage"] || (_0x1e5949 ? JSON.stringify(_0x1e5949) : "无返回")));
    } catch (_0x3c3ee0) {
      console.log(_0x3c3ee0);
    }
  }
  async fetchIntegral(_0x411236, _0x48d6c7 = {}) {
    try {
      let _0x2bf1a4 = {
          fn: "fetchIntegral",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral",
          headers: {
            ...this.getSign()
          },
          json: {
            strategyId: _0x411236.strategyId,
            taskId: _0x411236.taskId,
            taskCode: _0x411236.taskCode,
            deviceId: this.deviceId
          }
        },
        {
          result: _0x2fe4e1
        } = await this.request(_0x2bf1a4);
      _0x2fe4e1?.["success"] ? this.log("领取任务[" + _0x411236.title + "]奖励: " + _0x2fe4e1.obj.point + "积分") : this.log("领取任务[" + _0x411236.title + "]奖励失败: " + (_0x2fe4e1?.["errorMessage"] || (_0x2fe4e1 ? JSON.stringify(_0x2fe4e1) : "无返回")));
    } catch (_0x1a9e40) {
      console.log(_0x1a9e40);
    }
  }
  async queryPointTaskAndSign(_0x3e0a40 = {}) {
    try {
      let _0x2d4827 = {
          fn: "queryPointTaskAndSign",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/queryPointTaskAndSign",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x48fae2.get(_0x3e0a40, "channel", "SFAPP"),
            pageType: _0x48fae2.get(_0x3e0a40, "pageType", "APP_MINE_TASK")
          }
        },
        {
          result: _0x39304c
        } = await this.request(_0x2d4827);
      if (_0x39304c?.["success"]) {
        for (let _0x62a8bb of _0x39304c?.["obj"]?.["taskTitleLevels"] || []) {
          if (_0x1be432.includes(_0x62a8bb.title)) {
            continue;
          }
          await this.scanPageToRecord(_0x62a8bb);
          await this.fetchPoint(_0x62a8bb);
        }
      } else {
        this.log("查询旧版任务失败: " + (_0x39304c?.["errorMessage"] || (_0x39304c ? JSON.stringify(_0x39304c) : "无返回")));
      }
    } catch (_0x2938b3) {
      console.log(_0x2938b3);
    }
  }
  async scanPageToRecord(_0xc02f38, _0x51624e = {}) {
    try {
      let _0x1ce002 = {
          fn: "scanPageToRecord",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/scanPageToRecord",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x48fae2.get(_0x51624e, "channel", "SFAPP"),
            pageType: _0xc02f38.pageType
          }
        },
        {
          result: _0x49c2ca
        } = await this.request(_0x1ce002);
      _0x49c2ca?.["success"] ? this.log("完成任务[" + _0xc02f38.title + "]成功") : this.log("完成任务[" + _0xc02f38.title + "]失败: " + (_0x49c2ca?.["errorMessage"] || (_0x49c2ca ? JSON.stringify(_0x49c2ca) : "无返回")));
    } catch (_0xa6dab2) {
      console.log(_0xa6dab2);
    }
  }
  async fetchPoint(_0x32f19c, _0x4cb21b = {}) {
    try {
      let _0x3aab8c = {
          fn: "fetchPoint",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/fetchPoint",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x48fae2.get(_0x4cb21b, "channel", "SFAPP"),
            pageType: _0x32f19c.pageType,
            deviceId: this.deviceId
          }
        },
        {
          result: _0x4d729f
        } = await this.request(_0x3aab8c);
      _0x4d729f?.["success"] ? this.log("领取任务[" + _0x32f19c.title + "]奖励成功") : this.log("领取任务[" + _0x32f19c.title + "]奖励失败: " + (_0x4d729f?.["errorMessage"] || (_0x4d729f ? JSON.stringify(_0x4d729f) : "无返回")));
    } catch (_0x17e1aa) {
      console.log(_0x17e1aa);
    }
  }
  async personalInfoNew(_0x124638 = {}) {
    try {
      let _0x53e49a = {
          fn: "personalInfoNew",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~personalInfoNew",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x2f65a9
        } = await this.request(_0x53e49a);
      if (_0x2f65a9?.["success"]) {
        this.userId = _0x2f65a9.obj.userId;
        const _0x258aec = {
          notify: true
        };
        this.log("积分: " + _0x2f65a9.obj.availablePoints, _0x258aec);
      } else {
        this.log("查询账号积分失败: " + (_0x2f65a9?.["errorMessage"] || (_0x2f65a9 ? JSON.stringify(_0x2f65a9) : "无返回")));
      }
    } catch (_0x13026d) {
      console.log(_0x13026d);
    }
  }
  async bee_indexData(_0x1ada50 = {}) {
    try {
      let _0x236f27 = _0x48fae2.randomList(_0x567431.filter(_0x40ca96 => _0x40ca96 != this.userId));
      const _0x4fb156 = {
        inviteUserId: _0x236f27
      };
      let _0x231459 = {
        fn: "bee_indexData",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~indexData",
        headers: {
          ...this.getSign()
        },
        json: _0x4fb156
      };
      {
        let {
          result: _0x57238b
        } = await this.request(_0x48fae2.copy(_0x231459));
        if (_0x57238b?.["success"]) {
          _0x57238b?.["obj"]?.["friendAwards"]?.["length"] && this.log("获得奖励: " + _0x57238b.obj.friendAwards.map(_0x582e28 => _0x582e28.name).join(","));
          let _0x2dfeaf = _0x57238b?.["obj"]?.["gameNum"] || 0;
          this.log("可以采蜜冒险" + _0x2dfeaf + "次");
          while (_0x2dfeaf-- > 0) {
            await this.bee_gameReport();
          }
          await this.bee_taskDetail();
        } else {
          const _0x33b2bf = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x57238b?.["errorMessage"] || (_0x57238b ? JSON.stringify(_0x57238b) : "无返回")), _0x33b2bf);
          return;
        }
      }
      {
        let {
          result: _0x28c8e9
        } = await this.request(_0x48fae2.copy(_0x231459));
        if (_0x28c8e9?.["success"]) {
          for (let _0x736ea6 of _0x28c8e9?.["obj"]?.["taskDetail"] || []) {
            await this.bee_receiveHoney(_0x736ea6);
          }
        } else {
          const _0x50bd82 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x28c8e9?.["errorMessage"] || (_0x28c8e9 ? JSON.stringify(_0x28c8e9) : "无返回")), _0x50bd82);
          return;
        }
      }
      {
        let {
          result: _0x399ee1
        } = await this.request(_0x48fae2.copy(_0x231459));
        if (_0x399ee1?.["success"]) {
          const _0x5dc57d = {
            notify: true
          };
          this.log("采蜜游戏丰蜜: " + (_0x399ee1?.["obj"]?.["usableHoney"] || 0), _0x5dc57d);
        } else {
          const _0x1fac59 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x399ee1?.["errorMessage"] || (_0x399ee1 ? JSON.stringify(_0x399ee1) : "无返回")), _0x1fac59);
          return;
        }
      }
    } catch (_0x287bcf) {
      console.log(_0x287bcf);
    }
  }
  async bee_receiveHoney(_0x7f418e, _0x19e709 = {}) {
    try {
      const _0x2a9bd6 = {
        taskType: _0x7f418e.type
      };
      let _0x129110 = {
          fn: "bee_receiveHoney",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~receiveHoney",
          headers: {
            ...this.getSign()
          },
          json: _0x2a9bd6
        },
        {
          result: _0x4018ad
        } = await this.request(_0x129110);
      _0x4018ad?.["success"] ? this.log("领取[" + _0x7f418e.type + "]奖励获得: " + _0x7f418e.value + "丰蜜") : this.log("领取[" + _0x7f418e.type + "]奖励失败: " + (_0x4018ad?.["errorMessage"] || (_0x4018ad ? JSON.stringify(_0x4018ad) : "无返回")));
    } catch (_0x16f788) {
      console.log(_0x16f788);
    }
  }
  async bee_gameReport(_0x140125 = {}) {
    try {
      let _0x400455 = 20;
      const _0xfc2130 = {
        gatherHoney: _0x400455
      };
      let _0x5e0123 = {
          fn: "bee_gameReport",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeGameService~gameReport",
          headers: {
            ...this.getSign()
          },
          json: _0xfc2130
        },
        {
          result: _0x26efb4
        } = await this.request(_0x5e0123);
      _0x26efb4?.["success"] ? this.log("采蜜冒险获得" + _0x400455 + "丰蜜") : this.log("采蜜冒险失败: " + (_0x26efb4?.["errorMessage"] || (_0x26efb4 ? JSON.stringify(_0x26efb4) : "无返回")));
    } catch (_0x14abb5) {
      console.log(_0x14abb5);
    }
  }
  async bee_taskDetail(_0x39306f = {}) {
    try {
      let _0xe559a = {
          fn: "bee_taskDetail",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~taskDetail",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x2f6d62
        } = await this.request(_0xe559a);
      if (_0x2f6d62?.["success"]) {
        for (let _0x513163 of _0x2f6d62.obj.list) {
          if (!_0x513163.taskCode) {
            continue;
          }
          switch (_0x513163.status) {
            case 2:
              if (_0x1be432.includes(_0x513163.taskType)) {
                break;
              }
              await this.bee_finishTask(_0x513163);
            case 1:
            case 3:
              break;
            default:
              this.log("任务[" + _0x513163.title + "] -- 未知状态[" + _0x513163.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x2f6d62?.["errorMessage"] || (_0x2f6d62 ? JSON.stringify(_0x2f6d62) : "无返回")));
      }
    } catch (_0x4d8d54) {
      console.log(_0x4d8d54);
    }
  }
  async bee_finishTask(_0x37ddaf, _0x52eb6f = {}) {
    try {
      const _0x1de51d = {
        taskCode: _0x37ddaf.taskCode
      };
      let _0x4d521b = {
          fn: "bee_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x1de51d
        },
        {
          result: _0x208a41
        } = await this.request(_0x4d521b);
      _0x208a41?.["success"] ? this.log("完成采蜜任务[" + _0x37ddaf.taskType + "]成功") : this.log("完成采蜜任务[" + _0x37ddaf.taskType + "]失败: " + (_0x208a41?.["errorMessage"] || (_0x208a41 ? JSON.stringify(_0x208a41) : "无返回")));
    } catch (_0x1d97e3) {
      console.log(_0x1d97e3);
    }
  }
  async superWelfare_receiveRedPacket(_0x510f1c = {}) {
    try {
      const _0x10a9fc = {
        channel: _0x3407f7
      };
      let _0xa2211e = {
          fn: "superWelfare_receiveRedPacket",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberActLengthy~redPacketActivityService~superWelfare~receiveRedPacket",
          headers: {
            ...this.getSign()
          },
          json: _0x10a9fc
        },
        {
          result: _0x4dd86c
        } = await this.request(_0xa2211e);
      if (_0x4dd86c?.["success"]) {
        let _0x511d49 = _0x4dd86c?.["obj"]?.["giftList"];
        if (_0x4dd86c?.["obj"]?.["extraGiftList"]?.["length"]) {
          _0x511d49 = _0x511d49.concat(_0x4dd86c.obj.extraGiftList);
        }
        let _0x4a7f30 = _0x511d49?.["map"](_0x1d2296 => _0x1d2296.giftName)?.["join"](", ") || "",
          _0x4da56f = _0x4dd86c?.["obj"]?.["receiveStatus"] == 1 ? "领取成功" : "已领取过";
        const _0x3dea03 = {
          notify: true
        };
        this.log("超值福利签到[" + _0x4da56f + "]: " + _0x4a7f30, _0x3dea03);
      } else {
        this.log("超值福利签到失败: " + (_0x4dd86c?.["errorMessage"] || (_0x4dd86c ? JSON.stringify(_0x4dd86c) : "无返回")));
      }
    } catch (_0x3ba421) {
      console.log(_0x3ba421);
    }
  }
  async memberDay_invite(_0x2cd41d = {}) {
    try {
      let _0x35975f = _0x48fae2.randomList(_0x567431.filter(_0x200f1e => _0x200f1e != this.userId));
      const _0x26fe7b = {
        inviteUserId: _0x35975f
      };
      let _0x3a982b = {
        fn: "memberDay_invite",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~index",
        headers: {
          ...this.getSign()
        },
        json: _0x26fe7b
      };
      await this.request(_0x3a982b);
      let {
        result: _0x1cfcd2
      } = await this.request(_0x3a982b);
      if (_0x1cfcd2?.["success"]) {
        let {
          canReceiveInviteAward: _0x5cf122,
          risk: _0x1381ea
        } = _0x1cfcd2?.["obj"];
        _0x5cf122 && (await this.memberDay_receiveInviteAward(_0x35975f));
        if (this.memberDay_black) {
          return;
        }
        await this.memberDay_index();
      } else {
        let _0x1cd36f = _0x1cfcd2?.["errorMessage"] || (_0x1cfcd2 ? JSON.stringify(_0x1cfcd2) : "无返回");
        this.log("查询会员日失败: " + _0x1cd36f);
        if (_0x1cd36f?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x3903e3 = {
            notify: true
          };
          this.log("会员日任务风控", _0x3903e3);
        }
      }
    } catch (_0x5e16ff) {
      console.log(_0x5e16ff);
    }
  }
  async memberDay_index(_0x4c8d65 = {}) {
    try {
      let _0x5797dc = {
          fn: "memberDay_index",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~index",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x4c021f
        } = await this.request(_0x5797dc);
      if (_0x4c021f?.["success"]) {
        let {
          lotteryNum: _0x2e7bc7,
          risk: _0x2c1867
        } = _0x4c021f?.["obj"];
        await this.memberDay_redPacketReceivedStatus();
        _0x2e7bc7 = _0x2e7bc7 || 0;
        this.log("会员日可以抽奖" + _0x2e7bc7 + "次");
        while (_0x2e7bc7-- > 0) {
          await this.memberDay_lottery();
        }
        if (this.memberDay_black) {
          return;
        }
        await this.memberDay_taskList();
        if (this.memberDay_black) {
          return;
        }
        await this.memberDay_redPacketStatus();
      } else {
        let _0x1d020e = _0x4c021f?.["errorMessage"] || (_0x4c021f ? JSON.stringify(_0x4c021f) : "无返回");
        this.log("查询会员日失败: " + _0x1d020e);
        if (_0x1d020e?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x1c0ce4 = {
            notify: true
          };
          this.log("会员日任务风控", _0x1c0ce4);
        }
      }
    } catch (_0x223c7e) {
      console.log(_0x223c7e);
    }
  }
  async memberDay_receiveInviteAward(_0x29e236, _0x673445 = {}) {
    try {
      const _0x38a51d = {
        inviteUserId: _0x29e236
      };
      let _0x293c08 = {
          fn: "memberDay_receiveInviteAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~receiveInviteAward",
          headers: {
            ...this.getSign()
          },
          json: _0x38a51d
        },
        {
          result: _0x1bd7a5
        } = await this.request(_0x293c08);
      if (_0x1bd7a5?.["success"]) {
        let {
          productName = "空气"
        } = _0x1bd7a5?.["obj"] || {};
        const _0x3a2c2c = {
          notify: true
        };
        this.log("会员日奖励: " + productName, _0x3a2c2c);
      } else {
        let _0x2ac5f5 = _0x1bd7a5?.["errorMessage"] || (_0x1bd7a5 ? JSON.stringify(_0x1bd7a5) : "无返回");
        this.log("领取会员日奖励失败: " + _0x2ac5f5);
        if (_0x2ac5f5?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x34e807 = {
            notify: true
          };
          this.log("会员日任务风控", _0x34e807);
        }
      }
    } catch (_0x141ef6) {
      console.log(_0x141ef6);
    }
  }
  async memberDay_lottery(_0x458f8c = {}) {
    try {
      let _0x2f0fbd = {
          fn: "memberDay_lottery",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayLotteryService~lottery",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x5154d5
        } = await this.request(_0x2f0fbd);
      if (_0x5154d5?.["success"]) {
        let {
          productName = "空气"
        } = _0x5154d5?.["obj"] || {};
        const _0x1a251d = {
          notify: true
        };
        this.log("会员日抽奖: " + productName, _0x1a251d);
      } else {
        let _0x5334a1 = _0x5154d5?.["errorMessage"] || (_0x5154d5 ? JSON.stringify(_0x5154d5) : "无返回");
        this.log("会员日抽奖失败: " + _0x5334a1);
        if (_0x5334a1?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x166cb3 = {
            notify: true
          };
          this.log("会员日任务风控", _0x166cb3);
        }
      }
    } catch (_0x5e2e6a) {
      console.log(_0x5e2e6a);
    }
  }
  async memberDay_taskList(_0x3d1a41 = {}) {
    try {
      let _0x3e4e80 = {
          fn: "memberDay_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0x4b9d76,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x587b85
        } = await this.request(_0x3e4e80);
      if (_0x587b85?.["success"]) {
        let _0x4c6786 = _0x587b85?.["obj"] || [];
        for (let _0x3b949d of _0x4c6786.filter(_0x2f92c3 => _0x2f92c3.status == 1)) {
          if (this.memberDay_black) {
            return;
          }
          await this.memberDay_fetchMixTaskReward(_0x3b949d);
        }
        for (let _0x3aa867 of _0x4c6786.filter(_0x537055 => _0x537055.status == 2)) {
          if (this.memberDay_black) {
            return;
          }
          switch (_0x3aa867.taskType) {
            case "SEND_SUCCESS":
            case "INVITEFRIENDS_PARTAKE_ACTIVITY":
            case "OPEN_SVIP":
            case "OPEN_NEW_EXPRESS_CARD":
            case "OPEN_FAMILY_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }
            default:
              {
                for (let _0x4f04bc = 0; _0x4f04bc < _0x3aa867.restFinishTime && !this.memberDay_black; _0x4f04bc++) {
                  await this.memberDay_finishTask(_0x3aa867);
                }
                break;
              }
          }
        }
      } else {
        let _0x1f6647 = _0x587b85?.["errorMessage"] || (_0x587b85 ? JSON.stringify(_0x587b85) : "无返回");
        this.log("查询会员日任务失败: " + _0x1f6647);
        if (_0x1f6647?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x551735 = {
            notify: true
          };
          this.log("会员日任务风控", _0x551735);
        }
      }
    } catch (_0x27e4c5) {
      console.log(_0x27e4c5);
    }
  }
  async memberDay_finishTask(_0x5f09ef, _0x14df85 = {}) {
    try {
      const _0x5b8cdc = {
        taskCode: _0x5f09ef.taskCode
      };
      let _0x51775b = {
          fn: "memberDay_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x5b8cdc
        },
        {
          result: _0x2c09aa
        } = await this.request(_0x51775b);
      if (_0x2c09aa?.["success"]) {
        this.log("完成会员日任务[" + _0x5f09ef.taskName + "]成功");
        await this.memberDay_fetchMixTaskReward(_0x5f09ef);
      } else {
        let _0x3b2ff6 = _0x2c09aa?.["errorMessage"] || (_0x2c09aa ? JSON.stringify(_0x2c09aa) : "无返回");
        this.log("完成会员日任务[" + _0x5f09ef.taskName + "]失败: " + _0x3b2ff6);
        if (_0x3b2ff6?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x382c5e = {
            notify: true
          };
          this.log("会员日任务风控", _0x382c5e);
        }
      }
    } catch (_0x1abc40) {
      console.log(_0x1abc40);
    }
  }
  async memberDay_fetchMixTaskReward(_0x43d5a1, _0x5edb9e = {}) {
    try {
      let _0x4b5357 = {
          fn: "memberDay_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x43d5a1.taskType,
            activityCode: _0x4b9d76,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x44efd0
        } = await this.request(_0x4b5357);
      if (_0x44efd0?.["success"]) {
        this.log("领取会员日任务[" + _0x43d5a1.taskName + "]奖励成功");
      } else {
        let _0x336253 = _0x44efd0?.["errorMessage"] || (_0x44efd0 ? JSON.stringify(_0x44efd0) : "无返回");
        this.log("领取会员日任务[" + _0x43d5a1.taskName + "]奖励失败: " + _0x336253);
        if (_0x336253?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0xea275e = {
            notify: true
          };
          this.log("会员日任务风控", _0xea275e);
        }
      }
    } catch (_0x48419e) {
      console.log(_0x48419e);
    }
  }
  async memberDay_redPacketReceivedStatus(_0x5ae155 = {}) {
    try {
      let _0x4527bc = {
          fn: "memberDay_redPacketReceivedStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~redPacketReceivedStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x193dfa
        } = await this.request(_0x4527bc);
      if (_0x193dfa?.["success"]) {
        for (let _0xdfb38a of _0x193dfa?.["obj"] || []) {
          if (_0xdfb38a.received) {
            continue;
          }
          let _0x1efce2 = new Date().getHours();
          _0xdfb38a.receiveHour == _0x1efce2 && (await this.memberDay_receiveRedPacket(_0xdfb38a.receiveHour));
        }
      } else {
        let _0x35973e = _0x193dfa?.["errorMessage"] || (_0x193dfa ? JSON.stringify(_0x193dfa) : "无返回");
        this.log("会员日查询整点领红包失败: " + _0x35973e);
        if (_0x35973e?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x39077c = {
            notify: true
          };
          this.log("会员日任务风控", _0x39077c);
        }
      }
    } catch (_0x1a1262) {
      console.log(_0x1a1262);
    }
  }
  async memberDay_receiveRedPacket(_0x4b0537, _0x1726d4 = {}) {
    try {
      const _0x3f1052 = {
        receiveHour: _0x4b0537
      };
      let _0x49f4d7 = {
          fn: "memberDay_receiveRedPacket",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~receiveRedPacket",
          headers: {
            ...this.getSign()
          },
          json: _0x3f1052
        },
        {
          result: _0x22c61f
        } = await this.request(_0x49f4d7);
      if (_0x22c61f?.["success"]) {
        this.log("会员日领取" + _0x4b0537 + "点红包成功");
      } else {
        let _0x13f83e = _0x22c61f?.["errorMessage"] || (_0x22c61f ? JSON.stringify(_0x22c61f) : "无返回");
        this.log("会员日领取" + _0x4b0537 + "点红包失败: " + _0x13f83e);
        if (_0x13f83e?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x545bc8 = {
            notify: true
          };
          this.log("会员日任务风控", _0x545bc8);
        }
      }
    } catch (_0x5e2d61) {
      console.log(_0x5e2d61);
    }
  }
  async memberDay_redPacketStatus(_0x24de9b = {}) {
    try {
      let _0xed250a = {
          fn: "memberDay_redPacketStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x4c66fc
        } = await this.request(_0xed250a);
      if (_0x4c66fc?.["success"]) {
        let {
          drewToday: _0x255d51,
          packetList: _0x12f549
        } = _0x4c66fc?.["obj"];
        this.memberDay_redPacket_drewToday = _0x255d51;
        for (let _0x527300 of _0x12f549) {
          this.memberDay_redPacket_map[_0x527300.level] = _0x527300.count;
        }
        let _0x564be9 = _0x57cac7;
        for (let _0x268762 = 1; _0x268762 < _0x564be9; _0x268762++) {
          let _0x3fcd99 = this.memberDay_redPacket_map[_0x268762];
          while (_0x3fcd99 >= 2) {
            await this.memberDay_redPacketMerge(_0x268762);
            _0x3fcd99 -= 2;
          }
        }
        let _0xe2f153 = [],
          _0x36d39f = 0;
        for (let _0x5ebcd3 in this.memberDay_redPacket_map) {
          if (!this.memberDay_redPacket_map[_0x5ebcd3]) {
            continue;
          }
          _0xe2f153.push("[" + _0x5ebcd3 + "级]X" + this.memberDay_redPacket_map[_0x5ebcd3]);
          let _0x59e35b = parseInt(_0x5ebcd3);
          _0x59e35b < _0x564be9 && (_0x36d39f += 1 << _0x59e35b - 1);
        }
        const _0x568c40 = {
          notify: true
        };
        this.log("会员日合成列表: " + _0xe2f153.join(", "), _0x568c40);
        if (this.memberDay_redPacket_map[_0x564be9]) {
          const _0x427b1a = {
            notify: true
          };
          this.log("会员日已拥有[" + _0x564be9 + "级]红包X" + this.memberDay_redPacket_map[_0x564be9], _0x427b1a);
          await this.memberDay_redPacketDraw(_0x564be9);
        } else {
          let _0x25611c = _0x24fae8 - _0x36d39f;
          const _0x34f460 = {
            notify: true
          };
          this.log("会员日距离[" + _0x564be9 + "级]红包还差: [1级]红包X" + _0x25611c, _0x34f460);
        }
      } else {
        let _0x142892 = _0x4c66fc?.["errorMessage"] || (_0x4c66fc ? JSON.stringify(_0x4c66fc) : "无返回");
        this.log("查询会员日合成失败: " + _0x142892);
        if (_0x142892?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x284cfd = {
            notify: true
          };
          this.log("会员日任务风控", _0x284cfd);
        }
      }
    } catch (_0x4fe820) {
      console.log(_0x4fe820);
    }
  }
  async memberDay_redPacketMerge(_0x1a4938, _0x253450 = {}) {
    try {
      const _0x4cf241 = {
        level: _0x1a4938,
        num: 2
      };
      let _0x170d29 = {
          fn: "memberDay_redPacketMerge",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketMerge",
          headers: {
            ...this.getSign()
          },
          json: _0x4cf241
        },
        {
          result: _0x1d1783
        } = await this.request(_0x170d29);
      if (_0x1d1783?.["success"]) {
        this.log("会员日合成: [" + _0x1a4938 + "级]红包X2 -> [" + (_0x1a4938 + 1) + "级]红包");
        this.memberDay_redPacket_map[_0x1a4938] -= 2;
        if (!this.memberDay_redPacket_map[_0x1a4938 + 1]) {
          this.memberDay_redPacket_map[_0x1a4938 + 1] = 0;
        }
        this.memberDay_redPacket_map[_0x1a4938 + 1]++;
      } else {
        let _0x13f7f9 = _0x1d1783?.["errorMessage"] || (_0x1d1783 ? JSON.stringify(_0x1d1783) : "无返回");
        this.log("会员日合成两个[" + _0x1a4938 + "级]红包失败: " + _0x13f7f9);
        if (_0x13f7f9?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x466fec = {
            notify: true
          };
          this.log("会员日任务风控", _0x466fec);
        }
      }
    } catch (_0x1d4059) {
      console.log(_0x1d4059);
    }
  }
  async memberDay_redPacketDraw(_0x1c1903, _0x4fa4d1 = {}) {
    try {
      let _0x26a67d = {
          fn: "memberDay_redPacketDraw",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketDraw",
          headers: {
            ...this.getSign()
          },
          json: {
            level: _0x1c1903.toString()
          }
        },
        {
          result: _0x2f6746
        } = await this.request(_0x26a67d);
      if (_0x2f6746?.["success"]) {
        let _0x40ac67 = _0x2f6746?.["obj"]?.["map"](_0x3420b1 => _0x3420b1.couponName) || [];
        const _0x17407f = {
          notify: true
        };
        this.log("会员日提取[" + _0x1c1903 + "级]红包: " + (_0x40ac67.join(", ") || "空气"), _0x17407f);
      } else {
        let _0x404207 = _0x2f6746?.["errorMessage"] || (_0x2f6746 ? JSON.stringify(_0x2f6746) : "无返回");
        this.log("会员日提取[" + _0x1c1903 + "级]红包失败: " + _0x404207);
        if (_0x404207?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x52a65f = {
            notify: true
          };
          this.log("会员日任务风控", _0x52a65f);
        }
      }
    } catch (_0x239b79) {
      console.log(_0x239b79);
    }
  }
  async jika2024_taskList(_0x5eb151 = {}) {
    try {
      let _0x3ce7a0 = {
          fn: "jika2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0xf6b138,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x1a9de2
        } = await this.request(_0x3ce7a0);
      if (_0x1a9de2?.["success"]) {
        let _0xbd35a8 = _0x1a9de2?.["obj"] || [];
        for (let _0x4d4086 of _0xbd35a8.filter(_0x2c10ea => _0x2c10ea.status == 1)) {
          if (this.jika_black) {
            return;
          }
          for (let _0x256f70 = 0; _0x256f70 < _0x4d4086.canReceiveTokenNum; _0x256f70++) {
            await this.jika2024_fetchMixTaskReward(_0x4d4086);
          }
        }
        for (let _0x120ff2 of _0xbd35a8.filter(_0x37ebc4 => _0x37ebc4.status == 2)) {
          if (this.jika_black) {
            return;
          }
          switch (_0x120ff2.taskType) {
            case "PLAY_ACTIVITY_GAME":
              {
                this.log("开始玩新年集卡猜成语");
                for (let _0x299637 = 1; _0x299637 <= 10; _0x299637++) {
                  let _0x23e400 = Math.floor(Math.random() * 3000) + 1000;
                  await _0x48fae2.wait(_0x23e400);
                  await this.jika2024_chengyu_win(_0x299637);
                }
                break;
              }
            case "FOLLOW_SFZHUNONG_VEDIO_ID":
              {
                break;
              }
            case "CLICK_MY_SETTING":
            case "CLICK_TEMPLATE":
            case "REAL_NAME":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "OPEN_FAST_CARD":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }
            default:
              {
                for (let _0x86fc45 = 0; _0x86fc45 < _0x120ff2.restFinishTime && !this.jika_black; _0x86fc45++) {
                  await this.jika2024_finishTask(_0x120ff2);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询新年集卡任务失败: " + (_0x1a9de2?.["errorMessage"] || (_0x1a9de2 ? JSON.stringify(_0x1a9de2) : "无返回")));
      }
    } catch (_0x42641f) {
      console.log(_0x42641f);
    }
  }
  async jika2024_finishTask(_0x462a82, _0x3b5111 = {}) {
    try {
      const _0x2ebc77 = {
        taskCode: _0x462a82.taskCode
      };
      let _0x501692 = {
          fn: "jika2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x2ebc77
        },
        {
          result: _0x2c1655
        } = await this.request(_0x501692);
      _0x2c1655?.["success"] ? (this.log("完成新年集卡任务[" + _0x462a82.taskName + "]成功"), await this.jika2024_fetchMixTaskReward(_0x462a82)) : this.log("完成新年集卡任务[" + _0x462a82.taskName + "]失败: " + (_0x2c1655?.["errorMessage"] || (_0x2c1655 ? JSON.stringify(_0x2c1655) : "无返回")));
    } catch (_0x189375) {
      console.log(_0x189375);
    }
  }
  async jika2024_fetchMixTaskReward(_0x46a25f, _0x30dbaa = {}) {
    try {
      let _0x1bd982 = {
          fn: "jika2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonNoLoginPost/~memberNonactivity~yearEnd2023TaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x46a25f.taskType,
            activityCode: _0xf6b138,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x273d17
        } = await this.request(_0x1bd982);
      if (_0x273d17?.["success"]) {
        let _0x169581 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x273d17.obj;
        for (let _0x390ded of receivedAccountList) {
          _0x169581.push("" + (_0x427bdd[_0x390ded.currency] || "[" + _0x390ded.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x169581.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("领取任务[" + _0x46a25f.taskName + "]奖励: " + _0x169581.join(", "));
      } else {
        let _0xb3ac74 = _0x273d17?.["errorMessage"] || (_0x273d17 ? JSON.stringify(_0x273d17) : "无返回");
        this.log("领取任务[" + _0x46a25f.taskName + "]奖励失败: " + _0xb3ac74);
        _0xb3ac74?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x3cbc7c) {
      console.log(_0x3cbc7c);
    }
  }
  async jika2024_getAward(_0x5db88d, _0x4196e4 = {}) {
    try {
      const _0x21357b = {
        cardType: _0x5db88d
      };
      let _0x4db3fe = {
          fn: "jika2024_getAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GardenPartyService~getAward",
          headers: {
            ...this.getSign()
          },
          json: _0x21357b
        },
        {
          result: _0x393c14
        } = await this.request(_0x4db3fe);
      if (_0x393c14?.["success"]) {
        let _0x106266 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x393c14.obj;
        for (let _0x2c5a20 of receivedAccountList) {
          _0x106266.push("" + (_0x427bdd[_0x2c5a20.currency] || "[" + _0x2c5a20.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x106266.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("逛集市领卡奖励: " + _0x106266.join(", "));
      } else {
        let _0x3caf85 = _0x393c14?.["errorMessage"] || (_0x393c14 ? JSON.stringify(_0x393c14) : "无返回");
        this.log("逛集市领卡失败: " + _0x3caf85);
        _0x3caf85?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x462ef2) {
      console.log(_0x462ef2);
    }
  }
  async jika2024_chengyu_index(_0x4209e0 = {}) {
    try {
      let _0x5a0b2d = {
          fn: "jika2024_chengyu_index",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~index",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x5132ec
        } = await this.request(_0x5a0b2d);
      if (_0x5132ec?.["success"]) {
        if (_0x5132ec?.["obj"]?.["bigCardFlag"]) {
          this.log("今天已完成新年集卡猜成语");
        } else {
          this.log("开始玩新年集卡猜成语");
          for (let _0x568959 = 1; _0x568959 <= 10; _0x568959++) {
            let _0xe3f070 = Math.floor(Math.random() * 3000) + 1000;
            await _0x48fae2.wait(_0xe3f070);
            await this.jika2024_chengyu_win(_0x568959);
          }
        }
      } else {
        this.log("查询新年集卡猜成语任务失败: " + (_0x5132ec?.["errorMessage"] || (_0x5132ec ? JSON.stringify(_0x5132ec) : "无返回")));
      }
    } catch (_0x31107c) {
      console.log(_0x31107c);
    }
  }
  async jika2024_chengyu_win(_0x5a0235, _0xb75ac2 = {}) {
    try {
      const _0x37b5ae = {
        index: _0x5a0235
      };
      let _0x5a91b7 = {
          fn: "jika2024_chengyu_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x37b5ae
        },
        {
          result: _0xd474ec
        } = await this.request(_0x5a91b7);
      if (_0xd474ec?.["success"]) {
        let {
          isAward: _0x4c0e70,
          currencyDTOList: _0x4c7663
        } = _0xd474ec?.["obj"];
        if (_0x4c0e70) {
          let _0x14be2a = [];
          for (let _0x57cfda of _0x4c7663) {
            _0x14be2a.push("" + (_0x427bdd[_0x57cfda.currency] || "[" + _0x57cfda.currency + "]"));
          }
          this.log("猜成语第" + _0x5a0235 + "关通关成功: " + _0x14be2a.join(", "));
        } else {
          this.log("猜成语第" + _0x5a0235 + "关通关成功");
        }
      } else {
        let _0x54fed8 = _0xd474ec?.["errorMessage"] || (_0xd474ec ? JSON.stringify(_0xd474ec) : "无返回");
        this.log("猜成语第" + _0x5a0235 + "关失败: " + _0x54fed8);
        _0x54fed8?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x1b0506) {
      console.log(_0x1b0506);
    }
  }
  async jika2024_cardStatus(_0x2c640b = {}) {
    try {
      let _0x5ceab4 = {
          fn: "jika2024_cardStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~cardStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x591aee
        } = await this.request(_0x5ceab4);
      if (_0x591aee?.["success"]) {
        let _0x168766 = _0x591aee?.["obj"]?.["accountList"] || [];
        if (_0x168766?.["length"]) {
          this.cards = _0x168766.filter(_0x549c7b => _0x549c7b.balance > 0);
          this.cards.sort((_0xe639f3, _0x318dbf) => {
            return _0x318dbf.balance - _0xe639f3.balance;
          });
          let _0x2ea4e6 = [];
          for (let _0x323242 of this.cards) {
            let _0x4164b0 = _0x427bdd[_0x323242.currency] || "[" + _0x323242.currency + "]";
            _0x2ea4e6.push(_0x4164b0 + "X" + _0x323242.balance);
          }
          const _0x1a10bf = {
            notify: true
          };
          this.log("年卡: " + _0x2ea4e6.join(", "), _0x1a10bf);
          if (this.cards.filter(_0x54e8a0 => _0x54e8a0.balance > 0).filter(_0x5db684 => _0x5db684.currency == "COMMON_CARD").length > 0) {
            const _0xb81959 = {
              notify: true
            };
            this.log("拥有万能卡, 请自行合成, 不自动抽奖", _0xb81959);
            return;
          }
          while (this.cards.filter(_0x1af31b => _0x1af31b.balance > 0).length >= 3 && !this.jika_black) {
            await this.jika2024_collectDrawAward();
          }
        } else {
          const _0x264d65 = {
            notify: true
          };
          this.log("还没有收集到年卡", _0x264d65);
        }
      } else {
        this.log("查询已收集年卡失败: " + (_0x591aee?.["errorMessage"] || (_0x591aee ? JSON.stringify(_0x591aee) : "无返回")));
      }
    } catch (_0x31d37c) {
      console.log(_0x31d37c);
    }
  }
  async jika2024_collectDrawAward(_0x54f3d4 = {}) {
    try {
      let _0x1171d7 = this.cards.filter(_0x2f0e96 => _0x2f0e96.balance > 0).map(_0x203911 => _0x203911.currency);
      if (_0x1171d7.length > 6) {
        _0x1171d7 = _0x1171d7.slice(0, 6);
      }
      const _0x5dac6f = {
        accountList: _0x1171d7
      };
      let _0x44ed14 = {
          fn: "jika2024_collectDrawAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~collectDrawAward",
          headers: {
            ...this.getSign()
          },
          json: _0x5dac6f
        },
        {
          result: _0x287a54
        } = await this.request(_0x44ed14);
      if (_0x287a54?.["success"]) {
        let {
          productName: _0x3e15a0
        } = _0x287a54?.["obj"];
        const _0x40964d = {
          notify: true
        };
        this.log("使用" + _0x1171d7.length + "种年卡合成: " + _0x3e15a0, _0x40964d);
        for (let _0x4c0139 of this.cards) {
          _0x1171d7.includes(_0x4c0139.currency) && (_0x4c0139.balance -= 1);
        }
      } else {
        let _0x564f48 = _0x287a54?.["errorMessage"] || (_0x287a54 ? JSON.stringify(_0x287a54) : "无返回");
        this.log("使用" + _0x1171d7.length + "种年卡合成失败: " + _0x564f48);
        _0x564f48?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0xcf11f0) {
      console.log(_0xcf11f0);
    }
  }
  async jika2024_task(_0xcdd399 = {}) {
    await this.jika2024_cardStatus();
  }
  async anniversary2024_weeklyGiftStatus(_0x248110 = {}) {
    try {
      let _0x145707 = {
          fn: "anniversary2024_weeklyGiftStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~weeklyGiftStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x16c3ba
        } = await this.request(_0x145707);
      if (_0x16c3ba?.["success"]) {
        let _0x376ba0 = _0x16c3ba?.["obj"]?.["weeklyGiftList"] || [];
        for (let _0x376c8a of _0x376ba0) {
          if (!_0x376c8a.received) {
            let _0x1428aa = new Date(_0x376c8a.receiveStartTime),
              _0x70d9bf = new Date(_0x376c8a.receiveEndTime),
              _0xdbdf84 = Date.now();
            _0xdbdf84 >= _0x1428aa.getTime() && _0xdbdf84 <= _0x70d9bf.getTime() && (await this.anniversary2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x38dcc5 = _0x16c3ba?.["errorMessage"] || (_0x16c3ba ? JSON.stringify(_0x16c3ba) : "无返回");
        this.log("查询周年庆每周领券失败: " + _0x38dcc5);
        (_0x38dcc5?.["includes"]("系统繁忙") || _0x38dcc5?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x1e0894) {
      console.log(_0x1e0894);
    }
  }
  async anniversary2024_receiveWeeklyGift(_0x34262f = {}) {
    try {
      let _0x5192c7 = {
          fn: "anniversary2024_receiveWeeklyGift",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~receiveWeeklyGift",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x45d217
        } = await this.request(_0x5192c7);
      if (_0x45d217?.["success"]) {
        let _0x274461 = _0x45d217?.["obj"]?.["map"](_0x2714da => _0x2714da.productName);
        this.log("周年庆每周领券: " + _0x274461.join(", "));
      } else {
        let _0x1c95aa = _0x45d217?.["errorMessage"] || (_0x45d217 ? JSON.stringify(_0x45d217) : "无返回");
        this.log("周年庆每周领券失败: " + _0x1c95aa);
        (_0x1c95aa?.["includes"]("系统繁忙") || _0x1c95aa?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x3a792f) {
      console.log(_0x3a792f);
    }
  }
  async anniversary2024_taskList(_0x115ea2 = {}) {
    try {
      let _0x39fa14 = {
          fn: "anniversary2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0x51d69b,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x490883
        } = await this.request(_0x39fa14);
      if (_0x490883?.["success"]) {
        let _0x9649f2 = _0x490883?.["obj"] || [];
        for (let _0x374e92 of _0x9649f2.filter(_0x26d973 => _0x26d973.status == 1)) {
          if (this.anniversary_black) {
            return;
          }
          for (let _0x5460c8 = 0; _0x5460c8 < _0x374e92.canReceiveTokenNum; _0x5460c8++) {
            await this.anniversary2024_fetchMixTaskReward(_0x374e92);
          }
        }
        for (let _0x237982 of _0x9649f2.filter(_0x4b7274 => _0x4b7274.status == 2)) {
          if (this.anniversary_black) {
            return;
          }
          switch (_0x237982.taskType) {
            case "PLAY_ACTIVITY_GAME":
            case "PLAY_HAPPY_ELIMINATION":
            case "PARTAKE_SUBJECT_GAME":
              {
                break;
              }
            case "FOLLOW_SFZHUNONG_VEDIO_ID":
              {
                break;
              }
            case "BROWSE_VIP_CENTER":
            case "GUESS_GAME_TIP":
            case "CREATE_SFID":
            case "CLICK_MY_SETTING":
            case "CLICK_TEMPLATE":
            case "REAL_NAME":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "OPEN_FAST_CARD":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }
            default:
              {
                for (let _0x49a010 = 0; _0x49a010 < _0x237982.restFinishTime && !this.anniversary_black; _0x49a010++) {
                  await this.anniversary2024_finishTask(_0x237982);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x490883?.["errorMessage"] || (_0x490883 ? JSON.stringify(_0x490883) : "无返回")));
      }
    } catch (_0x2a4fdc) {
      console.log(_0x2a4fdc);
    }
  }
  async anniversary2024_finishTask(_0x1984ad, _0x447ce9 = {}) {
    try {
      const _0x460085 = {
        taskCode: _0x1984ad.taskCode
      };
      let _0x1bf97f = {
          fn: "anniversary2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x460085
        },
        {
          result: _0x11b495
        } = await this.request(_0x1bf97f);
      _0x11b495?.["success"] ? (this.log("完成任务[" + _0x1984ad.taskName + "]成功"), await this.anniversary2024_fetchMixTaskReward(_0x1984ad)) : this.log("完成任务[" + _0x1984ad.taskName + "]失败: " + (_0x11b495?.["errorMessage"] || (_0x11b495 ? JSON.stringify(_0x11b495) : "无返回")));
    } catch (_0xf76e32) {
      console.log(_0xf76e32);
    }
  }
  async anniversary2024_fetchMixTaskReward(_0x2696ee, _0x18f2d3 = {}) {
    try {
      let _0x250bcd = {
          fn: "anniversary2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x2696ee.taskType,
            activityCode: _0x51d69b,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x435c0f
        } = await this.request(_0x250bcd);
      if (_0x435c0f?.["success"]) {
        let _0xc0ba23 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x435c0f?.["obj"]?.["account"];
        for (let _0x19125d of receivedAccountList) {
          _0xc0ba23.push("[" + _0x19125d.currency + "]X" + _0x19125d.amount);
        }
        turnedAward?.["productName"] && _0xc0ba23.push("[优惠券]" + turnedAward?.["productName"]);
        this.log("领取任务[" + _0x2696ee.taskName + "]奖励: " + _0xc0ba23.join(", "));
      } else {
        let _0xa9bf4f = _0x435c0f?.["errorMessage"] || (_0x435c0f ? JSON.stringify(_0x435c0f) : "无返回");
        this.log("领取任务[" + _0x2696ee.taskName + "]奖励失败: " + _0xa9bf4f);
        _0xa9bf4f?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x35baed) {
      console.log(_0x35baed);
    }
  }
  async anniversary2024_unbox(_0x568075 = {}) {
    try {
      let _0x19ccda = {
          fn: "anniversary2024_unbox",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~unbox",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x59e841
        } = await this.request(_0x19ccda);
      if (_0x59e841?.["success"]) {
        let _0x5708cd = [],
          _0x41c763 = _0x59e841?.["obj"]?.["account"]?.["receivedAccountList"] || [];
        for (let _0x5983e0 of _0x41c763) {
          _0x5708cd.push("[" + _0x5983e0.currency + "]X" + _0x5983e0.amount);
        }
        this.log("拆盒子: " + (_0x5708cd.join(", ") || "空气"));
      } else {
        let _0xd21a0 = _0x59e841?.["errorMessage"] || (_0x59e841 ? JSON.stringify(_0x59e841) : "无返回");
        this.log("拆盒子失败: " + _0xd21a0);
        _0xd21a0?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x3aa794) {
      console.log(_0x3aa794);
    }
  }
  async anniversary2024_game_list(_0x26e6bd = {}) {
    try {
      let _0x5767c7 = {
          fn: "anniversary2024_game_list",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GameParkService~list",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x49a204
        } = await this.request(_0x5767c7);
      if (_0x49a204?.["success"]) {
        let {
          topicPKInfo: _0x30198f,
          searchWordInfo: _0x23b71c,
          happyEliminationInfo: _0x3bcb11
        } = _0x49a204?.["obj"];
        !_0x30198f?.["isPassFlag"] && (this.log("开始话题PK赛"), await this.anniversary2024_TopicPk_topicList());
        if (!_0x23b71c?.["isPassFlag"] || !_0x23b71c?.["isFinishDailyFlag"]) {
          this.log("开始找字游戏");
          for (let _0x485d37 = 1; _0x485d37 <= 10; _0x485d37++) {
            let _0x59a39f = Math.floor(Math.random() * 2000) + 1000;
            await _0x48fae2.wait(_0x59a39f);
            if (!(await this.anniversary2024_SearchWord_win(_0x485d37))) {
              break;
            }
          }
        }
        if (!_0x3bcb11?.["isPassFlag"] || !_0x3bcb11?.["isFinishDailyFlag"]) {
          this.log("开始消消乐");
          for (let _0x3f6e23 = 1; _0x3f6e23 <= 30; _0x3f6e23++) {
            let _0x1f4dae = Math.floor(Math.random() * 2000) + 1000;
            await _0x48fae2.wait(_0x1f4dae);
            if (!(await this.anniversary2024_HappyElimination_win(_0x3f6e23))) {
              break;
            }
          }
        }
      } else {
        let _0x4c11ce = _0x49a204?.["errorMessage"] || (_0x49a204 ? JSON.stringify(_0x49a204) : "无返回");
        this.log("查询游戏状态失败: " + _0x4c11ce);
        _0x4c11ce?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x21366b) {
      console.log(_0x21366b);
    }
  }
  async anniversary2024_SearchWord_win(_0x529e83, _0x506188 = {}) {
    let _0x38cb77 = true;
    try {
      const _0x3f9dfa = {
        index: _0x529e83
      };
      let _0x1498a1 = {
          fn: "anniversary2024_SearchWord_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024SearchWordService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x3f9dfa
        },
        {
          result: _0x7c403
        } = await this.request(_0x1498a1);
      if (_0x7c403?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x7c403?.["obj"];
        if (currencyDTOList?.["length"]) {
          let _0x4f04b6 = [];
          for (let _0x585c1d of currencyDTOList) {
            _0x4f04b6.push("[" + _0x585c1d.currency + "]X" + _0x585c1d.amount);
          }
          this.log("找字游戏第" + _0x529e83 + "关通关成功: " + _0x4f04b6.join(", "));
        } else {
          this.log("找字游戏第" + _0x529e83 + "关通关成功");
        }
      } else {
        let _0x325192 = _0x7c403?.["errorMessage"] || (_0x7c403 ? JSON.stringify(_0x7c403) : "无返回");
        this.log("找字游戏第" + _0x529e83 + "关失败: " + _0x325192);
        _0x325192?.["includes"]("系统繁忙") && (_0x38cb77 = false);
      }
    } catch (_0x4f4976) {
      console.log(_0x4f4976);
    } finally {
      return _0x38cb77;
    }
  }
  async anniversary2024_HappyElimination_win(_0x5317de, _0x4c10ca = {}) {
    let _0x197492 = true;
    try {
      const _0x1a4c29 = {
        index: _0x5317de
      };
      let _0x2374c3 = {
          fn: "anniversary2024_HappyElimination_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024HappyEliminationService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x1a4c29
        },
        {
          result: _0x4d1a1c
        } = await this.request(_0x2374c3);
      if (_0x4d1a1c?.["success"]) {
        let {
          isAward: _0x4ba7c0,
          currencyDTOList: _0x19cc26
        } = _0x4d1a1c?.["obj"];
        if (_0x4ba7c0) {
          let _0xda4a53 = [];
          for (let _0x36f185 of _0x19cc26) {
            _0xda4a53.push("[" + _0x36f185.currency + "]X" + _0x36f185.amount);
          }
          this.log("消消乐第" + _0x5317de + "关通关成功: " + _0xda4a53.join(", "));
        } else {
          this.log("消消乐第" + _0x5317de + "关通关成功");
        }
      } else {
        let _0x51741e = _0x4d1a1c?.["errorMessage"] || (_0x4d1a1c ? JSON.stringify(_0x4d1a1c) : "无返回");
        this.log("消消乐第" + _0x5317de + "关失败: " + _0x51741e);
        _0x51741e?.["includes"]("系统繁忙") && (_0x197492 = false);
      }
    } catch (_0x3290f8) {
      console.log(_0x3290f8);
    } finally {
      return _0x197492;
    }
  }
  async anniversary2024_TopicPk_topicList(_0x46183d = {}) {
    try {
      let _0x14091f = {
          fn: "anniversary2024_TopicPk_topicList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~topicList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x45376b
        } = await this.request(_0x14091f);
      if (_0x45376b?.["success"]) {
        let _0x5096de = _0x45376b?.["obj"]?.["topics"] || [],
          _0x558796 = _0x5096de?.["filter"](_0x3ab5f0 => !_0x3ab5f0?.["choose"])?.[0]?.["index"] || 1;
        for (let _0x325f7f = parseInt(_0x558796); _0x325f7f <= 12; _0x325f7f++) {
          let _0x58fda4 = Math.floor(Math.random() * 2000) + 2000;
          await _0x48fae2.wait(_0x58fda4);
          if (!(await this.anniversary2024_TopicPk_chooseSide(_0x325f7f))) {
            break;
          }
        }
      } else {
        let _0xce66c2 = _0x45376b?.["errorMessage"] || (_0x45376b ? JSON.stringify(_0x45376b) : "无返回");
        this.log("查询话题PK赛记录失败: " + _0xce66c2);
        _0xce66c2?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x181327) {
      console.log(_0x181327);
    }
  }
  async anniversary2024_queryAccountStatus_refresh(_0x5417c0 = {}) {
    try {
      let _0x148b86 = {
        fn: "anniversary2024_queryAccountStatus_refresh",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        headers: {
          ...this.getSign()
        },
        json: {}
      };
      await this.request(_0x148b86);
    } catch (_0x181ee4) {
      console.log(_0x181ee4);
    }
  }
  async anniversary2024_TopicPk_chooseSide(_0x439a3f, _0x33a6e4 = {}) {
    let _0x4dc5d9 = true;
    try {
      const _0x38207c = {
        index: _0x439a3f,
        choose: 0
      };
      let _0x2abfd8 = {
          fn: "anniversary2024_TopicPk_chooseSide",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~chooseSide",
          headers: {
            ...this.getSign()
          },
          json: _0x38207c
        },
        {
          result: _0x3e1df5
        } = await this.request(_0x2abfd8);
      if (_0x3e1df5?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x3e1df5?.["obj"];
        if (currencyDTOList.length) {
          let _0x3a238e = [];
          for (let _0x25aa8b of currencyDTOList) {
            _0x3a238e.push("[" + _0x25aa8b.currency + "]X" + _0x25aa8b.amount);
          }
          this.log("话题PK赛第" + _0x439a3f + "个话题选择成功: " + _0x3a238e.join(", "));
        } else {
          this.log("话题PK赛第" + _0x439a3f + "个话题选择成功");
        }
      } else {
        let _0x1d1b15 = _0x3e1df5?.["errorMessage"] || (_0x3e1df5 ? JSON.stringify(_0x3e1df5) : "无返回");
        this.log("话题PK赛第" + _0x439a3f + "个话题失败: " + _0x1d1b15);
        _0x1d1b15?.["includes"]("系统繁忙") && (_0x4dc5d9 = false);
      }
    } catch (_0x14ef6e) {
      console.log(_0x14ef6e);
    } finally {
      return _0x4dc5d9;
    }
  }
  async anniversary2024_titleList(_0x20294f = {}) {
    try {
      let _0x1042a6 = {
          fn: "anniversary2024_titleList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x314d39
        } = await this.request(_0x1042a6);
      if (_0x314d39?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x314d39?.["obj"],
          _0x50c96f = _0x48fae2.time("yyyy-MM-dd"),
          _0x47cf46 = guessTitleInfoList.filter(_0xbfdfda => _0xbfdfda.gameDate == _0x50c96f);
        if (_0x47cf46.length > 0) {
          let _0x300420 = _0x47cf46[0];
          if (_0x300420.answerStatus) {
            this.log("今日已回答过竞猜");
          } else {
            let _0x50e6ad = _0x2193de?.["answer"]?.[_0x50c96f];
            _0x2193de?.["answer"]?.[_0x50c96f] && (await this.anniversary2024_answer(_0x300420, _0x50e6ad));
          }
        } else {
          this.log("没有查询到今日竞猜题目");
        }
      } else {
        let _0x2ec436 = _0x314d39?.["errorMessage"] || (_0x314d39 ? JSON.stringify(_0x314d39) : "无返回");
        this.log("查询每日口令竞猜失败: " + _0x2ec436);
      }
    } catch (_0x312123) {
      console.log(_0x312123);
    }
  }
  async anniversary2024_titleList_award(_0xd23ab7 = {}) {
    try {
      let _0x5ae8bf = {
          fn: "anniversary2024_titleList_award",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x315eda
        } = await this.request(_0x5ae8bf);
      if (_0x315eda?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x315eda?.["obj"],
          _0x92e460 = _0x48fae2.time("yyyy-MM-dd"),
          _0x154084 = guessTitleInfoList.filter(_0x1f2332 => _0x1f2332.gameDate == _0x92e460);
        if (_0x154084.length > 0) {
          let _0x181c1f = _0x154084[0];
          if (_0x181c1f.answerStatus) {
            let _0x4a3a4a = [],
              {
                awardList = [],
                puzzleList = []
              } = _0x181c1f;
            _0x4a3a4a = _0x4a3a4a.concat(awardList.map(_0x2b84d9 => _0x2b84d9.productName));
            _0x4a3a4a = _0x4a3a4a.concat(puzzleList.map(_0x2c8d06 => "[" + _0x2c8d06.currency + "]X" + _0x2c8d06.amount));
            const _0x433f46 = {
              notify: true
            };
            this.log("口令竞猜奖励: " + (_0x4a3a4a.join(", ") || "空气"), _0x433f46);
          } else {
            this.log("今日还没回答竞猜");
          }
        } else {
          this.log("没有查询到今日竞猜奖励");
        }
      } else {
        let _0x27276c = _0x315eda?.["errorMessage"] || (_0x315eda ? JSON.stringify(_0x315eda) : "无返回");
        this.log("查询每日口令竞猜奖励失败: " + _0x27276c);
      }
    } catch (_0x3c9075) {
      console.log(_0x3c9075);
    }
  }
  async anniversary2024_answer(_0x29181a, _0x4e1992, _0x40f7a3 = {}) {
    try {
      const _0xb32320 = {
        period: _0x29181a.period,
        answerInfo: _0x4e1992
      };
      let _0x4ba557 = {
          fn: "anniversary2024_answer",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~answer",
          headers: {
            ...this.getSign()
          },
          json: _0xb32320
        },
        {
          result: _0x3931f5
        } = await this.request(_0x4ba557);
      if (_0x3931f5?.["success"]) {
        this.log("口令竞猜回答成功");
        await this.anniversary2024_titleList_award();
      } else {
        let _0x20a658 = _0x3931f5?.["errorMessage"] || (_0x3931f5 ? JSON.stringify(_0x3931f5) : "无返回");
        this.log("口令竞猜回答失败: " + _0x20a658);
      }
    } catch (_0x16ccbf) {
      console.log(_0x16ccbf);
    }
  }
  async anniversary2024_queryAccountStatus(_0x4a21f4 = {}) {
    try {
      let _0x4e837e = {
        fn: "anniversary2024_queryAccountStatus",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        headers: {
          ...this.getSign()
        },
        json: {}
      };
      {
        let {
          result: _0xd27813
        } = await this.request(_0x4e837e);
        if (_0xd27813?.["success"]) {
          let _0x4295aa = _0xd27813?.["obj"]?.["accountCurrencyList"] || [],
            _0x327e30 = _0x4295aa.filter(_0x48810c => _0x48810c.currency == "UNBOX_CHANCE"),
            _0x3d3f2e = _0x327e30?.[0]?.["balance"] || 0;
          this.log("可以拆" + _0x3d3f2e + "次盒子");
          while (_0x3d3f2e-- > 0) {
            await this.anniversary2024_unbox();
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0xd27813?.["errorMessage"] || (_0xd27813 ? JSON.stringify(_0xd27813) : "无返回")));
        }
      }
      {
        let {
          result: _0x62c36d
        } = await this.request(_0x4e837e);
        if (_0x62c36d?.["success"]) {
          let _0x2f14fc = _0x62c36d?.["obj"]?.["accountCurrencyList"] || [];
          _0x2f14fc = _0x2f14fc.filter(_0x3af169 => _0x3af169.currency != "UNBOX_CHANCE");
          if (_0x2f14fc?.["length"]) {
            this.cards = _0x2f14fc;
            let _0x419f12 = [];
            for (let _0x4c6973 of this.cards) {
              _0x419f12.push("[" + _0x4c6973.currency + "]X" + _0x4c6973.balance);
            }
            const _0x2dbc15 = {
              notify: true
            };
            this.log("拼图: " + _0x419f12.join(", "), _0x2dbc15);
            this.cards.sort((_0x9f0cd1, _0x4316a7) => {
              return _0x4316a7.balance - _0x9f0cd1.balance;
            });
          } else {
            const _0x15b8f0 = {
              notify: true
            };
            this.log("还没有收集到拼图", _0x15b8f0);
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x62c36d?.["errorMessage"] || (_0x62c36d ? JSON.stringify(_0x62c36d) : "无返回")));
        }
      }
    } catch (_0x3af6d4) {
      console.log(_0x3af6d4);
    }
  }
  async anniversary2024_queryAccountStatus_card(_0x16567e = {}) {
    try {
      let _0x1e28f7 = {
          fn: "anniversary2024_queryAccountStatus_card",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x3a1ac2
        } = await this.request(_0x1e28f7);
      if (_0x3a1ac2?.["success"]) {
        let _0xc9fa5b = _0x3a1ac2?.["obj"]?.["accountCurrencyList"] || [];
        _0xc9fa5b = _0xc9fa5b.filter(_0x430a4e => _0x430a4e.currency != "UNBOX_CHANCE");
        if (_0xc9fa5b?.["length"]) {
          this.cards = _0xc9fa5b.sort((_0x19b381, _0x5b51c4) => {
            return _0x5b51c4.balance - _0x19b381.balance;
          });
          let _0x2fca45 = [];
          for (let _0x17b18d of this.cards) {
            _0x2fca45.push("[" + _0x17b18d.currency + "]X" + _0x17b18d.balance);
          }
          const _0x53a374 = {
            notify: true
          };
          this.log("拼图: " + _0x2fca45.join(", "), _0x53a374);
          while (this.cards.filter(_0xf1feb0 => _0xf1feb0.balance > 0).length >= 3 && !this.anniversary_black) {
            await this.anniversary2024_collectDrawAward();
          }
        } else {
          const _0x4236b8 = {
            notify: true
          };
          this.log("还没有收集到拼图", _0x4236b8);
        }
      } else {
        this.log("查询已收集拼图失败: " + (_0x3a1ac2?.["errorMessage"] || (_0x3a1ac2 ? JSON.stringify(_0x3a1ac2) : "无返回")));
      }
    } catch (_0x11bfea) {
      console.log(_0x11bfea);
    }
  }
  async anniversary2024_collectDrawAward(_0x2e807a = {}) {
    try {
      this.cards = this.cards.sort((_0x2ca60a, _0x10ee96) => {
        return _0x10ee96.balance - _0x2ca60a.balance;
      });
      let _0x369598 = this.cards.filter(_0x3d1b20 => _0x3d1b20.balance > 0).map(_0x2ea960 => _0x2ea960.currency);
      if (_0x369598.length == 9) {
        _0x369598 = _0x369598.slice(0, 9);
      } else {
        if (_0x369598.length >= 7) {
          _0x369598 = _0x369598.slice(0, 7);
        } else {
          if (_0x369598.length >= 5) {
            _0x369598 = _0x369598.slice(0, 5);
          } else {
            _0x369598.length >= 3 && (_0x369598 = _0x369598.slice(0, 3));
          }
        }
      }
      const _0x1eb1e7 = {
        accountList: _0x369598
      };
      let _0x1e0365 = {
          fn: "anniversary2024_collectDrawAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~collectDrawAward",
          headers: {
            ...this.getSign()
          },
          json: _0x1eb1e7
        },
        {
          result: _0x196a9f
        } = await this.request(_0x1e0365);
      if (_0x196a9f?.["success"]) {
        let {
          productName: _0x1f5432
        } = _0x196a9f?.["obj"];
        const _0xf3a305 = {
          notify: true
        };
        this.log("使用" + _0x369598.length + "种卡合成: " + _0x1f5432, _0xf3a305);
        for (let _0x918515 of this.cards) {
          _0x369598.includes(_0x918515.currency) && (_0x918515.balance -= 1);
        }
      } else {
        let _0x2d66db = _0x196a9f?.["errorMessage"] || (_0x196a9f ? JSON.stringify(_0x196a9f) : "无返回");
        this.log("使用" + _0x369598.length + "种年卡合成失败: " + _0x2d66db);
        _0x2d66db?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x327afd) {
      console.log(_0x327afd);
    }
  }
  async dragonBoat2024_weeklyGiftStatus(_0x19ef93 = {}) {
    try {
      let _0x184f2b = {
          fn: "dragonBoat2024_weeklyGiftStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024IndexService~weeklyGiftStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x2705d0
        } = await this.request(_0x184f2b);
      if (_0x2705d0?.["success"]) {
        let _0x1a725b = _0x2705d0?.["obj"] || [];
        for (let _0xea3e7c of _0x1a725b) {
          if (!_0xea3e7c.received) {
            let _0x85533b = new Date(_0xea3e7c.receiveStartTime),
              _0x3b64d7 = new Date(_0xea3e7c.receiveEndTime),
              _0x23821d = Date.now();
            _0x23821d >= _0x85533b.getTime() && _0x23821d <= _0x3b64d7.getTime() && (await this.dragonBoat2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x34d5ef = _0x2705d0?.["errorMessage"] || (_0x2705d0 ? JSON.stringify(_0x2705d0) : "无返回");
        this.log("端午查询每周领券失败: " + _0x34d5ef);
        (_0x34d5ef?.["includes"]("系统繁忙") || _0x34d5ef?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
      }
    } catch (_0x5bc39d) {
      console.log(_0x5bc39d);
    }
  }
  async dragonBoat2024_receiveWeeklyGift(_0x1402ee = {}) {
    try {
      let _0x47234d = _0x48fae2.randomList(_0x567431.filter(_0x3c0c84 => _0x3c0c84 != this.userId)),
        _0x14187b = {
          fn: "dragonBoat2024_receiveWeeklyGift",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024IndexService~receiveWeeklyGift",
          headers: {
            ...this.getSign()
          },
          json: {
            inviteUserId: _0x47234d,
            moduleType: "welfare_card"
          }
        },
        {
          result: _0x4ebe71
        } = await this.request(_0x14187b);
      if (_0x4ebe71?.["success"]) {
        let _0x541215 = _0x4ebe71?.["obj"]?.["map"](_0x22e567 => _0x22e567.productName);
        this.log("端午每周领券: " + _0x541215.join(", "));
      } else {
        let _0x196bfd = _0x4ebe71?.["errorMessage"] || (_0x4ebe71 ? JSON.stringify(_0x4ebe71) : "无返回");
        this.log("端午每周领券失败: " + _0x196bfd);
        (_0x196bfd?.["includes"]("系统繁忙") || _0x196bfd?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
      }
    } catch (_0x402f8b) {
      console.log(_0x402f8b);
    }
  }
  async dragonBoat2024_taskList(_0x3cf248 = {}) {
    try {
      const _0x2248e5 = {
        activityCode: _0x148a2e,
        channelType: "MINI_PROGRAM"
      };
      let _0x356f13 = {
          fn: "dragonBoat2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: _0x2248e5
        },
        {
          result: _0x31ecc2
        } = await this.request(_0x356f13);
      if (_0x31ecc2?.["success"]) {
        let _0x4ae82d = _0x31ecc2?.["obj"] || [];
        for (let _0x30e39c of _0x4ae82d.filter(_0x537f6c => _0x537f6c.status == 1)) {
          if (this.dragonBoat_black) {
            return;
          }
          for (let _0x3ac68d = 0; _0x3ac68d < _0x30e39c.canReceiveTokenNum; _0x3ac68d++) {
            await this.dragonBoat2024_fetchMixTaskReward(_0x30e39c);
          }
        }
        for (let _0x4729b1 of _0x4ae82d.filter(_0x297c5a => _0x297c5a.status == 2)) {
          if (this.dragonBoat_black) {
            return;
          }
          switch (_0x4729b1.taskType) {
            case "PLAY_ACTIVITY_GAME":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }
            default:
              {
                for (let _0x1c3506 = 0; _0x1c3506 < _0x4729b1.restFinishTime && !this.dragonBoat_black; _0x1c3506++) {
                  await this.dragonBoat2024_finishTask(_0x4729b1);
                }
                break;
              }
          }
        }
      } else {
        this.log("端午查询任务失败: " + (_0x31ecc2?.["errorMessage"] || (_0x31ecc2 ? JSON.stringify(_0x31ecc2) : "无返回")));
      }
    } catch (_0x5edb76) {
      console.log(_0x5edb76);
    }
  }
  async dragonBoat2024_finishTask(_0x3bfd71, _0x5f5c24 = {}) {
    try {
      const _0x53d4ce = {
        taskCode: _0x3bfd71.taskCode
      };
      let _0x3c1b4e = {
          fn: "dragonBoat2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x53d4ce
        },
        {
          result: _0x1e8c40
        } = await this.request(_0x3c1b4e);
      _0x1e8c40?.["success"] ? (this.log("端午完成任务[" + _0x3bfd71.taskName + "]成功"), await this.dragonBoat2024_fetchMixTaskReward(_0x3bfd71)) : this.log("端午完成任务[" + _0x3bfd71.taskName + "]失败: " + (_0x1e8c40?.["errorMessage"] || (_0x1e8c40 ? JSON.stringify(_0x1e8c40) : "无返回")));
    } catch (_0x45f8b4) {
      console.log(_0x45f8b4);
    }
  }
  dragonBoat2024_parse_item(_0x85cec7) {
    let _0x348c39 = [];
    for (let _0x3edcdb of _0x85cec7) {
      let _0x209081 = _0x3edcdb.currency,
        _0x5d2704 = _0x1d64b9[_0x209081] || "[" + _0x209081 + "]",
        _0x5d34b5 = _0x3edcdb.balance || _0x3edcdb.amount || 0;
      const _0x1ae5ba = {
        currency: _0x209081,
        type: _0x5d2704,
        amount: _0x5d34b5
      };
      _0x348c39.push(_0x1ae5ba);
    }
    return _0x348c39;
  }
  async dragonBoat2024_fetchMixTaskReward(_0x22c69d, _0x905328 = {}) {
    try {
      let _0x422731 = {
          fn: "dragonBoat2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024TaskService~fetchTasksReward",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x36c6bd
        } = await this.request(_0x422731);
      if (_0x36c6bd?.["success"]) {
        let _0x3789ce = this.dragonBoat2024_parse_item(_0x36c6bd?.["obj"]?.["receivedAccountList"] || []);
        _0x3789ce = _0x3789ce.map(_0x43cd1f => _0x43cd1f.type + "x" + _0x43cd1f.amount);
        this.log("端午领取任务[" + _0x22c69d.taskName + "]奖励: " + _0x3789ce.join(", "));
      } else {
        let _0x12cf6a = _0x36c6bd?.["errorMessage"] || (_0x36c6bd ? JSON.stringify(_0x36c6bd) : "无返回");
        this.log("端午领取任务[" + _0x22c69d.taskName + "]奖励失败: " + _0x12cf6a);
        _0x12cf6a?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x2f03f1) {
      console.log(_0x2f03f1);
    }
  }
  async dragonBoat2024_game_indexInfo(_0xaaaa6d = {}) {
    try {
      let _0x4e2b27 = {
          fn: "dragonBoat2024_game_indexInfo",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~indexInfo",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x27d5e5
        } = await this.request(_0x4e2b27);
      if (_0x27d5e5?.["success"]) {
        let _0x5f56aa = _0x27d5e5?.["obj"]?.["ifPassAllLevel"];
        await this.dragonBoat2024_game_init(_0x5f56aa);
      } else {
        let _0x1ff5ab = _0x27d5e5?.["errorMessage"] || (_0x27d5e5 ? JSON.stringify(_0x27d5e5) : "无返回");
        this.log("端午查询游戏状态失败: " + _0x1ff5ab);
        _0x1ff5ab?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x4f7a5e) {
      console.log(_0x4f7a5e);
    }
  }
  async dragonBoat2024_game_init(_0x12c62c, _0x3e71c7 = {}) {
    try {
      let _0x5227ae = {
          fn: "dragonBoat2024_game_init",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~init",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x57ea74
        } = await this.request(_0x5227ae);
      if (_0x57ea74?.["success"]) {
        let {
            gotPushTimeOfToday: _0x235c1d,
            currentIndex: _0x3c9be8
          } = _0x57ea74?.["obj"],
          _0x27f0c6 = 0;
        if (!_0x12c62c) {
          _0x27f0c6 = 30;
        } else {
          _0x235c1d < 3 && (_0x27f0c6 = 3 * (3 - _0x235c1d));
        }
        if (_0x27f0c6 > 0) {
          this.log("端午划龙舟, 目标: " + _0x27f0c6 + "关");
          let _0x4c2ba4 = Math.min(_0x27f0c6 + _0x3c9be8, 30);
          for (let _0x1e176b = _0x3c9be8; _0x1e176b <= _0x4c2ba4; _0x1e176b++) {
            let _0x212780 = Math.floor(Math.random() * 2000) + 2000;
            await _0x48fae2.wait(_0x212780);
            if (!(await this.dragonBoat2024_boat_win(_0x1e176b))) {
              break;
            }
          }
        }
      } else {
        let _0x24968b = _0x57ea74?.["errorMessage"] || (_0x57ea74 ? JSON.stringify(_0x57ea74) : "无返回");
        this.log("端午查询游戏状态失败: " + _0x24968b);
        _0x24968b?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x418a2d) {
      console.log(_0x418a2d);
    }
  }
  async dragonBoat2024_boat_win(_0x215177 = 1, _0xd15971 = {}) {
    let _0x1db951 = true;
    try {
      const _0x33ae2b = {
        levelIndex: _0x215177
      };
      let _0x56af11 = {
          fn: "dragonBoat2024_boat_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x33ae2b
        },
        {
          result: _0x38feea
        } = await this.request(_0x56af11);
      if (_0x38feea?.["success"]) {
        let _0x1b0e00 = this.dragonBoat2024_parse_item(_0x38feea?.["obj"]?.["currentAwardList"] || []);
        _0x1b0e00 = _0x1b0e00.map(_0x2306ee => _0x2306ee.type + "x" + _0x2306ee.amount);
        _0x1b0e00.length ? this.log("端午划龙舟第" + _0x215177 + "关通关成功: " + _0x1b0e00.join(", ")) : this.log("端午划龙舟第" + _0x215177 + "关通关成功");
      } else {
        let _0x2761e2 = _0x38feea?.["errorMessage"] || (_0x38feea ? JSON.stringify(_0x38feea) : "无返回");
        this.log("端午划龙舟第" + _0x215177 + "关失败: " + _0x2761e2);
        _0x2761e2?.["includes"]("系统繁忙") && (_0x1db951 = false);
      }
    } catch (_0x3ea967) {
      console.log(_0x3ea967);
    } finally {
      return _0x1db951;
    }
  }
  async dragonBoat2024_coinStatus(_0xcd3953 = {}) {
    try {
      let _0x2b4a4c = {
        fn: "dragonBoat2024_coinStatus",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~coinStatus",
        headers: {
          ...this.getSign()
        },
        json: {}
      };
      {
        let {
          result: _0x55f1fc
        } = await this.request(_0x2b4a4c);
        if (_0x55f1fc?.["success"]) {
          let _0x5699c9 = _0x55f1fc?.["obj"]?.["accountCurrencyList"] || [],
            _0x439baf = _0x5699c9.filter(_0x37267b => _0x37267b.currency == "PUSH_TIMES"),
            _0xd9daab = _0x439baf?.[0]?.["balance"] || 0;
          this.log("端午可以推" + _0xd9daab + "次金币");
          while (_0xd9daab-- > 0) {
            await this.dragonBoat2024_pushCoin();
          }
        } else {
          this.log("端午查询推金币状态失败: " + (_0x55f1fc?.["errorMessage"] || (_0x55f1fc ? JSON.stringify(_0x55f1fc) : "无返回")));
        }
      }
      {
        let {
          result: _0x2c3add
        } = await this.request(_0x2b4a4c);
        if (_0x2c3add?.["success"]) {
          let {
              accountCurrencyList = [],
              pushedTimesToday: _0x3e0309,
              pushedTimesTotal: _0x514180
            } = _0x2c3add?.["obj"],
            _0x5c2a8f = this.dragonBoat2024_parse_item(accountCurrencyList),
            _0x3d5213 = _0x5c2a8f.filter(_0x354301 => _0x354301.currency == "COIN"),
            _0xd24213 = _0x5c2a8f.filter(_0x51ae04 => _0x51ae04.currency == "RICH_CARD_GAME");
          this.coin = _0x3d5213?.[0]?.["amount"] || 0;
          this.rich_card = _0xd24213?.[0]?.["amount"] || 0;
          const _0x29ab4a = {
            notify: true
          };
          this.log("端午金币: " + this.coin + ", 发财卡: " + this.rich_card, _0x29ab4a);
          let _0x1d8383 = Math.floor(this.coin / 230),
            _0x379c46 = Math.min(_0x1d8383, this.rich_card);
          this.log("端午可以抽发财卡池" + _0x379c46 + "次");
          while (_0x379c46-- > 0) {
            await this.dragonBoat2024_prizeDraw(4);
          }
        } else {
          this.log("端午查询金币失败: " + (_0x2c3add?.["errorMessage"] || (_0x2c3add ? JSON.stringify(_0x2c3add) : "无返回")));
        }
      }
    } catch (_0xb1baa2) {
      console.log(_0xb1baa2);
    }
  }
  async dragonBoat2024_givePushTimes(_0x51c38f = {}) {
    let _0x487822 = true;
    try {
      let _0x2c37a6 = {
        fn: "dragonBoat2024_givePushTimes",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~givePushTimes",
        headers: {
          ...this.getSign()
        },
        json: {}
      };
      await this.request(_0x2c37a6);
    } catch (_0x1372fe) {
      console.log(_0x1372fe);
    } finally {
      return _0x487822;
    }
  }
  async dragonBoat2024_pushCoin(_0x1bc263 = {}) {
    try {
      const _0x122123 = {
        plateToken: null
      };
      let _0x4fa6f0 = {
          fn: "dragonBoat2024_pushCoin",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~pushCoin",
          headers: {
            ...this.getSign()
          },
          json: _0x122123
        },
        {
          result: _0x2cdfb0
        } = await this.request(_0x4fa6f0);
      if (_0x2cdfb0?.["success"]) {
        let _0x7cfb87 = this.dragonBoat2024_parse_item(_0x2cdfb0?.["obj"]?.["receivedAccountList"] || []);
        _0x7cfb87 = _0x7cfb87.map(_0x1dd760 => _0x1dd760.type + "x" + _0x1dd760.amount);
        _0x7cfb87.length ? this.log("端午推金币成功: " + _0x7cfb87.join(", ")) : this.log("端午推金币成功, 没有获得奖品");
      } else {
        this.log("端午推金币失败: " + (_0x2cdfb0?.["errorMessage"] || (_0x2cdfb0 ? JSON.stringify(_0x2cdfb0) : "无返回")));
      }
    } catch (_0x32d151) {
      console.log(_0x32d151);
    }
  }
  async dragonBoat2024_prizeDraw(_0x3f7ab7, _0x246530 = {}) {
    try {
      const _0x4181d1 = {
        drawType: _0x3f7ab7
      };
      let _0x3551b2 = {
          fn: "dragonBoat2024_prizeDraw",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024LotteryService~prizeDraw",
          headers: {
            ...this.getSign()
          },
          json: _0x4181d1
        },
        {
          result: _0x5d4942
        } = await this.request(_0x3551b2);
      if (_0x5d4942?.["success"]) {
        let {
          giftBagName: _0x23e07e,
          giftBagDesc: _0x133d62
        } = _0x5d4942?.["obj"];
        const _0x427b01 = {
          notify: true
        };
        this.log("端午奖池[" + _0x3f7ab7 + "]抽奖: [" + _0x23e07e + "]" + _0x133d62, _0x427b01);
      } else {
        this.log("端午奖池[" + _0x3f7ab7 + "]抽奖失败: " + (_0x5d4942?.["errorMessage"] || (_0x5d4942 ? JSON.stringify(_0x5d4942) : "无返回")));
      }
    } catch (_0x5b8285) {
      console.log(_0x5b8285);
    }
  }
  async anniversary2024_task(_0x239146 = {}) {
    await this.anniversary2024_weeklyGiftStatus();
    if (this.anniversary_black) {
      return;
    }
    await this.anniversary2024_game_list();
    await this.anniversary2024_taskList();
    await this.anniversary2024_queryAccountStatus();
  }
  async anniversary2024_draw_task(_0x530bca = {}) {
    await this.anniversary2024_queryAccountStatus_card();
  }
  async dragonBoat2024_task(_0x52bfc3 = {}) {
    let _0x3c6f80 = Date.now();
    if (_0x3c6f80 < 1716516000000 || _0x3c6f80 > 1718190000000) {
      return;
    }
    await this.dragonBoat2024_weeklyGiftStatus();
    if (this.dragonBoat_black) {
      return;
    }
    await this.dragonBoat2024_game_indexInfo();
    await this.dragonBoat2024_taskList();
    await this.dragonBoat2024_givePushTimes();
    await this.dragonBoat2024_coinStatus();
  }
  async memberDay_task(_0x5372f0 = {}) {
    let _0x59073c = new Date().getDate();
    _0x59073c >= 26 && _0x59073c <= 28 && (await this.memberDay_index());
  }
  async userTask(_0xcbf5b8 = {}) {
    _0x48fae2.log("\n-------------- 账号[" + this.index + "] --------------");
    if (!(await this.refresh_cookie())) {
      return;
    }
    await this.superWelfare_receiveRedPacket();
    await this.automaticSignFetchPackage();
    if (_0x4a4977 == "true") {
      await this.bee_indexData();
    }
    await this.memberDay_task();
    await this.dragonBoat2024_task();
  }
}
!(async () => {
  if (!(await _0x35a7e6())) {
    return;
  }
  await _0x6f15d7();
  _0x48fae2.read_env(_0x1799fa);
  let _0x5f8274 = _0x4a4977 == "true" ? "运行" : "不运行";
  _0x48fae2.log("");
  const _0x2ff307 = {
    notify: true
  };
  _0x48fae2.log("采蜜游戏目前设置为: " + _0x5f8274, _0x2ff307);
  _0x48fae2.log("");
  for (let _0x5872f7 of _0x48fae2.userList) {
    await _0x5872f7.userTask();
  }
})().catch(_0x369b52 => _0x48fae2.log(_0x369b52)).finally(() => _0x48fae2.exitNow());
async function _0x35a7e6(_0x19e1ca = 0) {
  let _0x5bba28 = false;
  try {
    const _0x10c38a = {
      fn: "auth",
      method: "get",
      url: _0x10a462,
      timeout: 20000
    };
    let {
      statusCode: _0x3920d4,
      result: _0x44e806
    } = await _0x41e2cc.request(_0x10c38a);
    if (_0x3920d4 != 200) {
      _0x19e1ca++ < MAX_AUTH_RETRY && (_0x5bba28 = await _0x35a7e6(_0x19e1ca));
      return _0x5bba28;
    }
    if (_0x44e806?.["code"] == 0) {
      _0x44e806 = JSON.parse(_0x44e806.data.file.data);
      if (_0x44e806?.["commonNotify"] && _0x44e806.commonNotify.length > 0) {
        const _0x1b6e6a = {
          notify: true
        };
        _0x48fae2.log(_0x44e806.commonNotify.join("\n") + "\n", _0x1b6e6a);
      }
      _0x44e806?.["commonMsg"] && _0x44e806.commonMsg.length > 0 && _0x48fae2.log(_0x44e806.commonMsg.join("\n") + "\n");
      if (_0x44e806[_0x375e27]) {
        let _0x3cc214 = _0x44e806[_0x375e27];
        _0x3cc214.status == 0 ? _0xbb27d8 >= _0x3cc214.version ? (_0x5bba28 = true, _0x48fae2.log(_0x3cc214.msg[_0x3cc214.status]), _0x48fae2.log(_0x3cc214.updateMsg), _0x48fae2.log("现在运行的脚本版本是：" + _0xbb27d8 + "，最新脚本版本：" + _0x3cc214.latestVersion)) : _0x48fae2.log(_0x3cc214.versionMsg) : _0x48fae2.log(_0x3cc214.msg[_0x3cc214.status]);
      } else {
        _0x48fae2.log(_0x44e806.errorMsg);
      }
    } else {
      _0x19e1ca++ < MAX_AUTH_RETRY && (_0x5bba28 = await _0x35a7e6(_0x19e1ca));
    }
  } catch (_0x460d8a) {
    _0x48fae2.log(_0x460d8a);
  } finally {
    return _0x5bba28;
  }
}
async function _0x6f15d7() {
  let _0x1ec4e5 = false;
  try {
    const _0x19e2a2 = {
      fn: "auth",
      method: "get",
      url: _0x416ed4
    };
    let {
      statusCode: _0x5088f1,
      result: _0x596637
    } = await _0x41e2cc.request(_0x19e2a2);
    if (_0x5088f1 != 200) {
      return Promise.resolve();
    }
    _0x596637?.["code"] == 0 && (_0x596637 = JSON.parse(_0x596637.data.file.data), _0x567431 = _0x596637?.["inviteUserId"] || _0x567431, _0x2193de = _0x596637?.["anniversary_2024"] || _0x2193de);
  } catch (_0x5bcd55) {
    _0x48fae2.log(_0x5bcd55);
  } finally {
    return _0x1ec4e5;
  }
}
function _0x43ee01(_0x13bb0e) {
  return new class {
    constructor(_0x4e4df5) {
      this.name = _0x4e4df5;
      this.startTime = Date.now();
      const _0x309d27 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x309d27);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x2f0d68, _0x4e8b45 = {}) {
      const _0x38fb9c = {
        console: true
      };
      Object.assign(_0x38fb9c, _0x4e8b45);
      if (_0x38fb9c.time) {
        let _0x44a18e = _0x38fb9c.fmt || "hh:mm:ss";
        _0x2f0d68 = "[" + this.time(_0x44a18e) + "]" + _0x2f0d68;
      }
      if (_0x38fb9c.notify) {
        this.notifyStr.push(_0x2f0d68);
      }
      if (_0x38fb9c.console) {
        console.log(_0x2f0d68);
      }
    }
    get(_0x5cc133, _0x1d6f79, _0x1a9724 = "") {
      let _0x33fb1b = _0x1a9724;
      _0x5cc133?.["hasOwnProperty"](_0x1d6f79) && (_0x33fb1b = _0x5cc133[_0x1d6f79]);
      return _0x33fb1b;
    }
    pop(_0x37b656, _0x22dca8, _0x3a885e = "") {
      let _0xabfad1 = _0x3a885e;
      _0x37b656?.["hasOwnProperty"](_0x22dca8) && (_0xabfad1 = _0x37b656[_0x22dca8], delete _0x37b656[_0x22dca8]);
      return _0xabfad1;
    }
    copy(_0x261774) {
      return Object.assign({}, _0x261774);
    }
    read_env(_0x462afc) {
      let _0x20f66e = _0x2e2a03.map(_0x2027b9 => process.env[_0x2027b9]);
      for (let _0x28ce4f of _0x20f66e.filter(_0x3b3233 => !!_0x3b3233)) {
        for (let _0x11d636 of _0x28ce4f.split(_0x3606f0).filter(_0xdea8cc => !!_0xdea8cc)) {
          if (this.userList.includes(_0x11d636)) {
            continue;
          }
          this.userList.push(new _0x462afc(_0x11d636));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x160145 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x2e2a03.map(_0xb35d4d => "[" + _0xb35d4d + "]").join("或"), _0x160145);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x4fa649, _0x3df300, _0x5d438d = {}) {
      while (_0x3df300.idx < _0x48fae2.userList.length) {
        let _0x1167e5 = _0x48fae2.userList[_0x3df300.idx++];
        if (!_0x1167e5.valid) {
          continue;
        }
        await _0x1167e5[_0x4fa649](_0x5d438d);
      }
    }
    async threadTask(_0x7c23ac, _0x77c837) {
      let _0x3adcb4 = [];
      const _0x2a7aa8 = {
        idx: 0
      };
      while (_0x77c837--) {
        _0x3adcb4.push(this.threads(_0x7c23ac, _0x2a7aa8));
      }
      await Promise.all(_0x3adcb4);
    }
    time(_0x5133a4, _0xbe5fae = null) {
      let _0x379707 = _0xbe5fae ? new Date(_0xbe5fae) : new Date(),
        _0xfc826 = {
          "M+": _0x379707.getMonth() + 1,
          "d+": _0x379707.getDate(),
          "h+": _0x379707.getHours(),
          "m+": _0x379707.getMinutes(),
          "s+": _0x379707.getSeconds(),
          "q+": Math.floor((_0x379707.getMonth() + 3) / 3),
          S: this.padStr(_0x379707.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x5133a4) && (_0x5133a4 = _0x5133a4.replace(RegExp.$1, (_0x379707.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x406297 in _0xfc826) new RegExp("(" + _0x406297 + ")").test(_0x5133a4) && (_0x5133a4 = _0x5133a4.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xfc826[_0x406297] : ("00" + _0xfc826[_0x406297]).substr(("" + _0xfc826[_0x406297]).length)));
      return _0x5133a4;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x54c665 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x54c665.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x4d6fba, _0x4371de, _0x1d1752 = {}) {
      let _0x1c4b4b = _0x1d1752.padding || "0",
        _0x1e8ba3 = _0x1d1752.mode || "l",
        _0xbc7d23 = String(_0x4d6fba),
        _0x1da39c = _0x4371de > _0xbc7d23.length ? _0x4371de - _0xbc7d23.length : 0,
        _0x23267d = "";
      for (let _0x14aac5 = 0; _0x14aac5 < _0x1da39c; _0x14aac5++) {
        _0x23267d += _0x1c4b4b;
      }
      _0x1e8ba3 == "r" ? _0xbc7d23 = _0xbc7d23 + _0x23267d : _0xbc7d23 = _0x23267d + _0xbc7d23;
      return _0xbc7d23;
    }
    json2str(_0x218b26, _0x55d3fb, _0x376732 = false) {
      let _0x45b4c4 = [];
      for (let _0x47fddf of Object.keys(_0x218b26).sort()) {
        let _0x466f5d = _0x218b26[_0x47fddf];
        if (_0x466f5d && _0x376732) {
          _0x466f5d = encodeURIComponent(_0x466f5d);
        }
        _0x45b4c4.push(_0x47fddf + "=" + _0x466f5d);
      }
      return _0x45b4c4.join(_0x55d3fb);
    }
    str2json(_0x320966, _0x1093e6 = false) {
      let _0x291985 = {};
      for (let _0xeacb7e of _0x320966.split("&")) {
        if (!_0xeacb7e) {
          continue;
        }
        let _0x391c9d = _0xeacb7e.indexOf("=");
        if (_0x391c9d == -1) {
          continue;
        }
        let _0x5ad250 = _0xeacb7e.substr(0, _0x391c9d),
          _0x1bdae2 = _0xeacb7e.substr(_0x391c9d + 1);
        if (_0x1093e6) {
          _0x1bdae2 = decodeURIComponent(_0x1bdae2);
        }
        _0x291985[_0x5ad250] = _0x1bdae2;
      }
      return _0x291985;
    }
    randomPattern(_0x5c32ee, _0x5bcd33 = "abcdef0123456789") {
      let _0x185e49 = "";
      for (let _0x53aaa7 of _0x5c32ee) {
        if (_0x53aaa7 == "x") {
          _0x185e49 += _0x5bcd33.charAt(Math.floor(Math.random() * _0x5bcd33.length));
        } else {
          _0x53aaa7 == "X" ? _0x185e49 += _0x5bcd33.charAt(Math.floor(Math.random() * _0x5bcd33.length)).toUpperCase() : _0x185e49 += _0x53aaa7;
        }
      }
      return _0x185e49;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x4687fc, _0x199234 = "abcdef0123456789") {
      let _0x1bae1f = "";
      for (let _0x32ee3b = 0; _0x32ee3b < _0x4687fc; _0x32ee3b++) {
        _0x1bae1f += _0x199234.charAt(Math.floor(Math.random() * _0x199234.length));
      }
      return _0x1bae1f;
    }
    randomList(_0x8bc5a2) {
      if (!_0x8bc5a2.length) {
        return null;
      }
      let _0x3a2e54 = Math.floor(Math.random() * _0x8bc5a2.length);
      return _0x8bc5a2[_0x3a2e54];
    }
    wait(_0x2045e7) {
      return new Promise(_0x193ce7 => setTimeout(_0x193ce7, _0x2045e7));
    }
    async exitNow() {
      await this.showmsg();
      let _0x851347 = Date.now(),
        _0x2df9a5 = (_0x851347 - this.startTime) / 1000;
      this.log("");
      const _0x210752 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x2df9a5 + "秒", _0x210752);
      process.exit(0);
    }
    normalize_time(_0xfa6668, _0x53166b = {}) {
      let _0x5d59dd = _0x53166b.len || default_timestamp_len;
      _0xfa6668 = _0xfa6668.toString();
      let _0x3e4b8a = _0xfa6668.length;
      while (_0x3e4b8a < _0x5d59dd) {
        _0xfa6668 += "0";
      }
      _0x3e4b8a > _0x5d59dd && (_0xfa6668 = _0xfa6668.slice(0, 13));
      return parseInt(_0xfa6668);
    }
    async wait_until(_0x1fb7c3, _0x24f6bb = {}) {
      let _0x4070bd = _0x24f6bb.logger || this,
        _0x5d9980 = _0x24f6bb.interval || default_wait_interval,
        _0x30706b = _0x24f6bb.limit || default_wait_limit,
        _0x557f0f = _0x24f6bb.ahead || default_wait_ahead;
      if (typeof _0x1fb7c3 == "string" && _0x1fb7c3.includes(":")) {
        if (_0x1fb7c3.includes("-")) {
          _0x1fb7c3 = new Date(_0x1fb7c3).getTime();
        } else {
          let _0x1a1df8 = this.time("yyyy-MM-dd ");
          _0x1fb7c3 = new Date(_0x1a1df8 + _0x1fb7c3).getTime();
        }
      }
      let _0x10103f = this.normalize_time(_0x1fb7c3) - _0x557f0f,
        _0x1ea56c = this.time("hh:mm:ss.S", _0x10103f),
        _0x1cb325 = Date.now();
      _0x1cb325 > _0x10103f && (_0x10103f += 86400000);
      let _0x3151b8 = _0x10103f - _0x1cb325;
      if (_0x3151b8 > _0x30706b) {
        const _0x50092f = {
          time: true
        };
        _0x4070bd.log("离目标时间[" + _0x1ea56c + "]大于" + _0x30706b / 1000 + "秒,不等待", _0x50092f);
      } else {
        const _0x40b7f5 = {
          time: true
        };
        _0x4070bd.log("离目标时间[" + _0x1ea56c + "]还有" + _0x3151b8 / 1000 + "秒,开始等待", _0x40b7f5);
        while (_0x3151b8 > 0) {
          let _0x30aa16 = Math.min(_0x3151b8, _0x5d9980);
          await this.wait(_0x30aa16);
          _0x1cb325 = Date.now();
          _0x3151b8 = _0x10103f - _0x1cb325;
        }
        const _0x3815ed = {
          time: true
        };
        _0x4070bd.log("已完成等待", _0x3815ed);
      }
    }
    async wait_gap_interval(_0xb8ac02, _0x4993d3) {
      let _0x269ab4 = Date.now() - _0xb8ac02;
      _0x269ab4 < _0x4993d3 && (await this.wait(_0x4993d3 - _0x269ab4));
    }
  }(_0x13bb0e);
}