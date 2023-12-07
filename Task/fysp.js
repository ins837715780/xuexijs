
/*
枫以视频

export soy_fysp_data='usr&zyeid'

定时最快一小时跑一次,当然你直接几分钟也可以,看你自己阅读设置时长
*/
//阅读时长,默认3600秒
const read_t = '3600'

const $ = new Env("枫以视频")
const notify = $.isNode() ? require('./sendNotify.js') : '';
//通知控制,1发送, 0不发送
const get_msg = 1

//延时为区域性取随机,如要2-3秒没随机,开始填2,结束填3,结束要比开始大或相等
//全局延时 开始 单位秒
let ys_s = '2'
//全局延时 结束 单位秒
let ys_e = '3'
//是否并发,并发填 true 不并发填 false
let Concurrency = false
//提现,支付宝=zfb,微信=wx,默认支付宝
let tx_ype = 'wx'

const variable = "soy_fysp_data";
try {
  CryptoJS = $.isNode() ? require("crypto-js") : "";
} catch (err) {
  throw new Error("\n找不到依赖 crypto-js ,请自行安装\n");
}
try {
  axios = $.isNode() ? require("axios") : "";
} catch (err) {
  throw new Error("\n找不到依赖 axios ,请自行安装\n");
}
try {
  fs = $.isNode() ? require("fs") : "";
} catch (_err) {
  throw new Error("\n找不到依赖 fs ,请自行安装\n");
}
try {
  os = $.isNode() ? require("os") : "";
} catch (err) {
  throw new Error("\n找不到依赖 OS ,请自行安装\n");
}

// 重置 subTitle 为空字符串
subTitle = "";

// 定义异步主函数
async function main(userInstance) {
  // 调用用户实例的 ids() 方法和 account() 方法
  await userInstance.ids();
  await userInstance.account();
}

// 定义 UserInfo 类

class UserInfo {
  // 构造函数，接收两个参数
  constructor(_0x4332cb, _0x52ec6c) {
    try {
      // 设置账号序号
      this.num = _0x4332cb + 1;
      // 解析用户数据并设置 uid 和 token
      this.token = _0x52ec6c.split("&")[1];
      this.uid = _0x52ec6c.split("&")[0];
    } catch (err) {
      console.log(err);
    }
  }


    async ["get_draw"](){
    await Sleep_time(ys_s, ys_e);
    this.time = new Date().getTime();
    this.url = "task_api/task/draw_gift";
    this.body = "act_id=act_e80ba223&task_id=" + this.task_id + "&sub_task_id=" + this.sub_task + "&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&p34=navigationbar_is_min&usr=" + this.uid + "&zyeid=" + this.token;
    let requestData = this.req_data(1);
    return new Promise(resolve => {
      $.post(requestData, async(err, resp, data) => {
        try {
          if (err) console.log("账号 " + this.num + " " + this.task_name + ":返回 " + err);
          else {
            var data = JSON.parse(data);
            data.code == 0 ? console.log("账号 " + this.num + " " + this.task_name + ":获得" + data.body.gift_info[0].amount + "金币") : console.log("账号 " + this.num + " " + this.task_name + ":" + data.msg);
          }
        } catch (e) {} finally {
          resolve();
        }
      });
    });
  }

  async ["report"]() {
    // 随机等待一段时间
    await Sleep_time(ys_s, ys_e);
    // 获取当前时间、API端点和请求体
    this.time = new Date().getTime();
    this.url = "reading/duration/report";
    this.body = `app_id=zy3d1ef1&date_info=[{"book_id":"${this.book_id}","date":"${Format_time()}","res_type":"watch","second":${read_t}}]&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=navigationbar_is_min&timestamp=${this.time - 5}&user_name=${this.uid}&usr=${this.uid}&zyeid=${this.token}`;

    // 准备请求数据z
    let requestData = this.req_data(1);

    // 发起异步的POST请求
    return new Promise(resolve => {
      $.post(requestData, async(err, resp, data) => {
        try {
          if (err) {
            console.log(`账号 ${this.num} 看视频: 返回 ${err}`);
     
          } else {
            var parsedData = JSON.parse(data);
            parsedData.code === 0 ? console.log(`账号 ${this.num} 看视频: 成功观看<<${this.book_name}>>视频 ${read_t}秒`) : console.log(`账号 ${this.num} 看视频: ${parsedData.msg}`);
          }
        } catch (e) {
          // 处理异常
        } finally {
          resolve();
        }
      });
    });
  }

