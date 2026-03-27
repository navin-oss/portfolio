import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

const Counter = ({ from = 0, to, suffix = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.floor(value) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [from, to, suffix, isInView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
};

const StatCard = ({ label, value, suffix = "", delay = 0 }) => (
  <ScrollReveal delay={delay} direction="up">
    <div className="flex flex-col items-center p-6 border bg-gradient-to-b from-storm to-indigo rounded-2xl border-white/10">
      <p className="text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-aqua to-lavender bg-clip-text">
        <Counter to={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-sm text-neutral-400">{label}</p>
    </div>
  </ScrollReveal>
);

const GitHubStats = () => {
  const [stats, setStats] = useState({
    public_repos: 62,
    followers: 15,
    prs_merged: 158,
  });

  useEffect(() => {
    fetch("https://api.github.com/users/navin-oss")
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos) {
          setStats((prev) => ({
            ...prev,
            public_repos: data.public_repos,
            followers: data.followers,
          }));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="c-space section-spacing" id="github">
      <ScrollReveal>
        <h2 className="text-heading">GitHub Activity</h2>
        <p className="mt-3 subtext">Open source contributions and coding activity</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-3">
        <StatCard label="Public Repositories" value={stats.public_repos} suffix="+" delay={0} />
        <StatCard label="PRs Merged" value={stats.prs_merged} suffix="" delay={0.15} />
        <StatCard label="Followers" value={stats.followers} suffix="" delay={0.3} />
      </div>

      <ScrollReveal delay={0.4} className="mt-8">
        <div className="p-4 overflow-hidden border bg-gradient-to-b from-storm to-indigo rounded-2xl border-white/10">
          <p className="mb-4 text-sm text-neutral-400">Contribution Graph</p>
          <img
            src={`https://ghchart.rshah.org/5c33cc/navin-oss`}
            alt="Navin's GitHub contribution graph"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default GitHubStats;
