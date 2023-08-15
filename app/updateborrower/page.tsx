import Updateborrower from "@/components/Updateborrower";
import { getBorrowers } from "@/modules/getBorrowers";

export default async () =>{
    const borrowers = await getBorrowers();
    return(
        <main>
            <Updateborrower borrowers = {borrowers} />
        </main>
    );
}