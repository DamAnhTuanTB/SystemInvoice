<template>
  <div class="wrap-app">
    <comp-navbar
      v-bind:activePage="activePage"
      v-on:handleClickNavbar="handleClickNavbar"
      @handleClickSearch="handleClickSearch"
    />

    <div class="wrap-sidebar-content">
      <comp-sidebar
        v-bind:activePage="activePage"
        v-bind:activeContent="activeContent"
        v-on:handleClickSidebar="handleClickSidebar"
      />

      <comp-content
        v-bind:activePage="activePage"
        v-bind:activeContent="activeContent"
      />
    </div>
  </div>
</template>

<script>
import CompContent from "./components/CompContent.vue";
import CompNavbar from "./components/CompNavbar.vue";
import CompSidebar from "./components/CompSidebar.vue";

export default {
  name: "app",
  components: {
    CompNavbar,
    CompContent,
    CompSidebar,
  },
  data() {
    return {
      activePage: localStorage.getItem("activePage") ? localStorage.getItem("activePage"): "0",
      activeContent: localStorage.getItem("activeContent") ? localStorage.getItem("activeContent") : "00",
    };
  },
  methods: {
    handleClickNavbar(data) {
      this.activePage = data;
      this.activeContent = data + "0";
      localStorage.setItem("activePage", this.activePage);
      localStorage.setItem("activeContent", this.activeContent);
    },
    handleClickSidebar(data) {
      this.activeContent = data;
      localStorage.setItem("activeContent", this.activeContent);
    },
    handleClickSearch(data) {
      this.activePage = String(data.activePage);
      this.activeContent = String(data.activeContent);
      localStorage.setItem("activePage", this.activePage);
      localStorage.setItem("activeContent", this.activeContent);
      console.log(data);
      setTimeout(() => {
        location.hash = data.href;
        let idElement = data.href.substring(1);
        let offset_top = document.getElementById(idElement).offsetTop;
        $("html, body").animate({ scrollTop: offset_top - 70 }, "0");
      }
      , 200);
    },
  },
};
</script>

<style>
* {
  font-size: 16px;
}
.display-block {
  display: block !important;
}

#app {
  font-family: "Avenir" !important, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  width: 100vw;
}

a {
  color: #42b983;
}

.wrap-sidebar-content {
  width: 100vw;
}

.active-scroll {
  color: #42b983 !important;
}
</style>
