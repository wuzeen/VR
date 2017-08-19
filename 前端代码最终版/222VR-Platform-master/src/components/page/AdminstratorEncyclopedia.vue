
<template>
	<div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-edit"></i> 管理员</el-breadcrumb-item>
                <el-breadcrumb-item>百科管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>


				<template>
  <el-table
    :data="encyclopedia_propchangerequrire"
    border
    style="width: 100% "
		height="300"
    @row-click='handleRowHandle'
		>

    <el-table-column  prop="requireid"  label="请求号"  width="100">  </el-table-column>
    <el-table-column    prop="keyword"  label="词条名"  width="300"></el-table-column>
    <el-table-column  prop="prop_keyword"  label="词条属性"  ></el-table-column>
		<el-table-column

      label="操作"
      width="100">
      <template scope="scope">
        <el-button @click="handleClick" type="text" size="small">查看</el-button>

      </template>
      </el-table-column>


    </el-table>
  <div class="pagination">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="pageNum"
                layout="prev, next">
            </el-pagination>
  </div>


  <h1>  内容概述   </h1>
	<p>{{ message}}</p>
	<br></br>
	<el-button type="success" @click="open1">通过</el-button>

  <el-button type="danger" @click="open2">不通过</el-button>


</template>

</div>






</template>

<script>


export default {

data: function(){
      return {
				msg:'',
        message: "",
        pageNum:1,
        hostURL:'/VR',
        id: '1',
        prop_id:"0",
        keyword:"",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote:"a",
        encyclopedia_propchangerequrire:[
          {
            requireid:"1",
            id: '1',
            prop_id:"0",
            keyword:"",
            prop_keyword: 'VR资讯',
            content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
            changenote:"a"
          },
          {
            requireid:"2",
            id: '1',
            prop_id:"1",
            keyword:"",
            prop_keyword: 'VR资讯',
            content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
            changenote:"a"
          },
          ]
      }
    },

    methods:{
    handleRowHandle(row ,event,column)
    {
      console.log(row.content);
      this.message =  row.content;
      this.id=row.id;
      this.prop_id=row.prop_id;
      this.keyword=row.keyword;
      this.prop_keyword=row.prop_keyword;
      this.content=row.content;
      this.changenote=row.changenote;



    },
    open1()//通过按钮
    {
      var self=this;
      var updatedata={
        id: '1',
        prop_id:"0",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote:"a"
      };
      updatedata.id=self.id;
      updatedata.prop_id=self.prop_id;
      updatedata.prop_keyword=self.prop_keyword;
      updatedata.content=self.content;
      updatedata.changenote=self.changenote;
      self.$axios({
          url:'/encyclopedia-propRequireOpen1',
          method:'post',
          baseURL: self.hostURL,
          data:updatedata
      }).then((response)=>{
        var state=response.data;
        if(state==1){
          self.$message({
            type:'info',
            message:'修改成功'
            });
        }
        else{
          self.$message({
            type:'info',
            message:'修改失败'
            });
        }                    
      }).catch((error)=>{
          console.log(error);
      });


    },
    open2()//不通过按钮
    {
      var self=this;
      var updatedata={
        id: '1',
        prop_id:"0",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote:"a"
      };
      updatedata.id=self.id;
      updatedata.prop_id=self.prop_id;
      updatedata.prop_keyword=self.prop_keyword;
      updatedata.content=self.content;
      updatedata.changenote=self.changenote;
      self.$axios({
          url:'/encyclopedia-propRequireOpen2',
          method:'post',
          baseURL: self.hostURL,
          data:updatedata
      }).then((response)=>{
        var state=response.data;
        if(state==1){
          self.$message({
            type:'info',
            message:'删除成功'
            });
        }
        else{
          self.$message({
            type:'info',
            message:'删除失败'
            });
        }                                       
      }).catch((error)=>{
          console.log(error);
      });

    },
    /*
            .then(() => {
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

    */
    getRequireList(){
      var self=this;
      var page=self.pageNum;
      self.encyclopedia_propchangerequrire=[];
      self.$axios({
          url:'/encyclopedia-propRequire/'+page,
          method:'get',
          baseURL: self.hostURL,
      }).then((response)=>{
        self.encyclopedia_propchangerequrire=response.data;                    
      }).catch((error)=>{
          console.log(error);
      });


    }
  },
  mounted(){
    var self=this;
    self.getRequireList();

  }

    
  }
</script>


<style>
h1{
text-align: center;
text-transform: uppercase;
color: #A7C942;
}
p{
text-indent: 50px;
text-align:justify;
letter-spacing:3px;
}
.pagination{
    margin-left:50px;
}

</style>
