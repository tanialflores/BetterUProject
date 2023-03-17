<?php

use Illuminate\Support\Facades\Route;

Route::get('/profile', function () { return view('main.index');});
Route::get('/profile/levels', function () { return view('main.index');});
Route::get('/profile/edit', function () { return view('main.index');});
Route::get('/profile/edit-address', function () { return view('main.index');});
Route::get('/profile/address', function () { return view('main.index');});
Route::get('/profile/new-address', function () { return view('main.index');});