import { categoryToSlug, type Article } from "@/lib/articles";
import type { Project } from "@/lib/projects";
import type { Crumb } from "./jsonld";

/**
 * Breadcrumb trails — the single source for both the visible <Breadcrumbs> UI
 * (in page components) and the BreadcrumbList JSON-LD (emitted from route
 * templates), so the two never disagree.
 */

const HOME: Crumb = { name: "Home", path: "/" };
const DISPATCH: Crumb = { name: "The Dispatch", path: "/news" };
const WORK: Crumb = { name: "Work", path: "/work" };

export function breadcrumbsForArticle(article: Article): Crumb[] {
  return [
    HOME,
    DISPATCH,
    {
      name: article.category,
      path: `/news/category/${categoryToSlug(article.category)}`,
    },
    { name: article.title, path: `/news/${article.id}` },
  ];
}

export function breadcrumbsForCategory(category: string): Crumb[] {
  return [
    HOME,
    DISPATCH,
    { name: category, path: `/news/category/${categoryToSlug(category)}` },
  ];
}

export function breadcrumbsForProject(project: Project): Crumb[] {
  return [HOME, WORK, { name: project.title, path: `/work/${project.id}` }];
}

export function breadcrumbsForService(): Crumb[] {
  return [HOME, { name: "Services", path: "/services" }];
}
