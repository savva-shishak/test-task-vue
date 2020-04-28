<template>
    <div class="row row_nowrap">
        <ui-select :value="value" @input="$emit('input', $event)" :options="types"></ui-select>
        <ui-button color="warn" v-if="values.length > 1" @onClick="del">X</ui-button>
    </div>
</template>

<script>
import Mixin from "./mixin"

export default {
    mixins: [Mixin],
    data() {
        return {
            types: [
                {label: 'Выберите тип', value: 'null'},
                {label: 'Gold', value: 'gold'},
                {label: 'Не gold', value: 'nogold'},
            ],
        }
    }
}
</script>

<style lang="scss">

</style>