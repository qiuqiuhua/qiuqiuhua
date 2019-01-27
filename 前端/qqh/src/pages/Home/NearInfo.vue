<template>
    <div>
      <div class="card-contents" id="near_info">
        <div class="card-content">
          <ul>
            <li>
              <router-link to="/art_detail">
                <div class="imgBox"><img src="./images/info1@3x.png"></div>
                <div class="info_wrap">
                  <div class="infos">
                    <div class="info">名字:萨萨</div>
                    <div class="info">性别:公</div>
                    <div class="info">年龄:1岁</div>
                    <div class="info">地区:上海</div>
                    <div class="desc" style="-webkit-box-orient: vertical;">描述:因为本人怀孕家里不让养宠物，希望找一个爱狗人士送养，萨萨很乖，很听话</div>
                  </div>
                </div>
                <div class="line"></div>
              </router-link>
            </li>
            <li>
              <router-link to="/art_detail">
                <div class="imgBox"><img src="./images/info3@3x.png"></div>
                <div class="info_wrap">
                  <div class="infos">
                    <div class="info">名字:小柯</div>
                    <div class="info">性别:母</div>
                    <div class="info">年龄:6个月</div>
                    <div class="info">地区:上海</div>
                    <div class="desc" style="-webkit-box-orient: vertical;">描述:因工作太忙，没有时间溜它，感觉已经快憋出内伤了，希望爱狗人士收养。</div>
                  </div>
                </div>
                <div class="line"></div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/less/mixins';

  .card-content {
    > ul {
      > li {
        position:relative;
        width: 100%;
        height: 118/@rem;
        padding: 11/@rem 22/@rem 11/@rem 16/@rem;
        box-sizing:border-box;
        .imgBox {
          width: 90/@rem;
          height: 90/@rem;
          border-radius: 10/@rem;
          display:inline-block;
          vertical-align:middle;
          img {
            width: 100%;
          }
        }
        .info_wrap {
          display:inline-block;
          vertical-align:middle;
          padding-left: 16/@rem;
          .infos {
            line-height: 20/@rem;
            font-size:@font-size1;
            color:@font-color1;
            letter-spacing: @font-spacing1;
            width:222/@rem;
            .info {
              float: left;
              width: 50%;
              margin-bottom:8/@rem;
            }
            .desc {
              width:100%;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          }
        }
        .line {
          width: 269/@rem;
          height: 1/@rem;
          background:#f0f0f0;
          position:absolute;
          right:0;
          bottom:0;
        }
        &:last-child{
          .line {
            display:none;
          }
        }
      }
    }
  }
</style>
