<template>
  <section>
    <!-- carousel start -->
    <div>
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
    </div>
    <!-- carousel end -->
    
    <div class="container content">
      <!-- card start -->
      <div class="cardFlex">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
          class="mb-2 cardItem"
          v-for="(item ,idx) in list" :key="idx"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <!-- card end -->

      <!-- blog start -->
      <div class="blog" v-for="(item, idx) in list" :key="idx">
        <div class="blogHead clearFloat">
          <div class="avatar">
            <img src="../assets/images/avatar/3_whqet.jpg" alt="" width="100%">
          </div>
          <div class="titleAndClassification">
            <div class="title">{{listdata.title}}</div>
            <div class="classification">dsadsa/sadsad/sdsad</div>
          </div>
        </div>
        <div class="blogBody">
          <div class="blogImage">
            <img src="../assets/images/headimage/20140208175623375.jpg" alt="" width="100%">
          </div>
          <p>{{listdata.content}}</p>
        </div>
        <div class="blogFoot clearFloat">
          <div class="look">{{listdata.look}}</div>
          <div class="like">{{listdata.like}}</div>
          <div class="readAll">查看全文 >></div>
        </div>
      </div>
      <!-- blog end -->
    </div>
    
    
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      list : [1,2,3,4],
      slide: 0,
      //listdata: null,
      sliding: null
    }
  },
  methods: {
      onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        }
  },
  async asyncData() {
    let data = await axios.get('http://localhost:3000/api/list');
    return {listdata : data.data[0]}
  },
}
</script>

<style>
.content{
  padding: 2rem 0;
}
.cardFlex{
  display: flex;
  justify-content: space-between;
}
.carousel-item {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.blog{
  margin-top: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px #eee solid;
}
.blog:last-of-type{
  border-bottom: none;
}
.clearFloat::after{
  content: "";
  clear: both;
  display: block
}
.blogHead .avatar{
  width: 3rem;
  height: 3rem;
  background: #aaa;
  float: left;
  overflow: hidden;
}
.blogHead .titleAndClassification{
  margin-left: 1.2rem;
  float: left;
  height: 3rem;
}
.blogHead .title{
  font-size: 1.2rem
}
.blogHead .classification{
  color: #aaa;
  font-size: .8rem
}
.blogBody{
  margin-top: 1rem;
}
.blogBody .blogImage{
  width: 100%;
  height: 18rem;
  background: #aaa;
  overflow: hidden;
}
.blogBody p{
  margin-top: 1rem;
}

.blogFoot{
  font-size: .8rem;
  color: #aaa;
}
.blogFoot .look{
  margin-right: 1rem
}
.blogFoot .look,.like{
  float: left;
}
.blogFoot .readAll{
  float: right;
}
</style>
