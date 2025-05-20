<template>
	<section>
		<footer>
			<p><span>©</span> 2025 vdkvdev - No rights reserved!</p>
		</footer>
	</section>
</template>

<script>
export default {
	name: 'Contact',
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

	footer {
		border-top: 1px solid #272729;
		padding-top: 10px;
		margin-bottom: 15px;

		p{
			text-align: center;
			color: #d1d1d1;
		    font-weight: normal;
		    font-size: 18px;
		    margin-bottom: 15px;
		}

		span{
			display: inline-block;
			transform: scaleX(-1);
			font-size: 25px;
		}
	}
}
</style>