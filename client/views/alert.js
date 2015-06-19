Template.popupAlert.events({
  'click button': function (event, template) {
    Blaze.remove(template.view);
  }
});