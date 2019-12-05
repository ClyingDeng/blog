<template>
  <div id="addblog">
    <h1>添加博客</h1>
    <!-- <h3>{{msg}}</h3> -->
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />
      <br />
      <label>博客内容</label>
      <textarea v-model="blog.content" id cols="30" rows="10"></textarea>
      <!-- <div id="checkboxes">
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Vue.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="Angular.js" v-model="blog.categories">
        <label>Angular.js</label>
      </div>-->
      <div class="checkbox">
        <el-radio-group v-model="blog.type">
          <el-radio :label="0">Vue.js</el-radio>
          <el-radio :label="1">Node.js</el-radio>
          <el-radio :label="2">React.js</el-radio>
          <el-radio :label="3">Angular.js</el-radio>
        </el-radio-group>
      </div>
      <label>作者：</label>
      <!-- <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>-->
      <el-select v-model="blog.author" placeholder="请选择">
        <el-option
          v-for="item in authors"
          :key="item.value"
          :label="item.label"
          :value="item.label"
        ></el-option>
      </el-select>
      <el-button type="primary" plain @click.prevent="post">添加博客</el-button>
    </form>
    <!-- <hr> -->
    <div v-if="submmited">
      <h3>您的博客发布成功</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="key in blog.type">{{key}}</li>
      </ul>
    </div>
    <p>作者：</p>
    <p>{{blog.author}}</p>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data() {
    return {
      msg: "addBlog",
      types: [],
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
      blog: {
        title: "",
        content: "",
        type: "",
        author: ""
      },
      submmited: ""
    };
  },
  methods: {
    post: function() {
      // this.$store.state.blogs = this.blog;
      console.log(this.blog);
      // this.$http.post('https://jsonplaceholder.typicode.com/posts',{
      //   title:this.blog.title,
      //   body:this.blog.content,
      //   userId:1
      // })
      // .then(function(data){
      //   console.log(data)
      //   this.submmited = true
      // })
      if (
        !this.blog.title ||
        !this.blog.type ||
        !this.blog.content ||
        !this.blog.author
      ) {
        this.$message({
          message: "请完善信息哦",
          type: "warning"
        });
      } else {
        this.$axios
          .post("http://localhost:3000/blog/addBlog", this.blog)
          .then(res => {
            //拿到后台数据赋值给前端
            console.log(res.data.data);
            this.$message({
              message: "博客发布成功",
              type: "success"
            });
            this.submmited = true;
          })
          .catch(err => {
            console.log("错误信息：" + err);
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addblog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  /* display: block; */
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
select {
  display: inline-block;
  width: 100px;
  margin-top: 10px;
}
button {
  display: block;
  margin-top: 10px;
}
.checkbox .el-radio {
  margin-right: 20px;
}
ul{
  list-style: none;
}
</style>
