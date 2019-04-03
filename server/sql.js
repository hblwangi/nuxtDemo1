const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : '148.66.139.56',   // 数据库地址
  user     : 'hblwan1',    // 数据库用户
  password : '6214392hbl',   // 数据库密码
  port     : '3306',
  database : 'nuxtTest'  // 选中数据库
})
 
module.exports = connection