import { useEffect } from "react";
const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Reza Photography`;
  }, [title]);
};
export default useTitle;
