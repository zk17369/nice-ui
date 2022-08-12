<script setup lang="ts">
</script>

<template>
    <div class="shine">Hello Nice UI<span> Hello Nice UI</span></div>
</template>

<style lang="scss" scoped>
.shine {
    text-align: center;
    line-height: 25vh;
    width: 100%;
    font-family: "Microsoft YaHei";
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    color: #33f;
    span{
        position: absolute;
        left: calc(50% - 198px);
        background: -webkit-linear-gradient(left, #0f0, #33f) 0 0 no-repeat;
        -webkit-background-size: 150px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
        -webkit-animation: shine 5s infinite;
    }
}
@-webkit-keyframes shine {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 160% 100%;
    }
}
</style>
