import { useEffect } from "react";

export const useDocumentTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `Topic: ${title}` : "GitHub Topic App";
  }, [title]);
};
