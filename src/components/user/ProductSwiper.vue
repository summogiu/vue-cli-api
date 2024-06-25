<template>
  <div ref="swiper" class="swiper products-swiper"
          :class="{ 'toLeft-1' : scrollPosition >= sectionTops.productsTops/1.5 }">
    <ul class="swiper-wrapper products-wrapper">
      <li class="swiper-slide products-slide">
        <a href="#">
                <img src="@/assets/images/home-si/cloth-si.jpg" alt="">
            <h5>Cloth</h5>
            <p>手做布藝：<br>柔軟又溫暖，賦予你的空間溫馨的氛圍。</p>
        </a>
      </li>
      <li class="swiper-slide products-slide">
        <a href="#">
            <img src="@/assets/images/home-si/crystal-si.jpg" alt="">
            <h5>Crystal</h5>
            <p>水晶燈系列：<br>奢華又雅致，點綴專屬的品味生活。</p>
        </a>
      </li>
      <li class="swiper-slide products-slide">
        <a href="#">
            <img src="@/assets/images/home-si/industrial-si.jpg" alt="">
            <h5>Industrial</h5>
            <p>工業風格：<br>堅固金屬，展現個性，營造獨特的時尚氛圍。</p>
        </a>
      </li>
      <li class="swiper-slide products-slide">
        <a href="#">
            <img src="@/assets/images/home-si/Nordic-si.jpg" alt="">
            <h5>Nordic</h5>
            <p>北歐現代系：<br>清新純淨，俐落簡約，最流行的時尚風格。</p>
        </a>
      </li>
      <li class="swiper-slide products-slide">
        <a href="#">
            <img src="@/assets/images/home-si/Light-bulb-si.jpg" alt="">
            <h5>Light-bulb</h5>
            <p>光源專區：<br>挑選合用燈泡，成就您的光影藝術。</p>
        </a>
      </li>
      <li></li>
    </ul>
  </div>
  <div class="swiper-button-prev products-swiper-button-prev"></div>
  <div class="swiper-button-next products-swiper-button-next"></div>
</template>

<style lang="scss">
@import 'swiper/css';
@import 'swiper/css/navigation';

  .products-swiper{
        position: absolute;
        bottom: -180px;
        left: 5%;
        width: 90%;

        &::before{
            content: '';
            height: 50px;
            width: 100%;
            display: block;
        }

        .products-wrapper{
            width: 100%;

            .products-slide{
                background-color: $subColor;
                box-shadow: 0 0 5px gray;
                margin-right: 10px;
                border-radius: 5px;
                transition: scale 1s;
                max-width: 200px;
                max-height: 280px;

                img{
                    border-radius: 5px 5px 0 0;
                    transition: all 0.5s;
                    opacity: 0.8;
                }
                h5{
                    position: absolute;
                    top: -20px;
                    right: 2px;
                    writing-mode: vertical-rl;
                    font-size: 26px;
                    color: $subColor;
                    transition: all 0.5s;
                    text-shadow: 0 0 5px gray;
                }
                p{
                    color: $subColor2;
                    font-size: 14px;
                    height: 80px;
                    padding: 5px;
                }

                &:hover{
                    scale: 0.98;
                    border: 1px solid $subColor;

                    h5{
                        opacity: 0;
                    }
                    img{
                        opacity: 1;
                    }
                }
            }
        }
    }
    .products-swiper-button-prev,.products-swiper-button-next{
        top: auto;
        bottom: 120px;
    }
    .products-swiper-button-prev:after,.products-swiper-button-next:after{
        font-size: 16px;
        color: $subColor2;
    }
    .swiper-button-prev{
        right: var(--swiper-navigation-sides-offset, 100px);
        left: auto;
    }
    .swiper-button-next{
        right: var(--swiper-navigation-sides-offset, 50px);
    }
@media (max-width:919px){
  .products-swiper{
            position: relative;
            bottom: 0;
            left: 0;
            width: 250px;
            height: 1200px;

            .products-wrapper{
                width: 200px;
                margin: 0 auto;
                padding: 300px 0 100px 0;
                top: -200px;

                .products-slide{
                    margin-bottom: 6rem;
                    scale: 1.2;
                }
            }
        }
        .products-swiper-button-prev,.products-swiper-button-next{
            display: none;
        }
}
</style>

<script>
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import scrollPosMixin from '@/mixins/scrollPosMixin'

Swiper.use(Navigation)

export default {
  prop: ['prdTops'],
  data () {
    return {
      swiper: '',
      scrollPosition: 0,
      sectionTops: {
        productsTops: 0
      }
    }
  },
  mixins: [scrollPosMixin],
  mounted () {
    this.swiper = new Swiper(this.$refs.swiper, {
      slidesPerView: 3,
      direction: 'vertical',
      breakpoints: {
        919: {
          slidesPerView: 3,
          spaceBetween: 50,
          direction: 'horizontal'
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })

    this.sectionTops.productsTops = this.prdTops
    console.log('這個', this.sectionTops.productsTops)
  }
}
</script>
