<template>
  <div class="height-editor-box">
    <el-form-item size="default" :label="module.props.degree.chName">
      <el-switch v-model="module.props.degree.show" />
      <icon-select-pop
        v-if="module.props.degree.iconfont"
        v-model="module.props.degree.iconfont"
      ></icon-select-pop>
    </el-form-item>
  </div>
</template>
<script lang="ts" setup>
  import { useGetSelectedModule } from '../../hooks/useGetSelectedModule';
  import IconSelectPop from '@/components/IconSelectPop/IconSelectPop.vue';

  const props = defineProps<{
    id: string;
  }>();

  // 选中的module
  const module = useGetSelectedModule(props.id);
</script>
