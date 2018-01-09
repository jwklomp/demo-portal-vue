<template>
  <div>
    <table>

      <tbody>

        <div v-for='item in newsList' class="card" style="width: 80rem;">
          <img class="card-img-top" v-bind:src="item.fields.leadImage.fields.file.url" alt="Card image cap" style="width: 20rem;">
          <div class="card-block">
            <h4 class="card-title">{{item.fields.title}}</h4>
            <p class="card-text">{{item.fields.introduction}}</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </tbody>
    </table>
  </div>
</template>

<script>
const _ = require('underscore')

import { myContentService } from '@/mixins/ContentService.js'
export default {
  mixins: [myContentService],
  name: 'homepage',
  data() {
    return {
      newsList: []
    }
  },
  computed: {},
  mounted() {
    this.getNewsList()
  },
  methods: {
    getNewsList() {
      this.getContentListForContentTypeName('News')
    }, 
    getContentListForContentTypeName(contentTypeName) {
      myContentService.fetchContentTypes().then((contentTypes) => {
        var news = _.find(contentTypes, function(contentType) { return contentType.name == contentTypeName })
        return myContentService.fetchEntriesForContentType(news)
          .then((entries) => {
            console.log(entries)
            this.newsList = entries
          })
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>