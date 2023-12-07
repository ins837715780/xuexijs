
/*
可乐阅读

export klyd_data='cookie&User-Agent'

定时最快一小时跑一次，每天运行十次
*/
const $ = new Env("可乐阅读");
const variable = "klyd_data";

// 重置 subTitle 为空字符串
subTitle = "";

// 定义异步主函数
async function main(userInstance) {
  // 调用用户实例的 getUrl() 方法
  await userInstance.getUrl();

}

// 定义 UserInfo 类

class UserInfo {
  // 构造函数，接收两个参数
  constructor(index, userInfodata) {
    try {
      // 设置账号序号
      this.num = index + 1;
      // 解析用户数据并设置 ck 和 UA
      this.ck = userInfodata.split("&")[0];
      this.UA = userInfodata.split("&")[1];
    } catch (err) {
      console.log(err);
    }
  }

// 获取指定账号的请求地址
async getUrl(){
  const requestData = {
    url: "https://m.cdcd.plus/entry/new_ld",
    headers: {
      "Accept": "*/*",
      "Accept-Language": "*",
      "Connection": "keep-alive",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": this.UA
    }
  };
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.post(requestData, async (err, resp, data) => {
      try {
       // console.log(resp);
          var data = JSON.stringify(data);
          this.yemian = (resp.status == 200 && data) ? data.jump : "";
          if (this.yemian) {
           await this.processTask();
          } else {
            console.log("去求吧！！！初始化识别，平台跑路了");
          }
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}

// 处理任务
async  processTask() {
  const requestData = {
    url: this.yemian.split("/new")[0] + "/tuijian",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "*",
      "Host": this.yemian.split("http://")[1].split("/new")[0],
      "Proxy-Connection": "keep-alive",
      "Referer": this.yemian,
      "User-Agent": this.UA ,
      "Cookie": this.ck
    }
  };
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.get(requestData, async (err, resp, data) => {
      try {     
          var data = JSON.stringify(data);
          if (!data.code ) {
            await this.getTask();
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
async  getTask(accountIndex) {
  const requestData = {
    url: this.yemian.split("/new")[0] + "/new/get_read_url",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "*",
      "Host": this.yemian.split("http://")[1].split("/new")[0],
      "Proxy-Connection": "keep-alive",
      "Referer": this.yemian,
      "User-Agent": this.UA ,
      "Cookie": this.ck
    }
  };
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.get(requestData, async (err, resp, data) => {
      try {
          var data = JSON.stringify(data);
          this.ui = (data && data.jump) ? data.jump : "";
          this.ui ? await this.processGeck() : console.log("获取任务失败");
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}

// 处理具体任务
async  processGeck() {
  const requestData = {
    url: "" + this.ui,
    headers: {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "Accept-Language": "*",
      "Host": this.yemian.split("http://")[1].split("/new")[0],
      "Proxy-Connection": "keep-alive",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": this.UA
    }
  };
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.get(requestData, async (err, resp, data) => {
      try {
          this.cookie = resp.headers["set-cookie"][0].split(";")[0];
          this.cookie ? await this.startTask() : console.log("登录失败");
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}

// 开始执行任务
async  startTask( jkey = "") {
  const requestData = {
    url: this.ui.split("/tuijian/")[0] + "/tuijian/do_read",
    url: `${this.ui.split("/tuijian/")[0]}/tuijian/do_read` +
    `?for=&zs=&pageshow=&r=${1e-17 * (await getRandomNumber(90000000000000000, 100000000000000000))}` +
    `&iu=${this.ui.split("?iu=")[1]}&jkey=${jkey}`,
    headers: {
      "Accept": "*/*",
      "Accept-Language": "*",
      "Host": this.ui.split("http://")[1].split("/tuijian")[0],
      "Proxy-Connection": "keep-alive",
      "Referer": this.ui,
      "User-Agent": this.UA,
      "X-Requested-With": "XMLHttpRequest",
      "Cookie": this.cookie
    }
  };
  // 发起异步的POST请求
  return new Promise(resolve => {
    $.get(requestData, async (err, resp, data) => {
      try {
          var data = JSON.stringify(data);
          jkey ? console.log(data.success_msg) : "";

          if (data.success_msg == "本轮阅读已完成" || data.success_msg == "检测未通过" ) {
            console.log("阅读完毕或者检测未通过");
          } else {
            let taskUrl = data.url;
            let timestamp = await getTimestamp(taskUrl);
            console.log("微信任务", taskUrl);
        
            let bizId = taskUrl.split("__biz=")[1].split("&")[0];
            if (!jkey || taskList.includes(bizId) || timestamp < 1698595988) {
              await wait(60 * 1000, "等待检测文章");
            } else {
              await wait(await getRandomNumber(8000, 10000), "等待下次阅读");
            }
            await this.startTask(data.jkey);
          }
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}



}

// 异步自执行函数
!(async () => {
  // 输出脚本免责声明
  console.log(
    "\n【whoisbot脚本错误导致的任何损失或损害。】\n【本脚本文件，只有在作者TG频道、TG群以及仓库分享，从未在其他地方分享，包括但不限于任何公众号、论坛、群体以及任何形式的转载、发布，任何人请勿将脚本文件用于包括但不限于商业、非法目的甚至解密等行为，否则后果自负】"
  );

  // 获取用户信息数组
  let userArray = await getUsers(variable, async (index, userCredentials) => {
    // 创建用户信息对象
    let userInfo = new UserInfo(index, userCredentials);
    return userInfo;
  });


    for (let user of userArray) {
      await main(user);
    }
  


})()
  // 捕获异常并输出
  .catch(err => console.log(err))
  // 最终执行，无论成功或失败都会执行
  .finally(() => $.done());

/**
   * 获取用户信息
   *
    param {string} envVarName - 环境变量名称
    param {Function} callback - 回调函数
    returns {Array} - 包含用户信息的数组
   */

async function getUsers(envVarName, callback) {
  // 存储用户信息的数组
  let userArray = [];

  // 获取环境变量值
  let envValue = $.getdata(envVarName) ;

  // 定义分隔符数组
  let separators = ["\n", "#", "@"];

  // 检查环境变量是否存在
  if (envValue) {
    // 默认使用换行符作为分隔符
    let separator = separators[0];

    // 遍历分隔符数组，选择第一个在环境变量中出现的分隔符
    for (let sep of separators) {
      if (envValue.indexOf(sep) > -1) {
        separator = sep;
        break;
      }
    }

    // 使用选定的分隔符将环境变量值分割成数组
    let envArray = envValue.split(separator);

    // 遍历分割后的数组，依次调用回调函数获取用户信息
    for (let i = 0; i < envArray.length; i++) {
      const userInfo = envArray[i];
      userInfo && userArray.push(await callback(i, userInfo));
    }
  } else {
    // 输出未找到环境变量的消息
    console.log("\n未找到CK");
  }
  // 更新用户数量
  user_num = userArray.length;

  // 输出脚本执行信息
  console.log(
    "\n=== 脚本执行 - 北京时间：" +
      new Date(
        new Date().getTime() +
          new Date().getTimezoneOffset() * 60 * 1000 +
          480 * 60 * 1000
      ).toLocaleString() +
      " ==="
  );
  console.log("\n===【共 " + user_num + " 个账号】==="), !0;

  // 返回用户信息数组
  return userArray;
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
          var response = JSON.stringify(data);
          return response.data.indexOf("var createTimestamp") !== -1
          ? Number(response.data.split("var createTimestamp = ‘")[1].split("’;")[0])
          : 0;
      } catch (e) {
        // 处理异常
      } finally {
        resolve();
      }
    });
  });
}


//封装函数/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t =
        "string" == typeof t
          ? {
              url: t
            }
          : t;
      let s = this.get;
      return (
        "POST" === e && (s = this.post),
        new Promise((e, i) => {
          s.call(this, t, (t, s, r) => {
            t ? i(t) : e(s);
          });
        })
      );
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new (class {
    constructor(t, e) {
      (this.name = t),
        (this.http = new s(this)),
        (this.data = null),
        (this.dataFile = "box.dat"),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = "\n"),
        (this.startTime = new Date().getTime()),
        Object.assign(this, e),
        this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i)
        try {
          s = JSON.stringify(this.getdata(t));
        } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get(
          {
            url: t
          },
          (t, s, i) => e(i)
        );
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        (r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r);
        const [o, h] = i.split("@"),
          a = {
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
        this.post(a, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.stringify(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s
          ? this.fs.writeFileSync(t, r)
          : i
          ? this.fs.writeFileSync(e, r)
          : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t
        ? t
        : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []),
          (e
            .slice(0, -1)
            .reduce(
              (t, s, i) =>
                Object(t[s]) === t[s]
                  ? t[s]
                  : (t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}),
              t
            )[e[e.length - 1]] = s),
          t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r)
          try {
            const t = JSON.stringify(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? ("null" === o ? null : o || "{}") : "{}";
        try {
          const e = JSON.stringify(h);
          this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), i));
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), (s = this.setval(JSON.stringify(o), i));
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.read(t)
        : this.isQuanX()
        ? $prefs.valueForKey(t)
        : this.isNode()
        ? ((this.data = this.loaddata()), this.data[t])
        : (this.data && this.data[t]) || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.write(t, e)
        : this.isQuanX()
        ? $prefs.setValueForKey(t, e)
        : this.isNode()
        ? ((this.data = this.loaddata()),
          (this.data[e] = t),
          this.writedata(),
          !0)
        : (this.data && this.data[e]) || null;
    }
    initGotEnv(t) {
      (this.got = this.got ? this.got : require("got")),
        (this.cktough = this.cktough ? this.cktough : require("tough-cookie")),
        (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers ? t.headers : {}),
          void 0 === t.headers.Cookie &&
            void 0 === t.cookieJar &&
            (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers &&
        (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
        this.isSurge() || this.isLoon()
          ? (this.isSurge() &&
              this.isNeedRewrite &&
              ((t.headers = t.headers || {}),
              Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
              })),
            $httpClient.get(t, (t, s, i) => {
              !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
            }))
          : this.isQuanX()
          ? (this.isNeedRewrite &&
              ((t.opts = t.opts || {}),
              Object.assign(t.opts, {
                hints: !1
              })),
            $task.fetch(t).then(
              t => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(
                  null,
                  {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                  },
                  o
                );
              },
              t => e(t)
            ))
          : this.isNode() &&
            (this.initGotEnv(t),
            this.got(t)
              .on("redirect", (t, e) => {
                try {
                  if (t.headers["set-cookie"]) {
                    const s = t.headers["set-cookie"]
                      .map(this.cktough.Cookie.stringify)
                      .toString();
                    this.ckjar.setCookieSync(s, null),
                      (e.cookieJar = this.ckjar);
                  }
                } catch (t) {
                  this.logErr(t);
                }
              })
              .then(
                t => {
                  const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                  } = t;
                  e(
                    null,
                    {
                      status: s,
                      statusCode: i,
                      headers: r,
                      body: o
                    },
                    o
                  );
                },
                t => {
                  const { message: s, response: i } = t;
                  e(s, i, i && i.body);
                }
              ));
    }
    post(t, e = () => {}) {
      if (
        (t.body &&
          t.headers &&
          !t.headers["Content-Type"] &&
          (t.headers["Content-Type"] = "application/x-www-form-urlencoded"),
        t.headers && delete t.headers["Content-Length"],
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })),
          $httpClient.post(t, (t, s, i) => {
            !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
          });
      else if (this.isQuanX())
        (t.method = "POST"),
          this.isNeedRewrite &&
            ((t.opts = t.opts || {}),
            Object.assign(t.opts, {
              hints: !1
            })),
          $task.fetch(t).then(
            t => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(
                null,
                {
                  status: s,
                  statusCode: i,
                  headers: r,
                  body: o
                },
                o
              );
            },
            t => e(t)
          );
      else if (this.isNode()) {
        this.initGotEnv(t);
        const { url: s, ...i } = t;
        this.got.post(s, i).then(
          t => {
            const { statusCode: s, statusCode: i, headers: r, body: o } = t;
            e(
              null,
              {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              },
              o
            );
          },
          t => {
            const { message: s, response: i } = t;
            e(s, i, i && i.body);
          }
        );
      }
    }
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)
        ));
      for (let s in e)
        new RegExp("(" + s + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? e[s]
              : ("00" + e[s]).substr(("" + e[s]).length)
          ));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t)
          return this.isLoon()
            ? t
            : this.isQuanX()
            ? {
                "open-url": t
              }
            : this.isSurge()
            ? {
                url: t
              }
            : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      this.isMute ||
        (this.isSurge() || this.isLoon()
          ? $notification.post(e, s, i, o(r))
          : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = [
        "",
        "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="
      ];
      h.push(e),
        s && h.push(s),
        i && h.push(i),
        console.log(h.join("\n")),
        (this.logs = this.logs.concat(h));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]),
        console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s
        ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack)
        : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log(
        "",
        `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`
      ),
        this.log(),
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  })(t, e);
}
