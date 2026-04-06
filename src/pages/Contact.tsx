import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const formId = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;
const formAction = formId ? `https://formspree.io/f/${formId}` : null;

export function Contact() {
  if (!formAction) {
    return (
      <div className="mx-auto max-w-lg space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="text-muted-foreground">Send a message through Formspree.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Configure Formspree</CardTitle>
            <CardDescription>
              Create a form at{" "}
              <a href="https://formspree.io/" className="underline underline-offset-4" target="_blank" rel="noreferrer">
                formspree.io
              </a>
              , then add your form ID to a <code className="font-mono text-xs">.env</code> file:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm">VITE_FORMSPREE_FORM_ID=your_id</pre>
            <p className="mt-4 text-sm text-muted-foreground">
              Rebuild the site so Vite embeds the variable. For local dev, restart{" "}
              <code className="font-mono text-xs">npm run dev</code>.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-muted-foreground">I will reply by email. Fields marked * are required.</p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <form action={formAction} method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="Message from ruchipatel1.github.io" />
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" name="email" required autoComplete="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" name="name" autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" name="message" required placeholder="Write your message…" />
            </div>
            <Button type="submit">Send</Button>
          </form>
        </CardContent>
      </Card>
      <p className="text-center text-xs text-muted-foreground">
        After you submit, Formspree shows a thank-you page unless you switch to an AJAX integration.
      </p>
    </div>
  );
}
