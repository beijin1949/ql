/*
 * 
 */
module.exports = {
    // 基础配置
    base: {
        // 代理模式：填 none = 不使用代理，填 api = 使用API动态获取，每个号自动切换一次IP，填 custom = 使用指定模式
        proxyMode: 'none',
        // 建议UA换成自己抓包的UA
        ua: 'Mozilla/5.0 (Linux; Android 10; CDY-AN90 Build/HUAWEICDY-AN90; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 XWEB/2691 MMWEBSDK/200801 Mobile Safari/537.36 MMWEBID/4006 MicroMessenger/7.0.18.1740(0x2700123B) Process/toolsmp WeChat/arm64 NetType/4G Language/zh_CN ABI/arm64',
        //阅读时间,最小值和最大值
        readTime: [4000, 8000],
        //每个账号之间的运行间隔，单位毫秒
        runTime: [5000, 8000],
        //第n个号是检测文章，遇到检测文章跳过阅读，可以自己配置
        fuck_id: [1, 2, 126],
    },
    proxyApiUrl: "", //使用api代理模式的时候配置，否则留空就行。api地址,每次取1个就行，建议使用3分站的有效期的，要不然过期太快
    customProxy: "", //使用custom代理模式的时候配置，填ip:端口号，
};