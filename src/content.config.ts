import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const learn = defineCollection({
	// Load Markdown and MDX files in the `src/content/learn/` directory.
	loader: glob({ base: "./src/content/learn", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Optional date fields so entries can evolve over time like a living library
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		// Simple “gamified” metadata
		level: z.enum(["beginner", "intermediate", "advanced"]).default("beginner"),
		minutes: z.number().int().positive().default(5),
		points: z.number().int().nonnegative().default(10),
	}),
});

export const collections = { blog, learn };
