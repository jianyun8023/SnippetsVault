// 腾讯文档链接重定向 = type=http-request,pattern=^https\:\/\/docs.qq.com\/scenario\/link.html\?url=,script-path=https://github.com/jianyun8023/SnippetsVault/raw/main/surge/script/qqdocs.js,requires-body=false


const regex = /link\.html\?url=(.*?)&/gm;


const url = $request.url;
let m;
let urlParam = "";
while ((m = regex.exec(url)) !== null) {
    // 这对于避免零宽度匹配的无限循环是必要的
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    urlParam = decodeURIComponent(m[1]);
}

console.log("url 参数" + urlParam);

if (urlParam === "") {
    $done();
}

// 构造重定向响应
const response = {
    status: 302,
    headers: {
        Location: urlParam
    }
};
console.log(response);
// 返回重定向响应
$done(response);

