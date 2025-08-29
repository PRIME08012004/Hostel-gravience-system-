
const authorizeComplaintRoute = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log("here", req.headers, token);
    const decodedToken = jwt.verify(token, process.env.JWTSECRET);
    console.log(decodedToken);

    return next();
  } catch (err) {
    console.error("here11", err.message);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
 module.exports={
    authorizeComplaintRoute
 }