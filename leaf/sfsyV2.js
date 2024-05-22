const _0x5198ee = _0x5663ad("顺丰速运"),
  _0x248af2 = require("got"),
  _0x59b505 = require("crypto-js"),
  {
    CookieJar: _0x134ab3
  } = require("tough-cookie"),
  _0x1e27b0 = "sfsy",
  _0x31e57d = /[\n]/,
  _0x3e4c21 = [_0x1e27b0 + "Url"],
  _0x580923 = process.env[_0x1e27b0 + "Bee"] || "false",
  _0x5892d9 = 8000,
  _0x17cd16 = 3;
const _0x54b7a6 = 2.18,
  _0x13407f = "sfsy",
  _0x35ba2b = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x5f0dda = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x13407f + ".json",
  _0x1fec87 = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  _0x2c40c4 = "wwesldfs29aniversaryvdld29",
  _0xc3a1a0 = "MCS-MIMP-CORE",
  _0x1507ce = "czflqdlhbxcx",
  _0x59e5a4 = "wxwd26mem1",
  _0x4ad663 = {
    BAOZHU_CARD: "[爆竹卡]",
    CHUNLIAN_CARD: "[春联卡]",
    DENGLONG_CARD: "[灯笼卡]",
    HONGBAO_CARD: "[红包卡]",
    YUANXIAO_CARD: "[元宵卡]",
    CHUANGHUA_CARD: "[窗花卡]",
    COMMON_CARD: "[万能卡]"
  };
const _0x5e7d43 = "YEAR_END_2023",
  _0x145ddc = "ANNIVERSARY_2024",
  _0x39fa06 = "MEMBER_DAY",
  _0x2f2b94 = 8,
  _0x18a6eb = 1 << _0x2f2b94 - 1,
  _0x7e8f50 = ["完成连签7天", "参与积分活动", "每月累计寄件", "完成每月任务", "与好友微信分享会员福利", "DAILY_VIP_TASK_TYPE", "去新增一个收件偏好", "用行业模板寄件下单"];
let _0x594120 = [],
  _0x580ed9 = {};
