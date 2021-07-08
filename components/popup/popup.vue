<template>
	<view class="wx-popup" :hidden="flag">
		<view class='popup-container'>
			<image style="margin-left:7%;width:86%" src="/static/code.jpg" />
			<view class="wx-popup-con">扫码关注我们</view>
			<view class="wx-popup-btn">
				<text class="btn-ok" @click='hidePopup()'>确定</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "app",
		data() {
			return {
				flag: true,
			};
		},
		methods: {
			//隐藏弹框
			hidePopup: function() {
				this.flag = !this.flag
			},
			//展示弹框
			showPopup() {
				this.flag = !this.flag
				console.log(this.flag);
			},
			_error() {
				//触发取消回调
				this.triggerEvent("error")
			},
			_success() {
				//触发成功回调
				this.triggerEvent("success");
			}
		}
	}
</script>

<style>
	/* component/popup.wxss */
	.wx-popup {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
	}

	.popup-container {
		position: absolute;
		left: 50%;
		top: 50%;

		width: 80%;
		max-width: 600rpx;
		border: 2rpx solid #ccc;
		border-radius: 10rpx;
		box-sizing: bordre-box;
		transform: translate(-50%, -50%);
		overflow: hidden;
		background: #fff;
	}

	.wx-popup-title {
		width: 100%;
		padding: 20rpx;
		text-align: center;
		font-size: 40rpx;
		border-bottom: 2rpx solid red;
	}

	.wx-popup-con {
		margin: 60rpx 10rpx;
		text-align: center;
	}

	.wx-popup-btn {
		display: flex;
		justify-content: space-around;
		margin-bottom: 40rpx;
	}

	.wx-popup-btn text {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30%;
		height: 88rpx;
		border: 2rpx solid #ccc;
		border-radius: 88rpx;
	}
</style>
