
/*
云游世界:https://yy.pattin.top/h5/#/download?user_code=1950957

奖券世界盘,自己想玩就玩
不回收云币,只反会员拥金

只有跑购买和合成,其他不跑

变量抓包地址:yy.pattin.top
需要数据,链接上token_key和token_value

变量名:soy_jxhb_data
变量值:token_key&token_value

青龙/系统设置/应用设置 创建一个权限为 系统信息 的应用
变量名:soy_qlxt_data
变量值:青龙ip带端口&应用Client ID&应用Client Secret&TG频道的用户id(@getmyid_bot 机器人可获得)

普通用户只能上5个号,vip不限制(暂不开放),之前已正常过的未同步

验证绑定青龙面板版本号,请勿随意更新版本

*/



const $ = new Env('惊喜');
const author = '作者TG_ID:@ls_soy';
const notify = $.isNode() ? require('./sendNotify') : '';
// 通知控制,1发送, 0不发送
const get_msg = 0



try {
	CryptoJs = $.isNode() ? require('crypto-js') : '';
} catch (err) {
	throw new Error("\n找不到依赖 crypto-js ,请自行安装\n");
}
try {
	axios = $.isNode() ? require('axios') : '';
} catch (err) {
	throw new Error("\n找不到依赖 axios ,请自行安装\n");
}
try {
	fs = $.isNode() ? require('fs') : '';
} catch (err) {
	throw new Error("\n找不到依赖 fs ,请自行安装\n");
}
try {
	os = $.isNode() ? require('os') : '';
} catch (err) {
	throw new Error("\n找不到依赖 OS ,请自行安装\n");
}
try {
	WebSocket = $.isNode() ? require("ws") : '';
} catch (err) {
	throw new Error("\n找不到依赖 ws ,请自行安装\n");
}


let subTitle = '', user_num = 0, execAcList = [], user_data = '', app_sj = false
let ql_version = '', TG_id = '', ql_path = __dirname, qlxt = '', yyz_token = '', yyz_vip = false, yyz_id = '', s_time = ''

let app_v = '3.7'


//=======================================================
//=======================================================


!(async () => {
    
    console.log(`\n【soy脚本文件免责声明】：\n【此脚本文件仅用于测试和学习，使用测试脚本行为均有封号风险。不能保证其合法性、准确性、完整性和有效性，作者本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。】\n【本脚本文件，只有在作者TG频道、TG群以及仓库分享，从未在其他地方分享，包括但不限于任何公众号、论坛、群体以及任何形式的转载、发布，任何人请勿将脚本文件用于包括但不限于商业、非法目的甚至解密等行为，否则后果自负】`);
    if ($.isNode()) {
        try {
            Tips = author.match(/(\S*)TG_ID:@ls_soy/)[1];
        } catch (err) {
            throw new Error(`\n【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\n`);
        }
        
        
           if (process.env.soy_jxhb_data && process.env.soy_jxhb_data.indexOf('@') > -1) {
               user_data = process.env.soy_jxhb_data.split('@');
               
           } else if (process.env.soy_jxhb_data && process.env.soy_jxhb_data.indexOf('\n') > -1) {
               user_data = process.env.soy_jxhb_data.split('\n');
               
           } else if(process.env.soy_jxhb_data && process.env.soy_jxhb_data.indexOf('#') > -1){
               user_data = process.env.soy_jxhb_data.split('#');
               
           }else{
               user_data = process.env.soy_jxhb_data.split();
               
           };
           user_num = user_data.length; 
            
        
        
        
        
        
        console.log(`\n=== 脚本执行 - 北京时间：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString()} ===`);
        //user_num = 2
        //await get_version()
        console.log(`\n===【共 ${user_num} 个账号】===`);
        subTitle = '';
        await get_zu()
        
        
    }else{
        console.log(`\n【脚本提示】：此脚本只能青龙环境跑`);
        return;
        
    }
    
})()
.catch((e) => $.logErr(e))
.finally(() => $.done());



