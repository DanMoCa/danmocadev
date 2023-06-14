<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/smallprojects', function(){
    return [
        [
            "id" => 1,
            "name" =>  "Laravel Vite Plugin",
            "image" =>  "https://avatars.githubusercontent.com/u/8186664?s=200&v=4",
            "date" =>  "2021-08-01",
            "description" =>  "A Laravel plugin to use Vite as a bundler for your Laravel app"
        ],
        [
            "id" => 2,
            "name" => "Laravel Vite Preset",
            "image" => "https://avatars.githubusercontent.com/u/8186664?s=200&v=4",
            "date" => "2021-08-01",
            "description" => "A Laravel preset to use Vite as a bundler for your Laravel app"
        ]
    ];
})->name('smallprojects');