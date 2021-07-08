<template>
	<!--pages/comment/comment.wxml-->
	<view class="container">
		<view class="top">
			<view class="othericon">
				<image style="width:50rpx;height:40rpx;"
					src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F83efd166-75c4-4a07-9f32-1ff64cb42884%2F.png?table=block&id=17750470-dd9b-4fe5-991e-544d557194af&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=2560&userId=&cache=v2" />
			</view>
			<view class="othericon">
				<image style="width:50rpx;height:40rpx;margin-left:5%"
					src="cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/icon/comment.png" />
			</view>
			<view class="othericon">
				<image style="width:50rpx;height:40rpx;margin-left:5%"
					src="cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/icon/star.png" />
			</view>
			<view class="othericon">
				<image style="width:50rpx;height:40rpx;margin-left:5%"
					src="cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/icon/share.png" />
			</view>
		</view>
		<view class="user">
			<view>
				<image style="width:80rpx;height:80rpx;border-radius: 50%"
					src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4b60ed3c-837b-406e-b79a-c1b3dc6d5264%2F.jpeg?table=block&id=4b98db91-dd76-4405-a4b2-249de76f5070&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=1130&userId=&cache=v2" />
			</view>
			<view class="user_info">
				<view class="user_name">小欢</view>
				<view class="other_info">
					<view class="time">1小时前 </view>
					<view class="area">浙江省</view>
					<view class="age">初二</view>
				</view>

			</view>
			<view class="follow">
				<text>关注</text>
			</view>
		</view>
		<view class="div">
		</view>
		<view class="category">
			<text>分类：</text>
			<view class="category1">基础学习</view>
			<text style="margin-left:5%;margin-right:5%;color:#c7c7c7c7">|</text>
			<view class="category2">基础几何</view>
		</view>
		<view style="image">
			<image style="border-radius: 30rpx;width:680rpx;height:450rpx;margin-left:5%;margin-right:5%"
				mode="widthFill" :src="src" />
			<view v-if="score>0" class="score">
				<text>{{score}}</text>
			</view>
		</view>
		<view class="words">画了三个小时，终于画完啦！成就感满满！</view>
		<view class="div1"></view>
		<view class="comment">
			<view class="title">
				<image style="width:50rpx;height:60rpx"
					src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F245697dc-ba25-4cc3-bf0d-1cb72a1fc6d4%2F.png?table=block&id=68384bbb-5f27-4347-bd26-473719a7698e&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=160&userId=&cache=v2" />
				<text style="font-size:30rpx;font-weight:bold;margin-left:3%;margin-top:2%">总评
				</text>
			</view>
			<view class="div"></view>
			<view class="content">
				<view>
					<image style="width:80rpx;height:80rpx;border-radius: 50%"
						src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4b60ed3c-837b-406e-b79a-c1b3dc6d5264%2F.jpeg?table=block&id=4b98db91-dd76-4405-a4b2-249de76f5070&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=1130&userId=&cache=v2" />
				</view>
				<view class="words1">整体画面表现较好。你已经掌握了这节课的构图透视和框架归纳，但在色层归纳上还需要加强！</view>
			</view>
		</view>
		<view class="div1"></view>
		<view class="comment">
			<view class="title">
				<image style="width:60rpx;height:60rpx"
					src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2e6400ee-b4a3-43f2-84cc-07fc54f1cfa4%2F.png?table=block&id=269fddd5-bcae-472e-8a05-69e3031cf6a7&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=2560&userId=&cache=v2" />
				<text style="font-size:30rpx;font-weight:bold;margin-left:3%;margin-top:2%">维度评级
				</text>
			</view>
			<view class="div"></view>
			<view class="content">
				<text style="font-size:30rpx">构图透视</text>
				<progress style="height:10px; width:65%; margin-left:3%;margin-top:1%" color="pink" percent="70"
					stroke-width="12" />
				<text style="font-size:30rpx; margin-left:5%">优</text>
			</view>
			<view class="content">
				<text style="font-size:30rpx">框架比例</text>
				<progress style="height:10px; width:65%; margin-left:3%;margin-top:1%" color="pink" percent="70"
					stroke-width="12" />
				<text style="font-size:30rpx; margin-left:5%">优</text>
			</view>
			<view class="content">
				<text style="font-size:30rpx">色层归纳</text>
				<progress style="height:10px; width:65%; margin-left:3%;margin-top:1%" color="pink" percent="60"
					stroke-width="12" />
				<text style="font-size:30rpx; margin-left:5%">良</text>
			</view>
		</view>
		<view class="div1"></view>
		<view class="comment">
			<view class="title">
				<image style="width:50rpx;height:50rpx"
					src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1259bab1-f462-48e6-b77e-70a558a8100c%2F.png?table=block&id=69d13d47-3236-41d4-99a3-9607d180e022&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=2560&userId=&cache=v2" />
				<text style="font-size:30rpx;font-weight:bold;margin-left:3%;margin-top:2%">范例图步骤分解
				</text>
			</view>
			<view class="div"></view>
			<scroll-view scroll-x="true" style="white-space: nowrap; display:flex; margin-top:2% ">
				<view style="width: 35%; height: 150rpx; display:inline-block;margin-right:2%;margin-left:2% ">
					<image style="width:100%;height:150rpx;border-radius:20rpx"
						src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fde19c73b-43bf-43d1-b0f2-457c61ceb2cd%2F5..jpg?table=block&id=8b088002-5823-498a-9dd3-a190656cff70&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=2560&userId=&cache=v2" />
				</view>
				<view style="width: 35%; height: 150rpx; display:inline-block;margin-right:2%;margin-left:2% ">
					<image style="width:100%;height:150rpx;border-radius:20rpx"
						src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2937f67d-0530-4588-ad9c-c33d007e7033%2F1..jpg?table=block&id=858df054-9113-48aa-a155-eb2278745a3c&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2" />
				</view>
				<view style="width: 35%; height: 150rpx; display:inline-block;margin-right:2%;margin-left:2% ">
					<image style="width:100%;height:150rpx;border-radius:20rpx"
						src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F695eed9f-0b80-495a-b4f9-cf97e60eeae3%2F2..jpg?table=block&id=25640859-797f-4c8f-90d5-33dccbdbff32&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2" />
				</view>
				<view style="width: 35%; height: 150rpx; display:inline-block;margin-right:2%;margin-left:2% ">
					<image style="width:100%;height:150rpx;border-radius:20rpx"
						src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffc1979d4-4d70-4a97-98ec-acf04820cbb9%2F3..jpg?table=block&id=84d14389-bd2f-44b1-b576-172a8773f3cd&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2" />
				</view>
				<view style="width: 35%; height: 150rpx; display:inline-block;margin-right:2%;margin-left:2% ">
					<image style="width:100%;height:150rpx;border-radius:20rpx"
						src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe808d3b7-4c17-40b6-89f2-17035c8ff4bc%2F4..jpg?table=block&id=31694139-97bb-4f80-bbb3-bb23e4708194&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2" />
				</view>
			</scroll-view>
		</view>
		<view class="div1"></view>
		<view class="comment">
			<view class="title">
				<image style="width:50rpx;height:50rpx"
					src="cloud://april-5givmaxl24d3e083.6170-april-5givmaxl24d3e083-1306056725/image/icon/flkc.png" />
				<text style="font-size:30rpx;font-weight:bold;margin-left:3%;margin-top:2%">相关课程
				</text>
			</view>
			<view class="div"></view>
			<scroll-view scroll-x="true" style="white-space: nowrap; display:flex; margin-top:2% ">
				<view
					style="width: 45%; height: 250rpx; display:inline-block;margin-right:2%;margin-left:2%;position:relative ">
					<image style="width:100%;height:250rpx;border-radius:20rpx"
						src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F71b434c4-86ad-4a38-8ab3-0083b9497588%2F.jpg?table=block&id=908634d3-d124-4012-ba44-70c80af332d1&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2" />
					<view class="timelength">
						<text>45:28</text>
					</view>
				</view>
				<view
					style="width: 45%; height: 250rpx; display:inline-block;margin-right:2%;margin-left:2%;position:relative ">
					<image style="width:100%;height:250rpx;border-radius:20rpx"
						src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F81176828-6d6e-4893-8c9d-d8f81aaa07b3%2F.jpg?table=block&id=653b2bfc-2769-4c41-bb35-57331eae9915&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2" />
					<view class="timelength">
						<text>8:36</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				score: '',
				src: ''
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
				console.log(option.src); //打印出上个页面传递的参数。
				console.log(option.score); //打印出上个页面传递的参数。
				option.src = this.encodeSearchKey(option.src)
				this.src =  decodeURIComponent(option.src);
				this.score = option.score;
				console.log(this.src);
			}
		}
	}
