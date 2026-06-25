
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[40vh] bg-primary skew-y-[5deg] origin-top-right -z-10 opacity-90 shadow-xl" />

      <div className="w-full max-w-md text-center bg-card rounded-xl shadow-2xl p-10 border-t-4 border-primary">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="h-10 w-10 text-primary" />
        </div>

        <h1 className="text-6xl font-serif font-bold text-primary mb-2">
          404
        </h1>

        <h2 className="text-2xl font-bold mb-4">Page not found</h2>

        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <button className="w-full h-12 text-base font-bold inline-flex items-center justify-center rounded-md bg-primary text-white hover:opacity-90 transition">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}