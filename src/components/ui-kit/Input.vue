<template>
    <div :class="'input input_' + (color? color : 'primary')">
        <div class="input__label">{{label}}</div>
        <input :value="value" @input="$emit('input', $event.target.value)" type="text" class="input__control">
    </div>
</template>

<script>
export default {
    props: ["value", "label", "color"]
}
</script>

<style lang="scss">
@import "../../root.scss";

.input {
    width: 100%;
    display: flex;
    align-items: center;

    &__label {
        padding-right: 10px;
    }

    &__control {
        padding: 8px;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 2px solid rgb(206, 206, 206);
        margin-bottom: 0;

        &:hover, &:active {
            border: 2px solid $primary;
        }

        &:focus {
            outline: none;
        }
    }

    &_primary {
        color: $primary;
    }

    &_primary &__control {
        border: 2px solid $primary;
    }

    &_warn {
        color: $warn;
    }

    &_warn &__control {
        border: 2px solid $warn;
    }
}
</style>