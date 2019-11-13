<template>
  <div v-theme="'wide'" class="showblog">
    <h2>博客首页</h2>
    <div v-for="blog in blogs" class="singleblog">
      <h2 v-rainbow>{{blog.title}}</h2>
      <article>{{blog.body}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      blogs: []
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        // console.log(data)
        this.blogs = data.body.slice(0, 10);
        console.log(blogs);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.showblog{
  max-width: 800px;
  margin: 0 auto;
}
.singleblog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
