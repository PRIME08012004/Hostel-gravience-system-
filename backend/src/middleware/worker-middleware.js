const authorizeWorker = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log("here", req.headers,token);
    const decodedToken = jwt.verify(token, process.env.JWTSECRET);
    console.log(decodedToken)
    if (decodedToken.user.type === "worker") {
      return next();
    } else {
     return res.status(403).json({ error: "Unauthorized for worker" });
    }

  } catch (err) {
    console.error("here12",err.message);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
module.exports={
    authorizeWorker
}