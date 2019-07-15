export default {
    getSectionBackgroundWithImage(img){
        let scssStyle = 'linear-gradient(90deg,rgba(255,255,255,.1) 0,rgba(255,255,255,.1) 100%)';
        let append= 'background-position: center center; background-repeat: no-repeat; background-size: cover;'
        return `background: ${scssStyle}, url('${img}');${append}`;
    }
}