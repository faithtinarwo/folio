import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with an email service or backend here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "faith.tinarwo@example.com",
      link: "mailto:faith.tinarwo@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "@faithtinarwo",
      link: "https://linkedin.com/in/faithtinarwo",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@faithtinarwo",
      link: "https://github.com/faithtinarwo",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      link: null,
    },
    {
      icon: Clock,
      title: "Timezone",
      value: "PST (UTC-8)",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <Navbar />

      {/* Contact Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-olive-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your
            project and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="glass-effect">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-olive-800 mb-6">
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-olive-700 mb-2"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-olive-300 focus:border-olive-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-olive-700 mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-olive-300 focus:border-olive-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-olive-700 mb-2"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-olive-300 focus:border-olive-500"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-olive-700 mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-olive-300 focus:border-olive-500 min-h-32"
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="olive-gradient text-white w-full"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-olive-800 mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={info.title} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-olive-100 flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-olive-600" />
                      </div>
                      <div>
                        <p className="font-medium text-olive-800">
                          {info.title}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-olive-600 hover:text-olive-700 transition-colors"
                            target={
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-olive-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-olive-800 mb-4">
                  Response Time
                </h3>
                <p className="text-olive-600 mb-4">
                  I typically respond to messages within 24 hours during
                  business days. For urgent inquiries, feel free to reach out
                  via phone or LinkedIn.
                </p>

                <h3 className="text-xl font-bold text-olive-800 mb-4">
                  Project Availability
                </h3>
                <p className="text-olive-600">
                  Currently accepting new projects starting in Q2 2024. Book a
                  consultation to discuss your timeline and requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold gradient-text text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="font-semibold text-olive-800 mb-3">
                  What's your typical project timeline?
                </h3>
                <p className="text-olive-600">
                  Project timelines vary based on scope, but most web projects
                  take 4-8 weeks, while design systems or complex applications
                  may take 8-16 weeks.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="font-semibold text-olive-800 mb-3">
                  Do you work with startups?
                </h3>
                <p className="text-olive-600">
                  Absolutely! I love working with startups and understand the
                  unique challenges of early-stage companies. I offer flexible
                  pricing and can work within startup budgets.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="font-semibold text-olive-800 mb-3">
                  What's included in your design process?
                </h3>
                <p className="text-olive-600">
                  My process includes user research, wireframing, visual design,
                  prototyping, and usability testing. I also provide design
                  systems and developer handoff documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="font-semibold text-olive-800 mb-3">
                  Do you offer ongoing support?
                </h3>
                <p className="text-olive-600">
                  Yes! I provide ongoing support and maintenance for all my
                  projects. This includes bug fixes, minor updates, and
                  consultation on new features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-olive-600 mb-8 max-w-2xl mx-auto">
            Whether you need a complete design overhaul or a custom web
            application, I'm here to help bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="olive-gradient text-white">
              Schedule a Call
            </Button>
            <Link to="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-olive-600 text-olive-600"
              >
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Chatbot />
    </div>
  );
};

export default Contact;
