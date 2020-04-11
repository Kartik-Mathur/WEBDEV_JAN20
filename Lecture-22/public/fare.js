$(()=>{
    $('#calculate').click(()=>{
        let km = $('#km').val()
        let min = $('#min').val()

        $.get(`/fare?km=${km}&min=${min}`,(data)=>{
            $('#amount').text('₹'+data.fare)
        })
    })
})