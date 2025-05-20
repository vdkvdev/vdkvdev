<template>
	<section>
		<h2>Timeline</h2>

		<div class="timeline">
			<div class="card">
				<p class="year">2020</p>
				<p class="info">Technician in Business Administration.</p>
			</div>

			<div class="card">
				<p class="year">2021</p>
				<p class="info">I started learning to program.</p>
			</div>

			<div class="card">
				<p class="year">2022</p>
				<p class="info">Web development for SMEs.</p>
			</div>

			<div class="card">
				<p class="year">2025</p>
				<p class="info">I started a career in digital design.</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Timeline',
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

	.timeline{
        display: flex;
        justify-content: space-between;
        gap: 10px;

        .card{
        	width: 100%;
        border: 1px solid #272729;
        border-radius: 4px;
        padding: 10px;
        }

        .year{
        	color: #d1d1d1;
			font-size: 17px;
			margin-bottom: 5px;
        }

        .info{
			color: #999999;
			line-height: 22px;
			font-size: 16px;
        }
	}
}
</style>