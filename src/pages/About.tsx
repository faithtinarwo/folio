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
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            About Me
          </h1>
          <p className="text-xl text-olive-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center mb-20">
          <div className="space-y-6 lg:pr-8">
            <p className="text-lg text-olive-700 leading-relaxed">
              I'm a multidisciplinary designer and developer with over 5 years
              of experience creating digital products that users love. My unique
              background allows me to understand both the creative and technical
              aspects of product development.
            </p>
            <p className="text-lg text-olive-700 leading-relaxed">
              I believe great design should be accessible, functional, and
              beautiful. Whether I'm conducting user research, designing
              interfaces, or writing code, I always keep the end user at the
              center of my decision-making process.
            </p>
            <p className="text-lg text-olive-700 leading-relaxed">
              My journey started with a Computer Science degree focused on
              Human-Computer Interaction, where I discovered my passion for
              bridging the gap between technical possibilities and human needs.
              Since then, I've worked with startups and established companies,
              helping them create products that not only function well but also
              delight their users.
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
                    <span className="text-olive-700">Full-Stack Developer</span>
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

        {/* Philosophy Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text mb-8">
            My Design Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-olive-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-olive-800 mb-3">
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
                <Code className="h-12 w-12 text-olive-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-olive-800 mb-3">
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
                <Heart className="h-12 w-12 text-olive-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-olive-800 mb-3">
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
          <h2 className="text-3xl font-bold gradient-text mb-6">
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
