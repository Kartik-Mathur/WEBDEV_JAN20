$(()=>{
    function refreshTodo(){
        $('#tasklist').empty()

        $.get(
            '/task?mode=json',
            (data)=>{
                for(let todo of data){
                    $('#tasklist').append(
                        $('<li>').text(todo.name)
                    )
                }
            }
            )
    }
    refreshTodo()

    $('#addtask').click((ev)=>{
        console.log(ev)
        ev.preventDefault()

        $.post(
            '/task?mode=json',
            {
                name:$('#newtask').val()
            },
            (data)=>{
                refreshTodo();
            }
        )
    })
})