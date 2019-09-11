<template>
    <div class="hello">
        <h2>認証が完了しました!</h2>
        <p>
            最後のステップはDiscord(チャットルーム)に参加して受付番号を入力するです!
            同じサーバーで遊ぶためには, 入居者間でのコミュニケーションが欠かせません.
            細かいルールなどは入居者主体のディスカッションを通じて決めて, トラブルのない快適なマインクラフト生活にしましょう!
        </p>

        <h3>あなたの受付番号</h3>
        <p><strong>{{ receiptNumber }}}</strong></p>
        <p>この番号をDiscordサーバーに参加して入力してください</p>

        <a href="https://discord.gg/JAA4Qh4"><button type="button">Discordに参加</button></a>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DiscordConnecter extends Vue {
        @Prop() private onMountDiscordConnecter!: () => Promise<string>;
        private receiptNumber?: string;

        private mounted() {
            this.onMountDiscordConnecter().then((receiptNumber) => {
                this.receiptNumber = receiptNumber;
            });
        }
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
