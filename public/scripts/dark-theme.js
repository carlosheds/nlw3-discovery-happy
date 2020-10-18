const aside = document.querySelector('aside')

// Creating and adding the button the aside .sidebar
const button = document.createElement('button')
button.classList.add('toggle-theme')
button.setAttribute('onclick','changeTheme(event)')
button.innerText = 'Trocar Tema'
aside.appendChild(button)


const currentTheme = localStorage.getItem('theme')
if(currentTheme == 'dark') {
    changeTheme()
}

function changeTheme() {
    // creating the <link> custom tag
    const linkDarkTheme = document.createElement('link')
    linkDarkTheme.setAttribute('rel','stylesheet')
    linkDarkTheme.setAttribute('href','/css/dark-theme.css')
    
    const head = document.head
    let theme = 'light'

    if(head.lastChild.nodeName == 'LINK') {
        head.lastChild.remove()
        button.style.color = "white"
    } else {
        head.appendChild(linkDarkTheme)
        theme = 'dark'
        button.style.color = " #353535"
    }
    localStorage.setItem('theme',theme)
}
