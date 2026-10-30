<script setup lang="ts">
import { onMounted, ref } from "vue";

const year = new Date().getFullYear();

const projects = [
  {
    method: "GET",
    path: "/projects/pg-pritani_qa",
    status: "200 OK",
    name: "Pritani — Rice Mill Management QA",
    desc: "Quality assurance for a rice-milling management application covering farmers, customers, purchases, milling, stock, and sales across admin, operator, and cashier roles. Test design and Playwright automation in progress.",
    stack: ["Playwright", "TypeScript", "PostgreSQL"],
    link: "https://github.com/Muhless/pg_pritani_qa",
  },
  {
    method: "GET",
    path: "/projects/KAS_aesthetic_clinic",
    status: "200 OK",
    name: "KAS Aesthetic Clinic — E2E Test Suite",
    desc: "End-to-end test automation for a role-based clinic management system (admin, doctor, nurse). Covers authentication, patient management, and reservation flows, with session reuse via storageState and isolated parallel execution.",
    stack: ["Playwright", "TypeScript", "E2E Testing", "MySQL"],
    link: "https://github.com/Muhless/KAS_Aesthetic_Clinic",
  },
  {
    method: "GET",
    path: "/projects/pritani-qa",
    status: "200 OK",
    name: "Pritani — Rice Mill Management QA",
    desc: "Quality assurance for a rice-milling management application covering farmers, customers, purchases, milling, stock, and sales across admin, operator, and cashier roles. Test design and Playwright automation in progress.",
    stack: ["Playwright", "TypeScript", "PostgreSQL"],
    link: "https://github.com/Muhless",
  },
];

const skillGroups = [
  {
    key: "automation",
    values: ["Playwright", "Selenium", "Appium"],
  },
  {
    key: "testing",
    values: [
      "Test Case Design",
      "Manual Testing",
      "E2E Testing",
      "Regression Testing",
    ],
  },
  { key: "api", values: ["REST API Testing", "JWT Auth", "Postman"] },
  { key: "database", values: ["PostgreSQL", "MySQL"] },
  { key: "tooling", values: ["JavaScript", "Docker", "Git", "Linux"] },
  {
    key: "documentation",
    values: ["Test Plans", "Test Case", "Test Scenario", "Bug Reports"],
  },
];

const navOpen = ref(false);

const isDark = ref(true);
onMounted(() => {
  isDark.value = document.documentElement.classList.contains("dark");
});
function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}
</script>

