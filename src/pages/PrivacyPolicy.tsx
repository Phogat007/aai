
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - aai";
  }, []);

  return (
    <PageLayout title="Privacy Policy">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: March 1, 2024
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="font-semibold">Personal Information</h3>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support. This includes your name, email address, 
                    and any other information you choose to provide.
                  </p>
                  
                  <h3 className="font-semibold">Usage Information</h3>
                  <p className="text-muted-foreground">
                    We collect information about how you interact with our AI experts, including your 
                    questions, conversation history, and usage patterns. This helps us improve our services 
                    and provide better responses.
                  </p>
                  
                  <h3 className="font-semibold">Technical Information</h3>
                  <p className="text-muted-foreground">
                    We automatically collect certain technical information, including your IP address, 
                    browser type, device information, and usage analytics to maintain and improve our platform.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Provide and maintain our AI expert services</li>
                    <li>• Improve and personalize your experience</li>
                    <li>• Train and enhance our AI models</li>
                    <li>• Send you important updates and notifications</li>
                    <li>• Provide customer support</li>
                    <li>• Ensure security and prevent fraud</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Information Sharing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We do not sell, trade, or rent your personal information to third parties. We may share 
                    your information only in the following circumstances:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• With your explicit consent</li>
                    <li>• To comply with legal obligations</li>
                    <li>• To protect our rights and safety</li>
                    <li>• With trusted service providers who assist us in operating our platform</li>
                    <li>• In connection with a business transfer or acquisition</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Data Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Encryption of data in transit and at rest</li>
                    <li>• Regular security assessments and audits</li>
                    <li>• Access controls and authentication</li>
                    <li>• Employee training on data protection</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Access: Request access to your personal information</li>
                    <li>• Correction: Request correction of inaccurate information</li>
                    <li>• Deletion: Request deletion of your personal information</li>
                    <li>• Portability: Request a copy of your data in a portable format</li>
                    <li>• Restriction: Request restriction of processing</li>
                    <li>• Objection: Object to certain types of processing</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, please contact us at privacy@aai.com.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Data Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We retain your personal information only for as long as necessary to provide our services 
                    and fulfill the purposes outlined in this policy. When you delete your account, we will 
                    delete your personal information within 30 days, except where we are required to retain 
                    it for legal or regulatory purposes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. International Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure that such transfers are conducted in accordance with applicable data protection 
                    laws and include appropriate safeguards to protect your information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our services are not intended for children under 13 years of age. We do not knowingly 
                    collect personal information from children under 13. If we become aware that we have 
                    collected such information, we will take steps to delete it promptly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any material 
                    changes by posting the new policy on this page and updating the "Last updated" date. 
                    We encourage you to review this policy periodically.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: privacy@aai.com</p>
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

export default PrivacyPolicy;
