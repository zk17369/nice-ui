<template>
    <!-- <i :style="style">
        <icon-park 
          type="Home" 
          :theme="theme" 
          :size="size"
          :spin="spin"
          :fill="fill"
          :strokeLinecap="strokeLinecap"
          :strokeLinejoin="strokeLinejoin"
          :strokeWidth="strokeWidth"
        ></icon-park>
    </i> -->
    <div>
      范德萨看了范德萨
    </div>
</template>
<script setup lang="ts">
import { iconProps } from "./icon";
import { IconPark } from "@icon-park/vue-next/es/all";

defineOptions({ name: "NiIcon" });
const props = defineProps(iconProps);

const {
    type,
    theme,
    size,
    spin,
    fill,
    strokeLinecap,
    strokeLinejoin,
    strokeWidth,
} = props;
</script>
