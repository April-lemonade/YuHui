<template>
	<view class="container">
		<view class="top">
			<input class="search0" placeholder-class="search" placeholder="大家都在搜 立方体怎么画" />
			<view class="searchicon">
				<icon type="search" />
			</view>
		</view>
		<view class="image">
			<image style="border-radius: 30rpx; width:90%; height:350rpx; margin-left:5%;margin-right:5% margin-top:3%"
				src="../../image/main.png"></image>
		</view>
		<view class="subtitles">精彩作品</view>
		<view class="selection">
			<view class="navibtn" :class="currentSelectType == 'all' ? 'active' : ''" @click='selectedAll()'>全部
			</view>
			<view class="navibtn" :class="currentSelectType == 'ed' ? 'active' : ''" @click='selectedEd()'>已批改
			</view>
			<view class="navibtn" @click='selectedYx()' :class="currentSelectType == 'tk' ? 'active' : ''">
				80-100分
			</view>
			<view class="navibtn" @click="selectedLh()" :class="currentSelectType == 'zhs' ? 'active' : ''">
				70-80分
			</view>
			<view class="navibtn" @click="selectedJg()" :class="currentSelectType == 'jg' ? 'active' : ''">60-70分
			</view>
		</view>
		<view class='gallery'>
			<view class='content'>
				<view class='content-item' v-for="(item,src) in contentImgSrcs" :key="src"
					v-if="item.score>=minscore&&item.score<maxscore">
					<block>
						<image @click="detail(item.src,item.score)" style="border-radius:20rpx" :src="item.src" class="slide-image"
							mode='scaleToFill' />
						<view v-if="item.score>0" class="score">
							<text>{{item.score}}</text>
						</view>
						<view style="font-size:25rpx;text-align:center">
							<text>{{item.title}}</text>
						</view>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				minscore: 0,
				maxscore: 101,
				currentSelectType: 'ed',
				indexSelect: 0,
				topics: [{
					id: 0,
					title: "自动评画"
				}, {
					id: 1,
					title: "课程"
				}, {
					id: 2,
					title: "图库"
				}, {
					id: 3,
					title: "找画室"
				}],
				contentImgSrcs: [{
					title: '基础学习 | 单体几何',
					src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8db9d816-26d1-4e6c-83c6-b697e00ac44b%2F2.jpg?table=block&id=a0789d50-2ca0-42ab-abf5-2ef076b37ea1&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=570&userId=&cache=v2',
					score: 85
				}, {
					title: '基础学习 | 组合几何',
					src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7e33ad98-3909-4590-b3d8-b109d2047b76%2F3.jpg?table=block&id=554a50b6-6742-4633-ba9e-4684e7ceb8b4&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=830&userId=&cache=v2',
					score: 70
				}, {
					title: '基础学习 | 单体几何',
					src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffcffda6b-7a1a-4811-8a16-0c0a7f179507%2F4.jpg?table=block&id=a733b8bd-5076-4842-acd0-ca2ba40a58cd&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=3070&userId=&cache=v2',
					score: 85
				}, {
					title: '基础学习 | 组合几何',
					src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbad5938b-b92e-464a-9afb-c3925a76bfae%2F5.jpg?table=block&id=7435d35e-12fd-4f3d-b103-1df8596389f3&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=820&userId=&cache=v2',
					score: 85
				}, {
					title: '基础学习 | 组合几何',
					src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8d085425-d077-474b-b587-2ae0b8fc02a9%2F6.jpg?table=block&id=4bdf89c6-3171-49d3-bf53-ad29d0b549a6&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=710&userId=&cache=v2',
					score: 0
				}, {
					title: '基础学习 | 组合几何',
					src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F12898d7d-ddb1-40c6-9cd9-517c93738fcb%2F1.jpg?table=block&id=4e560b2b-bfac-430c-94d7-2deca16dc400&spaceId=024a0d07-e1e8-437f-b7a6-01edf2f65e79&width=730&userId=&cache=v2',
					score: 0
				}]
			}
		},
		methods: {
			selectedAll: function() {
				this.currentSelectType = 'all'
				this.minscore = -1;
				this.maxscore = 101;
			},
			selectedEd: function() {
				this.currentSelectType = 'ed'
				this.minscore = 1;
				this.maxscore = 100;
			},
			selectedYx: function() {
				this.currentSelectType = 'tk'
				this.minscore = 80;
				this.maxscore = 100;
			},
			selectedLh: function() {
				this.currentSelectType = 'zhs'
				this.minscore = 70;
				this.maxscore = 80;
			},
			selectedJg: function() {
				this.currentSelectType = 'jg'
				this.minscore = 60;
				this.maxscore = 70;
			},
			detail: function(src, score) {
				uni.navigateTo({
				      url: "../../pages/comment/comment?src="+encodeURIComponent(src)+"&score="+score
				  })
			},
		}
	}
