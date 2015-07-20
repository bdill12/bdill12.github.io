define(function () {
  return {
     cal: ko.observable(),
     initCal: function() {
     	$('#calendar').fullCalendar();
     }
   };
});