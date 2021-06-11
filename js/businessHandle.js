// 参数：
// DoctorTJ: 推荐医生
// EnterpriseTJ: 推荐企业
// HospitalTJ: 推荐医院
// IndexmedicinalTJ
// IndexnewTJ: 推荐新闻
// ProductTJ: 推荐产品
// ScienceTJ: 
const getTJData = async (paramKey) => {
    if(ls_get(paramKey) && false){
        return ls_get(paramKey)
    }else{
        const res =  await postIndexTitleList()
        const {
            doctorList,
            enterpriseList,
            hospitalList,
            indexmedicinallist,
            indexnewlist,
            productList,
            scienceList
        } = res.data.data
        ls_set('DoctorTJ',doctorList)
        ls_set('EnterpriseTJ',enterpriseList)
        ls_set('HospitalTJ',hospitalList)
        ls_set('IndexmedicinalTJ',indexmedicinallist)
        ls_set('IndexnewTJ',indexnewlist)
        ls_set('ProductTJ',productList)
        ls_set('ScienceTJ',scienceList)
        return ls_get(paramKey)
    }
}
