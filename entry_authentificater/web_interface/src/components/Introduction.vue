<template>
  <div class="hello">
    <h1>ふにっとシェアハウスへようこそ</h1>
    <p>
      ふにっとシェアハウスは, Minecraft Bedrock Edition(PE, Win10)のマルチプレイサーバーです. <br>
      このサーバーは, バニラなマインクラフトを多人数で楽しむためにホストされています.
    </p>
    <h3>新規入居希望の方</h3>
    <p>
      こちらから入居申請を行ってください
    </p>
    <router-link to="/agreement">
      <button type="button">入居申請</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Introduction extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
