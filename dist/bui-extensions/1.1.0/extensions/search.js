define("bui-extensions/1.1.0/extensions/search",["jquery","bui-common/1.1.0/common","bui-form/1.1.0/index","bui-overlay/1.1.0/index","bui-list/1.1.0/index","bui-data/1.1.0/index"],function(e,t,n){function o(e){o.superclass.constructor.call(this,e)}var i=e("jquery"),u=e("bui-common/1.1.0/common"),r=e("bui-form/1.1.0/index");u.extend(o,u.Base),o.ATTRS={tpl:{value:'<p><input type="text" name="key"/> <button class="button button-small">确定</button></p>'}},u.augment(o,{createDom:function(){var e=this,t=i("<div></div>").append(e.get("tpl")),n=new r.Group({srcNode:t}).render();e.set("el",t),e.set("group",n)},renderUI:function(e){var t=e.get("el");t.before(this.get("el"))},bindUI:function(e){var t=this,n=t.get("el"),o=e.get("store"),i=t.get("group");n.find(".button").on("click",function(){o.load(i.getRecord())})}}),n.exports=o});