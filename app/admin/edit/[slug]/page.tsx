import EditForm from "@/app/ui/admin/EditForm";

type Props = {
  params: { slug: string };
};

const EditPage = async ({ params }: Props) => {
  const { slug } = params;
  const product = await fetch(`http://${process.env.VERCERL_URL}/api/products/detail/${slug}`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  }).then((r) => r.json());

  return (
    <div className="w-full h-full">
      <EditForm product={product} />
    </div>
  );
};

export default EditPage;
