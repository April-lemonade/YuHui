<template>
	<view>
		<view class="container">
			<view class="top">
				<view>
					<image style="width:60rpx;height:60rpx"
						src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4d383c9e-a6e8-4eec-a4f1-1651211e59e5%2F.png?table=block&id=32cbc9ce-b373-48a1-9127-f99db743fbbb&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2" />
				</view>
				<view style="margin-left:2%">
					<text style="font-size:30rpx;margin-left=5%;font-weight:bold">{{title}}</text>
				</view>
			</view>
			<view class="listbg" v-for="(item, index) in obj">
				<view>
					<text style="font-size:30rpx;font-weight:bold">{{item.subtitle}}</text>
				</view>
				<iframe allowfullscreen="true" id="myVideo" :src="item.url"></iframe>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				obj: null
			}
		},
		methods: {
			encodeSearchKey(key) {
				const encodeArr = [{
					code: '%',
					encode: '%25'
				}, {
					code: '?',
					encode: '%3F'
				}, {
					code: '#',
					encode: '%23'
				}, {
					code: '&',
					encode: '%26'
				}, {
					code: '=',
					encode: '%3D'
				}];
				return key.replace(/[%?#&=]/g, ($, index, str) => {
					for (const k of encodeArr) {
						if (k.code === $) {
							return k.encode;
						}
					}
				});
			},
			onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
				console.log(option.obj); //打印出上个页面传递的参数。
				option.obj = JSON.parse(decodeURIComponent(option.obj));

				//this.obj = this.encodeSearchKey(option.obj);
				this.obj = option.obj;
				this.title = option.title;
				// var i;
				// for( i=0;i<this.obj.length;i++){
				// 	console.log(this.obj[i]); 
				// 	this.obj[i].url = this.encodeSearchKey(this.obj[i].url)
				// }

			}
		}
	}
</script>

<style>
	/* pages/course1/course1.wxss */
	.top {
		margin-top: 5%;
		margin-bottom: 2%;
		margin-left: 5%;
		width: 90%;
		display: flex;
		flex-direction: row;
	}

	.div {
		width: 100%;
		height: 2rpx;
		background-color: #c7c7c7;
	}

	.listbg {
		margin-top: 2%;
		border-color: #f7f7f7;
		border-style: solid;
		border-width: 1rpx;
		margin-left: 5%;
		width: 90%;
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
	}

	.list_left {
		margin-left: 2%;
		width: 90%;
		display: flex;
		flex-direction: column;
	}

	.list_bottom {
		display: flex;
		flex-direction: row;
	}

	.list_right {
		width: 60%;
		align-items: center;
	}
</style>
