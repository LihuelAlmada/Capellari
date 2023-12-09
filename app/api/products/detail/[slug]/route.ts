import { NextResponse } from "next/server";
import { NextApiRequest } from "next/types/index";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

type Props = {
  params: { slug: string };
};

export const GET = async (_: NextApiRequest, { params }: Props) => {
  const { slug } = params;

  const docRef = doc(db, "products", slug);

  const docSnapshot = await getDoc(docRef);

  return NextResponse.json(docSnapshot.data());
}