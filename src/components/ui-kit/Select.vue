<template>
    <div class="select">
        <select :value="value" @input="$emit('input', $event.target.value)" class="select__control">
            <option v-for="(option, i) of options" :key="i" :value="option.value">{{option.label}}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: ["options", "value"],
}
</script>

<style lang="scss">
@import "../../root.scss";

.select {
    width: 100%;

    &__control {
        padding: 8px;
        width: 100%;
        border-radius: 5px;
        border: 2px solid rgb(206, 206, 206);

        &:hover, &:active {
            border: 2px solid $primary;
        }

        &:focus {
            outline: none;
        }
    }
}
</style>