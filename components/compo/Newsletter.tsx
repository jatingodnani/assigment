import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Mail } from 'lucide-react'

function Newsletter() {
  return (
    <section className="container mx-auto px-4 py-20">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Join BoxCar</h2>
      <p className="text-muted-foreground mb-8">
        Receive pricing updates, shopping tips & more!
      </p>
      <div className="flex relative flex-col sm:flex-row gap-4 max-w-lg mx-auto">
        <Input 
          type="email" 
          placeholder="Your email address"
          className="flex-1 md:w-[50%] w-full rounded-lg p-4 md:p-8"
        />
        <Button className=" right-2 top-[15%] absolute rounded-xl  text-white bg-blue-600 hover:bg-blue-700">
          <Mail className="mr-2 h-4 w-4" /> Sign Up
        </Button>
      </div>
    </div>
  </section>
  )
}

export default Newsletter
