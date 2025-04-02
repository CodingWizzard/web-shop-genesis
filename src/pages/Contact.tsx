
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be where form handling logic would go
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Have a question about our products or services? We'd love to hear from you.
            Fill out the form and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full p-2">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Our Location</h3>
                <address className="text-muted-foreground not-italic">
                  123 Design Street<br />
                  San Francisco, CA 94103<br />
                  United States
                </address>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full p-2">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+14155551234">(415) 555-1234</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full p-2">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:hello@modernshop.com">hello@modernshop.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-muted p-6 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help?" required />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea 
                id="message" 
                placeholder="Tell us more about your inquiry..." 
                rows={5} 
                required 
              />
            </div>
            
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
      
      <div className="rounded-lg overflow-hidden h-96 bg-muted">
        {/* This would be a Google Maps embed in a real implementation */}
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          Map would be displayed here
        </div>
      </div>
    </div>
  );
};

export default Contact;
