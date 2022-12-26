<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{invalid: eName}">
      <label for="name">Name</label>
      <input type="text" id="Name" v-model="name" @blur="nameBlur">
      <small v-if="eName">{{eName}}</small>
    </div>

    <div class="form-control" :class="{invalid: ePhone}">
      <label for="phone">Phone</label>
      <input type="text" id="phone" v-model="phone" @blur="phoneBlur">
      <small v-if="ePhone">{{ePhone}}</small>
    </div>

    <div class="form-control" :class="{invalid: eAmount}">
      <label for="amount">Amount</label>
      <input type="number" id="amount" v-model.number="amount" @blur="amountBlur">
      <small v-if="eAmount">{{eAmount}}</small>
    </div>

    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Done</option>
        <option value="cancelled">Canceled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button class="btn primary" :disabled="isSubmitting">Create</button>

  </form>
</template>

<script>

import {useRequestForm} from '../../use/request-form'

export default {
  emits: ['created'],
  setup(_, {emit}) {
    const submit = async values => {
      console.log(values)
      emit('created')
    }
    return {
      ...useRequestForm(submit)
    }
  }
}
</script>

<style scoped>

</style>