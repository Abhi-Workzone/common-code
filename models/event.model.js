const mongoose = require("mongoose");
const constant = require("../utils/constant");  

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    type: {
        type: String,
        enum: ["treasure-hunt", "challenge", "quiz", "custom"],
        default: "treasure-hunt"
    },
    mode: {
        type: String,
        enum: ["individual", "team"],
        default: "individual"
    },
    access: {
        type: String,
        enum: ["public", "corporate"],
        default: "public"
    },
    organization: {
        orgId: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
        name: String,
        assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    },
    allowedEmails: [String],
    locationScope: {
        type: {
            type: String,
            enum: ["geo", "anywhere"],
            required: true
        },
        area: {
            type: {
                type: String,
                enum: ["Polygon"],
                default: "Polygon"
            },
            coordinates: {
                type: [[[Number]]], // GeoJSON Polygon
                default: undefined
            }
        }
    },
    media: {
        banner: [String],
        images: [String],
        video: [String]
    },
    reviewRequired: {type: Boolean, default: false},
    testMode: {type: Boolean, default: false},
    rules: {type: [String]},
    facilities: {type: [String]},
    isActive: {type: Boolean, default: true},
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
    durationPerClue: Number,
    totalDuration: Number,
    tags: {type: [String]},
    entry: {
        type: {
            type: String,
            enum: ["free", "paid"],
            default: "free"
        },
        feeAmount: {
            type: Number,
            default: 0
        }
    },
    rewards: {
        coins: Number,
        coupons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Coupon" }],
        realPrize: String
    },
    completionCriteria: {type: String},
    status: {
        type: String,
        enum: ["draft", "pending", "published", "live", "completed", "archived"],
        default: "draft"
    },
    priorityOrder: {type: Number, default: 0},
    reviewerId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    organizerId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {
    timestamps: true
});

module.exports = (connection) => {
    return connection.models.Event || connection.model(constant.collectionName.EVENT, eventSchema);
};
