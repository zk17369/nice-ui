import _Icon from './src/icon.vue';
import { withInstall } from '@nice/utils/with-install';

const Icon = withInstall(_Icon);
export default Icon;

export * from './src/icon';

declare module 'vue' {
  export interface GlobalComponents {
    FIcon: typeof Icon;
  }
}