</script>

<style>
	/* pages/comment/comment.wxss */
	.top {
		align-items: center;
		min-height: 0rpx;
		height: 100rpx;
		background-color: #f7f7f7;
		display: flex;
		width: 100%;
		flex-direction: row;
	}

	.othericon {
		margin-left: 5%;
		width: 50rpx;
		height: 40rpx;
		display: flex;
	}

	.user {
		margin-top: 2%;
		margin-left: 5%;
		width: 90%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.user_info {
		width: 80%;
		margin-left: 5%;
		display: flex;
		flex-direction: column;
	}

	.user_name {
		font-size: 30rpx;
	}

	.other_info {
		width: 90%;
		display: flex;
		flex-direction: row;
		font-size: 25rpx;
		color: #c7c7c7;
	}

	.time {
		margin-right: 2%;
	}

	.area {
		margin-right: 2%;
	}

	.age {
		margin-right: 2%;
	}

	.follow {
		justify-content: center;
		color: crimson;
		width: 20%;
		display: flex;
		height: 10%;
		font-size: 30rpx;
		background-color: rgb(214, 166, 166);
	}

	.div {
		width: 100%;
		height: 1rpx;
		background-color: #c7c7c7;
	}

	.category {
		margin-left: 5%;
		margin-top: 2%;
		margin-bottom: 2%;
		width: 90%;
		font-size: 30rpx;
		display: flex;
		flex-direction: row;
	}

	.words {
		align-items: center;
		text-align: center;
		display: flex;
		width: 90%;
		margin: 5%;
		font-size: 30rpx;
	}

	.div1 {
		width: 100%;
		height: 20rpx;
		background-color: #f7f7f7;
	}

	.comment {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.title {
		display: flex;
		flex-direction: row;
		margin: 3%;
	}

	.content {
		display: flex;
		flex-direction: row;
		margin: 3%;
	}

	.words1 {
		display: flex;
		width: 90%;
		margin-left: 5%;
		font-size: 25rpx;
	}

	.steps {
		margin-top: 2%;
		margin-left: 5%;
		width: 90%;
		display: flex;
		flex-direction: row;
	}

	.image {
		width: 680rpx;
		height: 450rpx;
		position: relative;
	}

	.score {
		box-shadow: 0px 8px 32px rgba(0, 0, 0, .1);
		border-radius: 10rpx;
		top: 300rpx;
		margin-left: 80%;
		text-align: left;
		position: absolute;
		color: red;
		font-weight: bold;
		background-color: white;
		font-size: 15px;
		width: 50rpx;
		height: 50rpx;
		/* 设置容器高度,显示渐变的高度 */
		text-align: right;
		/* 背景渐变:bottom:从下到上,右0.8向0透明渐变 */
		/* background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); */
		display: flex;
		/* flex布局,控制容器内文字元素在底部 */
		flex-direction: column;
		justify-content: flex-end;
		padding: 1% 1% 1% 1%;
	}

	.timelength {
		box-shadow: 0px 8px 32px rgba(0, 0, 0, .1);

		bottom: 0;
		margin-left: 80%;
		text-align: left;
		position: absolute;
		color: white;
		font-weight: bold;
		font-size: 10px;
		width: 65rpx;
		height: 30rpx;
		text-align: right;
		background: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 1% 1% 1% 1%;
	}
</style>
