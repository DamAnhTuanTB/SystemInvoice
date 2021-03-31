<template>
  <div class="wrap-content">
    <div class="wrap-text">
      <comp-document-bussiness
        v-bind:activePage="activePage"
        v-bind:activeContent="activeContent"
      />

      <comp-document-api
        v-bind:activePage="activePage"
        v-bind:activeContent="activeContent"
      />
    </div>
  </div>
</template>

<script>
import CompDocumentApi from "./CompDocumentApi.vue";
import CompDocumentBussiness from "./CompDocumentBussiness.vue";
export default {
  components: { CompDocumentBussiness, CompDocumentApi },
  name: "CompContent",
  props: {
    activePage: String,
    activeContent: String,
  },
  data() {
    return {};
  },
};
</script>

<style>
.display-none {
  display: none;
}

.wrap-content {
  padding-left: 18rem;
  box-sizing: border-box;
}

.wrap-text {
  max-width: 772px;
  margin: auto;
  padding: 0rem 0.5rem;
}
</style>