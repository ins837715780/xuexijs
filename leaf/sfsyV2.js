const _0xef7c3f = _0x454721("顺丰速运"),
  _0x5a0d3c = require("got"),
  _0x2e7a56 = require("crypto-js"),
  {
    CookieJar: _0x2df283
  } = require("tough-cookie"),
  _0x237b56 = "sfsy",
  _0x1ccdf6 = /[\n]/,
  _0x329ced = [_0x237b56 + "Url"],
  _0xbd2a01 = process.env[_0x237b56 + "Bee"] || "false",
  _0x10b365 = 8000,
  _0x4d5d43 = 3;
const _0x2324e1 = 2.19,
  _0x44c7d7 = "sfsy",
  _0x11a1d2 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x295471 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x44c7d7 + ".json",
  _0x9b5653 = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  _0x556de7 = "wwesldfs29aniversaryvdld29",
  _0x2c1847 = "MCS-MIMP-CORE",
  _0x113de0 = "czflqdlhbxcx",
  _0x18299e = "wxwd26mem1",
  _0xae8a54 = {
    BAOZHU_CARD: "[爆竹卡]",
    CHUNLIAN_CARD: "[春联卡]",
    DENGLONG_CARD: "[灯笼卡]",
    HONGBAO_CARD: "[红包卡]",
    YUANXIAO_CARD: "[元宵卡]",
    CHUANGHUA_CARD: "[窗花卡]",
    COMMON_CARD: "[万能卡]"
  };
const _0xecd445 = {
  PUSH_TIMES: "推金币次数",
  COIN: "金币",
  WELFARE_CARD: "财富卡"
};
const _0x2ce8ea = "YEAR_END_2023",
  _0x2a5a00 = "ANNIVERSARY_2024",
  _0x863e9 = "MEMBER_DAY",
  _0x2470af = "DRAGONBOAT_2024",
  _0x1e8570 = 8,
  _0x2da73f = 1 << _0x1e8570 - 1,
  _0x558d1d = ["完成连签7天", "参与积分活动", "每月累计寄件", "完成每月任务", "与好友微信分享会员福利", "DAILY_VIP_TASK_TYPE", "去新增一个收件偏好", "用行业模板寄件下单"];
let _0x303b16 = [],
  _0x414d65 = {};
