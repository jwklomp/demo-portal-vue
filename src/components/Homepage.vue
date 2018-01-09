<template>
    <div>
    
    <p v-html="getMarkdownTextByIdentifier('block1')"></p>
    <img v-bind:src="getImageSourceByIdentifier('picture1')" alt="home page image" style="width: 60rem;">
    <p v-html="getMarkdownTextByIdentifier('block2')"></p>
    <p v-html="getMarkdownTextByIdentifier('block3')"></p>

  </div>
</template>

<script>
const _ = require("underscore")

import { myContentService } from "@/mixins/ContentService.js";
export default {
  mixins: [myContentService],
  name: "homepage",
  data() {
    return {
      homepageContent: []
    };
  },
  computed: {},
  mounted() {
    this.getHomepageContent();
  },
  methods: {
    getHomepageContent() {
      this.getContentForContentTypeName("PageContent");
    },
    getContentForContentTypeName(contentTypeName) {
      myContentService.fetchContentTypes().then(contentTypes => {
        var pageContent = _.find(contentTypes, function(contentType) {
          return contentType.name == contentTypeName;
        });
        return myContentService
          .fetchEntriesForContentType(pageContent)
          .then(entries => {
            this.homepageContent = _.filter(entries, function(entry) {
              return entry.fields.pageName == "home";
            });
          });
      });
    },
    getMarkdownTextByIdentifier(contentId) {
      return myContentService.getMarkdownTextByIdentifier(contentId, this.homepageContent)
    },    
    getImageSourceByIdentifier(contentId) {
      return myContentService.getImageSourceByIdentifier(contentId, this.homepageContent)
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>