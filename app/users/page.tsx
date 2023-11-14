import { User, columns } from "./columns"
import { DataTable } from "./data-table"

  
function createNewArray(oldArray: any[]): any[] {

    const newArray = oldArray.map((item) => {
        
        return {
            gender: item.gender,
            name: item.name.first + " " + item.name.last,
            email: item.email
        };
    });

    return newArray;
}
  

async function getData(): Promise<User[]> {
    const response = await fetch("http://randomuser.me/api/?results=50");
    const users = await response.json();
    
    const newArray = createNewArray(users.results);

    return newArray;
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
