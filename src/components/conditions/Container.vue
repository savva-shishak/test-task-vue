<template>
    <div class="conditions">
        <div v-for="(item, id) of conditions" :key="id" class="conditions__item">
            <div class="conditions__prefix">И</div>
            <condition
                :id="id" 
                :condition="item" 
                @delete="deleteCondition"
            ></condition>
        </div>
    </div>
</template>

<script>
import Condition from "./Condition"

export default {
    props: ["conditions"],
    components: {
        Condition
    },
    methods: {
        deleteCondition(id) {
            this.$emit('deleteCondition', id)
        }
    },
}
</script>

<style lang="scss">
@import "../../root.scss";

.conditions {
    &__item {
        border-top: 1px solid rgb(206, 206, 206);
        padding: 10px 35px;
    }

    &__item:first-child &__prefix {
        display: none;
    }

    &__prefix {
        border: 1px solid grey;
        border-radius: 5px;
        padding: 10px;
        width: max-content;
        position: absolute;
        transform: translateY(-30px);
        background: white;
    }
}
</style>