  async ["withdraw"]() {
    // 随机等待一段时间
    await Sleep_time(ys_s, ys_e);

    // 根据提现类型设置支付方式
    let withdrawalType = "";
    tx_ype == "zfb" ? withdrawalType = "alipay" : withdrawalType = "wechat";

    // 获取当前时间、API端点和请求体
    this.time = new Date().getTime();
    this.url = "tv_welfare/gold/withdraw/exec";
    this.body = `type=${withdrawalType}&amount=1&sub_id=266&gold_type=3&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=navigationbar_is_min&usr=${this.uid}&zyeid=${this.token}`;

    // 准备请求数据
    let requestData = this.req_data(1);

    // 发起异步的POST请求
    return new Promise(resolve => {
      $.post(requestData, async(err, resp, data) => {
        try {
          console.log(data);
          if (err) {
            console.log(`账号 ${this.num} 提现: 返回 ${err}`);
             $.msg(`账号 ${this.num} 提现: 返回 ${err}`);
          } else {
            var parsedData = JSON.parse(data);
            parsedData.code === 0 ? console.log(`账号 ${this.num} 提现: 成功`) : console.log(`账号 ${this.num} 提现: ${parsedData.msg}`);
          }
        } catch (e) {
          // 处理异常
        } finally {
          resolve();
        }
      });
    });
  }

  async ["ids"]() {
    // 随机等待一段时间
    await Sleep_time(ys_s, ys_e);

    // 获取当前时间、API端点和请求体
    this.time = new Date().getTime();
    this.url = "task_api/task/list/by_act_ids";
    this.body = `?act_ids=act_a0a1f9d9,act_e80ba223&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=${this.uid}&zyeid=${this.token}`;
    this.sign_url = `&act_ids=act_a0a1f9d9,act_e80ba223&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=${this.uid}&zyeid=${this.token}&/task_api/task/list/by_act_ids&${this.time}`;

    // 准备请求数据
    let requestData = this.req_data(0);

    // 发起异步的GET请求
    return new Promise(resolve => {
      $.get(requestData, async(err, resp, data) => {
        try {
          if (err) {
            console.log(`账号 ${this.num} 签到状态: 返回 ${err}`);
          } else {
            var parsedData = JSON.parse(data);
            if (parsedData.code === 0) {
              for (let task of parsedData.body.act_e80ba223.task_list) {
                // 处理任务 "task_a2cdf5f5"
                if (task.id === "task_a2cdf5f5" && task.reward_status === "un_reward") {
                  this.task_name = task.title;
                  this.task_id = task.id;
                  for (let subTask of task.sub_task_list) {
                    if (subTask.reward_status === "un_reward") {
                      this.sub_task = subTask.id;
                      await this.get_draw();
                      break;
                    }
                  }
                }

                // 处理任务 "task_acab7244"
                if (task.id === "task_acab7244" && task.reward_status === "un_reward") {
                  this.task_name = task.title;
                  this.task_id = task.id;
                  for (let subTask of task.sub_task_list) {
                    if (subTask.reward_status === "un_reward") {
                      this.sub_task = subTask.id;
                      this.book_id = subTask.tv_series.id;
                      this.book_name = subTask.tv_series.name;
                      await this.report();
                      break;
                    }
                  }
                }

                // 根据任务ID处理不同的任务
                if (task.id === "task_83421a92" || task.id === "task_089ca861" || task.id === "task_0288417f" || task.id === "task_016a2b13") {
                  // 如果任务不能领取奖励，则处理...
                  if (task.reward_status === "can_not_reward") {
                    // 可添加对任务的处理逻辑
                  }
                }

                // 根据任务ID处理不同的任务
                if (task.id === "task_122addf6") {
                  // 如果任务奖励状态为未领取，则处理...
                  if (task.reward_status === "un_reward") {
                    // 重置子任务和书籍信息，然后调用报告函数
                    this.sub_task = "";
                    this.book_name = "中国式离婚";
                    this.book_id = "527";
                    await this.report();

                    // 遍历子任务列表
                    for (let subTaskId in task.sub_task_list) {
                      // 如果子任务奖励状态为未领取，则处理...
                      if (task.sub_task_list[subTaskId].reward_status === "un_reward") {
                        // 设置任务ID并调用获取奖励函数
                        this.task_id = task.id;
                        this.task_name = task.sub_task_list[subTaskId].gift_info[0].name;
                        this.sub_task = task.sub_task_list[subTaskId].id;
                        await this.get_draw();
                      }
                    }
                  }
                }

                // 根据任务ID处理特定任务
                if (task.id === "task_d8ad3326") {
                  this.task_name=task.title;
                  // 如果上次奖励时间早于当前时间，则处理...
                  if (task.reward_last_draw_time < this.time) {
                    // 重置子任务和任务ID，然后调用获取奖励函数
                    this.sub_task = "";
                    this.task_id = task.id;
                    await this.get_draw();
                  }  
                }
//task.id == "task_d8ad3326"&&(this.task_name=task.title,task.reward_last_draw_time < this.time && (this.sub_task = "",this.task_id = task.id,await this.get_draw()))
              
              
              }
            } else {
              console.log(`账号 ${this.num} 任务状态: ${parsedData.msg}`);
            }
          }
        } catch (e) {
          // 处理异常
        } finally {
          resolve();
        }
      });
    });
  }

