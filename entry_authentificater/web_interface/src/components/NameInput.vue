<template>
    <div class="hello">
        <h2>1. ゲーマータグの入力</h2>
        <p>
            マインクラフトで利用しているゲーマータグ(プレイヤーネーム)を入力してください.<br/>
            入力されたゲーマータグはホワイトリストの登録に利用するため, <strong>大文字小文字・スペース等も含めて正確に</strong>入力してください.
        </p>

        <input type="text" v-model="playerName">

        <button @click="onCompleteName(playerName)">次へ進む</button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Introduction extends Vue {
        @Prop() private onCompleteName!: (name: string) => void;

        private playerName: string = '';
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
