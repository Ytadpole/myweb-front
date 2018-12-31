<template>
	<div id="posts" class="container top-head">
        <div class="row">
            <div class="col-md-8">
                <h1>最新文章</h1>
                <article v-for="post in posts" :key="post">
                    <h2><router-link to="/post">{{ post.title }}</router-link></h2>
                    <div class="row">
                         <div class="group1 col-sm-6 col-md-6">
                            <span class="glyphicon glyphicon-folder-open"></span>  <a href="#">{{post.category}}</a>
                            <span class="glyphicon glyphicon-bookmark"></span> 
                                <a href="#">Aries</a>,
                                <a href="#">Fire</a>, 
                                <a href="#">Mars</a>
                        </div>
                        <div class="group2 col-sm-6 col-md-6">
                                <span class="glyphicon glyphicon-pencil"></span> <a href="singlepost.html#comments">20 Comments</a>
                                  <span class="glyphicon glyphicon-time"></span> {{post.createTime}}
                        </div>
                        <hr>
                        <!-- <img src="http://placehold.it/900x300" class="img-responsive">
                             -->
                            <img src="https://cdn.duanliang920.com/uploads/160709/1-160F9105104621.jpg" class="img-responsive">
                        <br />
                        <p class="lead">{{post.brief}}</p>
                        <p>{{post.content}}</p>
                 
                        <p class="text-right">
                            <router-link to="/post" class="text-right">
                                继续阅读...
                            </router-link>
                        </p>
                 
                    <hr>
                    </div>
                </article>
                <!-- pager -->
                <ul class="pager">
                    <li class="previous">
                        <a href="#">← 上一页</a>
                    </li>
                    <li class="next">
                        <a href="#">下一页 →</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-4">
                <!-- Subscribe to my feed widget -->
                <div class="well text-center">
                    <p class="lead">
                        Don't want to miss updates? Please click the below button!
                    </p>
                    <button class="btn btn-primary btn-lg">Subscribe to my feed</button>
                </div>
             
                <!-- Other widgets -->

                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Latest Posts</h4>
                        </div>
                    <ul class="list-group">
                        <li class="list-group-item"><a href="singlepost.html">1. Aries Sun Sign March 21 - April 19</a></li>
                        <li class="list-group-item"><a href="singlepost.html">2. Taurus Sun Sign April 20 - May 20</a></li>
                        <li class="list-group-item"><a href="singlepost.html">3. Gemini Sun Sign May 21 - June 21</a></li>
                        <li class="list-group-item"><a href="singlepost.html">4. Cancer Sun Sign June 22 - July 22</a></li>
                        <li class="list-group-item"><a href="singlepost.html">5. Leo Sun Sign July 23 - August 22 </a></li>
                    </ul>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Categories</h4>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item"><a href="#">Signs</a></li>
                        <li class="list-group-item"><a href="#">Elements</a></li>
                        <li class="list-group-item"><a href="#">Planets</a></li>
                        <li class="list-group-item"><a href="#">Cusps</a></li>
                        <li class="list-group-item"><a href="#">Compatibility</a></li>
                    </ul>
                </div>
                 
                 
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Recent Comments</h4>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item"><a href="#">I don't believe in astrology but still your writing style is really great! - <em>john</em></a></li>
                        <li class="list-group-item"><a href="#">Wow.. what you said is really true! I'm an aries though - <em>Anto</em></a></li>
                        <li class="list-group-item"><a href="#">Does capricorn and aries is compatibile? - <em>Sarah</em></a></li>
                        <li class="list-group-item"><a href="#">I'm a cancer woman been in love with Leo. Will this work? - <em>Mary</em></a></li>
                    </ul>
                </div>


                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Tags</h4>
                    </div>
                    <div class="panel-body">
                        <ul class="list-inline">
                            <li><a href="#">Aries</a></li>
                            <li><a href="#">Fire</a></li>
                            <li><a href="#">Mars</a></li>
                            <li><a href="#">Taurus</a></li>
                            <li><a href="#">Earth</a></li>
                            <li><a href="#">Moon</a></li>
                            <li><a href="#">Gemini</a></li>
                            <li><a href="#">Air</a></li>
                            <li><a href="#">Mercury</a></li>
                            <li><a href="#">Cancer</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import {posts} from '@/assets/common/js/api'
export default{
    'name': 'posts',
    data(){
        return {
            'posts': [
            ]
        }
    },
    mounted(){
        this.initData();
    },
    methods: {
        initData(){
            posts().then(res=>{
                // console.log(res);

                res = res.data;
                if(200 == res.code){
                    this.posts = res.data;
                }
            })
            // var res = posts();
            // alert(res);
        }
    }
}
// import axios from 'axios'
// import mockUtils from '@/assets/mock/mockdata'
// axios.get('posts').then(res=>{
//   var data = res.data;
//   console.log(data);
// });
</script>
<style>
@import "./../assets/common/css/blog.css";
</style>
