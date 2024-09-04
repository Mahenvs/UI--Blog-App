import { toast } from "@/hooks/use-toast"; // Ensure correct import

export const displayToast = (msg: string) => {
  toast({
    description: msg,
    duration: 4000, // Optional: set how long the toast should stay visible
  });
};