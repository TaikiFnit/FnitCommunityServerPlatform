<template>
    <div class="hello">
        <section v-if="causedError === false">
            <h2>認証が完了しました!</h2>
            <p>
                最後のステップはDiscord(チャットルーム)に参加して受付番号を入力することです!<br>
                同じサーバーで遊ぶためには, 入居者間でのコミュニケーションが欠かせません.<br>
                細かいルールなどは入居者主体のディスカッションを通じて決めて, トラブルのない快適なマインクラフト生活にしましょう!
            </p>

            <h3>あなたの受付番号</h3>
            <p v-if="receiptNumber !== null"><strong class="number">{{ receiptNumber }}</strong></p>
            <p v-else><loader /></p>
            <p>この番号をDiscordサーバーに参加して入力してください</p>

            <a href="https://discord.gg/JAA4Qh4" target="_blank"><button type="button" class="discord-button">Discordに参加</button></a>
        </section>
        <section v-else>
            <h2>{{ errorMessage }}</h2>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Loader from './atoms/Loader.vue';

    @Component({
        components: {
            Loader,
        },
    })
    export default class DiscordConnecter extends Vue {
        @Prop() private onMountDiscordConnecter!: () => Promise<string>;
        private receiptNumber: string | null = null;
        private causedError: boolean = false;
        private errorMessage: string = '';

        private mounted() {
            this.onMountDiscordConnecter().then((receiptNumber) => {
                this.receiptNumber = receiptNumber;
            }).catch((err: Error) => {
                this.causedError = true;
                this.errorMessage = err.message;
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

    .number {
        font-size: 2em;
    }

    .discord-button {
        background: #7289DA;
        border: none;
        padding: 10px 40px;
        color: white;
        font-size: 1.1em;
        font-weight: bold;
        border-radius: 5px;
    }
</style>
