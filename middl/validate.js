const yup=require('yup');


async function validateBook(req, res,next) {
    try {
        
        const schema =yup.object().shape({
        title: yup.string().required(),
        price:yup.number().min(0).required(), 
        stock:yup.number().min(0).required(),//.matches(/^[A-Za-z0-9*,-]/
        });
        await schema.validate(req.body);
        next();

    } catch (error) {
        res.send(error)
    }
    

} 
async function validatePassword(req, res,next) {
    try {
        
        const schema =yup.object().shape({
        
        password:yup.number().required(), //.matches(/^[A-Za-z0-9*,-]/
        });
        await schema.validate(req.body);
        next();

    } catch (error) {
        res.send(error)
    }
    
} 
module.exports={validateBook,validatePassword}