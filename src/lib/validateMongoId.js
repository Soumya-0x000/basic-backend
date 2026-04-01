export const validateObjectId = (req, res, next) => {
    const { id } = req.params;
    // Check if id is a 24-character hex string
    if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid note ID format",
        });
    }
    next();
};
