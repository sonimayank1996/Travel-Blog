exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user.role.includes(roles)) {
      res.json({
        status: "you cannot access this",
      });
    }
    next();
  };
};
