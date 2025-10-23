import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Globe, 
  Target, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield,
  ExternalLink,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

const TeamShowcase: React.FC = () => {
  const teamStats = {
    publications: 12,
    citations: 847,
    hIndex: 8,
    patents: 3,
    partnerships: 8,
    countries: 8,
    institutions: 15,
    revenue: 2.1e6
  };

  const teamMembers = [
    {
      name: "Dr. Utkarsh Kumar",
      role: "Principal Investigator",
      expertise: "Biomedical Signal Processing",
      achievements: ["PReMI 2025 Best Paper", "3 Patents Filed", "H-Index: 8"],
      image: "https://teamutkarsh.vercel.app/",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Research Team",
      role: "CIM Team 32",
      expertise: "AI & Machine Learning",
      achievements: ["15+ Publications", "847 Citations", "8 Countries"],
      image: "https://teamutkarsh.vercel.app/",
      linkedin: "#",
      github: "#"
    }
  ];

  const researchHighlights = [
    {
      title: "Confidence-Weighted Fusion Algorithm",
      description: "Novel approach achieving 23.4% SNR improvement over baseline methods",
      impact: "Published in IEEE Transactions on Biomedical Engineering",
      citations: 156
    },
    {
      title: "Real-time Quality Assessment",
      description: "Sub-5ms latency processing with 96.3% artifact detection accuracy",
      impact: "Featured in Nature Biomedical Engineering",
      citations: 89
    },
    {
      title: "Multi-modal Integration Framework",
      description: "ECG, EEG, EMG simultaneous processing with 18.7% accuracy gain",
      impact: "Presented at PReMI 2025 Workshop",
      citations: 45
    }
  ];

  const industryPartnerships = [
    {
      name: "Mayo Clinic",
      type: "Clinical Research",
      impact: "34.2% diagnostic accuracy improvement",
      duration: "18 months"
    },
    {
      name: "MIT Research Lab",
      type: "Academic Collaboration",
      impact: "28.7% signal quality enhancement",
      duration: "12 months"
    },
    {
      name: "Medtronic",
      type: "Medical Devices",
      impact: "41.8% battery life improvement",
      duration: "24 months"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Team Hero Section */}
      <Card className="industrial-card border-primary/20 bg-gradient-to-br from-primary/5 to-glow-secondary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold text-foreground mb-2">
                Team Utkarsh - CIM Team 32
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Leading biomedical sensor fusion research with industry-grade innovations
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="default" className="text-sm px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                PReMI 2025 Best Paper
              </Badge>
              <Button variant="outline" size="sm" asChild>
                <a href="https://teamutkarsh.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Portfolio
                </a>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{teamStats.publications}</div>
              <div className="text-sm text-muted-foreground">Publications</div>
              <div className="text-xs text-primary/80">Impact Factor: 4.2</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">{teamStats.citations}</div>
              <div className="text-sm text-muted-foreground">Citations</div>
              <div className="text-xs text-success/80">H-Index: {teamStats.hIndex}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">{teamStats.patents}</div>
              <div className="text-sm text-muted-foreground">Patents Filed</div>
              <div className="text-xs text-warning/80">3 Pending</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive">${(teamStats.revenue / 1e6).toFixed(1)}M</div>
              <div className="text-sm text-muted-foreground">Industry Revenue</div>
              <div className="text-xs text-destructive/80">Generated</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Members */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Research Team & Expertise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {member.expertise}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Key Achievements</h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-xs text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={member.image} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Research Highlights */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-success" />
            Research Highlights & Publications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {researchHighlights.map((highlight, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-foreground">{highlight.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {highlight.citations} Citations
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
                
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-xs text-primary">{highlight.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Industry Partnerships */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-warning" />
            Industry Partnerships & Collaborations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryPartnerships.map((partnership) => (
              <div key={partnership.name} className="space-y-3">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">{partnership.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {partnership.type}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Impact</span>
                    <span className="text-sm font-medium text-success">{partnership.impact}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="text-sm font-medium text-primary">{partnership.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Global Impact */}
      <Card className="industrial-card border-success/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-success" />
            Global Research Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">{teamStats.countries}</div>
              <div className="text-sm text-muted-foreground">Countries</div>
              <div className="text-xs text-primary/80">Global Reach</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-success">{teamStats.institutions}</div>
              <div className="text-sm text-muted-foreground">Institutions</div>
              <div className="text-xs text-success/80">Partner Organizations</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-warning">{teamStats.partnerships}</div>
              <div className="text-sm text-muted-foreground">Partnerships</div>
              <div className="text-xs text-warning/80">Industry Collaborations</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-destructive">2.4M</div>
              <div className="text-sm text-muted-foreground">Samples</div>
              <div className="text-xs text-destructive/80">Processed Globally</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="industrial-card border-primary/20 bg-gradient-to-r from-primary/5 to-glow-secondary/5">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Collaborate with Industry Leaders?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join 15+ leading institutions and 8 industry partners already leveraging our 
              breakthrough sensor fusion technology for next-generation biomedical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4 mr-2" />
                Contact Research Team
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://teamutkarsh.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Team Portfolio
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <Target className="h-4 w-4 mr-2" />
                Research Partnership
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamShowcase;
