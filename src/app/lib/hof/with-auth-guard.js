import { useAppStore } from "@/app/model";
import { useRouter } from "next/router";
import { PacmanLoader } from "react-spinners";
import useSWR from "swr";

export const withAuthGuard = (page) => {
  const Render = () => {
    const tokens = useAppStore((state) => state.tokens);
    const router = useRouter();

    const { data, isLoading } = useSWR(
      "http://localhost:3000/api/healthcheck",
      (url) => {
        return fetch(url, {
          headers: {
            Authorization: `Bearer ${tokens.payload?.accessToken}`,
          },
        }).then((res) => res.json());
      }
    );

    if (isLoading) {
      return <PacmanLoader loading />;
    }

    if (data.success) {
      return page();
    }

    if (!tokens.payload?.refreshToken) {
      router.push("/signin");
      return;
    }



    router.push("/signin");
    return;
  };

  return Render;
};
