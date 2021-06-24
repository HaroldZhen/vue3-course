/* bus.js */
import mitt from 'mitt';

const bus = {};
const emitter = mitt();
bus.$on = emitter.on;
bus.$off = emitter.off;
bus.$emit = emitter.emit;
export default bus;

// cartCount 更新購物車 in Header.vue
// this.$bus.$emit('cartCount');
