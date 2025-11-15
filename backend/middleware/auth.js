import jwt from 'jsonwebtoken'
import { user } from '../models/userModel.js'

export async function authMidleWare(req, res, next){
    try {
        
        const Token = req?.cookies?.accessToken

        if(!Token){
            return res.status(401)
            .json({
                message: 'Cookies not found',
                error: true,
                success: false
            })
        }
        
        const verifyToken = jwt.verify(Token, process.env.JWT_SECRETS)
        console.log(verifyToken);
        
         if(!verifyToken){
            return res.status(401)
            .json({
                message: 'invalid token',
                error: true,
                success: false
            })
        }

        const User = await user.findById(verifyToken._id)
        req.user = User
        console.log(User);
        
        next()

    } catch (error) {
        console.log(error);
    }
}