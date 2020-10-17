const aside = document.querySelector('aside')
const button = document.createElement('button')
button.classList.add('toggle-theme')
button.setAttribute('onclick','changeTheme(event)')
button.innerText = 'Mudar Tema'
aside.appendChild(button)

function changeTheme() {
    const link = document.createElement('link')
    link.setAttribute('rel','stylesheet')
    link.setAttribute('href','./public/css/dark-theme.css')

    const head = document.head
    console.log(head.lastChild.nodeName)
    if(head.lastChild.nodeName == 'LINK') {
        head.lastChild.remove()
        darkTheme = false
    } else {
        head.appendChild(link)
        darkTheme = true
    }
}