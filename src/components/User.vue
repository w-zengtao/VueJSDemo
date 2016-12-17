<template lang="html">
  <div class="user_profile">
    <router-link :to="{ name: 'user', params: { id: next_id }}"> 首页 </router-link>
    <router-view></router-view>
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
