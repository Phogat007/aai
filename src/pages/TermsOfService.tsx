
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - aai";
  }, []);

  return (
    <PageLayout title="Terms of Service">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: March 1, 2024
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By accessing or using the aai platform and services, you agree to be bound by these 
                    Terms of Service and all applicable laws and regulations. If you do not agree with 
                    any of these terms, you are prohibited from using our services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Description of Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    aai provides access to specialized AI assistants trained on authoritative sources 
                    in various domains including education, law, medicine, finance, and culinary arts.
                  </p>
                  <h3 className="font-semibold">Service Features:</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• AI-powered expert consultations</li>
                    <li>• Source citations and confidence indicators</li>
                    <li>• API access for integrations</li>
                    <li>• Team collaboration tools</li>
                    <li>• Usage analytics and insights</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. User Accounts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="font-semibold">Account Registration</h3>
                  <p className="text-muted-foreground">
                    You must provide accurate and complete information when creating an account. 
                    You are responsible for maintaining the confidentiality of your account credentials.
                  </p>
                  
                  <h3 className="font-semibold">Account Responsibilities</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Keep your login information secure</li>
                    <li>• Notify us immediately of unauthorized use</li>
                    <li>• Use the service in compliance with these terms</li>
                    <li>• Maintain accurate account information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Acceptable Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="font-semibold">Permitted Uses</h3>
                  <p className="text-muted-foreground">
                    You may use our services for legitimate business, educational, and personal purposes 
                    in accordance with these terms and applicable laws.
                  </p>
                  
                  <h3 className="font-semibold">Prohibited Uses</h3>
                  <p className="text-muted-foreground">You agree not to use our services to:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Violate any applicable laws or regulations</li>
                    <li>• Infringe on intellectual property rights</li>
                    <li>• Distribute harmful or malicious content</li>
                    <li>• Attempt to gain unauthorized access to our systems</li>
                    <li>• Use the service for illegal or harmful activities</li>
                    <li>• Reverse engineer or attempt to extract our AI models</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. AI Service Limitations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="font-semibold">No Professional Advice</h3>
                  <p className="text-muted-foreground">
                    Our AI experts provide information and guidance but do not constitute professional advice. 
                    For medical, legal, financial, or other professional matters, consult qualified professionals.
                  </p>
                  
                  <h3 className="font-semibold">Accuracy Disclaimer</h3>
                  <p className="text-muted-foreground">
                    While we strive for accuracy, AI responses may contain errors. Always verify important 
                    information through authoritative sources and use your professional judgment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="font-semibold">Our Rights</h3>
                  <p className="text-muted-foreground">
                    aai and its licensors own all rights to the platform, AI models, and related technology. 
                    These terms do not grant you ownership rights to our intellectual property.
                  </p>
                  
                  <h3 className="font-semibold">Your Content</h3>
                  <p className="text-muted-foreground">
                    You retain ownership of content you submit but grant us a license to use it to provide 
                    and improve our services. You represent that you have the right to grant such license.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Payment and Billing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="font-semibold">Subscription Plans</h3>
                  <p className="text-muted-foreground">
                    We offer various subscription plans with different features and usage limits. 
                    Pricing and features are subject to change with reasonable notice.
                  </p>
                  
                  <h3 className="font-semibold">Payment Terms</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Payments are processed securely through third-party providers</li>
                    <li>• Subscriptions automatically renew unless cancelled</li>
                    <li>• Refunds are provided according to our refund policy</li>
                    <li>• Late payments may result in service suspension</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Privacy and Data Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, 
                    and protect your information. By using our services, you agree to our Privacy Policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Service Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We strive to maintain high availability but cannot guarantee uninterrupted service. 
                    We may temporarily suspend service for maintenance, updates, or due to circumstances 
                    beyond our control. We will provide reasonable notice when possible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, aai shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages arising from your use of 
                    our services. Our total liability shall not exceed the amount paid by you for 
                    our services in the 12 months preceding the claim.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Termination</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="font-semibold">Termination by You</h3>
                  <p className="text-muted-foreground">
                    You may terminate your account at any time by following the account deletion process 
                    in your account settings or contacting our support team.
                  </p>
                  
                  <h3 className="font-semibold">Termination by Us</h3>
                  <p className="text-muted-foreground">
                    We may suspend or terminate your account if you violate these terms or engage in 
                    activities that harm our service or other users. We will provide reasonable notice 
                    when possible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>12. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may modify these terms from time to time. We will notify you of material changes 
                    and your continued use of our services constitutes acceptance of the modified terms. 
                    If you do not agree to the changes, you should discontinue use of our services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>13. Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These terms are governed by the laws of the State of California, United States, 
                    without regard to conflict of law principles. Any disputes will be resolved in 
                    the courts of San Francisco County, California.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>14. Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: legal@aai.com</p>
                    <p>Address: 123 AI Street, San Francisco, CA 94105</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
