import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, Users, Lightbulb, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

const Skills = () => {
  const skillCategories = [
    {
      title: "UX/UI Design",
      icon: Palette,
      skills: [
        { name: "User Experience (UX) Design", level: 95 },
        { name: "Wireframing", level: 90 },
        { name: "Prototyping", level: 92 },
        { name: "Visual Design", level: 88 },
        { name: "Interaction Design", level: 85 },
        { name: "Usability Testing", level: 90 },
      ],
    },
    {
      title: "Design Tools",
      icon: Award,
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 85 },
        { name: "Miro", level: 80 },
        { name: "Canva", level: 78 },
      ],
    },
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "Tailwind CSS", level: 70 }
      ],
    },
    {
      title: "Backend & Tools",
      icon: Lightbulb,
      skills: [
        { name: "Python", level: 75 },
        { name: "GitHub", level: 90 },,
        { name: "MySQL", level: 80 },
      ],
    },
  ];

  const certifications = [
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      year: "2022",
      credential: "",
    },
    {
      title: "Frontend Web Development",
      issuer: "Power Learn Project",
      year: "2024",
      credential: "",
    },
    {
      title: "University of People Associate Degree",
      issuer: "University of People",
      year: "2026",
      credential: "",
    },
    {
      title: "UX Professional Certificate",
      issuer: "Uxcel",
      year: "2023",
      credential: "",
    },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <Navbar />

      {/* Skills Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text-white mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-olive-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning design and development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="glass-effect">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="h-8 w-8 text-olive-600" />
                  <h2 className="text-2xl font-bold text-white-800">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-olive-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-olive-600 text-sm">
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
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold gradient-text- white text-center mb-12">
            Certifications & Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-6 w-6 text-olive-600 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-olive-800 mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-olive-600 mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-4">
                        <Badge
                          variant="secondary"
                          className="bg-olive-100 text-olive-700"
                        >
                          {cert.year}
                        </Badge>
                        <span className="text-sm text-olive-500">
                          {cert.credential}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold gradient-text-white text-center mb-12">
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Figma",
              "Adobe XD",
              "Canva",
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "MySQL",
              "HTML5",
              "CSS3",
              "JavaScript",
              "Tailwind CSS",
              "GitHub",
            ].map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className="bg-olive-100 text-olive-700 px-4 py-2 text-base"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text-white mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-olive-600 mb-8 max-w-2xl mx-auto">
            Let's leverage these skills to bring your vision to life. I'm always
            excited to tackle new challenges and learn new technologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" className="olive-gradient text-white">
                View My Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-olive-600 text-olive-600"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Chatbot />
    </div>
  );
};

export default Skills;
