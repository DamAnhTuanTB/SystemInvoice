<template>
  
  <nav class="wrap-sidebar">
    <ul class="sidebar-links">
      <li
        class="sidebar-group"
        v-for="document in data"
        :class="{ 'display-block': activePage === document.activePage }"
      >
        <p class="sidebar-header">{{ document.sidebarHeader }}</p>

        <ul class="sidebar-sub-links">
          <li v-for="sidebarSubLink in document.sidebarSubLinks">
            <a
              class="sidebar-link"
              :href="sidebarSubLink.href"
              :keyindex="sidebarSubLink.keyindex"
              @click="handleClickSidebar"
              :class="{
                'open-sidebar-link': activeContent === sidebarSubLink.keyindex,
              }"
              >{{ sidebarSubLink.sidebarLink }}</a
            >
            <ul
              class="sidebar-subs"
              :class="{
                'display-block': activeContent === sidebarSubLink.keyindex,
              }"
            >
              <a
                v-for="sidebarSub in sidebarSubLink.sidebarSubs"
                class="sidebar-sub"
                @click="scrollElement"
                :href="sidebarSub.href"
                >{{ sidebarSub.sidebarSub }}</a
              >
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>


<script>
import { data } from "../data/sidebar.js";

export default {
  name: "CompSidebar",
  props: {
    activePage: String,
    activeContent: String,
  },
  data() {
    return {
      data,
    };
  },
  methods: {
    handleClickSidebar(event) {
      window.scrollTo(0, 0);
      this.$emit("handleClickSidebar", event.target.attributes.keyindex.value);
    },
    scrollElement(event) {
      let idElement = event.target.hash.substring(1);
      let offset_top = document.getElementById(idElement).offsetTop;
      $("html, body").animate({ scrollTop: offset_top - 70 }, "0");
    },
  },
};
</script>

<style>
.wrap-sidebar .sidebar-link:hover {
  color: #42b983 !important;
}

.wrap-sidebar .sidebar-sub:hover {
  color: #42b983 !important;
}

.wrap-sidebar .sidebar-link,
.sidebar-sub {
  cursor: pointer;
}

/* ------- */
.wrap-sidebar {
  width:20%;
  position: fixed;
  z-index: 10;
  box-sizing: border-box;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid rgb(230, 228, 228);
  padding: 16px 0px 50px 0px;
  min-width: 200px;
}

.wrap-sidebar .sidebar-links {
  padding-left: 0px;
}

.wrap-sidebar .sidebar-header {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.1rem;
  padding-left: 24px;
}

.wrap-sidebar ul {
  list-style-type: none;
}

.wrap-sidebar .sidebar-group {
  padding: 5px 0px;
  display: none;
}

.wrap-sidebar .sidebar-group ul {
  padding-left: 0px;
}

.wrap-sidebar ul.sidebar-sub-links > li {
  padding-bottom: 10px;
}
.wrap-sidebar ul.sidebar-sub-links > li > ul {
  display: none;
}

.wrap-sidebar .sidebar-subs {
  padding-left: 44px !important;
}

.wrap-sidebar .sidebar-subs a {
  padding-top: 10px;
  padding-left: 10px;
  display: block;
  text-decoration: none;
}

.wrap-sidebar .sidebar-link {
  text-decoration: none;
  padding-left: 34px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-left: 4px solid white;
}

.wrap-sidebar .open-sidebar-link {
  color: #42b983 !important ;
  font-weight: bold;
  border-left: 4px solid #42b983;
}
.wrap-sidebar .sidebar-sub {
  font-size: 0.9rem;
}
.wrap-sidebar .open-sidebar-sub {
  color: #42b983 !important ;
  font-weight: bold;
}

.wrap-sidebar a {
  color: #2c3e50;
}
</style>