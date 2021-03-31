<template>

  <div class="wrap-navbar sticky-top bg-white">
    <nav class="navbar navbar-expand-lg navbar-light border-bottom">
      <div class="container-fluid px-4">
        <div class="navbar-brand" href="#" id="title">
          <img class="img-fluid" src="public/assets/logoInvoice.png" />
          <span class="text-title">G INVOICE</span>
        </div>
        <button
          class="navbar-toggler text-left"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div
            class="navbar-nav d-flex w-100 justify-content-end align-items-center"
          >
            <CompSearch
              @handleFocusSearch="handleFocusSearch"
              @handleBlurSearch="handleBlurSearch"
              @handleClickSearch="handleClickSearch"
            />
            <div class="nav-item">
              <a
                class="nav-link"
                v-bind:keyindex="0"
                v-bind:class="{ 'active-nav-link': activePage === '0' }"
                v-on:click="handleClickNavbar"
                href="#documentBussiness"
                >Document Bussiness</a
              >
            </div>
            <div class="nav-item">
              <a
                class="nav-link"
                v-bind:keyindex="1"
                href="#documentAPI"
                v-bind:class="{ 'active-nav-link': activePage === '1' }"
                v-on:click="handleClickNavbar"
                >Document API</a
              >
            </div>

            <!--  <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn More
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div><div class="dropdown-item title-dropdown">API</div></div>
                <div class="position-relative">
                  <i class="fa fa-caret-right active-dropdown-item"></i>
                  <a class="dropdown-item active-text" href="#">CLI</a>
                </div>
                <div><a class="dropdown-item" href="#">Node</a></div>
                <div id="divider"></div>
                <div>
                  <div class="dropdown-item title-dropdown">
                    Contributing Guide
                  </div>
                </div>
                <div>
                  <a class="dropdown-item" href="#">Local Development</a>
                </div>
                <div><a class="dropdown-item" href="#">Design Concepts</a></div>
              </div>
            </div> -->

            <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Languages
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div class="position-relative">
                  <i class="fa fa-caret-right active-dropdown-item"></i
                  ><a class="dropdown-item active-text" href="#">Vietnamese</a>
                </div>
                <div><a class="dropdown-item" href="#">English</a></div>
              </div>
            </div>

            <div class="nav-item">
              <a class="nav-link" href="#"
                >About Us <i class="fa fa-github"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import CompSearch from "./CompSearch";
export default {
  name: "CompNavbar",
  props: {
    activePage: String,
    activeContent: String,
  },
  components: {
    CompSearch,
  },
  data() {
    return {};
  },
  methods: {
    handleFocusSearch: function (event) {
      event.target.parentElement.classList.add("focus-search");
      //  $($(event.target).parent()[0]).addClass("focus-search");
    },
    handleBlurSearch(event) {
      event.target.parentElement.classList.remove("focus-search");
    },
    handleClickNavbar(event) {
      this.$emit("handleClickNavbar", event.target.attributes.keyindex.value);
      window.scrollTo(0, 0);
    },
    handleClickSearch(data) {
      this.$emit("handleClickSearch", data);
    },
  },
};
</script>

<style>
/*
div.wrap-navbar
  nav.navbar
    div.container-fluid
      div#title [VuePress]
      button.navbar-toggler
      div.collapse#navbarSupportedContent
        div.navbar-nav
          form#search
            input
          div.nav-item [Guide]
            a.nav-link
          div.nav-item [Plugin]
            a.nav-link
          div.nav-item.dropdown [Learn More]
            a.dropdown-toggle
            div.dropdown-menu
              div.dropdown-item
*/
.wrap-navbar #title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap-navbar #title img {
  width: 45px;
  color: #2c3e50;
}
.wrap-navbar .text-title {
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 8px;
  line-height: 100%;
}
.wrap-navbar .navbar {
  padding: 0px;
}
.wrap-navbar #search {
  border: 1px solid rgb(192, 191, 191);
  border-radius: 15px;
  color: rgb(179, 179, 179);
  height: 34px;
  width: 200px;
  padding-right: 10px;
}

.wrap-navbar #search input {
  outline: none !important;
  border: none;
  width: 100%;
  padding-right: 10px;
}

.wrap-navbar #search i {
  padding: 0px 10px;
}

.wrap-navbar #navbarSupportedContent .nav-item {
  margin: 0px 12px;
}

.wrap-navbar #navbarSupportedContent .nav-link {
  color: #2c3e50 !important;
  padding: 0px !important;
  border-bottom: 2px solid white;
  font-size: 0.9rem;
  font-weight: bold;
}

.wrap-navbar #navbarSupportedContent .nav-link:hover {
  border-bottom: 2px solid #42b983;
  transition: 0.3s;
}

.wrap-navbar .active-nav-link {
  border-bottom: 2px solid #42b983 !important;
}

.wrap-navbar .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
  color: rgb(197, 197, 197);
}

.wrap-navbar .dropdown-menu > div {
  padding: 0px 5px;
  font-size: 0.9rem;
}
.wrap-navbar .dropdown-menu > div > a:hover {
  color: #42b983 !important;
  transition: 0.3s;
}
.wrap-navbar #divider {
  border-bottom: 1px solid rgb(202, 202, 202);
  margin: 10px 0px;
}

.wrap-navbar .title-dropdown {
  font-weight: bold;
}
.wrap-navbar .dropdown-item:hover {
  background: transparent !important;
}

.wrap-navbar .focus-search {
  border: 1px solid #42b983 !important;
  transition: 0.3s;
}

.wrap-navbar .active-text {
  color: #42b983;
}
.wrap-navbar .active-dropdown-item {
  position: absolute;
  top: 30%;
  left: 10px;
  color: #42b983;
}
</style>