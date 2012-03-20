(function ($) {
  $.fn.customInput = function () {
    return this.each(function () { 
      
      var input     = $(this);
      var inputType = input.attr('type');
      var label     = $('label[for=' + input.attr('id') + ']');

      // Add a class to the main parent of the group
      // of checkboxes or radios
      input.parent().addClass('custom-input');

      // Add the class to the labels to load the
      // custom images for the inputs. Checks first
      // to see if a group of inputs has a parent
      // label, if they do, don't add the class.
      if (label.size() > 1) {
        label.not(':eq(0)').addClass('custom-' + inputType);
      } else {
        label.addClass('custom-' + inputType);
      }
      
      // checks to see if the input is checked by
      // default then adds the appropriate class 
      // to the custom label
      if (input.is(':checked')){
        label.addClass('checked');    
      }

      // Add a hover on the labels so we can apply
      // a visual style (the same style will be used
      // when the native input or label have focus)
      label.hover(function(){
        label.addClass('hover'); 
      }, function(){
        label.removeClass('hover');
      });

      // 1. Bind the inputs to a custom event to 
      // the inputs/label will update themselves
      // if clicked, via javascript or through
      // keyboard navigation
      // 2. Trigger the event
      // 3. Update the input/label via click event
      // 4. Update the input/label when either have focus
      // 5. Update the input/label when focus is lost
      input.bind('change', function(){   
          input.is(':checked') ? label.addClass('checked') : label.removeClass('checked hover'); 
      })
      .click(function(){ 
          $('input[name='+ input.attr('name') +']').trigger('change'); 
      })
      .focus(function(){ 
          label.addClass('focus'); 
          if(input.is(':checked')){  
              input.addClass('focus'); 
          } 
      })
      .blur(function(){ 
          label.removeClass('focus'); 
      });
    });
  };
})(jQuery);