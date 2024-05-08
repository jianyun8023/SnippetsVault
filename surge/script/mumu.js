const url = $request.url;
const headers = $response.headers;
const isQuanX = typeof $task !== "undefined";
const isLoon = typeof $loon != "undefined"
const isSurge = typeof $httpClient != "undefined" && !isLoon
let end_at = 2516312087

if (!$response.body) $done({});
console.log($response.body)
let obj = JSON.parse($response.body);

if (url.includes("/api/v1/user/info") || url.includes("api/v1/login/by_mobile")) {
    obj.data.current_device.trial_end_at = end_at
    obj.data.member_status = 1
    obj.data.member_expired_at = end_at
} else if (url.includes("/api/v1/device/current/trial")) {
    obj.data.trial_end_at = end_at
} else if (url.includes("/api/mac/pro/appcast/remind")) {
    obj.items = []
} else if (url.includes("/api/mac/pro/appcast/force")) {
    obj.items = []
} else if (url.includes("/api/v1/device/config")) {
    obj.data.free_trial_days = 9999
} 

const outHeaders = {};
//移除所有x前缀的头部
Object.keys(headers).forEach(function(key){
    if (!key.startsWith("x")) {
        outHeaders[key] = headers[key];
    }
});


if (isQuanX) {
    $done({ body: JSON.stringify(obj) , headers: outHeaders});
} else if (isSurge) {
    $done({ body: JSON.stringify(obj) , headers: outHeaders});
} else {
    $done({ body: JSON.stringify(obj) , headers: outHeaders});
}
