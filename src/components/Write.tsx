import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createPost } from "@/API/createPost";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const formSchema = z.object({
  title: z.string().min(4, {
    message: "title is manadatory.",
  }),
  description: z.string().min(4, {
    message: "desc is manadatory.",
  }),
});
const Write = () => {
  const { quill, quillRef } = useQuill();
  

  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const onEditorStateChange = (editorState) => {
    form.setValue("description", editorState);
  };  const editorContent = form.watch("description");


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    form.clearErrors();
    form.clearErrors("root");

    const response = await createPost(values);

    if (!response?.status) {
      form.setError("root", {
        type: "manual",
        message: response?.statusText,
      });
      //   navigate("/login");
      throw new Error(`HTTP error! Status: ${response?.statusText}`);
    } else {
      navigate("/posts");
      // Cookies.set("token", responseData.token);
      //   navigate("/posts");
    }
  };
  const [isBold, setBold] = useState(false);
  const applyStyle = (e) => {
    console.log(isBold);
    console.log(e.target.value);
  };
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Start writing...</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title of the post" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <section className="cursor-pointer"> */}
              {/* <div style={{ width: 500, height: 300 }}> */}
              <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={onEditorStateChange}
      />
              {/* </div> */}
            {/* </section> */}
            {/* <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-40"
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <Button
              type="submit"
              className="bg-blue hover:bg-blue-hover w-full py-3 text-lg text-white"
            >
              Create a post
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Write;
