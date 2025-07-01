<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title'       => 'Mobile Banking Redesign',
                'excerpt'     => 'Overhauled IA, added biometric auth and dark-mode.',
                'tags'        => ['UX', 'FinTech', 'React Native'],
                'cover_image' => 'projects/banking.jpg',
                'body'        => file_get_contents(database_path('seeders/markdown/banking.md')),
            ],
            [
                'title'       => 'E-commerce Accessibility Audit',
                'excerpt'     => 'WCAG 2.2 AA in six weeks—boosted conversion 18 %.',
                'tags'        => ['a11y', 'Laravel', 'Tailwind'],
                'cover_image' => 'projects/a11y.jpg',
                'body'        => file_get_contents(database_path('seeders/markdown/a11y.md')),
            ],
            // …add 3–5 more rows
        ];

        foreach ($projects as $p) {
            Project::create([
                'title'       => $p['title'],
                'slug'        => Str::slug($p['title']),
                'excerpt'     => $p['excerpt'],
                'tags'        => $p['tags'],
                'cover_image' => $p['cover_image'],
                'body'        => $p['body'],
            ]);
        }
    }
}
