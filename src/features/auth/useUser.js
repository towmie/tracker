import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../utils/api";

export function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isPending, isAuth: user?.role === "authenticated" };
}
