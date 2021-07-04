const mysql = require('mysql')
const dbConfig = require('./config/dbConfig')

module.exports = {
  query: function(sql, params, callback) {
    const db = mysql.createConnection(dbConfig)
    db.query(sql, params, function(err, results, fields) {
      if(err) {
        throw err
      }
      callback && callback(JSON.parse(JSON.stringify(results)), JSON.parse(JSON.stringify(fields)));
      // 关闭数据库
      // connection.end(function(err){
      //   if(err){
      //       console.log('关闭数据库链接失败！');
      //       throw err;
      //   }
      // });
    })
  },
}