export default async function getCategory() {
    const responce = await fetch("https://api.escuelajs.co/api/v1/categories");

    const categories = responce.json();

    return categories;
}