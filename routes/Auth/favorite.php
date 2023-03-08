<?php

use Illuminate\Support\Facades\Route;

Route::get('/favorite', function () { return view('main.index');});
Route::get('/favorite/show', function () { return view('main.index');});