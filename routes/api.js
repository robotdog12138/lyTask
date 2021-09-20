const router = require("koa-router")();
const request = require("request");
function promiseReq(opts = {}) {
  return new Promise((resolve, reject) => {
    request(opts, (e, r, d) => {
      if (e) {
        return reject(e);
      }
      if (r.statusCode != 200) {
        return reject(`back statusCode：${r.statusCode}`);
      }
      return resolve(d);
    });
  });
}
router.prefix("/api");

router.get("/tb", async function (ctx, next) {
  ctx.body = "this is a users response!";
  let res = await promiseReq(
    `https://acs.m.taobao.com/h5/mtop.taobao.buyerresourcemtopwriteservice.applycoupon/3.0/?jsv=2.3.22&appKey=12574478&t=1619659370384&sign=c906594fe02fdef8df837cb5567f57a1&api=mtop.taobao.buyerResourceMtopWriteService.applyCoupon&v=3.0&AntiFlood=true&ecode=1&H5Request=true&type=jsonp&dataType=jsonp&callback=mtopjsonp3&data=%7B%22uuid%22%3A%22934ccda4454b47009b234a34c8495974%22%2C%22shortName%22%3A%22%22%2C%22supplierId%22%3A%222634283647%22%2C%22originalSellerId%22%3A%22%22%2C%22marketPlace%22%3A%22%22%7D`
  );
  ctx.body = res;
});

module.exports = router;
