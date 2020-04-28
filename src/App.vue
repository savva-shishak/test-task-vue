<template>
  <div class="container">
    <Card>
      <div class="generator">
        <div class="generator__conditions">
          <cond-container :conditions="conditions" @deleteCondition="deleteCondition"></cond-container>
        </div>
        <div @click="add" class="generator__add">
          <div class="generator__addinglabel">
            <div>+</div>
            Нажмите чтобы добавить новое условие выборки. Все условия связываются между собой логическим
            <div>"И"</div>
          </div>
        </div>
      </div>
      <ui-button @onClick="test">Протестировать опрос</ui-button>
      <span v-if="isTested" class="container__result">Результат в консоли</span>
    </Card>
  </div>
</template>

<script>
import Card from "./components/Card"
import CondContainer from "./components/conditions/Container"
import UiButton from "./components/ui-kit/Button"

export default {
  name: 'App',
  components: {
    Card,
    CondContainer,
    UiButton
  },
  data() {
    return {
      conditions: [],
      isTested: false
    }
  },
  computed: {
    result() {
      const result = {}

      for (const cond of this.conditions) {
        let type = cond.type
        let values = cond.values

        if (!result[type]) {
          result[type] = []
        }
        
        if (type == 'age') {
          values = values.map(({from, to}) => new Object({from, to}))
        }

        result[type].push(...values)
      }

      return result
    }
  },
  methods: {
    add() {
      this.conditions.push({
        type: "null",
        values: []
      }) 
    },
    deleteCondition(id) {
      this.conditions = this.conditions.filter((_, i) =>  i != id)
    },
    test() {
      console.log(this.result);
      this.isTested = true;
    }
  }
}
</script>

<style lang="scss">
@import "./root.scss";

.container {
  padding: 0 calc(50vw - 450px);
}

.generator {
  &__add {
    padding: 15px;
    background: #f1eff1;
    border-radius: 5px;
    box-shadow: 0 1px 2px 1px rgb(151, 151, 151);
    margin: 15px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 1px 2px 1px rgb(170, 170, 170);
    }

    &:active {
      box-shadow: 0 1px 2px 1px rgb(194, 192, 192);
    }
  }

  &__addinglabel {
    margin: 0 auto;
    max-width: 370px;
    text-align: center;
    color: $primary;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none; 
  }
}
</style>
