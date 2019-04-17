<template>
  <div>
    MAIN
    <v-modal :modal="modal" @close-modal="modal = false"></v-modal>
  </div>
</template>

<script>
import VModal from "../components/VModal.vue";

export default {
  components: {
    "v-modal": VModal
  },
  data() {
    return {
      modal: true
    };
  }
};
</script>
