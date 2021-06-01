import blog from '@/api/blog'

export default {
    data () {
        return {
            title: '',
            description: '',
            content: '',
            atIndex: false,
            titleClass: false
        }
    },

    methods: {
        onCreate() {
            blog.createBlog({ title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
                .then(res => {
                    this.$message.success(res.msg)
                    this.$router.push({ path: `/detail/${res.data.id}`})
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