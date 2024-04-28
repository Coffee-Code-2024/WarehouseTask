'use strict'

import { Schema, model } from mongoose

const taskSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    description:{
        type: String
    },
    startDate:{
        type: Date,
        required: [true, 'Start date is required.']
    },
    endDate:{
        type: Date
    },
    status:{
        type: String,
        uppercase: true,
        enum: ['DOING', 'DONE', 'TO-DO']
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    }
})

export default model('Task', taskSchema);