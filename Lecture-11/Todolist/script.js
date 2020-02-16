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
                        $('<button>').text('↓').click((ev)=>{
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
        })
)
.append(
    $('<ul>').attr('id','tasklist')
)