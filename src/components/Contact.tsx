import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import { Mail, Phone, Github, MapPin, Send, FileText, ExternalLink } from 'lucide-react';

const Contact = () => {
  const myEmail = 'patilayush9950@gmail.com';
  const resumePdfPath = '/Ayush_Patil_Resume.pdf'; // Make sure this file is in your /public folder!

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: myEmail,
      href: `mailto:${myEmail}`,
      description: "Best way to reach me"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8208156093",
      href: "tel:+918208156093",
      description: "Available during business hours"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/patilayush9950",
      href: "https://github.com/patilayush9950",
      description: "Check out my projects"
    },
    {
      icon: FileText,
      label: "Naukri Profile",
      value: "View Professional Profile",
      href: "#",
      description: "Complete professional details"
    }
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/patilayush9950", icon: Github },
    { name: "Email", url: `mailto:${myEmail}`, icon: Mail },
    { name: "Phone", url: "tel:+918208156093", icon: Phone }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-left space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith('http') || contact.href.startsWith('mailto') || contact.href.startsWith('tel') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="card-elegant p-6 block group hover:scale-105 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Icon size={24} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{contact.label}</h4>
                            <p className="text-primary font-medium mb-1">{contact.value}</p>
                            <p className="text-sm text-muted-foreground">{contact.description}</p>
                          </div>
                          {contact.href.startsWith('http') && (
                            <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div className="p-6 bg-secondary/50 rounded-xl">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="group"
                        asChild
                      >
                        <a
                          href={link.url}
                          target={link.url.startsWith('http') || link.url.startsWith('mailto') || link.url.startsWith('tel') ? '_blank' : undefined}
                          rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <Icon size={16} className="mr-2 group-hover:animate-bounce" />
                          {link.name}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form - "Send a Message" (Netlify Forms Enabled) */}
            <div className="animate-fade-in-right">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {/* --- IMPORTANT CHANGES START HERE --- */}
                  <form className="space-y-6" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/contact-form-submission">
                    {/* Hidden input for Netlify Forms (required) */}
                    <input type="hidden" name="form-name" value="contact" />
                    {/* Hidden Honeypot field for spam protection (optional but recommended) */}
                    <p className="hidden">
                      <label>
                        Don’t fill this out if you’re human: <input name="bot-field" />
                      </label>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        {/* Add 'name' attribute */}
                        <Input id="firstName" name="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        {/* Add 'name' attribute */}
                        <Input id="lastName" name="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      {/* Add 'name' attribute */}
                      <Input id="email" name="email" type="email" placeholder="john.doe@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      {/* Add 'name' attribute */}
                      <Input id="subject" name="subject" placeholder="Project Collaboration" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      {/* Add 'name' attribute */}
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or how I can help..."
                        rows={6}
                      />
                    </div>

                    {/* Change Button type to "submit" */}
                    <Button type="submit" className="w-full group" size="lg">
                      <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                  {/* --- IMPORTANT CHANGES END HERE --- */}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action - Buttons */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="p-8 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to work on challenging projects and collaborate with
                passionate teams. Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Get In Touch Button - Redirects to Email */}
                <Button size="lg" className="group" asChild>
                  <a href={`mailto:${myEmail}`} target="_self" className="flex items-center">
                    <Mail size={20} className="mr-2 group-hover:animate-bounce" />
                    Get In Touch
                  </a>
                </Button>
                {/* Download Resume Button - Downloads PDF */}
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href={resumePdfPath} download="Ayush_Patil_Resume.pdf" className="flex items-center">
                    <FileText size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;