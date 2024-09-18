import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import { ApiLogin } from "@/API/ApiLogin";
import { useStore } from "@/store";

const formSchema = z.object({
  email: z.string().includes("@", {
    message: "email must include @.",
  }),
  password: z.string().min(3, {
    message: "Password must contain 3 characters minimum",
  }),
  // remember: z.boolean().default(false).optional(),
});

const Login = () => {
  // const { login, logout } = useContext(AuthContext);
  const {login,logout,isAuthenticated} = useStore()
  const navigate = useNavigate();
  const [togglePswd, setTogglePswd] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "test@gmail.com",
      password: "12345",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    form.clearErrors(); 
    form.clearErrors("root"); 

    const response = await ApiLogin(values, "signin");
    console.log(response);
    
    if (!response?.status) {
      form.setError("root", {
        type: "manual",
        message: "Login failed/Invalid Creds",
      });
      logout()
      navigate("/login");
      
      throw new Error(`HTTP error! Status: ${response?.statusText}`);
    } else {
      localStorage.setItem('userId',response.data.userId)
      login()
      navigate("/posts");
    }
  };
  return (
    <div className="h-full ">
      <Card className=" w-[500px] p-4  flex flex-col items mt-10 bg-[rgb(255,255,255)] shadow-custom-light ">
        <CardHeader>
          <Header  variant="h1" className="text-center">Log in</Header>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start">
                    <FormLabel className="text-md">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start  justify-center relative">
                    <FormLabel className="text-md">Password</FormLabel>
                    <FormControl>
                      {!togglePswd ? (
                        <Input
                          placeholder="*******"
                          type="password"
                          {...field}
                        />
                      ) : (
                        <Input placeholder="" type="text" {...field} />
                      )}
                    </FormControl>
                    <button
                      type="button"
                      className={`${
                        togglePswd
                          ? "absolute right-0 top-11 line-through my-auto transform -translate-y-1/2 bg-transparent border-none cursor-pointer p-1.5"
                          : "absolute right-0 my-auto top-12 transform -translate-y-1/2 bg-transparent border-none cursor-pointer p-1.5"
                      }`}
                      onClick={() => setTogglePswd(!togglePswd)}
                    >
                      👁️
                    </button>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-0 space-y-0 rounded-md ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <div className="flex justify-between items-center w-full">
                      <div className="space-y-1 leading-none ml-1">
                        <FormLabel>Remember me</FormLabel>
                      </div>
                      <div className="flex align-middle">
                        <FormLabel>
                          <Link to={"/login"}>Forgot Password?</Link>
                        </FormLabel>
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              {form.formState.errors.root && (
                <p className="text-red-500  text-sm">
                  {form.formState.errors.root.message}
                </p>
              )}
              <Button className="w-full text-white" type="submit">
                Submit
              </Button>
              <div className="flex flex-col  space-y-0  items-start text-sm">
                <p className="text-gray-700 text-md">Not a member yet?</p>
                <div className="flex space-x-1">
                  <Link
                    to="/register"
                    className="text-blue-500   hover:text-blue-700 font-semibold"
                  >
                    Create account
                  </Link>
                  <span className="text-gray-500">|</span>
                  <Link
                    to="/contact"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Email activation
                  </Link>
                  <span className="text-gray-500">|</span>
                  <Link
                    to="/contact"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
