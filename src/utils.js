//offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
export const getTop = (e) => {
    var T = e.offsetTop;
    while(e = e.offsetParent) {
        T += e.offsetTop;
    }
    return T;
}