class _0xe2d35f {
  constructor() {
    this.index = _0x5198ee.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x3956a7 = {
      limit: 0
    };
    const _0x42a04b = {
      Connection: "keep-alive"
    };
    const _0x309dfa = {
      retry: _0x3956a7,
      timeout: _0x5892d9,
      followRedirect: false,
      headers: _0x42a04b
    };
    this.got = _0x248af2.extend(_0x309dfa);
  }
  log(_0x588007, _0x33b4b3 = {}) {
    var _0x3debb1 = "",
      _0x1c4ceb = _0x5198ee.userCount.toString().length;
    if (this.index) {
      _0x3debb1 += "账号[" + _0x5198ee.padStr(this.index, _0x1c4ceb) + "]";
    }
    if (this.name) {
      _0x3debb1 += "[" + this.name + "]";
    }
    _0x5198ee.log(_0x3debb1 + _0x588007, _0x33b4b3);
  }
  async request(_0xa026ab) {
    const _0x4b2cab = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x13a445 = ["TimeoutError"];
    var _0x5f3583 = null,
      _0x5620d8 = 0,
      _0x4b986a = _0xa026ab.fn || _0xa026ab.url;
    _0xa026ab.method = _0xa026ab?.["method"]?.["toUpperCase"]() || "GET";
    let _0x399fd5;
    while (_0x5620d8 < _0x17cd16) {
      try {
        _0x5620d8++;
        _0x399fd5 = null;
        let _0x37ea8b = null,
          _0x1ccde3 = _0xa026ab?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x5892d9,
          _0x4aa902 = false;
        await new Promise(async _0xaca1d4 => {
          setTimeout(() => {
            _0x4aa902 = true;
            _0xaca1d4();
          }, _0x1ccde3);
          await this.got(_0xa026ab).then(_0x498714 => {
            _0x5f3583 = _0x498714;
          }, _0x10a75e => {
            _0x37ea8b = _0x10a75e;
            _0x5f3583 = _0x10a75e.response;
            _0x399fd5 = _0x37ea8b?.["code"];
          });
          _0xaca1d4();
        });
        if (_0x4aa902) {
          this.log("[" + _0x4b986a + "]请求超时(" + _0x1ccde3 / 1000 + "秒)，重试第" + _0x5620d8 + "次");
        } else {
          if (_0x13a445.includes(_0x37ea8b?.["name"])) {
            this.log("[" + _0x4b986a + "]请求超时(" + _0x37ea8b.code + ")，重试第" + _0x5620d8 + "次");
          } else {
            if (_0x4b2cab.includes(_0x37ea8b?.["code"])) {
              this.log("[" + _0x4b986a + "]请求错误(" + _0x37ea8b.code + ")，重试第" + _0x5620d8 + "次");
            } else {
              let _0x1fe543 = _0x5f3583?.["statusCode"] || 999,
                _0x57dcab = _0x1fe543 / 100 | 0;
              if (_0x57dcab > 3) {
                this.log("请求[" + _0x4b986a + "]返回[" + _0x1fe543 + "]");
              }
              if (_0x57dcab <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x499466) {
        _0x499466.name == "TimeoutError" ? this.log("[" + _0x4b986a + "]请求超时，重试第" + _0x5620d8 + "次") : this.log("[" + _0x4b986a + "]请求错误(" + _0x499466.message + ")，重试第" + _0x5620d8 + "次");
      }
    }
    if (_0x5f3583 == null) {
      return Promise.resolve({
        statusCode: _0x399fd5 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x41520e,
      headers: _0x3a1938,
      body: _0x112c09
    } = _0x5f3583;
    if (_0x112c09) {
      try {
        _0x112c09 = JSON.parse(_0x112c09);
      } catch {}
    }
    const _0x3ddc88 = {
      statusCode: _0x41520e,
      headers: _0x3a1938,
      result: _0x112c09
    };
    return Promise.resolve(_0x3ddc88);
  }
}
let _0x1aba1c = new _0xe2d35f();
class _0x296c2f extends _0xe2d35f {
  constructor(_0x522b57) {
    super();
    this.refreshUrl = _0x522b57;
    this.cookieJar = new _0x134ab3();
    this.deviceId = _0x5198ee.randomPattern("xxxxxxxx-xxxx-xxxx");
    this.jika_black = false;
    this.anniversary_black = false;
    this.memberDay_black = false;
    this.memberDay_redPacket_drewToday = false;
    this.memberDay_redPacket_map = {};
    const _0x16a4d6 = {
      "User-Agent": _0x1fec87
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x16a4d6
    });
  }
  getSign(_0x23be1e = {}) {
    let _0x107dd4 = Date.now(),
      _0x36a90b = "token=" + _0x2c40c4 + "&timestamp=" + _0x107dd4 + "&sysCode=" + _0xc3a1a0,
      _0x30e627 = _0x59b505.MD5(_0x36a90b).toString();
    const _0x1049fa = {
      platform: "MINI_PROGRAM",
      channel: _0x59e5a4,
      sysCode: _0xc3a1a0,
      timestamp: _0x107dd4,
      signature: _0x30e627
    };
    return _0x1049fa;
  }
  async refresh_cookie(_0x48927a = {}) {
    let _0x15aefa = false;
    try {
      const _0x5a19d7 = {
        fn: "refresh_cookie",
        method: "get",
        url: this.refreshUrl
      };
      let {
        statusCode: _0x1f3a27,
        headers: _0x1b9bef
      } = await this.request(_0x5a19d7);
      if (_0x1f3a27 == 302) {
        for (let _0x46774c of _0x1b9bef["set-cookie"]) {
          if (_0x46774c.includes("_login_mobile_")) {
            let _0x288306 = _0x46774c.match(/_login_mobile_=(\d+);/);
            _0x288306 && (this.name = _0x288306[1]);
            break;
          }
        }
        _0x15aefa = true;
        this.log("登录成功");
      } else {
        this.log("登录失败[" + _0x1f3a27 + "]");
      }
    } catch (_0x52a130) {
      console.log(_0x52a130);
    } finally {
      return _0x15aefa;
    }
  }
  async personalInfo(_0x3283f7 = {}) {
    try {
      let _0x47e75d = {
          fn: "personalInfo",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/member/personalInfo",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x827515
        } = await this.request(_0x47e75d);
      if (_0x827515?.["success"]) {
        const _0x41ac64 = {
          notify: true
        };
        this.log("积分: " + _0x827515.obj.availablePoints, _0x41ac64);
      } else {
        this.log("查询账号信息失败: " + (_0x827515?.["errorMessage"] || (_0x827515 ? JSON.stringify(_0x827515) : "无返回")));
      }
    } catch (_0x52f0a0) {
      console.log(_0x52f0a0);
    }
  }
  async queryUserInfo(_0x85eb6f = {}) {
    try {
      let _0x4b11b9 = {
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
          result: _0x54fcfc
        } = await this.request(_0x4b11b9);
      if (_0x54fcfc?.["success"]) {
        let {
            usablePoint: _0x2e20a7,
            cycleAdd: _0x3724a2,
            cycleSub: _0x421da5,
            leavePoint: _0x2a18ff,
            pointClearCycle: _0x4174c0
          } = _0x54fcfc.obj,
          _0x30e15a = "积分: " + _0x2e20a7,
          _0x86827f = _0x2a18ff - _0x421da5,
          _0x1fbf5f = new Date(_0x4174c0 + " 00:00:00");
        _0x1fbf5f.setFullYear(_0x1fbf5f.getFullYear() + 1);
        let _0x391dff = _0x1fbf5f.getTime();
        if (_0x86827f > 0 && _0x391dff > Date.now()) {
          let _0x346160 = _0x5198ee.time("yyyy-MM-dd", _0x391dff);
          _0x30e15a += ", 有" + _0x86827f + "积分将在" + _0x346160 + "过期";
        }
        const _0x27f206 = {
          notify: true
        };
        this.log(_0x30e15a, _0x27f206);
      } else {
        this.log("查询账号信息失败: " + (_0x54fcfc?.["errorMessage"] || (_0x54fcfc ? JSON.stringify(_0x54fcfc) : "无返回")));
      }
    } catch (_0x32146a) {
      console.log(_0x32146a);
    }
  }
  async automaticSignFetchPackage(_0x2176c5 = {}) {
    try {
      let _0x118c34 = {
          fn: "automaticSignFetchPackage",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage",
          headers: {
            ...this.getSign()
          },
          json: {
            comeFrom: _0x5198ee.get(_0x2176c5, "comeFrom", "vioin"),
            channelFrom: _0x5198ee.get(_0x2176c5, "channelFrom", "SFAPP")
          }
        },
        {
          result: _0x36a391
        } = await this.request(_0x118c34);
      if (_0x36a391?.["success"]) {
        _0x36a391?.["obj"]?.["hasFinishSign"] ? this.log("今天已签到") : _0x36a391?.["obj"]?.["integralTaskSignPackageVOList"]?.["length"] && this.log("签到获得: " + _0x36a391?.["obj"]?.["integralTaskSignPackageVOList"]?.["map"](_0x3f9915 => _0x3f9915.packetName)?.["join"](", "));
        await this.queryPointTaskAndSignFromES();
        const _0x3b2fe9 = {
          channelType: 3
        };
        await this.queryPointTaskAndSignFromES(_0x3b2fe9);
        await this.queryUserInfo();
      } else {
        this.log("查询签到失败: " + (_0x36a391?.["errorMessage"] || (_0x36a391 ? JSON.stringify(_0x36a391) : "无返回")));
      }
    } catch (_0x107996) {
      console.log(_0x107996);
    }
  }
  async queryPointTaskAndSignFromES(_0x36aa30 = {}) {
    try {
      let _0x59f2b4 = {
          fn: "queryPointTaskAndSignFromES",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES",
          headers: {
            ...this.getSign()
          },
          json: {
            deviceId: this.deviceId,
            channelType: String(_0x5198ee.get(_0x36aa30, "channelType", 1))
          }
        },
        {
          result: _0x4aa755
        } = await this.request(_0x59f2b4);
      if (_0x4aa755?.["success"]) {
        for (let _0x48e13e of _0x4aa755.obj.taskTitleLevels) {
          switch (_0x48e13e.status) {
            case 2:
              if (_0x7e8f50.includes(_0x48e13e.title)) {
                break;
              }
              await this.finishTask(_0x48e13e);
            case 1:
              await this.fetchIntegral(_0x48e13e);
              break;
            case 3:
              break;
            default:
              this.log("任务[" + _0x48e13e.title + "] -- 未知状态[" + _0x48e13e.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x4aa755?.["errorMessage"] || (_0x4aa755 ? JSON.stringify(_0x4aa755) : "无返回")));
      }
    } catch (_0x56c4f5) {
      console.log(_0x56c4f5);
    }
  }
  async finishTask(_0x2894da, _0x50f4d0 = {}) {
    try {
      const _0x307a9e = {
        taskCode: _0x2894da.taskCode
      };
      let _0x7a8a05 = {
          fn: "finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x307a9e
        },
        {
          result: _0x3674f3
        } = await this.request(_0x7a8a05);
      _0x3674f3?.["success"] ? this.log("完成任务[" + _0x2894da.title + "]成功") : this.log("完成任务[" + _0x2894da.title + "]失败: " + (_0x3674f3?.["errorMessage"] || (_0x3674f3 ? JSON.stringify(_0x3674f3) : "无返回")));
    } catch (_0xe0c242) {
      console.log(_0xe0c242);
    }
  }
  async fetchIntegral(_0x560bc5, _0x243aea = {}) {
    try {
      let _0x2bcce1 = {
          fn: "fetchIntegral",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral",
          headers: {
            ...this.getSign()
          },
          json: {
            strategyId: _0x560bc5.strategyId,
            taskId: _0x560bc5.taskId,
            taskCode: _0x560bc5.taskCode,
            deviceId: this.deviceId
          }
        },
        {
          result: _0x568b22
        } = await this.request(_0x2bcce1);
      _0x568b22?.["success"] ? this.log("领取任务[" + _0x560bc5.title + "]奖励: " + _0x568b22.obj.point + "积分") : this.log("领取任务[" + _0x560bc5.title + "]奖励失败: " + (_0x568b22?.["errorMessage"] || (_0x568b22 ? JSON.stringify(_0x568b22) : "无返回")));
    } catch (_0x64a673) {
      console.log(_0x64a673);
    }
  }
  async queryPointTaskAndSign(_0x3d7269 = {}) {
    try {
      let _0x330b86 = {
          fn: "queryPointTaskAndSign",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/queryPointTaskAndSign",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x5198ee.get(_0x3d7269, "channel", "SFAPP"),
            pageType: _0x5198ee.get(_0x3d7269, "pageType", "APP_MINE_TASK")
          }
        },
        {
          result: _0x1dbc49
        } = await this.request(_0x330b86);
      if (_0x1dbc49?.["success"]) {
        for (let _0x130d42 of _0x1dbc49?.["obj"]?.["taskTitleLevels"] || []) {
          if (_0x7e8f50.includes(_0x130d42.title)) {
            continue;
          }
          await this.scanPageToRecord(_0x130d42);
          await this.fetchPoint(_0x130d42);
        }
      } else {
        this.log("查询旧版任务失败: " + (_0x1dbc49?.["errorMessage"] || (_0x1dbc49 ? JSON.stringify(_0x1dbc49) : "无返回")));
      }
    } catch (_0x5c7c21) {
      console.log(_0x5c7c21);
    }
  }
  async scanPageToRecord(_0x57cde0, _0x42b8ad = {}) {
    try {
      let _0x31a9fd = {
          fn: "scanPageToRecord",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/scanPageToRecord",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x5198ee.get(_0x42b8ad, "channel", "SFAPP"),
            pageType: _0x57cde0.pageType
          }
        },
        {
          result: _0x15a746
        } = await this.request(_0x31a9fd);
      _0x15a746?.["success"] ? this.log("完成任务[" + _0x57cde0.title + "]成功") : this.log("完成任务[" + _0x57cde0.title + "]失败: " + (_0x15a746?.["errorMessage"] || (_0x15a746 ? JSON.stringify(_0x15a746) : "无返回")));
    } catch (_0xcffd2a) {
      console.log(_0xcffd2a);
    }
  }
  async fetchPoint(_0xd7225f, _0x1ae42c = {}) {
    try {
      let _0x1e99a0 = {
          fn: "fetchPoint",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/fetchPoint",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x5198ee.get(_0x1ae42c, "channel", "SFAPP"),
            pageType: _0xd7225f.pageType,
            deviceId: this.deviceId
          }
        },
        {
          result: _0xc3058e
        } = await this.request(_0x1e99a0);
      _0xc3058e?.["success"] ? this.log("领取任务[" + _0xd7225f.title + "]奖励成功") : this.log("领取任务[" + _0xd7225f.title + "]奖励失败: " + (_0xc3058e?.["errorMessage"] || (_0xc3058e ? JSON.stringify(_0xc3058e) : "无返回")));
    } catch (_0x28d5ce) {
      console.log(_0x28d5ce);
    }
  }
  async personalInfoNew(_0x593fc6 = {}) {
    try {
      let _0x587d39 = {
          fn: "personalInfoNew",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~personalInfoNew",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x55e9f4
        } = await this.request(_0x587d39);
      if (_0x55e9f4?.["success"]) {
        this.userId = _0x55e9f4.obj.userId;
        const _0x275483 = {
          notify: true
        };
        this.log("积分: " + _0x55e9f4.obj.availablePoints, _0x275483);
      } else {
        this.log("查询账号积分失败: " + (_0x55e9f4?.["errorMessage"] || (_0x55e9f4 ? JSON.stringify(_0x55e9f4) : "无返回")));
      }
    } catch (_0x4c0663) {
      console.log(_0x4c0663);
    }
  }
  async bee_indexData(_0x29d224 = {}) {
    try {
      let _0x5d0fef = _0x5198ee.randomList(_0x594120.filter(_0x46fa8f => _0x46fa8f != this.userId));
      const _0x2c2fb5 = {
        inviteUserId: _0x5d0fef
      };
      let _0x2dd406 = {
        fn: "bee_indexData",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~indexData",
        headers: {
          ...this.getSign()
        },
        json: _0x2c2fb5
      };
      {
        let {
          result: _0x301a29
        } = await this.request(_0x5198ee.copy(_0x2dd406));
        if (_0x301a29?.["success"]) {
          _0x301a29?.["obj"]?.["friendAwards"]?.["length"] && this.log("获得奖励: " + _0x301a29.obj.friendAwards.map(_0x14f6a6 => _0x14f6a6.name).join(","));
          let _0x56e6ec = _0x301a29?.["obj"]?.["gameNum"] || 0;
          this.log("可以采蜜冒险" + _0x56e6ec + "次");
          while (_0x56e6ec-- > 0) {
            await this.bee_gameReport();
          }
          await this.bee_taskDetail();
        } else {
          const _0x47191e = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x301a29?.["errorMessage"] || (_0x301a29 ? JSON.stringify(_0x301a29) : "无返回")), _0x47191e);
          return;
        }
      }
      {
        let {
          result: _0x6b4fbd
        } = await this.request(_0x5198ee.copy(_0x2dd406));
        if (_0x6b4fbd?.["success"]) {
          for (let _0x21c730 of _0x6b4fbd?.["obj"]?.["taskDetail"] || []) {
            await this.bee_receiveHoney(_0x21c730);
          }
        } else {
          const _0x5b163c = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x6b4fbd?.["errorMessage"] || (_0x6b4fbd ? JSON.stringify(_0x6b4fbd) : "无返回")), _0x5b163c);
          return;
        }
      }
      {
        let {
          result: _0x22bdaf
        } = await this.request(_0x5198ee.copy(_0x2dd406));
        if (_0x22bdaf?.["success"]) {
          const _0xed01e3 = {
            notify: true
          };
          this.log("采蜜游戏丰蜜: " + (_0x22bdaf?.["obj"]?.["usableHoney"] || 0), _0xed01e3);
        } else {
          const _0x855e8 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x22bdaf?.["errorMessage"] || (_0x22bdaf ? JSON.stringify(_0x22bdaf) : "无返回")), _0x855e8);
          return;
        }
      }
    } catch (_0x13faa4) {
      console.log(_0x13faa4);
    }
  }
  async bee_receiveHoney(_0x301c43, _0xce6881 = {}) {
    try {
      const _0x204258 = {
        taskType: _0x301c43.type
      };
      let _0x12fc67 = {
          fn: "bee_receiveHoney",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~receiveHoney",
          headers: {
            ...this.getSign()
          },
          json: _0x204258
        },
        {
          result: _0x14708b
        } = await this.request(_0x12fc67);
      _0x14708b?.["success"] ? this.log("领取[" + _0x301c43.type + "]奖励获得: " + _0x301c43.value + "丰蜜") : this.log("领取[" + _0x301c43.type + "]奖励失败: " + (_0x14708b?.["errorMessage"] || (_0x14708b ? JSON.stringify(_0x14708b) : "无返回")));
    } catch (_0x2574cc) {
      console.log(_0x2574cc);
    }
  }
  async bee_gameReport(_0x338920 = {}) {
    try {
      let _0x376cdb = 20;
      const _0x548815 = {
        gatherHoney: _0x376cdb
      };
      let _0x8d836c = {
          fn: "bee_gameReport",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeGameService~gameReport",
          headers: {
            ...this.getSign()
          },
          json: _0x548815
        },
        {
          result: _0x2416db
        } = await this.request(_0x8d836c);
      _0x2416db?.["success"] ? this.log("采蜜冒险获得" + _0x376cdb + "丰蜜") : this.log("采蜜冒险失败: " + (_0x2416db?.["errorMessage"] || (_0x2416db ? JSON.stringify(_0x2416db) : "无返回")));
    } catch (_0x36715a) {
      console.log(_0x36715a);
    }
  }
  async bee_taskDetail(_0x544faa = {}) {
    try {
      let _0x133d64 = {
          fn: "bee_taskDetail",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~taskDetail",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x807065
        } = await this.request(_0x133d64);
      if (_0x807065?.["success"]) {
        for (let _0x177ef5 of _0x807065.obj.list) {
          if (!_0x177ef5.taskCode) {
            continue;
          }
          switch (_0x177ef5.status) {
            case 2:
              if (_0x7e8f50.includes(_0x177ef5.taskType)) {
                break;
              }
              await this.bee_finishTask(_0x177ef5);
            case 1:
            case 3:
              break;
            default:
              this.log("任务[" + _0x177ef5.title + "] -- 未知状态[" + _0x177ef5.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x807065?.["errorMessage"] || (_0x807065 ? JSON.stringify(_0x807065) : "无返回")));
      }
    } catch (_0x585f2e) {
      console.log(_0x585f2e);
    }
  }
  async bee_finishTask(_0x1d077b, _0x8ca3ba = {}) {
    try {
      const _0x4f220a = {
        taskCode: _0x1d077b.taskCode
      };
      let _0x31e44a = {
          fn: "bee_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x4f220a
        },
        {
          result: _0x206182
        } = await this.request(_0x31e44a);
      _0x206182?.["success"] ? this.log("完成采蜜任务[" + _0x1d077b.taskType + "]成功") : this.log("完成采蜜任务[" + _0x1d077b.taskType + "]失败: " + (_0x206182?.["errorMessage"] || (_0x206182 ? JSON.stringify(_0x206182) : "无返回")));
    } catch (_0x55e7e1) {
      console.log(_0x55e7e1);
    }
  }
  async superWelfare_receiveRedPacket(_0x271f6e = {}) {
    try {
      const _0x48c77e = {
        channel: _0x1507ce
      };
      let _0x293e9a = {
          fn: "superWelfare_receiveRedPacket",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberActLengthy~redPacketActivityService~superWelfare~receiveRedPacket",
          headers: {
            ...this.getSign()
          },
          json: _0x48c77e
        },
        {
          result: _0x5ffe86
        } = await this.request(_0x293e9a);
      if (_0x5ffe86?.["success"]) {
        let _0x34eeb8 = _0x5ffe86?.["obj"]?.["giftList"];
        if (_0x5ffe86?.["obj"]?.["extraGiftList"]?.["length"]) {
          _0x34eeb8 = _0x34eeb8.concat(_0x5ffe86.obj.extraGiftList);
        }
        let _0x2d136e = _0x34eeb8?.["map"](_0x559847 => _0x559847.giftName)?.["join"](", ") || "",
          _0x13c6b2 = _0x5ffe86?.["obj"]?.["receiveStatus"] == 1 ? "领取成功" : "已领取过";
        const _0x2f4da3 = {
          notify: true
        };
        this.log("超值福利签到[" + _0x13c6b2 + "]: " + _0x2d136e, _0x2f4da3);
      } else {
        this.log("超值福利签到失败: " + (_0x5ffe86?.["errorMessage"] || (_0x5ffe86 ? JSON.stringify(_0x5ffe86) : "无返回")));
      }
    } catch (_0x4ed586) {
      console.log(_0x4ed586);
    }
  }
  async jika2024_taskList(_0x1b4912 = {}) {
    try {
      let _0x270731 = {
          fn: "jika2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0x5e7d43,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x51c3f3
        } = await this.request(_0x270731);
      if (_0x51c3f3?.["success"]) {
        let _0x144c3b = _0x51c3f3?.["obj"] || [];
        for (let _0x5e4e3a of _0x144c3b.filter(_0x1852c0 => _0x1852c0.status == 1)) {
          if (this.jika_black) {
            return;
          }
          for (let _0x3018c4 = 0; _0x3018c4 < _0x5e4e3a.canReceiveTokenNum; _0x3018c4++) {
            await this.jika2024_fetchMixTaskReward(_0x5e4e3a);
          }
        }
        for (let _0x2a878d of _0x144c3b.filter(_0x5b0b64 => _0x5b0b64.status == 2)) {
          if (this.jika_black) {
            return;
          }
          switch (_0x2a878d.taskType) {
            case "PLAY_ACTIVITY_GAME":
              {
                this.log("开始玩新年集卡猜成语");
                for (let _0x384751 = 1; _0x384751 <= 10; _0x384751++) {
                  let _0x35b6cc = Math.floor(Math.random() * 3000) + 1000;
                  await _0x5198ee.wait(_0x35b6cc);
                  await this.jika2024_chengyu_win(_0x384751);
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
                for (let _0x11bf2f = 0; _0x11bf2f < _0x2a878d.restFinishTime && !this.jika_black; _0x11bf2f++) {
                  await this.jika2024_finishTask(_0x2a878d);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询新年集卡任务失败: " + (_0x51c3f3?.["errorMessage"] || (_0x51c3f3 ? JSON.stringify(_0x51c3f3) : "无返回")));
      }
    } catch (_0x3fb63f) {
      console.log(_0x3fb63f);
    }
  }
  async jika2024_finishTask(_0x2c2fb0, _0x739c11 = {}) {
    try {
      const _0x3bba32 = {
        taskCode: _0x2c2fb0.taskCode
      };
      let _0x22dd15 = {
          fn: "jika2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x3bba32
        },
        {
          result: _0x35e7c1
        } = await this.request(_0x22dd15);
      _0x35e7c1?.["success"] ? (this.log("完成新年集卡任务[" + _0x2c2fb0.taskName + "]成功"), await this.jika2024_fetchMixTaskReward(_0x2c2fb0)) : this.log("完成新年集卡任务[" + _0x2c2fb0.taskName + "]失败: " + (_0x35e7c1?.["errorMessage"] || (_0x35e7c1 ? JSON.stringify(_0x35e7c1) : "无返回")));
    } catch (_0x3820a5) {
      console.log(_0x3820a5);
    }
  }
  async jika2024_fetchMixTaskReward(_0x1ba688, _0x49d6d6 = {}) {
    try {
      let _0xe69ebb = {
          fn: "jika2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonNoLoginPost/~memberNonactivity~yearEnd2023TaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x1ba688.taskType,
            activityCode: _0x5e7d43,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x49f5c2
        } = await this.request(_0xe69ebb);
      if (_0x49f5c2?.["success"]) {
        let _0x366dc7 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x49f5c2.obj;
        for (let _0x334867 of receivedAccountList) {
          _0x366dc7.push("" + (_0x4ad663[_0x334867.currency] || "[" + _0x334867.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x366dc7.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("领取任务[" + _0x1ba688.taskName + "]奖励: " + _0x366dc7.join(", "));
      } else {
        let _0x545a80 = _0x49f5c2?.["errorMessage"] || (_0x49f5c2 ? JSON.stringify(_0x49f5c2) : "无返回");
        this.log("领取任务[" + _0x1ba688.taskName + "]奖励失败: " + _0x545a80);
        _0x545a80?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x58e4f0) {
      console.log(_0x58e4f0);
    }
  }
  async jika2024_getAward(_0x197de7, _0x38963b = {}) {
    try {
      const _0x5484e7 = {
        cardType: _0x197de7
      };
      let _0xfdd8cf = {
          fn: "jika2024_getAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GardenPartyService~getAward",
          headers: {
            ...this.getSign()
          },
          json: _0x5484e7
        },
        {
          result: _0x45ce58
        } = await this.request(_0xfdd8cf);
      if (_0x45ce58?.["success"]) {
        let _0x40bcee = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x45ce58.obj;
        for (let _0x70dc14 of receivedAccountList) {
          _0x40bcee.push("" + (_0x4ad663[_0x70dc14.currency] || "[" + _0x70dc14.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x40bcee.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("逛集市领卡奖励: " + _0x40bcee.join(", "));
      } else {
        let _0x494936 = _0x45ce58?.["errorMessage"] || (_0x45ce58 ? JSON.stringify(_0x45ce58) : "无返回");
        this.log("逛集市领卡失败: " + _0x494936);
        _0x494936?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x1b2c22) {
      console.log(_0x1b2c22);
    }
  }
  async jika2024_chengyu_index(_0x20ee3a = {}) {
    try {
      let _0x67ec6a = {
          fn: "jika2024_chengyu_index",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~index",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x2e856d
        } = await this.request(_0x67ec6a);
      if (_0x2e856d?.["success"]) {
        if (_0x2e856d?.["obj"]?.["bigCardFlag"]) {
          this.log("今天已完成新年集卡猜成语");
        } else {
          this.log("开始玩新年集卡猜成语");
          for (let _0x3d155c = 1; _0x3d155c <= 10; _0x3d155c++) {
            let _0x4dcd82 = Math.floor(Math.random() * 3000) + 1000;
            await _0x5198ee.wait(_0x4dcd82);
            await this.jika2024_chengyu_win(_0x3d155c);
          }
        }
      } else {
        this.log("查询新年集卡猜成语任务失败: " + (_0x2e856d?.["errorMessage"] || (_0x2e856d ? JSON.stringify(_0x2e856d) : "无返回")));
      }
    } catch (_0x5d407c) {
      console.log(_0x5d407c);
    }
  }
  async jika2024_chengyu_win(_0x1a6ac9, _0x3eb61f = {}) {
    try {
      const _0xc6ad33 = {
        index: _0x1a6ac9
      };
      let _0x4d827e = {
          fn: "jika2024_chengyu_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~win",
          headers: {
            ...this.getSign()
          },
          json: _0xc6ad33
        },
        {
          result: _0x421199
        } = await this.request(_0x4d827e);
      if (_0x421199?.["success"]) {
        let {
          isAward: _0x15d13a,
          currencyDTOList: _0x5055a7
        } = _0x421199?.["obj"];
        if (_0x15d13a) {
          let _0x1503fb = [];
          for (let _0x31b13b of _0x5055a7) {
            _0x1503fb.push("" + (_0x4ad663[_0x31b13b.currency] || "[" + _0x31b13b.currency + "]"));
          }
          this.log("猜成语第" + _0x1a6ac9 + "关通关成功: " + _0x1503fb.join(", "));
        } else {
          this.log("猜成语第" + _0x1a6ac9 + "关通关成功");
        }
      } else {
        let _0x2f2ad6 = _0x421199?.["errorMessage"] || (_0x421199 ? JSON.stringify(_0x421199) : "无返回");
        this.log("猜成语第" + _0x1a6ac9 + "关失败: " + _0x2f2ad6);
        _0x2f2ad6?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x31347f) {
      console.log(_0x31347f);
    }
  }
  async jika2024_cardStatus(_0x6565ea = {}) {
    try {
      let _0x33067d = {
          fn: "jika2024_cardStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~cardStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x2fd97f
        } = await this.request(_0x33067d);
      if (_0x2fd97f?.["success"]) {
        let _0x47439f = _0x2fd97f?.["obj"]?.["accountList"] || [];
        if (_0x47439f?.["length"]) {
          this.cards = _0x47439f.filter(_0x1132a8 => _0x1132a8.balance > 0);
          this.cards.sort((_0x130828, _0xa1b09d) => {
            return _0xa1b09d.balance - _0x130828.balance;
          });
          let _0xf3f830 = [];
          for (let _0x446650 of this.cards) {
            let _0x5b6e15 = _0x4ad663[_0x446650.currency] || "[" + _0x446650.currency + "]";
            _0xf3f830.push(_0x5b6e15 + "X" + _0x446650.balance);
          }
          const _0x5053ee = {
            notify: true
          };
          this.log("年卡: " + _0xf3f830.join(", "), _0x5053ee);
          if (this.cards.filter(_0x488f0e => _0x488f0e.balance > 0).filter(_0x53a01c => _0x53a01c.currency == "COMMON_CARD").length > 0) {
            const _0x29bed6 = {
              notify: true
            };
            this.log("拥有万能卡, 请自行合成, 不自动抽奖", _0x29bed6);
            return;
          }
          while (this.cards.filter(_0x1d845b => _0x1d845b.balance > 0).length >= 3 && !this.jika_black) {
            await this.jika2024_collectDrawAward();
          }
        } else {
          const _0x49dba8 = {
            notify: true
          };
          this.log("还没有收集到年卡", _0x49dba8);
        }
      } else {
        this.log("查询已收集年卡失败: " + (_0x2fd97f?.["errorMessage"] || (_0x2fd97f ? JSON.stringify(_0x2fd97f) : "无返回")));
      }
    } catch (_0x37bf09) {
      console.log(_0x37bf09);
    }
  }
  async jika2024_collectDrawAward(_0x2cd966 = {}) {
    try {
      let _0x4bfcc9 = this.cards.filter(_0x4a2233 => _0x4a2233.balance > 0).map(_0x53c956 => _0x53c956.currency);
      if (_0x4bfcc9.length > 6) {
        _0x4bfcc9 = _0x4bfcc9.slice(0, 6);
      }
      const _0x68b576 = {
        accountList: _0x4bfcc9
      };
      let _0x4b768d = {
          fn: "jika2024_collectDrawAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~collectDrawAward",
          headers: {
            ...this.getSign()
          },
          json: _0x68b576
        },
        {
          result: _0xb0c25c
        } = await this.request(_0x4b768d);
      if (_0xb0c25c?.["success"]) {
        let {
          productName: _0x38b304
        } = _0xb0c25c?.["obj"];
        const _0xc1165c = {
          notify: true
        };
        this.log("使用" + _0x4bfcc9.length + "种年卡合成: " + _0x38b304, _0xc1165c);
        for (let _0x547346 of this.cards) {
          _0x4bfcc9.includes(_0x547346.currency) && (_0x547346.balance -= 1);
        }
      } else {
        let _0x100bc5 = _0xb0c25c?.["errorMessage"] || (_0xb0c25c ? JSON.stringify(_0xb0c25c) : "无返回");
        this.log("使用" + _0x4bfcc9.length + "种年卡合成失败: " + _0x100bc5);
        _0x100bc5?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x1178c9) {
      console.log(_0x1178c9);
    }
  }
  async jika2024_task(_0x10816a = {}) {
    await this.jika2024_cardStatus();
  }
  async anniversary2024_weeklyGiftStatus(_0x5073a3 = {}) {
    try {
      let _0x15c4c0 = {
          fn: "anniversary2024_weeklyGiftStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~weeklyGiftStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x363a8a
        } = await this.request(_0x15c4c0);
      if (_0x363a8a?.["success"]) {
        let _0x4fbc2b = _0x363a8a?.["obj"]?.["weeklyGiftList"] || [];
        for (let _0x1494ea of _0x4fbc2b) {
          if (!_0x1494ea.received) {
            let _0x13d1d1 = new Date(_0x1494ea.receiveStartTime),
              _0x268988 = new Date(_0x1494ea.receiveEndTime),
              _0x39c6e8 = Date.now();
            _0x39c6e8 >= _0x13d1d1.getTime() && _0x39c6e8 <= _0x268988.getTime() && (await this.anniversary2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x525e5c = _0x363a8a?.["errorMessage"] || (_0x363a8a ? JSON.stringify(_0x363a8a) : "无返回");
        this.log("查询每周领券失败: " + _0x525e5c);
        (_0x525e5c?.["includes"]("系统繁忙") || _0x525e5c?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x5bbf2a) {
      console.log(_0x5bbf2a);
    }
  }
  async anniversary2024_receiveWeeklyGift(_0x429a7d = {}) {
    try {
      let _0xec04e7 = {
          fn: "anniversary2024_receiveWeeklyGift",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~receiveWeeklyGift",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0xf7074b
        } = await this.request(_0xec04e7);
      if (_0xf7074b?.["success"]) {
        let _0x50594e = _0xf7074b?.["obj"]?.["map"](_0x1485de => _0x1485de.productName);
        this.log("每周领券: " + _0x50594e.join(", "));
      } else {
        let _0xefb908 = _0xf7074b?.["errorMessage"] || (_0xf7074b ? JSON.stringify(_0xf7074b) : "无返回");
        this.log("每周领券失败: " + _0xefb908);
        (_0xefb908?.["includes"]("系统繁忙") || _0xefb908?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x5ea724) {
      console.log(_0x5ea724);
    }
  }
  async anniversary2024_taskList(_0x54215b = {}) {
    try {
      const _0x5685ef = {
        activityCode: _0x145ddc,
        channelType: "MINI_PROGRAM"
      };
      let _0x2a0e4b = {
          fn: "anniversary2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: _0x5685ef
        },
        {
          result: _0x59c6dc
        } = await this.request(_0x2a0e4b);
      if (_0x59c6dc?.["success"]) {
        let _0x23593d = _0x59c6dc?.["obj"] || [];
        for (let _0x3083a3 of _0x23593d.filter(_0x462c8e => _0x462c8e.status == 1)) {
          if (this.anniversary_black) {
            return;
          }
          for (let _0x452ee3 = 0; _0x452ee3 < _0x3083a3.canReceiveTokenNum; _0x452ee3++) {
            await this.anniversary2024_fetchMixTaskReward(_0x3083a3);
          }
        }
        for (let _0xbe749f of _0x23593d.filter(_0x15b78b => _0x15b78b.status == 2)) {
          if (this.anniversary_black) {
            return;
          }
          switch (_0xbe749f.taskType) {
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
                for (let _0x46b3c2 = 0; _0x46b3c2 < _0xbe749f.restFinishTime && !this.anniversary_black; _0x46b3c2++) {
                  await this.anniversary2024_finishTask(_0xbe749f);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x59c6dc?.["errorMessage"] || (_0x59c6dc ? JSON.stringify(_0x59c6dc) : "无返回")));
      }
    } catch (_0x678dfc) {
      console.log(_0x678dfc);
    }
  }
  async anniversary2024_finishTask(_0x5309b3, _0x218ece = {}) {
    try {
      const _0x1350eb = {
        taskCode: _0x5309b3.taskCode
      };
      let _0x2367ee = {
          fn: "anniversary2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x1350eb
        },
        {
          result: _0x20d4d3
        } = await this.request(_0x2367ee);
      _0x20d4d3?.["success"] ? (this.log("完成任务[" + _0x5309b3.taskName + "]成功"), await this.anniversary2024_fetchMixTaskReward(_0x5309b3)) : this.log("完成任务[" + _0x5309b3.taskName + "]失败: " + (_0x20d4d3?.["errorMessage"] || (_0x20d4d3 ? JSON.stringify(_0x20d4d3) : "无返回")));
    } catch (_0x4461bd) {
      console.log(_0x4461bd);
    }
  }
  async anniversary2024_fetchMixTaskReward(_0x92eff, _0xa08d7d = {}) {
    try {
      let _0x2e788e = {
          fn: "anniversary2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x92eff.taskType,
            activityCode: _0x145ddc,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x2e9a9d
        } = await this.request(_0x2e788e);
      if (_0x2e9a9d?.["success"]) {
        let _0x471785 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x2e9a9d?.["obj"]?.["account"];
        for (let _0x409e24 of receivedAccountList) {
          _0x471785.push("[" + _0x409e24.currency + "]X" + _0x409e24.amount);
        }
        turnedAward?.["productName"] && _0x471785.push("[优惠券]" + turnedAward?.["productName"]);
        this.log("领取任务[" + _0x92eff.taskName + "]奖励: " + _0x471785.join(", "));
      } else {
        let _0x156644 = _0x2e9a9d?.["errorMessage"] || (_0x2e9a9d ? JSON.stringify(_0x2e9a9d) : "无返回");
        this.log("领取任务[" + _0x92eff.taskName + "]奖励失败: " + _0x156644);
        _0x156644?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x52381c) {
      console.log(_0x52381c);
    }
  }
  async anniversary2024_unbox(_0x344f55 = {}) {
    try {
      let _0x304ff1 = {
          fn: "anniversary2024_unbox",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~unbox",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x5b3670
        } = await this.request(_0x304ff1);
      if (_0x5b3670?.["success"]) {
        let _0x3e29e7 = [],
          _0x563184 = _0x5b3670?.["obj"]?.["account"]?.["receivedAccountList"] || [];
        for (let _0x207276 of _0x563184) {
          _0x3e29e7.push("[" + _0x207276.currency + "]X" + _0x207276.amount);
        }
        this.log("拆盒子: " + (_0x3e29e7.join(", ") || "空气"));
      } else {
        let _0x22164c = _0x5b3670?.["errorMessage"] || (_0x5b3670 ? JSON.stringify(_0x5b3670) : "无返回");
        this.log("拆盒子失败: " + _0x22164c);
        _0x22164c?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x5eda7a) {
      console.log(_0x5eda7a);
    }
  }
  async anniversary2024_game_list(_0x17e697 = {}) {
    try {
      let _0x389c6b = {
          fn: "anniversary2024_game_list",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GameParkService~list",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x4ba9f9
        } = await this.request(_0x389c6b);
      if (_0x4ba9f9?.["success"]) {
        let {
          topicPKInfo: _0x25c259,
          searchWordInfo: _0x3783ff,
          happyEliminationInfo: _0x2e4614
        } = _0x4ba9f9?.["obj"];
        !_0x25c259?.["isPassFlag"] && (this.log("开始话题PK赛"), await this.anniversary2024_TopicPk_topicList());
        if (!_0x3783ff?.["isPassFlag"] || !_0x3783ff?.["isFinishDailyFlag"]) {
          this.log("开始找字游戏");
          for (let _0x1a864d = 1; _0x1a864d <= 10; _0x1a864d++) {
            let _0x477e18 = Math.floor(Math.random() * 2000) + 1000;
            await _0x5198ee.wait(_0x477e18);
            if (!(await this.anniversary2024_SearchWord_win(_0x1a864d))) {
              break;
            }
          }
        }
        if (!_0x2e4614?.["isPassFlag"] || !_0x2e4614?.["isFinishDailyFlag"]) {
          this.log("开始消消乐");
          for (let _0x58c1b1 = 1; _0x58c1b1 <= 30; _0x58c1b1++) {
            let _0x33970b = Math.floor(Math.random() * 2000) + 1000;
            await _0x5198ee.wait(_0x33970b);
            if (!(await this.anniversary2024_HappyElimination_win(_0x58c1b1))) {
              break;
            }
          }
        }
      } else {
        let _0x2c9551 = _0x4ba9f9?.["errorMessage"] || (_0x4ba9f9 ? JSON.stringify(_0x4ba9f9) : "无返回");
        this.log("查询游戏状态失败: " + _0x2c9551);
        _0x2c9551?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x243c6f) {
      console.log(_0x243c6f);
    }
  }
  async anniversary2024_SearchWord_win(_0x31f6ea, _0x3da182 = {}) {
    let _0x71bbd4 = true;
    try {
      const _0x568aa9 = {
        index: _0x31f6ea
      };
      let _0x82776d = {
          fn: "anniversary2024_SearchWord_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024SearchWordService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x568aa9
        },
        {
          result: _0x31eaaf
        } = await this.request(_0x82776d);
      if (_0x31eaaf?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x31eaaf?.["obj"];
        if (currencyDTOList?.["length"]) {
          let _0x1a0d18 = [];
          for (let _0x5a49e3 of currencyDTOList) {
            _0x1a0d18.push("[" + _0x5a49e3.currency + "]X" + _0x5a49e3.amount);
          }
          this.log("找字游戏第" + _0x31f6ea + "关通关成功: " + _0x1a0d18.join(", "));
        } else {
          this.log("找字游戏第" + _0x31f6ea + "关通关成功");
        }
      } else {
        let _0x3976e5 = _0x31eaaf?.["errorMessage"] || (_0x31eaaf ? JSON.stringify(_0x31eaaf) : "无返回");
        this.log("找字游戏第" + _0x31f6ea + "关失败: " + _0x3976e5);
        _0x3976e5?.["includes"]("系统繁忙") && (_0x71bbd4 = false);
      }
    } catch (_0x58e90c) {
      console.log(_0x58e90c);
    } finally {
      return _0x71bbd4;
    }
  }
  async anniversary2024_HappyElimination_win(_0x168de7, _0x1158dc = {}) {
    let _0x21b202 = true;
    try {
      const _0x5d3cfd = {
        index: _0x168de7
      };
      let _0x1e1960 = {
          fn: "anniversary2024_HappyElimination_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024HappyEliminationService~win",
          headers: {
            ...this.getSign()
          },
          json: _0x5d3cfd
        },
        {
          result: _0x3eeba2
        } = await this.request(_0x1e1960);
      if (_0x3eeba2?.["success"]) {
        let {
          isAward: _0x600205,
          currencyDTOList: _0x4ff53c
        } = _0x3eeba2?.["obj"];
        if (_0x600205) {
          let _0x56761a = [];
          for (let _0x48a4c8 of _0x4ff53c) {
            _0x56761a.push("[" + _0x48a4c8.currency + "]X" + _0x48a4c8.amount);
          }
          this.log("消消乐第" + _0x168de7 + "关通关成功: " + _0x56761a.join(", "));
        } else {
          this.log("消消乐第" + _0x168de7 + "关通关成功");
        }
      } else {
        let _0x115378 = _0x3eeba2?.["errorMessage"] || (_0x3eeba2 ? JSON.stringify(_0x3eeba2) : "无返回");
        this.log("消消乐第" + _0x168de7 + "关失败: " + _0x115378);
        _0x115378?.["includes"]("系统繁忙") && (_0x21b202 = false);
      }
    } catch (_0x278d09) {
      console.log(_0x278d09);
    } finally {
      return _0x21b202;
    }
  }
  async anniversary2024_TopicPk_topicList(_0x348ccf = {}) {
    try {
      let _0x3ab476 = {
          fn: "anniversary2024_TopicPk_topicList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~topicList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x44c4c8
        } = await this.request(_0x3ab476);
      if (_0x44c4c8?.["success"]) {
        let _0x33a35f = _0x44c4c8?.["obj"]?.["topics"] || [],
          _0x3c39d2 = _0x33a35f?.["filter"](_0x2eb245 => !_0x2eb245?.["choose"])?.[0]?.["index"] || 1;
        for (let _0x13bd91 = parseInt(_0x3c39d2); _0x13bd91 <= 12; _0x13bd91++) {
          let _0xe4af79 = Math.floor(Math.random() * 2000) + 2000;
          await _0x5198ee.wait(_0xe4af79);
          if (!(await this.anniversary2024_TopicPk_chooseSide(_0x13bd91))) {
            break;
          }
        }
      } else {
        let _0x477b5d = _0x44c4c8?.["errorMessage"] || (_0x44c4c8 ? JSON.stringify(_0x44c4c8) : "无返回");
        this.log("查询话题PK赛记录失败: " + _0x477b5d);
        _0x477b5d?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x4442fe) {
      console.log(_0x4442fe);
    }
  }
  async anniversary2024_queryAccountStatus_refresh(_0x307987 = {}) {
    try {
      let _0x2e1b7d = {
        fn: "anniversary2024_queryAccountStatus_refresh",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        headers: {
          ...this.getSign()
        },
        json: {}
      };
      await this.request(_0x2e1b7d);
    } catch (_0x33ebd5) {
      console.log(_0x33ebd5);
    }
  }
  async anniversary2024_TopicPk_chooseSide(_0x4041e6, _0x1aafc4 = {}) {
    let _0xde1f47 = true;
    try {
      const _0x5408fb = {
        index: _0x4041e6,
        choose: 0
      };
      let _0x2e00a0 = {
          fn: "anniversary2024_TopicPk_chooseSide",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~chooseSide",
          headers: {
            ...this.getSign()
          },
          json: _0x5408fb
        },
        {
          result: _0x3ad4e2
        } = await this.request(_0x2e00a0);
      if (_0x3ad4e2?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x3ad4e2?.["obj"];
        if (currencyDTOList.length) {
          let _0x3046ad = [];
          for (let _0x4e801f of currencyDTOList) {
            _0x3046ad.push("[" + _0x4e801f.currency + "]X" + _0x4e801f.amount);
          }
          this.log("话题PK赛第" + _0x4041e6 + "个话题选择成功: " + _0x3046ad.join(", "));
        } else {
          this.log("话题PK赛第" + _0x4041e6 + "个话题选择成功");
        }
      } else {
        let _0x377bf6 = _0x3ad4e2?.["errorMessage"] || (_0x3ad4e2 ? JSON.stringify(_0x3ad4e2) : "无返回");
        this.log("话题PK赛第" + _0x4041e6 + "个话题失败: " + _0x377bf6);
        _0x377bf6?.["includes"]("系统繁忙") && (_0xde1f47 = false);
      }
    } catch (_0x20985d) {
      console.log(_0x20985d);
    } finally {
      return _0xde1f47;
    }
  }
  async anniversary2024_titleList(_0x145f76 = {}) {
    try {
      let _0x1dc41e = {
          fn: "anniversary2024_titleList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x1e6540
        } = await this.request(_0x1dc41e);
      if (_0x1e6540?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x1e6540?.["obj"],
          _0x5532d9 = _0x5198ee.time("yyyy-MM-dd"),
          _0xf5345c = guessTitleInfoList.filter(_0xf2a74a => _0xf2a74a.gameDate == _0x5532d9);
        if (_0xf5345c.length > 0) {
          let _0x2dd277 = _0xf5345c[0];
          if (_0x2dd277.answerStatus) {
            this.log("今日已回答过竞猜");
          } else {
            let _0x3ce854 = _0x580ed9?.["answer"]?.[_0x5532d9];
            _0x580ed9?.["answer"]?.[_0x5532d9] && (await this.anniversary2024_answer(_0x2dd277, _0x3ce854));
          }
        } else {
          this.log("没有查询到今日竞猜题目");
        }
      } else {
        let _0x9d0c1b = _0x1e6540?.["errorMessage"] || (_0x1e6540 ? JSON.stringify(_0x1e6540) : "无返回");
        this.log("查询每日口令竞猜失败: " + _0x9d0c1b);
      }
    } catch (_0x2384cd) {
      console.log(_0x2384cd);
    }
  }
  async anniversary2024_titleList_award(_0x17bfa9 = {}) {
    try {
      let _0x1991ce = {
          fn: "anniversary2024_titleList_award",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x165654
        } = await this.request(_0x1991ce);
      if (_0x165654?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x165654?.["obj"],
          _0x46745f = _0x5198ee.time("yyyy-MM-dd"),
          _0x34c7d5 = guessTitleInfoList.filter(_0xfd7adc => _0xfd7adc.gameDate == _0x46745f);
        if (_0x34c7d5.length > 0) {
          let _0x3551d4 = _0x34c7d5[0];
          if (_0x3551d4.answerStatus) {
            let _0x1b5a00 = [],
              {
                awardList = [],
                puzzleList = []
              } = _0x3551d4;
            _0x1b5a00 = _0x1b5a00.concat(awardList.map(_0x2b914e => _0x2b914e.productName));
            _0x1b5a00 = _0x1b5a00.concat(puzzleList.map(_0x41a84b => "[" + _0x41a84b.currency + "]X" + _0x41a84b.amount));
            const _0xe8c1d4 = {
              notify: true
            };
            this.log("口令竞猜奖励: " + (_0x1b5a00.join(", ") || "空气"), _0xe8c1d4);
          } else {
            this.log("今日还没回答竞猜");
          }
        } else {
          this.log("没有查询到今日竞猜奖励");
        }
      } else {
        let _0x2c1d08 = _0x165654?.["errorMessage"] || (_0x165654 ? JSON.stringify(_0x165654) : "无返回");
        this.log("查询每日口令竞猜奖励失败: " + _0x2c1d08);
      }
    } catch (_0x47a200) {
      console.log(_0x47a200);
    }
  }
  async anniversary2024_answer(_0x469b2f, _0x1bba19, _0x373cc5 = {}) {
    try {
      const _0x1a901a = {
        period: _0x469b2f.period,
        answerInfo: _0x1bba19
      };
      let _0x19d223 = {
          fn: "anniversary2024_answer",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~answer",
          headers: {
            ...this.getSign()
          },
          json: _0x1a901a
        },
        {
          result: _0x204ab8
        } = await this.request(_0x19d223);
      if (_0x204ab8?.["success"]) {
        this.log("口令竞猜回答成功");
        await this.anniversary2024_titleList_award();
      } else {
        let _0x522b15 = _0x204ab8?.["errorMessage"] || (_0x204ab8 ? JSON.stringify(_0x204ab8) : "无返回");
        this.log("口令竞猜回答失败: " + _0x522b15);
      }
    } catch (_0x49fb60) {
      console.log(_0x49fb60);
    }
  }
  async anniversary2024_queryAccountStatus(_0x7ae9d7 = {}) {
    try {
      let _0x371afb = {
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
          result: _0x262a24
        } = await this.request(_0x371afb);
        if (_0x262a24?.["success"]) {
          let _0xc2b35e = _0x262a24?.["obj"]?.["accountCurrencyList"] || [],
            _0x38f444 = _0xc2b35e.filter(_0x3c8217 => _0x3c8217.currency == "UNBOX_CHANCE"),
            _0x2f161c = _0x38f444?.[0]?.["balance"] || 0;
          this.log("可以拆" + _0x2f161c + "次盒子");
          while (_0x2f161c-- > 0) {
            await this.anniversary2024_unbox();
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x262a24?.["errorMessage"] || (_0x262a24 ? JSON.stringify(_0x262a24) : "无返回")));
        }
      }
      {
        let {
          result: _0x26a096
        } = await this.request(_0x371afb);
        if (_0x26a096?.["success"]) {
          let _0x4b7414 = _0x26a096?.["obj"]?.["accountCurrencyList"] || [];
          _0x4b7414 = _0x4b7414.filter(_0x3b6c65 => _0x3b6c65.currency != "UNBOX_CHANCE");
          if (_0x4b7414?.["length"]) {
            this.cards = _0x4b7414;
            let _0x11278b = [];
            for (let _0x9f90d9 of this.cards) {
              _0x11278b.push("[" + _0x9f90d9.currency + "]X" + _0x9f90d9.balance);
            }
            const _0xf35885 = {
              notify: true
            };
            this.log("拼图: " + _0x11278b.join(", "), _0xf35885);
            this.cards.sort((_0x1185cb, _0x59dc21) => {
              return _0x59dc21.balance - _0x1185cb.balance;
            });
          } else {
            const _0x15e2a3 = {
              notify: true
            };
            this.log("还没有收集到拼图", _0x15e2a3);
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x26a096?.["errorMessage"] || (_0x26a096 ? JSON.stringify(_0x26a096) : "无返回")));
        }
      }
    } catch (_0x3ea694) {
      console.log(_0x3ea694);
    }
  }
  async anniversary2024_queryAccountStatus_card(_0xc23832 = {}) {
    try {
      let _0x3d1f60 = {
          fn: "anniversary2024_queryAccountStatus_card",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x166a00
        } = await this.request(_0x3d1f60);
      if (_0x166a00?.["success"]) {
        let _0x2a7b6b = _0x166a00?.["obj"]?.["accountCurrencyList"] || [];
        _0x2a7b6b = _0x2a7b6b.filter(_0x41d5d4 => _0x41d5d4.currency != "UNBOX_CHANCE");
        if (_0x2a7b6b?.["length"]) {
          this.cards = _0x2a7b6b.sort((_0x15a498, _0x3c5564) => {
            return _0x3c5564.balance - _0x15a498.balance;
          });
          let _0x113059 = [];
          for (let _0x52526c of this.cards) {
            _0x113059.push("[" + _0x52526c.currency + "]X" + _0x52526c.balance);
          }
          const _0x12ad75 = {
            notify: true
          };
          this.log("拼图: " + _0x113059.join(", "), _0x12ad75);
          while (this.cards.filter(_0x4c8e46 => _0x4c8e46.balance > 0).length >= 3 && !this.anniversary_black) {
            await this.anniversary2024_collectDrawAward();
          }
        } else {
          const _0x5b0809 = {
            notify: true
          };
          this.log("还没有收集到拼图", _0x5b0809);
        }
      } else {
        this.log("查询已收集拼图失败: " + (_0x166a00?.["errorMessage"] || (_0x166a00 ? JSON.stringify(_0x166a00) : "无返回")));
      }
    } catch (_0x224d7) {
      console.log(_0x224d7);
    }
  }
  async anniversary2024_collectDrawAward(_0x4a3203 = {}) {
    try {
      this.cards = this.cards.sort((_0x437319, _0x3926c8) => {
        return _0x3926c8.balance - _0x437319.balance;
      });
      let _0x5f3b72 = this.cards.filter(_0x1ec0e0 => _0x1ec0e0.balance > 0).map(_0xfc06f7 => _0xfc06f7.currency);
      if (_0x5f3b72.length == 9) {
        _0x5f3b72 = _0x5f3b72.slice(0, 9);
      } else {
        if (_0x5f3b72.length >= 7) {
          _0x5f3b72 = _0x5f3b72.slice(0, 7);
        } else {
          if (_0x5f3b72.length >= 5) {
            _0x5f3b72 = _0x5f3b72.slice(0, 5);
          } else {
            _0x5f3b72.length >= 3 && (_0x5f3b72 = _0x5f3b72.slice(0, 3));
          }
        }
      }
      const _0x259ee6 = {
        accountList: _0x5f3b72
      };
      let _0x37984c = {
          fn: "anniversary2024_collectDrawAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~collectDrawAward",
          headers: {
            ...this.getSign()
          },
          json: _0x259ee6
        },
        {
          result: _0x29a3c5
        } = await this.request(_0x37984c);
      if (_0x29a3c5?.["success"]) {
        let {
          productName: _0x14a33b
        } = _0x29a3c5?.["obj"];
        const _0x3926d1 = {
          notify: true
        };
        this.log("使用" + _0x5f3b72.length + "种卡合成: " + _0x14a33b, _0x3926d1);
        for (let _0xbf0af5 of this.cards) {
          _0x5f3b72.includes(_0xbf0af5.currency) && (_0xbf0af5.balance -= 1);
        }
      } else {
        let _0x255a6c = _0x29a3c5?.["errorMessage"] || (_0x29a3c5 ? JSON.stringify(_0x29a3c5) : "无返回");
        this.log("使用" + _0x5f3b72.length + "种年卡合成失败: " + _0x255a6c);
        _0x255a6c?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x46cdba) {
      console.log(_0x46cdba);
    }
  }
  async memberDay_index(_0x3f1061 = {}) {
    try {
      let _0x1f30b6 = _0x5198ee.randomList(_0x594120.filter(_0x24d594 => _0x24d594 != this.userId));
      const _0x39c474 = {
        inviteUserId: _0x1f30b6
      };
      let _0x577131 = {
          fn: "memberDay_index",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~index",
          headers: {
            ...this.getSign()
          },
          json: _0x39c474
        },
        {
          result: _0xbb67d
        } = await this.request(_0x577131);
      if (_0xbb67d?.["success"]) {
        let {
          lotteryNum: _0x116d42,
          canReceiveInviteAward: _0x5a13c0,
          risk: _0x238d02
        } = _0xbb67d?.["obj"];
        _0x5a13c0 && (await this.memberDay_receiveInviteAward(_0x1f30b6));
        await this.memberDay_redPacketReceivedStatus();
        _0x116d42 = _0x116d42 || 0;
        this.log("会员日可以抽奖" + _0x116d42 + "次");
        while (_0x116d42-- > 0) {
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
        let _0x46dca6 = _0xbb67d?.["errorMessage"] || (_0xbb67d ? JSON.stringify(_0xbb67d) : "无返回");
        this.log("查询会员日失败: " + _0x46dca6);
        if (_0x46dca6?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x32c216 = {
            notify: true
          };
          this.log("会员日任务风控", _0x32c216);
        }
      }
    } catch (_0x4a0dfb) {
      console.log(_0x4a0dfb);
    }
  }
  async memberDay_receiveInviteAward(_0x4f51ea, _0x5f2f2b = {}) {
    try {
      const _0x2d4f5a = {
        inviteUserId: _0x4f51ea
      };
      let _0x4fad12 = {
          fn: "memberDay_receiveInviteAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~receiveInviteAward",
          headers: {
            ...this.getSign()
          },
          json: _0x2d4f5a
        },
        {
          result: _0x3296d4
        } = await this.request(_0x4fad12);
      if (_0x3296d4?.["success"]) {
        let {
          productName = "空气"
        } = _0x3296d4?.["obj"] || {};
        const _0x430060 = {
          notify: true
        };
        this.log("会员日奖励: " + productName, _0x430060);
      } else {
        let _0x48b1bb = _0x3296d4?.["errorMessage"] || (_0x3296d4 ? JSON.stringify(_0x3296d4) : "无返回");
        this.log("领取会员日奖励失败: " + _0x48b1bb);
        if (_0x48b1bb?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x195fdf = {
            notify: true
          };
          this.log("会员日任务风控", _0x195fdf);
        }
      }
    } catch (_0x3e3daa) {
      console.log(_0x3e3daa);
    }
  }
  async memberDay_lottery(_0x948caa = {}) {
    try {
      let _0x28d791 = {
          fn: "memberDay_lottery",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayLotteryService~lottery",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x38f8b2
        } = await this.request(_0x28d791);
      if (_0x38f8b2?.["success"]) {
        let {
          productName = "空气"
        } = _0x38f8b2?.["obj"] || {};
        const _0x21a709 = {
          notify: true
        };
        this.log("会员日抽奖: " + productName, _0x21a709);
      } else {
        let _0x33e0cb = _0x38f8b2?.["errorMessage"] || (_0x38f8b2 ? JSON.stringify(_0x38f8b2) : "无返回");
        this.log("会员日抽奖失败: " + _0x33e0cb);
        if (_0x33e0cb?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x1611ec = {
            notify: true
          };
          this.log("会员日任务风控", _0x1611ec);
        }
      }
    } catch (_0x48c9c7) {
      console.log(_0x48c9c7);
    }
  }
  async memberDay_taskList(_0x126094 = {}) {
    try {
      let _0x36ee36 = {
          fn: "memberDay_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            ...this.getSign()
          },
          json: {
            activityCode: _0x39fa06,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x2e6be7
        } = await this.request(_0x36ee36);
      if (_0x2e6be7?.["success"]) {
        let _0x17343a = _0x2e6be7?.["obj"] || [];
        for (let _0x13f13e of _0x17343a.filter(_0x4735f8 => _0x4735f8.status == 1)) {
          if (this.memberDay_black) {
            return;
          }
          await this.memberDay_fetchMixTaskReward(_0x13f13e);
        }
        for (let _0x33aa83 of _0x17343a.filter(_0x481b0b => _0x481b0b.status == 2)) {
          if (this.memberDay_black) {
            return;
          }
          switch (_0x33aa83.taskType) {
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
                for (let _0x244d5f = 0; _0x244d5f < _0x33aa83.restFinishTime && !this.memberDay_black; _0x244d5f++) {
                  await this.memberDay_finishTask(_0x33aa83);
                }
                break;
              }
          }
        }
      } else {
        let _0x5740ac = _0x2e6be7?.["errorMessage"] || (_0x2e6be7 ? JSON.stringify(_0x2e6be7) : "无返回");
        this.log("查询会员日任务失败: " + _0x5740ac);
        if (_0x5740ac?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x352f6f = {
            notify: true
          };
          this.log("会员日任务风控", _0x352f6f);
        }
      }
    } catch (_0x37176e) {
      console.log(_0x37176e);
    }
  }
  async memberDay_finishTask(_0x49b967, _0x505a1b = {}) {
    try {
      const _0x5f3c95 = {
        taskCode: _0x49b967.taskCode
      };
      let _0xb04f35 = {
          fn: "memberDay_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x5f3c95
        },
        {
          result: _0x49a894
        } = await this.request(_0xb04f35);
      if (_0x49a894?.["success"]) {
        this.log("完成会员日任务[" + _0x49b967.taskName + "]成功");
        await this.memberDay_fetchMixTaskReward(_0x49b967);
      } else {
        let _0x560597 = _0x49a894?.["errorMessage"] || (_0x49a894 ? JSON.stringify(_0x49a894) : "无返回");
        this.log("完成会员日任务[" + _0x49b967.taskName + "]失败: " + _0x560597);
        if (_0x560597?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x16567a = {
            notify: true
          };
          this.log("会员日任务风控", _0x16567a);
        }
      }
    } catch (_0x16eef9) {
      console.log(_0x16eef9);
    }
  }
  async memberDay_fetchMixTaskReward(_0x231fae, _0x295929 = {}) {
    try {
      let _0x1f5250 = {
          fn: "memberDay_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~fetchMixTaskReward",
          headers: {
            ...this.getSign()
          },
          json: {
            taskType: _0x231fae.taskType,
            activityCode: _0x39fa06,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x5a58ea
        } = await this.request(_0x1f5250);
      if (_0x5a58ea?.["success"]) {
        this.log("领取会员日任务[" + _0x231fae.taskName + "]奖励成功");
      } else {
        let _0x3a15da = _0x5a58ea?.["errorMessage"] || (_0x5a58ea ? JSON.stringify(_0x5a58ea) : "无返回");
        this.log("领取会员日任务[" + _0x231fae.taskName + "]奖励失败: " + _0x3a15da);
        if (_0x3a15da?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x358919 = {
            notify: true
          };
          this.log("会员日任务风控", _0x358919);
        }
      }
    } catch (_0x13b413) {
      console.log(_0x13b413);
    }
  }
  async memberDay_redPacketReceivedStatus(_0x6722ce = {}) {
    try {
      let _0x641a8a = {
          fn: "memberDay_redPacketReceivedStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~redPacketReceivedStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x34714c
        } = await this.request(_0x641a8a);
      if (_0x34714c?.["success"]) {
        for (let _0x4e9956 of _0x34714c?.["obj"] || []) {
          if (_0x4e9956.received) {
            continue;
          }
          let _0x2131ca = new Date().getHours();
          _0x4e9956.receiveHour == _0x2131ca && (await this.memberDay_receiveRedPacket(_0x4e9956.receiveHour));
        }
      } else {
        let _0x54bb10 = _0x34714c?.["errorMessage"] || (_0x34714c ? JSON.stringify(_0x34714c) : "无返回");
        this.log("会员日查询整点领红包失败: " + _0x54bb10);
        if (_0x54bb10?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x4a73e7 = {
            notify: true
          };
          this.log("会员日任务风控", _0x4a73e7);
        }
      }
    } catch (_0x200c8d) {
      console.log(_0x200c8d);
    }
  }
  async memberDay_receiveRedPacket(_0x25f4c8, _0x3b9a7b = {}) {
    try {
      const _0x1e18df = {
        receiveHour: _0x25f4c8
      };
      let _0x3fba0c = {
          fn: "memberDay_receiveRedPacket",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~receiveRedPacket",
          headers: {
            ...this.getSign()
          },
          json: _0x1e18df
        },
        {
          result: _0x7e6524
        } = await this.request(_0x3fba0c);
      if (_0x7e6524?.["success"]) {
        this.log("会员日领取" + _0x25f4c8 + "点红包成功");
      } else {
        let _0x22b7ef = _0x7e6524?.["errorMessage"] || (_0x7e6524 ? JSON.stringify(_0x7e6524) : "无返回");
        this.log("会员日领取" + _0x25f4c8 + "点红包失败: " + _0x22b7ef);
        if (_0x22b7ef?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x34f884 = {
            notify: true
          };
          this.log("会员日任务风控", _0x34f884);
        }
      }
    } catch (_0x45018d) {
      console.log(_0x45018d);
    }
  }
  async memberDay_redPacketStatus(_0x21bc8 = {}) {
    try {
      let _0x3c8dea = {
          fn: "memberDay_redPacketStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketStatus",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0xad8eb7
        } = await this.request(_0x3c8dea);
      if (_0xad8eb7?.["success"]) {
        let {
          drewToday: _0x4d34cd,
          packetList: _0x3a18a5
        } = _0xad8eb7?.["obj"];
        this.memberDay_redPacket_drewToday = _0x4d34cd;
        for (let _0x8eb49e of _0x3a18a5) {
          this.memberDay_redPacket_map[_0x8eb49e.level] = _0x8eb49e.count;
        }
        let _0x3c75ac = _0x2f2b94;
        for (let _0x1db018 = 1; _0x1db018 < _0x3c75ac; _0x1db018++) {
          let _0x4f4e92 = this.memberDay_redPacket_map[_0x1db018];
          while (_0x4f4e92 >= 2) {
            await this.memberDay_redPacketMerge(_0x1db018);
            _0x4f4e92 -= 2;
          }
        }
        let _0x414493 = [],
          _0x11786a = 0;
        for (let _0x10ce8a in this.memberDay_redPacket_map) {
          if (!this.memberDay_redPacket_map[_0x10ce8a]) {
            continue;
          }
          _0x414493.push("[" + _0x10ce8a + "级]X" + this.memberDay_redPacket_map[_0x10ce8a]);
          let _0x2f8a15 = parseInt(_0x10ce8a);
          _0x2f8a15 < _0x3c75ac && (_0x11786a += 1 << _0x2f8a15 - 1);
        }
        const _0x62827f = {
          notify: true
        };
        this.log("会员日合成列表: " + _0x414493.join(", "), _0x62827f);
        if (this.memberDay_redPacket_map[_0x3c75ac]) {
          const _0x504e97 = {
            notify: true
          };
          this.log("会员日已拥有[" + _0x3c75ac + "级]红包X" + this.memberDay_redPacket_map[_0x3c75ac], _0x504e97);
          await this.memberDay_redPacketDraw(_0x3c75ac);
        } else {
          let _0x2c710f = _0x18a6eb - _0x11786a;
          const _0x32159f = {
            notify: true
          };
          this.log("会员日距离[" + _0x3c75ac + "级]红包还差: [1级]红包X" + _0x2c710f, _0x32159f);
        }
      } else {
        let _0x415b04 = _0xad8eb7?.["errorMessage"] || (_0xad8eb7 ? JSON.stringify(_0xad8eb7) : "无返回");
        this.log("查询会员日合成失败: " + _0x415b04);
        if (_0x415b04?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x3b03a8 = {
            notify: true
          };
          this.log("会员日任务风控", _0x3b03a8);
        }
      }
    } catch (_0x194984) {
      console.log(_0x194984);
    }
  }
  async memberDay_redPacketMerge(_0x40afcd, _0x136f48 = {}) {
    try {
      const _0x4412e2 = {
        level: _0x40afcd,
        num: 2
      };
      let _0x301aa7 = {
          fn: "memberDay_redPacketMerge",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketMerge",
          headers: {
            ...this.getSign()
          },
          json: _0x4412e2
        },
        {
          result: _0x4e0fd7
        } = await this.request(_0x301aa7);
      if (_0x4e0fd7?.["success"]) {
        this.log("会员日合成: [" + _0x40afcd + "级]红包X2 -> [" + (_0x40afcd + 1) + "级]红包");
        this.memberDay_redPacket_map[_0x40afcd] -= 2;
        if (!this.memberDay_redPacket_map[_0x40afcd + 1]) {
          this.memberDay_redPacket_map[_0x40afcd + 1] = 0;
        }
        this.memberDay_redPacket_map[_0x40afcd + 1]++;
      } else {
        let _0x3baff0 = _0x4e0fd7?.["errorMessage"] || (_0x4e0fd7 ? JSON.stringify(_0x4e0fd7) : "无返回");
        this.log("会员日合成两个[" + _0x40afcd + "级]红包失败: " + _0x3baff0);
        if (_0x3baff0?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x29c924 = {
            notify: true
          };
          this.log("会员日任务风控", _0x29c924);
        }
      }
    } catch (_0x3aaa25) {
      console.log(_0x3aaa25);
    }
  }
  async memberDay_redPacketDraw(_0x595486, _0x409e15 = {}) {
    try {
      let _0x27f5f7 = {
          fn: "memberDay_redPacketDraw",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketDraw",
          headers: {
            ...this.getSign()
          },
          json: {
            level: _0x595486.toString()
          }
        },
        {
          result: _0x2c73f9
        } = await this.request(_0x27f5f7);
      if (_0x2c73f9?.["success"]) {
        let _0x56a35a = _0x2c73f9?.["obj"]?.["map"](_0x8a6451 => _0x8a6451.couponName) || [];
        const _0x16770f = {
          notify: true
        };
        this.log("会员日提取[" + _0x595486 + "级]红包: " + (_0x56a35a.join(", ") || "空气"), _0x16770f);
      } else {
        let _0x42a994 = _0x2c73f9?.["errorMessage"] || (_0x2c73f9 ? JSON.stringify(_0x2c73f9) : "无返回");
        this.log("会员日提取[" + _0x595486 + "级]红包失败: " + _0x42a994);
        if (_0x42a994?.["includes"]("没有资格参与活动")) {
          this.memberDay_black = true;
          const _0x1ee7e0 = {
            notify: true
          };
          this.log("会员日任务风控", _0x1ee7e0);
        }
      }
    } catch (_0x5358ec) {
      console.log(_0x5358ec);
    }
  }
  async anniversary2024_task(_0x344de0 = {}) {
    await this.anniversary2024_weeklyGiftStatus();
    if (this.anniversary_black) {
      return;
    }
    await this.anniversary2024_game_list();
    await this.anniversary2024_taskList();
    await this.anniversary2024_queryAccountStatus();
  }
  async anniversary2024_draw_task(_0x4a38cd = {}) {
    await this.anniversary2024_queryAccountStatus_card();
  }
  async memberDay_task(_0x19f908 = {}) {
    let _0x4b259e = new Date().getDate();
    _0x4b259e >= 26 && _0x4b259e <= 28 && (await this.memberDay_index());
  }
  async userTask(_0x387e34 = {}) {
    _0x5198ee.log("\n-------------- 账号[" + this.index + "] --------------");
    if (!(await this.refresh_cookie())) {
      return;
    }
    await this.superWelfare_receiveRedPacket();
    await this.automaticSignFetchPackage();
    if (_0x580923 == "true") {
      await this.bee_indexData();
    }
    await this.memberDay_task();
  }
}
!(async () => {
  if (!(await _0x3c5b7d())) {
    return;
  }
  await _0x2a751b();
  _0x5198ee.read_env(_0x296c2f);
  let _0x4bbb08 = _0x580923 == "true" ? "运行" : "不运行";
  _0x5198ee.log("");
  const _0x39600a = {
    notify: true
  };
  _0x5198ee.log("采蜜游戏目前设置为: " + _0x4bbb08, _0x39600a);
  _0x5198ee.log("");
  for (let _0x2886f9 of _0x5198ee.userList) {
    await _0x2886f9.userTask();
  }
})().catch(_0x2f11ae => _0x5198ee.log(_0x2f11ae)).finally(() => _0x5198ee.exitNow());
async function _0x3c5b7d(_0x43f4f6 = 0) {
  let _0x1359f = false;
  try {
    const _0x3066c6 = {
      fn: "auth",
      method: "get",
      url: _0x35ba2b,
      timeout: 20000
    };
    let {
      statusCode: _0x3acb61,
      result: _0x4ea9ac
    } = await _0x1aba1c.request(_0x3066c6);
    if (_0x3acb61 != 200) {
      _0x43f4f6++ < MAX_AUTH_RETRY && (_0x1359f = await _0x3c5b7d(_0x43f4f6));
      return _0x1359f;
    }
    if (_0x4ea9ac?.["code"] == 0) {
      _0x4ea9ac = JSON.parse(_0x4ea9ac.data.file.data);
      if (_0x4ea9ac?.["commonNotify"] && _0x4ea9ac.commonNotify.length > 0) {
        const _0x6c341f = {
          notify: true
        };
        _0x5198ee.log(_0x4ea9ac.commonNotify.join("\n") + "\n", _0x6c341f);
      }
      _0x4ea9ac?.["commonMsg"] && _0x4ea9ac.commonMsg.length > 0 && _0x5198ee.log(_0x4ea9ac.commonMsg.join("\n") + "\n");
      if (_0x4ea9ac[_0x13407f]) {
        let _0x77598 = _0x4ea9ac[_0x13407f];
        _0x77598.status == 0 ? _0x54b7a6 >= _0x77598.version ? (_0x1359f = true, _0x5198ee.log(_0x77598.msg[_0x77598.status]), _0x5198ee.log(_0x77598.updateMsg), _0x5198ee.log("现在运行的脚本版本是：" + _0x54b7a6 + "，最新脚本版本：" + _0x77598.latestVersion)) : _0x5198ee.log(_0x77598.versionMsg) : _0x5198ee.log(_0x77598.msg[_0x77598.status]);
      } else {
        _0x5198ee.log(_0x4ea9ac.errorMsg);
      }
    } else {
      _0x43f4f6++ < MAX_AUTH_RETRY && (_0x1359f = await _0x3c5b7d(_0x43f4f6));
    }
  } catch (_0x15cf8c) {
    _0x5198ee.log(_0x15cf8c);
  } finally {
    return _0x1359f;
  }
}
async function _0x2a751b() {
  let _0x28e93a = false;
  try {
    const _0x5c4ee5 = {
      fn: "auth",
      method: "get",
      url: _0x5f0dda
    };
    let {
      statusCode: _0x379021,
      result: _0x3f6d2d
    } = await _0x1aba1c.request(_0x5c4ee5);
    if (_0x379021 != 200) {
      return Promise.resolve();
    }
    _0x3f6d2d?.["code"] == 0 && (_0x3f6d2d = JSON.parse(_0x3f6d2d.data.file.data), _0x594120 = _0x3f6d2d?.["inviteUserId"] || _0x594120, _0x580ed9 = _0x3f6d2d?.["anniversary_2024"] || _0x580ed9);
  } catch (_0x1977f6) {
    _0x5198ee.log(_0x1977f6);
  } finally {
    return _0x28e93a;
  }
}
function _0x5663ad(_0x5f5a34) {
  return new class {
    constructor(_0x52ca19) {
      this.name = _0x52ca19;
      this.startTime = Date.now();
      const _0x5b8ffc = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x5b8ffc);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x3b8c1e, _0xecb5ec = {}) {
      const _0x2ed881 = {
        console: true
      };
      Object.assign(_0x2ed881, _0xecb5ec);
      if (_0x2ed881.time) {
        let _0x81adce = _0x2ed881.fmt || "hh:mm:ss";
        _0x3b8c1e = "[" + this.time(_0x81adce) + "]" + _0x3b8c1e;
      }
      if (_0x2ed881.notify) {
        this.notifyStr.push(_0x3b8c1e);
      }
      if (_0x2ed881.console) {
        console.log(_0x3b8c1e);
      }
    }
    get(_0x5854e2, _0xb98998, _0x3fb764 = "") {
      let _0x4ed668 = _0x3fb764;
      _0x5854e2?.["hasOwnProperty"](_0xb98998) && (_0x4ed668 = _0x5854e2[_0xb98998]);
      return _0x4ed668;
    }
    pop(_0x590f75, _0x313cd0, _0x3119eb = "") {
      let _0x2ef74f = _0x3119eb;
      _0x590f75?.["hasOwnProperty"](_0x313cd0) && (_0x2ef74f = _0x590f75[_0x313cd0], delete _0x590f75[_0x313cd0]);
      return _0x2ef74f;
    }
    copy(_0x3009c3) {
      return Object.assign({}, _0x3009c3);
    }
    read_env(_0xfb7b3a) {
      let _0x24e749 = _0x3e4c21.map(_0x340b3c => process.env[_0x340b3c]);
      for (let _0x56b6bf of _0x24e749.filter(_0x40c3b0 => !!_0x40c3b0)) {
        for (let _0x32b93c of _0x56b6bf.split(_0x31e57d).filter(_0x175d2b => !!_0x175d2b)) {
          if (this.userList.includes(_0x32b93c)) {
            continue;
          }
          this.userList.push(new _0xfb7b3a(_0x32b93c));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x53d9cf = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x3e4c21.map(_0x42c513 => "[" + _0x42c513 + "]").join("或"), _0x53d9cf);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x5e607c, _0x1d5a3a, _0x21b54e = {}) {
      while (_0x1d5a3a.idx < _0x5198ee.userList.length) {
        let _0xd7d943 = _0x5198ee.userList[_0x1d5a3a.idx++];
        if (!_0xd7d943.valid) {
          continue;
        }
        await _0xd7d943[_0x5e607c](_0x21b54e);
      }
    }
    async threadTask(_0x6f6ae, _0x4fb649) {
      let _0x3c13b3 = [];
      const _0x3e7903 = {
        idx: 0
      };
      while (_0x4fb649--) {
        _0x3c13b3.push(this.threads(_0x6f6ae, _0x3e7903));
      }
      await Promise.all(_0x3c13b3);
    }
    time(_0x167fc0, _0x397f31 = null) {
      let _0x47a661 = _0x397f31 ? new Date(_0x397f31) : new Date(),
        _0x66e162 = {
          "M+": _0x47a661.getMonth() + 1,
          "d+": _0x47a661.getDate(),
          "h+": _0x47a661.getHours(),
          "m+": _0x47a661.getMinutes(),
          "s+": _0x47a661.getSeconds(),
          "q+": Math.floor((_0x47a661.getMonth() + 3) / 3),
          S: this.padStr(_0x47a661.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x167fc0) && (_0x167fc0 = _0x167fc0.replace(RegExp.$1, (_0x47a661.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4e67c4 in _0x66e162) new RegExp("(" + _0x4e67c4 + ")").test(_0x167fc0) && (_0x167fc0 = _0x167fc0.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x66e162[_0x4e67c4] : ("00" + _0x66e162[_0x4e67c4]).substr(("" + _0x66e162[_0x4e67c4]).length)));
      return _0x167fc0;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x130cae = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x130cae.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0xc174a9, _0x1f07b3, _0x51f851 = {}) {
      let _0x1eee15 = _0x51f851.padding || "0",
        _0x4a9564 = _0x51f851.mode || "l",
        _0x3e4b1a = String(_0xc174a9),
        _0x41b9ae = _0x1f07b3 > _0x3e4b1a.length ? _0x1f07b3 - _0x3e4b1a.length : 0,
        _0x2ef59c = "";
      for (let _0x5d7282 = 0; _0x5d7282 < _0x41b9ae; _0x5d7282++) {
        _0x2ef59c += _0x1eee15;
      }
      _0x4a9564 == "r" ? _0x3e4b1a = _0x3e4b1a + _0x2ef59c : _0x3e4b1a = _0x2ef59c + _0x3e4b1a;
      return _0x3e4b1a;
    }
    json2str(_0x40f7d9, _0x2c3e48, _0x567f0c = false) {
      let _0x22f454 = [];
      for (let _0x5a6064 of Object.keys(_0x40f7d9).sort()) {
        let _0xfb8937 = _0x40f7d9[_0x5a6064];
        if (_0xfb8937 && _0x567f0c) {
          _0xfb8937 = encodeURIComponent(_0xfb8937);
        }
        _0x22f454.push(_0x5a6064 + "=" + _0xfb8937);
      }
      return _0x22f454.join(_0x2c3e48);
    }
    str2json(_0x545e18, _0x5cf349 = false) {
      let _0x22b8c2 = {};
      for (let _0x3a340e of _0x545e18.split("&")) {
        if (!_0x3a340e) {
          continue;
        }
        let _0x2ebcc0 = _0x3a340e.indexOf("=");
        if (_0x2ebcc0 == -1) {
          continue;
        }
        let _0x58c63c = _0x3a340e.substr(0, _0x2ebcc0),
          _0xb1ad1c = _0x3a340e.substr(_0x2ebcc0 + 1);
        if (_0x5cf349) {
          _0xb1ad1c = decodeURIComponent(_0xb1ad1c);
        }
        _0x22b8c2[_0x58c63c] = _0xb1ad1c;
      }
      return _0x22b8c2;
    }
    randomPattern(_0x22ad64, _0x593850 = "abcdef0123456789") {
      let _0x573011 = "";
      for (let _0x4b91ce of _0x22ad64) {
        if (_0x4b91ce == "x") {
          _0x573011 += _0x593850.charAt(Math.floor(Math.random() * _0x593850.length));
        } else {
          _0x4b91ce == "X" ? _0x573011 += _0x593850.charAt(Math.floor(Math.random() * _0x593850.length)).toUpperCase() : _0x573011 += _0x4b91ce;
        }
      }
      return _0x573011;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x461af5, _0x49dc36 = "abcdef0123456789") {
      let _0x4cb89b = "";
      for (let _0x48f2e4 = 0; _0x48f2e4 < _0x461af5; _0x48f2e4++) {
        _0x4cb89b += _0x49dc36.charAt(Math.floor(Math.random() * _0x49dc36.length));
      }
      return _0x4cb89b;
    }
    randomList(_0x102d90) {
      if (!_0x102d90.length) {
        return null;
      }
      let _0x55e5b9 = Math.floor(Math.random() * _0x102d90.length);
      return _0x102d90[_0x55e5b9];
    }
    wait(_0x1e21d3) {
      return new Promise(_0x8508cd => setTimeout(_0x8508cd, _0x1e21d3));
    }
    async exitNow() {
      await this.showmsg();
      let _0x17cee0 = Date.now(),
        _0x37e521 = (_0x17cee0 - this.startTime) / 1000;
      this.log("");
      const _0x16c6eb = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x37e521 + "秒", _0x16c6eb);
      process.exit(0);
    }
    normalize_time(_0x13c4b3, _0x4f7500 = {}) {
      let _0x33be7a = _0x4f7500.len || default_timestamp_len;
      _0x13c4b3 = _0x13c4b3.toString();
      let _0x4f1444 = _0x13c4b3.length;
      while (_0x4f1444 < _0x33be7a) {
        _0x13c4b3 += "0";
      }
      _0x4f1444 > _0x33be7a && (_0x13c4b3 = _0x13c4b3.slice(0, 13));
      return parseInt(_0x13c4b3);
    }
    async wait_until(_0x5061df, _0x2e6389 = {}) {
      let _0x1ff688 = _0x2e6389.logger || this,
        _0x5239a9 = _0x2e6389.interval || default_wait_interval,
        _0x39552f = _0x2e6389.limit || default_wait_limit,
        _0x5c436a = _0x2e6389.ahead || default_wait_ahead;
      if (typeof _0x5061df == "string" && _0x5061df.includes(":")) {
        if (_0x5061df.includes("-")) {
          _0x5061df = new Date(_0x5061df).getTime();
        } else {
          let _0x4f0ece = this.time("yyyy-MM-dd ");
          _0x5061df = new Date(_0x4f0ece + _0x5061df).getTime();
        }
      }
      let _0x368cc8 = this.normalize_time(_0x5061df) - _0x5c436a,
        _0x7ec49e = this.time("hh:mm:ss.S", _0x368cc8),
        _0x469794 = Date.now();
      _0x469794 > _0x368cc8 && (_0x368cc8 += 86400000);
      let _0x1ba5f9 = _0x368cc8 - _0x469794;
      if (_0x1ba5f9 > _0x39552f) {
        const _0x2260eb = {
          time: true
        };
        _0x1ff688.log("离目标时间[" + _0x7ec49e + "]大于" + _0x39552f / 1000 + "秒,不等待", _0x2260eb);
      } else {
        const _0x2664b = {
          time: true
        };
        _0x1ff688.log("离目标时间[" + _0x7ec49e + "]还有" + _0x1ba5f9 / 1000 + "秒,开始等待", _0x2664b);
        while (_0x1ba5f9 > 0) {
          let _0x146213 = Math.min(_0x1ba5f9, _0x5239a9);
          await this.wait(_0x146213);
          _0x469794 = Date.now();
          _0x1ba5f9 = _0x368cc8 - _0x469794;
        }
        const _0x3b35b8 = {
          time: true
        };
        _0x1ff688.log("已完成等待", _0x3b35b8);
      }
    }
    async wait_gap_interval(_0x18a2c1, _0x187a8c) {
      let _0x57b43e = Date.now() - _0x18a2c1;
      _0x57b43e < _0x187a8c && (await this.wait(_0x187a8c - _0x57b43e));
    }
  }(_0x5f5a34);
}