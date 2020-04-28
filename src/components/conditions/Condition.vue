<template>
    <div class="condition">
        <div class="row pt-3 pb-1">
            <div class="col-3">
                <div class="condition__id">Условие {{id + 1}}</div>
            </div>
            <div class="col-9">
                <ui-select :value="condition.type" @input="setType($event)" :options="types"></ui-select>
            </div>
        </div>
        <div class="condition__values">
            <div v-for="(value, i) of condition.values" :key="i" class="row pt-3 pb-3 condition__value">
                <div class="condition__prefix">ИЛИ</div>
                <div class="col-3 condition__value-label">{{getTypeValue}} {{i+1}}</div>
                <div class="col-9">
                    <status
                        v-if="condition.type == 'status'"
                        v-model="condition.values[i]"
                        :values="condition.values"
                        @del="deleteValue(i)"
                    ></status>
                    <age
                        v-if="condition.type == 'age'"
                        v-model="condition.values[i]"
                        :values="condition.values"
                        @del="deleteValue(i)"
                    ></age>
                    <type
                        v-if="condition.type == 'type'"
                        v-model="condition.values[i]"
                        :values="condition.values"
                        @del="deleteValue(i)"
                    ></type>
                </div>
            </div>
        </div>
        <div class="row pb-3 pt-1">
            <div class="col-3"></div>
            <div class="col-9">
                <div class="condition__actions">

                    <ui-button v-if="getTypeValue" @onClick="addValue">Добавить {{getTypeValue}}</ui-button>
                    <div></div>

                    <ui-button @onClick="del" color="warn">Удалить условие</ui-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UiButton from "../ui-kit/Button"
import UiSelect from "../ui-kit/Select"
import Status from "./values/Status"
import Age from "./values/Age"
import Type from "./values/Type"

export default {
    props: ["id", "condition"],
    components: {
        UiButton,
        UiSelect,
        Status,
        Age,
        Type
    },
    data() {
        return {
            types: [
                {label: "Выберите условие", value: 'null'},
                {label: "Статус карты лояльности", value: "status"},
                {label: "Тип карты лояльности", value: "type"},
                {label: "Возраст респондента", value: "age"},
            ]
        }
    },
    computed: {
        getTypeValue() {
            if (this.condition.type == 'status') {
                return 'статус'
            }
            
            if (this.condition.type == 'type') {
                return 'тип'
            }

            if (this.condition.type == 'age') {
                return 'диапазон'
            }

            return null
        }
    },
    methods: {
        addValue() {
            this.condition.values.push('null')
        },
        del() {
            this.$emit('delete', this.id)
        },
        deleteValue(id) {
            this.condition.values = this.condition.values.filter((_, i) => i != id)
        },
        setType(newType) {
            this.condition.type = newType
            this.condition.values = ['null']
        }
    },
    created() {
        this.condition.values.length = []
    }
}
</script>

<style lang="scss">
@import "../../root.scss";

.condition {
    &__id {
        color: $primary;
        font-weight: 600;
    }

    &__actions {
        display: flex;
        justify-content: space-between;
    }

    &__values &__value:first-child &__prefix {
        display: none;
    }

    &__prefix {
        border: 1px solid grey;
        border-radius: 5px;
        padding: 5px;
        font-size: 12px;
        width: max-content;
        position: absolute;
        transform: translateY(-40px);
        background: white;
    }
}
</style>