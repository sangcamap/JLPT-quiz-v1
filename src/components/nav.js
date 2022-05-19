const hideApp = () => document.querySelector('.app').style.display = "none"
const showApp = () => document.querySelector('.app').style.display = "flex"
const hideScreen = () => document.querySelector('.screen-wrapper').style.display = "none"
const showScreen = () => document.querySelector('.screen-wrapper').style.display = "flex"
const hidePrepare = () => document.querySelector('.prepare').style.display = "none"
const showPrepare = () => document.querySelector('.prepare').style.display = "flex"
const hideFinish = () => document.querySelector('.finish').style.display = "none"
const showFinish = () => document.querySelector('.finish').style.display = "flex"


export {hideApp ,showApp, hideScreen , showScreen, hidePrepare, showPrepare , hideFinish, showFinish}