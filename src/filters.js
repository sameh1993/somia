import Vue from "vue";

Vue.filter("shorten", function (v, textLength) {
  return v.substring(0, textLength);
});
