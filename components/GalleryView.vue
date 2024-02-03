<script setup>
import { data } from "../constants";
</script>
<template>
    <main>
        <section class="mt-28 w-fit mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-10 justify-center flex-wrap">
            <CardItem v-for="dataItem in data" :key="dataItem" :cardText="dataItem.modelTitle" :modelUrl="dataItem.modelUrl"
                :modelTitle="dataItem.modelTitle" />
        </section>
    </main>
</template>