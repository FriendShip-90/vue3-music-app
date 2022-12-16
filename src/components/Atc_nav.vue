<template>
  <div class="inner">
    <div class="profile">
      <h2 class="profile_img">
        <img
          :src="require(`~/assets/images/${imgName}.jpg`)"
          alt="프로필이미지" />
      </h2>
      <div class="profile_txt">
        <p>Man_Joke</p>
        <p>eoonw@naver.com</p>
      </div>
    </div>
    <div class="Gnb">
      <ul class="Gnb_list">
        <li
          v-for="gnb in gnbList"
          :key="gnb.name"
          class="Gnb_item">
          <a
            href="#"
            class="Gnb_link">
            <img
              :src="require(`~/assets/images/${gnb.icon}.svg`)"
              alt="아이콘" />
            {{ gnb.name }}
          </a>
        </li>
      </ul>
      <div class="GnbMyMusic">
        <h3>MY MUSIC</h3>
        <ul class="Gnb_list">
          <li
            v-for="gnb in myList"
            :key="gnb.name"
            class="Gnb_item">
            <a
              href="#"
              class="Gnb_link">
              <img
                :src="require(`~/assets/images/${gnb.icon}.svg`)"
                alt="아이콘" />
              {{ gnb.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgName: "img_profile",
      gnbList: [
        {
          name: "Home",
          icon: 'ico_home',
        },
        {
          name: "Browse",
          icon: 'ico_brows',
        },
        {
          name: "Album",
          icon: 'ico_album',
        },
        {
          name: "Artists",
          icon: 'ico_artist',
        },
        {
          name: "Videos",
          icon: 'ico_video',
        },
      ],
      myList:[
        {
          name: "Recently Played",
          icon: 'ico_played',
        },
        {
          name: "Local Files",
          icon: 'ico_file',
        },
      ]
      
    };
  },
};
</script>

<style lang="scss" scoped>
.inner {
  padding: 4rem 2rem;
  .profile {
    &_img {
      margin: 0 auto;
      width: 10rem;
      height: 10rem;
      border-radius: 100%;
      box-shadow: 3px 3px 1.5rem rgba( 35,35,35,.3);
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &_txt {
      margin-top: 1rem;
      text-align: center;
      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #333;
        &:first-child{
          font-weight: bold;
        }
        &:last-child{
          color: #999;
        }
      }
    }
  }
  .Gnb{
    padding: 9rem 2rem 0;
    &_item{
      margin-bottom: 1.5rem;    
    }
    &_link{
      display: flex;
      align-items: center;
      font-size: 1.8rem;
      color: #666;
      img{
        margin-right: 1.6rem;
        width: 2rem;
        height: 2rem;
        opacity: 0.5;
      }
      &:hover{
        color: #000;
        font-weight: bold;
      }
    }
    .GnbMyMusic{
      padding: 5rem 0 0;
      h3{
        margin-bottom: 2rem;
        font-size: 2rem;
        color: #bbb;
      }
    }
  }
}
</style>