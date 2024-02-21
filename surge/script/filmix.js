const url = $request.url;
const isQuanX = typeof $task !== "undefined";
const isLoon = typeof $loon != "undefined"
const isSurge = typeof $httpClient != "undefined" && !isLoon


if (!$response.body) $done({});
let obj = JSON.parse($response.body);


if (url.includes("api/v2/users/")) {
    obj.is_vip = true
    obj.vip_start_time = '2024-02-11T09:21:01.498555+08:00'
    obj.vip_end_time = '2030-02-11T09:21:01.498555+08:00'
} else if (url.includes("/api/mac/pro/appcast/force")) {
    obj.items = []
} else if (url.includes("/api/mac/pro/appcast/remind")) {
    obj.items = []
} 


if (isQuanX) {
    $done({ body: JSON.stringify(obj) });
} else if (isSurge) {
    $done({ body: JSON.stringify(obj) });
} else {
    $done({ body: JSON.stringify(obj) });
}
