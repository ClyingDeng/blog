<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/" exact>首页</router-link>
      </li>
      <li>
        <router-link to="/about" exact>添加博客</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Headnav"
};
</script>
<style lang="scss" scoped>
#nav {
  height: 70px;
  background-color: crimson;
  margin-bottom: 20px;
  text-align: center;
}
ul{
    list-style: none;
    line-height: 70px;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #ffffff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}
.router-link-active{
    background: rgba(255,255,255, 0.8);
    color: #444444;
}
</style>