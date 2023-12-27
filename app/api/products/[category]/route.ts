import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

type Props = {
  params: { category: string };
};

export const GET = async (_: any, { params }: Props) => {
  try {
    const { category } = params;

    const productRef = collection(db, "products");
  
    const q =
      category === "all"
        ? productRef
        : query(productRef, where("type", "==", category));
  
    const querySnapshot = await getDocs(q);
  
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  
    return NextResponse.json(docs);
  } catch (error) {
    console.log(error);
    
  }
};
