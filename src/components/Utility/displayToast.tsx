import { toast } from "@/hooks/use-toast"; 

export const displayToast = (msg: string) => {
  toast({
    description: msg,
    duration: 3000, 
  });
};