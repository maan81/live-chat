<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  setup(props, context) { // props & context are the default params for setup
    // refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    // useSignup
    const { error, signup } = useSignup()

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      console.log('user signed up')
      if(!error.value){
        // console.log('user logged in');
        context.emit('signup'); // signup custom event call
      }
    }

    return { displayName, email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>