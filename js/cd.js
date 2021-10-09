const createCDImg = (adItemData) => {
    // 创建图片
    const imgObj = document.createElement('img')
    imgObj.src = `${baseUrl}/${adItemData.pictureStr}`
    imgObj.style.width = '100%'
    imgObj.title = adItemData.name
    imgObj.cdLink = adItemData.httpStr
    imgObj.addEventListener('click',(e)=>{
        window.open(e.currentTarget.cdLink); 
    })
    return imgObj
}
postBannerList().then(res => {
    const cdList = res.data.data
    const contCD = [],leftCD = [],rightCD = []
    cdList.forEach(item=>{
        if(item.position === 'top') contCD.push(item)
        else if(item.position === 'left') leftCD.push(item)
        else if(item.position === 'right') rightCD.push(item)
    })
    contCD.forEach((item,index) => {
        const cdBox = document.getElementsByClassName(`cd_content cd${index+1}`)[0]
        cdBox.style.display = 'block'
        cdBox.cdLink = item.httpStr
        cdBox.append(createCDImg(item))
    })
    leftCD.forEach((item,index) => {
        const cdBox = document.createElement('div')
        cdBox.className = `cd_item cd${index}`
        cdBox.style.display = 'block'
        cdBox.cdLink = item.httpStr
        cdBox.append(createCDImg(item))

        document.getElementsByClassName('cd_left_box')[0].append(cdBox)
    })
    rightCD.forEach((item,index) => {
        const cdBox = document.createElement('div')
        cdBox.className = `cd_item cd${index}`
        cdBox.style.display = 'block'
        cdBox.cdLink = item.httpStr
        cdBox.append(createCDImg(item))

        document.getElementsByClassName('cd_right_box')[0].append(cdBox)
    })
})
// window.onload = () => {
//     const contCD = [{
//         color: 'red',
//         text: '内容广告一',
//         img: ''
//     },{
//         color: 'blue',
//         text: '内容广告二',
//         img: ''
//     },{
//         color: 'orange',
//         text: '内容广告三',
//         img: ''
//     }]
//     contCD.forEach((item,index) => {
//         document.getElementsByClassName(`cd_content cd${index+1}`)[0].style.display = 'block'
//         document.getElementsByClassName(`cd_content cd${index+1}`)[0].style.background = item.color
//         document.getElementsByClassName(`cd_content cd${index+1}`)[0].innerHTML = item.text
//     })

//     const leftCD = [{
//         color: 'red',
//         text: '左侧广告一',
//         img: ''
//     },{
//         color: 'blue',
//         text: '左侧广告二',
//         img: ''
//     },{
//         color: 'orange',
//         text: '左侧广告三',
//         img: ''
//     }]
//     leftCD.forEach((item,index) => {
//         const CDObj = document.createElement('div')
//         CDObj.className = `cd_item cd${index}`
//         CDObj.style.background = item.color
//         CDObj.innerHTML = item.text
//         document.getElementsByClassName('cd_left_box')[0].append(CDObj)
//     })

//     const rightCD = [{
//         color: 'red',
//         text: '右侧广告一',
//         img: ''
//     },{
//         color: 'blue',
//         text: '右侧广告二',
//         img: ''
//     },{
//         color: 'orange',
//         text: '右侧广告三',
//         img: ''
//     }]
//     rightCD.forEach((item,index) => {
//         const CDObj = document.createElement('div')
//         CDObj.className = `cd_item cd${index}`
//         CDObj.style.background = item.color
//         CDObj.innerHTML = item.text
//         document.getElementsByClassName('cd_right_box')[0].append(CDObj)
//     })
// }