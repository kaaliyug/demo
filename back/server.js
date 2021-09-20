


require("dotenv").config();
const exp=require("express");
const connectDB=require("./config/db")
const productRoutes=require('./routes/productRoutes');

connectDB();

const pod=exp();

pod.use(exp.json());

pod.use('/api/products',productRoutes);

const PORT=process.env.PORT|| 5000;

pod.listen(PORT,()=>console.log(`server running on port ${PORT}`))