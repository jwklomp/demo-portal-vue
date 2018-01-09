
<template>

  <div class="main-menu">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
        <ul class="nav nav-pills">
          <li role="presentation" v-for="item in arrNav">
            <router-link :to="{ path: item.id, exact: true }" class="nav-item nav-link" >{{ item.title}}</router-link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      arrNav: [
        {
          title: "Home",
          id: "/homepage"
        },
        {
          title: "News",
          id: "/newslist"
        },
        {
          title: "Account overview",
          id: "/accountlist"
        }
      ]
    };
  },
  methods: {
  },
  ready: function() {}
};
</script>

