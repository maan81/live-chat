<template>
  <div class="container">
    <Navbar />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import getUser from '../composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { Navbar },
  setup(){
    const router = useRouter();
    const { user } = getUser();

    watch(user, () => {
      if(!user.value){
        router.push({ name: 'Welcome' });
      }
    });

    return { user };
  }
};
</script>
<style>
</style>
