<template>
  <div v-theme:column="'wide'" class="showblog">
    <h2>博客首页</h2>
    <el-input type="text" v-model="search" placeholder="请输入搜索内容"></el-input>
    <div v-for="blog in filteredBlogs" class="singleblog">
      <h2 v-rainbow style="display:inline-block;">{{blog.title | to-uppercase | snippet}}</h2>
      <el-button
        type="info"
        icon="el-icon-delete"
        circle
        style="float:right;margin-top:20px;z-index:100;"
        @click="remove(blog)"
      ></el-button>
      <el-button
        type="primary"
        icon="el-icon-edit"
        circle
        style="float:right;margin:20px;"
        @click="edit(blog)"
      ></el-button>
      <article>{{blog.content | snippet2}}</article>
    </div>
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form label-position="right" label-width="80px" :model="nowBlog">
        <el-form-item label="博客标题">
          <el-input v-model="nowBlog.title"></el-input>
        </el-form-item>
        <el-form-item label="博客内容">
          <!-- <el-input v-model="nowBlog.content"></el-input> -->
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="nowBlog.content"></el-input>
        </el-form-item>
        <el-form-item label="博客类型">
          <el-radio-group v-model="nowBlog.type">
            <el-radio :label="0">Vue.js</el-radio>
            <el-radio :label="1">Node.js</el-radio>
            <el-radio :label="2">React.js</el-radio>
            <el-radio :label="3">Angular.js</el-radio>
          </el-radio-group>
          <!-- <el-input v-model="nowBlog.type"></el-input> -->
        </el-form-item>
        <el-form-item label="作者">
          <el-select v-model="nowBlog.author" placeholder="请选择">
            <el-option
              v-for="item in authors"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
          <!-- <el-input v-model="nowBlog.author"></el-input> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      blogs: [],
      authors: [
        {
          value: "1",
          label: "clying"
        },
        {
          value: "2",
          label: "Deng"
        },
        {
          value: "3",
          label: "Hero"
        },
        {
          value: "4",
          label: "Make"
        }
      ],
      search: "",
      nowBlog: {},
      dialogVisible: false
    };
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.toString().slice(0, 10) + "...";
    },
    snippet2(value) {
      return value.toString().slice(0, 50) + "...";
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  },
  created() {
    // this.$http
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then(function(data) {
    //     // console.log(data)
    //     this.blogs = data.body.slice(0, 10);
    //     console.log(this.blogs);
    //   });
    this.getAllBlog();
  },
  methods: {
    getAllBlog() {
      this.$axios
        .get("http://localhost:3000/blog/showBlog")
        .then(res => {
          //拿到后台数据赋值给前端
          this.blogs = res.data.data;
        })
        .catch(err => {
          console.log("错误信息：" + err);
        });
    },
    edit(blog) {
      this.dialogVisible = true;
      this.nowBlog = blog;
    },
    sure() {
      console.log(this.nowBlog);
      this.$axios
        .post("http://localhost:3000/blog/updateBlog", {
          title: this.nowBlog.title,
          content: this.nowBlog.content,
          type: this.nowBlog.type,
          author: this.nowBlog.author,
          Id: this.nowBlog.Id
        })
        .then(res => {
          //拿到后台数据赋值给前端
          console.log(res.data.data);
          this.$message({
            message: "修改成功"
          });
          this.getAllBlog();
        })
        .catch(err => {
          console.log("错误信息：" + err);
        });
      this.dialogVisible = false;
    },
    remove(curBlog) {
      console.log(curBlog.Id);
      this.$axios
        .post("http://localhost:3000/blog/deleteBlog", { Id: curBlog.Id })
        .then(res => {
          //拿到后台数据赋值给前端
          console.log(res.data.data);
          this.$message({
            message: "删除成功"
          });
          this.getAllBlog();
        })
        .catch(err => {
          console.log("错误信息：" + err);
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.showblog {
  max-width: 800px;
  margin: 0 auto;
}
.singleblog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
// .singleblog .delete{
//   position: relative;
//  right: 0;
// }
</style>
