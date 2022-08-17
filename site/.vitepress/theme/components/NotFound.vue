
<template>


    <div class="wrapper">
        <div class="bg-box"></div>
        <div class="foot">
            <a class="action" :href="site.base">返回首页</a>
        </div>
    </div>

</template>

<script setup lang="ts">
import { useData } from 'vitepress'
const { site }  = useData()


</script>

<style scoped>
.bg-box {
    background-image: url("../icon/404.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 800px;
    height: 400px;
    margin: auto;
    margin-top: 20px;
}
.foot{
    width: 100%;
    text-align: center;
}
.action{
    display: inline-block;
    width: 125px;
    height: 38px;
    line-height: 38px;
    margin-top: 60px;
    background: var(--vp-c-brand);
    text-align: center;
    color: #fff;
    border-radius: 25px;
    cursor: pointer;
}
</style>