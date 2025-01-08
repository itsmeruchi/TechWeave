//when adding product if we dont give name which is required true then our server will run infinitely and it cause a great issue in our big project
module.exports = theFunc =>(req,res,next)=>{

    Promise.resolve(theFunc(req,res,next)).catch(next);
}