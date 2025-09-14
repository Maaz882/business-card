
import chalk from "chalk";

export const theme = {
  primary: "#00E0FF",          // name, key highlights
  accent: "#FF6F61",           // handle, command
  gold: "#F4D35E",             // company, website
  twitter: "#1DA1F2",
  github: "#6E5494",
  linkedin: "#0A66C2",
  email: "#D44638",
  gradient: ["#00E0FF", "#FF6F61"], // banner/header gradient
  borderName: "cyanBright",    // boxen keyword
  borderHex: "#64D2FF",        // FYI: visual reference (boxen still needs a name)
  dim: "#9AA4B2"
};

const data = {
  name: chalk.hex(theme.primary).bold("🚀 Maaz Hasan"),
  handle: chalk.hex(theme.accent)("@maazhasan"),
  work: `${chalk.white("Software Developer | AI/ML Engineering Intern")} ${chalk.hex(theme.gold)("at National Informatics Centre")}`,
  twitter: "https://twitter.com/maazhasan",
  github: "https://github.com/Maaz882",
  linkedin: "https://linkedin.com/in/maaz-hasan-8a845224a/",
//   web: "https://portfolio-topaz-tau-21.vercel.app/",
  email: "hasanmaaz49@gmail.com",
  card: chalk.white("npx") + " " + chalk.hex(theme.accent)("maazhasan"),

  // Pre-colored link labels (optional convenience)
  linksColored: {
    twitter: chalk.hex(theme.twitter)("https://twitter.com/maazhasan"),
    github: chalk.hex(theme.github)("https://github.com/Maaz882"),
    linkedin: chalk.hex(theme.linkedin)("https://linkedin.com/in/maaz-hasan-8a845224a/"),
    // web: chalk.hex(theme.gold)("https://portfolio-topaz-tau-21.vercel.app/"),
    email: chalk.hex(theme.email)("hasanmaaz49@gmail.com")
  }
};

export default data;
