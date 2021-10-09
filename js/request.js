const baseUrl = 'http://115.159.53.197:8080'

const getHttp = (url,param) => {
    let reUrl = url
    if(url.indexOf('/api') === 0){
        reUrl = baseUrl + url
    }
    return axios({
        url:reUrl,
        method:'get',
        params:param
    })
}

const postHttp = (url,data,param) => {
    return axios({
        url:baseUrl + url,
        method:'post',
        params:param,
        data: data
    })
}

// const postAdduser = (param) => {
//     postHttp('/test/user/save',null,param)
// }
// 查询轮播图
const postAdvertisementList = () => {
    return postHttp('/api/advertisementList')
}
// 首页信息
const postIndexTitleList = () => {
    return postHttp('/api/indexTitleList')
}
// tab导航列表
const postModelListByName = (modelName) => {
    return postHttp(`/api/syscatalogListByModualName?yiliaoModel=${modelName}`)
}
// 通过id查询咨询列表
const postTitleListByCatalogId = (param) => {
    return postHttp(
        `/api/titleListByCatalogId`,
        null,
        param    
    )
}
// 获取医生列表
const postSearchDoctor = (param) => {
    return postHttp(
        `/api/listSearchYiliaoDoctor`,
        null,
        param    
    )
}
// 通过id获取医生详情
const postSearchDoctorById = (id) => {
    return postHttp(
        `/api/selectYiliaoDoctor?doctorId=${id}`,
        null,
        null    
    )
}
// 获取医院列表
const postSearchHospital = (param) => {
    return postHttp(
        `/api/listSearchYiliaoHospital`,
        null,
        param    
    )
}
// 通过id获取医院详情
const postSearchHospitalById = (param) => {
    return postHttp(
        `/api/selectYiliaoHospital`,
        null,
        param    
    )
}
// 通过id获取医院详情
const postSearchProvince = (param) => {
    return postHttp(
        `/api/listByYiliaoProvince`,
        null,
        param    
    )
}
// 查询科室列表
const postDoctorPcatalog = (name) => {
    return postHttp(
        `/api/listDoctorPcatalog?catalogName=${name}`,
        null,
        null
    )
}
// 获取产品库-产品类型
const postProductPcatalog = (param) => {
    return postHttp(
        `/api/listProductPcatalog`,
        null,
        param
    )
}
// 获取产品列表
const postProductList = (param) => {
    return postHttp(
        `/api/listSearchYiliaoProduct`,
        null,
        param
    )
}
// 获取产品详情
const postProductDetail = (id) => {
    return postHttp(
        `/api/selectYiliaoProduct?productId=${id}`,
        null,
        null
    )
}
// 获取产品详情
const postCompanyDetail = (id) => {
    return postHttp(
        `/api/selectYiliaoEnterprise?enterpriseId=${id}`,
        null,
        null
    )
}
// 企业库：根据目录名称和省份取得对应的下层目录列表，最顶层名称是产品库
const postEnterprisePcatalog = (param) => {
    return postHttp(
        `/api/listEnterprisePcatalog`,
        null,
        param
    )
}
// 获取企业列表
const postEnterpriseList = (param) => {
    return postHttp(
        `/api/listSearchYiliaoEnterprise`,
        null,
        param
    )
}
// 获取省列表
const postProvinceList = (param) => {
    return postHttp(
        `/api/listByYiliaoProvince`,
        null,
        param
    )
}
// 根据企业ID得到产品列表或根据产品名称得到企业列表
const postEnterpriseProductList = (param) => {
    return postHttp(
        `/api/listSearchEnterpriseProduct`,
        null,
        param
    )
}
// 根据企业ID得到产品列表或根据产品名称得到企业列表
const postTitleById = (id) => {
    return postHttp(
        `/api/titleById?titleId=${id}`,
        null,
        null
    )
}
// 查询医生
const postSearchDoctorInfo = (userId) => {
    return postHttp(
        `/api/searchDoctor?userId=${userId}`,
        null,
        null
    )
}
// 查询企业
const postSearchEnterpriseInfo = (userId) => {
    return postHttp(
        `/api/searcEnterprise?userId=${userId}`,
        null,
        null
    )
}
// 查询医院
const postSearchHospitalInfo = (userId) => {
    return postHttp(
        `/api/searchHospital?userId=${userId}`,
        null,
        null
    )
}
// 查询用户
const postSearchUserInfo = (userId) => {
    return postHttp(
        `/api/searcUserInfo?userId=${userId}`,
        null,
        null
    )
}
// 第二步修改医生
const postEditDoctor = (param) => {
    return postHttp(
        `/api/updateDoctor`,
        null,
        param
    )
}
// 第二步修改企业
const postEditEnterprise = (param) => {
    return postHttp(
        `/api/updateEnterprise`,
        null,
        param
    )
}
// 第二步修改医院
const postEditHospital = (param) => {
    return postHttp(
        `/api/updateHospital`,
        null,
        param
    )
}
// 第二步修改企业产品
const postEditProduct = (param) => {
    return postHttp(
        `/api/updateProduct`,
        null,
        param
    )
}
// 第二步修改用户
const postEditUserInfo = (param) => {
    return postHttp(
        `/api/updateUserInfo`,
        null,
        param
    )
}
// 第二步注册用户
const postAddUserInfo = (param) => {
    return postHttp(
        `/api/addUserInfo`,
        null,
        param
    )
}
// 直接注册医生
const postAddDoctor = (param) => {
    return postHttp(
        `/api/addDoctor`,
        null,
        param
    )
}
// 直接注册医院
const postAddEnterprise = (param) => {
    return postHttp(
        `/api/addEnterprise`,
        null,
        param
    )
}
// 直接注册医院
const postAddHospital = (param) => {
    return postHttp(
        `/api/addHospital`,
        null,
        param
    )
}
// 直接注册用户
const postAddUser = (param) => {
    return postHttp(
        `/api/addUserInfo`,
        null,
        param
    )
}
// 登录
const postUserLogin = (mobile) => {
    return postHttp(
        `/api/userLogin?mobileStr=${mobile}`,
        null,
        null
    )
}
// 登录
const postUserInfoByMobile = (mobile) => {
    return postHttp(
        `/api/selectYiliaoUserByMobileStr?mobileStr=${mobile}`,
        null,
        null
    )
}
// 发送验证码
const postSendMs = (mobile) => {
    return postHttp(
        `/api/sendMs?phoneNumber=${mobile}`,
        null,
        null
    )
}
// 修改注册手机号
const postUpdateMobile = (param) => {
    return postHttp(
        `/api/updateMobile`,
        null,
        param
    )
}
// 新增咨询记录
const postAddConsult = (param) => {
    return postHttp(
        `/api/addConsult`,
        null,
        param
    )
}
// 根据论坛目录获取列表
const postBBSByType = (typeName) => {
    return postHttp(
        `/api/bbscatalogListByBbsType?bbsType=${typeName}`,
        null,
        null
    )
}
// 根据论坛列表id获取列表
const postBBSByCatalogId = (catalogId) => {
    return postHttp(
        `/api/bbsDiscussListByCatalogId?catalogId=${catalogId}`,
        null,
        null
    )
}
// 论坛id查详情
const postBBSDetailById = (bbsId) => {
    return postHttp(
        `/api/bbsDiscussById?bbsId=${bbsId}`,
        null,
        null
    )
}
// 查询字典值
const postDictByType = (dictType) => {
    return postHttp(
        `/api/listDictDataByDictType?dictType=${dictType}`,
        null,
        null
    )
}
// 查询医生的文章
const postDoctorArticleByDoctorId = (param) => {
    return postHttp(
        `/api/listDoctorArticleByDoctorId`,
        null,
        param
    )
}
// 医生发布文章
const postAddDoctorArticle = (param) => {
    return postHttp(
        `/api/addDoctorArticle`,
        null,
        param
    )
}
// 医生发布文章
const postEditDoctorArticle = (param) => {
    return postHttp(
        `/api/updateDoctorArticle`,
        null,
        param
    )
}
// 查询医生文章详情
const postSearchDoctorArticleDetail = (id) => {
    return postHttp(
        `/api/selectYiliaoDoctorArticle?doctorArticleId=${id}`,
        null,
        null
    )
}
// 图片上传
const postUploadFile = (data) => {
    return postHttp(
        `/api/upload`,
        data,
        null
    )
}
// 查询产品库
const postSearchListIsLaunch = (param) => {
    return postHttp(
        `/api/listIsLaunch`,
        null,
        param
    )
}
// 查询产品库
const getMapLocation = () => {
    return getHttp(
        `http://api.map.baidu.com/highacciploc/v1?qcip=220.181.38.113&qterm=pc&ak=exKldCvfrnSWrSFw8l6GheAyPlkRwVph&coord=bd09ll`,
        null,
        null
    )
}

