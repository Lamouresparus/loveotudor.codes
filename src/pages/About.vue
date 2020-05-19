<template>
  <div class="about">
    <nav>
      <ul class="nav">
        <li>
          <ToggleTheme/>
        </li>
        <li>
          <g-link class="header__link" to="/">Home</g-link>
        </li>
      </ul>
    </nav>
    <br>
    <div class="about__data">
      <div class="bio">
        <h1 class="intro">Hello! I'm Love 👋</h1>
        <span>
         I am an Android Developer and Technical Writer who is currently the Internshala Student Ambassador for the University of Uyo.

          I'm passionate about software engineering, communities focused on empowering more women in tech and contributing to Open Source.

          I create technical content on my Blog and working as a volunteer in most tech events.
      
        </span>
        <p class="links">
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
      <div class="headshot">
        <g-image
          src="https://res.cloudinary.com/samtech/image/upload/q_auto/f_auto/v1589017077/WhatsApp_Image_2020-04-26_at_16.35.30.jpg"
          class="pic"
          alt="headshot"
        />
      </div>
    </div>
    <Talks />
  </div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";
// import Talks from "~/components/Talks.vue";
export default {
  components: {
    ToggleTheme,
  
  }
};
</script>

<style lang="scss">
.about {
  min-height: 100vh;

  &__data {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.nav {
  display: flex;
  flex-direction: row-reverse;
  list-style: none;
  li {
    padding: 20px;
    margin-top: 30px;
  }
}
.links {
  margin-top: 0.9em;
  a {
    margin: 0 0.5em;
  }
}
.bio {
  width: 32em;
  margin-right: 20px;
  text-align: left;
}

.intro {
  font-size: 3em;
}

.pic {
  border-radius: 3px;
  height: 400px;
}

@media only screen and (max-width: 650px) {
  .about {
    &__data {
      display: flex;
      flex-direction: column;

      .bio {
        width: 22em;
        text-align: center;
      }

      .headshot {
        display: none;
      }
    }
  }
}
</style>
