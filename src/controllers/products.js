export const create = async (req,res)=>{
    try {
        req.body.slug = slugify(req.body.name)
    } catch (error) {
        
    }
}