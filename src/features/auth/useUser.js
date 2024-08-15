import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../utils/api";

export function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  return { user, isPending, isAuth: user?.role === "authenticated" };
}
