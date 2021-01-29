//設置一個變數指向有panel屬性的物件
const panels = document.querySelectorAll('.panel')

//將全部含有panel屬性的物件迭代出來
panels.forEach(panel => {
    //監聽哪個物件有觸發點擊事件
    panel.addEventListener('click', () => {
        //呼叫函式
        removeClass()
        //對該物件增加active的屬性
        panel.classList.add('active')
    })
})

//設置一個函式用以清除所有active屬性
function removeClass() {
    //迭代出所有panel物件
    panels.forEach(panel => {
        //清除所有active屬性
        panel.classList.remove('active')
    })
}