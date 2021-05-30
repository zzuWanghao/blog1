import request from "../../helpers/request";
import auth from "../../api/auth";
import blog from "../../api/blog";
window.request = request
window.auth = auth
window.blog = blog


export default {

    data(){

        return {
            msg:'welcome to vue'
        }
    },
    methods:{

        onClick1(){
            this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
            });
        },
        onClick2() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    }


}