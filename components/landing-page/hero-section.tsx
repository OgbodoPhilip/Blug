import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Eye,
  EyeClosedIcon,
  Pen,
  RocketIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import { AuroraText } from "../ui/aurora-text";
import StatsCard from "./stats-card";

const LiveBadge = () => {
  return (
    <Badge
      variant="outline"
      className="px-4 gap-4 py-2 mb-8 text-sm backdrop-blur-sm"
    >
      <span className="relative h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="absolute inline-flex h-2 w-2 rounded-full bg-primary " />
      </span>
      <span className="text-muted-foreground">
        {" "}
        Join thousands of creators sharing their works 😊{" "}
      </span>
    </Badge>
  );
};

const statsData = [
  { icon: RocketIcon, value: "10K+", label: "Projects Shared" },
  { icon: UsersIcon, value: "5K+", label: "Active Users" },
  { icon: Eye, value: "500+", label: "Daily Visits" },
  { icon: Pen, value: "3000+", label: "Positive Reviews" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-12 py-6 text-center">
          <LiveBadge />

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-light mb-6 max-w-5xl">
            {" "}
            Stay <AuroraText>Updated</AuroraText> with all the Trending
            information across the <AuroraText>Globe</AuroraText>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            A Community platform for sharing and discovering the latest news and
            trends on various topics including technology, health,
            entertainment, sports, and more, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="text-base px-8 shadow-2xl rounded-2xl"
            >
              <Link href="/submitproject">
                <SparklesIcon size="lg" />
                Share Your Project
              </Link>
            </Button>
            <Button
              variant="secondary"
              asChild
              size="lg"
              className="text-base px-8 shadow-2xl rounded-2xl"
            >
              <Link href="/explore">
                Explore Projects
                <ArrowRight size="lg" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 sm:w-full max-w-2xl">
            {statsData.map((stat, index) => (
              <StatsCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
