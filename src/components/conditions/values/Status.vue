<template>
    <div class="row row_nowrap">
        <ui-select :value="value" @input="$emit('input', $event)" :options="statuses"></ui-select>
        <ui-button color="warn" v-if="values.length > 1" @onClick="del">X</ui-button>
    </div>
</template>

<script>
import Mixin from "./mixin"

export default {
    mixins: [Mixin],
    data() {
        return {
            statuses: [
                {label: 'Выберите статус', value: 'null'},
                {label: 'Активна', value: 'active'},
                {label: 'На обработке', value: 'isHandle'},
            ],
        }
    }
}
</script>

<style lang="scss">

</style>