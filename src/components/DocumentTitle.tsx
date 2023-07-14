import { useEffect } from "react";

const DocumentTitle = ({ title }: any) => {
  useEffect(() => {
    document.title = title;
  });

  return null;
};

export default DocumentTitle;
