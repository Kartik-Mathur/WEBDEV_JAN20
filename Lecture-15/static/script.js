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
        $.get(
            `/addtask?task=${$('#task').val()}&priority=${$('#priority').val()}`,
            (data)=>{
                if(data == 'success'){
                    console.log('Here')
                    refreshTodo()
                }
            }
        )
    })
})