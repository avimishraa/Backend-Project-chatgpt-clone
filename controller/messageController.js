import Chat from "../model/chatSchema.js"
import Message from "../model/messegeSchema.js";

export const getMessage = async(req,res)=>{
    try {

        const {chatId}=req.params;

        const chat = await Chat.findOne({
            _id:chatId,
            userId:req.user._id
        })

        if(!chat){
            return res.status(404).json({
                message:"Chat not found"
            })
        }

        const message = await Message.find({
            chatId:chatId
        }).sort({createat:1});
        
    } catch (err) {
        console.log(err);
         res.status(500).json({
            message:"internal server error"
        })
        
    }
}

export const sendMessage = async(req,res)=>{
    try {

        const {chatId}=req.params;
        const {content}=req.body;

        if(!content || content.trim()===""){
            return res.status(400).json({
                message:"you didn't send any message"
            })
        }

        const chat = await Chat.findOne({
            _id:chatId,
            userId:req.user_id
        })

        const Usermessage = await Message.create({
            userId:req.user._id,
            chatId:chatId,
            role:"user",
            content:content,
        })

        const dummyReply = "Mein changa si"

        const assMessage = await Message.create({
            userId: req.user._id,
                chatId: chatId,
                role: "assistant",
                content: dummyReply,
            });

            res.status(201).json({
                messages: dummyReply
        })
        
    } catch (err) {
        console.log(err);
         res.status(500).json({
            message:"internal server error"
        })
        
    }
}