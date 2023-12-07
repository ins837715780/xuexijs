const klCookie=[
  {
      "ck":"udtauth3=f2f7bnR%2FO8pE3BRfw9KWNDCdf2BCtDzDZRUYHyXtWtSoiC2HVjB5hmkIbahiwggevr%2BcMrw0mOKiVCEM4kLIY9H%2BVC60%2FBW%2F4wytTk19fbfwIcJVUXtS34wye%2F%2Fh3%2FWeL9jrAeYqodYB%2FeDfSa5A1VLELvgQ%2FL7fnFNT9fKwb9U; PHPSESSID=00sbc8128m7ltgij99vvgi2pon",
      "企业微信机器人key":"5555",
      "名字":"青龙",
      "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2f) NetType/4G Language/zh_CN",
      "提现":[0]
  },
  {
      "ck":"PHPSESSID=nkafgkuas71cace9k7etr1o1r4; udtauth3=d7b94qa9Uvf8pdb5O7A0Z2scJW4YpB6Xnlcb7OibjEEuULkNJhjm2eEVuREQWaz5NqrTZmrl71bDFqEVYMg1lI2ZnSMQKOCwXsxVMDmuuxuDqZVWPYz65O6JHkbGvczQrTVkqfcMa2YfubKtfYD8mmWQGpQUeYb6Z7sl%2BYE3nYI",
      "企业微信机器人key":"5555",
      "名字":"青龙",
      "User-Agent":"Mozilla/5.0 (Linux; Android 13; hi6250 Build/TQ1A.230205.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/1110039 MMWEBSDK/20230805 MMWEBID/9600 MicroMessenger/8.0.42.2460(0x28002A58) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
      "提现":[0]
  },
];
const configData = JSON.parse(klCookie);

// 初始化任务列表
let taskList = ["MzA4MjI4NTMzOQ==", "MjM5NDM0ODYyMQ=="];



