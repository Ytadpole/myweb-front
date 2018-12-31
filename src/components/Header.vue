<template>
	<header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
		<div class="container">
			<div class="navbar-header">
					<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					</button>
				<a href="index.html" class="navbar-brand">LOGO</a>
			</div>
			<nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
				<form class="navbar-form navbar-right" role="search">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Search">
					</div>
					<button type="submit" class="btn btn-default">Submit</button>
				</form>
				<ul class="nav navbar-nav">
					<li class="active">
						<router-link to="/index">首页</router-link>
					</li>
					<li>
						<router-link to="/contact">联系</router-link>
					</li>
					<li>
						<router-link to="/about">关于</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>
<style >

</style>
