<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result ></app-result>
                <app-second></app-second>
                <hr>
                <app-counter ></app-counter>
            </div>
        </div>
    </div>
</template>

<script>
    import Counters from './Counters.vue';
    import Result from './Result.vue';
    import SecondCaunter from './SecondCaunt'
    export default {
        
        components: {
            appCounter: Counters,
            appResult: Result,
            appSecond: SecondCaunter,
        }
    }
</script>
