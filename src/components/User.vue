<template lang="html">
  <div class="user_profile">
    <router-link :to="{ name: 'user', params: { id: 123 }}"> 首页 </router-link>
  </div>
</template>

<script>

export default {
  name: 'User',
  data () {
    return {
      next_id: 11
    }
  }
}
</script>

<style lang="css">
</style>
