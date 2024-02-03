<script setup>
const props = defineProps(['cardText', 'modelUrl', 'modelTitle']);
</script>   
<template>
    <div class="h-[480px] w-[600px] relative overflow-hidden">
        <div @click="$router.push(`/Parts/${modelTitle}`)"
            class="absolute bottom-0 w-full flex items-center justify-between bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 cursor-pointer">
            <p class="text-white text-lg font-bricolage font-medium text-left px-4 py-2">{{ cardText }}</p>
            <span class="px-2 cursor-pointer">
                <IconsArrow />
            </span>
        </div>
        <Embed3D :modelUrl="modelUrl" :modelTitle="modelTitle" />
    </div>
</template>