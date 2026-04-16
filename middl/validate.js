const yup=require('yup');


//dima thabet fel les parentheses 

async function validateVehicule(req, res,next) {
    try {
        
        const schema =yup.object().shape({
        Year: yup.number().min(2000).required(),
        PricePerDay:yup.number().positive().required()
        });
        await schema.validate(req.body);
        next();

    } catch (error) {
        res.send(error)
    }
    

} 


module.exports={validateVehicule}