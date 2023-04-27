<template>
  <q-page class="flex flex-center">
    <img
      alt="Taylor +"
      src="~assets/logox200.png"
      style="width: 200px; height: 70px"
    >
    
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar';
export default defineComponent({
  name: 'IndexPage',
  setup() {
    const $q = useQuasar();
    return{
      toggleDarkMode() {
        $q.dark.toggle();
      },
    };
  },
});
</script>
