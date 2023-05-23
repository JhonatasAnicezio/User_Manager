import { APP_ROUTES } from "@/utils/app-routes";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { ReactNode, useEffect } from "react"

type PrivateRouteProps = {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();

  const {'nextAuth.token': token} = parseCookies();

  useEffect(() => {
    if(!token) {
      push(APP_ROUTES.public.home);
    }
  }, [token, push]);

  return (
    <>
      {!token && null}
      {token && children}
    </>
  )
}