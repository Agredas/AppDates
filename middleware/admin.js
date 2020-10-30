const adminReq = (req,res,next)=>{
  if(client.rol!='admin'){
    return res.status(403).send({
      message: "You don't have administrator permissions."
    })
  }
  next();
}

module.exports = adminReq;