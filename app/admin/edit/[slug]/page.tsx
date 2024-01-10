import EditForm from "@/app/ui/admin/EditForm";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
type Props = {
  params: { slug: string };
};

const EditPage = async ({ params }: Props) => {
  const { slug } = params;

  const docRef = doc(db, "products", slug);
  const docSnapshot = await getDoc(docRef);

  const product = docSnapshot.data();

  return (
    <div className="w-full h-full">
      <EditForm product={product} />
    </div>
  );
};

export default EditPage;
