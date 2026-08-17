import {z} from "zod";

export const signupSchema = z.object({
    name:
    z.string()
    .trim()
    .min(3,"minimum length of name should be 3")
    .max(30,"maximum length of name should be 30"),
    age:
    z.number()
    .min(10,"minimum age should be 10")
    .max(100,"maximum age should be 100"),
    // .optional(),
    email:
    z.preprocess(
        (value)=> typeof value=="string"? value.trim().toLowerCase():"",
        z.email("Email must be valid")
    ),
    password:
    z.string()
    .min(8)
    .max(30)
    .regex(/[A-Z]/,"your password should have one capital letter")
    .regex(/[a-z]/,"your password should have one small letter")
    .regex(/[0-9]/,"your password should have one number")
    .regex(/[!@#$%^&*()_'<>?]/,"your password should have one special character")
});


export const loginSchema = z.object({
    email:
    z.preprocess(
        (value)=> typeof value=="string"? value.trim().toLowerCase():"",
        z.email("Email must be valid")
    ),
    password:
    z.string()
    .min(8)
    .max(30)
    .regex(/[A-Z]/,"your password should have one capital letter")
    .regex(/[a-z]/,"your password should have one small letter")
    .regex(/[0-9]/,"your password should have one number")
    .regex(/[!@#$%^&*()_'<>?]/,"your password should have one special character")
})