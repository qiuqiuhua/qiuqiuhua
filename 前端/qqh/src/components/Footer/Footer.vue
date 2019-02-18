<template>
    <div id="footer">
      <div class="tabs">
        <div class="tab-item">
          <router-link to="/home" replace>
            <span class="item_icon icon1"></span>
            <span class="title">首页</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/talk" replace>
            <span class="item_icon icon2"></span>
            <span class="title">话题</span>
          </router-link>
        </div>
        <div class="tab-item item-release">
          <router-link to="/release" replace>
            <span class="item_icon">
              <span class="relBox">
                <span class="relImg"></span>
              </span>
            </span>
            <span class="title">发布</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/show" replace>
            <span class="item_icon icon3"></span>
            <span class="title">宠秀</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/mine" replace>
            <span class="item_icon icon4"></span>
            <span class="title">我的</span>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../../common/less/mixins';

  #footer {
    width: 100%;
    .top-border-1px(top,#DCDCDC);
    height: 50/@rem;
    box-sizing: border-box;
    position:fixed;
    z-index:100;
    left:0;
    right:0;
    bottom:0;
    background-color:#fff;
    .tabs {
      width: 323/@rem;
      margin:3/@rem 26/@rem 0;
      display: flex;
      .tab-item {
        flex: 1;
        a {
          text-align: center;
          display: block;
          width: 100%;
          height: 100%;
          .item_icon {
            display:inline-block;
            width: 25/@rem;
            height: 25/@rem;
            background-size:25/@rem 25/@rem;
            &.icon1 {
              .bg-image('./images/icon1');
            }
            &.icon2 {
              .bg-image('./images/icon2');
            }
            &.icon3 {
              .bg-image('./images/icon4');
            }
            &.icon4 {
              .bg-image('./images/icon5');
            }
            .iconfont {
              font-size:25/@rem;
              color: #757575;
            }
          }
          .title {
            display:block;
            font-size:10/@rem;
            height: 14/@rem;
            line-height: 14/@rem;
            color: #8E8E93;
            letter-spacing: 0.12/@rem;
            margin-top: 3/@rem;
          }
          &.router-link-active {
            .iconfont {
              color: @font-color2;
            }
            .title {
              color: @font-color2;
            }
          }
        }
      }
      .item-release {
        a {
          .item_icon {
            position: relative;
            .relBox {
              display: block;
              position: absolute;
              z-index:200;
              bottom:-3/@rem;
              left: -14.5/@rem;
              width: 54/@rem;
              height: 54/@rem;
              border-radius: 50%;
              background: #FFFFFF;
              box-shadow: 0 -4px 6px -4px rgba(182,182,182,0.50), inset 0 1px 3px 0 rgba(248,248,248,0.50);
              .relImg {
                display: block;
                border-radius: 50%;
                margin: 4/@rem;
                width: 46/@rem;
                height: 46/@rem;
                background-size:46/@rem 46/@rem;
                .bg-image('./images/icon3');
              }
            }
          }
        }
      }
    }
  }
</style>
