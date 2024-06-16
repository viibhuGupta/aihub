import { NextResponse } from "next/server"

const API_URL =  "https://fakestoreapi.com/products?limit=10"

// static routing 
export async function GET() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();
        // console.log(products)
        return NextResponse.json(products);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message : "Somthing went wrong in fetching data",
        });
    }   
}





