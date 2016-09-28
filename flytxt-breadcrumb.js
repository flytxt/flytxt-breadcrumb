Polymer({
  is: 'flytxt-breadcrumb',
  
  properties: {
    href: {
      type: String,
      value: null
    },
    
    label: {
      type: String
    }
  },
  
  switchUrl: function(e) {
    if (this.href) {
      app.$.router.go(this.href);
    }
    e.stopPropagation();
  },
  
  elvis: function(condition, success, failure) {
    return condition ? success : failure;
  }
});
