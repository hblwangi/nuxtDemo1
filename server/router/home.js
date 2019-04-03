const Koa = require("koa")
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const sql = require('../sql')
let res = null;

router.prefix('/api')

let query = (sqls) => {
    return new Promise((resolve, reject) => {
      sql.query(sqls, (err, res, fl) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
}

router.get('/list', async (ctx, next) => {
  ctx.body = await query('SELECT * FROM blogList;')
})

module.exports = router
