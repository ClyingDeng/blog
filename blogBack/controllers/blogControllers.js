var blogDAO = require('../models/blogDAO');
var blogControllers = {
    //查询
    showBlog: function (req, res) {
        blogDAO.showBlog(function (err, results) {
            if (err) {
                res.json({ code: 500, msg: '查询失败！' })
            } else {
                res.json({ code: 200, data: results, msg: '查询成功！' })
            }
        })
    },
    //添加
    addBlog: function (req, res) {
        console.log(req.body);
        blogDAO.addBlog({title:req.body.title,content:req.body.content,type:req.body.type,author:req.body.author},function (err, results) {
            if (err) {
                res.json({ code: 500, msg: '添加失败！' })
            } else {
                res.json({ code: 200, data: results.affectedRows, msg: '添加成功！' })
            }
        })
    },
    //修改
    updateBlog: function (req, res) {
        console.log(req.body);
        blogDAO.updateBlog({title:req.body.title,content:req.body.content,type:req.body.type,author:req.body.author,Id:req.body.Id},function (err, results) {
            if (err) {
                res.json({ code: 500, msg: '添加失败！' })
            } else {
                res.json({ code: 200, data: results.affectedRows, msg: '添加成功！' })
            }
        })
    },
    //删除
    deleteBlog: function (req, res) {
        blogDAO.deleteBlog({Id:req.body.Id},function (err, results) {
            if (err) {
                res.json({ code: 500, msg: '删除失败！' })
            } else {
                res.json({ code: 200, data: results.affectedRows, msg: '删除成功！' })
            }
        })
    },
}
module.exports = blogControllers