//并发配置
async function get_zu(){
    let idx=0
    let acList = []
    for(let num=0;num<user_num;num++){
        acList.push({
            num:num+1,
            token:user_data[num].split('&')[0],
    })}
    acList.forEach((o, i) => {
        if (execAcList[idx]) {
            execAcList[idx].push(o)
        } else {
            execAcList[idx] = [o]
        }
    })//再次合成一个数组
    await implement()
}

async function implement(){
    let msgInfo = []
    if(execAcList.length > 0){
        for (let arr of execAcList) {
            await Promise.all(arr.map((ac) => start(ac)))
            
        }
        
        if(get_msg){
            if(notify){if(subTitle){await notify.sendNotify($.name, subTitle)}}
        }
        
    }else{
        console.log(`\n【脚本提示】：没有获取到账号数据`);
    }
    
}

//开始
async function start(user_list) {
    await get_red(user_list)
    
};

async function get_red(user_list) {
    return new Promise(async (resolve) => {
        let ws = new WebSocket('ws://110.41.186.42:9502/socket.io/?EIO=3&transport=websocket')
        /*ws.on('open', async () => {
	        ws.send(`{"type":30,"member_id":${user_list.name_id},"secret":"${secret}","token_key":"${user_list.ley}","token_value":"${user_list.token}"}`)
	    })*/
	    ws.on('message', async (msg) => {
	        if(msg.indexOf('redId')>=0){
	            ws.close()
	            var result = JSON.parse(msg.substring(2))
	            var result = JSON.parse(result[1])
	            //console.log(result.red.redId)
	            user_list.redId = result.red.redId
	            await redPrepare(user_list)
	        }else{
	            await Sleep_time(3,5)
	        }
	        
	        /*try {
	            let result = JSON.parse(msg)
	            console.log(result)
	            ws.close()
	        } catch (err) {
	            console.log(`\n【${Tips}提示---账号 ${user_list.num} 红包列表】:获取失败`)
	            ws.close()
	        }*/
	    })
    })
    
}
//红包状态
async function redPrepare(user_list) {
    await Sleep_time(2,5)
    let time = Math.round(new Date().getTime() / 1000).toString() ////Math.round(new Date().getTime() / 1000).toString()
    let sign = CryptoJs.MD5(`jxhb123.cn~~&redId${user_list.redId}sBoxId0ver1.1.3jxhb123.cn~~&`).toString().toUpperCase()
    let body = `sBoxId=0&ver=1.1.3&sign=${sign}&redId=${user_list.redId}`//&category_id=1
	return new Promise((resolve) => {
	    let url= {
	        url: `https://api.jxhb123.cn/api/Red/redPrepare`,
	        headers: {"Host": "api.jxhb123.cn","authorization": "Bearer "+user_list.token,"content-type": "application/x-www-form-urlencoded","content-length": body.length,"accept-encoding": "gzip","user-agent": "okhttp/3.12.12"},
	        body:body
	    };
	    //console.log(url)
		$.post(url, async (err, resp, data) => {
			try {
			    console.log(data)
			    if(err){
			        console.log(`\n【${Tips}提示---账号 ${user_list.num} 红包状态】: 返回 ${err}`)
			        subTitle+=`\n【${Tips}提示---账号 ${user_list.num} 红包状态】: 返回 ${err}`
			    }else{
			        var result = JSON.parse(data)
			        if(result.code == 1){
			            //await Sleep_time(30,60)
			            //await grab(user_list)
			        }else{
			            console.log(`\n【${Tips}提示---账号 ${user_list.num} 红包状态】: ${result.msg}`)
			            //subTitle+=`\n【${Tips}提示---账号 ${user_list.num} 离线状态】: ${result.message}`
			        }
			        
			        
			    }
			    
			} catch (e) {} finally {
				resolve(user_list);
			};
		});
	});
};
//开红包
async function grab(user_list) {
    await Sleep_time(2,5)
    let time = Math.round(new Date().getTime() / 1000).toString() ////Math.round(new Date().getTime() / 1000).toString()
    
    let body = `isClick=0&ver=1.1.3&redId=${user_list.redId}`
	return new Promise((resolve) => {
	    let url= {
	        url: `https://api.jxhb123.cn/api/Red/grab`,
	        headers: {"Host": "api.jxhb123.cn","authorization": "Bearer "+user_list.token,"content-type": "application/x-www-form-urlencoded","content-length": body.length,"accept-encoding": "gzip","user-agent": "okhttp/3.12.12"},
	        body:body
	    };
	    //console.log(url)
		$.post(url, async (err, resp, data) => {
			try {
			    console.log(data)
			    if(err){
			        console.log(`\n【${Tips}提示---账号 ${user_list.num} 开红包】: 返回 ${err}`)
			        subTitle+=`\n【${Tips}提示---账号 ${user_list.num} 开红包】: 返回 ${err}`
			    }else{
			        var result = JSON.parse(data)
			        if(result.code == 1){
			            console.log(`\n【${Tips}提示---账号 ${user_list.num} 开红包】: ${result.data.tip},${result.data.tip2}`)
			            await Sleep_time(180,300)
			            await get_red(user_list)
			        }else{
			            console.log(`\n【${Tips}提示---账号 ${user_list.num} 开红包】: ${result.msg}`)
			            //subTitle+=`\n【${Tips}提示---账号 ${user_list.num} 离线状态】: ${result.message}`
			        }
			        
			        
			    }
			    
			} catch (e) {} finally {
				resolve(user_list);
			};
		});
	});
};


