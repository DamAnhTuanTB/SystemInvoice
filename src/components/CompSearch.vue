<template>
  <div>
    <form class="d-flex align-items-center mx-2" id="search" @submit.prevent>
      <i class="fa fa-search"></i>
      <input
        @focus="handleFocusSearch"
        @blur="handleBlurSearch"
        v-model="keySearch"
        @keyup="handleOnKeyUp"
      />
    </form>
    <div class="result-search">
      <table v-if="displaySearch === true">
        <template v-for="child in formSearch" v-if="child.length > 0">
          <tr>
            <th colspan="2">{{ child[0].sidebarHeader }}</th>
          </tr>
          <tr
            v-for="item in child"
            :href="item.href"
            :activePage="item.activePage"
            :activeContent="item.keyindex"
          >
            <td @click="handleClickSearch">{{ item.sidebarLink }}</td>
            <td @click="handleClickSearch">{{ item.sidebarSub }}</td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script>
import { data } from "../data/sidebar";
var searchData = [];

data.forEach((item, index) => {
  item.sidebarSubLinks.forEach((item1, index1) => {
    item1.sidebarSubs.map((item2, index3) => {
      searchData.push(
        Object.assign({}, item2, {
          sidebarHeader: item.sidebarHeader,
          activePage: item.activePage,
          sidebarLink: item1.sidebarLink,
          keyindex: item1.keyindex,
          hrefParent: item1.href,
        })
      );
    });
  });
});

export default {
  name: "compSearch",
  data: () => {
    return {
      data,
      keySearch: "",
      displaySearch: false,
      formSearch: [],
    };
  },
  computed: {
    dataSearch: () => {
      return searchData;
    },
  },
  props: {
    href: String,
    activePage: String,
    activeContent: String,
  },
  methods: {
    handleFocusSearch(event) {
      this.$emit("handleFocusSearch", event);
    },
    handleBlurSearch(event) {
      setTimeout(() => {
        this.$emit("handleBlurSearch", event);
        this.displaySearch = false;
      }, 400);
      console.log(this.keySearch);
      this.keySearch = "";
    },
    handleOnKeyUp(event) {
      this.displaySearch = true;
      if (this.keySearch === "") {
        this.displaySearch = false;
      }
      var resultSearch = this.dataSearch.filter((item, index) => {
        return (
          (item.sidebarSub
            .toLowerCase()
            .indexOf(this.keySearch.toLowerCase()) !== -1 &&
            this.keySearch !== "") ||
          (item.sidebarLink
            .toLowerCase()
            .indexOf(this.keySearch.toLowerCase()) !== -1 &&
            this.keySearch !== "") ||
          (item.sidebarHeader
            .toLowerCase()
            .indexOf(this.keySearch.toLowerCase()) !== -1 &&
            this.keySearch !== "")
        );
      });

      this.formSearch = [];
      this.formSearch.push(
        resultSearch.filter((item, index) => {
          return item.sidebarHeader === "Bussiness";
        })
      );

      this.formSearch.push(
        resultSearch.filter((item, index) => {
          return item.sidebarHeader === "General";
        })
      );
      this.formSearch.push(
        resultSearch.filter((item, index) => {
          return item.sidebarHeader === "Shop";
        })
      );
      this.formSearch.push(
        resultSearch.filter((item, index) => {
          return item.sidebarHeader === "Invoice";
        })
      );
    },
    handleClickSearch(event) {
      console.log("abcd");
      this.$emit("handleClickSearch", {
        href: event.target.parentElement.attributes.href.value,
        activePage: event.target.parentElement.attributes.activePage.value,
        activeContent:
          event.target.parentElement.attributes.activeContent.value,
      });
     
    },
  },
};
</script>
<style>
.result-search {
  position: absolute;
  z-index: 10;
  margin-top: 15px;
  margin-left: 10px;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid rgb(211, 208, 208);
  border-radius: 12px;
}

.result-search table td {
  padding: 5px 15px;
  border: none;
}
.result-search table th {
  padding: 5px 20px;
  border: none;
}
.result-search table tr:nth-child(odd) {
  background: rgb(239, 241, 239);
}
.result-search table tr:nth-child(even) {
  background: white;
}
.result-search table th {
  background: #42b983;
  color: white;
}

.result-search table tr {
}

.result-search table {
  border-radius: 12px;
  overflow: hidden;
}

.result-search table tr:nth-child(n + 1):hover {
  background: rgb(215, 223, 233);
}

.result-search table tr:hover {
  cursor: pointer;
}
</style>

