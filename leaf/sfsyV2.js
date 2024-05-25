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
const _0x239c4b = _0x3f079c("顺丰速运"),
  _0x930422 = require("got"),
  _0x5c1cb5 = require("crypto-js"),
  {
    CookieJar: _0x3f2efa
  } = require("tough-cookie"),
  _0x117af4 = "sfsy",
  _0x2bd326 = /[\n]/,
  _0x8eb6bd = [_0x117af4 + "Url"],
  _0x1a7924 = process.env[_0x117af4 + "Bee"] || "false",
  _0x43688c = 8000,
  _0x236ed4 = 3;
const _0x3781e0 = 2.2,
  _0x591fed = "sfsy",
  _0x16900f = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x3a106c = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x591fed + ".json",
  _0x37258e = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  _0x298a7a = "wwesldfs29aniversaryvdld29",
  _0x45dd70 = "MCS-MIMP-CORE",
  _0x3f7a6e = "czflqdlhbxcx",
  _0x6e3543 = "wxwd26mem1",
  _0x31b237 = {
    BAOZHU_CARD: "[爆竹卡]",
    CHUNLIAN_CARD: "[春联卡]",
    DENGLONG_CARD: "[灯笼卡]",
    HONGBAO_CARD: "[红包卡]",
    YUANXIAO_CARD: "[元宵卡]",
    CHUANGHUA_CARD: "[窗花卡]",
    COMMON_CARD: "[万能卡]"
  };
const _0x397682 = {
  PUSH_TIMES: "推金币次数",
  COIN: "金币",
  WELFARE_CARD: "财富卡",
  RICH_CARD_GAME: "发财卡"
};
const _0x2374ff = "YEAR_END_2023",
  _0xbfe744 = "ANNIVERSARY_2024",
  _0x170452 = "MEMBER_DAY",
  _0x29d21f = "DRAGONBOAT_2024",
  _0x5d6701 = 8,
  _0x148eb9 = 1 << _0x5d6701 - 1,
  _0xe9ccb5 = ["完成连签7天", "参与积分活动", "每月累计寄件", "完成每月任务", "与好友微信分享会员福利", "DAILY_VIP_TASK_TYPE", "去新增一个收件偏好", "用行业模板寄件下单"];
let _0x2d776d = [],
  _0x10bb7a = {};
