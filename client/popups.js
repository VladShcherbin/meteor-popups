Popups = {};

Popups.options = {
  alert: {
    buttonText: 'Ok'
  },
  confirm: {
    confirmButtonText: 'Ok',
    cancelButtonText: 'Cancel'
  }
};

Popups.alert = function (title, message) {
  var self = this;

  if (title) {
    if (typeof title === 'object' && title.title) {
      return self._renderAlertTemplate({
        title: title.title,
        message: title.message || null
      });
    }

    if (typeof title === 'string') {
      return self._renderAlertTemplate({
        title: title,
        message: message || null
      });
    }

    throw new Meteor.Error(400, 'Wrong title format, string or object is expected');
  } else {
    throw new Meteor.Error(400, 'The title value or object is required');
  }
};

Popups.confirm = function (title, message, confirmCallback, cancelCallback) {
  var self = this;

  if (title) {
    if (typeof title === 'object' && title.title) {
      return self._renderConfirmTemplate({
        title: title.title,
        message: title.message || null,
        confirmCallback: title.confirmCallback || null,
        cancelCallback: title.cancelCallback || null
      });
    }

    if (typeof title === 'string') {
      if (typeof message === 'function') {
        confirmCallback = message;
        message = null;
      } else {
        confirmCallback = (confirmCallback && typeof(confirmCallback) === "function") ? confirmCallback : null;
      }

      return self._renderConfirmTemplate({
        title: title,
        message: message || null,
        confirmCallback: confirmCallback,
        cancelCallback: (cancelCallback && typeof(cancelCallback) === "function") ? cancelCallback : null
      });
    }

    throw new Meteor.Error(400, 'Wrong title format, string or object is expected');
  } else {
    throw new Meteor.Error(400, 'The title value or object is required');
  }
};

Popups._renderAlertTemplate = function (object) {
  object.buttonText = this.options.alert.buttonText;

  return Blaze.renderWithData(Template.popupAlert, object, document.body);
};

Popups._renderConfirmTemplate = function (object) {
  object.confirmButtonText = this.options.confirm.confirmButtonText;
  object.cancelButtonText = this.options.confirm.cancelButtonText;

  return Blaze.renderWithData(Template.popupConfirm, object, document.body);
};