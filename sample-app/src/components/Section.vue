<template>
  <section class="wrapper">
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppSection"
};
</script>

<style scoped>
.wrapper {
  background-color: white;
  display: flex;
  flex-flow: row;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.section-content {
  width: 100%;
  max-width: 1024px;
}
</style>
