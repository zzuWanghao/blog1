import blog from '@/api/blog'

export default {
    data () {
        return {
            title: '',
            description: '',
            content: '',
            blogId:null,
            atIndex: false,
            titleClass: false
        }
    },
    created() {

        this.blogId=this.$route.params.blogId
        blog.getDetail({blogId:this.blogId}).then(res=>{
            console.log(res)
                 this.title=res.data.title,
                 this.description = res.data.description,
                 this.content = res.data.content
                 this.atIndex = res.data.atIndex

        })
    },

    methods: {
        onEdit() {
            blog.updateBlog({blogId:this.blogId},{ title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
                .then(res => {
                    this.$message.success(res.msg)
                    // this.$router.push({ path: `/detail/${res.data.id}`})
                     this.$router.push({ name:`detail/${res.data.id}`,
                     params:{}})

                    // this.$router.push( { path:`/detail/${res.data.id}`,
                    //     query:{}})
                })
        },
        inputArea(){
            if (this.title.length > 30) {
                this.title= this.title.slice(0, 30)
                this.titleClass=true
            }
        }
    },
    computed:{

    }
}