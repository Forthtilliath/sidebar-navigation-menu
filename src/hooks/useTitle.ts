import { useEffect } from "react";
import { titleStartBy } from "../components/Nav/SidebarData";

export function useTitle(title: string) {
  useEffect(() => {
    document.title = titleStartBy + title;
  }, []);
}
