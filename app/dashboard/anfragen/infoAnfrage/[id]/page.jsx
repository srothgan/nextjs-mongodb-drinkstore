import ContactInfo from "@/components/contactInfo";

const getContactbyId = async (id) =>{
    try{
        const res = await fetch(`http://localhost:3000/api/contact/${id}`, {
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

export default async function InfoContact({ params }) {
    const { id } = params;
    const { contact } = await getContactbyId(id);
    const { name, email, reference, message, createdAt } = contact;
  
    return <ContactInfo id={id} name={name} email={email} reference={reference} message={message} createdAt={createdAt} />;
  }