// 新增评论
const postAddCommentsInfo = (param) => {
    return postHttp(
        `/api/addCommentsInfo`,
        null,
        param
    )
}

// 新增评论的回复
const postAddCommentsReply = (param) => {
    return postHttp(
        `/api/addCommentsReply`,
        null,
        param
    )
}

// 根据评论主表ID取评论回复列表：传入评论主表的ID值，返回评论回复列表信息
const postCommentsByCommentId = (param) => {
    return postHttp(
        `/api/commentsByCommentId`,
        null,
        param
    )
}

// 根据被评论者ID取评论列表信息：传入被评论者的ID值，返回评论列表信息
const postCommentsByOwnerId = (param) => {
    return postHttp(
        `/api/commentsByOwnerId`,
        null,
        param
    )
}

// 根据资讯ID取评论列表信息：传入资讯的ID值，返回评论列表信息
const postCommentsByTitleId = (param) => {
    return postHttp(
        `/api/commentsByTitleId`,
        null,
        param
    )
}

// 修改评论信息（用来修改点赞数量）
const postUpdateLikeNum = (param) => {
    return postHttp(
        `/api/updateLikeNum`,
        null,
        param
    )
}

// 修改评论信息（用来修改点赞数量）
const postDoctorArticle = (doctorId) => {
    return postHttp(
        `/api/titleByDoctorId`,
        null,
        {doctorId:doctorId}
    )
}

// 广告
const postBannerList = () => {
    return postHttp(
        `/api/bannerList`,
        null,
        null
    )
}

// http://115.159.53.197:8080/yiliao/comments/get
// http://115.159.53.197:8080/api/comments/get
// http://localhost:8080/yiliao/comments/get/{ownerId}(根据 ownerId 查询评论)
// http://localhost:8080/yiliao/comments/save(保存评论)
// http://localhost:8080/yiliao/comments/save-reply(保存评论回复)
// http://localhost:8080/yiliao/comments/get-reply/{commentId}(通过commentId获取评论回复)
