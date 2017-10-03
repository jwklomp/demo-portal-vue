// Service to get content from Contentful

const contentful = require('contentful')

export const myContentService = {

  setup() {
    console.log('setup called')
    const SPACE_ID = ''
    const ACCESS_TOKEN = ''

    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: ACCESS_TOKEN
    })
    return client
  },

  // Load all Content Types in your space from Contentful
  fetchContentTypes() {
    var client = this.setup()
    return client.getContentTypes()
      .then((response) => response.items)
      .catch((error) => {
        console.log('\nError occurred while fetching Content Types:')
        console.error(error)
      })
  },

  // Load all entries for a given Content Type from Contentful
  fetchEntriesForContentType(contentType) {
    var client = this.setup()
    return client.getEntries({
        content_type: contentType.sys.id
      })
      .then((response) => response.items)
      .catch((error) => {
        console.log(`\nError occurred while fetching Entries for ${contentType.name}:`)
        console.error(error)
      })
  }

}

export default myContentService;
