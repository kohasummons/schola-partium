<script setup>
import { data } from "../constants";
</script>
<template>
    <main>
        <section class="mt-28 w-3/4 mx-auto grid grid-cols-2 gap-10 justify-center flex-wrap">
            <CardItem v-for="dataItem in data" :key="dataItem" :cardText="dataItem.modelTitle" :modelUrl="dataItem.modelUrl"
                :modelTitle="dataItem.modelTitle" />
        </section>
    </main>
</template>