  async ["account"]() {
    // 随机等待一段时间
    await Sleep_time(ys_s, ys_e);

    // 获取当前时间、API端点和请求体
    this.time = new Date().getTime();
    this.url = "tv_welfare/gold/user/gold_account";
    this.body = `?gold_type=3&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=${this.uid}&zyeid=${this.token}`;
    this.sign_url = `&gold_type=3&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=${this.uid}&zyeid=${this.token}&/tv_welfare/gold/user/gold_account&${this.time}`;

    // 准备请求数据
    let requestData = this.req_data(0);

    // 发起异步的GET请求
    return new Promise(resolve => {
      $.get(requestData, async(err, resp, data) => {
        try {
          if (err) {
            console.log(`账号 ${this.num} 用户状态: 返回 ${err}`);
          } else {
            var parsedData = JSON.parse(data);
            if (parsedData.code === 0) {
              console.log(`账号 ${this.num} 用户状态: 当前金币:${parsedData.body.total_gold_num} || 余额:${parsedData.body.total_rmb}`);
              if (parsedData.body.total_rmb >= 1) {
                await this.withdraw();
              }
            } else {
              console.log(`账号 ${this.num} 用户状态: ${parsedData.msg}`);
            }
          }
        } catch (e) {
          // 处理异常
        } finally {
          resolve();
        }
      });
    });
  }

  async ["exec"]() {
    // 随机等待一段时间
    await Sleep_time(ys_s, ys_e);

    // 获取当前时间、API端点和请求体
    this.time = new Date().getTime();
    this.url = "tv_welfare/gold/withdraw/exec";
    this.body = `?type=alipay&amount=1&sub_id=266&gold_type=3&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=${this.uid}&zyeid=${this.token}`;
    this.sign_url = `&type=alipay&amount=1&sub_id=266&gold_type=3&p29=zy3d1ef1&p33=com.app.fengyiFree&p34=force_fsg_nav_bar&usr=${this.uid}&zyeid=${this.token}&/tv_welfare/gold/user/gold_account&${this.time}`;

    // 准备请求数据
    let requestData = this.req_data(0);

    // 发起异步的GET请求
    return new Promise(resolve => {
      $.get(requestData, async(err, resp, data) => {
        try {
          if (err) {
            console.log(`账号 ${this.num} 提现: 返回 ${err}`);
          } else {
            var parsedData = JSON.parse(data);
            parsedData.code === 0 ? console.log(`账号 ${this.num} 提现: 成功`) : console.log(`账号 ${this.num} 提现: ${parsedData.msg}`);
          }
        } catch (e) {
          // 处理异常
        } finally {
          resolve();
        }
      });
    });
  }

