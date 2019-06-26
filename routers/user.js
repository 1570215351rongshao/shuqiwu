//导入express模块
const express=require("express");
//导入连接池
const pool=require("../pool.js");
//创建路由
var router=express.Router();

//创建注册路由
router.post("/v1/user_reg",(req,res)=>{
        var obj=req.body;
		pool.query(" insert into xz_user SET ?",[obj],(err,result)=>{
		          if(err) throw err;
				  if (result.affectedRows>0)
				  {
					  res.send("1");
				  }else{
				      res.send("0");
				  }
		});
});
//注册验证路由
router.get("/v1/verify:uname",(req,res)=>{
           var $uname=req.params.uname;
		   pool.query("select * from xz_user where uname=?",[$uname],(err,ruest)=>{
		               if (err) throw err;
		               if (result.length>0)
		               {
						   res.send("1");
		               }else{
					       res.send("0");
					   }
		               
		   });
});
//创建登录路由
router.get("/v1/user_login/:uname-:upwd",(req,res)=>{
            var $uname=req.params.uname;
			var $upwd=req.params.upwd;
			pool.query("select * from xz_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
			         if(err) throw err;
					 if (result.length>0)
					 {
						 res.send("1");
					 }else{
						 res.send("0");
					 }
			 });
});
//创建列表路由
router.get("/v1/user_list",(req,res)=>{
            pool.query("select * from xz_user",(err,result)=>{
			     if(err) throw err;
				 res.send(result);
			});

});
//创建删除路由
router.delete("/v1/user_delete/:uid",(req,res)=>{
              var $uid=req.params.uid;
			  pool.query("delete * from xz_user where uid=?",[$uid],(err,result)=>{
			      if(err) throw err;
				  if (result.affectedRows>0)
				  {
					  res.send("1");
				  }else{
				      res.send("0");
				  }
			  });
});
//创建修改路由
router.put("/v1/update_user",(req,res)=>{
			pool.query("update xz_user SET uname=?,upwd=?,email=?, user_name=?,phone=?,gender=? where uid=?",[req.body.uname,req.body.upwd,req.body.email,req.body.user_name,req.body.phone,req.body.gender,req.body.uid],(err,result)=>{
			  if(err) throw err;
			  if (result.affectedRows>0)
			  {
				  res.send("1");
			  }else{
			      res.send("0");
			  }
			});
});
//修改前查询
router.get("/v1/select/:uid",(req,res)=>{
        var $uid=req.params.uid;
		pool.query("select * from xz_user where uid=?",[$uid],(err,result)=>{
		          if(err) throw err;
				  res.send(result);
		});
});

//导出连接
module.exports=router;