// 获取指定账号的请求地址
async function getUrl(accountIndex) {
  const requestData = {
    url: "https://m.cdcd.plus/entry/new_ld",
    headers: {
      "Accept": "*/*",
      "Accept-Language": "*",
      "Connection": "keep-alive",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": configData[accountIndex]["User-Agent"]
    }
  };
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.post(requestData, async (err, resp, data) => {
      try {
          var response = JSON.parse(data);
          configData[accountIndex].yemian = (response.status == 200 && response.data) ? response.data.jump : "";
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}


// 处理任务
async function processTask(accountIndex) {
  const requestData = {
    url: configData[accountIndex].yemian.split("/new")[0] + "/tuijian",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "*",
      "Host": configData[accountIndex].yemian.split("http://")[1].split("/new")[0],
      "Proxy-Connection": "keep-alive",
      "Referer": configData[accountIndex].yemian,
      "User-Agent": configData[accountIndex]["User-Agent"],
      "Cookie": configData[accountIndex].ck
    }
  };
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.get(requestData, async (err, resp, data) => {
      try {
          var response = JSON.parse(data);
          if (!response.data.code ) {
            await getTask(accountIndex);
          } else {
            console.log("账号检测不通过");
          }
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}


// 获取具体任务
async function getTask(accountIndex) {
  const requestData = {
    url: configData[accountIndex].yemian.split("/new")[0] + "/new/get_read_url",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "*",
      "Host": configData[accountIndex].yemian.split("http://")[1].split("/new")[0],
      "Proxy-Connection": "keep-alive",
      "Referer": configData[accountIndex].yemian,
      "User-Agent": configData[accountIndex]["User-Agent"],
      "Cookie": configData[accountIndex].ck
    }
  };
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.get(requestData, async (err, resp, data) => {
      try {
          var response = JSON.parse(data);
          configData[accountIndex].ui = (response.data && response.data.jump) ? response.data.jump : "";
          configData[accountIndex].ui ? await processGeck(accountIndex) : console.log("获取任务失败");
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}

// 处理具体任务
async function processGeck(accountIndex) {
  const requestData = {
    url: "" + configData[accountIndex].ui,
    headers: {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "Accept-Language": "*",
      "Host": configData[accountIndex].yemian.split("http://")[1].split("/new")[0],
      "Proxy-Connection": "keep-alive",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": configData[accountIndex]["User-Agent"]
    }
  };
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.get(requestData, async (err, resp, data) => {
      try {
          var response = JSON.parse(data);
          configData[accountIndex].cookie = response.headers["set-cookie"][0].split(";")[0];
          configData[accountIndex].cookie ? await startTask(accountIndex) : console.log("登录失败");
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}

// 开始执行任务
async function startTask(accountIndex, jkey = "") {
  const requestData = {
    url: configData[accountIndex].ui.split("/tuijian/")[0] + "/tuijian/do_read",
    params: {
      "for": "",
      "zs": "",
      "pageshow": "",
      "r": 1e-17 * (await getRandomNumber(90000000000000000, 100000000000000000)),
      "iu": configData[accountIndex].ui.split("?iu=")[1],
      "jkey": jkey
    },
    headers: {
      "Accept": "*/*",
      "Accept-Language": "*",
      "Host": configData[accountIndex].ui.split("http://")[1].split("/tuijian")[0],
      "Proxy-Connection": "keep-alive",
      "Referer": configData[accountIndex].ui,
      "User-Agent": configData[accountIndex]["User-Agent"],
      "X-Requested-With": "XMLHttpRequest",
      "Cookie": configData[accountIndex].cookie
    }
  };
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.get(requestData, async (err, resp, data) => {
      try {
          var response = JSON.parse(data);
          jkey ? console.log(response.data.success_msg) : "";

          if (response.data.success_msg == "本轮阅读已完成" || response.data.success_msg == "检测未通过" ) {
            console.log("阅读完毕或者检测未通过");
          } else {
            let taskUrl = response.data.url;
            let timestamp = await getTimestamp(taskUrl);
            console.log("微信任务", taskUrl);
        
            let bizId = taskUrl.split("__biz=")[1].split("&")[0];
            if (!jkey || taskList.includes(bizId) || timestamp < 1698595988) {
              await wait(60 * 1000, "等待检测文章");
            } else {
              await wait(await getRandomNumber(8000, 10000), "等待下次阅读");
            }
            await startTask(accountIndex, response.data.jkey);
          }
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}



// 获取随机数
async function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// 等待指定时间
async function wait(time, code = 0) {
  return code ? console.log("   🤷‍♀️代号【" + code + "】⌛⌛倒计时" + time + "🤷‍♂️")  : "", new Promise(resolve => setTimeout(resolve, time));
}



// 获取时间戳
async function getTimestamp(url) {
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.get(url, async (err, resp, data) => {
      try {
          var response = JSON.parse(data);
          return response.data.indexOf("var createTimestamp") !== -1
          ? Number(response.data.split("var createTimestamp = '")[1].split("';")[0])
          : 0;
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}



// 启动脚本
async function runScript() {
  if (!configData) {
    console.log("未设置");
    return;
  } else {
    console.log("\n========= 共找到 " + configData.length + " 个账号 ==========");
    await processAccounts(0);
  }
}

// 处理账号列表
async function processAccounts(accountIndex) {
  if (accountIndex < configData.length) {
    configData[accountIndex]["User-Agent"] =
      configData[accountIndex]["User-Agent"] ||
      "Mozilla/5.0 (Linux; Android 13; Mi 10 Pro Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5317 MMWEBSDK/20230701 MMWEBID/7524 MicroMessenger/8.0.40.2420(0x28002837) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64";

    await getUrl(accountIndex);
    if (configData[accountIndex].yemian) {
      await processTask(accountIndex);
    } else {
      console.log("去求吧！！！初始化识别，平台跑路了");
    }
    await processAccounts(accountIndex + 1);
  } else {
    console.log("运行完毕");
  }
}

// 执行脚本
runScript();
//封装函数
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}