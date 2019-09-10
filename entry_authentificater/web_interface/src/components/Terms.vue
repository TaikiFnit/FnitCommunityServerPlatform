<template>
    <div class="hello">
        <h2>入居規約</h2>
        <section>
            <h3>1. 用語の定義</h3>
            <dl>
                <dt>1.1. 運営者</dt>
                <dd>Minecraft BE Serverをホスティング・管理を行っている者</dd>
                <dt>1.2 ふにっとシェアハウス</dt>
                <dt>運営者がホスティング・管理しているMinecraft BE Serverの名称</dt>
                <dt>1.3 入居者</dt>
                <dd>ふにっとシェアハウスへ接続してそのリソースを利用するもの</dd>
                <dt>1.4 入居申請</dt>
                <dd>ふにっとシェアハウスのホワイトリストに登録をするための一連の手順のこと</dd>
                <dt>1.5 創作物</dt>
                <dd>ふにっとシェアハウスで入居者が作成した建築物, 景観, 作品などを含む入居者自身によってワールド上に作成されたオリジナルのもの</dd>
            </dl>
        </section>

        <section>
            <h3>2. 入居手順</h3>
            <p>ふにっとシェアハウスでは, 入居者間での活発なコミュニケーションとディスカッションを行うため, また他者の創作物へのいたずらの防止の為, 以下の入居申請が必要です.</p>

            <ol>
                <li>2.1 Xbox live ゲーマータグの入力</li>
                <li>2.2 電話番号を用いたSMS認証</li>
                <li>2.3 Discordサーバーへの参加</li>
            </ol>

            <p>
                それぞれのステップで入力された情報は目的以外には利用しません.
                それぞれの目的は以下のとおりです
            </p>

            <ol>
                <li>2.a.1 サーバーのホワイトリストの登録に利用</li>
                <li>2.a.2 同一人物による複数アカウントでの参加防止の為利用</li>
                <li>2.a.3 入居者間のコミュニケーション, ディスカッションのため</li>
            </ol>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Terms extends Vue {}
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
