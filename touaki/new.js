//導覽列按鈕
        document.getElementById('btnHam').addEventListener('click', function () {
        var menu = document.getElementById('menu');
        menu.classList.toggle('show');
        });
        
//絲帶控制
// 獲取 DOM 元素
const ribbon = document.querySelector('.ribbon');
const ribbons = document.querySelector('.ribbons');

// 定義初始化絲帶位置的函數
function initializeRibbons() {
    // 初始化位置為 -100px
    ribbon.style.right = '-100px';
    ribbons.style.right = '-100px';
}

// 定義鼠標移出事件的處理函數
function handleMouseOut() {
    // 當鼠標移出時，將絲帶隱藏到右側邊緣外
    ribbon.style.right = '-100px';
    ribbons.style.right = '-100px';
}

// 首次加載時初始化絲帶位置
window.addEventListener('load', () => {
    initializeRibbons();
});

// 當鼠標移到絲帶上時，將絲帶顯示到右側邊緣
ribbon.addEventListener('mouseover', () => {
    ribbon.style.right = '0px';
});

// 添加鼠標移出事件的監聽器
ribbon.addEventListener('mouseout', handleMouseOut);

// 當鼠標移到另一個絲帶上時，將其顯示到右側邊緣
ribbons.addEventListener('mouseover', () => {
    ribbons.style.right = '0px';
});

// 添加鼠標移出事件的監聽器
ribbons.addEventListener('mouseout', handleMouseOut);


//手風琴
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    });
}