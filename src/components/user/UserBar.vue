<template>
  <div>
    <div class="header">
        <ul class="header-menu">
            <li><router-link to="about"><p>ABOUT</p> <p class="subtitle">關於我們</p></router-link></li>
            <li class="open-products-style-box">
                <a href="#" ><p>PRODUCTS</p> <p class="subtitle">產品資訊</p></a>
                <div class="products-style-box">
                    <ul class="products-style">
                        <li><a href=""><i class="fa-solid fa-caret-down"></i> <div class="replace-anim"><span class="original-text">水晶燈系列</span><span class="replace-text">水晶燈系列</span></div></a></li>
                        <li><a href=""><i class="fa-solid fa-caret-down"></i> <div class="replace-anim"><span class="original-text">工業風格</span><span class="replace-text">工業風格</span></div></a></li>
                        <li><a href=""><i class="fa-solid fa-caret-down"></i> <div class="replace-anim"><span class="original-text">北歐現代系</span><span class="replace-text">北歐現代系</span></div></a></li>
                        <li><a href=""><i class="fa-solid fa-caret-down"></i> <div class="replace-anim"><span class="original-text">手做布藝</span><span class="replace-text">手做布藝</span></div></a></li>
                    </ul>
                    <div class="all-products">
                        <a href="">
                            <div class="photo">
                                <img src="@/assets/images/background/products.jpg" alt="">
                                <div class="photo-cont">
                                    <h3>PRODUCTS</h3><p>產品資訊</p>
                                </div>
                            </div>
                            <div class="to-more-icon">
                              <router-link to="productList" class="more-link">
                                <img src="@/assets/images/circle.png" alt="" class="circle">
                                <i class="bi bi-arrow-right user-bar-more-icon"></i>
                              </router-link>
                            </div>
                        </a>
                    </div>
                </div>
            </li>
            <li><a href="#"><p>CUSTOMIZED</p> <p class="subtitle">專屬訂製</p></a></li>
            <li><a href="#"><p>COMPANY</p> <p class="subtitle">公司資訊</p></a></li>
            <li><a href="#"><p>CONSULT</p> <p class="subtitle">線上諮詢</p></a></li>
        </ul>
        <a href="#" class="open-MBmenu" @click.prevent="openMBMenu">
          <transition name="rotate"><i class="bi bi-list" v-if="!MBmenuIsOpen"></i></transition>
          <transition name="rotate"><i class="bi bi-x-lg" v-if="MBmenuIsOpen"></i></transition>
          </a>
        <transition name="fadeScale">
          <ul class="MBmenu" v-if="MBmenuIsOpen">
              <li><a href="#"><span>ABOUT</span><span class="MB-subtitle">關於我們</span></a></li>
              <li>
                  <a href="#"><span>PRODUCTS</span><span class="MB-subtitle">產品資訊</span></a>
                  <ul class="MBproducts-menu">
                      <li><a href="#"><div class="MB-replace-anim">- <span class="MB-original-text">水晶燈系列</span><span class="MB-replace-text">水晶燈系列</span></div></a></li>
                      <li><a href="#"><div class="MB-replace-anim">- <span class="MB-original-text">工業風格</span><span class="MB-replace-text">工業風格</span></div></a></li>
                      <li><a href="#"><div class="MB-replace-anim">- <span class="MB-original-text">北歐現代系</span><span class="MB-replace-text">北歐現代系</span></div></a></li>
                      <li><a href="#"><div class="MB-replace-anim">- <span class="MB-original-text">手做布藝</span><span class="MB-replace-text">手做布藝</span></div></a></li>
                      <li><a href="#"><div class="MB-replace-anim">- <span class="MB-original-text">光源專區</span><span class="MB-replace-text">光源專區</span></div></a></li>
                  </ul>
              </li>
              <li><a href="#"><span>CUSTOMIZED</span><span class="MB-subtitle">專屬訂製</span></a></li>
              <li><a href="#"><span>COMPANY</span><span class="MB-subtitle">公司資訊</span></a></li>
              <li><a href="#"><span>CONSULT</span><span class="MB-subtitle">線上諮詢</span></a></li>
          </ul>
        </transition>
    </div>
  </div>
</template>

