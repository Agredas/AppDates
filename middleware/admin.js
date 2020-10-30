
const adminReq = (req,res,next)=>{
  if(req.client.rol!='admin'){
    return res.status(403).send({
      message: "You don't have administrator permissions."
    })
  }
  next();
}

module.exports = adminReq;