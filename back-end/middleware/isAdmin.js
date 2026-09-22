import User from "../models/userModels.js";

const isAdmin = async (req, res, next) => {
  const userId = req.headers.userid;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }

  next();
};

export default isAdmin;
