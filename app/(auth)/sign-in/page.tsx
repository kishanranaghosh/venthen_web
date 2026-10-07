"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <Card className="w-full rounded-[22px] border-[#dce9e2] bg-white shadow-[0_12px_40px_-16px_rgba(26,43,43,0.18)]">
      <CardHeader>
        <CardTitle className="text-[#1a2b2b] text-xl">Welcome back</CardTitle>
        <CardDescription className="text-[#6b7f7e]">
          Enter your email below to login to your account
        </CardDescription>
        <CardAction
          onClick={() => {
            router.replace("/sign-up");
          }}
        >
          <Button variant="link" className="text-[#0c7c7c]">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-[#1a2b2b]">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="h-11 rounded-xl bg-[#f7faf7] border-[#dce9e2] focus-visible:border-[#0fa3a3] focus-visible:ring-[#0fa3a3]/20"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-[#1a2b2b]">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm text-[#0c7c7c] underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required placeholder="Enter your password" className="h-11 rounded-xl bg-[#f7faf7] border-[#dce9e2] focus-visible:border-[#0fa3a3] focus-visible:ring-[#0fa3a3]/20" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 bg-transparent border-t border-[#dce9e2]">
        <Button type="submit" className="w-full h-11 rounded-full bg-[#0fa3a3] hover:bg-[#0c8a8a] text-white font-semibold">
          Login
        </Button>
        <Button variant="outline" className="w-full h-11 rounded-full border-[#dce9e2] bg-white hover:bg-[#f0f7f0] text-[#1a2b2b]">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
