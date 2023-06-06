// 腾讯文档链接重定向 = type=http-request,pattern=^https\:\/\/docs.qq.com\/scenario\/link.html\?url=,script-path=https://github.com/jianyun8023/SnippetsVault/raw/main/surge/script/qqdocs.js,requires-body=false


// 提取链接中的url参数
const urlParam = decodeURIComponent($request.query.url);

console.log("url 参数" + urlParam);

// 构造重定向响应
const response = {
    status: 302,
    headers: {
        Location: urlParam
    }
};

// 返回重定向响应
$done(response);

