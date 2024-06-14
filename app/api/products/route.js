import fs from 'fs'
import path from 'path'
export function getProduct() {
    const filePath = path.join(process.cwd() , 'products.json');
    const fileContent = fs.readFileSync(filePath , "utf8");
    const products = JSON.parse(fileContent); 
    return products;
}



