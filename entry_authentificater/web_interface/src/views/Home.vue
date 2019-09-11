<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <loader />
    <Introduction />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Introduction from '@/components/Introduction.vue'; // @ is an alias to /src

@Component({
  components: {
    Introduction,
  },
})
export default class Home extends Vue {}
</script>
