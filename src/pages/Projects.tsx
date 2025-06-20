import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const projects = [
    {
      title: "SaaS Dashboard Redesign",
      description:
        "Complete UX/UI redesign for a B2B analytics platform, improving user satisfaction by 60% and reducing onboarding time by 45%. Conducted user interviews, created wireframes, and designed a comprehensive design system.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      tags: ["UX Design", "UI Design", "Figma", "User Research", "Prototyping"],
      link: "#",
      github: "#",
      type: "design",
      category: "Web Design",
      year: "2024",
    },
    {
      title: "E-commerce React App",
      description:
        "Full-stack e-commerce platform built with React, TypeScript, and Node.js, featuring real-time inventory management, secure payment processing with Stripe, and responsive design for optimal mobile experience.",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
      link: "#",
      github: "#",
      type: "development",
      category: "Web Development",
      year: "2024",
    },
    {
      title: "Mobile App Design System",
      description:
        "Comprehensive design system and component library for a fintech mobile app, ensuring consistency across 20+ screens. Created reusable components, style guides, and interaction patterns.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
      tags: ["Design System", "Figma", "Component Library", "Mobile Design"],
      link: "#",
      github: "#",
      type: "design",
      category: "Mobile Design",
      year: "2023",
    },
    {
      title: "Real-time Chat Platform",
      description:
        "WebSocket-based chat application with React frontend and Express backend, supporting 1000+ concurrent users. Features include real-time messaging, file sharing, and user presence indicators.",
      image:
        "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg",
      tags: ["React", "WebSocket", "Express.js", "Redis", "Socket.io"],
      link: "#",
      github: "#",
      type: "development",
      category: "Web Development",
      year: "2023",
    },
    {
      title: "Healthcare Dashboard UI",
      description:
        "User interface design for a medical dashboard helping doctors track patient data and appointments. Focused on accessibility, clear data visualization, and efficient workflows for healthcare professionals.",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      tags: ["UI Design", "Healthcare", "Data Visualization", "Accessibility"],
      link: "#",
      github: "#",
      type: "design",
      category: "Web Design",
      year: "2023",
    },
    {
      title: "Task Management API",
      description:
        "RESTful API built with Node.js and Express for a task management application. Features user authentication, real-time updates, file uploads, and comprehensive testing suite with 95% code coverage.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      link: "#",
      github: "#",
      type: "development",
      category: "Backend Development",
      year: "2022",
    },
  ];

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "design", label: "Design" },
    { value: "development", label: "Development" },
    { value: "Web Design", label: "Web Design" },
    { value: "Mobile Design", label: "Mobile Design" },
    { value: "Web Development", label: "Web Development" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.type === selectedFilter ||
            project.category === selectedFilter,
        );

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <Navbar />

      {/* Projects Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-olive-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my best work in UX design and development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={selectedFilter === filter.value ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.value)}
              className={
                selectedFilter === filter.value
                  ? "olive-gradient text-white"
                  : "border-olive-600 text-olive-600 hover:bg-olive-50"
              }
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-effect hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-olive-600/0 group-hover:bg-olive-600/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-olive-800">
                    {project.year}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className={
                      project.type === "design"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }
                  >
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-olive-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-olive-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-olive-100 text-olive-700 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="olive-gradient text-white flex-1"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-olive-600 text-olive-600"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="glass-effect text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <p className="text-olive-600">Projects Completed</p>
            </CardContent>
          </Card>
          <Card className="glass-effect text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <p className="text-olive-600">Happy Clients</p>
            </CardContent>
          </Card>
          <Card className="glass-effect text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <p className="text-olive-600">Years Experience</p>
            </CardContent>
          </Card>
          <Card className="glass-effect text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <p className="text-olive-600">Client Satisfaction</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-6">
            Like What You See?
          </h2>
          <p className="text-lg text-olive-600 mb-8 max-w-2xl mx-auto">
            These are just a few examples of my work. I'd love to discuss your
            project and show you how I can help bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="olive-gradient text-white">
                Start a Project
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-olive-600 text-olive-600"
              >
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Chatbot />
    </div>
  );
};

export default Projects;
