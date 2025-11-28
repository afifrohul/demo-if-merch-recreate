import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

type Category = {
  id: number;
  name: string;
  slug: string;
};

const fetchCategory = async (): Promise<Category[]> => {
  const res = await fetch("/data/categories.json");
  const json = await res.json();
  const categories = json.data;

  return categories;
};

export function useCategories() {
  return useQuery({
    queryKey: ["product-categories"],
    queryFn: fetchCategory,
  });
}
