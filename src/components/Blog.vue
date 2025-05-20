<template>
	<section>
		<h2>Personal Blog</h2>

		<div class="blog">
			<a class="card" target="_blank" href="#">
				<img src="https://barricadeprinters.com/wp-content/uploads/2018/10/16-9placeholder.png">
				<div class="info">
					<p class="date">00/00/25</p>
					<p class="category">Placeholder</p>
				</div>
				<p class="title">Placeholder</p>
				<p class="description">Lorem ipsum dolor sit amet.</p>
			</a>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Blog',
	data() {
		return {};
	}
};
</script>

<style scoped>
section {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin: 70px 0px;
	width: 600px;

	h2 {
		color: #d1d1d1;
		font-weight: normal;
		font-size: 18px;
		margin-bottom: 15px;
	}

	.blog{
        display: flex;
        justify-content: space-between;
        gap: 10px;

        .card{
        	text-decoration: none;
        	cursor: pointer;
        	/*width: 100%;*/
        	width: 200px;
        	font-family: "ubuntu-mono", monospace;
        	color: #999999;
        	font-size: 17px;
        	background-color: transparent;
        	border: 1px solid #272729;
        	border-radius: 4px;
        	padding: 10px;
        	transition: 0.2s;

        	img{
        		width: 100%;
        	}

        	.info{
        		display: flex;
        		justify-content: space-between;
        		align-items: center;
        		margin: 5px 0px;
        	}

        	.title{
        		color: #d1d1d1;
      			font-size: 20px;
      			margin: 10px 0px 5px 0px;
      			font-weight: bold;
      			text-align: left;
        	}

        	.description{
        		text-align: left;
        	}

        	&:hover{
          		background-color: #18181c;
        	}
        }
	}
}
</style>