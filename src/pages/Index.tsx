
import React from 'react';
import { Download, Mail, Phone, Linkedin, MessageCircle, ExternalLink, Github, Calendar, MapPin, Code, Palette, Users, Target, Lightbulb, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const workExperience = [
    {
      title: "Front-End Developer",
      company: "EaseMyTrip",
      period: "June 2025 – Present",
      description: "Building scalable hotel and travel modules using Angular",
      highlights: ["Integrated Swiper carousels", "REST APIs", "Dynamic hotel offer UIs"],
      technologies: ["Angular", "TypeScript", "RxJS", "Swiper", "SCSS"]
    },
    {
      title: "Software Engineer",
      company: "Clavax Technologies",
      period: "Sept 2024 – Present",
      description: "Designed data dashboards for casino operations",
      highlights: ["Added pie charts", "Variance tables", "Collapsible lists"],
      technologies: ["Angular", "GitLab", "Microsoft Azure"]
    },
    {
      title: "Software Engineer",
      company: "Berryworks Ventures Pvt Ltd",
      period: "Sept 2023 – Sept 2024",
      description: "Developed a chatbot UI and integrated REST APIs",
      highlights: ["Sign-in with Slack & Google", "AWS deployment"],
      technologies: ["Angular", "React", "Node.js", "AWS"]
    },
    {
      title: "Angular Developer",
      company: "DUCAT",
      period: "Sept 2022 – March 2023",
      description: "Built NG-MART E-commerce site",
      highlights: ["Angular 14", "RxJS", "Lazy loading", "A/B testing"],
      technologies: ["Angular", "RxJS", "TypeScript"]
    }
  ];

  const projects = [
    {
      title: "Casino Analytics Dashboard",
      description: "Interactive charts & trend visualizations for transaction data",
      technologies: ["Angular", "Chart.js"],
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: "NG-MART E-Commerce Platform",
      description: "Product listing, filtering, cart UI with lazy loading and optimization",
      technologies: ["Angular", "TypeScript", "RxJS"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Chatbot Interface",
      description: "Conversational UI with API & third-party integration (Slack, Google login)",
      technologies: ["React", "Node.js", "REST APIs"],
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: "Hotel Offers UI (EaseMyTrip)",
      description: "Built using Swiper and JSON-based dynamic rendering",
      technologies: ["Angular", "Swiper", "TypeScript"],
      icon: <Target className="w-6 h-6" />
    }
  ];

  const skills = {
    "Frontend": ["Angular", "React", "TypeScript", "JavaScript"],
    "UI/Styling": ["Tailwind CSS", "Bootstrap 5", "Angular Material", "HTML5", "CSS3"],
    "Tools": ["GitHub", "GitLab", "JIRA", "AWS"],
    "Other": ["Next.js", "RxJS", "REST APIs"]
  };

  const strengths = [
    { name: "Hard-working", icon: <Zap className="w-5 h-5" /> },
    { name: "Eye for Detail", icon: <Target className="w-5 h-5" /> },
    { name: "UI & UX Focused", icon: <Palette className="w-5 h-5" /> },
    { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" /> },
    { name: "Design Thinking", icon: <Code className="w-5 h-5" /> },
    { name: "Team Player", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">Deepika Garg</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Deepika Garg
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 mb-8">
              Front-End Developer
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Crafting clean, scalable, and user-centric UIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I am a self-motivated Front-End Developer with 2+ years of experience building web applications. 
                Skilled in Angular, React, TypeScript, and modern UI/UX design. I aim to deliver highly performant, 
                accessible, and responsive digital experiences.
              </p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-slate-600 mr-3">{strength.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{strength.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-600 mt-1">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-slate-100 rounded-lg mr-4">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-slate-300 text-slate-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <Badge key={idx} className="bg-slate-900 text-white hover:bg-slate-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Code className="w-6 h-6 text-slate-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-slate-600 mb-2">MDU, Rohtak</p>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Aug 2019 – July 2022</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Also completed Intermediate & Matriculation from CBSE Board
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Get In Touch</CardTitle>
                <CardDescription>
                  Ready to discuss your next project or opportunity? Let's connect!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="mailto:gargdeepika2001@gmail.com" 
                  className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Mail className="w-5 h-5 text-slate-600 mr-3" />
                  <span className="text-gray-700">gargdeepika2001@gmail.com</span>
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-5 h-5 text-slate-600 mr-3" />
                  <span className="text-gray-700">Call Me</span>
                </a>
                <a 
                  href="https://linkedin.com/in/deepika-garg" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-slate-600 mr-3" />
                  <span className="text-gray-700">View Profile</span>
                  <ExternalLink className="w-4 h-4 ml-auto text-slate-400" />
                </a>
                <a 
                  href="https://wa.me/1234567890?text=Hi%20Deepika,%20I'd%20like%20to%20discuss%20a%20project%20opportunity" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-slate-600 mr-3" />
                  <span className="text-gray-700">Message Me</span>
                  <ExternalLink className="w-4 h-4 ml-auto text-slate-400" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Quick Message</CardTitle>
                <CardDescription>
                  Send me a message directly from here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Deepika Garg. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
