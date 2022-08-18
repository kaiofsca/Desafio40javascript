
let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList

        if(styles.value === 'btn decremento') {
            count--
            value.innerHTML = count
        } else if(styles.value === 'btn incremento') {
            count++
            value.innerHTML = count
        } else if(styles.value === 'btn resetar') {
            count = 0
            value.innerHTML = count
        }

        if(count > 0) {
            value.style.color = 'green'
        }
        if(count < 0) {
            value.style.color = 'red'
        }
        if(count === 0) {
            value.style.color = '#222'
        }

    })
})