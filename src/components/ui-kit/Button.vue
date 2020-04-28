<template>
    <div @click="click" :class="'btn btn_' + (color? color : 'primary')">
        <div class="btn__padding-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ["color"],
    methods: {
        click() {
            this.$emit('onClick')
        }
    }
}
</script>

<style lang="scss">
@import "../../root.scss";

.btn {
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    width: max-content;

    &_primary {
        color: $primary;
        border-color: $primary;
    }

    &_warn {
        color: $warn;
        border-color: $warn;
    }

    &__padding-container {
        padding: 8px;
    }
}
</style>