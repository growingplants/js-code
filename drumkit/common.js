// js 事件监听
// keydowm 的事件处理函数
function onDrumPressed (event) {
    console.log(event.keyCode);
    // 键值拿到了，怎么播放A->clap音乐？
    // 如果相等

        // console.log('按了a');
        // 查找clap 音乐
    var key = event.keyCode;
    var ele = document.querySelector('audio[data-key="' + key + '"]')
    if(ele) ele.play()
    var item = document.querySelector('.key[data-key="' + key + '"]')
    if(item) item.classList.add('playing');
    // setTimeout(function() {
    //     item.classList.remove('playing');    
    // },100)
}
var keys = Array.from(
    document.querySelectorAll('.key')
);
keys.forEach(key => {
    key.addEventListener('transitionend',function() {
        key.classList.remove('playing');
    });
})
window.addEventListener('keydown'
,onDrumPressed)