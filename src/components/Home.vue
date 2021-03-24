<template>
  <div>
    <p>{{loading}}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  created() {
    // Pass an options object with `eventBus: true` to receive an eventBus back
    // which emits `start` and `finish` events
    const eventBus = this.$barcodeScanner.init(this.onBarcodeScanned, {
      eventBus: true,
    });
    if (eventBus) {
      eventBus.$on("start", () => {
        this.loading = true;
      });
      eventBus.$on("finish", () => {
        this.loading = false;
      });
    }
  },
  destroyed() {
    // Remove listener when component is destroyed
    this.$barcodeScanner.destroy();
  },
  methods: {
    // Create callback function to receive barcode when the scanner is already done
    onBarcodeScanned(barcode) {
      console.log(barcode);
      // do something...
    },
    // Reset to the last barcode before hitting enter (whatever anything in the input box)
    resetBarcode() {
      let barcode = this.$barcodeScanner.getPreviousCode();
      // do something...
    },
  },
};
</script>
