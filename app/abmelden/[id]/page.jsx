import Unsubscribe from '@/components/unsubscribe';

const getNewsEmailById = async (id) =>{
    try{
        const res = await fetch(`http://localhost:3000/api/newsletter/${id}`, {
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

export default async  function Abmelden({ params }) {
    const { id } = params;
    const { contact } = await getNewsEmailById(id);
    const { email, createdAt } = contact;
    return (
        
        <Unsubscribe id={id}  email={email}/>
    )
  }