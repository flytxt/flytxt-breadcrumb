Polymer({
  is: 'flytxt-breadcrumb',
  
  behaviors: [Flytxt.webL10n, Flytxt.TemplateHelper, Flytxt.UserBehavior],
  
  properties: {
    href: {
      type: String,
      value: null
    },
    
    label: {
      type: String
    }
  },
  
  switchUrl: function() {
    if (this.href) {
      app.$.router.go(this.href);
    }
  }
});
