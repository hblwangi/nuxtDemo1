const Router = require('koa-router')
const router = new Router()
const query = require('../sql')


router.prefix('/api')

router.get('/list', async (ctx, next) => {
  try {
    const result = await query('SELECT * FROM blogList;')
    ctx.body = result
  } catch (error) {
    console.log("Home Api Error : " + error)
  }
  
})

module.exports = router
