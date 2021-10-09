const getUrlParam = (key) => {
    const param = window.location.search.substring(1)
    const paramArr = param.split('&')
    const paramObj = {}
    for (var i=0;i<paramArr.length;i++) {
        var pair = paramArr[i].split("=");
        paramObj[pair[0]] = pair[1] || null
    }
    if(key){
        return paramObj[key]
    }else{
        return paramObj
    }
}
const getUrl = () => {
    const href = window.location
    return href.origin + href.pathname
}
//读cookies
const getCookie = name => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return decodeURIComponent(arr[2]);
    else
        return null;
}
const ls_get = (key) => {
    let val = window.localStorage.getItem(key)
    if(val){
        try {
            return JSON.parse(val)
        } catch (error) {
            return ''
        }
    }else{
        return ''
    }
}
const ls_set = (key,data) => {
    window.localStorage.setItem(key,JSON.stringify(data))
}
const ls_remove = (key) => {
    localStorage.removeItem(key)
}
const getUserInfo = () => {
    try {
        const userInfo = localStorage.getItem('userInfo')
        if(new Date() - JSON.parse(userInfo).time > 12 * 60 * 60 * 1000){
            ls_remove('userInfo')
            ls_remove('userDetailInfo')
            window.UserInfo = {}
            return {}
        }else{
            window.UserInfo = JSON.parse(userInfo).data
            return JSON.parse(userInfo)
        }
    } catch (error) {
        window.UserInfo = {}
        return {}
    }
}
getUserInfo()
const getUserDetailInfo = () => {
    try {
        const userDetailInfo = ls_get('userDetailInfo')
        window.UserDetailInfo = userDetailInfo
        return userDetailInfo
    } catch (error) {
        return {}
    }
}
getUserDetailInfo()
const checkUserTime = () => {
    try {
        const userInfo = localStorage.getItem('userInfo')
        if(+new Date() - JSON.parse(userInfo).time < 3600 * 1000){
            localStorage.setItem('userInfo',userInfo.replace(JSON.parse(userInfo).time,+new Date()))
        }
    } catch (error) {
        localStorage.removeItem('userInfo')
    }
}
checkUserTime()
const findKeyByValue = (obj,val) => {
    for(let key in obj){
        if(obj[key] === val){
            return key
        }
    }
    return ''
}
const Loading = (vue) => {
    window.MyLoading = vue.$loading();
}
const LoadingClose = () => {
    window.MyLoading.close();
}
const initWangEdit = (domId) => {
    if(window.wangEditor){
        const E = window.wangEditor
        const editor = new E(`#${domId}`)
        // 配置菜单栏，删减菜单，调整顺序
        editor.config.menus = [
            'head',
            'bold',
            'fontSize',
            'fontName',
            'italic',
            'underline',
            'strikeThrough',
            'indent',
            'lineHeight',
            'foreColor',
            'backColor',
            'link',
            'list',
            'justify',
            'quote',
            'emoticon',
            'image',
            'video',
            'table',
            'code',
            'splitLine',
            'undo',
            'redo',
        ]
        editor.config.showLinkImg = false  //关闭网络路径图片方式
        // editor.config.uploadImgServer = 'http://115.159.53.197:8080/api/upload' // 上传图片的接口地址
        // editor.config.uploadImgShowBase64 = true
        editor.config.uploadFileName = 'file' // formdata中的name属性
        editor.config.uploadVideoName = 'file' // formdata中的name属性
        editor.config.customUploadImg = function (resultFiles, insertImgFn) {
            const formData = new FormData();
            formData.append('file', resultFiles[0]);
            postUploadFile(formData).then(res => {
                insertImgFn(`http://115.159.53.197:8080${res.data.data}`)
            })
        }
        // editor.config.uploadImgHooks = {
        //     // 图片上传并返回结果，但图片插入错误时触发
        //     fail: function (xhr, editor, result) {
        //       console.log(result)
        //     },
        //     success: function (xhr, editor, result) {
        //       // 图片上传并返回结果，图片插入成功之后触发
        //       console.log(result, 'success')
        //     },
        //     // 上传图片出错，一般为 http 请求的错误
        //     error: function(xhr, editor, resData) {
        //         console.log('error', xhr, resData)
        //     },
        // }
        editor.create()
        return editor
    }else{
        alert('请引入wangEdit插件')
    }
}
const formatDate = (dateObj) => {
    return `${dateObj.getFullYear()}-${dateObj.getMonth()+1}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
}
