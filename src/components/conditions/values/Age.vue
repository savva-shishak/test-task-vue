<template>
    <div class="age">
        <div class="age__input">
            <ui-input label="от" :color="isCorrect? 'primary' : 'warn'" :value="value.from" @input="value.from = $event" ></ui-input>
        </div>
        <div class="age__input">
            <ui-input label="до" :color="isCorrect? 'primary' : 'warn'" :value="value.to" @input="value.to = $event" ></ui-input>
        </div>
        <ui-button color="warn" v-if="values.length > 1" @onClick="del">X</ui-button>
    </div>
</template>

<script>
import Mixin from "./mixin"
import UiInput from "../../ui-kit/Input"

export default {
    mixins: [Mixin],
    components: {
        UiInput
    },
    created() {
        this.$emit('input', {from: 0, to: 0})
    },
    computed: {
        isCorrect() {
            const {from, to} = this.value

            if (from == 0 && to == 0) {
                return false
            }

            return from <= to
        }
    }
}
</script>

<style lang="scss">
.age {
    display: flex;
    align-items: center;

    &__input {
        width: 100px;
        padding: 0 10px;
    }
}
</style>