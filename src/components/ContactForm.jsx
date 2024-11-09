"use client";
import React, { useState } from "react";
import { Label } from "./ui/label-ace";
import { Input } from "./ui/input-ace";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea-ace";
import { z } from "zod";
import toast from "react-hot-toast";

export default function ContactForm() {
    const FormmData = z.object({
        fname: z.string({
            required_error: "First Name is required",
            invalid_type_error: "First Name must be valid",
        }).min(3, { message: "First name must be 3 or more characters long" }).max(25, { message: "First name must be 25 or fewer characters long" }),
        lname: z.string({
            required_error: "Last Name is required",
            invalid_type_error: "Last Name must be valid",
        }).min(3, { message: "Last name must be 3 or more characters long" }).max(25, { message: "Last name must be 25 or fewer characters long" }),
        email: z.string({
            required_error: "Email is required",
            invalid_type_error: "Email must be valid",
        }).min(5, { message: "Email must be 5 or more characters long" }).max(50, { message: "Email must be 50 or fewer characters long" }).email({ message: "Please enter a valid email address" }).toLowerCase(),
        message: z.string({
            required_error: "Message is required",
            invalid_type_error: "Message must be valid",
        }).min(20, { message: "Message must be 20 or more characters long" }).max(400, { message: "Message must be 400 or fewer characters long" }),
    });
      
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const result = FormmData.safeParse({ fname, lname, email, message });
        if (!result.success) {
            const formatted = result.error.format();
          
            if (formatted.fname?._errors[0]) {
                console.log(formatted)
                toast.error(formatted.fname?._errors[0]);
                return
            } else if (formatted.lname?._errors[0]) {
                console.log(formatted)
                toast.error(formatted.lname?._errors[0]);
                return
            } else if (formatted.email?._errors[0]) {
                console.log(formatted)
                toast.error(formatted.email?._errors[0]);
                return
            } else if (formatted.message?._errors[0]) {
                console.log(formatted)
                toast.error(formatted.message?._errors[0]);
                return
            } else {
                console.log({formatted})
            }
        } else {
            console.log({
                fname, lname, email, message
            })
            toast.success("Message sent successfully.")
        }       
    } catch (err)  {
        console.error(err)
    } finally {
        setLoading(false);
        return
        setFname("");
        setLname("");
        setEmail("");
        setMessage("");
        console.log("Form submitted");
    }
  };

  return (
    (<div
      className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-background">
      <h2 className="font-bold text-xl text-primary">
        Contact Us
      </h2>
      <p className="text-sm max-w-sm mt-2 text-primary">
        Empower your vision with us today
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Saif" type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Ali" type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="saifali9196@gmail.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Your question..." rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br border-x relative group/btn block dark:bg-zinc-800 w-full text-primary rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        //   onClick={(e)=>handleSubmit(e)}
          type="submit">
          Send Message &rarr;
          <BottomGradient />
        </button>

        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>)
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};