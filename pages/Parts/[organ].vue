<script setup>
import { data } from "../../constants"

const route = useRoute();
const dataItem = computed(() => data.find(item => item.modelTitle === route.params.organ));

const { data: geminiResponse } = await useFetch('/api/gemini', {
    method: 'post',
    body: {
        organ: dataItem.value.modelTitle
    }
})


</script>
<template>
    <div @click="$router.push('/')" class="hover:bg-red-500 mt-10 px-6 cursor-pointer">
        <button class="text-white flex items-center gap-2">
            <span>
                <IconsBack />
            </span>
            <span>
                Go back
            </span>
        </button>
    </div>
    <main class="px-6 mt-4">
        <div class="">
            <div class="">
                <h1 class="text-white text-[300px] font-bricolage leading-none tracking-tighter">{{ dataItem.modelTitle }}
                </h1>
            </div>
        </div>
        <div class="flex relative">
            <div class="h-[480px] w-[800px] overflow-hidden sticky top-0">
                <Embed3D :modelUrl="dataItem.modelUrl" :modelTitle="dataItem.modelUrl" />
            </div>
            <div class="w-[800px] px-4">
                <MDC :value="geminiResponse" tag="article" class="text-white" />
            </div>
        </div>
    </main>
</template>

<style scoped>
article h1 {
    font-size: 32px;
    margin: 2 0 2 0;
}

article h1, h2, h3 {
    font-size: 24px;
    margin: 2 0 2 0;
}

article ul {
    margin-top: 4px;
    margin-bottom: 8px;
}

article p {
    color: red;
}
</style>