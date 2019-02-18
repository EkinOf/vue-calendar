import Calendar from './Calendar.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-calendar', Calendar);
  }
};