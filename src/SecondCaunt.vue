<template>
    <p>SecondCaunter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed:{
            counter(){
                return this.$store.getters.coputedCounter
            }
        }
    }
</script>