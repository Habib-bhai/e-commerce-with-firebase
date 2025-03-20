"use client"

import { type FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Loader2, ShoppingBag } from "lucide-react"
import signIn from "@/app/firebase/auth/signin"
import {  getAuth, setPersistence, browserSessionPersistence } from "firebase/auth"
import firebase_app from "@/app/firebase/config"

export default function SigninPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const auth = getAuth(firebase_app)

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
        // eslint-disable-next-line
       await signIn(email, password)
      router.push("/shop")
    } catch (err) {
      setError("An unexpected error occurred")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Welcome back</CardTitle>
              <CardDescription>Sign in to your StyleShop account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleForm} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                  <div className="text-right">
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </div>

                {error && (
                  <motion.div
                    className="p-3 bg-destructive/10 text-destructive rounded-md text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {error}
                  </motion.div>
                )}

                <Button type="submit" className="w-full group" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <>
                      Sign in
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-sm text-center">
                Don&apos;t have an account?{" "}
                <a href="/sign-up" className="text-primary font-medium hover:underline">
                  Create account
                </a>
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Right side - Branding/Image */}
        <motion.div
          className="hidden md:flex flex-col items-center justify-center p-8 text-center order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-6 p-4 bg-primary/10 rounded-full">
            <ShoppingBag className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-4">StyleShop</h1>
          <p className="text-muted-foreground mb-6">
            Welcome back! Sign in to access your account and continue shopping.
          </p>
          
        </motion.div>
      </div>
    </div>
  )
}

