// 腾讯文档链接重定向 = type=http-request,pattern=^https\:\/\/docs.qq.com\/scenario\/link.html\?url=,script-path=https://github.com/jianyun8023/SnippetsVault/raw/main/surge/script/qqdocs.js,requires-body=false


function getQueryString(url, name) {
    const searchParams = new URLSearchParams(url.split('?')[1]);
    return searchParams.get(name);
}

// 提取链接中的url参数
const url = decodeURIComponent($request.url);

const urlParam = getQueryString(url, 'url');

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

