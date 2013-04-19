/* ===========================================================
 * bootstrap-tooltip.js v3.0.0
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;

 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , $backdrop
        , targetID
        , btnPos
        , tipPos
        , actualWidth
        , actualHeight
        , placement
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        $backdrop = this.backdrop()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
          if(this.options.modal) {
            $backdrop.addClass("fade")
          }
        }

        targetID = typeof(this.$element.attr("data-target")) == 'string' ? this.$element.attr("data-target") : "no_pop_id";

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .attr("id", targetID)
          .css({ top: 0, left: 0, display: 'block' })
        if(this.options.modal) {
          $backdrop
            .attr("id", targetID + "_backdrop")
            .css({ top: 0, left: 0, display: 'block' })

          // close tooltip if backdrop is clicked
          this.$backdrop.bind('mousedown', $.proxy(this.hide, this));
        }

        if(this.options.container) {
          $tip.appendTo(this.options.container)
          if(this.options.modal) {
            $backdrop.insertAfter($tip)
          }
        } else {
          $tip.insertAfter(this.$element)
          if(this.options.modal) {
            $backdrop.appendTo('body')
          }
        } 

        btnPos = this.getPosition()
        
        // we need to delay just a bit before measuring this
        // because angular must inject our content before the container will be sized accordingly.
        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tipPos = {top: btnPos.top + btnPos.height, left: btnPos.left + btnPos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tipPos = {top: btnPos.top - actualHeight, left: btnPos.left + btnPos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tipPos = {top: btnPos.top + btnPos.height / 2 - actualHeight / 2, left: btnPos.left - actualWidth}
            break
          case 'right':
            tipPos = {top: btnPos.top + btnPos.height / 2 - actualHeight / 2, left: btnPos.left + btnPos.width}
            break
          default:
            tipPos = {top: btnPos.top, left: btnPos.left}
        }

        this.$element.trigger('shown')
        this.applyPlacement(btnPos, tipPos, placement)
        if(this.options.modal) {
          $backdrop.addClass('in')
        }

      }
    }

  , applyPlacement: function(btnOffset, tipOffset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace = false

    $tip = this.tip()

    // dimensions we will use to applyPlacement / detect viewport edges
    var winWidth = $(window).width()
    var winHeight = $(window).height()

    $tip
      .offset(tipOffset)
      .addClass(placement)
      .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        tipOffset.top = tipOffset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        // flowing off the screen to the left
        if (tipOffset.left < 0){
          delta = tipOffset.left * -2
          tipOffset.left = 0
          $tip.offset(tipOffset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
          replace = true
        }

        // flowing off the screen to the right
        if (tipOffset.left + actualWidth > winWidth) {

          delta = false
          replace = false

          var btnWidth = btnOffset.right - btnOffset.left;
          var btnRightOffset = winWidth - btnOffset.right;

          $tip.css({ 
            left: 'auto',
            right: btnRightOffset
          })
          $tip.find(".arrow").css({
            left: actualWidth - (btnWidth / 2)
          })
        }

        if(delta) {
          this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')  
        }
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(tipOffset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , $backdrop = this.backdrop()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')
      if(this.options.modal) {
        $backdrop.removeClass('in')
      }

      function removeWithAnimation() {
        if(that.options.persist == false) {
          var timeout = setTimeout(function () {
            $tip.off($.support.transition.end).detach()
            if(that.options.modal) {
              $backdrop.off($.support.transition.end).detach()
            }
          }, 500)

          $tip.one($.support.transition.end, function () {
            clearTimeout(timeout)
            $tip.detach()
          })

          $backdrop.one($.support.transition.end, function () {
            clearTimeout(timeout)
            $backdrop.detach()
          })

        } // END if(that.options.persist == false)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

    // gets the position of the button / element that triggered the tooltip
  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , backdrop: function() {
      return this.$backdrop = this.$backdrop || $(this.options.backdrop)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , html: false
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="arrow"></div><div class="inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , container: 'body'
  , persist: false
  , modal: false
  , backdrop: '<div class="tooltip-backdrop backdrop "></div>'
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
