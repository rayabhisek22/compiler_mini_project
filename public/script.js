$(document).ready(()=>{
	var my_form = $('#form-data')
	var result = $('p')
	$(my_form).submit((e)=>{
		e.preventDefault();
		$.post("/compile", my_form.serialize(), (data)=>{
			result.text(data["result"])
		})
	})
})
