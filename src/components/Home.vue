<template>
  <div class="text-center">
    <v-form>
      <v-container>
        <div
          class="d-flex flex-column justify-space-between align-center mb-10"
        >
          <v-img
            src="../assets/logo.jpg"
            width="200px"
            aspect-ratio="2"
            contain
          ></v-img>
        </div>

        <v-row v-if="!lerCodigo && result !== ''" justify="center">
          <v-text-field
            :value="result"
            label="Código de barras"
            disabled
          ></v-text-field>
        </v-row>
        <v-btn color="primary" dark v-if="!lerCodigo" @click="lerCodigoBarra">
          Ler código de barras
        </v-btn>

        <div>
          <v-progress-circular
            indeterminate
            :width="7"
            :size="70"
            color="primary"
            v-if="loading"
          ></v-progress-circular>
          <StreamBarcodeReader
            v-if="lerCodigo"
            @decode="onDecode"
            @loaded="loading = false"
          />
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: {
    StreamBarcodeReader,
  },
  data: () => ({
    result: "",
    lerCodigo: false,
    loading: false,
  }),
  methods: {
    lerCodigoBarra() {
      this.lerCodigo = true;
      this.loading = true;
    },
    onDecode(result) {
      this.result = result;
      this.lerCodigo = false;
    },
  },
};
</script>
