<template>
	<section>
		<h2>Contact</h2>

		<div class="contact_container">
			<p class="f">Addres:</p>
			<p>vdkv@proton.me</p>
		</div>

		<div class="contact_container">
			<p class="f">X/Twitter:</p>
			<a href="https://x.com/vdkvdev">x.com/vdkvdev</a>
		</div>
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
	gap: 10px;

	h2 {
		color: #d1d1d1;
		font-weight: normal;
		font-size: 18px;
		margin-bottom: 15px;
	}

	.contact_container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #272729;
	    border-radius: 4px;
	    padding: 10px;

	    .f{
	    	color: #999999;
			line-height: 24px;
			font-size: 17px;
	    }

	    p, a{
	    	text-decoration: none;
	    	color: #d1d1d1;
		    font-size: 17px;
	    }
	}
}
</style>