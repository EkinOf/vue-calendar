<template>
  <div class="comp-full-calendar">
    <!-- header pick month -->
    <calendar-header :current-date="currentDate" 
      :title-format="titleFormat"
      :first-day="firstDay"
      :month-names="monthNames"
      @change="emitChangeMonth">

      <div slot="header-left">
        <slot name="calendar-header-left">
        </slot>
      </div>

      <div slot="header-right">
        <slot name="calendar-header-right">
        </slot>
      </div>
    </calendar-header>
    <!-- body display date day and events -->
    <calendar-body :current-date="currentDate" :events="events" :month-names="monthNames" 
      :week-names="weekNames" :first-day="firstDay"
      @eventclick="emitEventClick" @dayclick="emitDayClick"
      @moreclick="emitMoreClick">
      <div slot="body-card">
        <slot name="calendar-body-card">
        </slot>
      </div>
    </calendar-body>
  </div>
</template>
<script type="text/babel">
  import langSets from './dataMap/langSets.js'
  import calendarBody from './components/Body.vue'
  import calendarHeader from './components/Header.vue'

  export default {
    name: 'vue-calendar',
    props : {
      events : { // events will be displayed on calendar
        type : Array,
        default : []
      },
      lang : {
        type : String,
        default : 'en'
      },
      firstDay : {
        type : Number | String,
        validator (val) {
          let res = parseInt(val)
          return res >= 0 && res <= 6
        },
        default : 0
      },
      titleFormat : {
        type : String,
        default () {
          return langSets[this.lang].titleFormat
        }
      },
      monthNames : {
        type : Array,
        default () {
          return langSets[this.lang].monthNames
        } 
      },
      weekNames : {
        type : Array,
        default () {
          let arr = langSets[this.lang].weekNames
          return arr.slice(this.firstDay).concat(arr.slice(0, this.firstDay))
        }
      }
    },
    data () {
      return {
        currentDate : new Date()
      }
    },
    methods : {
      emitChangeMonth (start, end, currentStart, current) {
        // console.log('currentDate 2', this.currentDate)
        this.currentDate = current
        // console.log('currentDate 3', this.currentDate)
        this.$emit('changeMonth', start, end, currentStart)
      },
      emitEventClick (event, jsEvent, pos) {
        this.$emit('eventClick', event, jsEvent, pos)
      },
      emitDayClick (day, jsEvent) {
        this.$emit('dayClick', day, jsEvent)
      },
      emitMoreClick (day, events, jsEvent) {
        this.$emit('moreClick', day, event, jsEvent)
      }
    },
    components : {
      'calendar-body'   : calendarBody,
      'calendar-header' : calendarHeader
    }
  }
  
</script>
<style lang="scss">
  .comp-full-calendar{
    // font-family: "elvetica neue", tahoma, "hiragino sans gb";
    padding:20px;
    background: #fff;
    max-width: 960px;
    margin:0 auto;
    ul,p{
      margin:0;
      padding:0;
      font-size: 14px;
    }
  }
</style>