  ["req_data"](_0x4cce38) {
    if (_0x4cce38 == 1) {
      return {
        "url": "https://tv.palmestore.com/" + this.url,
        "headers": {
          "Host": "tv.palmestore.com",
          "Connection": "keep-alive",
          "Content-Length": this.body.length,
          "Pragma": "no-cache",
          "Cache-Control": "no-cache",
          "Accept": "application/json, text/plain, */*",
          "X-SIG-Timestamp": this.time,
          "X-AppId": "zy3d1ef1",
          "X-SIG-Sign": "" + this.RSA_sha256(this.body + "&&/" + this.url + "&" + this.time),
          "X-SIG-Alg": "RSA-SHA256",
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 23049RAD8C Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
          "Content-Type": "application/x-www-form-urlencoded",
          "Origin": "https://fe.zhangyue.com",
          "X-Requested-With": "com.app.fengyiFree",
          "Sec-Fetch-Site": "cross-site",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Referer": "https://fe.zhangyue.com/"
        },
        "body": this.body
      };
    } else return {
      "url": "https://tv.palmestore.com/" + this.url + this.body,
      "headers": {
        "Host": "tv.palmestore.com",
        "Connection": "keep-alive",
        "Content-Length": "0",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "Accept": "application/json, text/plain, */*",
        "X-SIG-Timestamp": this.time,
        "X-AppId": "zy3d1ef1",
        "X-SIG-Sign": this.RSA_sha256(this.sign_url),
        "X-SIG-Alg": "RSA-SHA256",
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; 23049RAD8C Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
        "Origin": "https://fe.zhangyue.com",
        "X-Requested-With": "com.app.fengyiFree",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty"
      }
    };
  }

  ["RSA_sha256"](message) {
    const {
      KJUR,
      hextob64
    } = require("jsrsasign");
    let pem = "-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZo0B6v3MzB5EIQNXdKui3nQqZg39mGHFHk96/iRyEydN6AUJBHhS3UQ1H7obpJOdToo4SyRf9dANYjh30ZNnJ7tJ3Pe+iWBbCXgCTxQhcbjQHCKvC4EkbaooRZqaF9Ki+jHI/xEbKHzHMaW0FNoJhHHp7LV2UrLHvYYS7947OUpIMhv0npYim4ET1nKbrKdeggkszq/m2M9B349Pf3ao07XyPypjdUaJtOFtI8pJJk1qwJKeYQC2fAa3y8HzL6QRgXeG12ngw8Si5V3sKsAQLjFaGC5jBdlertCxbYlAtJBfIV0ZdUWjrhPh7c+TQodF+3xEwnjwLip45HoK8FRDtAgMBAAECggEAKM2ZpinEsFmH0HNPZVLJJLuVpChqNzr36gKILYLITQEF3AbmZAz+t0vD4KuQsZ9Qm3aLimwXSlZ41h528T4DMv/Kh76d8eLwCWrUUuAK7EFhEbyHb1bbff9geVi0ecLf7DGqrdffqb9ld7yASwzoLsrHD9b2h4xFI+s1loQYSwgJhR7lljt+/ESNylUVpKDuCnOsMcjBquEScBHo5m4PhZE+BtpiRdoU+6ig9OgrnQoMO8ioR0p4J5bjlLgt9dat/bn7SOk3iQD/dACG0GnZOZJUtJ97RkYjAi/convpl60oibm2XKV/WqGZYlvCO2PVdi28iyUcN+LM1ie23KfTBQKBgQDtsKc36mKpS5CD1kDdnth+ye1dLZZh9sJtCKEpVFoseOgpbG8mKhrxpeOaDlp8RV88plMclvIQEesJlaAd1nn5JfcXNhB676t+ERfexwRebDfzl91wmySAs8Af0wnX9oRnwyb28xz2kvGQ8H+102HeCQ4b+I6kONkQFQzhhIwaiwKBgQDqZyhy+tu2tmQb5zCd3PFN7vxMuvRJ+m6sWrBiUt0v3GHskLYz61CiMxO8l6QDfV3IHkKNBvTpUQUobNH4szTq7OVSaIbUJJI50JCO7mEAqab4gYrlS5BsGVVvgzrHL8uKdQajagqGzaYX2YUO28mRyQxNRTG2mLA/mAEbcsaJZwKBgHw1/Kyzx6tA2dyLcopeIDThwTEYSaYYFbJ0+ANpGVZ0OJ6tE8iV6E6vqikvpwmaFxLSuEwQdZ8APhtcHbh6BHO261Et557W8H+I3ziEODw/wV2C1y2pZYH8bUI0PsilArxWt14F3fTdBXAAvjx+on4trTngwmn/ay+EUJ7pbW3RAoGBANH5dKeDBlynCAhi0g8nw1Uvtvy5IGpAlvF4D7cUSaU9As9aVo0txz51CMIRCNBDdkX0rWMNj0iN1lP/Hxxs1AN6EHcAwX65/+8gYM5YxbZFQxgrWxPJ2+apzvmkkXuq2eb+q+Ko9CMLhzSoGuRTiD463fU9/al3H7Ln5F4FM8oTAoGAcxDGaSUJ9Y+j/k+O3464gzbQ0I6R8TcD+efDK0rm7oDKssRsYasMEUoh/+MgrPlCTsgcuIaiD7EzNHozYioEOb78iBqhzNQN3BYtNvYdKhFS7hmNVuWlIIvPGZtrkQYRZG45W5weydCdVX2ZejUuqBObiFjIyhHW8uqCUJsrp+U=-----END PRIVATE KEY-----",
      RSA = new KJUR.crypto.Signature({
        "alg": "SHA256withRSA",
        "prvkeypem": pem
      });
    RSA.updateString(message);
    var signature = RSA.sign();
    return hextob64(signature);
  }
}

