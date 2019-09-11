<template>
    <Terms />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Terms from '@/components/Terms.vue';

@Component({
    components: {
        Terms,
    },
})
export default class TermsView extends Vue {}
</script>