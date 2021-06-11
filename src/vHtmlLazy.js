import {getTop} from './utils';
export default function (el, binding) {
    let wrapEL = document.createElement('div');
    wrapEL.innerHTML = binding.value.html;
    let num = binding.value.defaultNum||2;
    let imgList = wrapEL.getElementsByTagName('img');
    for(let i=0;i<imgList.length;i++){
        imgList[i].setAttribute('data-src',imgList[i].getAttribute('src'));
        if(i>=num){
            imgList[i].setAttribute('src','');
        }
    }
    el.innerHTML = wrapEL.innerHTML;

    let imgs = el.getElementsByTagName('img');

    function lazyLoad(imgs) {
        var H = document.documentElement.clientHeight;//获取可视区域高度
        var S = document.getElementById('app').scrollTop;
        for (var i = 0; i < imgs.length; i++) {
            if (H + S + 100 > getTop(imgs[i])) {
                imgs[i].src = imgs[i].getAttribute('data-src');
            }
        }
    }

    setTimeout(()=>{
        lazyLoad(imgs);

        document.getElementById('app').addEventListener('scroll',()=>{
            lazyLoad(imgs);
        })
    },80)
}
