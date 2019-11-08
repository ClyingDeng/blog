<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <AddBlog></AddBlog>
  </div>
</template>
<script>
import AddBlog from '@/components/Addblog'
export default {
  name: 'about',
  components: {
    AddBlog
  }
}
</script>