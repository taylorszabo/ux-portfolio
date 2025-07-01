<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index(): \Inertia\Response
    {
        $projects = Project::orderBy('created_at','desc')->paginate(9);
        return Inertia::render('Work/Index', compact('projects'));
    }

    public function show(Project $project): \Inertia\Response
    {
        return Inertia::render('Work/Show', compact('project'));
    }
}