<template>
  <div
    class="min-h-screen bg-ink text-paper font-mono selection:bg-paper selection:text-ink"
  >
    <!-- NAV -->
    <header
      class="fixed top-0 inset-x-0 z-30 border-b border-line bg-ink/90 backdrop-blur"
    >
      <nav
        class="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between text-[13px]"
      >
        <a
          href="#top"
          class="font-display font-semibold tracking-tightest text-base"
        >
          muhless<span class="text-muted">.dev</span>
        </a>
        <div class="hidden sm:flex items-center gap-6 text-muted">
          <a href="#about" class="hover:text-paper transition-colors focus-ring"
            >about</a
          >
          <a
            href="#projects"
            class="hover:text-paper transition-colors focus-ring"
            >projects</a
          >
          <a
            href="#skills"
            class="hover:text-paper transition-colors focus-ring"
            >skills</a
          >
          <a
            href="#contact"
            class="hover:text-paper transition-colors focus-ring"
            >contact</a
          >
          <span class="flex items-center gap-1.5 text-paper">
            <span class="relative flex h-1.5 w-1.5">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-paper opacity-60"
              />
              <span
                class="relative inline-flex rounded-full h-1.5 w-1.5 bg-paper"
              />
            </span>
            open to work
          </span>
          <button
            type="button"
            class="focus-ring flex items-center gap-1.5 border border-line rounded-sm px-2.5 py-1 text-paper hover:border-paper transition-colors"
            :aria-label="
              isDark ? 'Switch to light mode' : 'Switch to dark mode'
            "
            @click="toggleTheme"
          >
            <span aria-hidden="true">{{ isDark ? "●" : "○" }}</span>
            <span>{{ isDark ? "dark" : "light" }}</span>
          </button>
        </div>
        <button
          class="sm:hidden focus-ring"
          aria-label="Toggle menu"
          @click="navOpen = !navOpen"
        >
          [{{ navOpen ? "x" : "≡" }}]
        </button>
      </nav>
      <div
        v-if="navOpen"
        class="sm:hidden border-t border-line px-6 py-4 flex flex-col gap-3 text-[13px] text-muted"
      >
        <a
          href="#about"
          class="hover:text-paper focus-ring"
          @click="navOpen = false"
          >about</a
        >
        <a
          href="#projects"
          class="hover:text-paper focus-ring"
          @click="navOpen = false"
          >projects</a
        >
        <a
          href="#skills"
          class="hover:text-paper focus-ring"
          @click="navOpen = false"
          >skills</a
        >
        <a
          href="#contact"
          class="hover:text-paper focus-ring"
          @click="navOpen = false"
          >contact</a
        >
        <button
          type="button"
          class="focus-ring flex items-center gap-1.5 w-fit border border-line rounded-sm px-2.5 py-1 text-paper hover:border-paper transition-colors"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <span aria-hidden="true">{{ isDark ? "●" : "○" }}</span>
          <span>{{ isDark ? "dark" : "light" }}</span>
        </button>
      </div>
    </header>

    <main id="top" class="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <!-- HERO -->
      <section class="mb-28">
        <p class="text-muted text-[13px] mb-4">
          $ whoami<span class="caret" />
        </p>
        <h1
          class="font-display font-semibold tracking-tightest leading-[0.95] text-[clamp(2.5rem,8vw,5rem)]"
        >
          Muhta Nuryadi
        </h1>
        <p class="mt-3 text-muted text-lg sm:text-xl">
          QA Engineer · Test Automation
        </p>

        <div
          class="mt-10 border border-line bg-panel rounded-sm p-5 sm:p-6 text-[13px] leading-relaxed overflow-x-auto"
        >
          <pre class="whitespace-pre"><span class="text-muted">{</span>
  <span class="text-muted">"role"</span>: <span class="text-paper">"QA Engineer / SDET"</span>,
  <span class="text-muted">"focus"</span>: <span class="text-paper">"Test automation · E2E testing · Quality assurance"</span>,
  <span class="text-muted">"stack"</span>: [<span class="text-paper">"Playwright", "TypeScript", "REST API", "PostgreSQL", "Docker"</span>],
  <span class="text-muted">"status"</span>: <span class="text-paper">"open to QA opportunities"</span>
<span class="text-muted">}</span></pre>
        </div>

        <div class="mt-8 flex flex-wrap gap-3 text-[13px]">
          <a
            href="#projects"
            class="focus-ring border border-paper px-4 py-2 rounded-sm hover:bg-paper hover:text-ink transition-colors"
          >
            view projects →
          </a>
          <a
            href="#contact"
            class="focus-ring border border-line px-4 py-2 rounded-sm text-muted hover:text-paper hover:border-paper transition-colors"
          >
            get in touch
          </a>
        </div>
      </section>

      <!-- ABOUT -->
      <section id="about" class="mb-28 scroll-mt-20">
        <div class="flex items-center gap-3 text-[13px] mb-6">
          <span class="text-paper">GET</span>
          <span class="text-muted">/about</span>
          <span class="ml-auto text-muted">200 OK</span>
        </div>
        <p
          class="text-[15px] sm:text-base leading-[1.9] text-paper/90 max-w-2xl"
        >
          I am a QA engineer focused on test automation and software quality. I
          design structured test cases, build end-to-end test suites with
          Playwright and TypeScript, and report defects with clear reproduction
          steps so that teams can resolve them quickly.
        </p>
        <p
          class="mt-4 text-[15px] sm:text-base leading-[1.9] text-paper/90 max-w-2xl"
        >
          My undergraduate thesis covered a web-based clinic CRM built with the
          Rapid Application Development methodology. Having worked on the
          development side, I approach testing with an understanding of how
          systems are built and where they are most likely to fail.
        </p>
      </section>

      <!-- PROJECTS -->
      <section id="projects" class="mb-28 scroll-mt-20">
        <div class="flex items-center gap-3 text-[13px] mb-6">
          <span class="text-paper">GET</span>
          <span class="text-muted">/projects</span>
          <span class="ml-auto text-muted"
            >200 OK · {{ projects.length }} results</span
          >
        </div>

        <div class="border border-line rounded-sm divide-y divide-line">
          <a
            v-for="p in projects"
            :key="p.path"
            :href="p.link"
            target="_blank"
            rel="noopener noreferrer"
            class="route-row group block px-5 py-5 sm:px-6 sm:py-6 hover:bg-panel transition-colors focus-ring first:border-t-0"
          >
            <div class="flex items-baseline gap-3 text-[13px]">
              <span class="text-muted shrink-0">{{ p.method }}</span>
              <span class="truncate">{{ p.path }}</span>
              <span class="ml-auto text-muted shrink-0">{{ p.status }}</span>
            </div>
            <h3
              class="mt-3 font-display font-semibold text-xl sm:text-2xl group-hover:underline decoration-1 underline-offset-4"
            >
              {{ p.name }}
            </h3>
            <p class="mt-2 text-[14px] leading-relaxed text-muted max-w-2xl">
              {{ p.desc }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="t in p.stack"
                :key="t"
                class="text-[11px] border border-line rounded-sm px-2 py-1 text-muted"
                >{{ t }}</span
              >
            </div>
          </a>
        </div>
      </section>

      <!-- SKILLS -->
      <section id="skills" class="mb-28 scroll-mt-20">
        <div class="flex items-center gap-3 text-[13px] mb-6">
          <span class="text-paper">GET</span>
          <span class="text-muted">/skills</span>
          <span class="ml-auto text-muted">200 OK</span>
        </div>

        <dl
          class="border border-line rounded-sm divide-y divide-line text-[13px]"
        >
          <div
            v-for="g in skillGroups"
            :key="g.key"
            class="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4 px-5 py-4 sm:px-6"
          >
            <dt class="text-muted">{{ g.key }}</dt>
            <dd class="flex flex-wrap gap-x-2 gap-y-1 text-paper">
              <span v-for="(v, i) in g.values" :key="v"
                >{{ v
                }}<span v-if="i < g.values.length - 1" class="text-muted"
                  >,</span
                ></span
              >
            </dd>
          </div>
        </dl>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="scroll-mt-20">
        <div class="flex items-center gap-3 text-[13px] mb-6">
          <span class="text-paper">POST</span>
          <span class="text-muted">/contact</span>
        </div>

        <h2
          class="font-display font-semibold tracking-tightest text-[clamp(2rem,6vw,3.5rem)] leading-[1.05]"
        >
          Let's build quality<br />into every release.
        </h2>

        <div class="mt-10 flex flex-col gap-4 text-[14px] max-w-md">
          <a
            href="mailto:nuryadi.muhta@gmail.com"
            class="focus-ring flex items-center justify-between border border-line rounded-sm px-5 py-4 hover:border-paper transition-colors"
          >
            <span class="text-muted">email</span>
            <span>nuryadi.muhta@gmail.com →</span>
          </a>
          <a
            href="https://wa.me/628871165551"
            class="focus-ring flex items-center justify-between border border-line rounded-sm px-5 py-4 hover:border-paper transition-colors"
          >
            <span class="text-muted">phone</span>
            <span>08871165551</span>
          </a>
          <a
            href="https://www.linkedin.com/in/muhta-nuryadi-7b4025238/"
            class="focus-ring flex items-center justify-between border border-line rounded-sm px-5 py-4 hover:border-paper transition-colors"
          >
            <span class="text-muted">linkedin</span>
            <span>Muhta Nuryadi</span>
          </a>
          <a
            href="https://github.com/Muhless"
            target="_blank"
            rel="noopener noreferrer"
            class="focus-ring flex items-center justify-between border border-line rounded-sm px-5 py-4 hover:border-paper transition-colors"
          >
            <span class="text-muted">github</span>
            <span>github.com/Muhless →</span>
          </a>
        </div>
      </section>
    </main>

    <footer class="border-t border-line">
      <div
        class="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between text-[12px] text-muted"
      >
        <span>© {{ year }} Muhta Nuryadi. All rights reserved.</span>
        <span>Built with Nuxt 3 · Tailwind CSS</span>
      </div>
    </footer>
  </div>
</template>
