Polymer({
  is: 'flytxt-breadcrumb',
  
  properties: {
    href: {
      type: String,
      value: null
    },
    
    label: {
      type: String
    },
    
    icon: {
      type: String,
      value: 'none'
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
  },
  
  _ifIconIsNull: function(icon) {
    return icon === 'none';
  }
});
