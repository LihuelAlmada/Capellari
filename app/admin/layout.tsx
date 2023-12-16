"use client";
import { useAuthContext } from "@/app/context/AuthContext";

const AdminLayout = ({
  children,
  login,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
}) => {
  const { user }: any = useAuthContext();

  return <>{user.logged ? children : login}</>;
};

export default AdminLayout;
