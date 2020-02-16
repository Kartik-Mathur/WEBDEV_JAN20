$(document.body)
.append(
    $('<input>').attr('id','newtask') 
)
.append(
    $('<button>')
        .attr('id','addtask')
        .text('Add')
        .click(()=>{
            $('#tasklist')
                .append(
                    $('<li>')
                    .text($('#newtask').val())       
                    .append(
                        $('<button>').text('❌').click((ev)=>{
                            // console.log(ev.target) 
                            $(ev.target).parent().remove()
                        })
                    )
                    .append(
                        $('<button>')
                        .attr('class','btn-down')
                        .text('↓').click((ev)=>{
                            $(ev.target).parent()
                                .insertAfter($(ev.target).parent().next() )
                        })
                    )
                    .append(
                        $('<button>')
                        .attr('class','btn-up')
                        .text('↑') .click((ev)=>{
                            $(ev.target).parent()
                                .insertBefore($(ev.target).parent().prev() )
                        })
                    )
                )
                $('#newtask').val(' ')
        })
)
.append(
    $('<ul>').attr('id','tasklist')
)