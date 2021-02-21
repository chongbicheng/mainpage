<template>
	<div class="bottom-block">
		<div class="row">
			<div class="col-md-12">
				<div class="btm">
					<p>Copyright © 2020 Mizuhara Kiko</p>
					<p>Powered by Vue iview</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
	}
</script>

<style scoped lang="less">
	.bottom-block{
    // position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(36,36,36);
		width: 100%;
		height: 120px;
		margin-top: 50px;
		.btm{
			font-size: 0.875rem;
			line-height: 1.5rem;
			color: rgb(150,150,150);
		}
	}
</style>
