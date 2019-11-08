<template>
  <div id="addblog">
    <h1>添加博客</h1>
    <!-- <h3>{{msg}}</h3> -->
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required/>
      <br>
      <label>博客内容</label>
      <textarea v-model="blog.content" id="" cols="30" rows="10"></textarea>
      <div id="checkboxes">
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Vue.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="Angular.js" v-model="blog.categories">
        <label>Angular.js</label>
      </div>
      <label>作者：</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button @click.prevent = "post">添加博客</button>
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
        <li v-for="key in blog.categories">{{key}}</li>
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
      blog:{
        title:'',
        content:'',
        categories:[],
        author:''
      },
      authors:['Clying','Kero','Nancy','Make'],
      submmited:''
    };
  },
  methods:{
    post:function(){
      this.$store.state.blogs = this.blog
      console.log( this.$store.state.blogs)
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        title:this.blog.title,
        body:this.blog.content,
        userId:1
      })
      .then(function(data){
        console.log(data)
        this.submmited = true
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #addblog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label{
    /* display: block; */
    margin: 20px 0 10px;
  }
  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  select{
    display: inline-block;
    width: 100px;
    margin-top: 10px;
  }
  button{
    display: block;
    margin-top: 10px;
  }
</style>
