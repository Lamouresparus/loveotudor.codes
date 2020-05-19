<template>
  <div class="author">
    <g-image
      alt="Author image"
      class="author__image"
      src="https://res.cloudinary.com/samtech/image/upload/q_auto/f_auto/v1589017077/WhatsApp_Image_2020-04-26_at_16.35.30.jpg"
      width="180"
      height="180"
      blur="5"
    />

    <h1 v-if="showTitle" class="author__site-title">{{ $static.metaData.siteName }}</h1>

    <p class="author__intro">
      Hello there! 👋
      <br>I am a Mobile app developer.

      I am passionate about mobile development, contributing to the growth of communities, empowering more women in tech and technical writing.
    </p>

     <p class="author__links">
      <a href="//twitter.com/lamoureSparus">
        <g-image alt="twitter" class src="~/assets/images/twitter.png"/>
      </a>
  
      <a href="//instagram.com/lamouresparus/">
        <g-image alt="instagram" class src="~/assets/images/instagram.png"/>
      </a>
       <a href="/rss.xml">
        <g-image alt="rss" class src="~/assets/images/rss.png" width="30"/>
      </a>
      <a href="//github.com/Lamouresparus">
        <g-image alt="github" class src="~/assets/images/github.png"/>
      </a>
      <a href="//linkedin.com/in/loveotudor">
        <g-image alt="linkedin" class src="~/assets/images/linkedin.png" width="32"/>
      </a>
    
    </p>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"]
};
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;
  overflow-wrap: break-word;
  
  @media(max-width: 650px){
    &__intro {
      word-break: break-all;
    }
  }

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }
}
</style>
