<template>
    <div class="container clearFloat">
        <div class="blog-left">
            <!-- blog start -->
      <div class="blog" v-for="(item, idx) in list" :key="idx">
        <div class="blogHead clearFloat">
          <div class="avatar"></div>
          <div class="titleAndClassification">
            <div class="title">HBL</div>
            <div class="classification">dsadsa/sadsad/sdsad</div>
          </div>
        </div>
        <div class="blogBody">
          <div class="blogImage"></div>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </div>
        <div class="blogFoot clearFloat">
          <div class="look">123</div>
          <div class="like">25</div>
          <div class="readAll">查看全文 >></div>
        </div>
      </div>
      <!-- blog end -->
        </div>
        <div class="blog-right">
            <div class="classcal">
                <ul>
                    <li class="clearFloat" v-for="(item, idx) in list" :key="idx">
                        <div class="classcal-head"></div>
                        <div class="classcal-content">视觉设计 <span>/ Vieuads Design</span></div>
                    </li>
                </ul>
            </div>
            <div class="recentArticles">
                <div class="blog-right-title">最近文章</div>
                <ul>
                    <li><a href="#">34214wdrwas</a></li>
                    <li><a href="#">34214wdrwasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list : [1,2,3,4],
            }
        },
    }
</script>

<style>
ul,li{
    list-style: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.blog-left{
    float: left;
    width: 65%;
}
.blog-right{
    margin-top: 7rem;
    float: right;
    width: 32%;
}
.blog-right .classcal ul li{
    width: 100%;
    background: rgba(153, 243, 239, 0.4);
    margin-bottom: .5rem;
}
.blog-right .classcal-head{
    width: 2rem;
    height: 2rem;
    float: left;
    background: rgba(153, 243, 239, 1);
}
.blog-right .classcal-content{
    float: left;
    color: #333;
    font-size: .5rem;
    text-indent: 2em;
    line-height: 2rem;
}
.blog-right .classcal-content span{
    color: #aaa;
}
.recentArticles{
    margin-top: 2rem;
}
.recentArticles ul li{
    padding-top: .2rem;
    height: 1.5rem;
    border-top: dashed 1px #666;
    margin-top: .5rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.recentArticles ul li a{
    color: #999;
    text-decoration: none;
    transition: all .4s ;
}
.recentArticles ul li a:hover{
    color: #333;
}
</style>