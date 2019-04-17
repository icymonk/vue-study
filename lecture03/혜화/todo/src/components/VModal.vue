<template>
  <div class="modal-cover" v-show="modal" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="modal-header">
        {{ title }}
        <slot name="header"></slot>
      </div>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  }
};
</script>

<style scoped>
.modal-cover {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 2;
}
.modal {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid grey;
  background: white;
  border-radius: 16px;
  padding: 32px;
  z-index: 3;
  box-shadow: 4px 4px 4px 4px #666;
}
.modal-header {
  font-size: 24px;
  border-bottom: 1px solid grey;
  margin-bottom: 8px;
}
</style>
