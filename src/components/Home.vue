<template>
  <div>
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"/>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: {
    StreamBarcodeReader,
  },
  methods: {
    onDecode(result) {
      console.log('Código:',result);
      alert(result);
    },
    onLoaded(teste) {
      console.log(teste);
    },
  },
};
</script>