function get_Encryption(t) {
    var e = {},
    n = "";
    return Object.keys(t).sort().map((function (n) {
        e[n] = t[n]
        
    })),
    Object.keys(e).map((function (t) {
        n += t + "=" + e[t] + "&"
        
    })),
    n = n.substring(0, n.length - 1)
}
function p(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? d(Object(n), !0).forEach((function (e) {
            (0, r.default)(t, e, n[e])
            
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            
        }))
        
    }
    return t
    
}




/*function decrypt(message) {
    let keyHex = CryptoJs.enc.Utf8.parse(key);
    let ivHex = CryptoJs.enc.Utf8.parse(iv);
    let encryptedHexStr = CryptoJs.enc.Base64.parse(message);
    let srcs = CryptoJs.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJs.AES.decrypt(srcs, keyHex, {mode: CryptoJs.mode.ECB, padding: CryptoJs.pad.Pkcs7 });
    //console.log(decrypt.toString(CryptoJs.enc.Utf8).toString())
    return decrypt.toString(CryptoJs.enc.Utf8).toString()
}*/


//遮挡中间
function phone_num(phone_num) {
    //console.log(phone_num)
    //console.log(phone_num.Substring(phone_num.Length - 2, 2))
	if (phone_num) {
		let data = phone_num.replace(/(\d{2})(\S*)(\d{1})/, "$1***$3").toString();
		//console.log(data)
		return data;
	}else{
		return phone_num;
	}
}
//延时
async function Sleep_time(min, max) {
  //return Math.floor(Math.random() * (max - min + 1)) + min;
  await $.wait(Math.floor(Math.random() * (max * 1000 - min * 1000 + 1)) + min * 1000)
}
//取随机字符串
function getRandom(n) {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let iv = "";
    for(let R = 0; R < n ; R ++) {
        let R_id = Math.ceil(Math.random()*chars.length-1);
        iv += chars[R_id];
    }
    return iv;
}
function getnum(n) {
    let chars = '0123456789';
    let iv = "";
    for(let R = 0; R < n ; R ++) {
        let R_id = Math.ceil(Math.random()*chars.length-1);
        iv += chars[R_id];
    }
    return iv;
}




//时间戳转时间
function Format_time(timestamp){
    //num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss // timestamp:时间戳
    //将时间戳转换成正常时间格式
    var date = new Date(timestamp*1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + "-";
    var M =(date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
    var D = date.getDate() + " ";
    var h = date.getHours() + ":";
    var m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
    var s = date.getSeconds();
    //console.log(Y + M + D + h + m + s)
    let t_time = Y + M + D + h + m + s;
    return Y + M + D + h + m + s;
}

//==============================================================================
//==============================================================================
//==============================================================================



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
