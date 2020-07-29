$(document).ready(function(){
    const toDoList = $('.list-group'),
          span = $('span'),
          mainForm = $('form'),
          title = $('input'),
          comment = $('textarea');

    mainForm.on('submit', function(event) {
        event.preventDefault();

        const textTitle = title.val().trim(),
              textComment = comment.val().trim();
        
        if(textTitle !== '' && textComment !== '') {

            title.removeClass('border-danger');
            comment.removeClass('border-danger');

            span.hide();
            toDoList.append(`<li class="list-group-item p-1 mb-4">
                                <article>
                                    <header class="w-100 border-bottom d-inline-flex p-0 align-items-center">
                                        <h3 class="col-4 p-3 m-0">${textTitle}</h3>
                                        <div class="col-8 p-3 m-0 d-inline-flex justify-content-between align-items-center">
                                            <button type="submit" class="deletion-button close" name="Удалить дело" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                            <button type="submit" class="folding-button" name="Кнопка свертывания"><img src="caret-bottom.svg"></button>
                                        </div>    
                                    </header>
                                    <p class="text-muted p-3 m-0">${textComment}</p>	
                                </article>`
            );

            title.val('');
            comment.val('');
        } else {

            title.addClass('border-danger');
            comment.addClass('border-danger');

        };     
    });

    toDoList.on('click','.deletion-button', function(){
        $(this).parents('li').remove();
		if(!toDoList.children().length){
			span.show();
		};
    });
    
    toDoList.on('click','.folding-button', function(){
		const fold = $(this).parents('li').find('.text-muted');
		fold.slideToggle();
	});


});