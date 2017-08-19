<template>
    <div class='background'  :style ="note">
    <div class='filebox'>
        
          <!-- <img :src="pic_background" style="width:100%"> -->
     <div class='btn'>
        <el-upload class="upload" action="updateQuestions" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="questionaire" enctype='multipart/form-data'>
             <img class="model-img" :src="pic_questionaire">
            <el-button @click='send()'>更新问卷信息</el-button>
        </el-upload>
         <el-upload class="upload" action="updateProduct" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="productmessage" enctype='multipart/form-data'>
            <img class="model-img" :src="pic_product">
            <el-button @click='send()'>更新产品信息</el-button>
        </el-upload>      
        <!-- <input type="file" value=""  id="file"  @change='QuestionUpload'>
        <input type="file" value=""  id="file"  @change='ProductUpload'> -->
        <!-- <form action='updateQuestions' method='post' enctype='multipart/form-data'>
         <img class="model-img" :src="pic_questionaire">
        <input class="upload" type='file' name='file'>
        <input  type='submit' value='更新问卷信息'>
        </form>
        <form action='updateProduct' method='post' enctype='multipart/form-data'>
        <img class="model-img" :src="pic_product">
        <input class="upload" type='file' name='file'>
        <input type='submit' value='更新产品信息'>
        </form> -->
    </div>
         
    </div>
    </div>
 
        
</template>

<script>
import questionaire from '../../assets/news.png';
import product from '../../assets/product.png';

    export default {
        data: function(){
            return {
                    pic_questionaire:questionaire,
                    hostUrl: '/VR', 
                    pic_product:product,
                    data:{
                        code:200,
                    },
                   
                    questionaire:[],
                    productmessage:[],
                   
            }
        },
    
    
        methods:{
        handleRemove(file, fileList) {
        console.log(file, fileList);
            },
        handlePreview(file) {
        console.log(file);
            },
            
        send(){
            var self=this;
            self.$axios({
                    url:'updateQuestions/check',
                    method:'post',
                    baseURL: self.hostURL,
                }).then((response)=>{
                    self.data=response.data;
                    if(self.data.code == 200)
                            msg('上传成功');
                    else
                            msg('上传失败');
                }).catch((error)=>{
                    console.log(error);
                });
            },
        }

    
   
    }

</script>




<style scoped>
.filebox{
    
     width: 100%;
     margin:0 auto;
    /* border:1px solid #e6e6e6;  */
}
.filebox img{
    float:left;
}
.upload{
    position:relative;
    margin-left:350px;
    margin-top: 60px;
    margin-bottom: 55px;
 
}
.model-img{
    width: 35px;
    height:35px;
 
    
}
.btn{
   position:absolute;
}
</style>