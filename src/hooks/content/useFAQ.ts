import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const fetchFAQ = async (): Promise<FAQ[]> => {
  const res = await fetch("/data/faqs.json");
  const json = await res.json();
  const faqs = json.data;

  return faqs;
};

export function useFAQs() {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: fetchFAQ,
  });
}
