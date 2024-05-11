const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmpl93x/",
            name: "ssmpl93x",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmpl93x/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社团微信小程序"
        } 
    }
}
export default base
