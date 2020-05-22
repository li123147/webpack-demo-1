import x from './x.js'
import png from './assets/7.png'
//引入图片
const div = document.getElementById('app')

div.innerHTML = `
<img src="${png}">
`//把图片放到src里面

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    },()=>{})
}
div.appendChild(button)