class _0x2fc667 {
  constructor() {
    this.index = _0xef7c3f.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x38a84f = {
      limit: 0
    };
    const _0x37e07d = {
      Connection: "keep-alive"
    };
    const _0x57133b = {
      retry: _0x38a84f,
      timeout: _0x10b365,
      followRedirect: false,
      headers: _0x37e07d
    };
    this.got = _0x5a0d3c.extend(_0x57133b);
  }
  log(_0xdc17af, _0x5f0800 = {}) {
    var _0x2e4be3 = "",
      _0x47d5d3 = _0xef7c3f.userCount.toString().length;
    if (this.index) {
      _0x2e4be3 += "账号[" + _0xef7c3f.padStr(this.index, _0x47d5d3) + "]";
    }
    if (this.name) {
      _0x2e4be3 += "[" + this.name + "]";
    }
    _0xef7c3f.log(_0x2e4be3 + _0xdc17af, _0x5f0800);
  }
  async request(_0x26dfc1) {
    const _0x233347 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x37ae16 = ["TimeoutError"];
    var _0x41b794 = null,
      _0x3ea4e7 = 0,
      _0x57f2eb = _0x26dfc1.fn || _0x26dfc1.url;
    _0x26dfc1.method = _0x26dfc1?.["method"]?.["toUpperCase"]() || "GET";
    let _0x459e15;
    while (_0x3ea4e7 < _0x4d5d43) {
      try {
        _0x3ea4e7++;
        _0x459e15 = null;
        let _0x583eaf = null,
          _0x59c369 = _0x26dfc1?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x10b365,
          _0x19890f = false;
        await new Promise(async _0x3cd714 => {
          setTimeout(() => {
            _0x19890f = true;
            _0x3cd714();
          }, _0x59c369);
          await this.got(_0x26dfc1).then(_0x20334b => {
            _0x41b794 = _0x20334b;
          }, _0xdf3c7e => {
            _0x583eaf = _0xdf3c7e;
            _0x41b794 = _0xdf3c7e.response;
            _0x459e15 = _0x583eaf?.["code"];
          });
          _0x3cd714();
        });
        if (_0x19890f) {
          this.log("[" + _0x57f2eb + "]请求超时(" + _0x59c369 / 1000 + "秒)，重试第" + _0x3ea4e7 + "次");
        } else {
          if (_0x37ae16.includes(_0x583eaf?.["name"])) {
            this.log("[" + _0x57f2eb + "]请求超时(" + _0x583eaf.code + ")，重试第" + _0x3ea4e7 + "次");
          } else {
            if (_0x233347.includes(_0x583eaf?.["code"])) {
              this.log("[" + _0x57f2eb + "]请求错误(" + _0x583eaf.code + ")，重试第" + _0x3ea4e7 + "次");
            } else {
              let _0x1d275c = _0x41b794?.["statusCode"] || 999,
                _0x166cff = _0x1d275c / 100 | 0;
              if (_0x166cff > 3) {
                this.log("请求[" + _0x57f2eb + "]返回[" + _0x1d275c + "]");
              }
              if (_0x166cff <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x389b7e) {
        _0x389b7e.name == "TimeoutError" ? this.log("[" + _0x57f2eb + "]请求超时，重试第" + _0x3ea4e7 + "次") : this.log("[" + _0x57f2eb + "]请求错误(" + _0x389b7e.message + ")，重试第" + _0x3ea4e7 + "次");
      }
    }
    const _0xd55de3 = {
      statusCode: _0x459e15 || -1,
      headers: null,
      result: null
    };
    if (_0x41b794 == null) {
      return Promise.resolve(_0xd55de3);
    }
    let {
      statusCode: _0x508c03,
      headers: _0x3adbc8,
      body: _0x26d485
    } = _0x41b794;
    if (_0x26d485) {
      try {
        _0x26d485 = JSON.parse(_0x26d485);
      } catch {}
    }
    const _0x6693c1 = {
      statusCode: _0x508c03,
      headers: _0x3adbc8,
      result: _0x26d485
    };
    return Promise.resolve(_0x6693c1);
  }
}
let _0x35d780 = new _0x2fc667();
class _0x1b782c extends _0x2fc667 {
  constructor(_0x54dacb) {
    super();
    this.refreshUrl = _0x54dacb;
    this.cookieJar = new _0x2df283();
    this.deviceId = _0xef7c3f.randomPattern("xxxxxxxx-xxxx-xxxx");
    this.jika_black = false;
    this.anniversary_black = false;
    this.dragonBoat_black = false;
    this.memberDay_black = false;
    this.memberDay_redPacket_drewToday = false;
    this.memberDay_redPacket_map = {};
    const _0x8c07aa = {
      "User-Agent": _0x9b5653
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x8c07aa
    });
  }
  getSign(_0x4c2037 = {}) {
    let _0x1790cd = Date.now(),
      _0x32c8a2 = "token=" + _0x556de7 + "&timestamp=" + _0x1790cd + "&sysCode=" + _0x2c1847,
      _0x2840db = _0x2e7a56.MD5(_0x32c8a2).toString();
    const _0x2f695b = {
      platform: "MINI_PROGRAM",
      channel: _0x18299e,
      sysCode: _0x2c1847,
      timestamp: _0x1790cd,
      signature: _0x2840db
    };
    return _0x2f695b;
  }
  async refresh_cookie(_0x264055 = {}) {
    let _0x247858 = false;
    try {
      const _0x4b8418 = {
        fn: "refresh_cookie",
        method: "get",
        url: this.refreshUrl
      };
      let {
        statusCode: _0x533126,
        headers: _0x2d296f
      } = await this.request(_0x4b8418);
      if (_0x533126 == 302) {
        for (let _0x5c554e of _0x2d296f["set-cookie"]) {
          if (_0x5c554e.includes("_login_mobile_")) {
            let _0x4fc20d = _0x5c554e.match(/_login_mobile_=(\d+);/);
            _0x4fc20d && (this.name = _0x4fc20d[1]);
            break;
          }
        }
        _0x247858 = true;
        this.log("登录成功");
      } else {
        this.log("登录失败[" + _0x533126 + "]");
      }
    } catch (_0x52eaab) {
      console.log(_0x52eaab);
    } finally {
      return _0x247858;
    }
  }
  async personalInfo(_0x381307 = {}) {
    try {
      let _0x3c1e2c = {
          fn: "personalInfo",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/member/personalInfo",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x5f09f5
        } = await this.request(_0x3c1e2c);
      if (_0x5f09f5?.["success"]) {
        const _0x2579bf = {
          notify: true
        };
        this.log("积分: " + _0x5f09f5.obj.availablePoints, _0x2579bf);
      } else {
        this.log("查询账号信息失败: " + (_0x5f09f5?.["errorMessage"] || (_0x5f09f5 ? JSON.stringify(_0x5f09f5) : "无返回")));
      }
    } catch (_0x19a2b0) {
      console.log(_0x19a2b0);
    }
  }
  async queryUserInfo(_0x4896e1 = {}) {
    try {
      let _0x4c01b2 = {
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
          result: _0x692c4f
        } = await this.request(_0x4c01b2);
      if (_0x692c4f?.["success"]) {
        let {
            usablePoint: _0x18488a,
            cycleAdd: _0x19021b,
            cycleSub: _0x2a1e0e,
            leavePoint: _0x5935b5,
            pointClearCycle: _0x10181d
          } = _0x692c4f.obj,
          _0x584c83 = "积分: " + _0x18488a,
          _0x8648d9 = _0x5935b5 - _0x2a1e0e,
          _0x9c0ea5 = new Date(_0x10181d + " 00:00:00");
        _0x9c0ea5.setFullYear(_0x9c0ea5.getFullYear() + 1);
        let _0x35b061 = _0x9c0ea5.getTime();
        if (_0x8648d9 > 0 && _0x35b061 > Date.now()) {
          let _0x9c5a1 = _0xef7c3f.time("yyyy-MM-dd", _0x35b061);
          _0x584c83 += ", 有" + _0x8648d9 + "积分将在" + _0x9c5a1 + "过期";
        }
        const _0x49636f = {
          notify: true
        };
        this.log(_0x584c83, _0x49636f);
      } else {
        this.log("查询账号信息失败: " + (_0x692c4f?.["errorMessage"] || (_0x692c4f ? JSON.stringify(_0x692c4f) : "无返回")));
      }
    } catch (_0x4aa18d) {
      console.log(_0x4aa18d);
    }
  }
  async automaticSignFetchPackage(_0x5a4205 = {}) {
    try {
      let _0x19acb5 = {
          fn: "automaticSignFetchPackage",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage",
          headers: {
            ...this.getSign()
          },
          json: {
            comeFrom: _0xef7c3f.get(_0x5a4205, "comeFrom", "vioin"),
            channelFrom: _0xef7c3f.get(_0x5a4205, "channelFrom", "SFAPP")
          }
        },
        {
          result: _0x2347ad
        } = await this.request(_0x19acb5);
      if (_0x2347ad?.["success"]) {
        _0x2347ad?.["obj"]?.["hasFinishSign"] ? this.log("今天已签到") : _0x2347ad?.["obj"]?.["integralTaskSignPackageVOList"]?.["length"] && this.log("签到获得: " + _0x2347ad?.["obj"]?.["integralTaskSignPackageVOList"]?.["map"](_0x3a897a => _0x3a897a.packetName)?.["join"](", "));
        await this.queryPointTaskAndSignFromES();
        const _0x40cfc2 = {
          channelType: 3
        };
        await this.queryPointTaskAndSignFromES(_0x40cfc2);
        await this.queryUserInfo();
      } else {
        this.log("查询签到失败: " + (_0x2347ad?.["errorMessage"] || (_0x2347ad ? JSON.stringify(_0x2347ad) : "无返回")));
      }
    } catch (_0x287104) {
      console.log(_0x287104);
    }
  }
  async queryPointTaskAndSignFromES(_0x5506ba = {}) {
    try {
      let _0x27bd3f = {
          fn: "queryPointTaskAndSignFromES",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES",
          headers: {
            ...this.getSign()
          },
          json: {
            deviceId: this.deviceId,
            channelType: String(_0xef7c3f.get(_0x5506ba, "channelType", 1))
          }
        },
        {
          result: _0x273586
        } = await this.request(_0x27bd3f);
      if (_0x273586?.["success"]) {
        for (let _0x127ca4 of _0x273586.obj.taskTitleLevels) {
          switch (_0x127ca4.status) {
            case 2:
              if (_0x558d1d.includes(_0x127ca4.title)) {
                break;
              }
              await this.finishTask(_0x127ca4);
            case 1:
              await this.fetchIntegral(_0x127ca4);
              break;
            case 3:
              break;
            default:
              this.log("任务[" + _0x127ca4.title + "] -- 未知状态[" + _0x127ca4.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x273586?.["errorMessage"] || (_0x273586 ? JSON.stringify(_0x273586) : "无返回")));
      }
    } catch (_0x5e4e95) {
      console.log(_0x5e4e95);
    }
  }
  async finishTask(_0x4334ba, _0x37ca0e = {}) {
    try {
      const _0x5760e1 = {
        taskCode: _0x4334ba.taskCode
      };
      let _0x461d7e = {
          fn: "finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x5760e1
        },
        {
          result: _0x27c4f7
        } = await this.request(_0x461d7e);
      _0x27c4f7?.["success"] ? this.log("完成任务[" + _0x4334ba.title + "]成功") : this.log("完成任务[" + _0x4334ba.title + "]失败: " + (_0x27c4f7?.["errorMessage"] || (_0x27c4f7 ? JSON.stringify(_0x27c4f7) : "无返回")));
    } catch (_0x5cc76a) {
      console.log(_0x5cc76a);
    }
  }
  async fetchIntegral(_0x27aef5, _0x5a6df8 = {}) {
    try {
      let _0x72d434 = {
          fn: "fetchIntegral",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral",
          headers: {
            ...this.getSign()
          },
          json: {
            strategyId: _0x27aef5.strategyId,
            taskId: _0x27aef5.taskId,
            taskCode: _0x27aef5.taskCode,
            deviceId: this.deviceId
          }
        },
        {
          result: _0x1adef6
        } = await this.request(_0x72d434);
      _0x1adef6?.["success"] ? this.log("领取任务[" + _0x27aef5.title + "]奖励: " + _0x1adef6.obj.point + "积分") : this.log("领取任务[" + _0x27aef5.title + "]奖励失败: " + (_0x1adef6?.["errorMessage"] || (_0x1adef6 ? JSON.stringify(_0x1adef6) : "无返回")));
    } catch (_0x58cd0c) {
      console.log(_0x58cd0c);
    }
  }
  async queryPointTaskAndSign(_0x28fb9d = {}) {
    try {
      let _0x21c899 = {
          fn: "queryPointTaskAndSign",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/queryPointTaskAndSign",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0xef7c3f.get(_0x28fb9d, "channel", "SFAPP"),
            pageType: _0xef7c3f.get(_0x28fb9d, "pageType", "APP_MINE_TASK")
          }
        },
        {
          result: _0x274622
        } = await this.request(_0x21c899);
      if (_0x274622?.["success"]) {
        for (let _0x30a80a of _0x274622?.["obj"]?.["taskTitleLevels"] || []) {
          if (_0x558d1d.includes(_0x30a80a.title)) {
            continue;
          }
          await this.scanPageToRecord(_0x30a80a);
          await this.fetchPoint(_0x30a80a);
        }
      } else {
        this.log("查询旧版任务失败: " + (_0x274622?.["errorMessage"] || (_0x274622 ? JSON.stringify(_0x274622) : "无返回")));
      }
    } catch (_0x2b05a8) {
      console.log(_0x2b05a8);
    }
  }
  async scanPageToRecord(_0x592975, _0x325f01 = {}) {
    try {
      let _0x3efd5b = {
          fn: "scanPageToRecord",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/scanPageToRecord",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0xef7c3f.get(_0x325f01, "channel", "SFAPP"),
            pageType: _0x592975.pageType
          }
        },
        {
          result: _0xbfe0fb
        } = await this.request(_0x3efd5b);
      _0xbfe0fb?.["success"] ? this.log("完成任务[" + _0x592975.title + "]成功") : this.log("完成任务[" + _0x592975.title + "]失败: " + (_0xbfe0fb?.["errorMessage"] || (_0xbfe0fb ? JSON.stringify(_0xbfe0fb) : "无返回")));
    } catch (_0x24621b) {
      console.log(_0x24621b);
    }
  }
  async fetchPoint(_0x231d2c, _0x5cdfd3 = {}) {
    try {
      let _0x28d810 = {
          fn: "fetchPoint",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/fetchPoint",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0xef7c3f.get(_0x5cdfd3, "channel", "SFAPP"),
            pageType: _0x231d2c.pageType,
            deviceId: this.deviceId
          }
        },
        {
          result: _0x5e35ac
        } = await this.request(_0x28d810);
      _0x5e35ac?.["success"] ? this.log("领取任务[" + _0x231d2c.title + "]奖励成功") : this.log("领取任务[" + _0x231d2c.title + "]奖励失败: " + (_0x5e35ac?.["errorMessage"] || (_0x5e35ac ? JSON.stringify(_0x5e35ac) : "无返回")));
    } catch (_0x3d4420) {
      console.log(_0x3d4420);
    }
  }
  async personalInfoNew(_0x16ea8d = {}) {
    try {
      let _0x55359d = {
          fn: "personalInfoNew",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~personalInfoNew",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x443be1
        } = await this.request(_0x55359d);
      if (_0x443be1?.["success"]) {
        this.userId = _0x443be1.obj.userId;
        const _0x2cc33c = {
          notify: true
        };
        this.log("积分: " + _0x443be1.obj.availablePoints, _0x2cc33c);
      } else {
        this.log("查询账号积分失败: " + (_0x443be1?.["errorMessage"] || (_0x443be1 ? JSON.stringify(_0x443be1) : "无返回")));
      }
    } catch (_0x7fdf29) {
      console.log(_0x7fdf29);
    }
  }
  async bee_indexData(_0x42ad06 = {}) {
    try {
      let _0x5719de = _0xef7c3f.randomList(_0x303b16.filter(_0x3a2230 => _0x3a2230 != this.userId));
      const _0x265196 = {
        inviteUserId: _0x5719de
      };
      let _0x3a5231 = {
        fn: "bee_indexData",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~indexData",
        headers: {
          ...this.getSign()
        },
        json: _0x265196
      };
      {
        let {
          result: _0x3587c7
        } = await this.request(_0xef7c3f.copy(_0x3a5231));
        if (_0x3587c7?.["success"]) {
          _0x3587c7?.["obj"]?.["friendAwards"]?.["length"] && this.log("获得奖励: " + _0x3587c7.obj.friendAwards.map(_0x4e0523 => _0x4e0523.name).join(","));
          let _0x31e9f3 = _0x3587c7?.["obj"]?.["gameNum"] || 0;
          this.log("可以采蜜冒险" + _0x31e9f3 + "次");
          while (_0x31e9f3-- > 0) {
            await this.bee_gameReport();
          }
          await this.bee_taskDetail();
        } else {
          const _0x3e83f3 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x3587c7?.["errorMessage"] || (_0x3587c7 ? JSON.stringify(_0x3587c7) : "无返回")), _0x3e83f3);
          return;
        }
      }
      {
        let {
          result: _0x2b6705
        } = await this.request(_0xef7c3f.copy(_0x3a5231));
        if (_0x2b6705?.["success"]) {
          for (let _0x25196e of _0x2b6705?.["obj"]?.["taskDetail"] || []) {
            await this.bee_receiveHoney(_0x25196e);
          }
        } else {
          const _0x368a80 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x2b6705?.["errorMessage"] || (_0x2b6705 ? JSON.stringify(_0x2b6705) : "无返回")), _0x368a80);
          return;
        }
      }
      {
        let {
          result: _0x4c4c5d
        } = await this.request(_0xef7c3f.copy(_0x3a5231));
        if (_0x4c4c5d?.["success"]) {
          const _0x368bea = {
            notify: true
          };
          this.log("采蜜游戏丰蜜: " + (_0x4c4c5d?.["obj"]?.["usableHoney"] || 0), _0x368bea);
        } else {
          const _0x5d70dd = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x4c4c5d?.["errorMessage"] || (_0x4c4c5d ? JSON.stringify(_0x4c4c5d) : "无返回")), _0x5d70dd);
          return;
        }
      }
    } catch (_0x25c78f) {
      console.log(_0x25c78f);
    }
  }
  async bee_receiveHoney(_0x18adbe, _0x362866 = {}) {
    try {
      const _0x59064e = {
        taskType: _0x18adbe.type
      };
      let _0x2dbe3c = {
          fn: "bee_receiveHoney",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~receiveHoney",
          headers: {
            ...this.getSign()
          },
          json: _0x59064e
        },
        {
          result: _0x31f79b
        } = await this.request(_0x2dbe3c);
      _0x31f79b?.["success"] ? this.log("领取[" + _0x18adbe.type + "]奖励获得: " + _0x18adbe.value + "丰蜜") : this.log("领取[" + _0x18adbe.type + "]奖励失败: " + (_0x31f79b?.["errorMessage"] || (_0x31f79b ? JSON.stringify(_0x31f79b) : "无返回")));
    } catch (_0x42176f) {
      console.log(_0x42176f);
    }
  }
  async bee_gameReport(_0x2981ab = {}) {
    try {
      let _0x27980a = 20;
      const _0x570a6f = {
        gatherHoney: _0x27980a
      };
      let _0x1f64aa = {
          fn: "bee_gameReport",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeGameService~gameReport",
          headers: {
            ...this.getSign()
          },
          json: _0x570a6f
        },
        {
          result: _0x346cad
        } = await this.request(_0x1f64aa);
      _0x346cad?.["success"] ? this.log("采蜜冒险获得" + _0x27980a + "丰蜜") : this.log("采蜜冒险失败: " + (_0x346cad?.["errorMessage"] || (_0x346cad ? JSON.stringify(_0x346cad) : "无返回")));
    } catch (_0x23959e) {
      console.log(_0x23959e);
    }
  }
  async bee_taskDetail(_0x351b5c = {}) {
    try {
      let _0x10f59a = {
          fn: "bee_taskDetail",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~taskDetail",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x10e079
        } = await this.request(_0x10f59a);
      if (_0x10e079?.["success"]) {
        for (let _0x25c2d1 of _0x10e079.obj.list) {
          if (!_0x25c2d1.taskCode) {
            continue;
          }
          switch (_0x25c2d1.status) {
            case 2:
              if (_0x558d1d.includes(_0x25c2d1.taskType)) {
                break;
              }
              await this.bee_finishTask(_0x25c2d1);
            case 1:
            case 3:
              break;
            default:
              this.log("任务[" + _0x25c2d1.title + "] -- 未知状态[" + _0x25c2d1.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x10e079?.["errorMessage"] || (_0x10e079 ? JSON.stringify(_0x10e079) : "无返回")));
      }
    } catch (_0x3825c6) {
      console.log(_0x3825c6);
    }
  }
  async bee_finishTask(_0x5b35a3, _0x5e7557 = {}) {
    try {
      const _0x2725ab = {
        taskCode: _0x5b35a3.taskCode
      };
      let _0x223cef = {
          fn: "bee_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x2725ab
        },
        {
          result: _0xbd4af3
        } = await this.request(_0x223cef);
      _0xbd4af3?.["success"] ? this.log("完成采蜜任务[" + _0x5b35a3.taskType + "]成功") : this.log("完成采蜜任务[" + _0x5b35a3.taskType + "]失败: " + (_0xbd4af3?.["errorMessage"] || (_0xbd4af3 ? JSON.stringify(_0xbd4af3) : "无返回")));
    } catch (_0x14aa51) {
      console.log(_0x14aa51);
    }
  }
  async superWelfare_receiveRedPacket(_0x314f8e = {}) {
    try {
      const _0x396523 = {
        channel: _0x113de0
      };
      let _0x526c5f = {
          fn: "superWelfare_receiveRedPacket",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberActLengthy~redPacketActivityService~superWelfare~receiveRedPacket",
          headers: {
            ...this.getSign()
          },
          json: _0x396523
        },
        {
          result: _0x410306
        } = await this.request(_0x526c5f);
      if (_0x410306?.["success"]) {
        let _0x408664 = _0x410306?.["obj"]?.["giftList"];
        if (_0x410306?.["obj"]?.["extraGiftList"]?.["length"]) {
          _0x408664 = _0x408664.concat(_0x410306.obj.extraGiftList);
        }
        let _0x4e20f8 = _0x408664?.["map"](_0x5db3d4 => _0x5db3d4.giftName)?.["join"](", ") || "",
          _0x5893be = _0x410306?.["obj"]?.["receiveStatus"] == 1 ? "领取成功" : "已领取过";
        const _0x38ab9d = {
          notify: true
        };
        this.log("超值福利签到[" + _0x5893be + "]: " + _0x4e20f8, _0x38ab9d);
      } else {
        this.log("超值福利签到失败: " + (_0x410306?.["errorMessage"] || (_0x410306 ? JSON.stringify(_0x410306) : "无返回")));
      }
    } catch (_0x1fd809) {
      console.log(_0x1fd809);
    }
  }
  async memberDay_index(_0x524a9e = {}) {
    try {
      let _0x3614af = _0xef7c3f.randomList(_0x303b16.filter(_0xd39176 => _0xd39176 != this.userId));
      const _0x5d9952 = {
        inviteUserId: _0x3614af
      };
      let _0x29e07a = {
          fn: "memberDay_index",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~index",
          headers: {
            ...this.getSign()
          },
          json: _0x5d9952
        },
        {
          result: _0x27eba1
        } = await this.request(_0x29e07a);
      if (_0x27eba1?.["success"]) {
        let {
          lotteryNum: _0x125581,
          canReceiveInviteAward: _0x2d6658,
          risk: _0x589aae
        } = _0x27eba1?.["obj"];
        _0x2d6658 && (await this.memberDay_receiveInviteAward(_0x3614af));
        await this.memberDay_redPacketReceivedStatus();
        _0x125581 = _0x125581 || 0;
        this.log("会员日可以抽奖" + _0x125581 + "次");
        while (_0x125581-- > 0) {
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
        let _0x5d179c = _0x27eba1?.["errorMessage"] || (_0x27eba1 ? JSON.stringify(_0x27eba1) : "无返回");
        this.log("查询会员日失败: " + _0x5d179c);
        if (_0x5d179c?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x1dc4d8 = {
            notify: true
          };
          this.log("会员日任务风控", _0x1dc4d8);
        }
      }
    } catch (_0x4c3580) {
      console.log(_0x4c3580);
    }
  }
  async memberDay_receiveInviteAward(_0x576cea, _0x41c6f5 = {}) {
    try {
      const _0x18963b = {
        inviteUserId: _0x576cea
      };
      let _0x3d189f = {
          fn: "memberDay_receiveInviteAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~receiveInviteAward",
          headers: {
            ...this.getSign()
          },
          json: _0x18963b
        },
        {
          result: _0x317d9e
        } = await this.request(_0x3d189f);
      if (_0x317d9e?.["success"]) {
        let {
          productName = "空气"
        } = _0x317d9e?.["obj"] || {};
        const _0x917d56 = {
          notify: true
        };
        this.log("会员日奖励: " + productName, _0x917d56);
      } else {
        let _0x4a034d = _0x317d9e?.["errorMessage"] || (_0x317d9e ? JSON.stringify(_0x317d9e) : "无返回");
        this.log("领取会员日奖励失败: " + _0x4a034d);
        if (_0x4a034d?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x50930c = {
            notify: true
          };
          this.log("会员日任务风控", _0x50930c);
        }
      }
    } catch (_0x2b6f30) {
      console.log(_0x2b6f30);
    }
  }
  async memberDay_lottery(_0x2b2dcf = {}) {
    try {
      let _0x2a0e0a = {
          fn: "memberDay_lottery",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayLotteryService~lottery",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x2200b5
        } = await this.request(_0x2a0e0a);
      if (_0x2200b5?.["success"]) {
        let {
          productName = "空气"
        } = _0x2200b5?.["obj"] || {};
        const _0x53d55f = {
          notify: true
        };
        this.log("会员日抽奖: " + productName, _0x53d55f);
      } else {
        let _0x147c5e = _0x2200b5?.["errorMessage"] || (_0x2200b5 ? JSON.stringify(_0x2200b5) : "无返回");
        this.log("会员日抽奖失败: " + _0x147c5e);
        if (_0x147c5e?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x2c9473 = {
            notify: true
          };
          this.log("会员日任务风控", _0x2c9473);
        }
      }
    } catch (_0x5bc3b5) {
      console.log(_0x5bc3b5);
    }
  }
  async memberDay_taskList(_0x5185b2 = {}) {
    try {
      const _0x228996 = {
        activityCode: _0x863e9,
        channelType: "MINI_PROGRAM"
      };
      let _0x3fb34a = {
          fn: "memberDay_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: _0x228996
        },
        {
          result: _0x532d96
        } = await this.request(_0x3fb34a);
      if (_0x532d96?.["success"]) {
        let _0x211dbf = _0x532d96?.["obj"] || [];
        for (let _0x4e6834 of _0x211dbf.filter(_0x2e9846 => _0x2e9846.status == 1)) {
          if (this.memberDay_black) {
            return;
          }
          await this.memberDay_fetchMixTaskReward(_0x4e6834);
        }
        for (let _0x20f6fc of _0x211dbf.filter(_0xfd3bdb => _0xfd3bdb.status == 2)) {
          if (this.memberDay_black) {
            return;
          }
          switch (_0x20f6fc.taskType) {
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
                for (let _0x17145d = 0; _0x17145d < _0x20f6fc.restFinishTime && !this.memberDay_black; _0x17145d++) {
                  await this.memberDay_finishTask(_0x20f6fc);
                }
                break;
              }
          }
        }
      } else {
        let _0x38bdde = _0x532d96?.["errorMessage"] || (_0x532d96 ? JSON.stringify(_0x532d96) : "无返回");
        this.log("查询会员日任务失败: " + _0x38bdde);
        if (_0x38bdde?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x5f0aee = {
            notify: true
          };
          this.log("会员日任务风控", _0x5f0aee);
        }
      }
    } catch (_0x18776a) {
      console.log(_0x18776a);
    }
  }
  async memberDay_finishTask(_0x22a83a, _0x292273 = {}) {
    try {
      const _0xf449ed = {
        taskCode: _0x22a83a.taskCode
      };
      let _0x4ff27d = {
          fn: "memberDay_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0xf449ed
        },
        {
          result: _0x4bbe63
        } = await this.request(_0x4ff27d);
      if (_0x4bbe63?.["success"]) {
        this.log("完成会员日任务[" + _0x22a83a.taskName + "]成功");
        await this.memberDay_fetchMixTaskReward(_0x22a83a);
      } else {
        let _0x4f357f = _0x4bbe63?.["errorMessage"] || (_0x4bbe63 ? JSON.stringify(_0x4bbe63) : "无返回");
        this.log("完成会员日任务[" + _0x22a83a.taskName + "]失败: " + _0x4f357f);
        if (_0x4f357f?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x1943b3 = {
            notify: true
          };
          this.log("会员日任务风控", _0x1943b3);
        }
      }
    } catch (_0x5b06fe) {
      console.log(_0x5b06fe);
    }
  }
  async memberDay_fetchMixTaskReward(_0x275a04, _0x30482d = {}) {
    try {
      let _0x1f1b35 = {
          fn: "memberDay_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x275a04.taskType,
            activityCode: _0x863e9,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0xfb7a89
        } = await this.request(_0x1f1b35);
      if (_0xfb7a89?.["success"]) {
        this.log("领取会员日任务[" + _0x275a04.taskName + "]奖励成功");
      } else {
        let _0x1970bf = _0xfb7a89?.["errorMessage"] || (_0xfb7a89 ? JSON.stringify(_0xfb7a89) : "无返回");
        this.log("领取会员日任务[" + _0x275a04.taskName + "]奖励失败: " + _0x1970bf);
        if (_0x1970bf?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x3728d4 = {
            notify: true
          };
          this.log("会员日任务风控", _0x3728d4);
        }
      }
    } catch (_0x163334) {
      console.log(_0x163334);
    }
  }
  async memberDay_redPacketReceivedStatus(_0x260284 = {}) {
    try {
      let _0x1d2af0 = {
          fn: "memberDay_redPacketReceivedStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~redPacketReceivedStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x1516c3
        } = await this.request(_0x1d2af0);
      if (_0x1516c3?.["success"]) {
        for (let _0x5c044c of _0x1516c3?.["obj"] || []) {
          if (_0x5c044c.received) {
            continue;
          }
          let _0x49d4bb = new Date().getHours();
          _0x5c044c.receiveHour == _0x49d4bb && (await this.memberDay_receiveRedPacket(_0x5c044c.receiveHour));
        }
      } else {
        let _0x4e19d7 = _0x1516c3?.["errorMessage"] || (_0x1516c3 ? JSON.stringify(_0x1516c3) : "无返回");
        this.log("会员日查询整点领红包失败: " + _0x4e19d7);
        if (_0x4e19d7?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x4e4706 = {
            notify: true
          };
          this.log("会员日任务风控", _0x4e4706);
        }
      }
    } catch (_0x9a9406) {
      console.log(_0x9a9406);
    }
  }
  async memberDay_receiveRedPacket(_0x2107c9, _0x39b8a4 = {}) {
    try {
      const _0x4c988e = {
        receiveHour: _0x2107c9
      };
      let _0x7ae5bc = {
          fn: "memberDay_receiveRedPacket",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~receiveRedPacket",
          headers: {
            ...this.getSign()
          },
          json: _0x4c988e
        },
        {
          result: _0x4a2d45
        } = await this.request(_0x7ae5bc);
      if (_0x4a2d45?.["success"]) {
        this.log("会员日领取" + _0x2107c9 + "点红包成功");
      } else {
        let _0x1f73ea = _0x4a2d45?.["errorMessage"] || (_0x4a2d45 ? JSON.stringify(_0x4a2d45) : "无返回");
        this.log("会员日领取" + _0x2107c9 + "点红包失败: " + _0x1f73ea);
        if (_0x1f73ea?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x209ed0 = {
            notify: true
          };
          this.log("会员日任务风控", _0x209ed0);
        }
      }
    } catch (_0x2b8bad) {
      console.log(_0x2b8bad);
    }
  }
  async memberDay_redPacketStatus(_0x325952 = {}) {
    try {
      let _0x4871f5 = {
          fn: "memberDay_redPacketStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x192deb
        } = await this.request(_0x4871f5);
      if (_0x192deb?.["success"]) {
        let {
          drewToday: _0x1f1612,
          packetList: _0x464aa8
        } = _0x192deb?.["obj"];
        this.memberDay_redPacket_drewToday = _0x1f1612;
        for (let _0x51fb13 of _0x464aa8) {
          this.memberDay_redPacket_map[_0x51fb13.level] = _0x51fb13.count;
        }
        let _0x27e78f = _0x1e8570;
        for (let _0x38a95d = 1; _0x38a95d < _0x27e78f; _0x38a95d++) {
          let _0x393a65 = this.memberDay_redPacket_map[_0x38a95d];
          while (_0x393a65 >= 2) {
            await this.memberDay_redPacketMerge(_0x38a95d);
            _0x393a65 -= 2;
          }
        }
        let _0x1ac003 = [],
          _0x20975c = 0;
        for (let _0x523391 in this.memberDay_redPacket_map) {
          if (!this.memberDay_redPacket_map[_0x523391]) {
            continue;
          }
          _0x1ac003.push("[" + _0x523391 + "级]X" + this.memberDay_redPacket_map[_0x523391]);
          let _0x42aa7d = parseInt(_0x523391);
          _0x42aa7d < _0x27e78f && (_0x20975c += 1 << _0x42aa7d - 1);
        }
        const _0x747e54 = {
          notify: true
        };
        this.log("会员日合成列表: " + _0x1ac003.join(", "), _0x747e54);
        if (this.memberDay_redPacket_map[_0x27e78f]) {
          const _0x340e5b = {
            notify: true
          };
          this.log("会员日已拥有[" + _0x27e78f + "级]红包X" + this.memberDay_redPacket_map[_0x27e78f], _0x340e5b);
          await this.memberDay_redPacketDraw(_0x27e78f);
        } else {
          let _0x11167b = _0x2da73f - _0x20975c;
          const _0x3f0d06 = {
            notify: true
          };
          this.log("会员日距离[" + _0x27e78f + "级]红包还差: [1级]红包X" + _0x11167b, _0x3f0d06);
        }
      } else {
        let _0x83ea13 = _0x192deb?.["errorMessage"] || (_0x192deb ? JSON.stringify(_0x192deb) : "无返回");
        this.log("查询会员日合成失败: " + _0x83ea13);
        if (_0x83ea13?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x795bcd = {
            notify: true
          };
          this.log("会员日任务风控", _0x795bcd);
        }
      }
    } catch (_0x1f2725) {
      console.log(_0x1f2725);
    }
  }
  async memberDay_redPacketMerge(_0x36f67b, _0xce8e35 = {}) {
    try {
      const _0x2b6222 = {
        level: _0x36f67b,
        num: 2
      };
      let _0x532023 = {
          fn: "memberDay_redPacketMerge",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketMerge",
          headers: {
            ...this.getSign()
          },
          json: _0x2b6222
        },
        {
          result: _0x4176ab
        } = await this.request(_0x532023);
      if (_0x4176ab?.["success"]) {
        this.log("会员日合成: [" + _0x36f67b + "级]红包X2 -> [" + (_0x36f67b + 1) + "级]红包");
        this.memberDay_redPacket_map[_0x36f67b] -= 2;
        if (!this.memberDay_redPacket_map[_0x36f67b + 1]) {
          this.memberDay_redPacket_map[_0x36f67b + 1] = 0;
        }
        this.memberDay_redPacket_map[_0x36f67b + 1]++;
      } else {
        let _0x260561 = _0x4176ab?.["errorMessage"] || (_0x4176ab ? JSON.stringify(_0x4176ab) : "无返回");
        this.log("会员日合成两个[" + _0x36f67b + "级]红包失败: " + _0x260561);
        if (_0x260561?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x2101c8 = {
            notify: true
          };
          this.log("会员日任务风控", _0x2101c8);
        }
      }
    } catch (_0x3978d9) {
      console.log(_0x3978d9);
    }
  }
  async memberDay_redPacketDraw(_0x300ce3, _0x22f900 = {}) {
    try {
      let _0x4ef58a = {
          fn: "memberDay_redPacketDraw",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketDraw",
          headers: {
            ...this.getSign()
          },
          json: {
            level: _0x300ce3.toString()
          }
        },
        {
          result: _0x1a6962
        } = await this.request(_0x4ef58a);
      if (_0x1a6962?.["success"]) {
        let _0x51bcf1 = _0x1a6962?.["obj"]?.["map"](_0x698f7c => _0x698f7c.couponName) || [];
        const _0x99b7a8 = {
          notify: true
        };
        this.log("会员日提取[" + _0x300ce3 + "级]红包: " + (_0x51bcf1.join(", ") || "空气"), _0x99b7a8);
      } else {
        let _0x354f98 = _0x1a6962?.["errorMessage"] || (_0x1a6962 ? JSON.stringify(_0x1a6962) : "无返回");
        this.log("会员日提取[" + _0x300ce3 + "级]红包失败: " + _0x354f98);
        if (_0x354f98?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x291308 = {
            notify: true
          };
          this.log("会员日任务风控", _0x291308);
        }
      }
    } catch (_0x7ea643) {
      console.log(_0x7ea643);
    }
  }
  async jika2024_taskList(_0x54876b = {}) {
    try {
      let _0xc0dfd8 = {
          fn: "jika2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0x2ce8ea,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0xf5c21
        } = await this.request(_0xc0dfd8);
      if (_0xf5c21?.["success"]) {
        let _0xb6c7a6 = _0xf5c21?.["obj"] || [];
        for (let _0x3d9186 of _0xb6c7a6.filter(_0x118406 => _0x118406.status == 1)) {
          if (this.jika_black) {
            return;
          }
          for (let _0x295bd8 = 0; _0x295bd8 < _0x3d9186.canReceiveTokenNum; _0x295bd8++) {
            await this.jika2024_fetchMixTaskReward(_0x3d9186);
          }
        }
        for (let _0x554cf1 of _0xb6c7a6.filter(_0x30d657 => _0x30d657.status == 2)) {
          if (this.jika_black) {
            return;
          }
          switch (_0x554cf1.taskType) {
            case "PLAY_ACTIVITY_GAME":
              {
                this.log("开始玩新年集卡猜成语");
                for (let _0x42ffe4 = 1; _0x42ffe4 <= 10; _0x42ffe4++) {
                  let _0x1a7f83 = Math.floor(Math.random() * 3000) + 1000;
                  await _0xef7c3f.wait(_0x1a7f83);
                  await this.jika2024_chengyu_win(_0x42ffe4);
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
                for (let _0x4a94dd = 0; _0x4a94dd < _0x554cf1.restFinishTime && !this.jika_black; _0x4a94dd++) {
                  await this.jika2024_finishTask(_0x554cf1);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询新年集卡任务失败: " + (_0xf5c21?.["errorMessage"] || (_0xf5c21 ? JSON.stringify(_0xf5c21) : "无返回")));
      }
    } catch (_0x3d873f) {
      console.log(_0x3d873f);
    }
  }
  async jika2024_finishTask(_0x16f292, _0x13da28 = {}) {
    try {
      const _0x2205ef = {
        taskCode: _0x16f292.taskCode
      };
      let _0x8631a2 = {
          fn: "jika2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x2205ef
        },
        {
          result: _0x13fc9b
        } = await this.request(_0x8631a2);
      _0x13fc9b?.["success"] ? (this.log("完成新年集卡任务[" + _0x16f292.taskName + "]成功"), await this.jika2024_fetchMixTaskReward(_0x16f292)) : this.log("完成新年集卡任务[" + _0x16f292.taskName + "]失败: " + (_0x13fc9b?.["errorMessage"] || (_0x13fc9b ? JSON.stringify(_0x13fc9b) : "无返回")));
    } catch (_0x304fcf) {
      console.log(_0x304fcf);
    }
  }
  async jika2024_fetchMixTaskReward(_0x4b4fa0, _0x41d99d = {}) {
    try {
      const _0x59b373 = {
        taskType: _0x4b4fa0.taskType,
        activityCode: _0x2ce8ea,
        channelType: "MINI_PROGRAM"
      };
      let _0x700fed = {
          fn: "jika2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonNoLoginPost/~memberNonactivity~yearEnd2023TaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: _0x59b373
        },
        {
          result: _0x32c481
        } = await this.request(_0x700fed);
      if (_0x32c481?.["success"]) {
        let _0x3dd6c8 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x32c481.obj;
        for (let _0x5518cd of receivedAccountList) {
          _0x3dd6c8.push("" + (_0xae8a54[_0x5518cd.currency] || "[" + _0x5518cd.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x3dd6c8.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("领取任务[" + _0x4b4fa0.taskName + "]奖励: " + _0x3dd6c8.join(", "));
      } else {
        let _0x197ef4 = _0x32c481?.["errorMessage"] || (_0x32c481 ? JSON.stringify(_0x32c481) : "无返回");
        this.log("领取任务[" + _0x4b4fa0.taskName + "]奖励失败: " + _0x197ef4);
        _0x197ef4?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x21d2be) {
      console.log(_0x21d2be);
    }
  }
  async jika2024_getAward(_0x18f8bf, _0x34a930 = {}) {
    try {
      const _0x31adce = {
        cardType: _0x18f8bf
      };
      let _0x4de803 = {
          fn: "jika2024_getAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GardenPartyService~getAward",
          headers: {
            ...this.getSign()
          },
          json: _0x31adce
        },
        {
          result: _0x27f16f
        } = await this.request(_0x4de803);
      if (_0x27f16f?.["success"]) {
        let _0x166e32 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x27f16f.obj;
        for (let _0x5d9ee3 of receivedAccountList) {
          _0x166e32.push("" + (_0xae8a54[_0x5d9ee3.currency] || "[" + _0x5d9ee3.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x166e32.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("逛集市领卡奖励: " + _0x166e32.join(", "));
      } else {
        let _0x338a45 = _0x27f16f?.["errorMessage"] || (_0x27f16f ? JSON.stringify(_0x27f16f) : "无返回");
        this.log("逛集市领卡失败: " + _0x338a45);
        _0x338a45?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x12e068) {
      console.log(_0x12e068);
    }
  }
  async jika2024_chengyu_index(_0x494d25 = {}) {
    try {
      let _0x4a198b = {
          fn: "jika2024_chengyu_index",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~index",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x123b15
        } = await this.request(_0x4a198b);
      if (_0x123b15?.["success"]) {
        if (_0x123b15?.["obj"]?.["bigCardFlag"]) {
          this.log("今天已完成新年集卡猜成语");
        } else {
          this.log("开始玩新年集卡猜成语");
          for (let _0x1dbfb1 = 1; _0x1dbfb1 <= 10; _0x1dbfb1++) {
            let _0x3d00ed = Math.floor(Math.random() * 3000) + 1000;
            await _0xef7c3f.wait(_0x3d00ed);
            await this.jika2024_chengyu_win(_0x1dbfb1);
          }
        }
      } else {
        this.log("查询新年集卡猜成语任务失败: " + (_0x123b15?.["errorMessage"] || (_0x123b15 ? JSON.stringify(_0x123b15) : "无返回")));
      }
    } catch (_0x515666) {
      console.log(_0x515666);
    }
  }
  async jika2024_chengyu_win(_0x20ade9, _0x712602 = {}) {
    try {
      const _0x523d26 = {
        index: _0x20ade9
      };
      let _0x547363 = {
          fn: "jika2024_chengyu_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x523d26
        },
        {
          result: _0x334ea
        } = await this.request(_0x547363);
      if (_0x334ea?.["success"]) {
        let {
          isAward: _0x2970e7,
          currencyDTOList: _0x4a6718
        } = _0x334ea?.["obj"];
        if (_0x2970e7) {
          let _0x1b462e = [];
          for (let _0x58194d of _0x4a6718) {
            _0x1b462e.push("" + (_0xae8a54[_0x58194d.currency] || "[" + _0x58194d.currency + "]"));
          }
          this.log("猜成语第" + _0x20ade9 + "关通关成功: " + _0x1b462e.join(", "));
        } else {
          this.log("猜成语第" + _0x20ade9 + "关通关成功");
        }
      } else {
        let _0x43a45e = _0x334ea?.["errorMessage"] || (_0x334ea ? JSON.stringify(_0x334ea) : "无返回");
        this.log("猜成语第" + _0x20ade9 + "关失败: " + _0x43a45e);
        _0x43a45e?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x467cbe) {
      console.log(_0x467cbe);
    }
  }
  async jika2024_cardStatus(_0x4a07a1 = {}) {
    try {
      let _0x2cb555 = {
          fn: "jika2024_cardStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~cardStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x1cd88f
        } = await this.request(_0x2cb555);
      if (_0x1cd88f?.["success"]) {
        let _0x4641b2 = _0x1cd88f?.["obj"]?.["accountList"] || [];
        if (_0x4641b2?.["length"]) {
          this.cards = _0x4641b2.filter(_0x5646e4 => _0x5646e4.balance > 0);
          this.cards.sort((_0x23dcdf, _0x33281a) => {
            return _0x33281a.balance - _0x23dcdf.balance;
          });
          let _0x10a91a = [];
          for (let _0x2e6af5 of this.cards) {
            let _0x2f6938 = _0xae8a54[_0x2e6af5.currency] || "[" + _0x2e6af5.currency + "]";
            _0x10a91a.push(_0x2f6938 + "X" + _0x2e6af5.balance);
          }
          const _0x2a3aa0 = {
            notify: true
          };
          this.log("年卡: " + _0x10a91a.join(", "), _0x2a3aa0);
          if (this.cards.filter(_0x542b42 => _0x542b42.balance > 0).filter(_0x141e82 => _0x141e82.currency == "COMMON_CARD").length > 0) {
            const _0x5ad6f8 = {
              notify: true
            };
            this.log("拥有万能卡, 请自行合成, 不自动抽奖", _0x5ad6f8);
            return;
          }
          while (this.cards.filter(_0x37af3b => _0x37af3b.balance > 0).length >= 3 && !this.jika_black) {
            await this.jika2024_collectDrawAward();
          }
        } else {
          const _0x2110a5 = {
            notify: true
          };
          this.log("还没有收集到年卡", _0x2110a5);
        }
      } else {
        this.log("查询已收集年卡失败: " + (_0x1cd88f?.["errorMessage"] || (_0x1cd88f ? JSON.stringify(_0x1cd88f) : "无返回")));
      }
    } catch (_0x3ffd6a) {
      console.log(_0x3ffd6a);
    }
  }
  async jika2024_collectDrawAward(_0x2d74bf = {}) {
    try {
      let _0x460c9d = this.cards.filter(_0x2a999b => _0x2a999b.balance > 0).map(_0x51a50a => _0x51a50a.currency);
      if (_0x460c9d.length > 6) {
        _0x460c9d = _0x460c9d.slice(0, 6);
      }
      const _0x41b515 = {
        accountList: _0x460c9d
      };
      let _0x593127 = {
          fn: "jika2024_collectDrawAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~collectDrawAward",
          headers: {
            ...this.getSign()
          },
          json: _0x41b515
        },
        {
          result: _0xdb7e7c
        } = await this.request(_0x593127);
      if (_0xdb7e7c?.["success"]) {
        let {
          productName: _0x13ef4b
        } = _0xdb7e7c?.["obj"];
        const _0x170307 = {
          notify: true
        };
        this.log("使用" + _0x460c9d.length + "种年卡合成: " + _0x13ef4b, _0x170307);
        for (let _0x289f8b of this.cards) {
          _0x460c9d.includes(_0x289f8b.currency) && (_0x289f8b.balance -= 1);
        }
      } else {
        let _0x414caa = _0xdb7e7c?.["errorMessage"] || (_0xdb7e7c ? JSON.stringify(_0xdb7e7c) : "无返回");
        this.log("使用" + _0x460c9d.length + "种年卡合成失败: " + _0x414caa);
        _0x414caa?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x484953) {
      console.log(_0x484953);
    }
  }
  async jika2024_task(_0xf1db14 = {}) {
    await this.jika2024_cardStatus();
  }
  async anniversary2024_weeklyGiftStatus(_0x33cee3 = {}) {
    try {
      let _0x16ea1f = {
          fn: "anniversary2024_weeklyGiftStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~weeklyGiftStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x5e7769
        } = await this.request(_0x16ea1f);
      if (_0x5e7769?.["success"]) {
        let _0x43f0bf = _0x5e7769?.["obj"]?.["weeklyGiftList"] || [];
        for (let _0x49944e of _0x43f0bf) {
          if (!_0x49944e.received) {
            let _0x7c62b9 = new Date(_0x49944e.receiveStartTime),
              _0x5ac70f = new Date(_0x49944e.receiveEndTime),
              _0x1b9cbe = Date.now();
            _0x1b9cbe >= _0x7c62b9.getTime() && _0x1b9cbe <= _0x5ac70f.getTime() && (await this.anniversary2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x3cbad2 = _0x5e7769?.["errorMessage"] || (_0x5e7769 ? JSON.stringify(_0x5e7769) : "无返回");
        this.log("查询周年庆每周领券失败: " + _0x3cbad2);
        (_0x3cbad2?.["includes"]("系统繁忙") || _0x3cbad2?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x26605c) {
      console.log(_0x26605c);
    }
  }
  async anniversary2024_receiveWeeklyGift(_0x23e557 = {}) {
    try {
      let _0x318640 = {
          fn: "anniversary2024_receiveWeeklyGift",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~receiveWeeklyGift",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x4c4c5a
        } = await this.request(_0x318640);
      if (_0x4c4c5a?.["success"]) {
        let _0x2b8cff = _0x4c4c5a?.["obj"]?.["map"](_0x589e6f => _0x589e6f.productName);
        this.log("周年庆每周领券: " + _0x2b8cff.join(", "));
      } else {
        let _0x3b7040 = _0x4c4c5a?.["errorMessage"] || (_0x4c4c5a ? JSON.stringify(_0x4c4c5a) : "无返回");
        this.log("周年庆每周领券失败: " + _0x3b7040);
        (_0x3b7040?.["includes"]("系统繁忙") || _0x3b7040?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x3e5ae1) {
      console.log(_0x3e5ae1);
    }
  }
  async anniversary2024_taskList(_0x195fe0 = {}) {
    try {
      let _0x5ea342 = {
          fn: "anniversary2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0x2a5a00,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x1bb533
        } = await this.request(_0x5ea342);
      if (_0x1bb533?.["success"]) {
        let _0x2e65ac = _0x1bb533?.["obj"] || [];
        for (let _0x31fc43 of _0x2e65ac.filter(_0x1dc4e9 => _0x1dc4e9.status == 1)) {
          if (this.anniversary_black) {
            return;
          }
          for (let _0x46ab38 = 0; _0x46ab38 < _0x31fc43.canReceiveTokenNum; _0x46ab38++) {
            await this.anniversary2024_fetchMixTaskReward(_0x31fc43);
          }
        }
        for (let _0x1aee41 of _0x2e65ac.filter(_0x2f2657 => _0x2f2657.status == 2)) {
          if (this.anniversary_black) {
            return;
          }
          switch (_0x1aee41.taskType) {
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
                for (let _0x352855 = 0; _0x352855 < _0x1aee41.restFinishTime && !this.anniversary_black; _0x352855++) {
                  await this.anniversary2024_finishTask(_0x1aee41);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x1bb533?.["errorMessage"] || (_0x1bb533 ? JSON.stringify(_0x1bb533) : "无返回")));
      }
    } catch (_0x3b7f0d) {
      console.log(_0x3b7f0d);
    }
  }
  async anniversary2024_finishTask(_0xa766e6, _0x15fb1f = {}) {
    try {
      const _0x3f0836 = {
        taskCode: _0xa766e6.taskCode
      };
      let _0x35eba6 = {
          fn: "anniversary2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x3f0836
        },
        {
          result: _0x540856
        } = await this.request(_0x35eba6);
      _0x540856?.["success"] ? (this.log("完成任务[" + _0xa766e6.taskName + "]成功"), await this.anniversary2024_fetchMixTaskReward(_0xa766e6)) : this.log("完成任务[" + _0xa766e6.taskName + "]失败: " + (_0x540856?.["errorMessage"] || (_0x540856 ? JSON.stringify(_0x540856) : "无返回")));
    } catch (_0x5d604b) {
      console.log(_0x5d604b);
    }
  }
  async anniversary2024_fetchMixTaskReward(_0x36b101, _0x1d8d54 = {}) {
    try {
      let _0x53757b = {
          fn: "anniversary2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x36b101.taskType,
            activityCode: _0x2a5a00,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x5cb27a
        } = await this.request(_0x53757b);
      if (_0x5cb27a?.["success"]) {
        let _0x111ec8 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x5cb27a?.["obj"]?.["account"];
        for (let _0x197fb1 of receivedAccountList) {
          _0x111ec8.push("[" + _0x197fb1.currency + "]X" + _0x197fb1.amount);
        }
        turnedAward?.["productName"] && _0x111ec8.push("[优惠券]" + turnedAward?.["productName"]);
        this.log("领取任务[" + _0x36b101.taskName + "]奖励: " + _0x111ec8.join(", "));
      } else {
        let _0x417caa = _0x5cb27a?.["errorMessage"] || (_0x5cb27a ? JSON.stringify(_0x5cb27a) : "无返回");
        this.log("领取任务[" + _0x36b101.taskName + "]奖励失败: " + _0x417caa);
        _0x417caa?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x2f07ea) {
      console.log(_0x2f07ea);
    }
  }
  async anniversary2024_unbox(_0x23973e = {}) {
    try {
      let _0x41593a = {
          fn: "anniversary2024_unbox",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~unbox",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x3405cf
        } = await this.request(_0x41593a);
      if (_0x3405cf?.["success"]) {
        let _0x318448 = [],
          _0x333249 = _0x3405cf?.["obj"]?.["account"]?.["receivedAccountList"] || [];
        for (let _0x368031 of _0x333249) {
          _0x318448.push("[" + _0x368031.currency + "]X" + _0x368031.amount);
        }
        this.log("拆盒子: " + (_0x318448.join(", ") || "空气"));
      } else {
        let _0x117c64 = _0x3405cf?.["errorMessage"] || (_0x3405cf ? JSON.stringify(_0x3405cf) : "无返回");
        this.log("拆盒子失败: " + _0x117c64);
        _0x117c64?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x11f89c) {
      console.log(_0x11f89c);
    }
  }
  async anniversary2024_game_list(_0x3b5aa8 = {}) {
    try {
      let _0x2b57fc = {
          fn: "anniversary2024_game_list",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GameParkService~list",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x5474a2
        } = await this.request(_0x2b57fc);
      if (_0x5474a2?.["success"]) {
        let {
          topicPKInfo: _0x1a8e78,
          searchWordInfo: _0x512d1a,
          happyEliminationInfo: _0x5a0305
        } = _0x5474a2?.["obj"];
        !_0x1a8e78?.["isPassFlag"] && (this.log("开始话题PK赛"), await this.anniversary2024_TopicPk_topicList());
        if (!_0x512d1a?.["isPassFlag"] || !_0x512d1a?.["isFinishDailyFlag"]) {
          this.log("开始找字游戏");
          for (let _0x51aa91 = 1; _0x51aa91 <= 10; _0x51aa91++) {
            let _0x12c6e2 = Math.floor(Math.random() * 2000) + 1000;
            await _0xef7c3f.wait(_0x12c6e2);
            if (!(await this.anniversary2024_SearchWord_win(_0x51aa91))) {
              break;
            }
          }
        }
        if (!_0x5a0305?.["isPassFlag"] || !_0x5a0305?.["isFinishDailyFlag"]) {
          this.log("开始消消乐");
          for (let _0x3b4ea8 = 1; _0x3b4ea8 <= 30; _0x3b4ea8++) {
            let _0x9d6e17 = Math.floor(Math.random() * 2000) + 1000;
            await _0xef7c3f.wait(_0x9d6e17);
            if (!(await this.anniversary2024_HappyElimination_win(_0x3b4ea8))) {
              break;
            }
          }
        }
      } else {
        let _0x1f9025 = _0x5474a2?.["errorMessage"] || (_0x5474a2 ? JSON.stringify(_0x5474a2) : "无返回");
        this.log("查询游戏状态失败: " + _0x1f9025);
        _0x1f9025?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x315d46) {
      console.log(_0x315d46);
    }
  }
  async anniversary2024_SearchWord_win(_0x3bbffb, _0x211508 = {}) {
    let _0x52a1f5 = true;
    try {
      const _0xd5b4ef = {
        index: _0x3bbffb
      };
      let _0x1c40c7 = {
          fn: "anniversary2024_SearchWord_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024SearchWordService~win",
          headers: {
            ...this.getSign()
          },
          json: _0xd5b4ef
        },
        {
          result: _0x3573d8
        } = await this.request(_0x1c40c7);
      if (_0x3573d8?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x3573d8?.["obj"];
        if (currencyDTOList?.["length"]) {
          let _0x270194 = [];
          for (let _0x58e6b2 of currencyDTOList) {
            _0x270194.push("[" + _0x58e6b2.currency + "]X" + _0x58e6b2.amount);
          }
          this.log("找字游戏第" + _0x3bbffb + "关通关成功: " + _0x270194.join(", "));
        } else {
          this.log("找字游戏第" + _0x3bbffb + "关通关成功");
        }
      } else {
        let _0x1ec6ba = _0x3573d8?.["errorMessage"] || (_0x3573d8 ? JSON.stringify(_0x3573d8) : "无返回");
        this.log("找字游戏第" + _0x3bbffb + "关失败: " + _0x1ec6ba);
        _0x1ec6ba?.["includes"]("系统繁忙") && (_0x52a1f5 = false);
      }
    } catch (_0x5a613c) {
      console.log(_0x5a613c);
    } finally {
      return _0x52a1f5;
    }
  }
  async anniversary2024_HappyElimination_win(_0x24ee0c, _0x533508 = {}) {
    let _0x528c09 = true;
    try {
      const _0x38d834 = {
        index: _0x24ee0c
      };
      let _0x4a3f9c = {
          fn: "anniversary2024_HappyElimination_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024HappyEliminationService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x38d834
        },
        {
          result: _0x4702a3
        } = await this.request(_0x4a3f9c);
      if (_0x4702a3?.["success"]) {
        let {
          isAward: _0x353369,
          currencyDTOList: _0x201eb6
        } = _0x4702a3?.["obj"];
        if (_0x353369) {
          let _0x39dc3d = [];
          for (let _0x5700b2 of _0x201eb6) {
            _0x39dc3d.push("[" + _0x5700b2.currency + "]X" + _0x5700b2.amount);
          }
          this.log("消消乐第" + _0x24ee0c + "关通关成功: " + _0x39dc3d.join(", "));
        } else {
          this.log("消消乐第" + _0x24ee0c + "关通关成功");
        }
      } else {
        let _0x1c86bf = _0x4702a3?.["errorMessage"] || (_0x4702a3 ? JSON.stringify(_0x4702a3) : "无返回");
        this.log("消消乐第" + _0x24ee0c + "关失败: " + _0x1c86bf);
        _0x1c86bf?.["includes"]("系统繁忙") && (_0x528c09 = false);
      }
    } catch (_0x407136) {
      console.log(_0x407136);
    } finally {
      return _0x528c09;
    }
  }
  async anniversary2024_TopicPk_topicList(_0x768184 = {}) {
    try {
      let _0x5d3e2b = {
          fn: "anniversary2024_TopicPk_topicList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~topicList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x1839e6
        } = await this.request(_0x5d3e2b);
      if (_0x1839e6?.["success"]) {
        let _0x26a93c = _0x1839e6?.["obj"]?.["topics"] || [],
          _0x1b237f = _0x26a93c?.["filter"](_0x2ba095 => !_0x2ba095?.["choose"])?.[0]?.["index"] || 1;
        for (let _0x1b4ee3 = parseInt(_0x1b237f); _0x1b4ee3 <= 12; _0x1b4ee3++) {
          let _0x4c7a11 = Math.floor(Math.random() * 2000) + 2000;
          await _0xef7c3f.wait(_0x4c7a11);
          if (!(await this.anniversary2024_TopicPk_chooseSide(_0x1b4ee3))) {
            break;
          }
        }
      } else {
        let _0x462a51 = _0x1839e6?.["errorMessage"] || (_0x1839e6 ? JSON.stringify(_0x1839e6) : "无返回");
        this.log("查询话题PK赛记录失败: " + _0x462a51);
        _0x462a51?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x16164b) {
      console.log(_0x16164b);
    }
  }
  async anniversary2024_queryAccountStatus_refresh(_0x4d54ba = {}) {
    try {
      let _0xff5c4f = {
        fn: "anniversary2024_queryAccountStatus_refresh",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        headers: {
          ...this.getSign()
        },
        json: {}
      };
      await this.request(_0xff5c4f);
    } catch (_0x46fcdd) {
      console.log(_0x46fcdd);
    }
  }
  async anniversary2024_TopicPk_chooseSide(_0x751aea, _0x5229cb = {}) {
    let _0x3c08a3 = true;
    try {
      const _0x251278 = {
        index: _0x751aea,
        choose: 0
      };
      let _0x1a4769 = {
          fn: "anniversary2024_TopicPk_chooseSide",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~chooseSide",
          headers: {
            ...this.getSign()
          },
          json: _0x251278
        },
        {
          result: _0x497fae
        } = await this.request(_0x1a4769);
      if (_0x497fae?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x497fae?.["obj"];
        if (currencyDTOList.length) {
          let _0x1dfdd0 = [];
          for (let _0x2a286e of currencyDTOList) {
            _0x1dfdd0.push("[" + _0x2a286e.currency + "]X" + _0x2a286e.amount);
          }
          this.log("话题PK赛第" + _0x751aea + "个话题选择成功: " + _0x1dfdd0.join(", "));
        } else {
          this.log("话题PK赛第" + _0x751aea + "个话题选择成功");
        }
      } else {
        let _0x2e0a6a = _0x497fae?.["errorMessage"] || (_0x497fae ? JSON.stringify(_0x497fae) : "无返回");
        this.log("话题PK赛第" + _0x751aea + "个话题失败: " + _0x2e0a6a);
        _0x2e0a6a?.["includes"]("系统繁忙") && (_0x3c08a3 = false);
      }
    } catch (_0xea2fa1) {
      console.log(_0xea2fa1);
    } finally {
      return _0x3c08a3;
    }
  }
  async anniversary2024_titleList(_0x3e4a99 = {}) {
    try {
      let _0x2854d9 = {
          fn: "anniversary2024_titleList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x191e58
        } = await this.request(_0x2854d9);
      if (_0x191e58?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x191e58?.["obj"],
          _0x95e5a7 = _0xef7c3f.time("yyyy-MM-dd"),
          _0x29673b = guessTitleInfoList.filter(_0x10aa15 => _0x10aa15.gameDate == _0x95e5a7);
        if (_0x29673b.length > 0) {
          let _0x33ad9e = _0x29673b[0];
          if (_0x33ad9e.answerStatus) {
            this.log("今日已回答过竞猜");
          } else {
            let _0x520f9c = _0x414d65?.["answer"]?.[_0x95e5a7];
            _0x414d65?.["answer"]?.[_0x95e5a7] && (await this.anniversary2024_answer(_0x33ad9e, _0x520f9c));
          }
        } else {
          this.log("没有查询到今日竞猜题目");
        }
      } else {
        let _0x59f8fa = _0x191e58?.["errorMessage"] || (_0x191e58 ? JSON.stringify(_0x191e58) : "无返回");
        this.log("查询每日口令竞猜失败: " + _0x59f8fa);
      }
    } catch (_0x32dfee) {
      console.log(_0x32dfee);
    }
  }
  async anniversary2024_titleList_award(_0x409a7e = {}) {
    try {
      let _0x3454c6 = {
          fn: "anniversary2024_titleList_award",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x4603f6
        } = await this.request(_0x3454c6);
      if (_0x4603f6?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x4603f6?.["obj"],
          _0x2d1e01 = _0xef7c3f.time("yyyy-MM-dd"),
          _0x5df8dc = guessTitleInfoList.filter(_0x509ebd => _0x509ebd.gameDate == _0x2d1e01);
        if (_0x5df8dc.length > 0) {
          let _0x558586 = _0x5df8dc[0];
          if (_0x558586.answerStatus) {
            let _0x39702f = [],
              {
                awardList = [],
                puzzleList = []
              } = _0x558586;
            _0x39702f = _0x39702f.concat(awardList.map(_0x47422d => _0x47422d.productName));
            _0x39702f = _0x39702f.concat(puzzleList.map(_0x572a59 => "[" + _0x572a59.currency + "]X" + _0x572a59.amount));
            const _0x2a564d = {
              notify: true
            };
            this.log("口令竞猜奖励: " + (_0x39702f.join(", ") || "空气"), _0x2a564d);
          } else {
            this.log("今日还没回答竞猜");
          }
        } else {
          this.log("没有查询到今日竞猜奖励");
        }
      } else {
        let _0x2adf04 = _0x4603f6?.["errorMessage"] || (_0x4603f6 ? JSON.stringify(_0x4603f6) : "无返回");
        this.log("查询每日口令竞猜奖励失败: " + _0x2adf04);
      }
    } catch (_0x4bab3a) {
      console.log(_0x4bab3a);
    }
  }
  async anniversary2024_answer(_0x53dd48, _0x29dbd8, _0x3dd125 = {}) {
    try {
      const _0x565c8f = {
        period: _0x53dd48.period,
        answerInfo: _0x29dbd8
      };
      let _0x30a2cc = {
          fn: "anniversary2024_answer",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~answer",
          headers: {
            ...this.getSign()
          },
          json: _0x565c8f
        },
        {
          result: _0x1ef547
        } = await this.request(_0x30a2cc);
      if (_0x1ef547?.["success"]) {
        this.log("口令竞猜回答成功");
        await this.anniversary2024_titleList_award();
      } else {
        let _0x377716 = _0x1ef547?.["errorMessage"] || (_0x1ef547 ? JSON.stringify(_0x1ef547) : "无返回");
        this.log("口令竞猜回答失败: " + _0x377716);
      }
    } catch (_0xf0d21) {
      console.log(_0xf0d21);
    }
  }
  async anniversary2024_queryAccountStatus(_0x4b3351 = {}) {
    try {
      let _0x19280e = {
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
          result: _0x4f1a1b
        } = await this.request(_0x19280e);
        if (_0x4f1a1b?.["success"]) {
          let _0x36b290 = _0x4f1a1b?.["obj"]?.["accountCurrencyList"] || [],
            _0x33bbf6 = _0x36b290.filter(_0x22984b => _0x22984b.currency == "UNBOX_CHANCE"),
            _0x321b80 = _0x33bbf6?.[0]?.["balance"] || 0;
          this.log("可以拆" + _0x321b80 + "次盒子");
          while (_0x321b80-- > 0) {
            await this.anniversary2024_unbox();
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x4f1a1b?.["errorMessage"] || (_0x4f1a1b ? JSON.stringify(_0x4f1a1b) : "无返回")));
        }
      }
      {
        let {
          result: _0x261e95
        } = await this.request(_0x19280e);
        if (_0x261e95?.["success"]) {
          let _0x296c53 = _0x261e95?.["obj"]?.["accountCurrencyList"] || [];
          _0x296c53 = _0x296c53.filter(_0x154353 => _0x154353.currency != "UNBOX_CHANCE");
          if (_0x296c53?.["length"]) {
            this.cards = _0x296c53;
            let _0x1c2bad = [];
            for (let _0x1db6a2 of this.cards) {
              _0x1c2bad.push("[" + _0x1db6a2.currency + "]X" + _0x1db6a2.balance);
            }
            const _0x52c586 = {
              notify: true
            };
            this.log("拼图: " + _0x1c2bad.join(", "), _0x52c586);
            this.cards.sort((_0x330f76, _0x40ff59) => {
              return _0x40ff59.balance - _0x330f76.balance;
            });
          } else {
            const _0x3a6040 = {
              notify: true
            };
            this.log("还没有收集到拼图", _0x3a6040);
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x261e95?.["errorMessage"] || (_0x261e95 ? JSON.stringify(_0x261e95) : "无返回")));
        }
      }
    } catch (_0xcf0175) {
      console.log(_0xcf0175);
    }
  }
  async anniversary2024_queryAccountStatus_card(_0x232706 = {}) {
    try {
      let _0x2a1c40 = {
          fn: "anniversary2024_queryAccountStatus_card",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x11d759
        } = await this.request(_0x2a1c40);
      if (_0x11d759?.["success"]) {
        let _0x38d953 = _0x11d759?.["obj"]?.["accountCurrencyList"] || [];
        _0x38d953 = _0x38d953.filter(_0x382956 => _0x382956.currency != "UNBOX_CHANCE");
        if (_0x38d953?.["length"]) {
          this.cards = _0x38d953.sort((_0x2061d6, _0x3f6f19) => {
            return _0x3f6f19.balance - _0x2061d6.balance;
          });
          let _0x3ab60c = [];
          for (let _0x477fa7 of this.cards) {
            _0x3ab60c.push("[" + _0x477fa7.currency + "]X" + _0x477fa7.balance);
          }
          const _0x3a90b2 = {
            notify: true
          };
          this.log("拼图: " + _0x3ab60c.join(", "), _0x3a90b2);
          while (this.cards.filter(_0x43e20e => _0x43e20e.balance > 0).length >= 3 && !this.anniversary_black) {
            await this.anniversary2024_collectDrawAward();
          }
        } else {
          const _0x5f004f = {
            notify: true
          };
          this.log("还没有收集到拼图", _0x5f004f);
        }
      } else {
        this.log("查询已收集拼图失败: " + (_0x11d759?.["errorMessage"] || (_0x11d759 ? JSON.stringify(_0x11d759) : "无返回")));
      }
    } catch (_0x27464d) {
      console.log(_0x27464d);
    }
  }
  async anniversary2024_collectDrawAward(_0x1f1d45 = {}) {
    try {
      this.cards = this.cards.sort((_0x4f789a, _0x10c1c2) => {
        return _0x10c1c2.balance - _0x4f789a.balance;
      });
      let _0x15ac56 = this.cards.filter(_0x1987ee => _0x1987ee.balance > 0).map(_0x165f93 => _0x165f93.currency);
      if (_0x15ac56.length == 9) {
        _0x15ac56 = _0x15ac56.slice(0, 9);
      } else {
        if (_0x15ac56.length >= 7) {
          _0x15ac56 = _0x15ac56.slice(0, 7);
        } else {
          if (_0x15ac56.length >= 5) {
            _0x15ac56 = _0x15ac56.slice(0, 5);
          } else {
            _0x15ac56.length >= 3 && (_0x15ac56 = _0x15ac56.slice(0, 3));
          }
        }
      }
      const _0x21af9c = {
        accountList: _0x15ac56
      };
      let _0x2cedf2 = {
          fn: "anniversary2024_collectDrawAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~collectDrawAward",
          headers: {
            ...this.getSign()
          },
          json: _0x21af9c
        },
        {
          result: _0x3432fe
        } = await this.request(_0x2cedf2);
      if (_0x3432fe?.["success"]) {
        let {
          productName: _0x274831
        } = _0x3432fe?.["obj"];
        const _0x55089d = {
          notify: true
        };
        this.log("使用" + _0x15ac56.length + "种卡合成: " + _0x274831, _0x55089d);
        for (let _0x11f8d5 of this.cards) {
          _0x15ac56.includes(_0x11f8d5.currency) && (_0x11f8d5.balance -= 1);
        }
      } else {
        let _0x469fe3 = _0x3432fe?.["errorMessage"] || (_0x3432fe ? JSON.stringify(_0x3432fe) : "无返回");
        this.log("使用" + _0x15ac56.length + "种年卡合成失败: " + _0x469fe3);
        _0x469fe3?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x2d0b6b) {
      console.log(_0x2d0b6b);
    }
  }
  async dragonBoat2024_weeklyGiftStatus(_0x5a780e = {}) {
    try {
      let _0x7b4727 = {
          fn: "dragonBoat2024_weeklyGiftStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024IndexService~weeklyGiftStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x36f992
        } = await this.request(_0x7b4727);
      if (_0x36f992?.["success"]) {
        let _0xfd1270 = _0x36f992?.["obj"] || [];
        for (let _0x40c5bc of _0xfd1270) {
          if (!_0x40c5bc.received) {
            let _0x48dd20 = new Date(_0x40c5bc.receiveStartTime),
              _0x313b99 = new Date(_0x40c5bc.receiveEndTime),
              _0x47d13d = Date.now();
            _0x47d13d >= _0x48dd20.getTime() && _0x47d13d <= _0x313b99.getTime() && (await this.dragonBoat2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x257bf7 = _0x36f992?.["errorMessage"] || (_0x36f992 ? JSON.stringify(_0x36f992) : "无返回");
        this.log("查询端午每周领券失败: " + _0x257bf7);
        (_0x257bf7?.["includes"]("系统繁忙") || _0x257bf7?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
      }
    } catch (_0x394a29) {
      console.log(_0x394a29);
    }
  }
  async dragonBoat2024_receiveWeeklyGift(_0x566983 = {}) {
    try {
      let _0x4008b3 = _0xef7c3f.randomList(_0x303b16.filter(_0x5f42e4 => _0x5f42e4 != this.userId)),
        _0x41b060 = {
          fn: "dragonBoat2024_receiveWeeklyGift",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024IndexService~receiveWeeklyGift",
          headers: {
            ...this.getSign()
          },
          json: {
            inviteUserId: _0x4008b3,
            moduleType: "welfare_card"
          }
        },
        {
          result: _0x299785
        } = await this.request(_0x41b060);
      if (_0x299785?.["success"]) {
        let _0x6af45f = _0x299785?.["obj"]?.["map"](_0x522a4e => _0x522a4e.productName);
        this.log("端午每周领券: " + _0x6af45f.join(", "));
      } else {
        let _0x458e5a = _0x299785?.["errorMessage"] || (_0x299785 ? JSON.stringify(_0x299785) : "无返回");
        this.log("端午每周领券失败: " + _0x458e5a);
        (_0x458e5a?.["includes"]("系统繁忙") || _0x458e5a?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
      }
    } catch (_0x4160c2) {
      console.log(_0x4160c2);
    }
  }
  async dragonBoat2024_taskList(_0x28c79b = {}) {
    try {
      let _0xa95a11 = {
          fn: "dragonBoat2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0x2470af,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x4aa580
        } = await this.request(_0xa95a11);
      if (_0x4aa580?.["success"]) {
        let _0x46e90d = _0x4aa580?.["obj"] || [];
        for (let _0x1f8244 of _0x46e90d.filter(_0x37bfd1 => _0x37bfd1.status == 1)) {
          if (this.dragonBoat_black) {
            return;
          }
          for (let _0x4a3894 = 0; _0x4a3894 < _0x1f8244.canReceiveTokenNum; _0x4a3894++) {
            await this.dragonBoat2024_fetchMixTaskReward(_0x1f8244);
          }
        }
        for (let _0x5514f1 of _0x46e90d.filter(_0x5ae2c9 => _0x5ae2c9.status == 2)) {
          if (this.dragonBoat_black) {
            return;
          }
          switch (_0x5514f1.taskType) {
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
                for (let _0x1b74c8 = 0; _0x1b74c8 < _0x5514f1.restFinishTime && !this.dragonBoat_black; _0x1b74c8++) {
                  await this.dragonBoat2024_finishTask(_0x5514f1);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x4aa580?.["errorMessage"] || (_0x4aa580 ? JSON.stringify(_0x4aa580) : "无返回")));
      }
    } catch (_0x38a0e7) {
      console.log(_0x38a0e7);
    }
  }
  async dragonBoat2024_finishTask(_0x57b4cb, _0x8c017a = {}) {
    try {
      const _0x5b0d79 = {
        taskCode: _0x57b4cb.taskCode
      };
      let _0x34b1b1 = {
          fn: "dragonBoat2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x5b0d79
        },
        {
          result: _0x227dcd
        } = await this.request(_0x34b1b1);
      _0x227dcd?.["success"] ? (this.log("完成任务[" + _0x57b4cb.taskName + "]成功"), await this.dragonBoat2024_fetchMixTaskReward(_0x57b4cb)) : this.log("完成任务[" + _0x57b4cb.taskName + "]失败: " + (_0x227dcd?.["errorMessage"] || (_0x227dcd ? JSON.stringify(_0x227dcd) : "无返回")));
    } catch (_0x5125e3) {
      console.log(_0x5125e3);
    }
  }
  dragonBoat2024_parse_item(_0x2cb0de) {
    let _0x154dd8 = [];
    for (let _0x3a1284 of _0x2cb0de) {
      let _0xa60541 = _0x3a1284.currency,
        _0xf4947d = _0xecd445[_0xa60541] || "[" + _0xa60541 + "]",
        _0x6e5cea = _0x3a1284.balance || _0x3a1284.amount || 0;
      const _0x3cc546 = {
        currency: _0xa60541,
        type: _0xf4947d,
        amount: _0x6e5cea
      };
      _0x154dd8.push(_0x3cc546);
    }
    return _0x154dd8;
  }
  async dragonBoat2024_fetchMixTaskReward(_0x203cc9, _0x586ff5 = {}) {
    try {
      let _0x431e06 = {
          fn: "dragonBoat2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024TaskService~fetchTasksReward",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x1a5e33
        } = await this.request(_0x431e06);
      if (_0x1a5e33?.["success"]) {
        let _0x36c901 = this.dragonBoat2024_parse_item(_0x1a5e33?.["obj"]?.["receivedAccountList"] || []);
        _0x36c901 = _0x36c901.map(_0x69c35f => _0x69c35f.type + "x" + _0x69c35f.amount);
        this.log("领取任务[" + _0x203cc9.taskName + "]奖励: " + _0x36c901.join(", "));
      } else {
        let _0xe3051e = _0x1a5e33?.["errorMessage"] || (_0x1a5e33 ? JSON.stringify(_0x1a5e33) : "无返回");
        this.log("领取任务[" + _0x203cc9.taskName + "]奖励失败: " + _0xe3051e);
        _0xe3051e?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x3c382c) {
      console.log(_0x3c382c);
    }
  }
  async dragonBoat2024_game_init(_0x327de2 = {}) {
    try {
      let _0x2eff29 = {
          fn: "dragonBoat2024_game_init",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~init",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x22adc8
        } = await this.request(_0x2eff29);
      if (_0x22adc8?.["success"]) {
        let {
            gotPushTimeOfToday: _0x4618cc,
            currentIndex: _0x576693
          } = _0x22adc8?.["obj"],
          _0x3e4b3d = 0;
        if (_0x576693 < 15) {
          _0x3e4b3d = 15;
        } else {
          _0x4618cc < 3 && (_0x3e4b3d = 9);
        }
        if (_0x3e4b3d > 0) {
          this.log("划龙舟, 目标: " + _0x3e4b3d + "关");
          for (let _0x22da0e = _0x576693; _0x22da0e <= _0x3e4b3d; _0x22da0e++) {
            let _0x50c7df = Math.floor(Math.random() * 2000) + 2000;
            await _0xef7c3f.wait(_0x50c7df);
            if (!(await this.dragonBoat2024_boat_win(_0x22da0e))) {
              break;
            }
          }
        }
      } else {
        let _0x468e8c = _0x22adc8?.["errorMessage"] || (_0x22adc8 ? JSON.stringify(_0x22adc8) : "无返回");
        this.log("查询游戏状态失败: " + _0x468e8c);
        _0x468e8c?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
      }
    } catch (_0x31239c) {
      console.log(_0x31239c);
    }
  }
  async dragonBoat2024_boat_win(_0x4a2dcd = 1, _0x5a716d = {}) {
    let _0x5c5eca = true;
    try {
      const _0x1f0f0b = {
        levelIndex: _0x4a2dcd
      };
      let _0x4b873f = {
          fn: "dragonBoat2024_HappyElimination_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024GameService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x1f0f0b
        },
        {
          result: _0x496b22
        } = await this.request(_0x4b873f);
      if (_0x496b22?.["success"]) {
        let _0x880725 = this.dragonBoat2024_parse_item(_0x496b22?.["obj"]?.["currentAwardList"] || []);
        _0x880725 = _0x880725.map(_0x522528 => _0x522528.type + "x" + _0x522528.amount);
        _0x880725.length ? this.log("划龙舟第" + _0x4a2dcd + "关通关成功: " + _0x880725.join(", ")) : this.log("划龙舟第" + _0x4a2dcd + "关通关成功");
      } else {
        let _0x461cfe = _0x496b22?.["errorMessage"] || (_0x496b22 ? JSON.stringify(_0x496b22) : "无返回");
        this.log("划龙舟第" + _0x4a2dcd + "关失败: " + _0x461cfe);
        _0x461cfe?.["includes"]("系统繁忙") && (_0x5c5eca = false);
      }
    } catch (_0x41cc5a) {
      console.log(_0x41cc5a);
    } finally {
      return _0x5c5eca;
    }
  }
  async dragonBoat2024_coinStatus(_0x4cf34f = {}) {
    try {
      let _0x223b12 = {
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
          result: _0x4f75de
        } = await this.request(_0x223b12);
        if (_0x4f75de?.["success"]) {
          let _0x281adf = _0x4f75de?.["obj"]?.["accountCurrencyList"] || [],
            _0x504591 = _0x281adf.filter(_0x300a1b => _0x300a1b.currency == "PUSH_TIMES"),
            _0x4c74d3 = _0x504591?.[0]?.["balance"] || 0;
          this.log("可以推" + _0x4c74d3 + "次金币");
          while (_0x4c74d3-- > 0) {
            await this.dragonBoat2024_pushCoin();
          }
        } else {
          this.log("查询推金币状态失败: " + (_0x4f75de?.["errorMessage"] || (_0x4f75de ? JSON.stringify(_0x4f75de) : "无返回")));
        }
      }
      {
        let {
          result: _0x3d78e7
        } = await this.request(_0x223b12);
        if (_0x3d78e7?.["success"]) {
          let {
              accountCurrencyList = [],
              pushedTimesToday: _0x4779d0,
              pushedTimesTotal: _0x1a38eb
            } = _0x3d78e7?.["obj"],
            _0x3a71c8 = this.dragonBoat2024_parse_item(accountCurrencyList),
            _0x183655 = _0x3a71c8.filter(_0x549095 => _0x549095.currency == "COIN"),
            _0x1be20e = _0x3a71c8.filter(_0x33e532 => _0x33e532.currency == "WELFARE_CARD");
          this.coin = _0x183655?.[0]?.["amount"] || 0;
          this.welfare_card = _0x1be20e?.[0]?.["amount"] || 0;
          const _0x245eaa = {
            notify: true
          };
          this.log("金币: " + this.coin, _0x245eaa);
        } else {
          this.log("查询金币失败: " + (_0x3d78e7?.["errorMessage"] || (_0x3d78e7 ? JSON.stringify(_0x3d78e7) : "无返回")));
        }
      }
    } catch (_0x3a790f) {
      console.log(_0x3a790f);
    }
  }
  async dragonBoat2024_pushCoin(_0x683f75 = {}) {
    try {
      const _0x17a9ca = {
        plateToken: null
      };
      let _0x2e6aa8 = {
          fn: "dragonBoat2024_pushCoin",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~dragonBoat2024CoinService~pushCoin",
          headers: {
            ...this.getSign()
          },
          json: _0x17a9ca
        },
        {
          result: _0x28963e
        } = await this.request(_0x2e6aa8);
      if (_0x28963e?.["success"]) {
        let _0x852c1c = this.dragonBoat2024_parse_item(_0x28963e?.["obj"]?.["receivedAccountList"] || []);
        _0x852c1c = _0x852c1c.map(_0x57a281 => _0x57a281.type + "x" + _0x57a281.amount);
        _0x852c1c.length ? this.log("推金币成功: " + _0x852c1c.join(", ")) : this.log("推金币成功, 没有获得奖品");
      } else {
        this.log("推金币失败: " + (_0x28963e?.["errorMessage"] || (_0x28963e ? JSON.stringify(_0x28963e) : "无返回")));
      }
    } catch (_0x22f2cc) {
      console.log(_0x22f2cc);
    }
  }
  async anniversary2024_task(_0x595ead = {}) {
    await this.anniversary2024_weeklyGiftStatus();
    if (this.anniversary_black) {
      return;
    }
    await this.anniversary2024_game_list();
    await this.anniversary2024_taskList();
    await this.anniversary2024_queryAccountStatus();
  }
  async anniversary2024_draw_task(_0x220690 = {}) {
    await this.anniversary2024_queryAccountStatus_card();
  }
  async dragonBoat2024_task(_0x47df42 = {}) {
    let _0x3d2166 = Date.now();
    if (_0x3d2166 < 1716516000000 || _0x3d2166 > 1718190000000) {
      return;
    }
    await this.dragonBoat2024_weeklyGiftStatus();
    if (this.dragonBoat_black) {
      return;
    }
    await this.dragonBoat2024_game_init();
    await this.dragonBoat2024_taskList();
    await this.dragonBoat2024_coinStatus();
  }
  async memberDay_task(_0x3808a2 = {}) {
    let _0x4948a8 = new Date().getDate();
    _0x4948a8 >= 26 && _0x4948a8 <= 28 && (await this.memberDay_index());
  }
  async userTask(_0x77db33 = {}) {
    _0xef7c3f.log("\n-------------- 账号[" + this.index + "] --------------");
    if (!(await this.refresh_cookie())) {
      return;
    }
    await this.superWelfare_receiveRedPacket();
    await this.automaticSignFetchPackage();
    if (_0xbd2a01 == "true") {
      await this.bee_indexData();
    }
    await this.memberDay_task();
    await this.dragonBoat2024_task();
  }
}
!(async () => {
  if (!(await _0x352a7c())) {
    return;
  }
  await _0x62f3cd();
  _0xef7c3f.read_env(_0x1b782c);
  let _0x4c67d8 = _0xbd2a01 == "true" ? "运行" : "不运行";
  _0xef7c3f.log("");
  const _0x4de5a7 = {
    notify: true
  };
  _0xef7c3f.log("采蜜游戏目前设置为: " + _0x4c67d8, _0x4de5a7);
  _0xef7c3f.log("");
  for (let _0x10373d of _0xef7c3f.userList) {
    await _0x10373d.userTask();
  }
})().catch(_0x55accc => _0xef7c3f.log(_0x55accc)).finally(() => _0xef7c3f.exitNow());
async function _0x352a7c(_0x526798 = 0) {
  let _0x5d720c = false;
  try {
    const _0x173e85 = {
      fn: "auth",
      method: "get",
      url: _0x11a1d2,
      timeout: 20000
    };
    let {
      statusCode: _0x22e977,
      result: _0xa04db3
    } = await _0x35d780.request(_0x173e85);
    if (_0x22e977 != 200) {
      _0x526798++ < MAX_AUTH_RETRY && (_0x5d720c = await _0x352a7c(_0x526798));
      return _0x5d720c;
    }
    if (_0xa04db3?.["code"] == 0) {
      _0xa04db3 = JSON.parse(_0xa04db3.data.file.data);
      if (_0xa04db3?.["commonNotify"] && _0xa04db3.commonNotify.length > 0) {
        const _0x19650f = {
          notify: true
        };
        _0xef7c3f.log(_0xa04db3.commonNotify.join("\n") + "\n", _0x19650f);
      }
      _0xa04db3?.["commonMsg"] && _0xa04db3.commonMsg.length > 0 && _0xef7c3f.log(_0xa04db3.commonMsg.join("\n") + "\n");
      if (_0xa04db3[_0x44c7d7]) {
        let _0x4b8668 = _0xa04db3[_0x44c7d7];
        _0x4b8668.status == 0 ? _0x2324e1 >= _0x4b8668.version ? (_0x5d720c = true, _0xef7c3f.log(_0x4b8668.msg[_0x4b8668.status]), _0xef7c3f.log(_0x4b8668.updateMsg), _0xef7c3f.log("现在运行的脚本版本是：" + _0x2324e1 + "，最新脚本版本：" + _0x4b8668.latestVersion)) : _0xef7c3f.log(_0x4b8668.versionMsg) : _0xef7c3f.log(_0x4b8668.msg[_0x4b8668.status]);
      } else {
        _0xef7c3f.log(_0xa04db3.errorMsg);
      }
    } else {
      _0x526798++ < MAX_AUTH_RETRY && (_0x5d720c = await _0x352a7c(_0x526798));
    }
  } catch (_0x43ebd1) {
    _0xef7c3f.log(_0x43ebd1);
  } finally {
    return _0x5d720c;
  }
}
async function _0x62f3cd() {
  let _0x90023d = false;
  try {
    const _0x52c643 = {
      fn: "auth",
      method: "get",
      url: _0x295471
    };
    let {
      statusCode: _0x302ab8,
      result: _0x4fa03a
    } = await _0x35d780.request(_0x52c643);
    if (_0x302ab8 != 200) {
      return Promise.resolve();
    }
    _0x4fa03a?.["code"] == 0 && (_0x4fa03a = JSON.parse(_0x4fa03a.data.file.data), _0x303b16 = _0x4fa03a?.["inviteUserId"] || _0x303b16, _0x414d65 = _0x4fa03a?.["anniversary_2024"] || _0x414d65);
  } catch (_0x22d91a) {
    _0xef7c3f.log(_0x22d91a);
  } finally {
    return _0x90023d;
  }
}
function _0x454721(_0x5543da) {
  return new class {
    constructor(_0x11c1a9) {
      this.name = _0x11c1a9;
      this.startTime = Date.now();
      const _0x45cba6 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x45cba6);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0xbebac4, _0x145661 = {}) {
      const _0xa7bb2 = {
        console: true
      };
      Object.assign(_0xa7bb2, _0x145661);
      if (_0xa7bb2.time) {
        let _0x48f7cf = _0xa7bb2.fmt || "hh:mm:ss";
        _0xbebac4 = "[" + this.time(_0x48f7cf) + "]" + _0xbebac4;
      }
      if (_0xa7bb2.notify) {
        this.notifyStr.push(_0xbebac4);
      }
      if (_0xa7bb2.console) {
        console.log(_0xbebac4);
      }
    }
    get(_0x666538, _0x5d36c8, _0x4bf792 = "") {
      let _0x22eb21 = _0x4bf792;
      _0x666538?.["hasOwnProperty"](_0x5d36c8) && (_0x22eb21 = _0x666538[_0x5d36c8]);
      return _0x22eb21;
    }
    pop(_0x3f5144, _0x4813d2, _0x480c13 = "") {
      let _0x1ff3b0 = _0x480c13;
      _0x3f5144?.["hasOwnProperty"](_0x4813d2) && (_0x1ff3b0 = _0x3f5144[_0x4813d2], delete _0x3f5144[_0x4813d2]);
      return _0x1ff3b0;
    }
    copy(_0x51593d) {
      return Object.assign({}, _0x51593d);
    }
    read_env(_0x9609b1) {
      let _0x17ebd3 = _0x329ced.map(_0x7289c4 => process.env[_0x7289c4]);
      for (let _0x2396ca of _0x17ebd3.filter(_0x446296 => !!_0x446296)) {
        for (let _0xc99c67 of _0x2396ca.split(_0x1ccdf6).filter(_0x1e2a69 => !!_0x1e2a69)) {
          if (this.userList.includes(_0xc99c67)) {
            continue;
          }
          this.userList.push(new _0x9609b1(_0xc99c67));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x240619 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x329ced.map(_0x4dd88b => "[" + _0x4dd88b + "]").join("或"), _0x240619);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x294230, _0x161fc7, _0x52c2e3 = {}) {
      while (_0x161fc7.idx < _0xef7c3f.userList.length) {
        let _0x353df4 = _0xef7c3f.userList[_0x161fc7.idx++];
        if (!_0x353df4.valid) {
          continue;
        }
        await _0x353df4[_0x294230](_0x52c2e3);
      }
    }
    async threadTask(_0x4e74e2, _0x482fe7) {
      let _0x1d11e0 = [];
      const _0x5d6eaa = {
        idx: 0
      };
      while (_0x482fe7--) {
        _0x1d11e0.push(this.threads(_0x4e74e2, _0x5d6eaa));
      }
      await Promise.all(_0x1d11e0);
    }
    time(_0x422399, _0x4ac2a6 = null) {
      let _0x3ebb18 = _0x4ac2a6 ? new Date(_0x4ac2a6) : new Date(),
        _0x272878 = {
          "M+": _0x3ebb18.getMonth() + 1,
          "d+": _0x3ebb18.getDate(),
          "h+": _0x3ebb18.getHours(),
          "m+": _0x3ebb18.getMinutes(),
          "s+": _0x3ebb18.getSeconds(),
          "q+": Math.floor((_0x3ebb18.getMonth() + 3) / 3),
          S: this.padStr(_0x3ebb18.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x422399) && (_0x422399 = _0x422399.replace(RegExp.$1, (_0x3ebb18.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x30c4c9 in _0x272878) new RegExp("(" + _0x30c4c9 + ")").test(_0x422399) && (_0x422399 = _0x422399.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x272878[_0x30c4c9] : ("00" + _0x272878[_0x30c4c9]).substr(("" + _0x272878[_0x30c4c9]).length)));
      return _0x422399;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x14aff1 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x14aff1.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x81782e, _0x596587, _0x3b6950 = {}) {
      let _0x3dfd2e = _0x3b6950.padding || "0",
        _0x40cc40 = _0x3b6950.mode || "l",
        _0x18ef0b = String(_0x81782e),
        _0x258f37 = _0x596587 > _0x18ef0b.length ? _0x596587 - _0x18ef0b.length : 0,
        _0x46d01b = "";
      for (let _0x19d073 = 0; _0x19d073 < _0x258f37; _0x19d073++) {
        _0x46d01b += _0x3dfd2e;
      }
      _0x40cc40 == "r" ? _0x18ef0b = _0x18ef0b + _0x46d01b : _0x18ef0b = _0x46d01b + _0x18ef0b;
      return _0x18ef0b;
    }
    json2str(_0x270c5a, _0x169529, _0x1b6afd = false) {
      let _0x31a4bd = [];
      for (let _0x20ca34 of Object.keys(_0x270c5a).sort()) {
        let _0x1365e3 = _0x270c5a[_0x20ca34];
        if (_0x1365e3 && _0x1b6afd) {
          _0x1365e3 = encodeURIComponent(_0x1365e3);
        }
        _0x31a4bd.push(_0x20ca34 + "=" + _0x1365e3);
      }
      return _0x31a4bd.join(_0x169529);
    }
    str2json(_0x2ef39c, _0xc16091 = false) {
      let _0x4b6eb0 = {};
      for (let _0x49d9d0 of _0x2ef39c.split("&")) {
        if (!_0x49d9d0) {
          continue;
        }
        let _0x15c319 = _0x49d9d0.indexOf("=");
        if (_0x15c319 == -1) {
          continue;
        }
        let _0x15375a = _0x49d9d0.substr(0, _0x15c319),
          _0x3cc40e = _0x49d9d0.substr(_0x15c319 + 1);
        if (_0xc16091) {
          _0x3cc40e = decodeURIComponent(_0x3cc40e);
        }
        _0x4b6eb0[_0x15375a] = _0x3cc40e;
      }
      return _0x4b6eb0;
    }
    randomPattern(_0x1ded3b, _0x2a15b4 = "abcdef0123456789") {
      let _0x27e3a6 = "";
      for (let _0x4b1d95 of _0x1ded3b) {
        if (_0x4b1d95 == "x") {
          _0x27e3a6 += _0x2a15b4.charAt(Math.floor(Math.random() * _0x2a15b4.length));
        } else {
          _0x4b1d95 == "X" ? _0x27e3a6 += _0x2a15b4.charAt(Math.floor(Math.random() * _0x2a15b4.length)).toUpperCase() : _0x27e3a6 += _0x4b1d95;
        }
      }
      return _0x27e3a6;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x13cc8c, _0x166e9c = "abcdef0123456789") {
      let _0x23d803 = "";
      for (let _0x4e595a = 0; _0x4e595a < _0x13cc8c; _0x4e595a++) {
        _0x23d803 += _0x166e9c.charAt(Math.floor(Math.random() * _0x166e9c.length));
      }
      return _0x23d803;
    }
    randomList(_0x314270) {
      if (!_0x314270.length) {
        return null;
      }
      let _0x41aaf7 = Math.floor(Math.random() * _0x314270.length);
      return _0x314270[_0x41aaf7];
    }
    wait(_0x1498b0) {
      return new Promise(_0xe33f15 => setTimeout(_0xe33f15, _0x1498b0));
    }
    async exitNow() {
      await this.showmsg();
      let _0x14b0e4 = Date.now(),
        _0x546622 = (_0x14b0e4 - this.startTime) / 1000;
      this.log("");
      const _0x291f57 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x546622 + "秒", _0x291f57);
      process.exit(0);
    }
    normalize_time(_0x1afabe, _0x449dc0 = {}) {
      let _0xbd2de1 = _0x449dc0.len || default_timestamp_len;
      _0x1afabe = _0x1afabe.toString();
      let _0x452dfe = _0x1afabe.length;
      while (_0x452dfe < _0xbd2de1) {
        _0x1afabe += "0";
      }
      _0x452dfe > _0xbd2de1 && (_0x1afabe = _0x1afabe.slice(0, 13));
      return parseInt(_0x1afabe);
    }
    async wait_until(_0x1628bc, _0x3678d6 = {}) {
      let _0x37bdd2 = _0x3678d6.logger || this,
        _0xc74be6 = _0x3678d6.interval || default_wait_interval,
        _0x401ff4 = _0x3678d6.limit || default_wait_limit,
        _0x48ef93 = _0x3678d6.ahead || default_wait_ahead;
      if (typeof _0x1628bc == "string" && _0x1628bc.includes(":")) {
        if (_0x1628bc.includes("-")) {
          _0x1628bc = new Date(_0x1628bc).getTime();
        } else {
          let _0x2e58f2 = this.time("yyyy-MM-dd ");
          _0x1628bc = new Date(_0x2e58f2 + _0x1628bc).getTime();
        }
      }
      let _0x59597e = this.normalize_time(_0x1628bc) - _0x48ef93,
        _0x20382e = this.time("hh:mm:ss.S", _0x59597e),
        _0x2f2f96 = Date.now();
      _0x2f2f96 > _0x59597e && (_0x59597e += 86400000);
      let _0x2fa568 = _0x59597e - _0x2f2f96;
      if (_0x2fa568 > _0x401ff4) {
        const _0x3982b9 = {
          time: true
        };
        _0x37bdd2.log("离目标时间[" + _0x20382e + "]大于" + _0x401ff4 / 1000 + "秒,不等待", _0x3982b9);
      } else {
        const _0x5c0f0a = {
          time: true
        };
        _0x37bdd2.log("离目标时间[" + _0x20382e + "]还有" + _0x2fa568 / 1000 + "秒,开始等待", _0x5c0f0a);
        while (_0x2fa568 > 0) {
          let _0x1197f8 = Math.min(_0x2fa568, _0xc74be6);
          await this.wait(_0x1197f8);
          _0x2f2f96 = Date.now();
          _0x2fa568 = _0x59597e - _0x2f2f96;
        }
        const _0x205c1b = {
          time: true
        };
        _0x37bdd2.log("已完成等待", _0x205c1b);
      }
    }
    async wait_gap_interval(_0x38c724, _0x583b18) {
      let _0x2af0ad = Date.now() - _0x38c724;
      _0x2af0ad < _0x583b18 && (await this.wait(_0x583b18 - _0x2af0ad));
    }
  }(_0x5543da);
}