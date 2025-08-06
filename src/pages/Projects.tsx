
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
      title: "School Website Design and Development",
      description:
        "Designed and developed a user-friendly school website from the ground up. Conducted stakeholder interviews to understand user needs, created wireframes and high-fidelity prototypes, and implemented a responsive design system to ensure accessibility across all devices.",
      image: "/images/school.png",
      tags: ["UX Design", "UI Design", "Figma", "User Research", "Prototyping"],
      link: "https://new-day-website.vercel.app/",
      github: "https://github.com/faithtinarwo/New-Day-website",
      type: "design",
      category: "Web Design & Development",
      year: "2025",
    },
    {
      title: "NextFlex Cybersecurity Website",
      description:
        "Redesigned and redeveloped a cybersecurity website to clearly communicate services and build user trust. Focused on creating a clean, professional interface that highlights threat protection solutions, incident response, and security awareness resources, while ensuring a responsive and accessible user experience.",
      image: "/images/cyber.png",
      tags: ["React", "TypeScript", "Node.js", "Html", "Stripe API"],
      link: "https://nextflex-cyber-shield.vercel.app/",
      github: "https://github.com/faithtinarwo/nextflex-cyber-shield",
      type: "development",
      category: "Web Development",
      year: "2024",
    },
    {
      title: "TradeWise Mobile App ",
      description:
        "Empowering Small Traders Through Voice-First AI Solutions",
      image: "images/tradewise.png",
      tags: ["Design System", "Figma", "Component Library", "Mobile Design"],
      link: "https://tradewise-y2o4.onrender.com/",
      github: "https://github.com/faithtinarwo/coding_vibe_hackathon",
      type: "design",
      category: "Mobile Design",
      year: "2025",
    },
    {
      title: "Agentfree Properties",
      description:
        "Connecting Property Owners with Tenants Directly.",
      image:
        "images/agentfree.png",
      tags: ["Figma",],
      link: "https://www.notion.so/faithuxdesigner/Agentfree-Properties-Connecting-Property-Owners-with-Tenants-Directly-project-200d0cdff58c80d9a1f7e98564ed6316",
      github: "#",
      type: "design",
      category: "Product Design",
      year: "2023",
    },
    {
      title: "Telemedicine App Design",
      description:
        "Telemedicine is a digital healthcare platform aimed at providing patients with a seamless way to connect with healthcare professionals.",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      tags: ["UI Design", "Healthcare", "Data Visualization", "Accessibility"],
      link: "https://telemedicine-app-2ceg.onrender.com/",
      github: "#",
      type: "design",
      category: "Web Design & Development",
      year: "2024",
    },
    {
      title: "Gaseous Solutions",
      description:
        "Gaseous Solutions, a growing LP gas supplier in Endicott Springs, South Africa, underwent a complete digital transformation to modernize their business operations and expand their market reach.",
      image: "images/gaseous.png",
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      link: "https://gaseoussolutions.onrender.com",
      github: "https://github.com/faithtinarwo/gaseoussolutions",
      type: "development",
      category: "Website Development",
      year: "2024",
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
          <h1 className="text-4xl md:text-6xl font-bold gradient-text-white mb-6">
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
              <div className="text-3xl font-bold gradient-text mb-2">20+</div>
              <p className="text-white-600">Projects Completed</p>
            </CardContent>
          </Card>
          <Card className="glass-effect text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">20+</div>
              <p className="text-white-600">Happy Clients</p>
            </CardContent>
          </Card>
          <Card className="glass-effect text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <p className="text-white-600">Years Experience</p>
            </CardContent>
          </Card>
          <Card className="glass-effect text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <p className="text-white-600">Client Satisfaction</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text-white mb-6">
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
