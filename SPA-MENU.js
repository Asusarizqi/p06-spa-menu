		$(document).ready(function(){
		    $(".new").click(function(){
		        let new_id = $(this).prop('id');
		        let split = new_id.split('_');
		        let id = split[1];

		        $(".new").removeClass('aktif');
		        $("#new_"+id).addClass('aktif');

		        $(".home").slideUp();
		        $("#es_1").slideUp();
		        $("#es_2").slideUp();
		        $("#es_3").slideUp();
		        $("#es_4").slideUp();
		        $("#es_"+id).slideToggle();
		    });
		});