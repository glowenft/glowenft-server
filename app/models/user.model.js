module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                first_name: { type: String, default: null },
                last_name: { type: String, default: null },
                username: { type: String, default: null, required: true },
                email: { type: String, unique: true, required: true },
                password: { type: String },
                token: { type: String },
            },
            { timestamps: true }
        )
    );

    return User;
};