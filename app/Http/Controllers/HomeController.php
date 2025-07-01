<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(): \Inertia\Response
    {
        $projects = Project::orderBy('created_at','desc')->take(6)->get();
        return Inertia::render('Home', compact('projects'));
    }
}
