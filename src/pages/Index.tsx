
import React, { useState, useEffect } from 'react';
import { Download, Mail, Phone, Linkedin, MessageCircle, ExternalLink, Github, Calendar, MapPin, Code, Palette, Users, Target, Lightbulb, Zap, ArrowRight, Star, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
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
      description: "A comprehensive analytics platform designed for casino operations management. Features real-time data visualization with interactive charts for transaction monitoring, player behavior analysis, and revenue tracking. The dashboard provides operators with insights into game performance, peak hours analysis, and detailed financial reports with customizable date ranges.",
      technologies: ["Angular", "Chart.js", "TypeScript", "RxJS", "Angular Material", "SCSS"],
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "NG-MART E-Commerce Platform",
      description: "A full-featured e-commerce application built with modern Angular architecture. Includes advanced product filtering, search functionality, shopping cart management, and user authentication. Features lazy loading for optimal performance, responsive design for all devices, and integrated payment gateway with order tracking capabilities.",
      technologies: ["Angular", "TypeScript", "RxJS", "Bootstrap", "Node.js", "MongoDB"],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Chatbot Interface",
      description: "An intelligent conversational UI designed for customer support automation. Features natural language processing, multi-platform integration with Slack and Google services, real-time messaging, and automated response generation. Includes user session management, conversation history, and seamless handoff to human agents when needed.",
      technologies: ["React", "Node.js", "REST APIs", "Socket.io", "Tailwind CSS", "Express.js"],
      icon: <MessageCircle className="w-6 h-6" />,
      gradient: "from-green-400 to-emerald-400"
    },
    {
      title: "Hotel Offers UI (EaseMyTrip)",
      description: "A dynamic hotel booking interface featuring interactive offer displays and promotional content. Built with Swiper for smooth carousel navigation, JSON-based content management for easy updates, and responsive design optimized for mobile booking. Includes real-time pricing updates, availability checking, and integrated booking flow with payment processing.",
      technologies: ["Angular", "Swiper", "TypeScript", "SCSS", "RxJS", "REST APIs"],
      icon: <Target className="w-6 h-6" />,
      gradient: "from-orange-400 to-red-400"
    }
  ];

  const skillCategories = [
    {
      category: "Frontend Frameworks",
      skills: [
        { name: "Angular", level: 90, color: "from-red-500 to-red-600", icon: "⚡" },
        { name: "React", level: 85, color: "from-blue-500 to-blue-600", icon: "⚛️" },
        { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-700", icon: "📘" },
        { name: "JavaScript", level: 92, color: "from-yellow-500 to-yellow-600", icon: "🟨" }
      ]
    },
    {
      category: "UI & Styling",
      skills: [
        { name: "Tailwind CSS", level: 90, color: "from-cyan-500 to-cyan-600", icon: "🎨" },
        { name: "Bootstrap 5", level: 85, color: "from-purple-500 to-purple-600", icon: "🅱️" },
        { name: "Angular Material", level: 80, color: "from-indigo-500 to-indigo-600", icon: "🎯" },
        { name: "CSS3", level: 95, color: "from-blue-400 to-blue-500", icon: "🎪" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "GitHub", level: 88, color: "from-gray-700 to-gray-800", icon: "🐙" },
        { name: "GitLab", level: 80, color: "from-orange-500 to-orange-600", icon: "🦊" },
        { name: "AWS", level: 75, color: "from-orange-400 to-orange-500", icon: "☁️" },
        { name: "RxJS", level: 85, color: "from-pink-500 to-pink-600", icon: "🔄" }
      ]
    }
  ];

  const strengths = [
    { name: "Hard-working", icon: <Zap className="w-5 h-5" />, color: "text-yellow-500" },
    { name: "Eye for Detail", icon: <Target className="w-5 h-5" />, color: "text-red-500" },
    { name: "UI & UX Focused", icon: <Palette className="w-5 h-5" />, color: "text-purple-500" },
    { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" />, color: "text-blue-500" },
    { name: "Design Thinking", icon: <Code className="w-5 h-5" />, color: "text-green-500" },
    { name: "Team Player", icon: <Users className="w-5 h-5" />, color: "text-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-float dark:mix-blend-normal dark:opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed dark:mix-blend-normal dark:opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow dark:mix-blend-normal dark:opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-xl border-b border-border z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Deepika Garg
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 rounded-full border-2 hover:scale-110 transition-all duration-300"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full border-2"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full border-2"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('about')} className="text-left text-muted-foreground hover:text-primary transition-colors">About</button>
                <button onClick={() => scrollToSection('experience')} className="text-left text-muted-foreground hover:text-primary transition-colors">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-muted-foreground hover:text-primary transition-colors">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-muted-foreground hover:text-primary transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium text-primary border border-primary/20 animate-pulse-gentle backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Available for opportunities
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-gradient leading-tight">
              Deepika Garg
            </h1>
            <h2 className="text-3xl md:text-4xl text-muted-foreground mb-8 animate-slide-up font-light">
              Front-End Developer
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up-delayed leading-relaxed">
              Crafting clean, scalable, and user-centric UIs with modern technologies and innovative design thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up-delayed">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-4 text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 group rounded-full"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 text-primary hover:bg-primary/5 px-8 py-4 text-lg shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 rounded-full backdrop-blur-sm"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
                <MessageCircle className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I am a self-motivated Front-End Developer with 2+ years of experience building web applications. 
                Skilled in Angular, React, TypeScript, and modern UI/UX design. I aim to deliver highly performant, 
                accessible, and responsive digital experiences that make a difference.
              </p>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
              {strengths.map((strength, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex items-center p-6">
                    <div className={`${strength.color} mr-3 transform transition-transform group-hover:scale-110`}>
                      {strength.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">{strength.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="group border-0 shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-[1.02] bg-card/50 backdrop-blur-sm border border-primary/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-muted-foreground mt-1">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 border border-primary/20">
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
      <section id="projects" className="py-20 px-6 bg-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group border-0 shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 overflow-hidden relative bg-card/50 backdrop-blur-sm border border-primary/10">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl mr-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences with modern technologies
            </p>
          </div>
          
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in">
                <h3 className="text-3xl font-semibold text-foreground mb-12 text-center relative">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {category.category}
                  </span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <Card 
                      key={skillIndex}
                      className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 border border-primary/10 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          <div className={`px-3 py-1 bg-gradient-to-r ${skill.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                            {skill.level}%
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        
                        <div className="relative">
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse shadow-lg`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          
                          <div 
                            className={`absolute top-0 h-2 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                      <div className="absolute bottom-6 left-8 w-1 h-1 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping delay-100"></div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-8 py-4 border border-primary/20 shadow-xl backdrop-blur-sm">
              <span className="text-muted-foreground font-medium">Always learning:</span>
              <div className="flex space-x-3">
                <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md animate-bounce hover:scale-110 transition-transform">Next.js</Badge>
                <Badge className="bg-gradient-to-r from-violet-500 to-violet-600 text-white shadow-md animate-bounce delay-100 hover:scale-110 transition-transform">Vue.js</Badge>
                <Badge className="bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md animate-bounce delay-200 hover:scale-110 transition-transform">Docker</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-card/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</h2>
          <Card className="group border-0 shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:scale-[1.02] bg-card/50 backdrop-blur-sm border border-primary/10">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-muted-foreground mb-2">MDU, Rohtak</p>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span>Aug 2019 – July 2022</span>
                  </div>
                  <p className="text-muted-foreground mt-4">
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
          <h2 className="text-5xl font-bold text-foreground mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-2xl hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Get In Touch</CardTitle>
                <CardDescription>
                  Ready to discuss your next project or opportunity? Let's connect!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="mailto:gargdeepika2001@gmail.com" 
                  className="flex items-center p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl hover:from-primary/10 hover:to-accent/10 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group border border-primary/10"
                >
                  <Mail className="w-5 h-5 text-primary mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">gargdeepika2001@gmail.com</span>
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl hover:from-primary/10 hover:to-accent/10 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group border border-primary/10"
                >
                  <Phone className="w-5 h-5 text-primary mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">Call Me</span>
                </a>
                <a 
                  href="https://linkedin.com/in/deepika-garg" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl hover:from-primary/10 hover:to-accent/10 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group border border-primary/10"
                >
                  <Linkedin className="w-5 h-5 text-primary mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">View Profile</span>
                  <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://wa.me/1234567890?text=Hi%20Deepika,%20I'd%20like%20to%20discuss%20a%20project%20opportunity" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl hover:from-primary/10 hover:to-accent/10 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group border border-primary/10"
                >
                  <MessageCircle className="w-5 h-5 text-primary mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">Message Me</span>
                  <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Quick Message</CardTitle>
                <CardDescription>
                  Send me a message directly from here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 rounded-full">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border relative overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-muted-foreground">
            © 2024 Deepika Garg. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
