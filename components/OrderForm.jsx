"use client"
import { useState } from "react";
import {useForm} from "react-hook-form"

const OrderForm = ({title,image,dec,price}) => {

  const { handleSubmit  , register ,formState: { errors } , reset} = useForm();

  const [addProductDetails , setAddProductDetails] = useState({
    productTitle : title,
    productDec : dec,
    productPrice : price,
    productImage : image
  })

  function handleDataSubmit(data) {
    // console.log("Data is Here",data)
    const totalPrice = price * Number(data.Quantaty);

    setAddProductDetails((prevData) => ({...prevData , ...data , totalPrice : totalPrice}))
    reset();
  }
  console.log(addProductDetails)

  return (
    
    <section className="  flex flex-col justify-center items-center gap-4 ">
      <h1 className=" flex justify-center p-5 mb-3 text-3xl font-bold text-gray-600 border-b-2  ">Order Form</h1>
      <form
      onSubmit={handleSubmit(handleDataSubmit)} 
      className=" p-[1rem] lg:flex lg:flex-col  w-full h-[100rem]   lg:w-[50rem] lg:h-auto  ">

        <div className=" input-tag-container   lg:h-[10rem] flex justify-center  "> 
        {errors.FullName &&  <span className="text-rose-400 font-semibold duration-300">Full Name is Required </span>}
          <input
            className="input-tag "
            type="text"
            placeholder="eg : abcd kumar"
            {...register("FullName" , {required:true})}
          />
          
          <label htmlFor="FullName">Full Name</label>
       
        </div>

        <div className=" flex lg:flex-row  flex-col    lg:h-[10rem] gap-4   ">
          
          <div className=" input-tag-container flex justify-center ">
          {errors.PhoneNumber &&  <span className="text-rose-400 font-semibold duration-300">Phone Number is Required </span>}

            <input
              className="input-tag "
              type="tel"
              placeholder="eg : + 9189724878"
              {...register("PhoneNumber" , {required:true})}
            />
            <label htmlFor="PhoneNumber">Phone Number</label>
          </div>

          <div className=" input-tag-container w-full  flex justify-center ">
          {errors.Email &&  <span className="text-rose-400 font-semibold duration-300">Email Address is Required </span>}
            <input
              className="input-tag  "
              type="email"
              placeholder="eg : abcd@gmail.com"
              {...register("Email" , {required:true})}
            />
            <label htmlFor="Email">Email Address</label>
          </div>

        </div>

        <div className=" flex  lg:flex-row  flex-col  gap-4  lg:h-[10rem]">

          <div className=" input-tag-container flex justify-center lg:md:w-[70rem] w-full ">
          {errors.BillingAddress &&  <span className="text-rose-400 font-semibold duration-300">Billing Address is Required </span>}
            <input
              className="input-tag "
              type="text"
              placeholder="eg : Local Address"
              {...register("BillingAddress" , {required:true})}
            />
            <label htmlFor="BillingAddress">Billing Address</label>
          </div>

          <div className=" input-tag-container flex justify-center  w-full  ">
          {errors.Country &&  <span className="text-rose-400 font-semibold duration-300">Country is Required </span>}
            <select 
            className="input-tag  "
            name="country " 
            id="country"
            {...register("Country" , {required:true})}
            >
              
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="vietnam">Vietnam</option>
                <option value="colmbiia">Colombia</option>
                <option value="philiphines">Philiphines</option>
                <option value="pakistan">Pakistan</option>
                
            </select>
            <label htmlFor="Country">Country</label>
          </div>
          
        </div>

        <div className=" flex  lg:flex-row  flex-col   lg:h-[10rem] gap-4">

          <div className=" input-tag-container flex justify-center lg:md:w-[20rem] w-full ">
          {errors.City &&  <span className="text-rose-400 font-semibold duration-300">City is Required </span>}
            <input
              className="input-tag "
              type="text"
              placeholder="eg : delhi"
              {...register("City"  , {required:true})}
            />
            <label htmlFor="City">City</label>
          </div>

          <div className=" input-tag-container  flex justify-center lg:w-[9rem] w-full ">
          {errors.State &&  <span className="text-rose-400 font-semibold duration-300">State is Required </span>}
            <input
              className="input-tag "
              type="text"
              placeholder="eg : abcd kumar"
              {...register("State"  , {required:true})}
            />
            <label htmlFor="State">State</label>
          </div>

          <div className=" input-tag-container w-full flex justify-center  lg:w-[20rem]">
          {errors.ZipCode &&  <span className="text-rose-400 font-semibold duration-300">Zip Code is Required </span>}
            <input
              className="input-tag"
              type="tel"
              placeholder="Zip Code"
              maxLength="5"
              {...register("ZipCode"  , {required:true})}
              
            />

            <label htmlFor="ZipCode">Zip code</label>
          </div>

        </div>

        <div className=" input-tag-container  w-[7rem]  lg:h-[10rem] flex justify-center  "> 
        {errors.Quantaty &&  <span className="text-rose-400 font-semibold duration-300">Quantaty is Required </span>}
          <input
            className="input-tag "
            type="number"
            placeholder="eg : abcd kumar"
            {...register("Quantaty" , {required:true})}
          />
          
          <label htmlFor="Quantaty">Quantaty</label>
       
        </div>


        <button className="bg-rose-300 p-4 w-[10rem] focus:bg-rose-500 focus:text-black focus:font-bold  hover:bg-rose-400 duration-300 rounded-full text-md  ">Make Payment</button>
      </form>

     
    </section>
  );
};

export default OrderForm;
