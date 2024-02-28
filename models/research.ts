import { Schema, type InferSchemaType, model } from "mongoose"

const researchSchema = new Schema(
    {
        lapinsus: {
            description: { type: String },
        },
        advice: { type: String },
        follow_up: { type: String },
        threats: { type: String },
        interference: { type: String },
        barrier: { type: String },
        challenges: { type: String },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export type Research = InferSchemaType<typeof researchSchema>
export const Research = model("Research", researchSchema)