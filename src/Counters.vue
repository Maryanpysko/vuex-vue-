<template>
    <div>
        <button class="btn btn-primary" @click="increment(1)">Increment</button>
        <button class="btn btn-primary" @click="decrement(-1)">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
                 
            increment(val) {
                this.$store.dispatch('asyncChangeCaunter',val)
            },
            decrement(val){
                this.$store.dispatch('asyncChangeCaunter',val)
            }
        }
    }
</script>