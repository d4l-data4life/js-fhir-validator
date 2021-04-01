<template>
  <AppSection id="inputregion">
    <label for="source">Your FHIR source</label>
    <textarea name="source" id="source" v-model="source"></textarea>
    <div class="formgroup">
      <button @click="validate" :disabled="!source || source.length < 10">
        Validate
      </button>
      <div>
        <span>FHIR version</span>
        <input
          type="radio"
          name="version"
          id="r4"
          value="r4"
          v-model="version"
        /><label for="r4">R4</label>
        <input
          type="radio"
          name="version"
          id="stu3"
          value="stu3"
          v-model="version"
        /><label for="stu3">STU3</label>
      </div>
    </div>
  </AppSection>
  <AppSection id="resultregion" v-if="result !== null">
    <p v-show="result" class="valid">✅ Valid!</p>
    <p v-show="!result" class="invalid">❌ Invalid</p>
    <p v-if="simpleError">{{ simpleError }}</p>
    <div v-if="jsonErrors !== null">
      <p
        v-if="
          jsonSource.resourceType === 'Bundle' &&
            jsonSource.entry &&
            jsonSource.entry[0].resource
        "
      >
        You tried to validate a Bundle resource, but this validator cannot
        inspect nested entries. Try to remove the "entry" property and validate
        the Bundle resource without it, then validate all entries individually.
      </p>
      <p v-if="jsonSource.contained && jsonSource.contained[0]">
        You tried to validate a resource with contained resources, but this
        validator cannot inspect them. Try to remove the "contained" property
        and validate your resource without it, then validate all contained
        resources individually.
      </p>
      <h3>Validator output</h3>
      <div
        v-for="(jsonError, index) in jsonErrors"
        :key="index"
        class="vjs-container"
      >
        <vue-json-pretty :data="jsonError"> </vue-json-pretty>
      </div>
    </div>
    <div v-if="jsonSource !== null">
      <h3>Formatted JSON data</h3>
      <vue-json-pretty v-if="jsonSource !== null" :data="jsonSource">
      </vue-json-pretty>
    </div>
  </AppSection>
</template>

<script lang="ts">
import AppSection from "./Section";

import { defineComponent } from "vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

export default defineComponent({
  name: "Validator",
  components: { VueJsonPretty, AppSection },
  data: function() {
    return {
      source: "",
      version: "r4",
      jsonSource: null,
      simpleError: null,
      jsonErrors: null,
      result: null
    };
  },
  methods: {
    async validate() {
      let sourceAsJson;
      this.jsonSource = null;
      this.simpleError = null;
      this.jsonErrors = null;
      this.result = null;
      try {
        sourceAsJson = JSON.parse(this.source);
      } catch (e) {
        this.simpleError = "You need to enter valid JSON.";
        this.result = false;
      }
      if (sourceAsJson) {
        this.jsonSource = sourceAsJson;
        const resourceType = sourceAsJson.resourceType;
        if (!resourceType) {
          this.simpleError = "Source does not have a resourcetype";
        } else if (sourceAsJson.extension || sourceAsJson.modifierExtension) {
          this.simpleError = "Extensions are not supported.";
        } else {
          let validatorModule;
          try {
            validatorModule = await import(
              `@d4l/js-fhir-validator/${this.version}/js/${resourceType}`
            );
          } catch (e) {
            this.simpleError = `No validation schema found for resourceType ${resourceType}`;
            this.result = false;
          }
          if (validatorModule) {
            const validatorFunction = validatorModule.default;

            const validationResult = validatorFunction(sourceAsJson);
            if (!validationResult) {
              this.jsonErrors = validatorFunction.errors;
              this.result = false;
            } else {
              this.result = true;
            }
          }
        }
      }
    }
  }
});
</script>

<style scoped>
section:last-of-type {
  padding-bottom: 60px;
}

label,
h3 {
  display: block;
  font-weight: 600;
}
textarea {
  width: calc(100vw - 80px);
  max-width: 1024px;
  height: 400px;
  font-family: monospace;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  border-radius: 5px;
  font-weight: 600;
  padding: 5px 15px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
}

button:disabled {
  cursor: auto;
  border-color: grey;
  background-color: grey;
  color: lightgray;
}

.valid {
  display: inline-block;
  border: 1px solid #00855f;
  color: #00855f;
  padding: 5px;
}

.invalid {
  display: inline-block;
  border: 1px solid #d53939;
  color: #d53939;
  padding: 5px 10px;
}

#inputregion {
  padding-top: 20px;
  padding-bottom: 20px;
  background: #e5e6f2;
}

#resultregion {
  background: #faf8f8;
}

.formgroup {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.formgroup label {
  display: inline;
}

textarea,
.vjs-tree {
  background: white;
  padding: 20px;
  border: 1px solid var(--color-primary);
}

.vjs-container {
  margin-bottom: 10px;
}
</style>
