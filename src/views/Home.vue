<template>
  <div class="home">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Showblog.vue'
// import AddBlog from '@/components/Addblog.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
