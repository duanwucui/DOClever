webpackJsonp([4],{201:function(t,n,e){(function(t,n,o,i){var a=e(7),d=e(28);t.get("id")||(location.href="../login/login.html");new n({el:"#app",data:{photo:t.get("photo"),name:t.get("name"),projectList:[],showAdd:!1,name:"",dis:"",addPending:!1},components:{mainnav:a,projectlist:d},methods:{add:function(){if(!this.name)return void this.$message.error("请输入名称");var t=this;this.addPending=!0,o.post("/project/create",{name:t.name,dis:t.dis},{"content-type":"application/x-www-form-urlencoded"}).then(function(n){t.addPending=!1,200==n.code&&(t.projectList.unshift(n.data),t.$notify({title:"创建成功",type:"success"}),t.showAdd=!1,t.name="",t.dis="")})},importProject:function(){i.showBox(this,"importProject")}},created:function(){var t=this;o.get("/project/list",{}).then(function(n){if(i.stopLoading(),200==n.code)for(var e=0;e<n.data.length;e++)t.projectList.push(n.data[e])})}});i.ready(function(){i.startLoading()})}).call(n,e(3),e(2),e(5),e(0))}},[201]);