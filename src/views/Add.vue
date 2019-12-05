<template>
  <div class="about">
    <el-col :span="16" :offset="4">
      <AddBlog></AddBlog>
    </el-col>
  </div>
</template>
<script>
import AddBlog from "@/components/Addblog";
export default {
  name: "add",
  components: {
    AddBlog
  }
};
</script>