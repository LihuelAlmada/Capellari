import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

type Props = {
  params: { slug: string };
};

export const GET = async (_: any, { params }: Props) => {
  const { slug } = params;

  const docRef = doc(db, "products", slug);

  const docSnapshot = await getDoc(docRef);

  return NextResponse.json(docSnapshot.data());
}