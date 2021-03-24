<template>
  <div>
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"/>
    <p>
      {{result}}
    </p>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: {
    StreamBarcodeReader,
  },
  data:()=>({
    result: "",
  }),
  methods: {
    onDecode(result) {
      console.log('Código:',result);
      this.result = result;
    },
    onLoaded(teste) {
      console.log(teste);
    },
  },
};
</script>
