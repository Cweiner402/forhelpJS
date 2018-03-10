$(document).ready(function() {
	var fileName = "json_files/" + "toobin" + ".json";
			$.getJSON(fileName, function(data) {
				$.each(data, function() {
					$.each(this, function(key, value) {						
						$("div h2").text(value.month +" " + value.speaker);
						$("div p").text(value.text);
					});
				}); 
			});
}); // end ready