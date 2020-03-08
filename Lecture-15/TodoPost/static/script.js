$(()=>{

    function refreshTodo(){
        $('#tasklist').empty()
        $.get(
            '/tasks',
            (data)=>{
                for(let item of data){
                    $('#tasklist').append(
                        `<li>
                            <b>${item.task}</b>
                             ${item.priority}
                        </li>`
                    )
                }
            }
        )
    }

    refreshTodo()

    $('#addtask').click(()=>{
        $.post(
            '/tasks',
            {
                task:$('#task').val() ,
                priority: +($('#priority').val()||1)
            },
            (data)=>{
                if(data == 'success'){
                    refreshTodo()
                }
            }
        )
    })
})