class _0x5f2202 {
  constructor() {
    this.index = _0x239c4b.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x1deb2e = {
      limit: 0
    };
    const _0x1fa2ea = {
      Connection: "keep-alive"
    };
    const _0x54d90a = {
      retry: _0x1deb2e,
      timeout: _0x43688c,
      followRedirect: false,
      headers: _0x1fa2ea
    };
    this.got = _0x930422.extend(_0x54d90a);
  }
  log(_0x46ed54, _0x269b85 = {}) {
    var _0x487c26 = "",
      _0x412127 = _0x239c4b.userCount.toString().length;
    if (this.index) {
      _0x487c26 += "账号[" + _0x239c4b.padStr(this.index, _0x412127) + "]";
    }
    if (this.name) {
      _0x487c26 += "[" + this.name + "]";
    }
    _0x239c4b.log(_0x487c26 + _0x46ed54, _0x269b85);
  }
  async request(_0x3d0e50) {
    const _0x378ae3 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x1b5524 = ["TimeoutError"];
    var _0x31873d = null,
      _0x27ca69 = 0,
      _0x3e1299 = _0x3d0e50.fn || _0x3d0e50.url;
    _0x3d0e50.method = _0x3d0e50?.["method"]?.["toUpperCase"]() || "GET";
    let _0x16cbe2;
    while (_0x27ca69 < _0x236ed4) {
      try {
        _0x27ca69++;
        _0x16cbe2 = null;
        let _0x1e384b = null,
          _0x437ca8 = _0x3d0e50?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x43688c,
          _0x5d094e = false;
        await new Promise(async _0x538c7c => {
          setTimeout(() => {
            _0x5d094e = true;
            _0x538c7c();
          }, _0x437ca8);
          await this.got(_0x3d0e50).then(_0x35ae96 => {
            _0x31873d = _0x35ae96;
          }, _0x2104eb => {
            _0x1e384b = _0x2104eb;
            _0x31873d = _0x2104eb.response;
            _0x16cbe2 = _0x1e384b?.["code"];
          });
          _0x538c7c();
        });
        if (_0x5d094e) {
          this.log("[" + _0x3e1299 + "]请求超时(" + _0x437ca8 / 1000 + "秒)，重试第" + _0x27ca69 + "次");
        } else {
          if (_0x1b5524.includes(_0x1e384b?.["name"])) {
            this.log("[" + _0x3e1299 + "]请求超时(" + _0x1e384b.code + ")，重试第" + _0x27ca69 + "次");
          } else {
            if (_0x378ae3.includes(_0x1e384b?.["code"])) {
              this.log("[" + _0x3e1299 + "]请求错误(" + _0x1e384b.code + ")，重试第" + _0x27ca69 + "次");
            } else {
              let _0x7f1be7 = _0x31873d?.["statusCode"] || 999,
                _0x4e5f21 = _0x7f1be7 / 100 | 0;
              if (_0x4e5f21 > 3) {
                this.log("请求[" + _0x3e1299 + "]返回[" + _0x7f1be7 + "]");
              }
              if (_0x4e5f21 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x43d3f2) {
        _0x43d3f2.name == "TimeoutError" ? this.log("[" + _0x3e1299 + "]请求超时，重试第" + _0x27ca69 + "次") : this.log("[" + _0x3e1299 + "]请求错误(" + _0x43d3f2.message + ")，重试第" + _0x27ca69 + "次");
      }
    }
    if (_0x31873d == null) {
      return Promise.resolve({
        statusCode: _0x16cbe2 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x203952,
      headers: _0x25a6a9,
      body: _0x302168
    } = _0x31873d;
    if (_0x302168) {
      try {
        _0x302168 = JSON.parse(_0x302168);
      } catch {}
    }
    const _0x3dc2f7 = {
      statusCode: _0x203952,
      headers: _0x25a6a9,
      result: _0x302168
    };
    return Promise.resolve(_0x3dc2f7);
  }
}
let _0x128f56 = new _0x5f2202();
class _0xd75351 extends _0x5f2202 {
  constructor(_0x2ae0e5) {
    super();
    this.refreshUrl = _0x2ae0e5;
    this.cookieJar = new _0x3f2efa();
    this.deviceId = _0x239c4b.randomPattern("xxxxxxxx-xxxx-xxxx");
    this.jika_black = false;
    this.anniversary_black = false;
    this.dragonBoat_black = false;
    this.memberDay_black = false;
    this.memberDay_redPacket_drewToday = false;
    this.memberDay_redPacket_map = {};
    const _0x3052f4 = {
      "User-Agent": _0x37258e
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x3052f4
    });
  }
  getSign(_0x338e3d = {}) {
    let _0xfd557e = Date.now(),
      _0x135dfd = "token=" + _0x298a7a + "&timestamp=" + _0xfd557e + "&sysCode=" + _0x45dd70,
      _0x5eb2aa = _0x5c1cb5.MD5(_0x135dfd).toString();
    const _0x546827 = {
      platform: "MINI_PROGRAM",
      channel: _0x6e3543,
      sysCode: _0x45dd70,
      timestamp: _0xfd557e,
      signature: _0x5eb2aa
    };
    return _0x546827;
  }
  async refresh_cookie(_0x36ab19 = {}) {
    let _0x4ae444 = false;
    try {
      const _0x229855 = {
        fn: "refresh_cookie",
        method: "get",
        url: this.refreshUrl
      };
      let {
        statusCode: _0x9298d4,
        headers: _0x59439e
      } = await this.request(_0x229855);
      if (_0x9298d4 == 302) {
        for (let _0x1db4a1 of _0x59439e["set-cookie"]) {
          if (_0x1db4a1.includes("_login_mobile_")) {
            let _0x2ff1b3 = _0x1db4a1.match(/_login_mobile_=(\d+);/);
            _0x2ff1b3 && (this.name = _0x2ff1b3[1]);
            break;
          }
        }
        _0x4ae444 = true;
        this.log("登录成功");
      } else {
        this.log("登录失败[" + _0x9298d4 + "]");
      }
    } catch (_0x571812) {
      console.log(_0x571812);
    } finally {
      return _0x4ae444;
    }
  }
  async personalInfo(_0x3a420a = {}) {
    try {
      let _0x3d1b9b = {
          fn: "personalInfo",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/member/personalInfo",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0xf69087
        } = await this.request(_0x3d1b9b);
      if (_0xf69087?.["success"]) {
        const _0x42b9fa = {
          notify: true
        };
        this.log("积分: " + _0xf69087.obj.availablePoints, _0x42b9fa);
      } else {
        this.log("查询账号信息失败: " + (_0xf69087?.["errorMessage"] || (_0xf69087 ? JSON.stringify(_0xf69087) : "无返回")));
      }
    } catch (_0x4a5a3e) {
      console.log(_0x4a5a3e);
    }
  }
  async queryUserInfo(_0xc1b947 = {}) {
    try {
      let _0x152847 = {
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
          result: _0x490b15
        } = await this.request(_0x152847);
      if (_0x490b15?.["success"]) {
        let {
            usablePoint: _0x17c6a2,
            cycleAdd: _0x1ee3ef,
            cycleSub: _0x2050ee,
            leavePoint: _0x1a84b6,
            pointClearCycle: _0x446f55
          } = _0x490b15.obj,
          _0x4575eb = "积分: " + _0x17c6a2,
          _0x5cee3e = _0x1a84b6 - _0x2050ee,
          _0x181ac5 = new Date(_0x446f55 + " 00:00:00");
        _0x181ac5.setFullYear(_0x181ac5.getFullYear() + 1);
        let _0x4667df = _0x181ac5.getTime();
        if (_0x5cee3e > 0 && _0x4667df > Date.now()) {
          let _0x1c7cc2 = _0x239c4b.time("yyyy-MM-dd", _0x4667df);
          _0x4575eb += ", 有" + _0x5cee3e + "积分将在" + _0x1c7cc2 + "过期";
        }
        const _0x48b93e = {
          notify: true
        };
        this.log(_0x4575eb, _0x48b93e);
      } else {
        this.log("查询账号信息失败: " + (_0x490b15?.["errorMessage"] || (_0x490b15 ? JSON.stringify(_0x490b15) : "无返回")));
      }
    } catch (_0xd7de71) {
      console.log(_0xd7de71);
    }
  }
  async automaticSignFetchPackage(_0x1ba327 = {}) {
    try {
      let _0x4be1b1 = {
          fn: "automaticSignFetchPackage",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage",
          headers: {
            ...this.getSign()
          },
          json: {
            comeFrom: _0x239c4b.get(_0x1ba327, "comeFrom", "vioin"),
            channelFrom: _0x239c4b.get(_0x1ba327, "channelFrom", "SFAPP")
          }
        },
        {
          result: _0x4cdb43
        } = await this.request(_0x4be1b1);
      if (_0x4cdb43?.["success"]) {
        _0x4cdb43?.["obj"]?.["hasFinishSign"] ? this.log("今天已签到") : _0x4cdb43?.["obj"]?.["integralTaskSignPackageVOList"]?.["length"] && this.log("签到获得: " + _0x4cdb43?.["obj"]?.["integralTaskSignPackageVOList"]?.["map"](_0x4d504b => _0x4d504b.packetName)?.["join"](", "));
        await this.queryPointTaskAndSignFromES();
        const _0x1ccd5a = {
          channelType: 3
        };
        await this.queryPointTaskAndSignFromES(_0x1ccd5a);
        await this.queryUserInfo();
      } else {
        this.log("查询签到失败: " + (_0x4cdb43?.["errorMessage"] || (_0x4cdb43 ? JSON.stringify(_0x4cdb43) : "无返回")));
      }
    } catch (_0x5a1337) {
      console.log(_0x5a1337);
    }
  }
  async queryPointTaskAndSignFromES(_0x54cc7d = {}) {
    try {
      let _0x35f7c4 = {
          fn: "queryPointTaskAndSignFromES",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES",
          headers: {
            ...this.getSign()
          },
          json: {
            deviceId: this.deviceId,
            channelType: String(_0x239c4b.get(_0x54cc7d, "channelType", 1))
          }
        },
        {
          result: _0x3270a3
        } = await this.request(_0x35f7c4);
      if (_0x3270a3?.["success"]) {
        for (let _0x49f119 of _0x3270a3.obj.taskTitleLevels) {
          switch (_0x49f119.status) {
            case 2:
              if (_0xe9ccb5.includes(_0x49f119.title)) {
                break;
              }
              await this.finishTask(_0x49f119);
            case 1:
              await this.fetchIntegral(_0x49f119);
              break;
            case 3:
              break;
            default:
              this.log("任务[" + _0x49f119.title + "] -- 未知状态[" + _0x49f119.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x3270a3?.["errorMessage"] || (_0x3270a3 ? JSON.stringify(_0x3270a3) : "无返回")));
      }
    } catch (_0x3aa5f7) {
      console.log(_0x3aa5f7);
    }
  }
  async finishTask(_0x1f78f6, _0x5b43fc = {}) {
    try {
      const _0x157fb5 = {
        taskCode: _0x1f78f6.taskCode
      };
      let _0x4f0645 = {
          fn: "finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x157fb5
        },
        {
          result: _0x34a63f
        } = await this.request(_0x4f0645);
      _0x34a63f?.["success"] ? this.log("完成任务[" + _0x1f78f6.title + "]成功") : this.log("完成任务[" + _0x1f78f6.title + "]失败: " + (_0x34a63f?.["errorMessage"] || (_0x34a63f ? JSON.stringify(_0x34a63f) : "无返回")));
    } catch (_0x24487e) {
      console.log(_0x24487e);
    }
  }
  async fetchIntegral(_0x143a69, _0x1f869d = {}) {
    try {
      let _0x36b50c = {
          fn: "fetchIntegral",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral",
          headers: {
            ...this.getSign()
          },
          json: {
            strategyId: _0x143a69.strategyId,
            taskId: _0x143a69.taskId,
            taskCode: _0x143a69.taskCode,
            deviceId: this.deviceId
          }
        },
        {
          result: _0x10f88c
        } = await this.request(_0x36b50c);
      _0x10f88c?.["success"] ? this.log("领取任务[" + _0x143a69.title + "]奖励: " + _0x10f88c.obj.point + "积分") : this.log("领取任务[" + _0x143a69.title + "]奖励失败: " + (_0x10f88c?.["errorMessage"] || (_0x10f88c ? JSON.stringify(_0x10f88c) : "无返回")));
    } catch (_0x1050f6) {
      console.log(_0x1050f6);
    }
  }
  async queryPointTaskAndSign(_0x14ee5f = {}) {
    try {
      let _0x147c25 = {
          fn: "queryPointTaskAndSign",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/queryPointTaskAndSign",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x239c4b.get(_0x14ee5f, "channel", "SFAPP"),
            pageType: _0x239c4b.get(_0x14ee5f, "pageType", "APP_MINE_TASK")
          }
        },
        {
          result: _0x4f719d
        } = await this.request(_0x147c25);
      if (_0x4f719d?.["success"]) {
        for (let _0x51db2c of _0x4f719d?.["obj"]?.["taskTitleLevels"] || []) {
          if (_0xe9ccb5.includes(_0x51db2c.title)) {
            continue;
          }
          await this.scanPageToRecord(_0x51db2c);
          await this.fetchPoint(_0x51db2c);
        }
      } else {
        this.log("查询旧版任务失败: " + (_0x4f719d?.["errorMessage"] || (_0x4f719d ? JSON.stringify(_0x4f719d) : "无返回")));
      }
    } catch (_0x26c513) {
      console.log(_0x26c513);
    }
  }
  async scanPageToRecord(_0x4d12da, _0x4d6044 = {}) {
    try {
      let _0x1e3d86 = {
          fn: "scanPageToRecord",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/scanPageToRecord",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x239c4b.get(_0x4d6044, "channel", "SFAPP"),
            pageType: _0x4d12da.pageType
          }
        },
        {
          result: _0x40f853
        } = await this.request(_0x1e3d86);
      _0x40f853?.["success"] ? this.log("完成任务[" + _0x4d12da.title + "]成功") : this.log("完成任务[" + _0x4d12da.title + "]失败: " + (_0x40f853?.["errorMessage"] || (_0x40f853 ? JSON.stringify(_0x40f853) : "无返回")));
    } catch (_0x58cfaf) {
      console.log(_0x58cfaf);
    }
  }
  async fetchPoint(_0x219f50, _0x440624 = {}) {
    try {
      let _0xeb5523 = {
          fn: "fetchPoint",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/fetchPoint",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x239c4b.get(_0x440624, "channel", "SFAPP"),
            pageType: _0x219f50.pageType,
            deviceId: this.deviceId
          }
        },
        {
          result: _0x4f53fd
        } = await this.request(_0xeb5523);
      _0x4f53fd?.["success"] ? this.log("领取任务[" + _0x219f50.title + "]奖励成功") : this.log("领取任务[" + _0x219f50.title + "]奖励失败: " + (_0x4f53fd?.["errorMessage"] || (_0x4f53fd ? JSON.stringify(_0x4f53fd) : "无返回")));
    } catch (_0x2c2418) {
      console.log(_0x2c2418);
    }
  }
  async personalInfoNew(_0x4002e = {}) {
    try {
      let _0x2a1265 = {
          fn: "personalInfoNew",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~personalInfoNew",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x3e4a6d
        } = await this.request(_0x2a1265);
      if (_0x3e4a6d?.["success"]) {
        this.userId = _0x3e4a6d.obj.userId;
        const _0x31a886 = {
          notify: true
        };
        this.log("积分: " + _0x3e4a6d.obj.availablePoints, _0x31a886);
      } else {
        this.log("查询账号积分失败: " + (_0x3e4a6d?.["errorMessage"] || (_0x3e4a6d ? JSON.stringify(_0x3e4a6d) : "无返回")));
      }
    } catch (_0x8241d8) {
      console.log(_0x8241d8);
    }
  }
  async bee_indexData(_0x21732d = {}) {
    try {
      let _0x4dcecc = _0x239c4b.randomList(_0x2d776d.filter(_0x4ae56b => _0x4ae56b != this.userId));
      const _0x226957 = {
        inviteUserId: _0x4dcecc
      };
      let _0xfd33f = {
        fn: "bee_indexData",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~indexData",
        headers: {
          ...this.getSign()
        },
        json: _0x226957
      };
      {
        let {
          result: _0x3f1a1d
        } = await this.request(_0x239c4b.copy(_0xfd33f));
        if (_0x3f1a1d?.["success"]) {
          _0x3f1a1d?.["obj"]?.["friendAwards"]?.["length"] && this.log("获得奖励: " + _0x3f1a1d.obj.friendAwards.map(_0x46adec => _0x46adec.name).join(","));
          let _0x44613e = _0x3f1a1d?.["obj"]?.["gameNum"] || 0;
          this.log("可以采蜜冒险" + _0x44613e + "次");
          while (_0x44613e-- > 0) {
            await this.bee_gameReport();
          }
          await this.bee_taskDetail();
        } else {
          const _0x2906b6 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x3f1a1d?.["errorMessage"] || (_0x3f1a1d ? JSON.stringify(_0x3f1a1d) : "无返回")), _0x2906b6);
          return;
        }
      }
      {
        let {
          result: _0x7e9688
        } = await this.request(_0x239c4b.copy(_0xfd33f));
        if (_0x7e9688?.["success"]) {
          for (let _0x31458b of _0x7e9688?.["obj"]?.["taskDetail"] || []) {
            await this.bee_receiveHoney(_0x31458b);
          }
        } else {
          const _0x2bb1ec = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x7e9688?.["errorMessage"] || (_0x7e9688 ? JSON.stringify(_0x7e9688) : "无返回")), _0x2bb1ec);
          return;
        }
      }
      {
        let {
          result: _0xd0e0bb
        } = await this.request(_0x239c4b.copy(_0xfd33f));
        if (_0xd0e0bb?.["success"]) {
          const _0x864244 = {
            notify: true
          };
          this.log("采蜜游戏丰蜜: " + (_0xd0e0bb?.["obj"]?.["usableHoney"] || 0), _0x864244);
        } else {
          const _0xe44bfe = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0xd0e0bb?.["errorMessage"] || (_0xd0e0bb ? JSON.stringify(_0xd0e0bb) : "无返回")), _0xe44bfe);
          return;
        }
      }
    } catch (_0x22ac23) {
      console.log(_0x22ac23);
    }
  }
  async bee_receiveHoney(_0x4e957d, _0x348ef4 = {}) {
    try {
      const _0x1c9746 = {
        taskType: _0x4e957d.type
      };
      let _0x54da52 = {
          fn: "bee_receiveHoney",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~receiveHoney",
          headers: {
            ...this.getSign()
          },
          json: _0x1c9746
        },
        {
          result: _0x34559a
        } = await this.request(_0x54da52);
      _0x34559a?.["success"] ? this.log("领取[" + _0x4e957d.type + "]奖励获得: " + _0x4e957d.value + "丰蜜") : this.log("领取[" + _0x4e957d.type + "]奖励失败: " + (_0x34559a?.["errorMessage"] || (_0x34559a ? JSON.stringify(_0x34559a) : "无返回")));
    } catch (_0x179699) {
      console.log(_0x179699);
    }
  }
  async bee_gameReport(_0x30c9e5 = {}) {
    try {
      let _0x3df669 = 20;
      const _0x3a6334 = {
        gatherHoney: _0x3df669
      };
      let _0x18717f = {
          fn: "bee_gameReport",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeGameService~gameReport",
          headers: {
            ...this.getSign()
          },
          json: _0x3a6334
        },
        {
          result: _0x159f02
        } = await this.request(_0x18717f);
      _0x159f02?.["success"] ? this.log("采蜜冒险获得" + _0x3df669 + "丰蜜") : this.log("采蜜冒险失败: " + (_0x159f02?.["errorMessage"] || (_0x159f02 ? JSON.stringify(_0x159f02) : "无返回")));
    } catch (_0x1f1fd9) {
      console.log(_0x1f1fd9);
    }
  }
  async bee_taskDetail(_0x4e433c = {}) {
    try {
      let _0x2b7dcf = {
          fn: "bee_taskDetail",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~taskDetail",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x328288
        } = await this.request(_0x2b7dcf);
      if (_0x328288?.["success"]) {
        for (let _0x5f206c of _0x328288.obj.list) {
          if (!_0x5f206c.taskCode) {
            continue;
          }
          switch (_0x5f206c.status) {
            case 2:
              if (_0xe9ccb5.includes(_0x5f206c.taskType)) {
                break;
              }
              await this.bee_finishTask(_0x5f206c);
            case 1:
            case 3:
              break;
            default:
              this.log("任务[" + _0x5f206c.title + "] -- 未知状态[" + _0x5f206c.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x328288?.["errorMessage"] || (_0x328288 ? JSON.stringify(_0x328288) : "无返回")));
      }
    } catch (_0x374bf4) {
      console.log(_0x374bf4);
    }
  }
  async bee_finishTask(_0x359e5a, _0x558e95 = {}) {
    try {
      const _0x816f5e = {
        taskCode: _0x359e5a.taskCode
      };
      let _0x5c3978 = {
          fn: "bee_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x816f5e
        },
        {
          result: _0x4b257b
        } = await this.request(_0x5c3978);
      _0x4b257b?.["success"] ? this.log("完成采蜜任务[" + _0x359e5a.taskType + "]成功") : this.log("完成采蜜任务[" + _0x359e5a.taskType + "]失败: " + (_0x4b257b?.["errorMessage"] || (_0x4b257b ? JSON.stringify(_0x4b257b) : "无返回")));
    } catch (_0x283a8b) {
      console.log(_0x283a8b);
    }
  }
  async superWelfare_receiveRedPacket(_0x3081e5 = {}) {
    try {
      const _0x41b27e = {
        channel: _0x3f7a6e
      };
      let _0x110123 = {
          fn: "superWelfare_receiveRedPacket",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberActLengthy~redPacketActivityService~superWelfare~receiveRedPacket",
          headers: {
            ...this.getSign()
          },
          json: _0x41b27e
        },
        {
          result: _0x298408
        } = await this.request(_0x110123);
      if (_0x298408?.["success"]) {
        let _0x545f61 = _0x298408?.["obj"]?.["giftList"];
        if (_0x298408?.["obj"]?.["extraGiftList"]?.["length"]) {
          _0x545f61 = _0x545f61.concat(_0x298408.obj.extraGiftList);
        }
        let _0xd80020 = _0x545f61?.["map"](_0x3cd357 => _0x3cd357.giftName)?.["join"](", ") || "",
          _0x28ef1d = _0x298408?.["obj"]?.["receiveStatus"] == 1 ? "领取成功" : "已领取过";
        const _0x1ce8bc = {
          notify: true
        };
        this.log("超值福利签到[" + _0x28ef1d + "]: " + _0xd80020, _0x1ce8bc);
      } else {
        this.log("超值福利签到失败: " + (_0x298408?.["errorMessage"] || (_0x298408 ? JSON.stringify(_0x298408) : "无返回")));
      }
    } catch (_0x31911b) {
      console.log(_0x31911b);
    }
  }
  async memberDay_index(_0x1a70f0 = {}) {
    try {
      let _0x37343d = _0x239c4b.randomList(_0x2d776d.filter(_0x1e06dd => _0x1e06dd != this.userId));
      const _0x5ea450 = {
        inviteUserId: _0x37343d
      };
      let _0x3b31c7 = {
          fn: "memberDay_index",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~index",
          headers: {
            ...this.getSign()
          },
          json: _0x5ea450
        },
        {
          result: _0x2b2047
        } = await this.request(_0x3b31c7);
      if (_0x2b2047?.["success"]) {
        let {
          lotteryNum: _0x86e7bd,
          canReceiveInviteAward: _0x1cc830,
          risk: _0x24b911
        } = _0x2b2047?.["obj"];
        _0x1cc830 && (await this.memberDay_receiveInviteAward(_0x37343d));
        await this.memberDay_redPacketReceivedStatus();
        _0x86e7bd = _0x86e7bd || 0;
        this.log("会员日可以抽奖" + _0x86e7bd + "次");
        while (_0x86e7bd-- > 0) {
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
        let _0x149edb = _0x2b2047?.["errorMessage"] || (_0x2b2047 ? JSON.stringify(_0x2b2047) : "无返回");
        this.log("查询会员日失败: " + _0x149edb);
        if (_0x149edb?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x2834a6 = {
            notify: true
          };
          this.log("会员日任务风控", _0x2834a6);
        }
      }
    } catch (_0x49f10e) {
      console.log(_0x49f10e);
    }
  }
  async memberDay_receiveInviteAward(_0x1e859c, _0x547205 = {}) {
    try {
      const _0x20b4c9 = {
        inviteUserId: _0x1e859c
      };
      let _0x103e05 = {
          fn: "memberDay_receiveInviteAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~receiveInviteAward",
          headers: {
            ...this.getSign()
          },
          json: _0x20b4c9
        },
        {
          result: _0x441446
        } = await this.request(_0x103e05);
      if (_0x441446?.["success"]) {
        let {
          productName = "空气"
        } = _0x441446?.["obj"] || {};
        const _0x9cd450 = {
          notify: true
        };
        this.log("会员日奖励: " + productName, _0x9cd450);
      } else {
        let _0x46f26a = _0x441446?.["errorMessage"] || (_0x441446 ? JSON.stringify(_0x441446) : "无返回");
        this.log("领取会员日奖励失败: " + _0x46f26a);
        if (_0x46f26a?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x2ecfed = {
            notify: true
          };
          this.log("会员日任务风控", _0x2ecfed);
        }
      }
    } catch (_0x327cc8) {
      console.log(_0x327cc8);
    }
  }
  async memberDay_lottery(_0x449621 = {}) {
    try {
      let _0x12ed1e = {
          fn: "memberDay_lottery",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayLotteryService~lottery",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x3071f4
        } = await this.request(_0x12ed1e);
      if (_0x3071f4?.["success"]) {
        let {
          productName = "空气"
        } = _0x3071f4?.["obj"] || {};
        const _0x123e10 = {
          notify: true
        };
        this.log("会员日抽奖: " + productName, _0x123e10);
      } else {
        let _0x49e4f7 = _0x3071f4?.["errorMessage"] || (_0x3071f4 ? JSON.stringify(_0x3071f4) : "无返回");
        this.log("会员日抽奖失败: " + _0x49e4f7);
        if (_0x49e4f7?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x9e0989 = {
            notify: true
          };
          this.log("会员日任务风控", _0x9e0989);
        }
      }
    } catch (_0x23e200) {
      console.log(_0x23e200);
    }
  }
  async memberDay_taskList(_0x3f18fb = {}) {
    try {
      let _0x39c6ed = {
          fn: "memberDay_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0x170452,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x161449
        } = await this.request(_0x39c6ed);
      if (_0x161449?.["success"]) {
        let _0x3f12bf = _0x161449?.["obj"] || [];
        for (let _0x32c737 of _0x3f12bf.filter(_0x2804d1 => _0x2804d1.status == 1)) {
          if (this.memberDay_black) {
            return;
          }
          await this.memberDay_fetchMixTaskReward(_0x32c737);
        }
        for (let _0x19f6ad of _0x3f12bf.filter(_0x2b387c => _0x2b387c.status == 2)) {
          if (this.memberDay_black) {
            return;
          }
          switch (_0x19f6ad.taskType) {
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
                for (let _0x1eb210 = 0; _0x1eb210 < _0x19f6ad.restFinishTime && !this.memberDay_black; _0x1eb210++) {
                  await this.memberDay_finishTask(_0x19f6ad);
                }
                break;
              }
          }
        }
      } else {
        let _0x4248c2 = _0x161449?.["errorMessage"] || (_0x161449 ? JSON.stringify(_0x161449) : "无返回");
        this.log("查询会员日任务失败: " + _0x4248c2);
        if (_0x4248c2?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x2ae19b = {
            notify: true
          };
          this.log("会员日任务风控", _0x2ae19b);
        }
      }
    } catch (_0x683a4b) {
      console.log(_0x683a4b);
    }
  }
  async memberDay_finishTask(_0x7ba1a, _0x526bc7 = {}) {
    try {
      const _0x3606d7 = {
        taskCode: _0x7ba1a.taskCode
      };
      let _0x47aaee = {
          fn: "memberDay_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x3606d7
        },
        {
          result: _0x2f16bf
        } = await this.request(_0x47aaee);
      if (_0x2f16bf?.["success"]) {
        this.log("完成会员日任务[" + _0x7ba1a.taskName + "]成功");
        await this.memberDay_fetchMixTaskReward(_0x7ba1a);
      } else {
        let _0x329e96 = _0x2f16bf?.["errorMessage"] || (_0x2f16bf ? JSON.stringify(_0x2f16bf) : "无返回");
        this.log("完成会员日任务[" + _0x7ba1a.taskName + "]失败: " + _0x329e96);
        if (_0x329e96?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0xa62d2 = {
            notify: true
          };
          this.log("会员日任务风控", _0xa62d2);
        }
      }
    } catch (_0xe7379f) {
      console.log(_0xe7379f);
    }
  }
  async memberDay_fetchMixTaskReward(_0x30bf66, _0x2c9b5f = {}) {
    try {
      let _0x155159 = {
          fn: "memberDay_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x30bf66.taskType,
            activityCode: _0x170452,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x2df37a
        } = await this.request(_0x155159);
      if (_0x2df37a?.["success"]) {
        this.log("领取会员日任务[" + _0x30bf66.taskName + "]奖励成功");
      } else {
        let _0x44b70c = _0x2df37a?.["errorMessage"] || (_0x2df37a ? JSON.stringify(_0x2df37a) : "无返回");
        this.log("领取会员日任务[" + _0x30bf66.taskName + "]奖励失败: " + _0x44b70c);
        if (_0x44b70c?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x3afd9e = {
            notify: true
          };
          this.log("会员日任务风控", _0x3afd9e);
        }
      }
    } catch (_0x42958e) {
      console.log(_0x42958e);
    }
  }
  async memberDay_redPacketReceivedStatus(_0x2b4086 = {}) {
    try {
      let _0x522eef = {
          fn: "memberDay_redPacketReceivedStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~redPacketReceivedStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0xb45026
        } = await this.request(_0x522eef);
      if (_0xb45026?.["success"]) {
        for (let _0x32c799 of _0xb45026?.["obj"] || []) {
          if (_0x32c799.received) {
            continue;
          }
          let _0x220351 = new Date().getHours();
          _0x32c799.receiveHour == _0x220351 && (await this.memberDay_receiveRedPacket(_0x32c799.receiveHour));
        }
      } else {
        let _0x1d593d = _0xb45026?.["errorMessage"] || (_0xb45026 ? JSON.stringify(_0xb45026) : "无返回");
        this.log("会员日查询整点领红包失败: " + _0x1d593d);
        if (_0x1d593d?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x51bd01 = {
            notify: true
          };
          this.log("会员日任务风控", _0x51bd01);
        }
      }
    } catch (_0x226256) {
      console.log(_0x226256);
    }
  }
  async memberDay_receiveRedPacket(_0x7d75ab, _0x5024ff = {}) {
    try {
      const _0x2875d8 = {
        receiveHour: _0x7d75ab
      };
      let _0x54c8e9 = {
          fn: "memberDay_receiveRedPacket",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~receiveRedPacket",
          headers: {
            ...this.getSign()
          },
          json: _0x2875d8
        },
        {
          result: _0x3b0b65
        } = await this.request(_0x54c8e9);
      if (_0x3b0b65?.["success"]) {
        this.log("会员日领取" + _0x7d75ab + "点红包成功");
      } else {
        let _0x122100 = _0x3b0b65?.["errorMessage"] || (_0x3b0b65 ? JSON.stringify(_0x3b0b65) : "无返回");
        this.log("会员日领取" + _0x7d75ab + "点红包失败: " + _0x122100);
        if (_0x122100?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0xc246b = {
            notify: true
          };
          this.log("会员日任务风控", _0xc246b);
        }
      }
    } catch (_0x59538c) {
      console.log(_0x59538c);
    }
  }
  async memberDay_redPacketStatus(_0x482957 = {}) {
    try {
      let _0x15e873 = {
          fn: "memberDay_redPacketStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x36587e
        } = await this.request(_0x15e873);
      if (_0x36587e?.["success"]) {
        let {
          drewToday: _0x48dfbe,
          packetList: _0x374887
        } = _0x36587e?.["obj"];
        this.memberDay_redPacket_drewToday = _0x48dfbe;
        for (let _0x4b6e3e of _0x374887) {
          this.memberDay_redPacket_map[_0x4b6e3e.level] = _0x4b6e3e.count;
        }
        let _0x32361d = _0x5d6701;
        for (let _0xd54104 = 1; _0xd54104 < _0x32361d; _0xd54104++) {
          let _0x7035cd = this.memberDay_redPacket_map[_0xd54104];
          while (_0x7035cd >= 2) {
            await this.memberDay_redPacketMerge(_0xd54104);
            _0x7035cd -= 2;
          }
        }
        let _0x597451 = [],
          _0x437317 = 0;
        for (let _0x18416f in this.memberDay_redPacket_map) {
          if (!this.memberDay_redPacket_map[_0x18416f]) {
            continue;
          }
          _0x597451.push("[" + _0x18416f + "级]X" + this.memberDay_redPacket_map[_0x18416f]);
          let _0x527bb3 = parseInt(_0x18416f);
          _0x527bb3 < _0x32361d && (_0x437317 += 1 << _0x527bb3 - 1);
        }
        const _0xaba89 = {
          notify: true
        };
        this.log("会员日合成列表: " + _0x597451.join(", "), _0xaba89);
        if (this.memberDay_redPacket_map[_0x32361d]) {
          const _0x4febd7 = {
            notify: true
          };
          this.log("会员日已拥有[" + _0x32361d + "级]红包X" + this.memberDay_redPacket_map[_0x32361d], _0x4febd7);
          await this.memberDay_redPacketDraw(_0x32361d);
        } else {
          let _0x24b545 = _0x148eb9 - _0x437317;
          const _0x2be9f4 = {
            notify: true
          };
          this.log("会员日距离[" + _0x32361d + "级]红包还差: [1级]红包X" + _0x24b545, _0x2be9f4);
        }
      } else {
        let _0x2ea1fe = _0x36587e?.["errorMessage"] || (_0x36587e ? JSON.stringify(_0x36587e) : "无返回");
        this.log("查询会员日合成失败: " + _0x2ea1fe);
        if (_0x2ea1fe?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x53c1a4 = {
            notify: true
          };
          this.log("会员日任务风控", _0x53c1a4);
        }
      }
    } catch (_0x4d858b) {
      console.log(_0x4d858b);
    }
  }
  async memberDay_redPacketMerge(_0x2bd94a, _0x5c3722 = {}) {
    try {
      const _0x144d26 = {
        level: _0x2bd94a,
        num: 2
      };
      let _0x4cc6d8 = {
          fn: "memberDay_redPacketMerge",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketMerge",
          headers: {
            ...this.getSign()
          },
          json: _0x144d26
        },
        {
          result: _0x2164b8
        } = await this.request(_0x4cc6d8);
      if (_0x2164b8?.["success"]) {
        this.log("会员日合成: [" + _0x2bd94a + "级]红包X2 -> [" + (_0x2bd94a + 1) + "级]红包");
        this.memberDay_redPacket_map[_0x2bd94a] -= 2;
        if (!this.memberDay_redPacket_map[_0x2bd94a + 1]) {
          this.memberDay_redPacket_map[_0x2bd94a + 1] = 0;
        }
        this.memberDay_redPacket_map[_0x2bd94a + 1]++;
      } else {
        let _0x20407b = _0x2164b8?.["errorMessage"] || (_0x2164b8 ? JSON.stringify(_0x2164b8) : "无返回");
        this.log("会员日合成两个[" + _0x2bd94a + "级]红包失败: " + _0x20407b);
        if (_0x20407b?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x421eff = {
            notify: true
          };
          this.log("会员日任务风控", _0x421eff);
        }
      }
    } catch (_0x4320d1) {
      console.log(_0x4320d1);
    }
  }
  async memberDay_redPacketDraw(_0x252783, _0x13c8b7 = {}) {
    try {
      let _0xc76ea0 = {
          fn: "memberDay_redPacketDraw",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketDraw",
          headers: {
            ...this.getSign()
          },
          json: {
            level: _0x252783.toString()
          }
        },
        {
          result: _0x2bf6ed
        } = await this.request(_0xc76ea0);
      if (_0x2bf6ed?.["success"]) {
        let _0x247318 = _0x2bf6ed?.["obj"]?.["map"](_0x4559c0 => _0x4559c0.couponName) || [];
        const _0x46fdc6 = {
          notify: true
        };
        this.log("会员日提取[" + _0x252783 + "级]红包: " + (_0x247318.join(", ") || "空气"), _0x46fdc6);
      } else {
        let _0x5a266d = _0x2bf6ed?.["errorMessage"] || (_0x2bf6ed ? JSON.stringify(_0x2bf6ed) : "无返回");
        this.log("会员日提取[" + _0x252783 + "级]红包失败: " + _0x5a266d);
        if (_0x5a266d?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x3edae3 = {
            notify: true
          };
          this.log("会员日任务风控", _0x3edae3);
        }
      }
    } catch (_0x42c6ba) {
      console.log(_0x42c6ba);
    }
  }
  async jika2024_taskList(_0x448604 = {}) {
    try {
      let _0x1a8c18 = {
          fn: "jika2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0x2374ff,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x2e94e7
        } = await this.request(_0x1a8c18);
      if (_0x2e94e7?.["success"]) {
        let _0x233494 = _0x2e94e7?.["obj"] || [];
        for (let _0x33691a of _0x233494.filter(_0x12af8 => _0x12af8.status == 1)) {
          if (this.jika_black) {
            return;
          }
          for (let _0x216a77 = 0; _0x216a77 < _0x33691a.canReceiveTokenNum; _0x216a77++) {
            await this.jika2024_fetchMixTaskReward(_0x33691a);
          }
        }
        for (let _0x4be93f of _0x233494.filter(_0xc4171f => _0xc4171f.status == 2)) {
          if (this.jika_black) {
            return;
          }
          switch (_0x4be93f.taskType) {
            case "PLAY_ACTIVITY_GAME":
              {
                this.log("开始玩新年集卡猜成语");
                for (let _0x27e942 = 1; _0x27e942 <= 10; _0x27e942++) {
                  let _0x1139d5 = Math.floor(Math.random() * 3000) + 1000;
                  await _0x239c4b.wait(_0x1139d5);
                  await this.jika2024_chengyu_win(_0x27e942);
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
                for (let _0x295bc1 = 0; _0x295bc1 < _0x4be93f.restFinishTime && !this.jika_black; _0x295bc1++) {
                  await this.jika2024_finishTask(_0x4be93f);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询新年集卡任务失败: " + (_0x2e94e7?.["errorMessage"] || (_0x2e94e7 ? JSON.stringify(_0x2e94e7) : "无返回")));
      }
    } catch (_0x531feb) {
      console.log(_0x531feb);
    }
  }
  async jika2024_finishTask(_0x4c5381, _0xe6f7d1 = {}) {
    try {
      const _0x4766bc = {
        taskCode: _0x4c5381.taskCode
      };
      let _0x9cfef0 = {
          fn: "jika2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x4766bc
        },
        {
          result: _0x552d47
        } = await this.request(_0x9cfef0);
      _0x552d47?.["success"] ? (this.log("完成新年集卡任务[" + _0x4c5381.taskName + "]成功"), await this.jika2024_fetchMixTaskReward(_0x4c5381)) : this.log("完成新年集卡任务[" + _0x4c5381.taskName + "]失败: " + (_0x552d47?.["errorMessage"] || (_0x552d47 ? JSON.stringify(_0x552d47) : "无返回")));
    } catch (_0x343e88) {
      console.log(_0x343e88);
    }
  }
  async jika2024_fetchMixTaskReward(_0x4f9401, _0xb1de59 = {}) {
    try {
      let _0xad041f = {
          fn: "jika2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonNoLoginPost/~memberNonactivity~yearEnd2023TaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x4f9401.taskType,
            activityCode: _0x2374ff,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0xbf3018
        } = await this.request(_0xad041f);
      if (_0xbf3018?.["success"]) {
        let _0x15e951 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0xbf3018.obj;
        for (let _0x9c4681 of receivedAccountList) {
          _0x15e951.push("" + (_0x31b237[_0x9c4681.currency] || "[" + _0x9c4681.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x15e951.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("领取任务[" + _0x4f9401.taskName + "]奖励: " + _0x15e951.join(", "));
      } else {
        let _0x252c19 = _0xbf3018?.["errorMessage"] || (_0xbf3018 ? JSON.stringify(_0xbf3018) : "无返回");
        this.log("领取任务[" + _0x4f9401.taskName + "]奖励失败: " + _0x252c19);
        _0x252c19?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x4aca0) {
      console.log(_0x4aca0);
    }
  }
  async jika2024_getAward(_0x471462, _0x433db6 = {}) {
    try {
      const _0x2acd5b = {
        cardType: _0x471462
      };
      let _0x473bbe = {
          fn: "jika2024_getAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GardenPartyService~getAward",
          headers: {
            ...this.getSign()
          },
          json: _0x2acd5b
        },
        {
          result: _0x565c97
        } = await this.request(_0x473bbe);
      if (_0x565c97?.["success"]) {
        let _0x35c1bc = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x565c97.obj;
        for (let _0x3fbd85 of receivedAccountList) {
          _0x35c1bc.push("" + (_0x31b237[_0x3fbd85.currency] || "[" + _0x3fbd85.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x35c1bc.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("逛集市领卡奖励: " + _0x35c1bc.join(", "));
      } else {
        let _0x581135 = _0x565c97?.["errorMessage"] || (_0x565c97 ? JSON.stringify(_0x565c97) : "无返回");
        this.log("逛集市领卡失败: " + _0x581135);
        _0x581135?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x1a5ff8) {
      console.log(_0x1a5ff8);
    }
  }
  async jika2024_chengyu_index(_0x58223a = {}) {
    try {
      let _0x25c540 = {
          fn: "jika2024_chengyu_index",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~index",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x5423c3
        } = await this.request(_0x25c540);
      if (_0x5423c3?.["success"]) {
        if (_0x5423c3?.["obj"]?.["bigCardFlag"]) {
          this.log("今天已完成新年集卡猜成语");
        } else {
          this.log("开始玩新年集卡猜成语");
          for (let _0x5b1305 = 1; _0x5b1305 <= 10; _0x5b1305++) {
            let _0x5c2abd = Math.floor(Math.random() * 3000) + 1000;
            await _0x239c4b.wait(_0x5c2abd);
            await this.jika2024_chengyu_win(_0x5b1305);
          }
        }
      } else {
        this.log("查询新年集卡猜成语任务失败: " + (_0x5423c3?.["errorMessage"] || (_0x5423c3 ? JSON.stringify(_0x5423c3) : "无返回")));
      }
    } catch (_0x6bbaf2) {
      console.log(_0x6bbaf2);
    }
  }
  async jika2024_chengyu_win(_0x112eff, _0x415810 = {}) {
    try {
      const _0x3c9bbf = {
        index: _0x112eff
      };
      let _0x314fe3 = {
          fn: "jika2024_chengyu_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x3c9bbf
        },
        {
          result: _0x578258
        } = await this.request(_0x314fe3);
      if (_0x578258?.["success"]) {
        let {
          isAward: _0x24dcf4,
          currencyDTOList: _0x312f60
        } = _0x578258?.["obj"];
        if (_0x24dcf4) {
          let _0x131105 = [];
          for (let _0xddfd5b of _0x312f60) {
            _0x131105.push("" + (_0x31b237[_0xddfd5b.currency] || "[" + _0xddfd5b.currency + "]"));
          }
          this.log("猜成语第" + _0x112eff + "关通关成功: " + _0x131105.join(", "));
        } else {
          this.log("猜成语第" + _0x112eff + "关通关成功");
        }
      } else {
        let _0x406547 = _0x578258?.["errorMessage"] || (_0x578258 ? JSON.stringify(_0x578258) : "无返回");
        this.log("猜成语第" + _0x112eff + "关失败: " + _0x406547);
        _0x406547?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x484bee) {
      console.log(_0x484bee);
    }
  }
  async jika2024_cardStatus(_0x44bfc5 = {}) {
    try {
      let _0x5da3ac = {
          fn: "jika2024_cardStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~cardStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x188bcc
        } = await this.request(_0x5da3ac);
      if (_0x188bcc?.["success"]) {
        let _0x30f09a = _0x188bcc?.["obj"]?.["accountList"] || [];
        if (_0x30f09a?.["length"]) {
          this.cards = _0x30f09a.filter(_0x29ec6b => _0x29ec6b.balance > 0);
          this.cards.sort((_0x1bee14, _0x2f6198) => {
            return _0x2f6198.balance - _0x1bee14.balance;
          });
          let _0x58ec09 = [];
          for (let _0x374808 of this.cards) {
            let _0x20ca89 = _0x31b237[_0x374808.currency] || "[" + _0x374808.currency + "]";
            _0x58ec09.push(_0x20ca89 + "X" + _0x374808.balance);
          }
          const _0x115474 = {
            notify: true
          };
          this.log("年卡: " + _0x58ec09.join(", "), _0x115474);
          if (this.cards.filter(_0x46743f => _0x46743f.balance > 0).filter(_0x1d5158 => _0x1d5158.currency == "COMMON_CARD").length > 0) {
            const _0x5d14ab = {
              notify: true
            };
            this.log("拥有万能卡, 请自行合成, 不自动抽奖", _0x5d14ab);
            return;
          }
          while (this.cards.filter(_0xd9a3b8 => _0xd9a3b8.balance > 0).length >= 3 && !this.jika_black) {
            await this.jika2024_collectDrawAward();
          }
        } else {
          const _0x106e86 = {
            notify: true
          };
          this.log("还没有收集到年卡", _0x106e86);
        }
      } else {
        this.log("查询已收集年卡失败: " + (_0x188bcc?.["errorMessage"] || (_0x188bcc ? JSON.stringify(_0x188bcc) : "无返回")));
      }
    } catch (_0x1fc43b) {
      console.log(_0x1fc43b);
    }
  }
  async jika2024_collectDrawAward(_0x3f759e = {}) {
    try {
      let _0x15e721 = this.cards.filter(_0x5d5dfd => _0x5d5dfd.balance > 0).map(_0x3dbc76 => _0x3dbc76.currency);
      if (_0x15e721.length > 6) {
        _0x15e721 = _0x15e721.slice(0, 6);
      }
      const _0x17da03 = {
        accountList: _0x15e721
      };
      let _0x4cafa7 = {
          fn: "jika2024_collectDrawAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~collectDrawAward",
          headers: {
            ...this.getSign()
          },
          json: _0x17da03
        },
        {
          result: _0x12934b
        } = await this.request(_0x4cafa7);
      if (_0x12934b?.["success"]) {
        let {
          productName: _0x22ce19
        } = _0x12934b?.["obj"];
        const _0xceca18 = {
          notify: true
        };
        this.log("使用" + _0x15e721.length + "种年卡合成: " + _0x22ce19, _0xceca18);
        for (let _0x4ee454 of this.cards) {
          _0x15e721.includes(_0x4ee454.currency) && (_0x4ee454.balance -= 1);
        }
      } else {
        let _0x351581 = _0x12934b?.["errorMessage"] || (_0x12934b ? JSON.stringify(_0x12934b) : "无返回");
        this.log("使用" + _0x15e721.length + "种年卡合成失败: " + _0x351581);
        _0x351581?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x4a392f) {
      console.log(_0x4a392f);
    }
  }
  async jika2024_task(_0x3cced9 = {}) {
    await this.jika2024_cardStatus();
  }
  async anniversary2024_weeklyGiftStatus(_0x4d42e3 = {}) {
    try {
      let _0x580860 = {
          fn: "anniversary2024_weeklyGiftStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~weeklyGiftStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x29343d
        } = await this.request(_0x580860);
      if (_0x29343d?.["success"]) {
        let _0x1fa235 = _0x29343d?.["obj"]?.["weeklyGiftList"] || [];
        for (let _0x3793dd of _0x1fa235) {
          if (!_0x3793dd.received) {
            let _0x4b06cd = new Date(_0x3793dd.receiveStartTime),
              _0x340208 = new Date(_0x3793dd.receiveEndTime),
              _0x4e1b97 = Date.now();
            _0x4e1b97 >= _0x4b06cd.getTime() && _0x4e1b97 <= _0x340208.getTime() && (await this.anniversary2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x581b7c = _0x29343d?.["errorMessage"] || (_0x29343d ? JSON.stringify(_0x29343d) : "无返回");
        this.log("查询周年庆每周领券失败: " + _0x581b7c);
        (_0x581b7c?.["includes"]("系统繁忙") || _0x581b7c?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x2fc624) {
      console.log(_0x2fc624);
    }
  }
  async anniversary2024_receiveWeeklyGift(_0x52bbd5 = {}) {
    try {
      let _0x2ca3ba = {
          fn: "anniversary2024_receiveWeeklyGift",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~receiveWeeklyGift",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x2c8a17
        } = await this.request(_0x2ca3ba);
      if (_0x2c8a17?.["success"]) {
        let _0x266487 = _0x2c8a17?.["obj"]?.["map"](_0x156eef => _0x156eef.productName);
        this.log("周年庆每周领券: " + _0x266487.join(", "));
      } else {
        let _0x672793 = _0x2c8a17?.["errorMessage"] || (_0x2c8a17 ? JSON.stringify(_0x2c8a17) : "无返回");
        this.log("周年庆每周领券失败: " + _0x672793);
        (_0x672793?.["includes"]("系统繁忙") || _0x672793?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x4a8076) {
      console.log(_0x4a8076);
    }
  }
  async anniversary2024_taskList(_0x5b360a = {}) {
    try {
      let _0x2c8257 = {
          fn: "anniversary2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0xbfe744,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x559fb0
        } = await this.request(_0x2c8257);
      if (_0x559fb0?.["success"]) {
        let _0x3c147a = _0x559fb0?.["obj"] || [];
        for (let _0x3c60ec of _0x3c147a.filter(_0xe55204 => _0xe55204.status == 1)) {
          if (this.anniversary_black) {
            return;
          }
          for (let _0x4c1534 = 0; _0x4c1534 < _0x3c60ec.canReceiveTokenNum; _0x4c1534++) {
            await this.anniversary2024_fetchMixTaskReward(_0x3c60ec);
          }
        }
        for (let _0x1a809f of _0x3c147a.filter(_0xb56383 => _0xb56383.status == 2)) {
          if (this.anniversary_black) {
            return;
          }
          switch (_0x1a809f.taskType) {
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
                for (let _0x11d6b3 = 0; _0x11d6b3 < _0x1a809f.restFinishTime && !this.anniversary_black; _0x11d6b3++) {
                  await this.anniversary2024_finishTask(_0x1a809f);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x559fb0?.["errorMessage"] || (_0x559fb0 ? JSON.stringify(_0x559fb0) : "无返回")));
      }
    } catch (_0x31e660) {
      console.log(_0x31e660);
    }
  }
  async anniversary2024_finishTask(_0x374f33, _0x280c76 = {}) {
    try {
      const _0x5d802a = {
        taskCode: _0x374f33.taskCode
      };
      let _0xba1f53 = {
          fn: "anniversary2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x5d802a
        },
        {
          result: _0xe88e67
        } = await this.request(_0xba1f53);
      _0xe88e67?.["success"] ? (this.log("完成任务[" + _0x374f33.taskName + "]成功"), await this.anniversary2024_fetchMixTaskReward(_0x374f33)) : this.log("完成任务[" + _0x374f33.taskName + "]失败: " + (_0xe88e67?.["errorMessage"] || (_0xe88e67 ? JSON.stringify(_0xe88e67) : "无返回")));
    } catch (_0x57bd79) {
      console.log(_0x57bd79);
    }
  }
  async anniversary2024_fetchMixTaskReward(_0x5150ac, _0x4cf7c3 = {}) {
    try {
      let _0x1c88f0 = {
          fn: "anniversary2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x5150ac.taskType,
            activityCode: _0xbfe744,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x5c5513
        } = await this.request(_0x1c88f0);
      if (_0x5c5513?.["success"]) {
        let _0x44494a = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x5c5513?.["obj"]?.["account"];
        for (let _0xa0902 of receivedAccountList) {
          _0x44494a.push("[" + _0xa0902.currency + "]X" + _0xa0902.amount);
        }
        turnedAward?.["productName"] && _0x44494a.push("[优惠券]" + turnedAward?.["productName"]);
        this.log("领取任务[" + _0x5150ac.taskName + "]奖励: " + _0x44494a.join(", "));
      } else {
        let _0x43a973 = _0x5c5513?.["errorMessage"] || (_0x5c5513 ? JSON.stringify(_0x5c5513) : "无返回");
        this.log("领取任务[" + _0x5150ac.taskName + "]奖励失败: " + _0x43a973);
        _0x43a973?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x3e3d9a) {
      console.log(_0x3e3d9a);
    }
  }
  async anniversary2024_unbox(_0x136ce1 = {}) {
    try {
      let _0x210d02 = {
          fn: "anniversary2024_unbox",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~unbox",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x3b82e5
        } = await this.request(_0x210d02);
      if (_0x3b82e5?.["success"]) {
        let _0x2b4e27 = [],
          _0x4f78f6 = _0x3b82e5?.["obj"]?.["account"]?.["receivedAccountList"] || [];
        for (let _0x37979c of _0x4f78f6) {
          _0x2b4e27.push("[" + _0x37979c.currency + "]X" + _0x37979c.amount);
        }
        this.log("拆盒子: " + (_0x2b4e27.join(", ") || "空气"));
      } else {
        let _0x32ab6d = _0x3b82e5?.["errorMessage"] || (_0x3b82e5 ? JSON.stringify(_0x3b82e5) : "无返回");
        this.log("拆盒子失败: " + _0x32ab6d);
        _0x32ab6d?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x1b1197) {
      console.log(_0x1b1197);
    }
  }
  async anniversary2024_game_list(_0x4e85fb = {}) {
    try {
      let _0xa39154 = {
          fn: "anniversary2024_game_list",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GameParkService~list",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0xa680d5
        } = await this.request(_0xa39154);
      if (_0xa680d5?.["success"]) {
        let {
          topicPKInfo: _0x30fb45,
          searchWordInfo: _0x1835e0,
          happyEliminationInfo: _0x31b299
        } = _0xa680d5?.["obj"];
        !_0x30fb45?.["isPassFlag"] && (this.log("开始话题PK赛"), await this.anniversary2024_TopicPk_topicList());
        if (!_0x1835e0?.["isPassFlag"] || !_0x1835e0?.["isFinishDailyFlag"]) {
          this.log("开始找字游戏");
          for (let _0x27da29 = 1; _0x27da29 <= 10; _0x27da29++) {
            let _0x4b90ea = Math.floor(Math.random() * 2000) + 1000;
            await _0x239c4b.wait(_0x4b90ea);
            if (!(await this.anniversary2024_SearchWord_win(_0x27da29))) {
              break;
            }
          }
        }
        if (!_0x31b299?.["isPassFlag"] || !_0x31b299?.["isFinishDailyFlag"]) {
          this.log("开始消消乐");
          for (let _0x53b9ac = 1; _0x53b9ac <= 30; _0x53b9ac++) {
            let _0x20e360 = Math.floor(Math.random() * 2000) + 1000;
            await _0x239c4b.wait(_0x20e360);
            if (!(await this.anniversary2024_HappyElimination_win(_0x53b9ac))) {
              break;
            }
          }
        }
      } else {
        let _0x4b65a5 = _0xa680d5?.["errorMessage"] || (_0xa680d5 ? JSON.stringify(_0xa680d5) : "无返回");
        this.log("查询游戏状态失败: " + _0x4b65a5);
        _0x4b65a5?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x2931d8) {
      console.log(_0x2931d8);
    }
  }
  async anniversary2024_SearchWord_win(_0x2e310b, _0x29f6f5 = {}) {
    let _0x2fe839 = true;
    try {
      const _0x1b5c66 = {
        index: _0x2e310b
      };
      let _0x3ea084 = {
          fn: "anniversary2024_SearchWord_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024SearchWordService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x1b5c66
        },
        {
          result: _0x4cf94f
        } = await this.request(_0x3ea084);
      if (_0x4cf94f?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x4cf94f?.["obj"];
        if (currencyDTOList?.["length"]) {
          let _0xb06f6d = [];
          for (let _0x2d369b of currencyDTOList) {
            _0xb06f6d.push("[" + _0x2d369b.currency + "]X" + _0x2d369b.amount);
          }
          this.log("找字游戏第" + _0x2e310b + "关通关成功: " + _0xb06f6d.join(", "));
        } else {
          this.log("找字游戏第" + _0x2e310b + "关通关成功");
        }
      } else {
        let _0x208027 = _0x4cf94f?.["errorMessage"] || (_0x4cf94f ? JSON.stringify(_0x4cf94f) : "无返回");
        this.log("找字游戏第" + _0x2e310b + "关失败: " + _0x208027);
        _0x208027?.["includes"]("系统繁忙") && (_0x2fe839 = false);
      }
    } catch (_0x32557f) {
      console.log(_0x32557f);
    } finally {
      return _0x2fe839;
    }
  }
  async anniversary2024_HappyElimination_win(_0x24b9d4, _0x149f87 = {}) {
    let _0x43d716 = true;
    try {
      const _0x31f3a6 = {
        index: _0x24b9d4
      };
      let _0x124533 = {
          fn: "anniversary2024_HappyElimination_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024HappyEliminationService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x31f3a6
        },
        {
          result: _0x2fff19
        } = await this.request(_0x124533);
      if (_0x2fff19?.["success"]) {
        let {
          isAward: _0x3fc4fe,
          currencyDTOList: _0x2e68fa
        } = _0x2fff19?.["obj"];
        if (_0x3fc4fe) {
          let _0x3c9e6e = [];
          for (let _0x13424e of _0x2e68fa) {
            _0x3c9e6e.push("[" + _0x13424e.currency + "]X" + _0x13424e.amount);
          }
          this.log("消消乐第" + _0x24b9d4 + "关通关成功: " + _0x3c9e6e.join(", "));
        } else {
          this.log("消消乐第" + _0x24b9d4 + "关通关成功");
        }
      } else {
        let _0x49108b = _0x2fff19?.["errorMessage"] || (_0x2fff19 ? JSON.stringify(_0x2fff19) : "无返回");
        this.log("消消乐第" + _0x24b9d4 + "关失败: " + _0x49108b);
        _0x49108b?.["includes"]("系统繁忙") && (_0x43d716 = false);
      }
    } catch (_0x46f689) {
      console.log(_0x46f689);
    } finally {
      return _0x43d716;
    }
  }
  async anniversary2024_TopicPk_topicList(_0x2056d9 = {}) {
    try {
      let _0x32b028 = {
          fn: "anniversary2024_TopicPk_topicList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~topicList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x28086d
        } = await this.request(_0x32b028);
      if (_0x28086d?.["success"]) {
        let _0x2969dc = _0x28086d?.["obj"]?.["topics"] || [],
          _0x5b37fc = _0x2969dc?.["filter"](_0x49081a => !_0x49081a?.["choose"])?.[0]?.["index"] || 1;
        for (let _0xd9613c = parseInt(_0x5b37fc); _0xd9613c <= 12; _0xd9613c++) {
          let _0x113dd9 = Math.floor(Math.random() * 2000) + 2000;
          await _0x239c4b.wait(_0x113dd9);
          if (!(await this.anniversary2024_TopicPk_chooseSide(_0xd9613c))) {
            break;
          }
        }
      } else {
        let _0xa6e53 = _0x28086d?.["errorMessage"] || (_0x28086d ? JSON.stringify(_0x28086d) : "无返回");
        this.log("查询话题PK赛记录失败: " + _0xa6e53);
        _0xa6e53?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x3d76eb) {
      console.log(_0x3d76eb);
    }
  }
  async anniversary2024_queryAccountStatus_refresh(_0x5a8061 = {}) {
    try {
      let _0x3d0752 = {
        fn: "anniversary2024_queryAccountStatus_refresh",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        headers: {
          ...this.getSign()
        },
        json: {}
      };
      await this.request(_0x3d0752);
    } catch (_0x339893) {
      console.log(_0x339893);
    }
  }
  async anniversary2024_TopicPk_chooseSide(_0x212214, _0x46d70e = {}) {
    let _0x18451e = true;
    try {
      const _0x946188 = {
        index: _0x212214,
        choose: 0
      };
      let _0x46341b = {
          fn: "anniversary2024_TopicPk_chooseSide",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~chooseSide",
          headers: {
            ...this.getSign()
          },
          json: _0x946188
        },
        {
          result: _0x26800c
        } = await this.request(_0x46341b);
      if (_0x26800c?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x26800c?.["obj"];
        if (currencyDTOList.length) {
          let _0x39c90d = [];
          for (let _0x36ca40 of currencyDTOList) {
            _0x39c90d.push("[" + _0x36ca40.currency + "]X" + _0x36ca40.amount);
          }
          this.log("话题PK赛第" + _0x212214 + "个话题选择成功: " + _0x39c90d.join(", "));
        } else {
          this.log("话题PK赛第" + _0x212214 + "个话题选择成功");
        }
      } else {
        let _0xd501ca = _0x26800c?.["errorMessage"] || (_0x26800c ? JSON.stringify(_0x26800c) : "无返回");
        this.log("话题PK赛第" + _0x212214 + "个话题失败: " + _0xd501ca);
        _0xd501ca?.["includes"]("系统繁忙") && (_0x18451e = false);
      }
    } catch (_0x4906f2) {
      console.log(_0x4906f2);
    } finally {
      return _0x18451e;
    }
  }
  async anniversary2024_titleList(_0x16971b = {}) {
    try {
      let _0x45eda0 = {
          fn: "anniversary2024_titleList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x47f197
        } = await this.request(_0x45eda0);
      if (_0x47f197?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x47f197?.["obj"],
          _0x1948d0 = _0x239c4b.time("yyyy-MM-dd"),
          _0x701e93 = guessTitleInfoList.filter(_0x8b9df2 => _0x8b9df2.gameDate == _0x1948d0);
        if (_0x701e93.length > 0) {
          let _0x3a2dbd = _0x701e93[0];
          if (_0x3a2dbd.answerStatus) {
            this.log("今日已回答过竞猜");
          } else {
            let _0x138788 = _0x10bb7a?.["answer"]?.[_0x1948d0];
            _0x10bb7a?.["answer"]?.[_0x1948d0] && (await this.anniversary2024_answer(_0x3a2dbd, _0x138788));
          }
        } else {
          this.log("没有查询到今日竞猜题目");
        }
      } else {
        let _0x50f1ce = _0x47f197?.["errorMessage"] || (_0x47f197 ? JSON.stringify(_0x47f197) : "无返回");
        this.log("查询每日口令竞猜失败: " + _0x50f1ce);
      }
    } catch (_0x55e281) {
      console.log(_0x55e281);
    }
  }
  async anniversary2024_titleList_award(_0x482f52 = {}) {
    try {
      let _0x4b0c77 = {
          fn: "anniversary2024_titleList_award",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x1a5e79
        } = await this.request(_0x4b0c77);
      if (_0x1a5e79?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x1a5e79?.["obj"],
          _0x414fb7 = _0x239c4b.time("yyyy-MM-dd"),
          _0x1b4869 = guessTitleInfoList.filter(_0x8a6be1 => _0x8a6be1.gameDate == _0x414fb7);
        if (_0x1b4869.length > 0) {
          let _0x2739f6 = _0x1b4869[0];
          if (_0x2739f6.answerStatus) {
            let _0x33928d = [],
              {
                awardList = [],
                puzzleList = []
              } = _0x2739f6;
            _0x33928d = _0x33928d.concat(awardList.map(_0xe31623 => _0xe31623.productName));
            _0x33928d = _0x33928d.concat(puzzleList.map(_0x1fea52 => "[" + _0x1fea52.currency + "]X" + _0x1fea52.amount));
            const _0x2d6ade = {
              notify: true
            };
            this.log("口令竞猜奖励: " + (_0x33928d.join(", ") || "空气"), _0x2d6ade);
          } else {
            this.log("今日还没回答竞猜");
          }
        } else {
          this.log("没有查询到今日竞猜奖励");
        }
      } else {
        let _0x36478e = _0x1a5e79?.["errorMessage"] || (_0x1a5e79 ? JSON.stringify(_0x1a5e79) : "无返回");
        this.log("查询每日口令竞猜奖励失败: " + _0x36478e);
      }
    } catch (_0x31a0bf) {
      console.log(_0x31a0bf);
    }
  }
  async anniversary2024_answer(_0x41615e, _0x15e140, _0x1c10a3 = {}) {
    try {
      const _0x175252 = {
        period: _0x41615e.period,
        answerInfo: _0x15e140
      };
      let _0x31e3b7 = {
          fn: "anniversary2024_answer",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~answer",
          headers: {
            ...this.getSign()
          },
          json: _0x175252
        },
        {
          result: _0x5ea39c
        } = await this.request(_0x31e3b7);
      if (_0x5ea39c?.["success"]) {
        this.log("口令竞猜回答成功");
        await this.anniversary2024_titleList_award();
      } else {
        let _0x1ff4ea = _0x5ea39c?.["errorMessage"] || (_0x5ea39c ? JSON.stringify(_0x5ea39c) : "无返回");
        this.log("口令竞猜回答失败: " + _0x1ff4ea);
      }
    } catch (_0x591caf) {
      console.log(_0x591caf);
    }
  }
  async anniversary2024_queryAccountStatus(_0x19b28e = {}) {
    try {
      let _0xabca04 = {
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
          result: _0x148c8d
        } = await this.request(_0xabca04);
        if (_0x148c8d?.["success"]) {
          let _0x23cd5c = _0x148c8d?.["obj"]?.["accountCurrencyList"] || [],
            _0x4ea67b = _0x23cd5c.filter(_0xabab35 => _0xabab35.currency == "UNBOX_CHANCE"),
            _0x396f9e = _0x4ea67b?.[0]?.["balance"] || 0;
          this.log("可以拆" + _0x396f9e + "次盒子");
          while (_0x396f9e-- > 0) {
            await this.anniversary2024_unbox();
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x148c8d?.["errorMessage"] || (_0x148c8d ? JSON.stringify(_0x148c8d) : "无返回")));
        }
      }
      {
        let {
          result: _0x2ddd2e
        } = await this.request(_0xabca04);
        if (_0x2ddd2e?.["success"]) {
          let _0xb30f37 = _0x2ddd2e?.["obj"]?.["accountCurrencyList"] || [];
          _0xb30f37 = _0xb30f37.filter(_0x5640c2 => _0x5640c2.currency != "UNBOX_CHANCE");
          if (_0xb30f37?.["length"]) {
            this.cards = _0xb30f37;
            let _0x5728e4 = [];
            for (let _0x5be940 of this.cards) {
              _0x5728e4.push("[" + _0x5be940.currency + "]X" + _0x5be940.balance);
            }
            const _0x49d533 = {
              notify: true
            };
            this.log("拼图: " + _0x5728e4.join(", "), _0x49d533);
            this.cards.sort((_0x28dbf4, _0x40a740) => {
              return _0x40a740.balance - _0x28dbf4.balance;
            });
          } else {
            const _0x3a3f12 = {
              notify: true
            };
            this.log("还没有收集到拼图", _0x3a3f12);
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x2ddd2e?.["errorMessage"] || (_0x2ddd2e ? JSON.stringify(_0x2ddd2e) : "无返回")));
        }
      }
    } catch (_0x5bfd04) {
      console.log(_0x5bfd04);
    }
  }
  async anniversary2024_queryAccountStatus_card(_0x2fc870 = {}) {
    try {
      let _0x41626d = {
          fn: "anniversary2024_queryAccountStatus_card",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x3507ef
        } = await this.request(_0x41626d);
      if (_0x3507ef?.["success"]) {
        let _0x28b73b = _0x3507ef?.["obj"]?.["accountCurrencyList"] || [];
        _0x28b73b = _0x28b73b.filter(_0xe6e5c1 => _0xe6e5c1.currency != "UNBOX_CHANCE");
        if (_0x28b73b?.["length"]) {
          this.cards = _0x28b73b.sort((_0x16ea79, _0x517d26) => {
            return _0x517d26.balance - _0x16ea79.balance;
          });
          let _0x53e325 = [];
          for (let _0x332661 of this.cards) {
            _0x53e325.push("[" + _0x332661.currency + "]X" + _0x332661.balance);
          }
          const _0x4b2514 = {
            notify: true
          };
          this.log("拼图: " + _0x53e325.join(", "), _0x4b2514);
          while (this.cards.filter(_0x17ad90 => _0x17ad90.balance > 0).length >= 3 && !this.anniversary_black) {
            await this.anniversary2024_collectDrawAward();
          }
        } else {
          const _0x60280e = {
            notify: true
          };
          this.log("还没有收集到拼图", _0x60280e);
        }
      } else {
        this.log("查询已收集拼图失败: " + (_0x3507ef?.["errorMessage"] || (_0x3507ef ? JSON.stringify(_0x3507ef) : "无返回")));
      }
    } catch (_0x2144bf) {
      console.log(_0x2144bf);
    }
  }
  async anniversary2024_collectDrawAward(_0x410586 = {}) {
    try {
      this.cards = this.cards.sort((_0x2d66f3, _0x68383) => {
        return _0x68383.balance - _0x2d66f3.balance;
      });
      let _0x540c8c = this.cards.filter(_0x34120b => _0x34120b.balance > 0).map(_0x7f6242 => _0x7f6242.currency);
      if (_0x540c8c.length == 9) {
        _0x540c8c = _0x540c8c.slice(0, 9);
      } else {
        if (_0x540c8c.length >= 7) {
          _0x540c8c = _0x540c8c.slice(0, 7);
        } else {
          if (_0x540c8c.length >= 5) {
            _0x540c8c = _0x540c8c.slice(0, 5);
          } else {
            _0x540c8c.length >= 3 && (_0x540c8c = _0x540c8c.slice(0, 3));
          }
        }
      }
      const _0x49d168 = {
        accountList: _0x540c8c
      };
      let _0x2adec4 = {
          fn: "anniversary2024_collectDrawAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~collectDrawAward",
          headers: {
            ...this.getSign()
          },
          json: _0x49d168
        },
        {
          result: _0x3bd1d9
        } = await this.request(_0x2adec4);
      if (_0x3bd1d9?.["success"]) {
        let {
          productName: _0x4482bf
        } = _0x3bd1d9?.["obj"];
        const _0x3adb38 = {
          notify: true
        };
        this.log("使用" + _0x540c8c.length + "种卡合成: " + _0x4482bf, _0x3adb38);
        for (let _0x2aa5bb of this.cards) {
          _0x540c8c.includes(_0x2aa5bb.currency) && (_0x2aa5bb.balance -= 1);
        }
      } else {
        let _0x48c561 = _0x3bd1d9?.["errorMessage"] || (_0x3bd1d9 ? JSON.stringify(_0x3bd1d9) : "无返回");
        this.log("使用" + _0x540c8c.length + "种年卡合成失败: " + _0x48c561);
        _0x48c561?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x3e5e37) {
      console.log(_0x3e5e37);
    }
  }
  async dragonBoat2024_weeklyGiftStatus(_0x341e7c = {}) {
    try {
      let _0x54f48a = {
          fn: "dragonBoat2024_weeklyGiftStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024IndexService~weeklyGiftStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x2646ab
        } = await this.request(_0x54f48a);
      if (_0x2646ab?.["success"]) {
        let _0x5a28e6 = _0x2646ab?.["obj"] || [];
        for (let _0x3be6b3 of _0x5a28e6) {
          if (!_0x3be6b3.received) {
            let _0x437ed4 = new Date(_0x3be6b3.receiveStartTime),
              _0x197216 = new Date(_0x3be6b3.receiveEndTime),
              _0x18cd1f = Date.now();
            _0x18cd1f >= _0x437ed4.getTime() && _0x18cd1f <= _0x197216.getTime() && (await this.dragonBoat2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x23cc8e = _0x2646ab?.["errorMessage"] || (_0x2646ab ? JSON.stringify(_0x2646ab) : "无返回");
        this.log("端午查询每周领券失败: " + _0x23cc8e);
        (_0x23cc8e?.["includes"]("系统繁忙") || _0x23cc8e?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
      }
    } catch (_0xe24c89) {
      console.log(_0xe24c89);
    }
  }
  async dragonBoat2024_receiveWeeklyGift(_0x40687b = {}) {
    try {
      let _0x9d79c6 = _0x239c4b.randomList(_0x2d776d.filter(_0xfcaed9 => _0xfcaed9 != this.userId));
      const _0x5acb6 = {
        inviteUserId: _0x9d79c6,
        moduleType: "welfare_card"
      };
      let _0x46324f = {
          fn: "dragonBoat2024_receiveWeeklyGift",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024IndexService~receiveWeeklyGift",
          headers: {
            ...this.getSign()
          },
          json: _0x5acb6
        },
        {
          result: _0x29e413
        } = await this.request(_0x46324f);
      if (_0x29e413?.["success"]) {
        let _0x505dac = _0x29e413?.["obj"]?.["map"](_0x1ef7e6 => _0x1ef7e6.productName);
        this.log("端午每周领券: " + _0x505dac.join(", "));
      } else {
        let _0x4e5111 = _0x29e413?.["errorMessage"] || (_0x29e413 ? JSON.stringify(_0x29e413) : "无返回");
        this.log("端午每周领券失败: " + _0x4e5111);
        (_0x4e5111?.["includes"]("系统繁忙") || _0x4e5111?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
      }
    } catch (_0x12869b) {
      console.log(_0x12869b);
    }
  }
  async dragonBoat2024_taskList(_0x306e81 = {}) {
    try {
      let _0xca77ad = {
          fn: "dragonBoat2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0x29d21f,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0xdacfec
        } = await this.request(_0xca77ad);
      if (_0xdacfec?.["success"]) {
        let _0x19f524 = _0xdacfec?.["obj"] || [];
        for (let _0x365f01 of _0x19f524.filter(_0x367c26 => _0x367c26.status == 1)) {
          if (this.dragonBoat_black) {
            return;
          }
          for (let _0x314624 = 0; _0x314624 < _0x365f01.canReceiveTokenNum; _0x314624++) {
            await this.dragonBoat2024_fetchMixTaskReward(_0x365f01);
          }
        }
        for (let _0x44f3ba of _0x19f524.filter(_0x98e676 => _0x98e676.status == 2)) {
          if (this.dragonBoat_black) {
            return;
          }
          switch (_0x44f3ba.taskType) {
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
                for (let _0x3b34e7 = 0; _0x3b34e7 < _0x44f3ba.restFinishTime && !this.dragonBoat_black; _0x3b34e7++) {
                  await this.dragonBoat2024_finishTask(_0x44f3ba);
                }
                break;
              }
          }
        }
      } else {
        this.log("端午查询任务失败: " + (_0xdacfec?.["errorMessage"] || (_0xdacfec ? JSON.stringify(_0xdacfec) : "无返回")));
      }
    } catch (_0x13ff4f) {
      console.log(_0x13ff4f);
    }
  }
  async dragonBoat2024_finishTask(_0x2e5690, _0x1901d9 = {}) {
    try {
      const _0x1e4fd9 = {
        taskCode: _0x2e5690.taskCode
      };
      let _0x22b1ba = {
          fn: "dragonBoat2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x1e4fd9
        },
        {
          result: _0x2651c3
        } = await this.request(_0x22b1ba);
      _0x2651c3?.["success"] ? (this.log("端午完成任务[" + _0x2e5690.taskName + "]成功"), await this.dragonBoat2024_fetchMixTaskReward(_0x2e5690)) : this.log("端午完成任务[" + _0x2e5690.taskName + "]失败: " + (_0x2651c3?.["errorMessage"] || (_0x2651c3 ? JSON.stringify(_0x2651c3) : "无返回")));
    } catch (_0x53f904) {
      console.log(_0x53f904);
    }
  }
  dragonBoat2024_parse_item(_0x35b024) {
    let _0x369ce6 = [];
    for (let _0x4f442d of _0x35b024) {
      let _0x2d520b = _0x4f442d.currency,
        _0x42a3eb = _0x397682[_0x2d520b] || "[" + _0x2d520b + "]",
        _0x44eac6 = _0x4f442d.balance || _0x4f442d.amount || 0;
      const _0x3f4fa5 = {
        currency: _0x2d520b,
        type: _0x42a3eb,
        amount: _0x44eac6
      };
      _0x369ce6.push(_0x3f4fa5);
    }
    return _0x369ce6;
  }
  async dragonBoat2024_fetchMixTaskReward(_0x130894, _0x30c215 = {}) {
    try {
      let _0x591481 = {
          fn: "dragonBoat2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024TaskService~fetchTasksReward",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x4ecf03
        } = await this.request(_0x591481);
      if (_0x4ecf03?.["success"]) {
        let _0x19e0cd = this.dragonBoat2024_parse_item(_0x4ecf03?.["obj"]?.["receivedAccountList"] || []);
        _0x19e0cd = _0x19e0cd.map(_0x12d19f => _0x12d19f.type + "x" + _0x12d19f.amount);
        this.log("端午领取任务[" + _0x130894.taskName + "]奖励: " + _0x19e0cd.join(", "));
      } else {
        let _0x428c3f = _0x4ecf03?.["errorMessage"] || (_0x4ecf03 ? JSON.stringify(_0x4ecf03) : "无返回");
        this.log("端午领取任务[" + _0x130894.taskName + "]奖励失败: " + _0x428c3f);
        _0x428c3f?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x3f7b5a) {
      console.log(_0x3f7b5a);
    }
  }
  async dragonBoat2024_game_indexInfo(_0x2c171b = {}) {
    try {
      let _0x33847c = {
          fn: "dragonBoat2024_game_indexInfo",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~indexInfo",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x191559
        } = await this.request(_0x33847c);
      if (_0x191559?.["success"]) {
        let _0x47c0a2 = _0x191559?.["obj"]?.["ifPassAllLevel"];
        await this.dragonBoat2024_game_init(_0x47c0a2);
      } else {
        let _0x41e307 = _0x191559?.["errorMessage"] || (_0x191559 ? JSON.stringify(_0x191559) : "无返回");
        this.log("端午查询游戏状态失败: " + _0x41e307);
        _0x41e307?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x5f2acc) {
      console.log(_0x5f2acc);
    }
  }
  async dragonBoat2024_game_init(_0x4e2a27, _0x27202b = {}) {
    try {
      let _0x5b8fb9 = {
          fn: "dragonBoat2024_game_init",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~init",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x3d61c9
        } = await this.request(_0x5b8fb9);
      if (_0x3d61c9?.["success"]) {
        let {
            gotPushTimeOfToday: _0x540eda,
            currentIndex: _0x4a361d
          } = _0x3d61c9?.["obj"],
          _0x95658 = 0;
        if (!_0x4e2a27) {
          _0x95658 = 30;
        } else {
          _0x540eda < 3 && (_0x95658 = 3 * (3 - _0x540eda));
        }
        if (_0x95658 > 0) {
          this.log("端午划龙舟, 目标: " + _0x95658 + "关");
          let _0x4f405a = Math.min(_0x95658 + _0x4a361d, 30);
          for (let _0x281d87 = _0x4a361d; _0x281d87 <= _0x4f405a; _0x281d87++) {
            let _0x3bd757 = Math.floor(Math.random() * 2000) + 2000;
            await _0x239c4b.wait(_0x3bd757);
            if (!(await this.dragonBoat2024_boat_win(_0x281d87))) {
              break;
            }
          }
        }
      } else {
        let _0x2caec2 = _0x3d61c9?.["errorMessage"] || (_0x3d61c9 ? JSON.stringify(_0x3d61c9) : "无返回");
        this.log("端午查询游戏状态失败: " + _0x2caec2);
        _0x2caec2?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x18ff27) {
      console.log(_0x18ff27);
    }
  }
  async dragonBoat2024_boat_win(_0x12833e = 1, _0x250c1f = {}) {
    let _0x2eff34 = true;
    try {
      const _0x5ed188 = {
        levelIndex: _0x12833e
      };
      let _0x423780 = {
          fn: "dragonBoat2024_boat_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x5ed188
        },
        {
          result: _0x3e78ca
        } = await this.request(_0x423780);
      if (_0x3e78ca?.["success"]) {
        let _0x37b4b4 = this.dragonBoat2024_parse_item(_0x3e78ca?.["obj"]?.["currentAwardList"] || []);
        _0x37b4b4 = _0x37b4b4.map(_0x1df1a4 => _0x1df1a4.type + "x" + _0x1df1a4.amount);
        _0x37b4b4.length ? this.log("端午划龙舟第" + _0x12833e + "关通关成功: " + _0x37b4b4.join(", ")) : this.log("端午划龙舟第" + _0x12833e + "关通关成功");
      } else {
        let _0x2e546a = _0x3e78ca?.["errorMessage"] || (_0x3e78ca ? JSON.stringify(_0x3e78ca) : "无返回");
        this.log("端午划龙舟第" + _0x12833e + "关失败: " + _0x2e546a);
        _0x2e546a?.["includes"]("系统繁忙") && (_0x2eff34 = false);
      }
    } catch (_0x2c45e6) {
      console.log(_0x2c45e6);
    } finally {
      return _0x2eff34;
    }
  }
  async dragonBoat2024_coinStatus(_0x45f7d1 = {}) {
    try {
      let _0x35a2c0 = {
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
          result: _0x2ecf24
        } = await this.request(_0x35a2c0);
        if (_0x2ecf24?.["success"]) {
          let _0x28a559 = _0x2ecf24?.["obj"]?.["accountCurrencyList"] || [],
            _0xa0ad50 = _0x28a559.filter(_0x77fc0a => _0x77fc0a.currency == "PUSH_TIMES"),
            _0x59121c = _0xa0ad50?.[0]?.["balance"] || 0;
          this.log("端午可以推" + _0x59121c + "次金币");
          while (_0x59121c-- > 0) {
            await this.dragonBoat2024_pushCoin();
          }
        } else {
          this.log("端午查询推金币状态失败: " + (_0x2ecf24?.["errorMessage"] || (_0x2ecf24 ? JSON.stringify(_0x2ecf24) : "无返回")));
        }
      }
      {
        let {
          result: _0x5dd129
        } = await this.request(_0x35a2c0);
        if (_0x5dd129?.["success"]) {
          let {
              accountCurrencyList = [],
              pushedTimesToday: _0x3dc7ba,
              pushedTimesTotal: _0x280772
            } = _0x5dd129?.["obj"],
            _0x4b88cd = this.dragonBoat2024_parse_item(accountCurrencyList),
            _0x712a7f = _0x4b88cd.filter(_0x4187a0 => _0x4187a0.currency == "COIN"),
            _0xb95fbf = _0x4b88cd.filter(_0x4ffa5b => _0x4ffa5b.currency == "RICH_CARD_GAME");
          this.coin = _0x712a7f?.[0]?.["amount"] || 0;
          this.rich_card = _0xb95fbf?.[0]?.["amount"] || 0;
          const _0x4d2edc = {
            notify: true
          };
          this.log("端午金币: " + this.coin + ", 发财卡: " + this.rich_card, _0x4d2edc);
          let _0x2cd30d = Math.floor(this.coin / 230),
            _0x250f39 = Math.min(_0x2cd30d, this.rich_card);
          this.log("端午可以抽发财卡池" + _0x250f39 + "次");
          while (_0x250f39-- > 0) {
            await this.dragonBoat2024_prizeDraw(4);
          }
        } else {
          this.log("端午查询金币失败: " + (_0x5dd129?.["errorMessage"] || (_0x5dd129 ? JSON.stringify(_0x5dd129) : "无返回")));
        }
      }
    } catch (_0x1d312c) {
      console.log(_0x1d312c);
    }
  }
  async dragonBoat2024_givePushTimes(_0x436931 = {}) {
    let _0x4fccf4 = true;
    try {
      let _0x5f0afc = {
        fn: "dragonBoat2024_givePushTimes",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~givePushTimes",
        headers: {
          ...this.getSign()
        },
        json: {}
      };
      await this.request(_0x5f0afc);
    } catch (_0x365efd) {
      console.log(_0x365efd);
    } finally {
      return _0x4fccf4;
    }
  }
  async dragonBoat2024_pushCoin(_0x45a605 = {}) {
    try {
      const _0x131728 = {
        plateToken: null
      };
      let _0x12bd50 = {
          fn: "dragonBoat2024_pushCoin",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~pushCoin",
          headers: {
            ...this.getSign()
          },
          json: _0x131728
        },
        {
          result: _0x5bf821
        } = await this.request(_0x12bd50);
      if (_0x5bf821?.["success"]) {
        let _0x3170f6 = this.dragonBoat2024_parse_item(_0x5bf821?.["obj"]?.["receivedAccountList"] || []);
        _0x3170f6 = _0x3170f6.map(_0x12b3fc => _0x12b3fc.type + "x" + _0x12b3fc.amount);
        _0x3170f6.length ? this.log("端午推金币成功: " + _0x3170f6.join(", ")) : this.log("端午推金币成功, 没有获得奖品");
      } else {
        this.log("端午推金币失败: " + (_0x5bf821?.["errorMessage"] || (_0x5bf821 ? JSON.stringify(_0x5bf821) : "无返回")));
      }
    } catch (_0x365755) {
      console.log(_0x365755);
    }
  }
  async dragonBoat2024_prizeDraw(_0x12d561, _0x1060cb = {}) {
    try {
      const _0x54f3ce = {
        drawType: _0x12d561
      };
      let _0x4747b7 = {
          fn: "dragonBoat2024_prizeDraw",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024LotteryService~prizeDraw",
          headers: {
            ...this.getSign()
          },
          json: _0x54f3ce
        },
        {
          result: _0x29e3df
        } = await this.request(_0x4747b7);
      if (_0x29e3df?.["success"]) {
        let {
          giftBagName: _0x378497,
          giftBagDesc: _0x232462
        } = _0x29e3df?.["obj"];
        const _0x1a0219 = {
          notify: true
        };
        this.log("端午奖池[" + _0x12d561 + "]抽奖: [" + _0x378497 + "]" + _0x232462, _0x1a0219);
      } else {
        this.log("端午奖池[" + _0x12d561 + "]抽奖失败: " + (_0x29e3df?.["errorMessage"] || (_0x29e3df ? JSON.stringify(_0x29e3df) : "无返回")));
      }
    } catch (_0x451a5b) {
      console.log(_0x451a5b);
    }
  }
  async anniversary2024_task(_0x4e91b1 = {}) {
    await this.anniversary2024_weeklyGiftStatus();
    if (this.anniversary_black) {
      return;
    }
    await this.anniversary2024_game_list();
    await this.anniversary2024_taskList();
    await this.anniversary2024_queryAccountStatus();
  }
  async anniversary2024_draw_task(_0x4266a8 = {}) {
    await this.anniversary2024_queryAccountStatus_card();
  }
  async dragonBoat2024_task(_0x50bfc0 = {}) {
    let _0x41d3e5 = Date.now();
    if (_0x41d3e5 < 1716516000000 || _0x41d3e5 > 1718190000000) {
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
  async memberDay_task(_0x84a23a = {}) {
    let _0x5d6420 = new Date().getDate();
    _0x5d6420 >= 26 && _0x5d6420 <= 28 && (await this.memberDay_index());
  }
  async userTask(_0x3c5112 = {}) {
    _0x239c4b.log("\n-------------- 账号[" + this.index + "] --------------");
    if (!(await this.refresh_cookie())) {
      return;
    }
    await this.superWelfare_receiveRedPacket();
    await this.automaticSignFetchPackage();
    if (_0x1a7924 == "true") {
      await this.bee_indexData();
    }
    await this.memberDay_task();
    await this.dragonBoat2024_task();
  }
}
!(async () => {
  if (!(await _0x1ca752())) {
    return;
  }
  await _0x3a05c2();
  _0x239c4b.read_env(_0xd75351);
  let _0x2e99f8 = _0x1a7924 == "true" ? "运行" : "不运行";
  _0x239c4b.log("");
  const _0x3e5ef2 = {
    notify: true
  };
  _0x239c4b.log("采蜜游戏目前设置为: " + _0x2e99f8, _0x3e5ef2);
  _0x239c4b.log("");
  for (let _0xd31103 of _0x239c4b.userList) {
    await _0xd31103.userTask();
  }
})().catch(_0x210ebf => _0x239c4b.log(_0x210ebf)).finally(() => _0x239c4b.exitNow());
async function _0x1ca752(_0x244b19 = 0) {
  let _0x418369 = false;
  try {
    const _0x1649df = {
      fn: "auth",
      method: "get",
      url: _0x16900f,
      timeout: 20000
    };
    let {
      statusCode: _0x267cdc,
      result: _0x5c310a
    } = await _0x128f56.request(_0x1649df);
    if (_0x267cdc != 200) {
      _0x244b19++ < MAX_AUTH_RETRY && (_0x418369 = await _0x1ca752(_0x244b19));
      return _0x418369;
    }
    if (_0x5c310a?.["code"] == 0) {
      _0x5c310a = JSON.parse(_0x5c310a.data.file.data);
      if (_0x5c310a?.["commonNotify"] && _0x5c310a.commonNotify.length > 0) {
        const _0x585bbc = {
          notify: true
        };
        _0x239c4b.log(_0x5c310a.commonNotify.join("\n") + "\n", _0x585bbc);
      }
      _0x5c310a?.["commonMsg"] && _0x5c310a.commonMsg.length > 0 && _0x239c4b.log(_0x5c310a.commonMsg.join("\n") + "\n");
      if (_0x5c310a[_0x591fed]) {
        let _0x545742 = _0x5c310a[_0x591fed];
        _0x545742.status == 0 ? _0x3781e0 >= _0x545742.version ? (_0x418369 = true, _0x239c4b.log(_0x545742.msg[_0x545742.status]), _0x239c4b.log(_0x545742.updateMsg), _0x239c4b.log("现在运行的脚本版本是：" + _0x3781e0 + "，最新脚本版本：" + _0x545742.latestVersion)) : _0x239c4b.log(_0x545742.versionMsg) : _0x239c4b.log(_0x545742.msg[_0x545742.status]);
      } else {
        _0x239c4b.log(_0x5c310a.errorMsg);
      }
    } else {
      _0x244b19++ < MAX_AUTH_RETRY && (_0x418369 = await _0x1ca752(_0x244b19));
    }
  } catch (_0x28f0a4) {
    _0x239c4b.log(_0x28f0a4);
  } finally {
    return _0x418369;
  }
}
async function _0x3a05c2() {
  let _0x3bb8a7 = false;
  try {
    const _0x31046b = {
      fn: "auth",
      method: "get",
      url: _0x3a106c
    };
    let {
      statusCode: _0x572759,
      result: _0xacdd1c
    } = await _0x128f56.request(_0x31046b);
    if (_0x572759 != 200) {
      return Promise.resolve();
    }
    _0xacdd1c?.["code"] == 0 && (_0xacdd1c = JSON.parse(_0xacdd1c.data.file.data), _0x2d776d = _0xacdd1c?.["inviteUserId"] || _0x2d776d, _0x10bb7a = _0xacdd1c?.["anniversary_2024"] || _0x10bb7a);
  } catch (_0x1bd433) {
    _0x239c4b.log(_0x1bd433);
  } finally {
    return _0x3bb8a7;
  }
}
function _0x3f079c(_0x5c06ed) {
  return new class {
    constructor(_0x1c1b1f) {
      this.name = _0x1c1b1f;
      this.startTime = Date.now();
      const _0x18c908 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x18c908);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0xf743e9, _0x548a98 = {}) {
      const _0x2995e3 = {
        console: true
      };
      Object.assign(_0x2995e3, _0x548a98);
      if (_0x2995e3.time) {
        let _0x4b5dfe = _0x2995e3.fmt || "hh:mm:ss";
        _0xf743e9 = "[" + this.time(_0x4b5dfe) + "]" + _0xf743e9;
      }
      if (_0x2995e3.notify) {
        this.notifyStr.push(_0xf743e9);
      }
      if (_0x2995e3.console) {
        console.log(_0xf743e9);
      }
    }
    get(_0x2224f7, _0x287eca, _0x4dec16 = "") {
      let _0x5064af = _0x4dec16;
      _0x2224f7?.["hasOwnProperty"](_0x287eca) && (_0x5064af = _0x2224f7[_0x287eca]);
      return _0x5064af;
    }
    pop(_0x442a4a, _0x23e5b3, _0x1a82fe = "") {
      let _0x5eca3a = _0x1a82fe;
      _0x442a4a?.["hasOwnProperty"](_0x23e5b3) && (_0x5eca3a = _0x442a4a[_0x23e5b3], delete _0x442a4a[_0x23e5b3]);
      return _0x5eca3a;
    }
    copy(_0x4356ae) {
      return Object.assign({}, _0x4356ae);
    }
    read_env(_0x133304) {
      let _0x243d4b = _0x8eb6bd.map(_0x546caf => process.env[_0x546caf]);
      for (let _0x1012f5 of _0x243d4b.filter(_0x2caa4d => !!_0x2caa4d)) {
        for (let _0x47f151 of _0x1012f5.split(_0x2bd326).filter(_0x4fdc7b => !!_0x4fdc7b)) {
          if (this.userList.includes(_0x47f151)) {
            continue;
          }
          this.userList.push(new _0x133304(_0x47f151));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x4061a2 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x8eb6bd.map(_0x5b306d => "[" + _0x5b306d + "]").join("或"), _0x4061a2);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x13f69e, _0x491b1c, _0x2f80d5 = {}) {
      while (_0x491b1c.idx < _0x239c4b.userList.length) {
        let _0xcc3e99 = _0x239c4b.userList[_0x491b1c.idx++];
        if (!_0xcc3e99.valid) {
          continue;
        }
        await _0xcc3e99[_0x13f69e](_0x2f80d5);
      }
    }
    async threadTask(_0x2ba6a9, _0x32704f) {
      let _0x4236bc = [];
      const _0x116761 = {
        idx: 0
      };
      while (_0x32704f--) {
        _0x4236bc.push(this.threads(_0x2ba6a9, _0x116761));
      }
      await Promise.all(_0x4236bc);
    }
    time(_0x46dcf1, _0x196923 = null) {
      let _0x10cb33 = _0x196923 ? new Date(_0x196923) : new Date(),
        _0x10e87e = {
          "M+": _0x10cb33.getMonth() + 1,
          "d+": _0x10cb33.getDate(),
          "h+": _0x10cb33.getHours(),
          "m+": _0x10cb33.getMinutes(),
          "s+": _0x10cb33.getSeconds(),
          "q+": Math.floor((_0x10cb33.getMonth() + 3) / 3),
          S: this.padStr(_0x10cb33.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x46dcf1) && (_0x46dcf1 = _0x46dcf1.replace(RegExp.$1, (_0x10cb33.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3a6e3f in _0x10e87e) new RegExp("(" + _0x3a6e3f + ")").test(_0x46dcf1) && (_0x46dcf1 = _0x46dcf1.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x10e87e[_0x3a6e3f] : ("00" + _0x10e87e[_0x3a6e3f]).substr(("" + _0x10e87e[_0x3a6e3f]).length)));
      return _0x46dcf1;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x2cc034 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x2cc034.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x1d343f, _0x3b9571, _0x55c39f = {}) {
      let _0x25a8b5 = _0x55c39f.padding || "0",
        _0x160fb5 = _0x55c39f.mode || "l",
        _0x12ce81 = String(_0x1d343f),
        _0x4d0f3f = _0x3b9571 > _0x12ce81.length ? _0x3b9571 - _0x12ce81.length : 0,
        _0x73cb7 = "";
      for (let _0x37f5cb = 0; _0x37f5cb < _0x4d0f3f; _0x37f5cb++) {
        _0x73cb7 += _0x25a8b5;
      }
      _0x160fb5 == "r" ? _0x12ce81 = _0x12ce81 + _0x73cb7 : _0x12ce81 = _0x73cb7 + _0x12ce81;
      return _0x12ce81;
    }
    json2str(_0x56cf63, _0x31c3f6, _0x3d1d89 = false) {
      let _0x2af41e = [];
      for (let _0x75e01c of Object.keys(_0x56cf63).sort()) {
        let _0x17e220 = _0x56cf63[_0x75e01c];
        if (_0x17e220 && _0x3d1d89) {
          _0x17e220 = encodeURIComponent(_0x17e220);
        }
        _0x2af41e.push(_0x75e01c + "=" + _0x17e220);
      }
      return _0x2af41e.join(_0x31c3f6);
    }
    str2json(_0x5e1f8e, _0x2f46dd = false) {
      let _0x22ab67 = {};
      for (let _0x1f0af6 of _0x5e1f8e.split("&")) {
        if (!_0x1f0af6) {
          continue;
        }
        let _0x4043d0 = _0x1f0af6.indexOf("=");
        if (_0x4043d0 == -1) {
          continue;
        }
        let _0x315925 = _0x1f0af6.substr(0, _0x4043d0),
          _0x5dfa4b = _0x1f0af6.substr(_0x4043d0 + 1);
        if (_0x2f46dd) {
          _0x5dfa4b = decodeURIComponent(_0x5dfa4b);
        }
        _0x22ab67[_0x315925] = _0x5dfa4b;
      }
      return _0x22ab67;
    }
    randomPattern(_0x32d0ba, _0x54ebc5 = "abcdef0123456789") {
      let _0x4cbd73 = "";
      for (let _0x88a532 of _0x32d0ba) {
        if (_0x88a532 == "x") {
          _0x4cbd73 += _0x54ebc5.charAt(Math.floor(Math.random() * _0x54ebc5.length));
        } else {
          _0x88a532 == "X" ? _0x4cbd73 += _0x54ebc5.charAt(Math.floor(Math.random() * _0x54ebc5.length)).toUpperCase() : _0x4cbd73 += _0x88a532;
        }
      }
      return _0x4cbd73;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x366a39, _0x6f6558 = "abcdef0123456789") {
      let _0x2f4a13 = "";
      for (let _0x127403 = 0; _0x127403 < _0x366a39; _0x127403++) {
        _0x2f4a13 += _0x6f6558.charAt(Math.floor(Math.random() * _0x6f6558.length));
      }
      return _0x2f4a13;
    }
    randomList(_0x4cacfd) {
      if (!_0x4cacfd.length) {
        return null;
      }
      let _0x4d79f0 = Math.floor(Math.random() * _0x4cacfd.length);
      return _0x4cacfd[_0x4d79f0];
    }
    wait(_0x25eabc) {
      return new Promise(_0x1802dd => setTimeout(_0x1802dd, _0x25eabc));
    }
    async exitNow() {
      await this.showmsg();
      let _0x430b40 = Date.now(),
        _0x2e16cd = (_0x430b40 - this.startTime) / 1000;
      this.log("");
      const _0x3a0897 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x2e16cd + "秒", _0x3a0897);
      process.exit(0);
    }
    normalize_time(_0x2aaca8, _0x1a15da = {}) {
      let _0x2a783c = _0x1a15da.len || default_timestamp_len;
      _0x2aaca8 = _0x2aaca8.toString();
      let _0x29f29e = _0x2aaca8.length;
      while (_0x29f29e < _0x2a783c) {
        _0x2aaca8 += "0";
      }
      _0x29f29e > _0x2a783c && (_0x2aaca8 = _0x2aaca8.slice(0, 13));
      return parseInt(_0x2aaca8);
    }
    async wait_until(_0x39f70b, _0x90a3b7 = {}) {
      let _0x1592e2 = _0x90a3b7.logger || this,
        _0x1e8595 = _0x90a3b7.interval || default_wait_interval,
        _0x432e87 = _0x90a3b7.limit || default_wait_limit,
        _0x1a9362 = _0x90a3b7.ahead || default_wait_ahead;
      if (typeof _0x39f70b == "string" && _0x39f70b.includes(":")) {
        if (_0x39f70b.includes("-")) {
          _0x39f70b = new Date(_0x39f70b).getTime();
        } else {
          let _0x2695b7 = this.time("yyyy-MM-dd ");
          _0x39f70b = new Date(_0x2695b7 + _0x39f70b).getTime();
        }
      }
      let _0x37ddab = this.normalize_time(_0x39f70b) - _0x1a9362,
        _0x7bf1a4 = this.time("hh:mm:ss.S", _0x37ddab),
        _0x41d8b7 = Date.now();
      _0x41d8b7 > _0x37ddab && (_0x37ddab += 86400000);
      let _0x7f8a0f = _0x37ddab - _0x41d8b7;
      if (_0x7f8a0f > _0x432e87) {
        const _0x4f1850 = {
          time: true
        };
        _0x1592e2.log("离目标时间[" + _0x7bf1a4 + "]大于" + _0x432e87 / 1000 + "秒,不等待", _0x4f1850);
      } else {
        const _0x2c08e5 = {
          time: true
        };
        _0x1592e2.log("离目标时间[" + _0x7bf1a4 + "]还有" + _0x7f8a0f / 1000 + "秒,开始等待", _0x2c08e5);
        while (_0x7f8a0f > 0) {
          let _0x529890 = Math.min(_0x7f8a0f, _0x1e8595);
          await this.wait(_0x529890);
          _0x41d8b7 = Date.now();
          _0x7f8a0f = _0x37ddab - _0x41d8b7;
        }
        const _0x335df7 = {
          time: true
        };
        _0x1592e2.log("已完成等待", _0x335df7);
      }
    }
    async wait_gap_interval(_0x479ae2, _0x444ab2) {
      let _0x32f817 = Date.now() - _0x479ae2;
      _0x32f817 < _0x444ab2 && (await this.wait(_0x444ab2 - _0x32f817));
    }
  }(_0x5c06ed);
}