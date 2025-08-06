import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, BookOpen, Code, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

const About = () => {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <Navbar />

      {/* About Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-olive-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center mb-20">
          <div className="space-y-6 lg:pr-8">
            <p className="text-lg text-white-700 leading-relaxed">
              I'm a multidisciplinary designer and developer with 3+ years of experience crafting digital products that balance form and function. 
              With a background in both design and development, 
              I bridge the gap between creativity and code to build user-centered solutions.
            </p>
            <p className="text-lg text-olive-700 leading-relaxed">
              From research to interface design to implementation, 
              I focus on making digital experiences accessible, intuitive, and beautiful.
            </p>
            <p className="text-lg text-white-700 leading-relaxed">
                I'm currently studying Computer Science with a focus on Human-Computer Interaction 
                and hold a UX Design certification from Uxcel. 
                I help teams build products that are both functional and 
                user-friendly by bridging design and development.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 rounded-lg glass-effect">
                <Award className="h-8 w-8 text-olive-600 mx-auto mb-2" />
                <h3 className="font-semibold text-olive-800">3+ Years</h3>
                <p className="text-white-600">Experience</p>
              </div>
              <div className="text-center p-6 rounded-lg glass-effect">
                <Heart className="h-8 w-8 text-olive-600 mx-auto mb-2" />
                <h3 className="font-semibold text-olive-800">20+ Projects</h3>
                <p className="text-white-600">Completed</p>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <Card className="glass-effect h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white-800 mb-6">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-olive-600" />
                    <span className="text-olive-700">
                      Associate Degree in Computer Science (UoPeople)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-olive-600" />
                    <span className="text-olive-700">
                      Certified UX Designer (Uxcel)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-olive-600" />
                    <span className="text-olive-700">Software Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-olive-600" />
                    <span className="text-olive-700">
                      User Experience Enthusiast
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text-white mb-8">
            My Design Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-white-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white-800 mb-3">
                  User-Centered
                </h3>
                <p className="text-olive-600">
                  Every design decision is backed by user research and real
                  feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-white-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white-800 mb-3">
                  Technically Informed
                </h3>
                <p className="text-olive-600">
                  Understanding development constraints leads to better, more
                  feasible designs.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-white-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white-800 mb-3">
                  Impact Driven
                </h3>
                <p className="text-olive-600">
                  Design should solve real problems and create meaningful value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-olive-600 mb-8 max-w-2xl mx-auto">
            Ready to create something amazing? I'd love to discuss your project
            and explore how we can bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="olive-gradient text-white">
                Get In Touch
              </Button>
            </Link>
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

export default About;
