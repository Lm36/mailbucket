import { Mail } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h1 className="text-xl sm:text-2xl font-bold">Mailbucket</h1>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/about" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p>
                  Mailbucket is a temporary email service designed to protect your privacy. We are committed
                  to transparency about what data we collect and how we use it.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">What We Collect</h2>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium">Email Data</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Temporary email addresses you create</li>
                    <li>Emails received at your temporary addresses</li>
                    <li>Email metadata (sender, subject, size, timestamps)</li>
                    <li>Email content (body, attachments, headers)</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-medium">Technical Data</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Your browser's local storage (to remember your temporary email address)</li>
                    <li>No cookies are used</li>
                    <li>No tracking or analytics scripts</li>
                    <li>No IP address logging</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>To provide the temporary email service functionality</li>
                  <li>To display received emails to you</li>
                  <li>To automatically delete expired email addresses and their contents</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Data Retention</h2>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Temporary email addresses expire automatically (typically within 24 hours)</li>
                  <li>All emails and attachments are deleted when the address expires</li>
                  <li>You can manually delete individual emails at any time</li>
                  <li>No backups are kept after deletion</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Data Sharing</h2>
                <p>
                  We do not share, sell, or transfer your data to third parties. Your emails are stored
                  temporarily on our servers and are only accessible via your unique access token.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Security</h2>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Access tokens are required to view emails</li>
                  <li>Tokens are stored locally in your browser</li>
                  <li>Email content is not indexed or searchable by others</li>
                  <li>HTTPS encryption for all connections (when properly configured)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Your Rights</h2>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Delete any email at any time</li>
                  <li>Create a new temporary address whenever you want</li>
                  <li>Your data is automatically deleted upon expiration</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Open Source</h2>
                <p>
                  Mailbucket is open source software. You can review the code to verify our privacy practices:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><a href="https://github.com/lm36/tempmail-server" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Backend Source Code</a></li>
                  <li><a href="https://github.com/lm36/mailbucket" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Frontend Source Code</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p>
                  If you have questions about this privacy policy or our practices, please review our open
                  source code or open an issue on GitHub.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. Any changes will be reflected by
                  updating the "Last updated" date at the top of this page.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            Mailbucket - Open Source Temporary Email Service •{" "}
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>{" "}
            •{" "}
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
