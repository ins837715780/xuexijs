"ui";
(function () {
    let request = http.request;
    // 覆盖http关键函数request，其他http返回最终会调用这个函数
    http.request = function () {
        try {
            // 捕捉所有异常
            return request.apply(http, arguments);
        } catch (e) {
            // 出现异常返回null
          //console.error(e);
            return null;
        }
    }
})();
http.__okhttp__.setTimeout(30000);
importClass(android.view.View);
var scriptName = '红薯羹';
var version = '2.3.0';
var 全局延时 = 1000;
var themeColor = '#ed0a3f';
var scriptTitle = scriptName+' v'+version;
var 表情数组=["[微笑]","[害羞]","[击掌]","[左上]","[握手]","[V5]","[给力]","[爱心]","[心碎]","[惊讶]","[调皮]","[礼物]","[蛋糕]","[派对]","[不看]","[憨笑]","[悠闲]","[嘿哈]","[加好友]","[晕]","[囧]","[阴险]","[惊恐]","[难过]","[斜眼]","[左哼哼]","[右哼哼]","[咖啡]","[西瓜]","[衰]","[太阳]","[月亮]","[发]","[凋谢]","[红包]","[勾引]","[胜利]","[抱拳]","[弱]","[左边]","[右边]","[送心]","[机智]","[来看我]","[灵机一动]","[耶]","[捂脸]","[色]","[大笑]","[震惊]","[困]","[疑问]","[泣不成声]","[小鼓掌]","[大金牙]","[发呆]","[偷笑]","[石化]","[思考]","[吐血]","[可怜]","[嘘]","[撇嘴]","[尴尬]","[笑哭]","[生病]","[酷拽]","[奸笑]","[得意]","[坏笑]","[抓狂]","[泪奔]","[钱]","[亲亲]","[恐惧]","[愉快]","[玫瑰]","[快哭了]","[抠鼻]","[翻白眼]","[互粉]","[赞]","[鼓掌]","[感谢]","[嘴唇]","[666]","[胡瓜]","[流泪]","[啤酒]","[我想静静]","[委屈]","[舔屏]","[飞吻]","[再见]","[紫薇别走]","[听歌]","[绝望的凝视]","[不失礼貌的微笑]","[吐舌]","[呆无辜]","[看]","[吃瓜群众]","[呲牙]","[流汗]","[摸头]","[皱眉]","[擦汗]","[红脸]","[尬笑]","[做鬼脸]","[强]","[如花]","[睡]","[惊喜]","[奋斗]","[吐彩虹]","[大哭]","[比心]","[强壮]","[碰拳]","[OK]"];
var host = "http://103.149.90.230:16888/"//http://103.149.90.230:16888/
var 展开 = true;
var 点赞=私信=评论=赞评论=关注=留痕=计数=计次=0;
var 任务设置,是否关注,是否赞头像,是否赞评论,是否过滤,是否删除;
var 小红薯版本=getVersion("com.xingin.xhs");
var ks=false;
if(files.isFile("/sdcard/hsg/user")==false){
    files.createWithDirs("/sdcard/hsg/user");
    var user=device.getAndroidId();
    files.write("/sdcard/hsg/user",user);

}else{
    var user=files.read("/sdcard/hsg/user");
}
var list="";
var list_uid=[];
var 关键字数组=[];
if(files.isFile("/sdcard/hsg/list")==true){
    list=files.read("/sdcard/hsg/list");
}else{
    files.createWithDirs("/sdcard/hsg/list")
}
if(files.isFile("/sdcard/hsg/uid")==false){
    files.createWithDirs("/sdcard/hsg/uid")
}
var 采集数量=list.split("\n").length-1;
var 授权码,监控账号;
var token="";
var 配置文件 = "./params.json";  
if(files.isFile(配置文件)==false){
    let json = {
        "授权码":"",
        "任务设置":"一键挂机",
        "监控账号":"",
        "是否关注":false,
        "是否赞头像":true,
        "是否赞评论":false,
        "是否过滤":false,
        "是否删除":true,
        "关键字":"无偿#无常#免费带#掏钱",
        "全局延时":1000,
        "点赞":0,
        "私信":0,
        "评论":0,
        "赞评论":0,
        "关注":0,
        "留痕":0,
    }
    files.write(配置文件, JSON.stringify(json),"utf-8")
}
var params = JSON.parse(files.read(配置文件));
function getVersion(package_name){
    let  pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
    for(let i in pkgs){
        if(pkgs[i].packageName.toString() === package_name) {
            return  pkgs[i].versionName;
        }
    }
    return(null);
}
var ScriptUIAllStr = ScriptUI.toString()
var ScriptUIStr = ScriptUIAllStr.slice(ScriptUIAllStr.indexOf('{'),ScriptUIAllStr.lastIndexOf('}')).slice(1,-2).replace(/项目标题/g,scriptTitle).replace(/#4EBFDD/g,themeColor)
configIDArr = ScriptUIStr.match(/ id( )?=( )?["|'].*?["|']/g).map(item => item.replace(/ id( )?=( )?["|']|"|'/g,''))
ui.statusBarColor(themeColor);
ui.layout(ScriptUIStr);
function ScriptUI(){
    <vertical>
        <appbar>
            <toolbar bg="#4EBFDD" layout_height="70" margin="-2" id="toolbar" title="项目标题" />
        </appbar>
        <ScrollView>
            <vertical marginTop="5">
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" h="auto">
                        <linear>
                        <Switch id="无障碍服务" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
                        <Switch id="悬浮窗权限" text="悬浮窗权限" checked="{{floaty.checkPermission() != false}}" padding="8 8 8 8" textSize="15sp"/>
                        </linear>
                    </vertical>
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <horizontal padding="18 8" h="auto">
                        <text text="授权码:" marginLeft="5" textColor="black" w="auto" textStyle="bold" />
                        <input id="授权码" text="" color="#666666" paddingLeft="5" w="120" maxlength="9" />
                        <text text="  全局延时:" marginLeft="5" w="auto" textStyle="bold" textColor='black'/>
                        <input id="全局延时" text="1000" color="#666666" paddingLeft="5" w="60" maxlength="9"/>
                    </horizontal>
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" h="auto">
                    <text text="任务设置:"  marginLeft="5" w="auto" textStyle="bold" textColor='black' />
                        <horizontal>
                            <radio id="一键挂机" text="一键挂机" checked="false" padding="8 8 8 8" textSize="13sp" layout_weight="1"/>
                            <radio id="一键加群" text="一键加群" checked="false" padding="8 8 8 8" textSize="13sp" layout_weight="1"/>
                            <radio id="一键取关" text="一键取关" checked="false" padding="8 8 8 8" textSize="13sp" layout_weight="1" />
                        </horizontal>
                        <horizontal>
                            <radio id="主页采集" text="主页采集" checked="false" padding="8 8 8 8" textSize="13sp" layout_weight="1"/>
                            <radio id="群员采集" text="群员采集" checked="false" padding="8 8 8 8" textSize="13sp" layout_weight="1"/>                           
                            <radio id="粉丝采集" text="粉丝采集" checked="true" padding="8 8 8 8" textSize="13sp" layout_weight="1" />
                        </horizontal>
                        <horizontal>
                            <radio id="评论区艾特" text="评论区@" checked="false" padding="8 8 8 8" textSize="13sp" layout_weight="1" />
                            <radio id="发笔记艾特" text="发笔记@" checked="false" padding="8 8 8 8" textSize="13sp" layout_weight="1"/>
                            <checkbox id="是否删除" text="@后删除"  textColor="black" checked='false'/>
                        </horizontal>

                    </vertical>  
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" h="auto">
                        <horizontal>
                            <radio id="评论采集" text="评论采集" checked="false" padding="8 8 8 8" textSize="13sp" layout_weight="1" />
                            <checkbox id="是否过滤" text="过滤(多个关键字用#分割)"  textColor="black" checked='false'/>
                        </horizontal>
                        <horizontal>
                            <text text="关键字:"  textStyle="bold" textSize="15sp"/>
                            <input id="关键字" text="" color="#666666" w="*" textSize="15sp"/>
                        </horizontal>
                    </vertical> 
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" h="auto">
                        <text text="功能设置:(采集时同时操作)"  marginLeft="5" w="auto" textStyle="bold" textColor='black' />
                        <horizontal>
                            <checkbox id="是否关注" text="关注"  textColor="black" checked='false'/>
                            <checkbox id="是否赞头像" text="赞头像"  textColor="black" checked='false'/>
                            <checkbox id="是否赞评论" text="赞评论"  textColor="black" checked='false'/>
                        </horizontal>
                    </vertical> 
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" h="auto">
                        <horizontal>
                            <text text="监控账号:" marginLeft="5" w="auto" textStyle="bold" textColor='black'/>
                            <input id="监控账号" text="" color="#666666" paddingLeft="5" w="120" maxlength="9" />
                            <button id="startScript" text="保存配置" textSize="17" textStyle="bold" style="Widget.AppCompat.Button.Colored" foreground="?selectableItemBackground"/>
                        </horizontal>
                        <horizontal>
                            <text text="指定账号:" marginLeft="5" w="auto" textStyle="bold" textColor='black'/>
                            <input id="指定账号" text="" color="#666666" paddingLeft="5" w="120" maxlength="9"/>
                            <button id="删除指定账号" text="指定删除" textSize="17" textStyle="bold" style="Widget.AppCompat.Button.Colored"/>
                        </horizontal>
                        <horizontal>
                            <text text="已 采 集：" marginLeft="5" w="auto" textStyle="bold" textColor='black'/>
                            <input id="已采集" text="" color="#666666" paddingLeft="5" w="120" maxlength="9"/>
                            <button id="删除采集数据" text="全部删除" textSize="17" textStyle="bold" style="Widget.AppCompat.Button.Colored"/>
                        </horizontal>
                    </vertical> 
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>

                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" marginBottom="2" h="auto">
                        <text text="注意事项：物极必反欲速则不达" textSize="17sp" marginLeft="5" w="auto" textStyle="bold" textColor='red' />
                        <text text="红薯羹适合小号引流，每天评论@上限10次，发笔记@上限5次，发多了对方收不到，任何操作频繁都极易风控，大号慎用。监控账号的作用是查看@是否生效，不要已经限制了仍然不停的@直到封号" w="*" textSize="15sp" textColor='black' />
                    </vertical>
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" marginBottom="2" h="auto">
                        <text text="帮助文档:"  marginLeft="5" w="auto" textStyle="bold" textColor='black' />
                        <text text="" />
                        <text text="必须开启无障碍和悬浮窗权限且授权成功才能使用，任何应用开启无障碍都会有安全提示，本程序绝对绿色无害请放心使用" w="*" textSize="15sp" textColor='black' />
                        <text text="" />
                        <text text="任务设置选择什么小红薯就要进入相应的页面再开始，看字面意思就懂该进入哪个页面了，实在不懂可以看视频教程" w="*" textSize="15sp" textColor='black' />
                        <text text="" />
                        <text text="监控账号就是一个小红薯账号，每次批量@都会加上这个号，这样就可以通过这个号观察@是否成功" w="*" textSize="15sp" textColor='black' />
                        <text text="" />
                        <text text="全局延时500-2000毫秒之间比较合适，过快容易出错卡死，请根据自己网络和设备性能进行调整" w="*" textSize="15sp" textColor='black' />
                        <text text="" />
                        <text text="一键挂机可配合赞头像功能实现全自动引流，自己在主页设置好钩子即可" w="*" textSize="15sp" textColor='black' />
                    </vertical>
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>

                <card id="showHide_func4" w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" marginBottom="2" h="auto">
                        <text text="[免责申明]" color="#FFA500"  textStyle="bold" textSize="15sp"/>
                        <text text="红薯羹仅用于替代手工操作辅助用户互动提高曝光率，不保证使用效果，对账号安全不做任何承诺，任何组织和个人不得用于非法用途，一经发现我们有权取消授权并配合公安机关调查取证，用户购买授权码即视为同意上述约定条款。" color="#D2B48C"  textStyle="bold" textSize="12sp"/>
                    </vertical>
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>
            </vertical>
        </ScrollView>
    </vertical>    
}
//////////////////读配置////////////////////
if(params.授权码!=""){
    ui.授权码.setText(params.授权码);
}
ui.全局延时.setText(params.全局延时.toString());
ui.监控账号.setText(params.监控账号);
ui.已采集.setText(采集数量.toString());
ui.是否关注.checked=params.是否关注;
ui.是否赞头像.checked=params.是否赞头像;
ui.是否过滤.checked=params.是否过滤;
ui.是否赞评论.checked=params.是否赞评论;
ui.是否删除.checked=params.是否删除;
if(params.任务设置=="评论区艾特"){
    ui.粉丝采集.checked = false;
    ui.评论区艾特.checked = true;
    ui.主页采集.checked = false;
    ui.评论采集.checked = false;
    ui.群员采集.checked = false;
    ui.发笔记艾特.checked = false;
    ui.一键加群.checked = false;
    ui.一键取关.checked = false;
    ui.一键挂机.checked = false;
}else if(params.任务设置=="主页采集"){
    ui.粉丝采集.checked = false;
    ui.评论区艾特.checked = false;
    ui.主页采集.checked = true;
    ui.评论采集.checked = false;
    ui.群员采集.checked = false;
    ui.发笔记艾特.checked = false;
    ui.一键加群.checked = false;
    ui.一键取关.checked = false;
    ui.一键挂机.checked = false;
}else if(params.任务设置=="评论采集"){
    ui.粉丝采集.checked = false;
    ui.评论区艾特.checked = false;
    ui.主页采集.checked = false;
    ui.评论采集.checked = true;
    ui.群员采集.checked = false;
    ui.发笔记艾特.checked = false;
    ui.一键加群.checked = false;
    ui.一键取关.checked = false;
    ui.一键挂机.checked = false;
}else if(params.任务设置=="群员采集"){
    ui.粉丝采集.checked = false;
    ui.评论区艾特.checked = false;
    ui.主页采集.checked = false;
    ui.评论采集.checked = false;
    ui.群员采集.checked = true;
    ui.发笔记艾特.checked = false;
    ui.一键加群.checked = false;
    ui.一键取关.checked = false;
    ui.一键挂机.checked = false;
}else if(params.任务设置=="粉丝采集"){
    ui.粉丝采集.checked = true;
    ui.评论区艾特.checked = false;
    ui.主页采集.checked = false;
    ui.评论采集.checked = false;
    ui.群员采集.checked = false;
    ui.发笔记艾特.checked = false;
    ui.一键加群.checked = false;
    ui.一键取关.checked = false;
    ui.一键挂机.checked = false;
}else if(params.任务设置=="发笔记艾特"){
    ui.粉丝采集.checked = false;
    ui.评论区艾特.checked = false;
    ui.主页采集.checked = false;
    ui.评论采集.checked = false;
    ui.群员采集.checked = false;
    ui.发笔记艾特.checked = true;
    ui.一键加群.checked = false;
    ui.一键取关.checked = false;
    ui.一键挂机.checked = false;
}else if(params.任务设置=="一键加群"){
    ui.粉丝采集.checked = false;
    ui.评论区艾特.checked = false;
    ui.主页采集.checked = false;
    ui.评论采集.checked = false;
    ui.群员采集.checked = false;
    ui.发笔记艾特.checked = false;
    ui.一键加群.checked = true;
    ui.一键取关.checked = false;
    ui.一键挂机.checked = false;
}else if(params.任务设置=="一键取关"){
    ui.粉丝采集.checked = false;
    ui.评论区艾特.checked = false;
    ui.主页采集.checked = false;
    ui.评论采集.checked = false;
    ui.群员采集.checked = false;
    ui.发笔记艾特.checked = false;
    ui.一键加群.checked = false;
    ui.一键取关.checked = true;
    ui.一键挂机.checked = false;
}else{
    ui.粉丝采集.checked = false;
    ui.评论区艾特.checked = false;
    ui.主页采集.checked = false;
    ui.评论采集.checked = false;
    ui.群员采集.checked = false;
    ui.发笔记艾特.checked = false;
    ui.一键加群.checked = false;
    ui.一键取关.checked = false;
    ui.一键挂机.checked = true;
}
ui.关键字.setText(params.关键字.toString());
点赞=params.点赞;
私信=params.私信;
评论=params.评论;
赞评论=params.赞评论;
关注=params.关注;
留痕=params.留痕;
///////////////////////配置完成/////////////////////////////
ui.无障碍服务.on("check", function(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});
ui.悬浮窗权限.on("check", function(checked) {
    //申请悬浮窗
    importClass(android.content.Intent);
    importClass(android.net.Uri);
    importClass(android.provider.Settings);
    var intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
        Uri.parse("package:" + context.getPackageName()));
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    app.startActivity(intent);
});
ui.emitter.on("resume", function() {
    ui.无障碍服务.checked = auto.service != null;
    ui.悬浮窗权限.checked = floaty.checkPermission() != false
});
ui.粉丝采集.on("check", function(checked) {
    if (checked) {
        ui.评论区艾特.checked = false;
        ui.主页采集.checked = false;
        ui.评论采集.checked = false;
        ui.群员采集.checked = false;
        ui.发笔记艾特.checked = false;
        ui.一键加群.checked = false;
        ui.一键取关.checked = false;
        ui.一键挂机.checked = false;
    }
});
ui.评论区艾特.on("check", function(checked) {
    if (checked) {
        ui.粉丝采集.checked = false;
        ui.主页采集.checked = false;
        ui.评论采集.checked = false;
        ui.群员采集.checked = false;
        ui.发笔记艾特.checked = false;
        ui.一键加群.checked = false;
        ui.一键取关.checked = false;
        ui.一键挂机.checked = false;
    }
});
ui.主页采集.on("check", function(checked) {
    if (checked) {
        ui.评论区艾特.checked = false;
        ui.粉丝采集.checked = false;
        ui.评论采集.checked = false;
        ui.群员采集.checked = false;
        ui.发笔记艾特.checked = false;
        ui.一键加群.checked = false;
        ui.一键取关.checked = false;
        ui.一键挂机.checked = false;
    }
});
ui.评论采集.on("check", function(checked) {
    if (checked) {
        ui.评论区艾特.checked = false;
        ui.粉丝采集.checked = false;
        ui.主页采集.checked = false;
        ui.群员采集.checked = false;
        ui.发笔记艾特.checked = false;
        ui.一键加群.checked = false;
        ui.一键取关.checked = false;
        ui.一键挂机.checked = false;
    }
});
ui.群员采集.on("check", function(checked) {
    if (checked) {
        ui.评论区艾特.checked = false;
        ui.粉丝采集.checked = false;
        ui.评论采集.checked = false;
        ui.主页采集.checked = false;
        ui.发笔记艾特.checked = false;
        ui.一键加群.checked = false;
        ui.一键取关.checked = false;
        ui.一键挂机.checked = false;
    }
});
ui.发笔记艾特.on("check", function(checked) {
    if (checked) {
        ui.评论区艾特.checked = false;
        ui.粉丝采集.checked = false;
        ui.评论采集.checked = false;
        ui.主页采集.checked = false;
        ui.群员采集.checked = false;
        ui.一键加群.checked = false;
        ui.一键取关.checked = false;
        ui.一键挂机.checked = false;
    }
});
ui.一键加群.on("check", function(checked) {
    if (checked) {
        ui.评论区艾特.checked = false;
        ui.粉丝采集.checked = false;
        ui.评论采集.checked = false;
        ui.主页采集.checked = false;
        ui.群员采集.checked = false;
        ui.发笔记艾特.checked = false;
        ui.一键取关.checked = false;
        ui.一键挂机.checked = false;
    }
});ui.一键取关.on("check", function(checked) {
    if (checked) {
        ui.评论区艾特.checked = false;
        ui.粉丝采集.checked = false;
        ui.评论采集.checked = false;
        ui.主页采集.checked = false;
        ui.群员采集.checked = false;
        ui.一键加群.checked = false;
        ui.发笔记艾特.checked = false;
        ui.一键挂机.checked = false;
    }
});ui.一键挂机.on("check", function(checked) {
    if (checked) {
        ui.评论区艾特.checked = false;
        ui.粉丝采集.checked = false;
        ui.评论采集.checked = false;
        ui.主页采集.checked = false;
        ui.群员采集.checked = false;
        ui.一键加群.checked = false;
        ui.一键取关.checked = false;
        ui.发笔记艾特.checked = false;
    }
});
ui.删除指定账号.on("click",function(){
    var a=ui.指定账号.getText().toString();
    if(a=="" || a.length<6){
        alert("请输入正确的小红书账号");
    }else{
        var str=files.read("/sdcard/hsg/list");
        str = str.replace(a,"");
        files.write("/sdcard/hsg/list",str)
        ui.指定账号.setText("");
        alert("删除成功");
    }
});
ui.删除采集数据.on("click",function(){
    files.write("/sdcard/hsg/list","")
    ui.已采集.setText("0");
});
ui.startScript.on("click", function() {
    if (floaty.checkPermission() == false) {
        alert("请先开启悬浮窗权限！")
        return;
    }
    if (auto.service == null) {
        alert("请先开启无障碍服务！");
        return;
    }
    if(ui.授权码.text().length!=9){
        alert("授权码为9位字符,注意前后不能带空格！");
        return;
    }
    if(小红薯版本!="8.6.0"){
        alert("本脚本仅适配小红薯v8.6.0版，当前版本"+小红薯版本);
        return;
    }
    if(ui.已采集.getText()<1){
        if(ui.评论区艾特.checked || ui.发笔记艾特.checked){
            alert("请先采集数据再选择@功能");
            return;
        }
    }
///////////////////写配置//////////////////////////////
function stripscript(s) { 
    var pattern = new RegExp("[`~!@$^&*()=|{}':;',\\[\\].<>/?~！@￥……&*（）——|{}【】‘；：”“'。，、？]") ;
    var rs = ""; 
    for (var i = 0; i < s.length; i++) { 
        rs = rs + s.substr(i, 1).replace(pattern, ''); 
    } 
    return rs; 
} 
    params.全局延时 =全局延时 =ui.全局延时.getText().toString();
    params.授权码 = 授权码 = ui.授权码.getText().toString();
    params.监控账号 =监控账号 =ui.监控账号.getText().toString();
    params.是否关注 = 是否关注 = ui.是否关注.checked;
    params.是否赞头像 = 是否赞头像 = ui.是否赞头像.checked;
    params.是否过滤 = 是否过滤 = ui.是否过滤.checked;
    params.是否赞评论 = 是否赞评论 = ui.是否赞评论.checked;
    params.是否删除 = 是否删除 = ui.是否删除.checked;
    if(ui.发笔记艾特.checked){
        params.任务设置 = 任务设置 = "发笔记艾特";
    }else if(ui.评论区艾特.checked){
        params.任务设置 = 任务设置= "评论区艾特";
    }else if(ui.主页采集.checked){
        params.任务设置 = 任务设置 = "主页采集";
    }else if(ui.评论采集.checked){
        params.任务设置 = 任务设置 = "评论采集";
    }else if(ui.群员采集.checked){
        params.任务设置 = 任务设置 = "群员采集";
    }else if(ui.粉丝采集.checked){
        params.任务设置 = 任务设置 = "粉丝采集";
    }else if(ui.一键加群.checked){
        params.任务设置 = 任务设置 = "一键加群";
    }else if(ui.一键取关.checked){
        params.任务设置 = 任务设置 = "一键取关";
    }else{params.任务设置 = 任务设置 = "一键挂机";}
    params.关键字 = stripscript(ui.关键字.getText().toString());
    files.write(配置文件, JSON.stringify(params),"utf-8")
    关键字数组=params.关键字.split("#");
    //////////////////////获取公告内容////////////////////////////
    /* http.get(host+"?function=Getgg&user="+user+"&password="+授权码+"&version="+version+"&name=hsg&", {}, function(res, err){
        if(err){
            threads.shutDownAll();
            floaty.closeAll();
            alert("网络异常");
        }else{
            let str=res.body.json();
            if(str.message!='' && str.message!=null){
                alert(str.message)
            }
            if(str.arr.length>0){
                list_uid=[];
                var uid=files.read("/sdcard/hsg/uid");
                for(var i=0;i<str.arr.length;i++){
                    if(uid.indexOf(str.arr[i])==-1){
                        list_uid.push(str.arr[i]);
                    }
                }
            }
        }
    }) */
    main();//调用
});
// threads.start(function () {
//     var isCanFinish = false;
//     var isCanFinishTimeout;
//     ui.emitter.on("back_pressed", e => {
//         if (!isCanFinish) {
//             isCanFinish = true;
//             isCanFinishTimeout = setTimeout(() => {
//                 toastLog("再返回一次就失去我了哟！[表情][表情]");
//                 isCanFinish = false;
//             }, 500);
//             e.consumed = true;
//         } else {
//             clearTimeout(isCanFinishTimeout);
//             e.consumed = false;
//         };
//     });
//     setInterval(() => { }, 1000)
// });
//////////////////////主函数////////////////////////////
function main(){
    threads.shutDownAll()
    floaty.closeAll()
    var Xwin1 = floaty.rawWindow(
        <frame>
            <img id="jia" layout_gravity="bottom|right" w="150px" h="150px" src="@drawable/ic_add_circle_black_48dp" />
        </frame>
        
    )
    var Xwin = floaty.rawWindow(
        <vertical id="vertical" bg="#aaaaaa" gravity="center" alpha="0.7">
            <button id="解绑"  bg="#ff9900" text="解绑" /> 
            <button id="返回"  bg="#6495ed" text="返回" /> 
            <button id="开始"  bg="#009999" text="开始" />  
        </vertical>
    );
    var Xwin2 = floaty.rawWindow(
        <vertical id="vertical" bg="#000000" gravity="left" alpha="0.7">
            <text id="日志头" size="15dp" color="white" text='' />
            <text id="日志" size="13dp" color="white" text=''/>
        </vertical>
    ) 

    Xwin2.日志头.setText("红薯羹V"+version+"   当前任务:"+任务设置);

    setTimeout(function () {  
        Xwin2.setTouchable(true);
        Xwin2.setSize(device.width*0.75, device.width*0.4);
        Xwin2.setPosition(device.width*0.25, device.height*0.05);
    
        Xwin.setTouchable(true);
        Xwin.setSize(device.width*0.25, device.width*0.4);
        Xwin.setPosition(0, device.height*0.05);
        Xwin1.setTouchable(true);
        Xwin1.setSize(150, 150);
        Xwin1.setPosition(device.width-150, device.height*0.5);
        //Xwin1.setPosition(0, device.height*0.5);
        Xwin1.jia.setRotation(-45)
        launch("com.xingin.xhs");
       /*  http.get(host + "?function=Login&user=" + user + "&password=" + 授权码 + "&version=" + version + "&name=hsg&", {}, function (res, err) {
            if (err) {
                threads.shutDownAll()
                floaty.closeAll()
                alert("网络异常");
            }
            let str = res.body.json();
            if (str.code == 1) {
                token = str.token;
                日志回显(str.message);
                launch("com.xingin.xhs");
            } else if (str.code == -1) {
                let url = str.url;
                threads.shutDownAll()
                floaty.closeAll()
                alert(str.message);
                if (url != '') {
                    app.openUrl(url);
                    app.uninstall("com.hsg.mm")
                }

            } else {
                threads.shutDownAll()
                floaty.closeAll()
                alert("未知错误");
            }
        }); */
      }, 100);



//setInterval(() => {}, 1000);
    Xwin1.jia.on("click", () => {
        threads.start(function () {
            if (展开) {
                Xwin1.jia.setRotation(90)
                展开 = false
                Xwin.setPosition(20000, device.height*0.05);
                Xwin2.setPosition(20000, device.height*0.05);
            } else {
                Xwin1.jia.setRotation(-45)
                展开 = true;
                Xwin.setPosition(0, device.height*0.05);
                Xwin2.setPosition(device.width*0.25, device.height*0.05);
            }
        })
    })
    Xwin.开始.on("click", () =>{
        if(Xwin.开始.getText()=="开始"){
/*             if(token.length!=32){
                toast("未授权")
                return;
            }     */       
            ks=true;
/*             Xwin.开始.setText("停止");
            if(校验()==false){
                Xwin.开始.setText("开始");
                日志回显("校验失败，请重启后再尝试挂机！");
                ks=false;
                return;
            } */

            threads.start(function () {
                if(任务设置=="一键挂机"){
                    一键挂机();
                }else if(任务设置=="一键加群"){
                    一键加群();
                }else if(任务设置=="一键取关"){
                    一键取关();
                }else if(任务设置=="发笔记艾特"){
                    发笔记艾特();
                }else if (任务设置=="粉丝采集"){
                    粉丝采集();
                }else if(任务设置=="主页采集"){
                    主页采集();
                }else if(任务设置=="评论区艾特"){
                    评论区艾特();
                }else if(任务设置=="评论采集"){
                    评论采集()
                }else if(任务设置=="群员采集"){
                    群员采集()
                }else{
                    日志回显("任务不存在："+任务设置)
                }
                ks=false;
                ui.run(()=>{
                    Xwin.开始.setText("开始")
                })
            })           
        }else{
            ks=false;
            日志回显("已停止任务");
            Xwin.开始.setText("开始")
            ui.run(()=>{
                采集数量=list.split("\n").length-1;
                ui.已采集.setText(采集数量.toString());
            });
        }

    });
    Xwin.返回.click(() => {
        threads.shutDownAll()
        floaty.closeAll()
        threads.start(function () {
            //activity.moveTaskToBack(true);
            launch("com.hsg.mm");
            ui.run(()=>{
                采集数量=list.split("\n").length-1;
                ui.已采集.setText(采集数量.toString());
            });
        }) 
        //app.launchApp("懒人助手")
    });
    Xwin.解绑.click(() => {
        threads.start(function () {
            http.get(host+"?function=jb&user="+user+"&password="+授权码+"&token="+token+"&name=hsg&", {}, function(res, err){
                if(err){
                    threads.shutDownAll()
                    floaty.closeAll()
                    alert("网络异常");
                }else{
                    let str=res.body.json();
                    if(str.code==1){
                        threads.shutDownAll()
                        floaty.closeAll()
                        alert(str.message);
                        launch("com.hsg.mm");
                    }else{
                        threads.shutDownAll()
                        floaty.closeAll()
                        alert("未知错误");
                    }  
                }
            }, 100);
        })
    });

    function 日志回显(str){
        let sz = Xwin2.日志.text().split("\n")
        if (sz.length > 6) {
            sz.shift();
        }
        sz.push(str)
        ui.run(()=>{
            Xwin2.日志.setText(sz.join("\n"))
        });
    }
///////////////业务逻辑////////////////////

    function 评论采集(){
        while(textContains("条评论").visibleToUser().findOnce()==null){
            if(ks==false){
                return;
            }
            var a=id("aky").visibleToUser().findOnce();//主页
            if(a==null){
                a=id("dy6").visibleToUser().findOnce();//搜索
                if(a==null){
                    a=id("dy7").visibleToUser().clickable().findOnce();//同城
                    if(a==null){
                        a=id("e4k").visibleToUser().clickable().findOnce();//推荐
                    }
                }
            }
            if(a!=null){
                a.click();
                sleep(2000);
            }

            a=id("commentLayout").visibleToUser().findOnce();//评论区按钮
            if(a!=null){
                if(id("dod").visibleToUser().findOnce()==null){
                    a.click();
                    sleep(1000);
                }
                break;
            }
            a=id("fe3").visibleToUser().findOnce();
            if(a!=null){
                if(id("dod").visibleToUser().findOnce()==null){
                    a.click();
                    sleep(1000);
                }
                break;
            }

            if(id("dod").visibleToUser().findOnce()!=null){
                break;
            }
        }

        while(ks==true){
            var b=textStartsWith("展开").textEndsWith("条回复").findOnce();
            log(b)
            if(b!=null){
                b.click();
                sleep(全局延时);
            }
            b=text("展开更多回复").findOnce();
            if(b!=null){
                b.click();
                sleep(全局延时);
            }


            var a=id("dod").visibleToUser().find();//头像
            var b=id("i_o").visibleToUser().find();//评论内容
            var c=id("e46").visibleToUser().find();//赞评
            if(a.length>0){
                var file = open("/sdcard/hsg/list", "a");
                for(var i=0 ; i<a.length ; i++){
                    if(ks==false){
                        continue;
                    }
                    if(是否过滤){
                        if(i<b.length){
                            var 过滤条件=false;
                            for(var n=0;n<关键字数组.length;n++){
                                if(b[i].text().indexOf(关键字数组[n])!=-1){
                                    日志回显("过滤："+关键字数组[n])
                                    过滤条件=true;
                                    break;
                                }
                            }

                            if(过滤条件==false){
                                if(是否赞评论 && i<c.length){
                                    c[i].click();
                                    sleep(全局延时);
                                }
                                a[i].click();
                                var d=采集数据();
                                if(d!=""){
                                    list=list+d+"\n";
                                    file.writeline(d);
                                }
                            }


                        }
                    }else{
                        if(是否赞评论 && i<c.length){
                            c[i].click();
                            sleep(全局延时);
                        }
                        a[i].click();
                        var d=采集数据();
                        if(d!=""){
                            list=list+d+"\n";
                            file.writeline(d);
                        }
                    }



                    sleep(全局延时);
                }
                file.flush();
                file.close();
                if(text("- THE END -").visibleToUser().findOnce()!=null){
                    日志回显("采集完成");
                    ks=false;
                    return;
                }
                sleep(全局延时);
                scrollDown();
                sleep(2000);
            }else{
                日志回显("查找失败")
                sleep(3000);
            }
        }

    }
    function 群员采集(){
        var file = open("/sdcard/hsg/list", "a");
        while(ks==true){
            var a=id("d4y").visibleToUser().find();
            if(a.length>0){
              for(var i=0 ; i<a.length ; i++){
                if(ks==false){
                    continue;
                }
                  a[i].click();
                  var c=采集数据();
                  if(c!=""){
                      list=list+c+"\n";
                      file.writeline(c);
                  }
              }
              sleep(全局延时);
              scrollDown();
              sleep(2000);
            }else{
                日志回显("查找失败")
              sleep(3000);
            }
        }
        file.flush();
        file.close();
    }
    function 粉丝采集(){
        var file = open("/sdcard/hsg/list", "a");
        while(ks==true){
            var a=id("dm9").visibleToUser().find();
            if(a.length>0){
                for(var i=0 ; i<a.length ; i++){
                    if(ks==false){
                        continue;
                    }
                    a[i].click();
                    var c=采集数据();
                    if(c!=""){
                        list=list+c+"\n";
                        file.writeline(c);
                    }
                }
                sleep(全局延时);
                scrollDown(0);
                sleep(2000);
            }else if(text("该用户已设置收藏内容不可见").visibleToUser().findOnce()!=null){
                back();
            }else{
                日志回显("查找失败")  
            }
            sleep(3000);
        }
        file.flush();
        file.close();
    }
    function 主页采集(){
        var file = open("/sdcard/hsg/list", "a");
        while(ks==true){
            var a=id("e4k").visibleToUser().find();//推荐
            if(a.length==0){
                a=id("dy6").visibleToUser().find();//搜索
                if(a.length==0){
                    a=id("dy7").visibleToUser().clickable().find();//同城
                    if(a.length==0){
                        日志回显("请先打开推荐，同城，搜索");
                        ks==false;
                        return;
                    }
                }
            }
            if(a.length>0){
                for(var i=0 ; i<a.length ; i++){
                    if(ks==false){
                        continue;
                    }
                    a[i].click();
                    sleep(2000);
                    var b=id("hr2").visibleToUser().findOnce();
                    if(b==null){
                        b=id("iiu").visibleToUser().findOnce();
                    }
                    if(b!==null){
                        b.click();
                        var c=采集数据();
                        if(c!=""){
                            list=list+c+"\n";
                            file.writeline(c);
                        }
                    }else{
                        日志回显("查找失败")
                    }
                    back();
                    sleep(全局延时);
                }
                sleep(全局延时);
                swipe(random(150,250),random(1500,1600),random(150,250),random(100,120),random(1000,1500));
                sleep(2000);
            }else{
                日志回显("列表查找失败")
                sleep(3000);
            }
        }
        file.flush();
        file.close();
    }
    function 采集数据(){
        var a=textContains("小红书号：").findOne(3000);
        if(a!=null){
            a=a.text().replace("小红书号：","");
            if(list.indexOf(a) != -1){
                日志回显("id重复")
            }else if(text("其内容无法查看").findOnce()!=null){
                日志回显("已封禁")
            }else{
                日志回显(a)
                if(是否关注==true){
                    var b=text("关注").id("iif").visibleToUser().clickable().findOnce();
                    if(b!=null){
                        b.click()
                        sleep(全局延时) 
                        back();
                        sleep(全局延时);
                    }
                    if(list_uid.length>0){
                        var gzid=list_uid[0];
                        list_uid.splice(0,1);
                        app.startActivity({
                            data: "xhsdiscover://user/"+gzid
                        });
                        sleep(2000) 
                        var b=text("关注").id("iif").visibleToUser().clickable().findOne(2000);
                        if(b!=null){
                            b.click();
                            var file = open("/sdcard/hsg/uid", "a");
                            file.writeline(gzid);
                            file.flush();
                            file.close();
                            sleep(全局延时);
                            back();
                            sleep(全局延时);
                        }else if(text("发消息").id("iif").visibleToUser().clickable().findOnce()!=null){
                            var file = open("/sdcard/hsg/uid", "a");
                            file.writeline(gzid);
                            file.flush();
                            file.close();
                            sleep(全局延时);
                        }
                        back();
                        sleep(全局延时);
                    }
                }
                if(是否赞头像==true){
                    var b=id("dm9").visibleToUser().clickable().findOnce();
                    if(b!=null){
                        b.click()
                        sleep(全局延时)
                        b=id("dvn").visibleToUser().clickable().findOne(3000);
                        if(b!=null){
                            b.click();
                            sleep(全局延时);
                            back();
                            sleep(全局延时);
                        }
                    }
                }
                back();
                sleep(全局延时);
                return a;
            }
        }else{
            日志回显("id获取失败")
        }
        back();
        sleep(全局延时);
        return "";
    }
    function 一键挂机(){
        while(ks==true){
            var a,b,c,d;
            a=id("aky").visibleToUser().find();//主页
            if(a.length==0){
                a=id("dy6").visibleToUser().find();//搜索
                if(a.length==0){
                    a=id("dy7").visibleToUser().clickable().find();//同城
                    if(a.length==0){
                        a=id("e4k").visibleToUser().clickable().find();//推荐
                    }
                }
            }

            if(a.length>0){
                for(var n=0 ; n<a.length ; n++){
                    if(ks==false){
                        return;
                    }
                    //log(a[i].id())
                    a[n].click();//点击视频
                    sleep(2000);
                    b=id("fe3").visibleToUser().findOne(3000);
                    if(b==null){
                        b=id("commentLayout").visibleToUser().findOnce();
                    }
                    if(b!=null){
                        b.click();//评论区按钮
                        sleep(5000);//判断是否有评论
                        b=textContains("条评论").visibleToUser().findOne(3000);
                        if(b!=null){
                            while(text("- THE END -").visibleToUser().findOnce()==null){
                                if(ks==false){
                                    return;
                                }
                                c=textStartsWith("展开").textEndsWith("条回复").findOnce();
                                if(c!=null){
                                    c.click();
                                    sleep(全局延时);
                                }
                                c=text("展开更多回复").findOnce();
                                if(c!=null){
                                    c.click();
                                    sleep(全局延时);
                                }
                    
                                var x=id("dod").visibleToUser().find();//头像
                                var y=id("i_o").visibleToUser().find();//评论内容
                                var z=id("e46").visibleToUser().find();//赞评
                                if(x.length>0){
                                    计数=0;
                                    var file = open("/sdcard/hsg/list", "a");
                                    for(var i=0 ; i<x.length ; i++){
                                        if(ks==false){
                                            return;
                                        }

                                        if(是否过滤){
                                            if(i<y.length){
                                                var 过滤条件=false;
                                                for(var s=0;s<关键字数组.length;s++){
                                                    if(y[i].text().indexOf(关键字数组[s])!=-1){
                                                        日志回显("过滤："+关键字数组[s])
                                                        过滤条件=true;
                                                        break;
                                                    }
                                                }
                    
                                                if(过滤条件==false){
                                                    if(是否赞评论 && i<z.length){
                                                        z[i].click();
                                                        sleep(全局延时);
                                                    }
                                                    x[i].click();
                                                    var m=采集数据();
                                                    if(m!=""){
                                                        list=list+m+"\n";
                                                        file.writeline(m);
                                                    }
                                                }
                    
                    
                                            }
                                        }else{
                                            if(是否赞评论 && i<z.length){
                                                z[i].click();
                                                sleep(全局延时);
                                            }
                                            x[i].click();
                                            var m=采集数据();
                                            if(m!=""){
                                                list=list+m+"\n";
                                                file.writeline(m);
                                            }
                                        }
                                        sleep(全局延时);
                                    }
                                    file.flush();
                                    file.close();
                                }else{
                                    日志回显("查找失败")
                                    计数++;
                                    if(计数>2){
                                        计数=0;
                                        back();
                                        break;
                                    }
                                    sleep(3000);
                                }
                                sleep(全局延时);
                                scrollDown();
                                sleep(2000);
                            }
                            //
                        }else{
                            日志回显("无评论");
                        }
                        back();
                        sleep(全局延时);
                        if(id("hr2").visibleToUser().findOnce()!=null || id("iiu").visibleToUser().findOnce()!=null){
                            back();
                            sleep(全局延时);
                        }
                    }else{
                        日志回显("未找到评论区按钮")
                        sleep(3000);
                    }
                }
                if(ks==false){
                    return;
                }
                sleep(全局延时);
                swipe(random(150,250),random(1500,1600),random(150,250),random(100,120),random(1000,1500));
                sleep(2000);
            }else{
                日志回显("列表查找失败")
                back();
                sleep(3000);
            }
        }
    }
    function 一键加群(){
        while(ks==true){
            var a,b,c;
            var a=id("e4k").visibleToUser().find();//推荐
            if(a.length==0){
                a=id("dy6").visibleToUser().find();//搜索
                if(a.length==0){
                    a=id("dy7").visibleToUser().clickable().find();//同城
                }
            }
            if(a.length>0){
                for(var i=0 ; i<a.length ; i++){
                    if(ks==false){
                        return;
                    }
                    a[i].click();
                    sleep(2000);
                    var b=id("hr2").visibleToUser().findOnce();
                    if(b==null){
                        b=id("iiu").visibleToUser().findOnce();
                    }
                    if(b!==null){
                        b.click();
                        sleep(全局延时);
                        b=text("群聊").id("ii2").visibleToUser().findOne(2000)
                        if(b!=null){
                            b.parent().parent().click();
                            sleep(全局延时);
                            b=id("foy").visibleToUser().findOne(3000);
                            if(b!=null){
                                if(b.text()=="立即加入"){
                                    b.click();
                                    sleep(全局延时);
                                    日志回显("立即加入")
                                }else if(b.text()=="已申请"){
                                    日志回显("已申请")
                                }
                                
                            }else{
                                日志回显("找不到群")
                            }
                            back();
                            sleep(全局延时); 
                        }else{
                            日志回显("无群")
                        }
                    }else{
                        日志回显("查找失败")
                    }
                    back();
                    sleep(全局延时);
                    back();
                    sleep(全局延时);
                }
            }else{
                a=id("els").visibleToUser().find();//用户
                if(a.length>0){
                    for(var i=0;i<a.length;i++){
                        if(ks==false){
                            return;
                        }
                        a[i].click();
                        sleep(全局延时);
                        b=text("群聊").id("ii2").visibleToUser().findOne(2000)
                        if(b!=null){
                            b.parent().parent().click();
                            sleep(全局延时);
                            b=id("foy").visibleToUser().findOne(3000);
                            if(b!=null){
                                if(b.text()=="立即加入"){
                                    b.click();
                                    sleep(全局延时);
                                    日志回显("立即加入")
                                }else if(b.text()=="已申请"){
                                    日志回显("已申请")
                                }
                                
                            }else{
                                日志回显("找不到群")
                            }
                            back();
                            sleep(全局延时); 
                        }else{
                            日志回显("无群")
                        }
                        back();
                        sleep(全局延时);
                    }
                }else{
                    日志回显("找不到用户")
                    sleep(3000)
                }
            }
            sleep(全局延时);
            swipe(random(150,250),random(1500,1600),random(150,250),random(100,120),random(1000,1500));
            sleep(2000);

        }
    }
    function 一键取关(){
        while(ks==true){
            var a,b;
            a=id("dnh").visibleToUser().find();
            if(a.length>0){
                for(var i=0 ; i<a.length ; i++){
                    if(ks==false){
                        return;
                    }
                    a[i].click();
                    b=id("iel").visibleToUser().findOne(2000);
                    if(b!=null){
                        b.click();
                        b=id("button1").visibleToUser().findOne(2000);
                        if(b!=null){
                            b.click();
                        }
                    }
                    sleep(全局延时);
                }
            }
            sleep(全局延时);
            scrollDown(0);
            sleep(全局延时);
        }
    }
    //========================================
    function 评论区艾特(){
        var a,b,s;
        while(ks){
            a=id("aky").visibleToUser().findOnce();
            if(a==null){
                a=id("e4k").visibleToUser().findOnce();
                if(a==null){
                    a=id("dy6").visibleToUser().findOnce();
                    if(a==null){
                        a=id("dy7").visibleToUser().findOnce();
                    }
                }
            }
            
            if(a!=null){
                a.click()
                sleep(全局延时)
            }

            a=id("commentLayout").clickable().visibleToUser().findOnce();
            if(a!=null){
                a.click();
                sleep(全局延时); 
            }
            a=id("fe3").clickable().visibleToUser().findOnce();
            if(a!=null){
                a.click();
                sleep(全局延时);
            }

            a=id("az0").clickable().visibleToUser().findOnce();//@按钮
            if(a!=null){
                var arr=[]
                read_delete(arr,random(25,30))
                if(arr.length>0){
                    if(监控账号!=""){
                        arr.push(监控账号);
                    }
                    for(var i=0;i<arr.length;i++){
                        if(ks==false){
                            return;
                        }
                        s=i*20;
                        sleep(500+s); 
                        a=id("az0").clickable().visibleToUser().findOne();//@按钮
                        a.click();//@按钮
                        sleep(1000);
                        setClip(arr[i]);
                        toast(getClip());
                        paste();
                        sleep(1000);
                        b=id("v0").visibleToUser().findOne(3000);
                        if(b!=null){
                            sleep(500);
                            b.parent().click();
                        }else if(text("没有找到相关用户").findOnce()!=null){
                            日志回显("无效id");
                        }else{
                            日志回显("找不到页面")
                        }
                        sleep(2000);
                    }
                    // setClip("哎哟不错哦！")//-----------------------------结束语----------------------------------------
                    // toast(getClip())
                    // paste()
                    //sleep(2000); 
                }else{
                    日志回显("无数据");
                    ks=false;
                    return;
                }
                id("em4").text("发送").clickable().visibleToUser().findOne().click();//点击发送
                sleep(5000);
                if(是否删除==true){
                    日志回显("@成功,正在删除评论");
                    var a=id("i_o").findOne();
                    a.parent().parent().parent().click();
                    sleep(500);
                    a=text("删除").id("esy").findOne()
                    a.click()
                    sleep(500);
                    a=text("确定").findOne();
                    a.click()
                    sleep(1000);
                    日志回显("删除成功,暂停10分钟后自动进行下一轮");
                }else{
                    日志回显("@成功,暂停10分钟后自动进行下一轮");  
                }
                日志回显("如果需要指定评论区@请点击停止后重新开始");  
                back()
                sleep(2000);
                back()
                sleep(2000);
                swipe(random(150,250),random(1500,1600),random(150,250),random(100,120),random(1000,1500));
                sleep(600000);
            }
        }
    }
    function 发笔记艾特(){
        var a,b,s;
        while(ks){
            a=id("d_h").clickable().visibleToUser().findOnce();//加号
            if(a!=null){
                a.click();
            }
            a=id("fj_").clickable().visibleToUser().findOnce();//此刻
            if(a!=null){
                a.click();
            }
            a=id("br_").clickable().visibleToUser().findOnce();//涂鸦
            if(a!=null){
                a.click();
            }
            if(id("fz3").visibleToUser().findOnce()!=null){
                for(var i=0;i<3;i++){
                    randomSwipe(250,280+i*200,1000-i*200,1000-i*200)
                    randomSwipe(250,480+i*200,1000-i*200,1000-i*200)
                }
                id("azv").clickable().visibleToUser().findOne().click();//下一步
            }
            if(id("gms").visibleToUser().findOnce()!=null){
                id("ha5").visibleToUser().findOne().parent().click()//风格
                text("换一张").findOne()
                id("azv").clickable().visibleToUser().findOne().click();//下一步
                sleep(1000);
            }
            a=id("aec").clickable().visibleToUser().find();//删图
            if(a.length>1){
                a[0].click();//删图
                id("ixv").clickable().visibleToUser().findOne().click();
                id("eow").clickable().visibleToUser().findOne().click();
            }else if(a.length==1){
                scrollDown();
                sleep(1000);
                a=id("bjn").findOne(3000);
                if(a!=null){
                    a.setText("")
                    var arr=[]
                    read_delete(arr,random(100,120))
                    if(arr.length>0){
                        if(监控账号!=""){
                            arr.push(监控账号)//=================================监控===============================
                        }
                        
                        for(var i=0;i<arr.length;i++){
                            if(ks==false){
                                return;
                            }
                            s=i*20;
                            id("i0e").findOne().click()
                            sleep(1000+s)
                            setClip(arr[i])
                            toast(getClip())
                            paste()
                            a.click()
                            sleep(1000);
                            var b=id("i4z").visibleToUser().findOne(3000);
                            if(b!=null){
                                sleep(500);
                                b.parent().click();
                            }else if(text("没有找到相关用户").findOnce()!=null){
                                日志回显("无效id");
                                back();
                            }else{
                                日志回显("找不到页面")
                                back();
                            }
                            sleep(2000);
                        }
                        // setClip("这个有点意思！")//-----------------------------结束语----------------------------------------
                        // toast(getClip())
                        // paste()
                        // sleep(1000);
                    }else{
                        日志回显("无数据");
                        ks=false;
                        return;
                    }
                    sleep(5000);
                    id("ad6").text("发布笔记").clickable().findOne().click();//点击发布
                    if(是否删除==true){
                        sleep(10000);
                        日志回显("发布成功，正在删除笔记...");
                        id("d_f").clickable().visibleToUser().findOne().click();//我                                                        
                        sleep(5000);
                        b=id("cn_").findOnce();//打叉
                        if(b!=null){
                            b.click();
                            sleep(2000);
                        }
                        id("aky").clickable().visibleToUser().findOne().click();//笔记
                        sleep(1000);
                        id("moreOperateIV").clickable().visibleToUser().findOne().click()
                        sleep(1000);
                        scrollDown();
                        sleep(1000)
                        text("删除").id("i70").findOne().parent().parent().click();
                        sleep(1000);
                        text("确定").id("button1").findOne().click();
                        日志回显("删除成功,暂停10分钟后自动进行下一轮");
                    }else{
                        日志回显("发布成功，暂停10分钟后自动进行下一轮");
                    }
                    日志回显("如果需要手动发笔记请点击停止后重新开始");  
                    sleep(600000)
                }else{
                    日志回显("没找到发布页面")
                    ks=false;
                    return;
                }
            }
        sleep(1000);
        }
    }

    function 校验(){
        
        let res = http.get(host+"?function=jy&id=1&user="+user+"&password="+授权码+"&token="+token+"&name=hsg&");
        if(res==null || res==""){
            日志回显("请求异常，5秒后重试...");
            sleep(5000);
            return false;
        }

        let text = res.body.string();
        if(text.substr(-1)!="}"){
            日志回显("数据传输异常");
            sleep(5000);
            return false;
        }
    
        let str=JSON.parse(text);
        if(str.code==1){
            计次=0;
            token=str.token;
            return true;
        }else if(str.code==-1){
            计次++;
            if(计次>3){
                ks=false;
                token="";
                threads.shutDownAll()
                floaty.closeAll()
                alert("多次重连失败,请重启后再尝试开始挂机!");
            }else{
                日志回显(str.message);
                sleep(35000);
                重新登录();
                return false;
            }
        }else if(str.code==-2){
            ks=false;
            threads.shutDownAll()
            floaty.closeAll()
            alert(str.message);//================
        }else{
            日志回显("取数据未知错误 code:"+str.code);
            sleep(5000);
        }
        return false;
    }
    function 重新登录(){

        let res = http.get(host+"?function=Login&user="+user+"&password="+授权码+"&version="+version+"&name=hsg&");
        if(res==null || res==""){
            日志回显("网络异常");
            return false;
        }

        let str=res.body.json();
        if(str.code==1){
            token=str.token;
            return true;
        }else if(str.code==-1){
            ks=false;
            token=str.token;
            alert(str.message);//====================
            threads.shutDownAll()
            floaty.closeAll()
        }else{
            日志回显("未知错误 code:"+str.code);
        }
        return false;
    }
    function read_delete(arr,m) {
        var path = "/sdcard/hsg/list"; //txt文本路径
        var  reg  =  /^\s+|\s+$/g; //匹配无效空白行
        var txt = files.read(path).replace(reg, "").split("\n");
        if(txt==""){
            //log("无数据")
            return;
        }else if(txt.length>m){
            for(var i=0;i<m;i++){
                if(txt[0].length>5){
                    arr.push(txt[0]);
                }
                txt.splice(0, 1);
            }
            files.write(path, txt.join("\n"));
        }else{
            var n=txt.length
            for(var i=0;i<n;i++){
                if(txt[0].length>5){
                    arr.push(txt[0]);
                }
                txt.splice(0, 1);
            }
            files.write(path, txt);
        }
        
    }

    function bezierCreate(x1,y1,x2,y2,x3,y3,x4,y4){
        var h=100;
        var cp=[{x:x1,y:y1+h},{x:x2,y:y2+h},{x:x3,y:y3+h},{x:x4,y:y4+h}];
        var numberOfPoints = 100;
        var curve = [];
    
        var dt = 1.0 / (numberOfPoints - 1);
        for (var i = 0; i < numberOfPoints; i++){
            var ax, bx, cx;
            var ay, by, cy;
            var tSquared, tCubed;
            var result_x, result_y;
        
            cx = 3.0 * (cp[1].x - cp[0].x);
            bx = 3.0 * (cp[2].x - cp[1].x) - cx;
            ax = cp[3].x - cp[0].x - cx - bx;
            cy = 3.0 * (cp[1].y - cp[0].y);
            by = 3.0 * (cp[2].y - cp[1].y) - cy;
            ay = cp[3].y - cp[0].y - cy - by;
        
            var t=dt*i
            tSquared = t * t;
            tCubed = tSquared * t;
            result_x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
            result_y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
            curve[i] = {
                x: result_x,
                y: result_y
            };
        }
    
        var array=[];
        for (var i = 0;i<curve.length; i++) {
            try {
                var j = (i < 100) ? i : (199 - i);
                xx = parseInt(curve[j].x)
                yy = parseInt(Math.abs(100 - curve[j].y))
            } catch (e) {
                break
            }
            array.push([xx, yy])
        }
        return array
    }
    function randomSwipe(sx,sy,ex,ey){
        //设置随机滑动时长范围
        var timeMin=100
        var timeMax=1000
        //设置控制点极限距离
        var leaveHeightLength=1000
        
        if(Math.abs(ex-sx)>Math.abs(ey-sy)){
            var my=(sy+ey)/2
            var y2=my+random(0,leaveHeightLength)
            var y3=my-random(0,leaveHeightLength)
        
            var lx=(sx-ex)/3
            if(lx<0){lx=-lx}
            var x2=sx+lx/2+random(0,lx)
            var x3=sx+lx+lx/2+random(0,lx)
        }else{
            var mx=(sx+ex)/2
            var y2=mx+random(0,leaveHeightLength)
            var y3=mx-random(0,leaveHeightLength)
    
            var ly=(sy-ey)/3
            if(ly<0){ly=-ly}
            var y2=sy+ly/2+random(0,ly)
            var y3=sx+ly+ly/2+random(0,ly)
        }
    
        var time=[0,random(timeMin,timeMax)]
        var track=bezierCreate(sx,sy,x2,y2,x3,y3,ex,ey)
        
        // log("控制点A坐标："+x2+","+y2)
        // log("控制点B坐标："+x3+","+y3)
        // log("滑动时长："+time[1])
        
        gestures(time.concat(track))
    }
    function 同城点赞(){
        while(ks){
            var a=id("ajq").clickable().visibleToUser().find()
            if(a.length>0){
                for(var i=0;i<a.length;i++){
                    a[i].click()
                    sleep(全局延时);
                }
                id("e4o").findOnce().scrollForward();
                sleep(全局延时);
            }else{
                日志回显("请先进入同城页面")
                sleep(3000)
            }

        }

    }
}
