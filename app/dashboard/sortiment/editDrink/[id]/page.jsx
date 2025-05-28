import EditSortiment from "@/components/editSortiment";

const getDrinkById = async (id) =>{
    try{
        const res = await fetch(`http://localhost:3000/api/drink/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topic");
          }
      
        return res.json();

    }catch(error){
        console.log(error);
    }
}

export default async function EditDrink({ params }) {
    const { id } = params;
    const { drink } = await getDrinkById(id);
    const { category, brand, kind, size, price, alcohol, origin, status } = drink;
  
    return <EditSortiment  id={id} category={category} brand={brand} kind={kind} size={size} price={price} alcohol={alcohol} origin={origin} status={status}/>;
  }