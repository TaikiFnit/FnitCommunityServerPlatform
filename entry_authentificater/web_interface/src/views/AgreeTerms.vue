<template>
    <div class="hello">
        <Terms/>

        <p>これらの規約に同意して, 入居申請を行う場合同意するを押してください</p>

        <router-link to="/application">同意する</router-link>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Terms from '@/components/Terms.vue';

    @Component({
        components: {
            Terms,
        },
    })
    export default class Introduction extends Vue {}
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
