<template>
  <AppSection>
    <h1>🔥 ✅ Client-side FHIR Validation</h1>
    <p class="intro">
      This FHIR validator was created to showcase the validation of FHIR
      resources using JavaScript directly in the browser without the need for
      unsafe-eval CSP headers. You can read
      <a
        href="https://www.d4l.io/blog/fhir-resource-validation-for-fun-and-nonprofit/"
        >more about our approach and its limits</a
      >
      and use the
      <a href="https://www.npmjs.com/package/@d4l/js-fhir-validator"
        >npm module</a
      >
      in your project.
    </p>
  </AppSection>
  <Validator />
</template>

<script>
import Validator from "./components/Validator.vue";
import AppSection from "./components/Section";

export default {
  name: "App",
  components: {
    Validator,
    AppSection
  }
};
</script>

<style>
:root {
  --color-primary: #000080;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-primary);
}

body {
  background-color: #f2f0f1;
  margin: 0;
  padding: 0;
}
</style>
