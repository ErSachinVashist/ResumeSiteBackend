let getFeedbacks=require('../methods/feedbacks/getFeedbacks');
let addFeedback=require('../methods/feedbacks/addFeedback');

module.exports=[
    {type:'get',route:'getFeedbacks',method:getFeedbacks},
    {type:'post',route:'addFeedback',method:addFeedback},
];