<style lang="scss">
.header{
    width: 100%;
}
.header-menu{
    position: fixed;
    display: flex;
    right: 0;
    top: 0;
    z-index: 50;
    background: linear-gradient(to left,rgba(0, 0, 0, 0.75) 50%,rgba(0, 0, 0, 0));
    padding-left: 20px;
    >li{
        margin-right: 20px;
        position: relative;

        >a{
            display: block;
            padding: 10px;
            color: $subColor;
            text-align: center;
            transition: color 300ms;

            .subtitle{
                font-size: 12px;
                margin-top: 5px;
            }

            &:hover {
                color: $mainColor;
            }
            &::before{
                content: '';
                position: absolute;
                bottom: -2px;
                width: 0;
                height: 1px;
                background-color: $mainColor;
                transition: width 0.3s;
                left: 50%;
                transform: translateX(-50%);
            }
            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -15px;
                width: 100%;
                height: 3rem;

            }

            &:hover::before{
                width: 70%;
            }
        }

    }
}
//產品選單
.products-style-box {
    position: absolute;
    background: rgba(0,0,0,0.75);
    border-radius: 5px;
    padding: 10px 15px;
    transform: translateY(0) translateX(-60px);
    width: 34rem;
    margin-top: 10px;
    opacity: 0;
    visibility: hidden;
    transition: 500ms;

    a{
        color: $subColor;
    }

    .products-style{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255,255,255,0.3);
        margin-bottom: 25px;
        padding-bottom: 10px;
        li{
            width: 25%;
        }

        a{
           display: flex;
           text-align: center;
           padding: 25px 0 15px 0;
           margin: 0 5px;
           position: relative;
           transition: color 0.5s;

           /*文字替換*/
           .replace-anim{
            display: flex;
            flex-direction: column;
            overflow: hidden;
            position: relative;
            margin-left: 10px;
           }
           .original-text{
            transform: translateY(0);
            transition: transform 0.2s;
           }
           .replace-text{
            position: absolute;
            transform: translateY(110%);
            transition: transform 0.2s ;
           }
           &:hover .original-text{
            transform: translateY(-100%);
           }
           &:hover .replace-text{
            transform: translateY(0);
           }

           /*符號旋轉*/
           &:hover i{
            transform: rotateY(360deg);
            transition: transform 0.5s;
           }
           &:not(:hover) i{
            transform: rotateY(0deg);
            transition: transform 0.5s;
            }
            /*底線彈出*/
            &::before{
                content: '';
                position: absolute;
                bottom: -2px;
                width: 0;
                height: 1px;
                background-color: rgba(255,255,255,0.5);
                transition: width 0.3s;
            }
            &::before {
                left: 15%;
            }
            &:hover::before{
                width: 90%;
            }
        }
    }

    .all-products{
        padding-bottom: 25px;
        pointer-events:none;

        a{
            display: flex;
            align-items: end;

            &:hover i{
                transition: all 1s;
                color: $mainColor;
            }
            &:hover .circle{
                animation: circleRotate 10s infinite linear;
                scale:1.2;
            }
            .photo{
                display: flex;
                align-items: center;

                img{
                    width: 30%;
                    border-radius: 5px;
                    margin-right: 30px;
                    transition: 1s;
                }
                .photo-cont h3{
                    font-size: 36px;
                }
            }
            &:hover img{
                scale: 0.9;
            }
        }
    }
}

.open-MBmenu{
  width: 30px;
  height: 30px;
  display: none;
  position: fixed;
  right: 0;
  margin: 5px;
  padding: 5px;
  border: 2px solid $subColor;
  color: $subColor;
  border-radius: 50%;
  z-index: 50;
  transition: all 0.5s;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);

  i{
    position: absolute;
    top: 2px;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);
  }
}
.MBmenu{
    position: fixed;
    z-index: 49;
    background: rgba(0,0,0,0.75);
    height: 100%;
    width: 100%;
    padding: 26px 10px;

    a{
        display: block;
        color: $subColor;
        border-bottom: 1px solid rgba(255,255,255,0.5);
        padding: 10px 0 ;
        transition: color 0.5s;

        span{
            font-size: 24px;
        }
        .MB-subtitle{
            font-size: 16px;
            margin-left: 16px;
        }
        &:hover{
            color: rgba(255,255,255,0.5);
        }
    }

    .MBproducts-menu{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 15%;

        li{
            width: 35%;

            a{
                border: none;
                position: relative;
                overflow: hidden;

                span{
                    font-size: 16px;
                }

                .MB-replace-text{
                    position: absolute;
                    left: 0;
                    transform: translateX(-100%);
                    transition: 0.2s;
                    opacity: 0;
                }
                &:hover .MB-replace-text{
                    transform: translateX(10%);
                    opacity: 0.8;
                }

                .MB-original-text{
                    position: absolute;
                    transform: translateX(0);
                    transition: 0.2s;
                    opacity: 1;
                }
                &:hover .MB-original-text{
                    transform: translateX(110%);
                    opacity: 0;
                }

            }
        }
    }
}
@media (max-width:919px){
    .header-menu{
        display: none;
    }
    .open-MBmenu{
        display: block;
    }
}

.open-products-style-box:hover .products-style-box{
    opacity: 1;
    visibility: visible;
}
.open-products-style-box:hover .all-products{
    pointer-events:all;
}

// 漢堡選單鈕動畫
.rotate-enter-from{
  opacity: 0;
  scale: 0;
}
.rotate-enter-active, .rotate-leave-active{
  transition: all 0.5s;
}
.rotate-enter-to, .rotate-leave-from{
  opacity: 1;
  scale: 1;
}
.rotate-leave-to {
  opacity: 0;
  scale: 0;
}

</style>

<script>
export default {
  data () {
    return {
      MBmenuIsOpen: false
    }
  },
  methods: {
    openMBMenu () {
      if (!this.MBmenuIsOpen) {
        this.MBmenuIsOpen = true
      } else {
        this.MBmenuIsOpen = false
      }
    }
  }
}
</script>
