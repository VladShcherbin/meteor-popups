Template.popupConfirm.events({
  'click button.btn-confirm': function (event, template) {
    Blaze.remove(template.view);

    if (typeof this.confirmCallback === 'function') {
      this.confirmCallback();
    }
  },
  'click button.btn-cancel': function (event, template) {
    Blaze.remove(template.view);

    if (typeof this.cancelCallback === 'function') {
      this.cancelCallback();
    }
  }
});