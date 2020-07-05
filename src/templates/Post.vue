<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />

    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
         <vue-disqus
					shortname="umorensamuel-codes"
					:identifier="$page.post.title"
				/>
    </div>

    <Author class="post-author" />
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
  
  components: {
    Author,
    PostMeta,
    PostTags
  },
    metaInfo ()  {
      return {
          title: this.$page.post.title,
          meta: [
            {
              name: this.$page.post.title,
              content: this.$page.post.description
            },
            {key: "og:type",property: "og:type", content: 'article'},
            {key: "og:card",property: "og:type", content: 'summary_large_image'},
            {key: "og:image",property: "og:type", content: 'https://res.cloudinary.com/samtech/image/upload/q_auto/f_auto/v1589017077/WhatsApp_Image_2020-04-26_at_16.35.30.jpg' },
            {key: 'og:title' ,property: "og:title", content: this.$page.post.title},
            {key: 'description', name: "description", content: this.$page.post.description},
            {key:"og:url" ,property: "og:url", content: this.postUrl},
            {key: "article:published_time", property: "article:published_time", content: this.$page.post.date},

            {key: "article:published_time", property: "article:published_time", content: this.$page.post.date},

                    //twitter card: https://cards-dev.twitter.com/validator
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: 'https://res.cloudinary.com/samtech/image/upload/q_auto/f_auto/v1589017077/WhatsApp_Image_2020-04-26_at_16.35.30.jpg' },
            { name: "twitter:description", content: this.$page.post.description },
            { name: "twitter:title", content: this.$page.post.title },
            { name: "twitter:site", content: "https://loveotudor.tech" },
            { name: "twitter:creator", content: "@lamouresparus" },
            // open graph
            { property: "og:title", content: this.$page.post.title },
            { property: "og:description", content: this.$page.post.description },
            { property: "og:image", content: this.getImage() },
            { property: "og:updated_time", content: this.$page.post.date },
          ]
      }
  },
  computed: {
      postUrl () {
          let siteUrl = this.$static.metadata.siteUrl;
          let postPath = this.$page.post.path;

          return postPath ? `${siteUrl}${postPath}` : `${siteUrl}/${slugify(this.$page.post.title)}/`;
      }
  },

}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image 
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

@media (min-width: 910px){
  .post-body{
     width: calc(100% + var(--space) * -3);
    margin-left: calc(var(--space) * -1);
  }
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
      padding: calc(var(--space) /1)
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: normal;
      // color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      padding: var(--space);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);
  @media(min-width: 910px){
      width: 50%;
      margin: auto;
  }
  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
