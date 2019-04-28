<template>
  <div class="modal-cover" @click="$emit('toggle-modal')">
    <div class="modal" @click.stop>
      <div class="modal-header">
        {{ title }}
        <slot name="header"></slot>
      </div>
      <slot></slot>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Modal title",
    },
  },
}
</script>

<style lang="less" scoped>
button {
  background: none;
  padding: 16px 32px;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
}
.modal-cover {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 2;
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
    .modal-header {
      font-size: 24px;
      border-bottom: 1px solid grey;
      margin-bottom: 8px;
    }
    .modal-footer {
      position: absolute;
      bottom: 0;
      padding: 24px;
      width: 100%;
    }
  }
}
</style>
