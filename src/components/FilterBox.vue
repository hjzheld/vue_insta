<template>
    <div @click="fire" :class="fil + ' filter-item'" :style="`background-image : url(${imageUrl})`">
        <slot></slot>
    </div> 
</template>

<script>
export default {
    name : 'FilterBox',
    props : {
        imageUrl: String,
        fil : String,
    },
    methods : {
        fire() {
            this.emitter.emit('fil', this.fil)
        }
    }

}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>