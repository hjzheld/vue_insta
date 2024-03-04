<template>
  <div class="header">
    <ul class="header-button-left" @click="open=1">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-center"  @click="open=0">
      <li>Home</li>
    </ul>
    <ul class="header-button-right" v-if="open != 2">
      <li  @click="open=2">Next</li>
    </ul>
    <ul v-if="open == 2" class="header-button-right">
      <li @click="publish">Save</li>
    </ul>
  </div>
  
 <ContainerInsta :postdata="postdata" :open="open" :imageUrl="imageUrl" @write="dataWrite = $event" />
 
 <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

 {{ name }}
  
</template>

<script>
import ContainerInsta from "./components/Container.vue";
import postdata from "./assets/insta.js";
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      postdata : postdata,
      plus : 0,
      open : 0,
      imageUrl : '',
      dataWrite : '',
      select : '',
    }
  },
  computed : {
    ...mapState(['name', 'age', 'likes']),
  },
  mounted() {
    this.emitter.on('fil', (a) => {
      this.select = a
    });
  },
  methods : {
    publish() {
      var myData = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.imageUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.dataWrite,
        filter: this.select
      };
      this.postdata.unshift(myData)
      this.open = 0;
    },
    more(){
      axios.get(`https://codingapple1.github.io/vue/more.json`)
      .then((result) => {
        this.postdata.push(result.data);
        this.plus++;
      })
    },
    upload(e){
      let newImage = e.target.files;
      let url = URL.createObjectURL(newImage[0])
      if (newImage[0].type.includes("image") == false) {
        alert('이미지 파일만 업로드 가능합니다.')
      }
      this.imageUrl = url;
      this.open = 1;
    },

  },
  components: {
    ContainerInsta : ContainerInsta,
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-center {
  color: skyblue;
  float: left;
  width: 50px;
  cursor: pointer;
  margin: 10px 0px 0px 130px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
