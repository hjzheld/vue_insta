<template>
    <PostInsta :postdata="postdata" v-if="open == 0"/>

    <div v-if="open == 1">
        <div :class="select" class="upload-image" :style="{ backgroundImage : `url(${imageUrl})`}"></div>
        <div class="filters" >
            <FilterBox :fil="fil" :imageUrl="imageUrl" v-for="fil in filter" :key="fil">
            {{ fil }}
            </FilterBox>
        </div>
    </div>

    <div v-if="open == 2">
        <div :class="select" class="upload-image" :style="{ backgroundImage : `url(${imageUrl})`}"></div>
        <div class="write">
            <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
        </div>
    </div>
</template>

<script>
import PostInsta from "./Post.vue";
import FilterBox from "./FilterBox.vue";


export default {
    name : 'ContainerInsta',
    data() {
      return { 
        filter : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        select : '',
    }
    },
    mounted() {
    this.emitter.on('fil', (a) => {
        this.select = a
        });
    },
    props : {
        postdata : Array,
        open : Number,
        imageUrl : String
    },
    components : {
        PostInsta : PostInsta,
        FilterBox : FilterBox
    }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>