import { NextResponse } from "next/server";
import { NextApiRequest } from "next/types/index";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

type Props = {
  params: { category: string };
};

const sleep = async (timer: Number) =>
  new Promise((resolve) => setTimeout(resolve));

export const GET = async (_: NextApiRequest, { params }: Props) => {
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
  await sleep(1000);

  return NextResponse.json(docs);
};
