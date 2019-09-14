<template>
    <div class="home">
        <NameInput v-if="this.currentUserView === 'NameInput'" :on-complete-name="this.onCompleteName"/>
        <Authentification v-if="this.currentUserView === 'Authentification'" :on-sign-in-success="this.onSignInSuccess"/>
        <DiscordConnecter v-if="this.currentUserView === 'DiscordConnecter'" :on-mount-discord-connecter="this.onApplicationAlmostCompleted"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import NameInput from '@/components/NameInput.vue';
    import Authentification from '@/components/Authentification.vue';
    import DiscordConnecter from '@/components/DiscordConnecter.vue';

    import * as firebase from 'firebase';

    @Component({
        components: {
            NameInput,
            Authentification,
            DiscordConnecter,
        },
    })
    class Application extends Vue {
        private currentUserView: 'NameInput' | 'Authentification' | 'DiscordConnecter' = 'NameInput';

        private name?: string;
        private uid?: string;
        private isNewer?: boolean;

        protected onCompleteName(name: string) {
            this.name = name;
            this.currentUserView = 'Authentification';
        }

        protected onSignInSuccess(authResult: any, redirectUrl: any): boolean {
            this.isNewer = authResult.additionalUserInfo.isNewUser;
            this.uid = authResult.user.uid;
            this.currentUserView = 'DiscordConnecter';

            return false;
        }

        protected async onApplicationAlmostCompleted(): Promise<string> {
            const db = firebase.firestore();

            if (this.isNewer) {
                // 新規の人
                db.collection('players').doc(this.uid).set({
                    name: this.name,
                    uid: this.uid,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                });

                const receiptNumber = await fetch('https://us-central1-fnit-commu.cloudfunctions.net/publishReceiptNumber')
                    .then((response) => response.text());

                db.collection('receipts').doc(this.uid).set({
                    number: receiptNumber,
                    uid: this.uid,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                });

                return receiptNumber;
            }

            // すでにSMS認証済み: 受付番号を忘れた or 名前をミスってやり直してる or 他のアカウントとと同じ電話番号使ってる
            const playerDoc = await db.collection('receipts').doc(this.uid).get();
            if (playerDoc.exists) {
                const data = playerDoc.data();
                if (data !== undefined) {
                    // すでに受付番号が使用済み => すでに登録済みの画面へ飛ばす
                    // if (data.used === true) {
                    //   throw new Error('すでに登録済みです');
                    // }
                    return data.number;
                }
            }

            // 不明な
            throw new Error('エラーが発生しました');
        }
    }

    export default Application;
</script>