</script>

<style>
	/**index.wxss**/
	.top {
		width: 90%;
		height: auto;
		margin: 5%;
		border-style: solid;
		border-color: #C7C7C7;
		border-width: 1rpx;
		border-radius: 50rpx;
		flex-direction: row;
		display: flex;
		align-items: center;
		position: relative;
	}

	.search0 {
		margin-left: 5%;
		width: 70%;
		min-height: 0;
		height: 80rpx;
	}

	.search {
		width: 100%;
		text-align: left;
		font-size: 30rpx;
	}

	.searchicon {
		width: 0;
		display: flex;
		justify-content: right;
		margin: 0 auto;
	}

	.navigator {
		margin-left: 5%;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.title {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.image {
		width: 100%;
		margin-top: 3%;
	}

	.line {
		width: 100%;
		height: 10rpx;
		background: #544dff;
		border-radius: 10rpx;
	}

	.headerItem {
		padding-left: 6%;
	}

	.div {
		width: 90%;
		background-color: #C7C7C7;
		height: 5rpx;
	}

	.subtitles {
		margin: 5%;
	}

	.selection {
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
		display: flex;
		flex-direction: row;
	}

	.navibtn {
		text-align: center;
		width: 20%;
		margin-left: 2%;
		margin-right: 2%;
		font-size: 25rpx;
		background: #d6d4ff;
		border-radius: 50rpx;
	}

	.active {
		text-align: center;
		width: 20%;
		margin-left: 2%;
		margin-right: 2%;
		font-size: 25rpx;
		background: #544dff;
		border-radius: 50rpx;
		color: white;
	}

	.gallery {
		margin-top: 2%;
		width: 100%;
		border-bottom: 6px solid #ddd;
	}

	.content {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		margin-left: 5%;
	}

	.content-item {
		width: 40%;
		height: 300rpx;
		margin: 20rpx;
		/* 绝对定位的父级必须要定位 */
		position: relative;
	}

	.content-item-title {
		/* position: absolute; 绝对定位,文字覆盖图片上 */
		color: white;
		/* bottom: 0px; 位置在父级元素底部 */
		font-size: 10px;
		width: 98%;
		height: 100rpx;
		/* 设置容器高度,显示渐变的高度 */
		text-align: center;
		/* 背景渐变:bottom:从下到上,右0.8向0透明渐变 */
		background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
		display: flex;
		/* flex布局,控制容器内文字元素在底部 */
		flex-direction: column;
		justify-content: flex-end;
		padding: 1% 1% 1% 1%;
	}

	.slide-image {
		width: 100%;
		height: 100%;
	}

	.content-item {
		display: flex;
		flex-direction: column;
	}

	.score {
		box-shadow: 0px 8px 32px rgba(0, 0, 0, .1);
		border-radius: 10rpx;
		margin-top: 5%;
		margin-left: 80%;
		text-align: left;
		position: absolute;
		/*绝对定位,文字覆盖图片上*/
		color: red;
		font-weight: bold;
		background-color: white;
		/* bottom: 0px; 位置在父级元素底部 */
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
		/* padding: 1% 1% 1% 1%; */
	}
</style>
