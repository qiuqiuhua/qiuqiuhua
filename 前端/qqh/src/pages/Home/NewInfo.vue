<template>
    <div>
      <div class="card-contents">
        <div class="card-content content-new">
          <ul>
            <li>
              <div class="imgBox"><img src="./images/info1@3x.png"></div>
              <div class="info_wrap">
                <div class="infos">
                  <div class="info">名字:萨萨</div>
                  <div class="info">性别:公</div>
                  <div class="info">年龄:1岁</div>
                  <div class="info">地区:上海</div>
                  <div class="desc">描述:因为本人怀孕家里不让养宠物，
                    希望找一个爱狗人士送养，萨萨很乖，很听话</div>
                </div>
              </div>
              <div class="line"></div>
            </li>
            <li>
              <div class="imgBox"><img src="./images/info2@3x.png"></div>
              <div class="info_wrap">
                <div class="infos">
                  <div class="info">名字:兜兜</div>
                  <div class="info">性别:公</div>
                  <div class="info">年龄:4个月</div>
                  <div class="info">地区:湖南</div>
                  <div class="desc">描述:在某小区一群狗结伴流浪，怕被
                    举报后一网打尽，朋友果断救下,望好心人收养。</div>
                </div>
              </div>
              <div class="line"></div>
            </li>
            <li>
              <div class="imgBox"><img src="./images/info3@3x.png"></div>
              <div class="info_wrap">
                <div class="infos">
                  <div class="info">名字:小柯</div>
                  <div class="info">性别:母</div>
                  <div class="info">年龄:6个月</div>
                  <div class="info">地区:上海</div>
                  <div class="desc">描述:因工作太忙，没有时间溜它，感
                    觉已经快憋出内伤了，希望爱狗人士收养。</div>
                </div>
              </div>
              <div class="line"></div>
            </li>
            <li>
              <div class="imgBox"><img src="./images/info4@3x.png"></div>
              <div class="info_wrap">
                <div class="infos">
                  <div class="info">名字:百合花</div>
                  <div class="info">年龄:8个月</div>
                  <div class="info">地区:辽宁</div>
                  <div class="desc">描述:因本人搬家不方便带走，希望会
                    养的花人士来好好照顾。</div>
                </div>
              </div>
              <div class="line"></div>
            </li>
            <li>
              <div class="imgBox"><img src="./images/info5@3x.png"></div>
              <div class="info_wrap">
                <div class="infos">
                  <div class="info">名字:发财树</div>
                  <div class="info">年龄:1年</div>
                  <div class="info">地区:甘肃</div>
                  <div class="desc">描述:因本人搬公司不方便带走，喜欢
                    发财树的联系我。</div>
                </div>
              </div>
              <div class="line"></div>
            </li>
            <li>
              <div class="imgBox"><img src="./images/info6@3x.png"></div>
              <div class="info_wrap">
                <div class="infos">
                  <div class="info">名字:君子兰</div>
                  <div class="info">年龄:3个月</div>
                  <div class="info">地区:安徽</div>
                  <div class="desc">描述:因为本人家里花太多了，放不开
                    了，所以准备送人。</div>
                </div>
              </div>
              <div class="line"></div>
            </li>
          </ul>
        </div>
        <div class="card-content content-near"></div>
      </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/less/mixins';

  .card-contents {
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
                .ellipsis2();
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
  }
</style>
