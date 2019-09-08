<template>
    <div class="home">
        <Terms v-if="agreedTerms === false" :onAgreeTerms="this.onAgreeTerms" />
        <Authentification v-if="agreedTerms === true" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Terms from '@/components/Terms.vue'; // @ is an alias to /src
    import Authentification from '@/components/Authentification.vue';

    @Component({
        components: {
            Terms,
            Authentification
        },
    })
    export default class Application extends Vue {
        private agreedTerms: boolean = false;

        onAgreeTerms() {
            this.agreedTerms = true;
        }
    }
</script>
