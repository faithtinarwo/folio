import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import Chatbot from "@/components/Chatbot";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Palette,
  Code,
  Users,
  Lightbulb,
  Award,
  BookOpen,
  Heart,
  Star,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ["UX Designer", "Software Developer"];

  const skills = [
    { name: "UX/UI Design", level: 95, icon: Palette },
    { name: "React & TypeScript", level: 90, icon: Code },
    { name: "User Research", level: 88, icon: Users },
    { name: "Design Systems", level: 92, icon: Lightbulb },
    { name: "Figma & Adobe Suite", level: 95, icon: Award },
    { name: "Frontend Development", level: 87, icon: Code },
  ];

  const projects = [
    {
      title: "SaaS Dashboard Redesign",
      description:
        "Complete UX/UI redesign for a B2B analytics platform, improving user satisfaction by 60% and reducing onboarding time by 45%.",
      image: "/api/placeholder/400/300",
      tags: ["UX Design", "UI Design", "Figma", "User Research", "Prototyping"],
      link: "#",
      github: "#",
      type: "design",
    },
    {
      title: "E-commerce React App",
      description:
        "Full-stack e-commerce platform built with React, TypeScript, and Node.js, featuring real-time inventory and payment processing.",
      image: "/api/placeholder/400/300",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
      link: "#",
      github: "#",
      type: "development",
    },
    {
      title: "Mobile App Design System",
      description:
        "Comprehensive design system and component library for a fintech mobile app, ensuring consistency across 20+ screens.",
      image: "/api/placeholder/400/300",
      tags: ["Design System", "Figma", "Component Library", "Mobile Design"],
      link: "#",
      github: "#",
      type: "design",
    },
    {
      title: "Real-time Chat Platform",
      description:
        "WebSocket-based chat application with React frontend and Express backend, supporting 1000+ concurrent users.",
      image: "/api/placeholder/400/300",
      tags: ["React", "WebSocket", "Express.js", "Redis", "Socket.io"],
      link: "#",
      github: "#",
      type: "development",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Faith's ability to bridge design and development is exceptional. She delivered a product that exceeded all our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      content:
        "Working with Faith was a game-changer. Her UX insights and technical skills helped us build something truly innovative.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director at CreativeAgency",
      content:
        "Faith brings a unique perspective that combines beautiful design with practical implementation. Absolutely brilliant!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: "Home", id: "hero", path: "/" },
    { name: "About", id: "about", path: "/about" },
    { name: "Skills", id: "skills", path: "/skills" },
    { name: "Projects", id: "projects", path: "/projects" },
    { name: "Testimonials", id: "testimonials", path: null },
    { name: "Contact", id: "contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass-effect transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold gradient-text">Faith Tinarwo</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) =>
                item.path ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-olive-600",
                      activeSection === item.id
                        ? "text-olive-600"
                        : "text-olive-800",
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-olive-600",
                      activeSection === item.id
                        ? "text-olive-600"
                        : "text-olive-800",
                    )}
                  >
                    {item.name}
                  </button>
                ),
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-olive-800"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) =>
                item.path ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block w-full text-left px-3 py-2 text-sm font-medium transition-colors hover:bg-olive-100 rounded-md",
                      activeSection === item.id
                        ? "text-olive-600 bg-olive-50"
                        : "text-olive-800",
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "block w-full text-left px-3 py-2 text-sm font-medium transition-colors hover:bg-olive-100 rounded-md",
                      activeSection === item.id
                        ? "text-olive-600 bg-olive-50"
                        : "text-olive-800",
                    )}
                  >
                    {item.name}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-olive-800">Hi, I'm</span>
                <br />
                <span className="gradient-text">Faith Tinarwo</span>
              </h1>
              <p className="text-xl md:text-2xl text-olive-700 font-medium">
                <span className="inline-block transition-all duration-500 ease-in-out">
                  {roles[currentRole]}
                </span>
              </p>
              <p className="text-lg text-olive-600 max-w-lg leading-relaxed">
                I craft beautiful, user-centered digital experiences that bridge
                the gap between design and development. Let's build something
                amazing together.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button
                  size="lg"
                  className="olive-gradient text-white hover:opacity-90 transition-opacity"
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-olive-600 text-olive-600 hover:bg-olive-50"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-olive-600 hover:text-olive-700 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-olive-600 hover:text-olive-700 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-olive-600 hover:text-olive-700 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
                alt="Professional workspace with hands coding on laptop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-900/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="glass-effect rounded-lg p-3">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <Code className="h-5 w-5" />
                    <span className="font-semibold">Design × Development</span>
                    <Palette className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-olive-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <p className="text-xl text-olive-600 max-w-3xl mx-auto">
              Passionate about creating digital experiences that make a
              difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
            <div className="space-y-6 lg:pr-8">
              <p className="text-lg text-olive-700 leading-relaxed">
                I'm a multidisciplinary designer and developer with over 5 years
                of experience creating digital products that users love. My
                unique background allows me to understand both the creative and
                technical aspects of product development.
              </p>
              <p className="text-lg text-olive-700 leading-relaxed">
                I believe great design should be accessible, functional, and
                beautiful. Whether I'm conducting user research, designing
                interfaces, or writing code, I always keep the end user at the
                center of my decision-making process.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 rounded-lg glass-effect">
                  <Award className="h-8 w-8 text-olive-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-olive-800">5+ Years</h3>
                  <p className="text-olive-600">Experience</p>
                </div>
                <div className="text-center p-6 rounded-lg glass-effect">
                  <Heart className="h-8 w-8 text-olive-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-olive-800">50+ Projects</h3>
                  <p className="text-olive-600">Completed</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="glass-effect h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-olive-800 mb-6">
                    Quick Facts
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-olive-600" />
                      <span className="text-olive-700">
                        BS in Computer Science (HCI Focus)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-olive-600" />
                      <span className="text-olive-700">
                        Certified UX Designer
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code className="h-5 w-5 text-olive-600" />
                      <span className="text-olive-700">
                        Full-Stack Developer
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-olive-600" />
                      <span className="text-olive-700">
                        User Research Enthusiast
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-olive-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-olive-600 max-w-3xl mx-auto">
              A comprehensive skill set spanning design and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="glass-effect hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <skill.icon className="h-6 w-6 text-olive-600" />
                    <h3 className="font-semibold text-olive-800">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-olive-600">Proficiency</span>
                      <span className="text-olive-800 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-cream-200 rounded-full h-2">
                      <div
                        className="olive-gradient h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-olive-600 max-w-3xl mx-auto">
              Showcasing my best work in UX design and development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-effect hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-olive-600/0 group-hover:bg-olive-600/20 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-olive-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-olive-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-olive-100 text-olive-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="olive-gradient text-white flex-1"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-olive-600 text-olive-600"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-olive-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              What People Say
            </h2>
            <p className="text-xl text-olive-600 max-w-3xl mx-auto">
              Testimonials from clients and colleagues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-olive-500 text-olive-500"
                      />
                    ))}
                  </div>
                  <p className="text-olive-700 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-olive-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-olive-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-olive-600 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your
            project and discuss how we can create something amazing together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-olive-600 mx-auto mb-4" />
                <h3 className="font-semibold text-olive-800 mb-2">Email</h3>
                <p className="text-olive-600">faith.tinarwo@example.com</p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-olive-600 mx-auto mb-4" />
                <h3 className="font-semibold text-olive-800 mb-2">Phone</h3>
                <p className="text-olive-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Linkedin className="h-8 w-8 text-olive-600 mx-auto mb-4" />
                <h3 className="font-semibold text-olive-800 mb-2">LinkedIn</h3>
                <p className="text-olive-600">@faithtinarwo</p>
              </CardContent>
            </Card>
          </div>

          <Link to="/contact">
            <Button
              size="lg"
              className="olive-gradient text-white hover:opacity-90 transition-opacity"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-olive-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-olive-600">
            © 2024 Faith Tinarwo. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-olive-600 hover:text-olive-700 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-olive-600 hover:text-olive-700 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-olive-600 hover:text-olive-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
