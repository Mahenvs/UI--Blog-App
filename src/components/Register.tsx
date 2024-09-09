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
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import { ApiLogin } from "@/API/ApiLogin";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "username max length should be of 3 character.",
  }),
  fullname: z.string().min(5, {
    message: "full max length should be min of 5 character.",
  }),
  
  email: z.string().includes("@", {
    message: "email must include @.",
  }),
  password: z.string().min(3, {
    message: "Password must contain 3 characters minimum",
  }),
  // remember: z.boolean().default(false).optional(),
});

const Register = () => {
  // const { login, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const [togglePswd, setTogglePswd] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "MHN",
      fullname:"",
      email: "test@gmail.com",
      password: "test@123",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.clearErrors(); // Clear any previous errors
    form.clearErrors("root"); // will clear both errors from test.firstName and test.lastName

    console.log(values);
    const response = await ApiLogin(values, "signup");
    console.log(response.status);
    if (response?.status == 409) {
      form.setError("root", {
        type: "manual",
        message: "User already exists",
      });
      navigate("/register");
    }
    else if (!response?.status) {
      form.setError("root", {
        type: "manual",
        message: "SignUp failed",
      });
      navigate("/register");
    } else {
      navigate("/login");
    }
  }
  return (
    <div className="h-full ">
      <Card className=" w-[500px] px-4  flex flex-col items  bg-[rgb(255,255,255)] shadow-custom-light ">
        <CardHeader>
          <Header className="text-center">Join the Blogger</Header>
          {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start">
                    <FormLabel className="text-md">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start">
                    <FormLabel className="text-md">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="fullname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                          ? "absolute right-0 top-8 line-through my-auto transform -translate-y-1/2 bg-transparent border-none cursor-pointer p-1.5"
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
                    to="/login"
                    className="text-blue-500   hover:text-blue-700 font-semibold"
                  >
                    Existing User
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

export default Register;
