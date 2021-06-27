import { useEffect } from "react";

interface IUseTableListPage {
  count?: number;
  refetch: () => void;
  updateCount: (newCount: number) => void;
  state: any;
}

const useTableListPage = (params: IUseTableListPage) => {
  const { count, refetch, state, updateCount } = params;

  useEffect(() => {
    const newCount = count || -1;
    if (newCount !== -1) {
      updateCount(newCount);
    }
  }, [updateCount, count]);

  useEffect(() => {
    refetch();
  }, [state, refetch]);
};

export default useTableListPage;