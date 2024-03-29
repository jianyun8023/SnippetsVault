const url = $request.url;
const header = $request.headers;
const isQuanX = typeof $task !== "undefined";
const isLoon = typeof $loon != "undefined"
const isSurge = typeof $httpClient != "undefined" && !isLoon
let ua = header["User-Agent"] || header["user-agent"];

if (url.includes("/amdc/mobileDispatch")) {
  if (
    ua.includes("AMapiPhone") || // 高德地图
    ua.includes("Alibaba") || // 阿里巴巴
    ua.includes("Cainiao4iPhone") || // 菜鸟
    ua.includes("%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C") // 飞猪旅行
  ) {
    if (isQuanX) {
      $done({ status: "HTTP/1.1 404 Not Found" });
    } else if(isSurge){
        $done({ status: 404 });
    } else {
      $done();
    }
  } else {
    $done({});
  }
} else {
  $done({});
}