// 异步自执行函数
!(async() => {
  // 输出脚本免责声明
  console.log("\n【本脚本文件免责声明】：\n【此脚本文件仅用于测试和学习，使用测试脚本行为均有封号风险。不能保证其合法性、准确性、完整性和有效性，作者本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。】\n【本脚本文件，只有在作者TG频道、TG群以及仓库分享，从未在其他地方分享，包括但不限于任何公众号、论坛、群体以及任何形式的转载、发布，任何人请勿将脚本文件用于包括但不限于商业、非法目的甚至解密等行为，否则后果自负】");

  // 获取用户信息数组
  let userArray = await getUsers(variable, async(index, userCredentials) => {
    // 创建用户信息对象
    let userInfo = new UserInfo(index, userCredentials);
    return userInfo;
  });

  // 根据并发情况执行主函数
  if (Concurrency) {
    // 并发执行，使用 Promise.all 同时处理所有用户
    let promiseList = [];
    userArray.forEach(async(user) => {
      promiseList.push(main(user));
    });
    await Promise.all(promiseList);
  } else {
    // 顺序执行
    for (let user of userArray) {
      await main(user);
    }
  }

  // 根据条件发送通知
  if (get_msg == 1) {
    // 判断 notify 和 subTitle 是否存在，存在则发送通知
    notify && subTitle && (await notify.sendNotify($.name, subTitle));
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
  let envValue = process.env[envVarName];

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
  console.log("\n=== 脚本执行 - 北京时间：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 480 * 60 * 1000).toLocaleString() + " ===");
  (console.log("\n===【共 " + user_num + " 个账号】==="), !0);

  // 返回用户信息数组
  return userArray;
}

function getnum(length) {
  const validDigits = "123456789";
  console.log(validDigits.length);
  let randomNumberString = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.ceil(Math.random() * validDigits.length - 1);
    randomNumberString += validDigits[randomIndex];
  }

  return randomNumberString;
}

function getstr(length) {
  const validCharacters = "qwertyuiopasdfghjklzxcvb1234567890";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    // 生成一个随机字符的索引
    let randomCharIndex = Math.ceil(Math.random() * validCharacters.length - 1);
    // 将随机字符添加到字符串中
    randomString += validCharacters[randomCharIndex];
  }
  return randomString;
}
//延时
async function Sleep_time(min, max) {
  //return Math.floor(Math.random() * (max - min + 1)) + min;
  await $.wait(Math.floor(Math.random() * (max * 1000 - min * 1000 + 1)) + min * 1000)
}
async function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function Format_time() {
  var currentDate = new Date(new Date().getTime());
  // 获取年份
  var year = currentDate.getFullYear() + "-";

  // 获取月份，注意月份从0开始，需要加1。 0表示一月，1表示二月。判断当前月份是否小于10，小于10则前面补0，如9月，则mouth=09。 
  var month = (currentDate.getMonth() + 1 < 10 ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1) + "-";

  // 获取日期
  var day = currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate();

  // 拼接年月日
  let formattedTime = year + month + day;
  return formattedTime;
}

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
