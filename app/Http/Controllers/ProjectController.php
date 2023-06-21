<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{

    public function __construct()
    {
        $this->authorizeResource(Project::class, 'project');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Projects',[
            'projects' => Project::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Projects/CreateProject');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return Inertia::render('Projects/Project', [
            'project' => $project
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('Projects/EditProject', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $data = $request->validate([
            'name' => ['string'],
            'description' => ['string'],
            'link' => ['string'],
            'file' => ['image','nullable']
        ]);

        if($request->hasFile('file')){
//            $request->file('file')->store('communities/logos', 'public');
            $data['image'] = '/storage/'.$request->file('file')->store('projects/thumbnails','public');
        }

        $project->update($data);

        return redirect()->route('projects.edit', $project)->with(
            [
                'toast' => [
                    'message' => 'Project updated successfully!',
                    'type' => 'success',
                ]
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
