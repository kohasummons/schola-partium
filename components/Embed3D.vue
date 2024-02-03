<template>
    <div style="width: 100%; height: 480px;">
        <iframe :title="modelTitle" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
            allow="fullscreen; autoplay; xr-spatial-tracking; camera; midi; encrypted-media" execution-while-out-of-viewport
            execution-while-not-rendered web-share width="100%" height="100%" :src="modelUrl">
        </iframe>
    </div>
</template>
  
<script setup>
const props = defineProps(['modelUrl', 'modelTitle']);
</script>