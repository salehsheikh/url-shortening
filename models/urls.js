import mongoose from "mongoose";
const UrlSchema=new mongoose.Schema(
    {
        urlId:{type: 'string', required: true},
        originalUrl:{type: 'string', required: true},
        shortUrl:{type: 'string', unique: true},
        accessCount: {type: 'Number', default: 0},
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("Url",UrlSchema);