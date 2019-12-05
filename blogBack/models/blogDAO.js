var DAO = require('./DAO')
var blogDAO = {
    //查询博客
    showBlog: function ( callback) {
        DAO('select Id,title,content,type,author from blog', function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    addBlog: function (blog, callback) {
        DAO('insert blog(title,content,type,author) values (?,?,?,?);',[blog.title,blog.content,blog.type,blog.author], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    deleteBlog: function (blog, callback) {
        DAO('delete from blog where ID = ?',[blog.Id], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
    updateBlog: function (blog, callback) {
        DAO('update blog set title = ? ,content = ?,type = ?,author = ? where Id = ?',[blog.title,blog.content,blog.type,blog.author,blog.Id], function (err, results) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, results)
            }
        })
    },
}
module.exports = blogDAO