Package.describe({
  name: 'shcherbin:popups',
  version: '0.1.0',
  summary: 'Popups for confirm, alert modals. Simple and easy to use!',
  git: 'https://github.com/VladShcherbin/meteor-popups',
  documentation: null
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.1');

  api.use([
    'templating'
  ]);

  api.addFiles([
    'client/views/alert.html',
    'client/views/alert.js',
    'client/views/confirm.html',
    'client/views/confirm.js',
    'client/popups.css',
    'client/popups.js'
  ], 'client');

  api.export('Popups');
});