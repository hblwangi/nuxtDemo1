<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <div class="container">
        <b-navbar-brand href="#">T-blog</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <nuxt-link class="nav-link" to="/">home</nuxt-link>
            <nuxt-link class="nav-link" to="/blog">blog</nuxt-link>
            <nuxt-link class="nav-link" to="/about">about</nuxt-link>
            <nuxt-link class="nav-link" to="/chart">chart</nuxt-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
        </div>
      </b-navbar>
    </div>

    <nuxt />
    <footer>
      <hr>
      <div class="foot">this is foot content</div>
    </footer>

    <div class="goTop" :style="goTopDisplay==0 ? 'opacity:0' : 'opacity:1'" @click="gotop">
      <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      mainProps: { blank: true, blankColor: '#777', width: 50, height: 50, class: 'goTopRound' },
      goTopDisplay: 0,
    }
  },
  methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      gotop(){
        let top = document.body.scrollTop || document.documentElement.scrollTop;
        let speed = top / 25;
        function animation(){
          requestAnimationFrame(function(){
              if( document.documentElement.scrollTop > 0 ){
                window.scrollTo(0, document.documentElement.scrollTop - speed)
                animation();
              } else {
                return
              }
          })  
        }
        animation();
      }
  },
  mounted() {
    let body = document.querySelector("body");
    let sctop = 0;
    let _this = this;
    body.onscroll = (e) => {
      sctop = document.documentElement.scrollTop
      if (sctop >= 400) {
        _this.goTopDisplay = 1
      } else {
        _this.goTopDisplay = 0
      }
    }
  },
}
</script>

<style>
.foot{
  text-align: center;
  padding-bottom: 20px;
}
.goTop{
  position: fixed;
  right: 2rem;
  bottom: 3rem;
  cursor: pointer;
  transition: all .4s;
}
.goTopRound{
  opacity: .5;
  transition: all .4s;
}
.goTopRound:hover{
  opacity: 1;
}
</style>
