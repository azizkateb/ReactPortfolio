import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-secondary/10 border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Let's build something <span className="text-primary">extraordinary</span>.
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-md leading-relaxed">
              Open for new opportunities and freelance projects. Whether you have a specific project in mind or just want to explore possibilities, I'm ready to talk.
            </p>
            
            <div className="flex gap-4">
              <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <a href="https://github.com/azizkateb" target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="social-github">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <a href="https://www.linkedin.com/in/elkateb-mohammed-aziz-023006363/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="social-linkedin">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <a href="mailto:azizlove657@gmail.com" target="_blank" rel="noreferrer" aria-label="Email" data-testid="social-email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-2xl shadow-black/20"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="bg-background border-border/50 focus-visible:ring-primary h-12"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive font-light text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          {...field} 
                          className="bg-background border-border/50 focus-visible:ring-primary h-12"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive font-light text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="min-h-[150px] bg-background border-border/50 focus-visible:ring-primary resize-none"
                          {...field} 
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive font-light text-sm" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide text-base group"
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
