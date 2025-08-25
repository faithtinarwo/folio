import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ["UX Designer", "Product Designer","Software Developer"];

  const skills = [
    { name: "UX/UI Design", level: 95, icon: Palette },
    { name: "Wireframing & Prototyping", level: 90, icon: Code },
    { name: "User Research", level: 88, icon: Users },
    { name: "Design Systems", level: 92, icon: Lightbulb },
    { name: "Figma & Adobe XD", level: 95, icon: Award },
    { name: "Frontend Development", level: 87, icon: Code },
  ];

  const projects = [
    {
      title: "School Website Design and Development",
      description:
        "Designed and developed a user-friendly school website from the ground up. Conducted stakeholder interviews to understand user needs, created wireframes and high-fidelity prototypes, and implemented a responsive design system to ensure accessibility across all devices.",
      image: "/images/school.png",
      tags: ["UX Design", "UI Design", "Figma", "User Research", "Prototyping"],
      link: "#",
      github: "#",
      type: "design",
    },
    {
      title: "Agentfree - Voice AI Application",
      description:
        "Designed and developed a voice AI application that facilitates seamless communication. Built the frontend using React and TypeScript, integrated WebSocket for real-time functionality, and ensured optimal user experience across multiple devices.",
      image: "/images/agentfree.png",
      tags: ["React", "TypeScript", "WebSocket", "Voice AI", "Frontend"],
      link: "#",
      github: "#",
      type: "development",
    },
    {
      title: "TeleOncology - Telemedicine Platform UI/UX",
      description:
        "Designed the user interface for a telemedicine platform connecting patients with oncology specialists. Focused on creating an empathetic, accessible design that simplifies complex medical workflows while maintaining HIPAA compliance standards.",
      image: "/images/tele logo.png",
      tags: ["UI/UX Design", "Healthcare", "Accessibility", "Figma"],
      link: "#",
      github: "#",
      type: "design",
    },
    {
      title: "TradeWise - Forex Trading Platform",
      description:
        "Developed a comprehensive forex trading platform with real-time market data, advanced charting tools, and risk management features. Built using modern web technologies to ensure fast, reliable trading experiences.",
      image: "/images/tradewise.png",
      tags: ["React", "Financial Tech", "Real-time Data", "Trading"],
      link: "#",
      github: "#",
      type: "development",
    },
    {
      title: "CyberSecurity Dashboard Design",
      description:
        "Designed an intuitive cybersecurity dashboard for monitoring network threats and security incidents. Emphasized clear data visualization and quick action workflows to help security teams respond effectively to threats.",
      image: "/images/cyber.png",
      tags: ["Dashboard Design", "Data Visualization", "Security", "UX"],
      link: "#",
      github: "#",
      type: "design",
    },
    {
      title: "Gaseous - Environmental Monitoring App",
      description:
        "Created a mobile application for environmental monitoring and gas detection. Developed both the user interface design and frontend implementation, focusing on real-time data presentation and emergency alert systems.",
      image: "/images/gaseous.png",
      tags: ["Mobile App", "Environmental Tech", "React Native", "IoT"],
      link: "#",
      github: "#",
      type: "development",
    },
  ];

  const testimonials = [
    {
      name: "Joylin Murerwa",
      role: "Administrator at Gaseouse Solutions",
      content:
        "Faith's ability to bridge design and development is exceptional. She delivered a product that exceeded all our expectations.",
      rating: 5,
    },
    {
      name: "Natasha",
      role: "Principal at New Day School",
      content:
        "Working with Faith was a game-changer. Her UX insights and technical skills helped us build something truly innovative.",
      rating: 5,
    },
    {
      name: "Mike",
      role: "Cyber Security at Nextflex",
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
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="gradient-text">Faith Tinarwo</span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium">
                <span className="inline-block transition-all duration-500 ease-in-out gradient-text">
                  {roles[currentRole]}
                </span>
              </p>
              <p className="text-lg text-white max-w-lg leading-relaxed">
                Designer who codes, I design and build user experiences that drive business results. While most designers hand off static mockups, 
                I ship functional prototypes and collaborate seamlessly with engineering teams.
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
              <a href="/Faith-CV.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-olive-600 text-olive-600 hover:bg-olive-50"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/faithtinarwo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-olive-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/faith-tinarwo-5abaa1327/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-olive-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:fayyic@gmail.com"
                className="text-white hover:text-olive-600 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-[32rem] h-[32rem] mx-auto rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe43ae5a6d0bf43e2922fee832226a58b%2F9c300cf4ef554642886c74cab83809ee?format=webp&width=800"
                alt="Faith Tinarwo - UX Design workspace with prototyping notebook and UI UX design blocks"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-900/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-3">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <Code className="h-5 w-5" />
                    <span className="font-semibold text-white">
                      Design × Development
                    </span>
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
            <p className="text-xl text-white max-w-3xl mx-auto">
              Passionate about creating digital experiences that make a
              difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
            <div className="space-y-6 lg:pr-8">
              <p className="text-lg text-white leading-relaxed">
                I'm Faith Tinarwo, a{" "}
                <span className="text-olive-600 font-semibold">
                  UX Designer and Software Developer
                </span>
                &nbsp;based in Johannesburg, South Africa. My journey blends a
                passion for intuitive design with hands-on coding, allowing me
                to deliver seamless digital products from concept to launch.
              </p>
              <p className="text-lg text-white leading-relaxed">
                I believe great{" "}
                <span className="text-olive-600 font-semibold">design</span>{" "}
                should be accessible, functional, and beautiful. Whether I'm
                conducting{" "}
                <span className="text-olive-600 font-semibold">
                  user research
                </span>
                , designing interfaces, or writing{" "}
                <span className="text-olive-600 font-semibold">code</span>, I
                always keep the end user at the center of my decision-making
                process.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 rounded-lg glass-effect">
                  <Award className="h-8 w-8 text-olive-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-white">3+ Years</h3>
                  <p className="text-white">Experience</p>
                </div>
                <div className="text-center p-6 rounded-lg glass-effect">
                  <Heart className="h-8 w-8 text-olive-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-white">20+ Projects</h3>
                  <p className="text-white">Completed</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="glass-effect h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Quick Facts
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-olive-600" />
                      <span className="text-white">
                        Degree in Computer Science
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-olive-600" />
                      <span className="text-white">
                        Google UX Design Certified
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code className="h-5 w-5 text-olive-600" />
                      <span className="text-white">Full-Stack Developer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-olive-600" />
                      <span className="text-white">
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
            <p className="text-xl text-white max-w-3xl mx-auto">
              A comprehensive skill set spanning{" "}
              <span className="text-olive-600 font-semibold">design</span> and{" "}
              <span className="text-olive-600 font-semibold">development</span>
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
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-olive-600">Proficiency</span>
                      <span className="text-white font-medium">
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
            <p className="text-xl text-white max-w-3xl mx-auto">
              Showcasing my best work in{" "}
              <span className="text-olive-600 font-semibold">UX design</span>{" "}
              and{" "}
              <span className="text-olive-600 font-semibold">development</span>
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white mb-4 leading-relaxed">
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
            <p className="text-xl text-white max-w-3xl mx-auto">
              Testimonials from{" "}
              <span className="text-olive-600 font-semibold">clients</span> and{" "}
              <span className="text-olive-600 font-semibold">colleagues</span>
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
                  <p className="text-white mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
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
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Ready to bring your{" "}
            <span className="text-olive-600 font-semibold">ideas</span> to life?
            I'd love to hear about your{" "}
            <span className="text-olive-600 font-semibold">project</span> and
            discuss how we can create something amazing together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-olive-600 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-white">fayyic@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-olive-600 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <p className="text-white">+27 717 944 4157</p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Linkedin className="h-8 w-8 text-olive-600 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-white">@faith-tinarwo</p>
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
          <p className="text-white">
            © 2024 Faith Tinarwo. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/faithtinarwo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-olive-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/faith-tinarwo-5abaa1327/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-olive-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:fayyic@gmail.com"
              className="text-white hover:text-olive-600 transition-colors"
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
