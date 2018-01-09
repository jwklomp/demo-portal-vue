// Service to get content from Contentful
import * as constants from '../../config/app-constants.js'

const contentful = require('contentful')
const _ = require("underscore")
const marked = require('marked')

function createClient() {
    const client = contentful.createClient({
    space: constants.SPACE_ID,
    accessToken: constants.ACCESS_TOKEN
  })
  return client
}

const client = createClient()

export const myContentService = {

  // Load all Content Types in your space from Contentful. 
  // Returns Promise<ContentfulCollection<ContentType>>
  fetchContentTypes() {
    return client.getContentTypes()
      .then((response) => response.items)
      .catch((error) => {
        console.log('\nError occurred while fetching Content Types:')
        console.error(error)
      })
  },

  // Load all entries for a given Content Type from Contentful
  // Returns Promise<void | Entry<any>[]>
  fetchEntriesForContentType(contentType) {
    return client.getEntries({
        content_type: contentType.sys.id
      })
      .then((response) => response.items)
      .catch((error) => {
        console.log(`\nError occurred while fetching Entries for ${contentType.name}:`)
        console.error(error)
      })
  },

  getMarkdownTextByIdentifier(contentId, contentList) {
    if (!contentId) return ""

    const contentItem = _.find(contentList, function(entry) {
      return entry.fields.contentName == contentId && entry.fields.isText
    })
    if (!contentItem) return ""

    return marked(contentItem.fields.text)
  },    

  getImageSourceByIdentifier(contentId, contentList) {
    if (!contentId) return ""

    const contentItem = _.find(contentList, function(entry) {
      return entry.fields.contentName == contentId && !entry.fields.isText
    })
    if (!contentItem) return ""

    return contentItem.fields.media.fields.file.url
  }



}
