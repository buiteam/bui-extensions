define("bui-extensions/1.1.0/extensions/search-debug", ["jquery", "bui-common/1.1.0/common-debug", "bui-form/1.1.0/index-debug", "bui-overlay/1.1.0/index-debug", "bui-list/1.1.0/index-debug", "bui-data/1.1.0/index-debug"], function(require, exports, module) {
  /**
   * @fileOverview
   * @ignore
   */
  var $ = require('jquery'),
    BUI = require("bui-common/1.1.0/common-debug"),
    Form = require("bui-form/1.1.0/index-debug");

  function Search(config) {
    Search.superclass.constructor.call(this, config);
  }
  BUI.extend(Search, BUI.Base);
  Search.ATTRS = {
    tpl: {
      value: '<p><input type="text" name="key"/> <button class="button button-small">确定</button></p>'
    }
  }
  BUI.augment(Search, {
    createDom: function(control) {
      var _self = this,
        el = $('<div></div>').append(_self.get('tpl')),
        group = new Form.Group({
          srcNode: el
        }).render();
      _self.set('el', el);
      _self.set('group', group);
    },
    renderUI: function(control) {
      var el = control.get('el');
      el.before(this.get('el'));
    },
    bindUI: function(control) {
      var _self = this,
        el = _self.get('el'),
        store = control.get('store'),
        group = _self.get('group');
      el.find('.button').on('click', function(ev) {
        store.load(group.getRecord());
      })
    }
  });
  module.exports = Search;
});