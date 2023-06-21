<?php

namespace App\Policies;

use App\Models\Project;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ProjectPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(?User $user): Response
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(?User $user, Project $project): Response
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): Response
    {
        return $user->is(User::where('email','dan.moca1973@gmail.com')->first()) ?
            Response::allow() :
            Response::deny('You are not allowed to create projects.');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Project $project): Response
    {
        return $user->is(User::where('email','dan.moca1973@gmail.com')->first()) ?
            Response::allow() :
            Response::deny('You are not allowed to create projects.');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Project $project): Response
    {
        return $user->is(User::where('email','dan.moca1973@gmail.com')->first()) ?
            Response::allow() :
            Response::deny('You are not allowed to create projects.');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Project $project): Response
    {
        return $user->is(User::where('email','dan.moca1973@gmail.com')->first()) ?
            Response::allow() :
            Response::deny('You are not allowed to create projects.');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Project $project): Response
    {
        return $user->is(User::where('email','dan.moca1973@gmail.com')->first()) ?
            Response::allow() :
            Response::deny('You are not allowed to create projects.');
    }
}
