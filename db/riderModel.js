import mongoose from "mongoose";
// Schema

const riderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fromLocation: {
        type: String,
        required: true,
    },
    toLocation: {
        type: String,
        required: true,
    },
    restaurantName: {
        type: String,
        required: true,
    },
    deliveryStatus: {
        type: Boolean,
        required: true,
    }
});

const RiderModel = mongoose.model("rider", riderSchema);
export default RiderModel;
