var app = new Vue({
  el: '#app',
  data: {
    open: false,
    text: ''
  },
  methods: {
    click: function() {
      this.open = !this.open;
      
    }
  },
  watch:{
    open: function() {
      if (this.open == true) {
          
          document.app.className = 'open';
          
          }
      else {
        document.app.className = '';
        
      }
    }
  }
})