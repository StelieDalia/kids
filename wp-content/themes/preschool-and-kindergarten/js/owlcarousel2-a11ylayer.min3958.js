!function(t,e,o){var s=function(e){this._core=e,this._initialized=!1,this._core._options=t.extend(s.defaults,this._core.options),this.$element=this._core.$element;var o=t.proxy(function(t){this.setCurrent(t)},this);this._handlers={"initialized.owl.carousel":t.proxy(function(t){this.setupRoot(),t.namespace&&!this._initialized&&(this.setupFocus(),this.setupKeyboard()),this.setCurrent(t)},this),"changed.owl.carousel":o,"translated.owl.carousel":o,"refreshed.owl.carousel":o,"resized.owl.carousel":o},this.$element.on(this._handlers)};s.defaults={},s.eventHandlers={},s.prototype.getDocumentKeyUp=function(){var e=this;return function(o){var s=t(o.target),n=e.focused(s),a=null;n&&(37==o.keyCode||38==o.keyCode?a="prev.owl.carousel":39==o.keyCode||40==o.keyCode?a="next.owl.carousel":13==o.keyCode&&(s.hasClass("owl-prev")?a="prev.owl.carousel":s.hasClass("owl-next")?a="next.owl.carousel":s.hasClass("owl-dot")&&(a="click")),a&&n.trigger(a))}},s.prototype.setupRoot=function(){this.$element.attr({role:"listbox",tabindex:"0"})},s.prototype.setupKeyboard=function(){this.$element.attr("data-owl-access-keyup")||this.$element.bind("keyup",this.getDocumentKeyUp()).attr("data-owl-access-keyup","1"),this.$element.attr("data-owl-carousel-focusable","1")},s.prototype.setupFocus=function(){if(this.$element.bind("focusin",function(){t(this).attr({"data-owl-carousel-focused":"1","aria-live":"polite"}).trigger("stop.owl.autoplay")}).bind("focusout",function(){t(this).attr({"data-owl-carousel-focused":"0","aria-live":"off"}).trigger("play.owl.autoplay")}),this._core._plugins.navigation){var e=this._core._plugins.navigation,o=[];e._controls.$previous&&o.push(e._controls.$previous),e._controls.$next&&o.push(e._controls.$next),e._controls.$indicators&&o.push(e._controls.$indicators.children()),t.each(o,function(){this.attr("tabindex","0")})}},s.prototype.destroy=function(){this.$element.unbind("keyup",this.eventHandlers.documentKeyUp).removeAttr("data-owl-access-keyup data-owl-carousel-focusable").unbind("focusin focusout")},s.prototype.focusableElems=function(e){return t(e).find("a, input, select, button, *[tabindex]")},s.prototype.adjustFocus=function(e,o){e.each(function(){var e=t(this),s="0";currentTabIndex=e.attr("tabindex"),storedTabIndex=e.attr("data-owl-temp-tabindex"),o?(s="undefined"!=typeof storedTabIndex&&"-1"!=storedTabIndex?e.attr("data-owl-temp-tabindex"):"0",storedTabIndex=s):(s="-1",storedTabIndex="undefined"!=typeof currentTabIndex||"-1"!=currentTabIndex?currentTabIndex:"0"),e.attr({tabindex:s,"data-owl-temp-tabindex":"0"})})},s.prototype.focused=function(e){if(1==(e=t(e)).attr("data-owl-carousel-focused"))return e;var o=e.closest('[data-owl-carousel-focused="1"]');return o.length>0?o:null},s.prototype.setCurrent=function(e){var o=this._core.$stage,s=this.focusableElems,n=this.adjustFocus;o&&this._core.$stage.children().each(function(e){var o=t(this),a=s(this);o.hasClass("active")?(o.attr("aria-hidden","false"),n(a,!0)):(o.attr("aria-hidden","true"),n(a,!1))})},t.fn.owlCarousel.Constructor.Plugins.Owl2A11y=s}(window.Zepto||window.jQuery,window,document);