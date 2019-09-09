<template>
    <div class="home">
        <Terms v-if="this.currentUserView === 'Terms'" :onAgreeTerms="this.onAgreeTerms" />
        <NameInput v-if="this.currentUserView === 'NameInput'" :on-complete-name="this.onCompleteName"/>
        <Authentification v-if="this.currentUserView === 'Authentification'"  :on-sign-in-success="this.onSignInSuccess"/>
<!--        <DiscordConnecter v-if="this.currentUserView === Application.UserView.DiscordConnecter" />-->
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Terms from '@/components/Terms.vue'; // @ is an alias to /src
    import Authentification from '@/components/Authentification.vue';
    import NameInput from '@/components/NameInput.vue';

    @Component({
        components: {
            Terms,
            Authentification,
            NameInput,
        },
    })
    class Application extends Vue {
        private currentUserView: 'Terms' | 'Authentification' | 'NameInput' | 'DiscordConnecter' = 'Terms';

        private name?: string;
        private uid?: string;
        private discordName?: string;

        protected onAgreeTerms() {
            this.currentUserView = 'NameInput';
        }

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

            if (typeof this.name === 'string') {
                authResult.user.updateProfile({
                    displayName: this.name,
                });
            }

            this.currentUserView = 'DiscordConnecter';

            return false;
        }
    }

    export default Application;
</script>
