

const authorizeStudent = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log("here", req.headers,token);
    const decodedToken = jwt.verify(token, process.env.JWTSECRET);
    console.log(decodedToken)
    if (decodedToken.user.type === "student") {
      return next();
    } else {
     return res.status(403).json({ error: "Unauthorized for Student" });
    }

  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports={
    authorizeStudent
}