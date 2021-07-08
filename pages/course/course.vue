<template>
	<view class="container">
		<view class="top">
			<view>
				<image style="width:60rpx;height:60rpx"
					src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4d383c9e-a6e8-4eec-a4f1-1651211e59e5%2F.png?table=block&id=32cbc9ce-b373-48a1-9127-f99db743fbbb&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2" />
			</view>
			<view style="margin-left:2%">
				<text style="font-size:30rpx;margin-left=5%;font-weight:bold">素描基础</text>
			</view>
		</view>
		<view class="div" />
		<view @click="detail(item.title, item.vedios)" class="listbg" v-for="(item, index) in list">
			<view class="list_left">
				<view>
					<text style="font-size:30rpx;font-weight:bold">{{item.title}}</text>
				</view>
				<view class="list_bottom">
					<image style="width:37rpx;height:40rpx;margin-top:20%"
						src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd220f0ca-5d46-491f-b144-0c68f15facb0%2F.png?table=block&id=51fbc510-61a9-472c-a405-d1d01544c649&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2" />
					<text style="font-size:30rpx;margin-top:22%;margin-left:5%;color:#79797979">{{item.count}}人学习</text>
				</view>
			</view>
			<view class="list_right">
				<image style="width:280rpx;height:180rpx" mode='scaleToFill' :src="item.src" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						index: 0,
						title: "第一课·素描工具",
						src: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb7a77009-1606-467b-ad91-66c34fa8a2a7%2F1..jpg?table=block&id=377c5d2c-ad20-46d3-900b-ab3f58e6aea6&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2",
						vedios: [{
								url: "http://player.youku.com/embed/XNTE3OTMwNDE2NA",
								subtitle: "1.掌握铅笔的型号和用法"
							},
							{
								url: "http://player.youku.com/embed/XNTE3OTMyODkwNA",
								subtitle: "2.使用纸笔的技巧"
							},
							{
								url: "http://player.youku.com/embed/XNTE3OTMyOTU1Mg",
								subtitle: "3.使用橡皮的技巧"
							}
						],
						count: 23
					},
					{
						index: 1,
						title: "第二课·排线练习",
						src: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9fa33672-f570-4dc8-976a-23f641729165%2F2..png?table=block&id=a460e4a3-3112-4e6e-9455-c0bf2621f90f&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2",
						vedios: [{
								url: "http://player.youku.com/embed/XNTE3OTMyOTk4OA",
								subtitle: "1.如何纠正错误的线条"
							},
							{
								url: "http://player.youku.com/embed/XNTE3OTMzMDk2OA",
								subtitle: "2.明暗素描中的线条"
							}, {
								url: "http://player.youku.com/embed/XNTE3OTMzMTUzMg",
								subtitle: "3.结构素描中的线条"
							},
							{
								url: "http://player.youku.com/embed/XNTE3OTMzMjEyOA",
								subtitle: "4.练习画线条"
							}
						],
						count: 67
					},
					{
						index: 2,
						title: "第三课·素描正方体",
						src: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8c1a3917-526a-4d6f-9c55-c3933c0e36b8%2F3..png?table=block&id=96c58a88-7c39-4146-88c6-33864379706a&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2",
						vedios: [{
								url: "http://player.youku.com/embed/XNTE3OTMzMzcyOA",
								subtitle: "1.立方体如何打形"
							},
							{
								url: "http://player.youku.com/embed/XNTE3OTMzNTczMg",
								subtitle: "2.如何理解立方体的透视"
							},
							{
								url: "http://player.youku.com/embed/XNTE3OTMzNjIzMg",
								subtitle: "3.如何画立方体的边线"
							},
							{
								url: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ddb085b2-2579-480e-a765-9b24ce4e75ef/4..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T152508Z&X-Amz-Expires=86400&X-Amz-Signature=e85818bd1abc338ac82af6792ac62c0b72bcbd38e79ca539b818bdf915a17ed6&X-Amz-SignedHeaders=host",
								subtitle: "4.如何画立方体的暗面"
							},
							{
								url: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b1c7f4c9-0c3d-4d09-917e-65da7a8f06d0/5..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T152508Z&X-Amz-Expires=86400&X-Amz-Signature=732d8f60eb22969acfbdd7416a9463f54b1ac2ad16d6c2101f5f8db2322032cc&X-Amz-SignedHeaders=host",
								subtitle: "5.如何画立方体的投影"
							},
							{
								url: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bb00e60-4a07-43c5-b2d8-e891e54734a3/6..mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T152508Z&X-Amz-Expires=86400&X-Amz-Signature=1468a5deb602217c57403ee5a96837901c54d230e94d2a8b8ad5e566275fd796&X-Amz-SignedHeaders=host",
								subtitle: "6.如何画立方体的背景"
							}
						],
						count: 50
					}
				]
			}
		},
		methods: {
			detail: function(title, obj) {
				//var vedios = JSON.stringify(e.currentTarget.dataset.vedios);
				var obj = JSON.stringify(obj);
				uni.navigateTo({
					// url: "/pages/course1/course1?title="+e.currentTarget.dataset.title+"&vedios="+vedios
					url: "../../pages/course1/course1?title="+title+"&obj=" + encodeURIComponent(obj)
				})
			}
		},
	}
</script>

<style>
	/* pages/course/course.wxss */
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
		flex-direction: row;
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
