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
    import DiscordConnecter from "@/components/DiscordConnecter.vue";

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

        protected onCompleteName(name: string) {
            this.name = name;
            this.currentUserView = 'Authentification';
        }

        protected onSignInSuccess(authResult: any, redirectUrl: any): boolean {
            const isNewer = authResult.additionalUserInfo.isNewUser;

            if (isNewer) {
                // 登録済み
                return false;
            }

            this.uid = authResult.user.uid;
            this.currentUserView = 'DiscordConnecter';

            return false;
        }

        protected async onApplicationAlmostCompleted() {
            const db = firebase.firestore();

            db.collection('players').doc(this.uid).set({
                name: this.name,
                uid: this.uid,
            });

            const receipt_number = await fetch('https://us-central1-fnit-commu.cloudfunctions.net/publishReceiptNumber')
                .then(response => response.text());

            db.collection('receipt').doc(this.uid).set({
                number: receipt_number,
                uid: this.uid,
            });
        }
    }

    export default Application;
</script>
