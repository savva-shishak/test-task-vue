import UiSelect from "../../ui-kit/Select"
import UiButton from "../../ui-kit/Button"

export default {
    props: ["value", "values"],
    components: {
        UiSelect,
        UiButton
    },
    methods: {
        del() {
            this.$emit('del', this.value);
        }
    }
}