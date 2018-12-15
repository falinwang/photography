console.log("It works.")

$(document).ready(function () {
    $('.submit').click(function (event) {

        console.log('Clicked Button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if (subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>The length of subject should be longer then 2 characters.</div>')
        }

        if (message.length >= 10) {
            statusElm.append('<div>Massage is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>The length of message should be longer.</div>')
        }
    })

})