const page = ({ params }: { params: { super_id: string } }) => {
  return <div>{params.super_id}</div>;
};

export default page;
