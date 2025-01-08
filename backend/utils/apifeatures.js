class ApiFeatures{
    constructor(query,queryStr){
        this.query = query; //this is the property of ApiFeatures, ab yeh ise class ki value hai
        this.queryStr = queryStr;//when we find samosa than this keyword is queryStr---- by going on parama and then key as keyword and value as samosa
    }
    //now we will make search feature of api
    search(){
        const keyword = this.queryStr.keyword
        ? {
            name:{ //agar hum contoller ke find mai samosa add krte to mosa agar aage hoga to hum vo find nhi kr paayenge and yha is concept se krenge to saare words ki list aa jaayege
                $regex:this.queryStr.keyword,        //operator of mongodb i.e regular expression
                $options : "i", //small i means case insensitive
            },

        }
        :{};
        
        //console.log(keyword);

      this.query = this.query.find({...keyword});  // this become method product.find bs yha humne regex ka use kiya hai and keyword bheja hai
      return this;
    }
    filter() {
        const queryCopy = {...this.queryStr};// by spread operator now it is the actual copy not through reference  //queryste is an object and js mai yeh through refernce pass hote hai to yeh yha refernce hai
            //console.log(queryCopy)
        //Removing some fields for category
        const removeFields = ["keyword","page","limit"];

        removeFields.forEach((key)=>delete queryCopy[key]);
        console.log(queryCopy);
        //we cant use the above filter as we dont know the exact price of product , price will be in the range
        
        
        //Filter for Price and Rating
        //console.log(queryCopy);

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key)=>`$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));  //case sensitive

        //console.log(queryStr);

        return this;
    }
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1; //we need str string in Number 
        // if we are having 50 products then 10 product on 1 page so when we are on page 2 we are skipping first 10 products so for that we are writing logic
        const skip = resultPerPage * (currentPage-1)
        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }
};

module.exports = ApiFeatures;