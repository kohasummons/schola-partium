<script setup>
import {data} from "../../constants"
const route = useRoute()

const dataItem = computed(()=>{
    data.find(item => item.modelTitle === route.params.organ);
})

</script>
<template>
    <main class="px-6 mt-10">
        <div>
            <p class="text-white"><Iconsback/> Go back</p>
        </div>
        <div>
            <div><Embed3D/></div>
        </div>
    </main>

</template>