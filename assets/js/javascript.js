$(function() {
  function compute() {
  var c = $('select#time_from_hour').val();
  var d = $('select#time_from_minute').val();
  var e = $('select#time_to_hour').val();
  var f = $('select#time_to_minute').val();
  var g = $('input#date_from').val();
  var h = $('input#date_to').val();
  var hour1 = g + ' ' + c + ':' + d;
  var hour2 = h + ' ' + e + ':' + f;
  
  hour1 = hour1.split("/");
  var hour1 = hour1[1]+","+hour1[0]+","+hour1[2];
  var timestamp = (new Date(hour1).getTime()/1000) + 7200;
  $('#total_hour1').val(timestamp);
  
  hour2 = hour2.split("/");
  var hour2 = hour2[1]+","+hour2[0]+","+hour2[2];
  var timestamp = (new Date(hour2).getTime()/1000) + 7200;
  $('#total_hour2').val(timestamp);
  
  var x = -$('input#total_hour1').val();
  var y = -$('input#total_hour2').val();
  var total_time = x - y;
  result = total_time / 86400;
  new_number = Math.ceil(result);
  
  if(isNaN(new_number)) {
    var new_number = 0;
  }
  $('#finish_day').val(new_number);  
  }
  $('select#time_from_hour').change(compute);
  $('select#time_from_minute').change(compute);
  $('select#time_to_hour').change(compute);
  $('select#time_to_minute').change(compute);
    
});


